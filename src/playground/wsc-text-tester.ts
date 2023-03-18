// Yes, yes. Real testing framework eventually.

import { ancestries } from '../data/ancestries';
import { archetypes } from '../data/archetypes';
import { backgrounds } from '../data/backgrounds';
import { books } from '../data/books';
import { classabilities } from '../data/classabilities';
import { classes } from '../data/classes';
import { conditions } from '../data/conditions';
import { creatures } from '../data/creatures';
import { familiarabilities } from '../data/familiarabilities';
import { feats } from '../data/feats';
import { heritages } from '../data/heritages';
import { items } from '../data/items';
import { physicalfeatures } from '../data/physicalfeatures';
import { sheetstates } from '../data/sheetstates';
import { spells } from '../data/spells';
import { tags } from '../data/tags';
import { uniheritages } from '../data/uniheritages';
// @ts-ignore 7016
import { parse } from '../wsc/wsc-text';

const tables = [ 
    ancestries, archetypes, 
    backgrounds, books,
    classabilities, classes, conditions, creatures, 
    familiarabilities, feats, 
    heritages, 
    items, 
    physicalfeatures,
    sheetstates, spells, 
    tags,
    uniheritages
];

const props = [
    'description'
];

let fails=0;
let successes=0;

for (const table of tables) {
    for (const row of table) {
        for (const prop of props) {
            if (!(prop in row)) continue;

            const text = row[prop] as string;
            try {
                const result = parse(text + "\n"); // XXX: Cheating a bit by adding a newline at the end
                successes++;
                //console.log(result);
            } catch (e) {
                fails++;
                console.warn(row.table, row.id, text, e);
            }
        }
    }
}

console.log('Parse successes:', successes);
console.warn('Parse failures:', fails);