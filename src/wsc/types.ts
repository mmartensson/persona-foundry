import type { Ability } from '../tables';
export type { Ability } from '../tables';

import { ConditionalTest } from './conditionals';
import { StatementCall } from './statements';

// UTILITIES
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

/** WSC Intermediate hierarchy; not unlike an AST over the code block represented. */

// GENERAL TYPES (should be imported from somewhere else)

export type SpellcastingType = 'prepared-list' | 'prepared-book' | 'prepared-familiar' 
                                | 'spontaneous-repertoire' | 'flexible-collection';

export type SpellTradition = 'arcane' | 'divine' | 'occult' | 'primal';

export type SpellSlotAlgorithm = 'three-quarters' | 'full' | 'reduced' | 'partial' | 'single-set'
            /* undocumented */   | 'psy-reduced';

export type SpeedType = 'burrow' | 'climb' | 'fly' | 'land' | 'swim';

export type Size = 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'gargantuan';

// WSCI TYPES

// Integer is the important part, but 8-24 seems to be what game maths currently gives us
export type AbilityScore = IntRange<8, 28>;

export type EqOp = '==' | '!=';
export type RelOp = '>=' | '<=';
export type AnyOp = EqOp | RelOp;

export type Level = [type:'absolute', offset:number] 
                  | [type:'current',  offset:null] 
                  | [type:Ability,    offset:number|null]
                  | [type:'half',     offset:number|null];

// @ts-ignore
const validLevels = [
    ["half",null] satisfies Level,
    ["half",2] satisfies Level,
    ["absolute",2] satisfies Level,
    ["CON",2] satisfies Level,
];

// @ts-ignore
const invalidLevels = [    
    // @ts-expect-error
    ["half","and half"] satisfies Level,
    // @ts-expect-error
    ["absolute",null] satisfies Level,
] as const;

// Current traits found. Mostly classes (with case variations).
// The metamagic trait will be useful.
// Skipping the "Impulse (silkean)" which is meant to be
// "form, infusion or kinetic aura of your choice". The "Impulse"
// tag is the closest thing here, but the "(silkean)" part rules
// that out as match.
export const traits = [
    'alchemist','barbarian', 'bard', 'champion', 'cleric',
    'dedication', 'druid', 'evolution', 'fighter',
    'goblin', 'gunslinger', 'inventor', 'investigator', 'magus', 
    'maneuver', 'metamagic', 'monk', 'multiclass', 'oracle', 
    'psychic', 'ranger', 'rogue', 'sorcerer', 'summoner', 
    'swashbuckler', 'thaumaturge','witch', 'wizard',        
];
export type Trait = typeof traits[number];
export type Traits = readonly Trait[];

export type Feat  = readonly [name:string, ...traits:Trait[]];

// The language.ts and skill.ts do not have WSCI code blocks inside of it, so we can 
// base types on their contents without risking circular issues.

export type SignedAdjustment = `${'+'|'-'}${number}`;

export type StatAdjustType = 'status' | 'circumstance' | 'class' | 'heritage' | 'life-mystery' | 'item-hide';

// EXPRESSIONS

export interface ConditionalalExpression {
    conditionals: readonly ConditionalTest[];
    consequent: StatementCall;
    alternate?: StatementCall;
    sheet?: boolean; // was an IF-SHEET
}

export type Expression = StatementCall | ConditionalalExpression;