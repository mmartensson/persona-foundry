import { readLines } from 'https://deno.land/std/io/read_lines.ts';

import {
    quicktype,
    InputData,
    jsonInputForTargetLanguage
} from "npm:quicktype-core@^21.0.10";

import { parse as parseWSC } from '../src/wsc/wsc-code.js';

// Assumed to be run from the deno/ directory, with a dump in ../external and updating ../src/data/
// deno run --allow-read --allow-write --allow-env mysqldump-to-typescript.ts
const MYQSL_DUMP_FILE = '../external/wanderers-guide/WG-deb-db-1-28-23.sql';
const OUTPUT_DIR = '../src/data';

// FIXME: animalcompanions has INSERT w/ 40-ish lines, but does not get a single row generated

type Handler = (line: string) => Promise<void>;

type ColumnType = 'boolean' | 'string' | 'number' | 'timestamp';

interface Column {
    name: string;
    type: ColumnType;
    optional: boolean;
    isArray?: boolean;
}

type TableData = Record<string, TableRowData>;
type TableRowData = Record<string, unknown>;

const RE_CREATE_TABLE = /^CREATE TABLE `(.*?)`/;
const RE_END_CREATE_TABLE = /^\) ENGINE/;

const RE_INSERT_INTO = /^INSERT INTO `(.*?)` VALUES (.*);$/;

const RE_COL_DEF = /^\s+`(.*?)`\s+(\w+)/;
const RE_PRIMARY_KEY = /^\s*PRIMARY KEY\s+\((.*?)\)/;
const RE_KEYS = /`(.*?)`+/g;

//const RE_VALUES_ROW = /\((?:(?:\d+|NULL|'([^']|\\')+'),?)+\)/g;
//const RE_VALUES_COL = /(\d+|NULL|'(?:\\'|[^'])+')/g;
const RE_VALUES_ROW = /\((?:(?:\d+|''|NULL|'([^']|\\')+'),?)+\),?/g;
const RE_VALUES_COL = /(\d+|''|NULL|'(?:\\'|[^'])+')/g;

const RE_DB_TIMESTAMP = /^'\d{4}-\d\d-\d\d\s\d\d:\d\d:\d\d'$/;

type Importable = [table: string, prop: string];

// Describes a table which will be used only to generate an array for another table
interface ArrayBuildingTable {
    hostTable: string;
    hostID: string;
    arrayName: string;
    contentID: string;
    typeOfID: Importable;
}

// A table which will receive arrays
interface ArrayDestinationTable {
    builder: ArrayBuildingTable;
    rows: ArrayDestinationTableRow[]; // 
}

interface ArrayDestinationTableRow {
    id: string;         // ancestries["123"] is string (while ancestries["123"].id is number)
    array: number[];    // ancestries["123"].langIDs = [1,2,3] are numbers
}

// Hardcoded table configuration, forcing column of a given name (of any table) to have its
// contents split by newlines into arrays.
const newlineSplittingColumns = new Set(['code']);

// Hardcoded table configuration that should result in one table having an array of
// identifiers into another, while at the same time dropping the table that would 
// facilitate if remaining in an SQL context.
const arrayBuildingTables: Record<string, ArrayBuildingTable> = {
    ancestrylanguages: {
        hostTable: 'ancestries',
        hostID:    'ancestryID',
        arrayName: 'langIDs',
        contentID: 'langID',
        typeOfID: [ 'languages', 'LanguageID' ],
    },
    feattags: {
        hostTable: 'feats',
        hostID:    'featID',
        arrayName: 'tagIDs',
        contentID: 'tagID',
        typeOfID: [ 'tags', 'TagID' ],
    },
    taggedextras: {
        hostTable: 'extras',
        hostID:    'extraID',
        arrayName: 'tagIDs',
        contentID: 'tagID',
        typeOfID: [ 'tags', 'TagID' ],
    },
    taggeditems: {
        hostTable: 'items',
        hostID:    'itemID',
        arrayName: 'tagIDs',
        contentID: 'tagID',
        typeOfID: [ 'tags', 'TagID' ],
    },
    taggedspells: {
        hostTable: 'spells',
        hostID:    'spellID',
        arrayName: 'tagIDs',
        contentID: 'tagID',
        typeOfID: [ 'tags', 'TagID' ],
    },
}

// Currenty a table can only host one array.
const arrayDestinations: Record<string, ArrayDestinationTable> = {};

// Tables collected during SQL Parsing
const tableContents: Record<string, TableData> = {};
const tableColumns: Record<string, Column[]> = {};

// Intented to be fancy state machine but ended up with only two states
let handler: Handler;

// Populated while going through createTableHandler, used by the RE_INSERT_INTO code
let table = '';
let columns: Column[] = [];
let primaryKey: string[] = [];

// deno-lint-ignore require-await
const createTableHandler: Handler = async line => {
    // console.log('Gathering info for', table, columns.length);
    { // Column definition
        const arr = RE_COL_DEF.exec(line);
        if (arr !== null) {
            const [,name,typedef] = arr;

            let type: ColumnType = 'string';
            if (typedef === 'datetime')
                type = 'timestamp';
            else if (typedef === 'tinyint')
                type = 'boolean';
            else if (typedef === 'int')
                type = 'number';

            const optional = !line.includes('NOT NULL');

            const column: Column = { name, type, optional };

            columns.push(column);
            return;
        }
    }

    { // Primary key
        const arr = RE_PRIMARY_KEY.exec(line);
        if (arr !== null) {
            const parts: string[] = [];
            let key_arr: RegExpExecArray | null;
            while ((key_arr = RE_KEYS.exec(line)) !== null) {
               parts.push(key_arr[1]); 
            }
            primaryKey = parts;
            return;
        }
    }

    if (RE_END_CREATE_TABLE.test(line)) {
        handler = betweenHandler;
        return;
    }
}

const betweenHandler: Handler = async line => {
    { // Create table
        const arr = RE_CREATE_TABLE.exec(line);
        if (arr !== null) {
            table = arr[1];
            columns = [];
            primaryKey = [];
            handler = createTableHandler;
            return;
        }
    }

    { // Insert into
        const arr = RE_INSERT_INTO.exec(line);
        if (arr !== null) {
            handler = betweenHandler;

            const [,t,data] = arr;

            if (t !== table) {
                console.log(`Expected INSERT INTO for ${table}, but got for ${t}`);
                return;
            }

            // console.log(`BEGIN values for ${table}`);

            const tableData: Record<string, Record<string, unknown>> = {};


            if (table === 'animalcompanions') {
                // FIXME: This does not match w/ RE_VALUES_ROW
                // console.log('animalcompanions data', data);
            }

            let row_arr: RegExpExecArray | null;
            while ((row_arr = RE_VALUES_ROW.exec(data)) !== null) {
                const row = trimEnds(row_arr[0]);
//console.log('ROW', JSON.stringify(row_arr));

                const rowData: Record<string, unknown> = { table };

                let col_arr: RegExpExecArray | null;
                const cols = [...columns];

                while ((col_arr = RE_VALUES_COL.exec(row)) !== null) {
//console.log('COL', JSON.stringify(col_arr));
                    const value = col_arr[1];
                    const col = cols.shift();

                    if (value === 'NULL' || !col)
                        continue;

                    // 2020-07-20 05:43:29
                    if (col?.name == 'createdAt' && !RE_DB_TIMESTAMP.test(value)) {
                        throw Error('Broken timestamp: ' + value + ' [' + table + "]; "+ row);
                    }

                    if (col.type === 'number') {
                        rowData[col.name] = +value;
                    } else if (col.type === 'boolean') {
                        rowData[col.name] = !!value;
                    } else if (col.type === 'timestamp') {
                        rowData[col.name] = trimEnds(value).replace(' ', 'T');
                    } else {
                        const trimmed = trimEnds(value)
                            // Backslashes (used for escaping) should not end up being displayed
                            .replace(/\\n/g,'\n')
                            .replace(/\\"/g,'"')
                            .replace(/\\'/g,'\'')
                            ;

                        if (trimmed.startsWith('[') || trimmed.startsWith('{')) {
                            const massaged = trimEnds(value)
                                .replace(/\\"/g,'"')
                                .replace(/\\"/g,'"') // Twice, for inner HTML
                                .replace(/\\'/g,'\'');

                            //console.log('JSON', table, col.name, massaged);
                            // const parsed = JSON.parse(massaged, (k,v) => { console.log('REVIVE', k, v); return v });
                            const parsed = JSON.parse(massaged);
                            rowData[col.name] = parsed;
                            col.isArray = trimmed.startsWith('[');
                        } else if (trimmed.length == 0) {
                            // Ignoring empty
                        } else {
                            if (newlineSplittingColumns.has(col.name)) {
                                col.isArray = true;
                                rowData[col.name] = trimmed
                                    .split('\n')
                                    .map(l => l.trim())
                                    .filter(l => l.length > 0);
                            } else {
                                rowData[col.name] = trimmed;
                            }
                        }
                    }
                }

                // Very little actual logic tied to primaryKey in this revision
                // of converter. Books are handled differently, but otherwise
                // the checks are mostly in place to catch breaking changes in
                // the database dumps. Some of the keys will only be used
                // within this file, the actual data ending up in arrays of
                // other tables or similar.

                if (!primaryKey) {
                    throw Error('No primaryKey for table ' + table);
                }

                let key = primaryKey.map(c => rowData[c]).join(':');

                // If we have our numerical primary key then we are set; for a couple
                // of tables we get to do id magic.

                if (table === 'books' || table === 'creatures') {
                    const encoder = new TextEncoder();
                    const data = encoder.encode(key);
                    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
                    const hashArray = Array.from(new Uint32Array(hashBuffer));
                    const hash = hashArray[0];

                    // Saving the original id for creatures
                    if (table === 'creatures') {
                        rowData.hexCode = key;
                    }
                    
                    // Generated 256 bits. Used 32. Collisions could happen.
                    rowData.id = hash;
                    key = ''+hash;
                } else if (primaryKey.length !== 1 || primaryKey[0] !== 'id') {
                    // Otherwise we create an identifier that is a string concatenation
                    // -- this table is not meant to get it's own file.
                    rowData.id = key;
                }

                if (tableData[key]) throw Error('ID collision ' + table + ' ' + key);

                tableData[key] = rowData;
               
                // console.log(JSON.stringify({ [key]: rowData },null,4));
            }
            //console.log(`END values for ${table}`);

            // This table exists only to link up two other tables; we replace it with an array in one of them
            const builder = arrayBuildingTables[table];
            if (builder) {
                const dest = arrayDestinations[builder.hostTable] || {
                    builder,
                    rows: []
                } satisfies ArrayDestinationTable;
                console.log('Building array using', builder);

                for (const builderRow of Object.values(tableData)) {
                    const id = ''+builderRow[builder.hostID];
                    const destRow = dest.rows.find(r => r.id === id) 
                        || {id, array: []} satisfies ArrayDestinationTableRow;
                    if (destRow.array.length === 0) { // freshly created
                        dest.rows.push(destRow);
                    }

                    const arrayContent = +(''+builderRow[builder.contentID]);
                    destRow.array.push(arrayContent);
                }
                arrayDestinations[builder.hostTable] = dest;
                return;
            }

            console.log(`${table}: ${tableContents[table]?'+':' '}${Object.keys(tableData).length}`);

            if (Object.keys(tableData).length === 0)
               return;

            // console.log(primaryKey, 'for', table);

            // Not sure if this is safe to just use the data of last INSERT line
            tableColumns[table] = columns;

            // Supporting multiple INSERT per table
            const existing = tableContents[table] || {};
            tableContents[table] = {...existing, ...tableData };
        }
    }
};

const trimEnds = (quoted: string) => quoted.substring(1, quoted.length-1);
const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);

handler = betweenHandler;

const mysqldump = await Deno.open(MYQSL_DUMP_FILE);
for await(const line of readLines(mysqldump)) {
    await handler(line);
}

// Finding inconsistencies between column name and basic type.
// Will catch future conflicting changes to the mysql dump. Also checking in how many
// tables each column name occurs. If only 1, then any associated type will live with
// that table instead of among the shared types.
const columnTypeCheck: Record<string, string> = {};
const columnNameUsage: Record<string, string[]> = {};
for (const table in tableColumns) {
    const columns = tableColumns[table];
    for (const column of columns) {
        columnNameUsage[column.name] = [...columnNameUsage[column.name]||[], table];

        const known = columnTypeCheck[column.name];

        if (known && known !== column.type) {
            if (column.name === 'id') {
                column.type = 'number';
                // We want "id" to consistently be a number and have made accomodations
                // where needed.
                if (table === 'creatures')
                    continue;
            }

            throw Error(`Type of ${table} ${column.name} is ${column.type}; previously found ${known}`);
        } else {
            columnTypeCheck[column.name] = column.type;
        }
    }
}

// What was originally a basic type of 'string' may have been parsed as JSON, or is a
// small set of strings that can be used for a union type.

const typeDefinitionsFor = async (name: string, samples: string[]) => {
    const jsonInput = jsonInputForTargetLanguage('ts');

    await jsonInput.addSource({
        name,
        samples
    });
        
    const inputData = new InputData();
    inputData.addInput(jsonInput);

    const result = await quicktype({
        inputData,
        lang: 'ts',
        rendererOptions: {
            'just-types': 'true',
            'declare-unions': 'true',
            'prefer-unions': 'true'
        }
    });
    const { lines } = result;

    // console.log('RESULT', table, lines);

    const output: string[] = [];

    lines.forEach((line, index) => {
        // Fixing some things there are no renderOptions for

        // Calling this one 'prefix-child-types'
        if (index != 0) {
            line = line.replace(/(:\s+)([A-Z]\w+)/, `$1${name}$2`);
            line = line.replace(/^(export \w+ )(\w+)/, `$1${name}$2`);
        }

        // Calling this one 'force-readonly'
        line = line.replace(/(:\s+)(\w+\[\];)$/, '$1readonly $2');

        // Calling this one 'disable-dates'
        line = line.replace(/Date;$/, 'string;');

        output.push(line + '\n');
    });

    return output;
}

const sharedOutput: string[] = [];
const metadataOutput: Record<'imports'|'contentmap'|'typepredicates'|'tabletypemap'|'rowtypemap', string[]> = {
    imports: [], contentmap: [], typepredicates: [], tabletypemap: [], rowtypemap: [] };
const columnGeneratedType: Record<string, string> = {};
const finishedSharedColumns: string[] = [];

const tableNames = Object.keys(tableContents);
tableNames.sort();

for (const table of tableNames) {
    const contents = tableContents[table];
    const columns = tableColumns[table];
    const tableOutput: string[] = [];

    const tableType = capitalize(table) + 'Table';
    const tableRowType = tableType + 'Row';

    metadataOutput.imports.push(`import { ${table}, ${tableType}, ${tableRowType} } from './${table}';`);
    metadataOutput.contentmap.push(`  '${table}': ${table},`);
    metadataOutput.tabletypemap.push(`  '${table}': ${tableType};`);
    metadataOutput.rowtypemap.push(`  '${table}': ${tableRowType};`);

    // FIXME: Need to map 'ancestries' to ancestryID (referenced in ancestryboosts etc)
    //metadataOutput.typepredicates.push(`export const isAncestryID = (id?: number|string): id is keyof typeof ancestries => !!id && id in ancestries;`);

    for (const column of columns) {
        if (column.type !== 'string')
            continue;

        if (finishedSharedColumns.includes(column.name))
            continue;

        const samples: string[] = [];
        const usage = columnNameUsage[column.name];
        for (const tn of usage) {
            const tc = tableContents[tn];
            for (const id in tc) {
                const row = tc[id];
                const val = row[column.name];
                if (typeof val === 'undefined') {
                    // Assuming this is for a column.optional
                    continue;
                }
                // We will only get types generated for objects, so for arrays
                // we take all of the values of all of the rows for a column.
                if (column.isArray) {
                    const arr = val as unknown[];
                    arr.forEach(v => samples.push(JSON.stringify(v)));
                } else {
                    samples.push(JSON.stringify(val));
                }
            }
        }

        //console.log(column.name, 'found in', usage, 'has samples', samples);
        
        const typeName = capitalize(column.name);
        const output = await typeDefinitionsFor(typeName, samples);

        // console.log(column.name, 'found in', usage, 'yields', output);

        if (output.length > 0) {
            columnGeneratedType[column.name] = typeName;
        }

        // Check if we are getting any action type definitions, or if this
        // is simply a string.
        if (usage.length > 1) {
            sharedOutput.push(...output);

            // Since used by many, then this is also going to be shared
            finishedSharedColumns.push(column.name);
        } else {
            tableOutput.push(...output);
        }
    }

    // Out of the columns shared with other tables, which ones got a
    // generated type that we should import?
    const sharedTypeImports: string[] = [];
    for (const column of columns) {
        const usage = columnNameUsage[column.name];
        if (usage.length > 1) {
            const type = columnGeneratedType[column.name];
            if (type) {
                sharedTypeImports.push(type);
            }
        }
    }

    if (sharedTypeImports.length > 0) {
        const importer = `import { ${sharedTypeImports.join(', ')} } from './shared_types';\n\n`;
        // Adding it to the top of the file
        tableOutput.unshift(importer);
    }
    tableOutput.unshift(`import { hookupTableLookup } from '../tables';\n\n`);

    const tableRowConstraintsType = tableRowType + 'Constraints';

    tableOutput.push(`export interface ${tableRowConstraintsType} {\n`);
    tableOutput.push(`  table: '${table}';\n`);

    // If there is no explicit id column the we assume a numerical id was generated
    // at some earlier point based on the primary key or by using a counter.
    if (!columns.find(c => c.name === 'id')) {
        // Books have a known fix; if this happens for anything else though...
        if (table !== 'books') {
            console.log(`Table ${table} had an 'id' generated for it; some massaging might be needed`);
        }

        tableOutput.push('  id: number;\n');
    }

    if (columns.find(c => c.name === 'code')) {
        tableOutput.push('  wsci?: Readonly<Expression[]>;\n');
        tableOutput.unshift(`import type { Expression } from '../wsc/types';\n`);

        Object.values(contents).forEach(row => {
            const code = row.code as string[];
            if (!code) return;
                let fail = false;
                const wsci = code.map(line => {
                    try {
                        return parseWSC(line)
                    } catch (e) {
                        fail = true;
                        console.log('WSCI issue', e.message);
                        if (!e.message.includes('found in')) {
                            console.log('- found in: ', line);
                        }
                    }
                });

                if (fail) {
                    // Continuing for now. No surprise that things are missing. 
                } else {
                    row.wsci = wsci;
                }  
        });
    }

    if (table === 'creatures') {
        tableOutput.push('  hexCode: string;\n');
    }

    for (const column of columns) {
        let type: string = columnGeneratedType[column.name] || column.type;
        if (type === 'timestamp')
            type = 'string';
        tableOutput.push(`  ${column.name}${column.optional?'?':''}: ${column.isArray?`readonly ${type}[]`:type};\n`);        
    }
    const arrayDestination = arrayDestinations[table];
    if (arrayDestination) {
        const [idTypeTable, idType] = arrayDestination.builder.typeOfID;

        tableOutput.push(`  ${arrayDestination.builder.arrayName}: readonly ${idType}[];\n`);
        tableOutput.unshift(`import type { ${idType} } from './${idTypeTable}';\n`);

        arrayDestination.rows.forEach(destRow => {
            const row = contents[destRow.id];
            if (!row) return;
            if (row[arrayDestination.builder.arrayName])
                throw Error('Duplicated array hosting');
            row[arrayDestination.builder.arrayName] = destRow.array;
        });
        // Adding empty arrays where no mappings were found; so much easier to not
        // have to check `if ('tagIDs' in feat) ...` but rather do `feat.tagIDs.include(...)`
        // directly.
        Object.values(contents).forEach(row => {
            row[arrayDestination.builder.arrayName] ??= [];
        });
    }

    tableOutput.push(`}\n\n`);

    let singular = table;
    if (singular.endsWith('ies')) {
        singular = singular.substring(0, singular.length - 3) + 'y';
    } else if (singular.endsWith('ses')) {
        singular = singular.substring(0, singular.length - 2);
    } else if (singular.endsWith('s')) {
        singular = singular.substring(0, singular.length - 1);
    }

    const tableIdType = capitalize(singular) + 'ID';
    tableOutput.push(`export type ${tableType} = typeof ${table};\n`);
    tableOutput.push(`export type ${tableRowType} = ${tableType}[number];\n`);
    tableOutput.push(`export type ${tableIdType} = ${tableRowType}['id'];\n\n`);

    tableOutput.push(`export const is${tableIdType} = (id?: number): id is ${tableIdType} => !!id && !!${table}.byIdLax(id);\n`);
    tableOutput.push(`export const assertIs${tableIdType} = (id?: number): asserts id is ${tableIdType} => { if (!is${tableIdType}(id)) throw Error('Expected a ${tableIdType}; got ' + id); }\n`);

    // Ending with the actual content; we do not want to scroll past this one needlessly
    tableOutput.push(`\nconst _${table} = [\n`);

    const ids = [...Object.keys(contents)].sort((a,b) => +a-+b);
    
    for (const id of ids) {
        const rowData = contents[id];
        // Need special handling for the wsci
        const wsci = rowData['wsci'] as unknown[];
        delete rowData['wsci'];

        const rowJson = JSON.stringify(rowData,null,4);
        if (wsci) {
            tableOutput.push(rowJson.slice(0,-2));
            tableOutput.push(',\n    "wsci": [\n        ');
            tableOutput.push(wsci.map(w => JSON.stringify(w)).join(',\n        '));
            tableOutput.push('\n    ] satisfies Expression[]\n}');
        } else {
            tableOutput.push(rowJson);
        }

        tableOutput.push(` as const satisfies ${tableRowConstraintsType},\n`);
    }
    tableOutput.push(' ] as const;\n');

    // Lookup support for ids and names
    tableOutput.push(`\nexport const ${table} = hookupTableLookup(_${table});`);

    Deno.writeTextFile(`${OUTPUT_DIR}/${table}.ts`, tableOutput.join(''));
}

Deno.writeTextFile(`${OUTPUT_DIR}/shared_types.ts`, sharedOutput.join(''));

Deno.writeTextFile(`${OUTPUT_DIR}/table_metadata.ts`, [
    metadataOutput.imports.join('\n')+'\n',

    'export const tableNames = [\n' + (tableNames.map(n => `  '${n}'`).join(',\n')) + '\n] as const;\n',
    'export type TableName = typeof tableNames[number];\n',

    'export const tables = {',
    metadataOutput.contentmap.join('\n'),
    '} as const satisfies { [T in TableName]: any };\n',

    'export type TableTypeMap = {',
    metadataOutput.tabletypemap.join('\n'),
    '};\n',
    'export type Table = TableTypeMap[TableName];\n',

    'export type TableRowTypeMap = {',
    metadataOutput.rowtypemap.join('\n'),
    '};\n',
    'export type TableRow = TableRowTypeMap[TableName];\n',
].join('\n'));
