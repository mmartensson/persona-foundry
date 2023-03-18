import type { FlawedAbility } from './data/ancestryflaws';
import type { BoostedAbility } from './data/ancestryboosts';

import { TableRow } from './data/table_metadata';
import { LanguagesTableRow } from './data/languages';
import { SkillsTableRow } from './data/skills';

// FIXME: Rename => table_support.ts

// Abilities

export const abilityNames = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'] as const satisfies readonly string[];
export type Ability = typeof abilityNames[number];

export type FlawedAbilityNames = {
  [x in FlawedAbility]: Ability;
}
export const flawedAbilityNames = {
  Strength: 'STR',
  Dexterity: 'DEX',
  Constitution: 'CON',
  Intelligence: 'INT',
  Wisdom: 'WIS',
  Charisma: 'CHA',
} as const satisfies FlawedAbilityNames;

export type BoostedAbilityNames = {
  [x in BoostedAbility]: Ability | 'ANY';
}
export const boostedAbilityNames = {
  Anything: 'ANY',
  ...flawedAbilityNames
} as const satisfies BoostedAbilityNames;

export type Language = Lowercase<LanguagesTableRow['name']>;
export type Skill = Lowercase<SkillsTableRow['name']>;

// Array member typeguards
export const isAbility = (str?: unknown): str is Ability => !!str && typeof str === 'string' && abilityNames.includes(str as Ability);

// Sorting

export type TableSortFn<T> = (a: T, b: T) => number;

export const undefinedSortFn = <T>(a: T, b: T) => {
  const ua = typeof a === 'undefined';
  const ub = typeof b === 'undefined';

  if (ua === ub)
    return 0;

  return (ua && !ub) ? 1 : -1;
}

export const numberTableSortFn = <T>(prop: keyof T): TableSortFn<T> => (a,b) => {
  const va = a[prop];
  const vb = b[prop];

  const u = undefinedSortFn(a,b);
  if (u !== 0) return u;

  const na = typeof va === 'number';
  const nb = typeof vb === 'number';

  if (na && nb) return va-vb;
  if (na === nb) return 0;

  return (na && !nb) ? 1 : -1;
}

export const stringTableSortFn = <T>(prop: keyof T): TableSortFn<T> => (a,b) => {
  const va = a[prop];
  const vb = b[prop];

  const u = undefinedSortFn(a,b);
  if (u !== 0) return u;

  const sa = typeof va === 'string';
  const sb = typeof vb === 'string';

  if (sa && sb) return va.localeCompare(vb);
  if (sa === sb) return 0;

  return (sa && !b) ? 1 : -1;
}

export const nameTableSortFn = stringTableSortFn('name');

// Filtering

export type TableFilterFn = (row: TableRow) => boolean;

export const nopTableFilterFn = () => true;

// Lazy lookup support

export type MinimalLookupRow = { table: string; id: number; name?: string; };
export type MinimalLookupTable = ReadonlyArray<MinimalLookupRow>;

export class TableLookup<T extends MinimalLookupTable> {
  idMap   = new Map<number, T[number]>();
  nameMap = new Map<string, Array<T[number]>>();

  constructor(table: T) {
    table.forEach(row => {
      this.idMap.set(row.id, row);
      if (row.name) {
        const lc = row.name.toLowerCase();
        let list = this.nameMap.get(lc);
        if (list) {
          list.push(row);
        } else {
          list = [row];
        }
        this.nameMap.set(lc, list);
      }
    });
  }

  byIdLax(id: T[number]['id'] | number): T[number] | undefined {
    return this.idMap.get(id);
  }

  byId(id: T[number]['id']): T[number] {
    const row = this.idMap.get(id);
    if (!row) throw Error('Specifying an strictly typed ID should have produced a table row; none was found');
    return row;
  }

  byNameUnique(name: string): T[number] | undefined {
    const list = this.nameMap.get(name.toLowerCase());
    if (!list || list.length === 0) return undefined;
    const { table } = list[0];
    if (list.length >1) {
      console.warn(`Call to ${table}.byNameUnique('${name}' returned one of ${list.length}`);
    }
    return list[0];
  }

  byNameMultiple(name: string): Array<T[number]> | undefined {
    return this.nameMap.get(name.toLowerCase());
  }
}

export type HasTableLookup<T extends MinimalLookupTable> = {
  byId: (id: T[number]['id']) => T[number];
  byIdLax: (id: T[number]['id'] | number) => T[number] | undefined;
  byNameUnique: (name: string) => T[number] | undefined;
  byNameMultiple: (name: string) => Array<T[number]> | undefined;
}

// Used by auto generated table files:
//   export const sensetypes = hookupTableLookup(_sensetypes);
//   const sense = sensetypes.byId(22);
export const hookupTableLookup = <T extends MinimalLookupTable>(table: T) => {
  const fancy = table as T & HasTableLookup<T>;

  const lazy = () => {
    const lookup = new TableLookup(table);
    fancy.byId = id => lookup.byId(id);
    fancy.byIdLax = id => lookup.byIdLax(id);
    fancy.byNameUnique = name => lookup.byNameUnique(name);
    fancy.byNameMultiple = name => lookup.byNameMultiple(name);
    return lookup;
  }
  
  fancy.byId = id => lazy().byId(id);
  fancy.byIdLax = id => lazy().byIdLax(id);
  fancy.byNameUnique = name => lazy().byNameUnique(name);
  fancy.byNameMultiple = name => lazy().byNameMultiple(name);
  
  return fancy;
}