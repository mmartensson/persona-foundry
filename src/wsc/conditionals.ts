import { classabilities } from '../data/classabilities';
import { feats } from '../data/feats';
import { heritages } from '../data/heritages';
import { sensetypes } from '../data/sensetypes';
import { currentHeritage, currentLevel, Rank, rankToValue } from '../state';
import { CalculatedSheet } from '../calc/sheet';

import type { AnyOp, EqOp } from './types';

const numberComp = (op: AnyOp, a?: number, b?: number) => {
  if (typeof a === 'undefined' || typeof b === 'undefined') {
    // An undefined value does not equal anything else, not even another undefined value;
    // relative comparisons are also not a thing.
    return op === '!=';
  }

  switch (op) {
    case '==': return a == b;
    case '!=': return a != b;
    case '>=': return a >= b;
    case '<=': return a <= b;
  }
}

// Check if needle is found in haystack (==) or not (!=)
const haystackComp = <T>(op: EqOp, haystack: T[], needle: T) => {
  switch (op) {
    case '==': return haystack.includes(needle);
    case '!=': return !haystack.includes(needle);
  }
}

// Checking if there is any overlap (==) or none (!=)
const intersectionComp = <T>(op: EqOp, a: T[], b?: T[]) => {
  if (!b) return op == '!=';

  for (const ax of a) {
    if (b.includes(ax)) {
      if (op == '==') return true;
    }
  }
  return op == '!=';
}

// Checking if a value can be found in a set (==) or not (!=)
const setComp = <T>(op: EqOp, set: Set<T>, value?: T) => {
  if (!value) return op == '!=';

  const inSet = set.has(value);
  return op == '==' && inSet || op == '!=' && !inSet;
}


// Defining SupportedConditionals as a type used with the implementations,
// rather than basing a type on the implementation as a was of avoiding
// circular type referencing with the tables that contain Expression,
// which is based in part on SupportedConditionals.

export interface SupportedConditionals {
  // Numerical
  hasLevel:                   (op: AnyOp, level: number) => boolean;
  hasFocusPoints:             (op: AnyOp, points: number) => boolean;

  // Proficiency
  hasProf:                    (op: AnyOp, name: string, rank: Rank) => boolean;

  // Name
  hasVision:                  (op: EqOp, vision: string) => boolean;
  hasFeat:                    (op: EqOp, feat: string) => boolean;
  hasClassAbility:            (op: EqOp, clab: string) => boolean;
  hasHeritage:                (op: EqOp, heritage: string) => boolean;
  hasEnabledSource:           (op: EqOp, source: string) => boolean;
  
  // Toggled
  isToggled:                  (op: EqOp, toggle: string) => boolean;

  // Boolean
  isUnarmored:                () => boolean;
}

export type ConditionalTest = Readonly<{ [ K in keyof SupportedConditionals ]: [ K, ...Parameters<SupportedConditionals[K]> ]}[keyof SupportedConditionals]>;

export interface ConditionalTestProcessor {
  processTest: (test: ConditionalTest, calculated: CalculatedSheet) => boolean;
}
class ConditionalTestProcessorImplementation implements ConditionalTestProcessor, SupportedConditionals {
  #sheet!: CalculatedSheet;
  
  processTest(test: ConditionalTest, sheet: CalculatedSheet) {
    const [f, ...params] = test;
    this.#sheet = sheet;

    const method = this[f] as (...p:any[]) => boolean;
    const result = method.apply(this, params);

    return result;
  }

  // Numerical

  hasLevel(op: AnyOp, level: number) {
    return numberComp(op, currentLevel(), level)
  }

  hasFocusPoints(op: AnyOp, points: number) {
    return numberComp(op, this.#sheet.focusPoints.value, points)
  }

  // Proficiency

  hasProf(op: AnyOp, name: string, rank: Rank) {
    return numberComp(op, rankToValue(this.#sheet.proficiencies.adjustableRankOf(name)?.value), rankToValue(rank))
  }

  // Name

  hasVision(op: EqOp, vision: string) {
    return setComp(op, this.#sheet.senses.value, sensetypes.byNameUnique(vision)?.id)
  }

  hasFeat(op: EqOp, feat: string) {
    return setComp(op, this.#sheet.feats.value, feats.byNameUnique(feat)?.id)
  }

  hasClassAbility(op: EqOp, clab: string) {
    return intersectionComp(op, [...this.#sheet.clabs.value], classabilities.byNameMultiple(clab)?.map(c => c.id))
  }

  hasHeritage(op: EqOp, heritage: string) {
    return numberComp(op, currentHeritage()?.id, heritages.byNameUnique(heritage)?.id) 
  }

  // books['name'] -- not currently disabling books
  hasEnabledSource(op: EqOp, source: string) {
    return true 
  }  
  
  // Toggled

  // this is only for rage, and we are currently not toggling rage
  isToggled(op: EqOp, toggle: string) { return false }

  // Boolean

  // no equipment managed yet
  isUnarmored() { return true }
}

export const conditionalTestProcessor = new ConditionalTestProcessorImplementation() satisfies ConditionalTestProcessor & SupportedConditionals as ConditionalTestProcessor & SupportedConditionals;

// @ts-ignore
const validConditionalTests = [
  ["hasVision","==","low-light vision"] satisfies ConditionalTest,
]

// @ts-ignore
const invalidConditionalTests = [
  // @ts-expect-error
  ["hasBugs","==","yes"] satisfies ConditionalTest,

  // @ts-expect-error
  ["hasVision",">=","low-light vision"] satisfies ConditionalTest,

  // @ts-expect-error
  ["hasVision","==",5] satisfies ConditionalTest,
]