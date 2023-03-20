import { Rank } from "../state";
import { StatAdjustType } from "../wsc/types";
import { skills } from '../data/skills';
import { Ability } from '../tables';
import { proficiencyDisplayName } from "./proficiency";

export type Adjustment<T> = {
  value: T;
  source: string;
  description: string;
  test?: () => boolean;
}

abstract class BaseAdjustable<T> {
  protected _changes: Adjustment<T>[] = [];

  adjust(value: T, source: string, description: string): void {
    this._changes.push({value, source, description});
    // console.log('Adjusted', this);
  }

  adjustConditional(value: T, source: string, description: string, test: () => boolean): void {
    this._changes.push({value, source, description, test});
    // console.log('Adjusted', this);
  }

  get changes(): Adjustment<T>[] {
    return this._changes.map(({value,source,description}) => { return { value: structuredClone(value),source,description } });
  }

  abstract get value(): any;
}

export class AdjustableInteger extends BaseAdjustable<number> {
  #initial: number;
  #callback?: (value: number, subtotal: number) => number;

  constructor(initial: number, callback?: (value: number, subtotal: number) => number) {
    super();

    this.#initial = initial;
    this.#callback = callback;
  }

  get value() {
    let v = this.#initial;
    this._changes.forEach(c => {
      if (c.test && !c.test()) return;
      v += this.#callback ? this.#callback(c.value, v) : c.value;
    });
    return v;
  }
}

export type StatisticChange = {
  absolute?: number;
  relative?: number;
  type?:     StatAdjustType;
} 

export class AdjustableStatistic extends BaseAdjustable<StatisticChange> {
  #initial: number;

  constructor(initial: number) {
    super();

    this.#initial = initial;
  }

  get value() {
    let abs = this.#initial;
    let rel = 0;
    
    this._changes.forEach(c => {
      if (c.test && !c.test()) return;

      if (typeof c.value.absolute == 'number') {
        abs = c.value.absolute;
      }
      
      if (typeof c.value.relative == 'number') {
        rel = c.value.relative;
      }
    });
    return abs + rel;
  }
}

const uteml = 'UTEML';
export class AdjustableRank extends BaseAdjustable<Rank|'increase'> {
  #initial: Rank;

  constructor(initial: Rank = 'U') {
    super();

    this.#initial = initial;
  }

  get value() {
    let v = this.#initial;
    this._changes.forEach(c => {
      if (c.test && !c.test()) return;

      if (c.value === 'increase') {
        console.log('Got increase, currently at', v);
        // L is already Legendary, no increase possible
        if (v != 'L') {
          // Picking the next Rank
          v = uteml[uteml.indexOf(v) + 1] as Rank;
          console.log('As increase, changed to ', v);
        }
      } else if (uteml.indexOf(c.value, uteml.indexOf(v)) >0) {
        // c.value > v
        v = c.value;
      }
    });
    return v;
  }
}

export class AdjustableIdSet<T extends number> extends BaseAdjustable<{id: T, remove?: boolean}> {
  get value(): Set<T> {
    const set = new Set<T>();

    this._changes.forEach(c => {
      if (c.value.remove) {
        set.delete(c.value.id);
      } else {
        set.add(c.value.id);
      }
    });

    return set
  }
}

export const spellcastingTraditions = ['arcane', 'divine', 'occult', 'primal'];

export type ProficiencyMetadata = {
  name: string;
  displayName: string;
  group: string;
  ability?: Ability;
}

export type ProficiencyGroupMetadata = {
  name: string;
  displayName: string;
  hasAbilities: boolean;
}

export class AdjustableProficiencies {
  #profs: Record<string, ProficiencyMetadata> = {};
  #groups: Record<string, ProficiencyGroupMetadata> = {};
  #ranks: Record<string, AdjustableRank> = {};
  // FIXME: #bonuses ...  +2 circumstance bonus bla bla

  constructor() {
    this.registerGroup('skills', 'Skills', true);
    this.registerGroup('saves', 'Saves', true);
    this.registerGroup('attacks','Attacks', false);
    this.registerGroup('defenses', 'Defenses', false);
    this.registerGroup('spellcasting', 'Spell Casting', false);
    this.registerGroup('other', 'Other', true);

    this.registerGroup('weapons', 'Weapons', true);
    this.registerGroup('weapongroups', 'Weapon Groups', true);

    // SKILLS
    skills.forEach(skill => {
      const nlc = skill.name.toLowerCase();
      if (nlc === 'lore') {
        // Intentionally skipping the "generic" lore; will always need a qualifier
        return;
      }
      this.registerProficiency(nlc, skill.name, 'skills', skill.ability);
    });

    // SAVES
    this.registerProficiency('fortitude', 'Fortitude', 'saves', 'CON');
    this.registerProficiency('reflex', 'Reflex', 'saves', 'DEX');
    this.registerProficiency('will', 'Will', 'saves', 'WIS');

    // ATTACKS
    ['simple_weapons', 'martial_weapons', 'advanced_weapons', 'unarmed_attacks']
      .forEach(name => this.registerProficiency(name, proficiencyDisplayName(name), 'attacks'));

    // DEFENSES
    ['light_armor', 'medium_armor', 'heavy_armor', 'unarmored_defense']
      .forEach(name => this.registerProficiency(name, proficiencyDisplayName(name), 'defenses'));

    // SPELL CASTING
    spellcastingTraditions.forEach(tradition => {
      const spellDC = `${tradition}_spell_dc`;
      const spellAttacks = `${tradition}_spell_attacks`;
      this.registerProficiency(spellDC, proficiencyDisplayName(spellDC), 'spellcasting');
      this.registerProficiency(spellAttacks, proficiencyDisplayName(spellAttacks), 'spellcasting');
    });

    // OTHER (not meant to be displayed as a group; each member is a special snowflake)
    this.registerProficiency('perception', 'Perception', 'other', 'WIS');
    this.registerProficiency('class_dc', 'Class DC', 'other', 'CHA');       // FIXME: Actually needs to be tied to class key ability
  }
  
  registerGroup(name: string, displayName: string, hasAbilities: boolean) {
    const group = { name, displayName, hasAbilities } as const satisfies ProficiencyGroupMetadata;
    if (this.#groups[name]) throw Error(`Group ${name} already registered`);
    this.#groups[name] = group;
  }

  registerProficiency(name: string, displayName: string, group: string, ability?: Ability) {
    const prof = { name, displayName, group, ability } as const satisfies ProficiencyMetadata;
    if (this.#profs[name]) throw Error(`Proficiency ${name} already registered`);
    if (!this.#groups[group]) throw Error(`Group ${group}, referenced by ${name}, is not yet registered`);
    if (!!ability != this.#groups[group].hasAbilities) throw Error(`Ability requirement issue with group ${group} and proficiency ${name}`);
    this.#profs[name] = prof;
    this.#ranks[name] = new AdjustableRank();
  }

  adjustRank(name: string, rank: Rank|'increase', source: string, description: string) {
    if (!this.#ranks[name]) throw Error(`Proficiency ${name} is not registered`);
    this.#ranks[name].adjust(rank, source, description);
  }

  adjustRankConditional(name: string, rank: Rank|'increase', source: string, description: string, test: () => boolean) {
    if (!this.#ranks[name]) throw Error(`Proficiency ${name} is not registered`);
    this.#ranks[name].adjustConditional(rank, source, description, test);
  }

  list(): ProficiencyMetadata[] {
    return structuredClone(Object.values(this.#profs));
  }
  groups(): ProficiencyGroupMetadata[] {
    return structuredClone(Object.values(this.#groups));
  }

  isRegistered(name: string) {
    return !!this.#profs[name];
  }

  adjustableRankOf(name: string) {
    if (!this.#ranks[name]) throw Error(`Proficiency ${name} is not registered`);
    return this.#ranks[name];
  }
}