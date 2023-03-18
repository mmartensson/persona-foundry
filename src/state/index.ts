import { ancestries, AncestriesTableRow, AncestryID, isAncestryID } from "../data/ancestries";
import { BackgroundID, backgrounds, BackgroundsTableRow, isBackgroundID } from "../data/backgrounds";
import { classes, ClassesTableRow, ClassID, isClassID } from "../data/classes";
import { FeatID } from "../data/feats";
import { HeritageID, heritages, HeritagesTableRow, isHeritageID } from "../data/heritages";
import { isUniheritageID, UniheritageID, uniheritages, UniheritagesTableRow } from "../data/uniheritages";
import { Ability } from "../tables";
import { calculateSheet } from '../calc';
import { CalculatedSheet } from '../calc/sheet';

import { LanguageID } from "../data/languages";
import { ClassabilityID } from "../data/classabilities";

// NOTE: "tWeapons": "T:::Unarmed Attacks,,, T:::Simple Weapons"
//                     ::: = escaped :   ,,, escaped ,
//       so nothing more exotic than "Trained in Unarmed Attacks and Simple Weapons".

const rankToValueMap = { U: 0, T: 2, E: 4, M: 6, L: 8 } as const;
export type Rank = keyof typeof rankToValueMap;
export const rankToValue = (rank?: Rank|null) => rank ? rankToValueMap[rank] : 0;

export interface MutableCharacter {
  name?: string;
  level: number;
  ancestryID?: AncestryID;
  heritageID?: HeritageID | UniheritageID;
  backgroundID?: BackgroundID;
  classID?: ClassID;
  choicesMade: ChoicesMade;
}

const mutable: MutableCharacter = { level: 1, choicesMade: {} };

// TODO: Events on change to trigger a render() in relevant visible elements, if needed

export const chooseName = (name: string) => mutable.name = name;

export const currentName = () => mutable.name;

export const chooseAncestry = (id?: number) => {
  if (!isAncestryID(id) || id === mutable.ancestryID) return;

  mutable.ancestryID = id;
  mutable.heritageID = undefined; // filtered by ancestry

  const ancestry = ancestries.byId(id);

  console.log('Chosen ancestry:', id, ancestry.name);

  cleanupChoices();
}
export const currentAncestry = (): AncestriesTableRow|undefined => mutable.ancestryID ? ancestries.byId(mutable.ancestryID) : undefined;

export const chooseHeritage = (id?: number) => {
  const versatile = isUniheritageID(id);
  if (!isHeritageID(id) && !versatile || id === mutable.heritageID) return;

  const ancestry = currentAncestry();
  if (!ancestry) throw Error('Heritage chosen before ancestry');

  const heritage = versatile ? uniheritages.byId(id) : heritages.byId(id);
  if (('ancestryID' in heritage) && heritage.ancestryID !== ancestry.id) {
    console.log('Attempted to chose heritage not matching current ancestry', id, currentAncestry());
  }

  mutable.heritageID = id;

  console.log('Chosen heritage:', id, heritage.name, 'ancestryID' in heritage ? `(matches class ${heritage.ancestryID})` : '(versatile)');
  cleanupChoices();
}

export const currentHeritage = (): HeritagesTableRow|UniheritagesTableRow|undefined => 
      isHeritageID(mutable.heritageID) ? heritages.byId(mutable.heritageID)
    : isUniheritageID(mutable.heritageID) ? uniheritages.byId(mutable.heritageID) : undefined;

export const chooseBackground = (id?: number) => {
  if (!isBackgroundID(id) || id === mutable.backgroundID) return;
  mutable.backgroundID = id;

  const background = backgrounds.byId(id);
  console.log('Chosen background:', id, background.name);
  cleanupChoices();
}

export const currentBackground = (): BackgroundsTableRow|undefined => mutable.backgroundID ? backgrounds.byId(mutable.backgroundID) : undefined;

export const chooseClass = (id?: number) => {
  if (!isClassID(id) || id === mutable.classID) return;
  mutable.classID = id;

  const clazz = classes.byId(id);
  console.log('Chosen class:', id, clazz.name);
  cleanupChoices();
}

export const currentClass = (): ClassesTableRow|undefined => mutable.classID ? classes.byId(mutable.classID) : undefined;

export const currentLevel = () => mutable.level;

export const levelUp = () => { if (mutable.level < 20) mutable.level++ };

export type Choice = AbilityChoice | FeatChoice | LanguageChoice | ClabChoice | ProficiencyChoice;

export type ChoiceReference<N> = `${N & string}-${string}`;

export interface BaseChoice<T,N> {
  type: N;
  ref: ChoiceReference<N>;
  level: number;
  options: T[];
  label: string;
}

export type AbilityChoice = BaseChoice<(Ability|null)[], 'ability'>;
export type FeatChoice = BaseChoice<FeatID, 'feat'>;
export type LanguageChoice = BaseChoice<LanguageID, 'language'>;
export type ClabChoice = BaseChoice<ClassabilityID, 'clab'>;
export type ProficiencyChoice = BaseChoice<string, 'prof'>;

type ChoiceTypeByRef = {
  [R in Choice as `${R['type']}-${string}`]: R['options'] extends (infer T)[] ? T : never;
}

export type ChoicesMade = ChoiceTypeByRef;

export const makeChoice = <R extends keyof ChoicesMade, T extends ChoicesMade[R]>(ref: R, value: T) => {
  console.log('Choice made', ref, value);
  mutable.choicesMade[ref] = value;
}

export const currentlyMadeChoice = <R extends keyof ChoicesMade>(ref: R): ChoicesMade[R] => {
  return mutable.choicesMade[ref];
}

export const cleanupChoices = () => {
  const sheet = calculateSheet();
  const availableRefs = new Set(sheet.activeChoices.map(c => c.ref));

  let ref: keyof ChoicesMade;
  const stale: (keyof ChoicesMade)[] = [];
  for (ref in mutable.choicesMade) {
    if (!availableRefs.has(ref)) stale.push(ref);
  }
  if (stale.length === 0) return;
  console.log('Removing stale choices: ', stale);
  stale.forEach(ref => delete mutable.choicesMade[ref]);
}

export const makeExampleChoices = () => {
  chooseAncestry(275);   // Fleshwarp
  chooseHeritage(991);   // Mutated Fleshwarp
  chooseBackground(95);  // Feral Child
  chooseClass(1222);     // Thaumaturge
  chooseName('Example von Beispiel');
  makeChoice('ability-ancestryboosts[769]', ["DEX"]);
}
