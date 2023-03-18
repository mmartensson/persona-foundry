import { feats, isFeatID, FeatsTableRow } from '../data/feats';
import { tags, TagID, isTagID } from '../data/tags';
import { languages } from '../data/languages';
import { AbilityChoice, FeatChoice, Rank, currentClass, currentlyMadeChoice } from '../state';
import { CalculatedSheet } from '../calc/sheet';

import type { Ability, Feat, Level, 
              SignedAdjustment, Size, SpeedType, SpellcastingType, 
              SpellSlotAlgorithm, SpellTradition, StatAdjustType, Traits } from './types';
import { Language, Skill, abilityNames, isAbility } from '../tables';

const assertDefined: <T>(v: T) => asserts v is NonNullable<T> = v => { if (v === undefined) throw new Error() }
const namedTrait = (n: string) => { const t = tags.byNameUnique(n); assertDefined(t); return t }

const tagIDsOf = (v: FeatsTableRow) => v.tagIDs satisfies readonly TagID[] as unknown as TagID[];

const GENERAL_TAG_ID = namedTrait('General').id;          // = 8
const SKILL_TAG_ID   = namedTrait('Skill').id;            // = 9

export const hasIntersection = <T>(a: readonly T[], b: readonly T[]) =>
  a.some(x => b.find(y => x === y));

export type SupportedStatements = {
  // Boosts
  giveAbilityBoostSingle:                 (choices: Ability[]) => void;
  giveAbilityBoostMultiple:               (num: number) => void;

  // Feats
  giveFeatName:                           (feat: Feat) => void;
  giveFeatFrom:                           (text: string, choices: readonly string[]) => void;
  giveFeat:                               (level: Level, traits: readonly string[]) => void;
  giveGeneralFeat:                        (level: Level, traits: Traits) => void;
  giveSkillFeat:                          (level: Level, traits: Traits) => void;
  giveAncestryFeat:                       (level: Level, traits: Traits) => void;
  giveClassFeat:                          (level: Level, traits: Traits) => void;
  giveArchetypeFeat:                      (level: Level, traits: Traits) => void;

  // Languages
  giveLangName:                           (lang: Language) => void;
  giveLangBonusOnly:                      () => void;
  giveLang:                               () => void;

  // Proficiencies
  giveProfIn:                             (prof: string, rank: Rank) => void;
  giveProfIncreaseIn:                     (prof: string) => void;

  // Skills
  giveSkillIncrease:                      () => void;
  giveSkill:                              (rank: Rank, choices: Skill[]) => void;

  // Lore
  giveLore:                               (lore: string) => void;
  giveLoreChoose:                         () => void;
  giveLoreChooseIncreasing:               () => void;

  // Spells
  setSpellCastingType:                    (source: string, type: SpellcastingType) => void;
  setSpellTradition:                      (source: string, tradition: SpellTradition) => void;
  setSpellKeyAbility:                     (source: string, ability: Ability) => void;
  setSpellSlots:                          (source: string, algo: SpellSlotAlgorithm) => void;
  giveSpellSlot:                          (source: string, spellLevel: number) => void;
  addSpellToList:                         (source: string, spell: string, spellLevel: number|null) => void;
  giveFocusSpell:                         (source: string, spell: string) => void;
  giveFocusPoint:                         () => void;
  giveInnateSpellName:                    (spell:string, spellLevel: number, tradition: SpellTradition, perDay: number) => void;
  giveInnateSpell:                        (spellLevel: number, tradition: SpellTradition, perDay: number) => void;

  // Resistances and Weaknesses
  giveResistance:                         (resistance: string, level: Level) => void;
  giveWeakness:                           (weakness: string, level: Level) => void;

  // Specializations
  giveWeaponSpecialization:               () => void;
  giveGreaterWeaponSpecialization:        () => void;
  giveArmorSpecialization:                (prof: string) => void;
  giveWeaponCriticalSpecialization:       (prof: string) => void;
  
  // Miscellaneous
                                          // A class feature is likely from classabilities.ts, with options among the feats
  giveClassFeatureName:                   (feature: string, noCode: boolean) => void;
  giveCharTraitName:                      (charTrait: string) => void;
  giveCharTraitCommon:                    () => void;
  giveCharTrait:                          () => void;
  giveDomain:                             (source: string) => void;
  giveDomainAdvancement:                  (source: string) => void;
                                          // Physical features are in physicalfeatures.ts
  givePhysicalFeatureName:                (physFeature: string) => void;
  giveSenseName:                          (sense: string, imprecise: number|null) => void;
  giveSpeed:                              (type: SpeedType, speed: number | 'land_speed') => void;
  giveHeritageEffectsAncestry:            (ancestry: string) => void;
  giveHeritageEffectsName:                (heritage: string) => void;
                                          // Druidic Order etc are found in classabilities.ts; func is any key in this table
  giveScfs:                               (clab: string, func: string) => void;
  clearDataFromCodeBlock:                 () => void;

  // Sheet / Condition
  giveCondition:                          (condition:string, value:number|null) => void;
  removeCondition:                        (condition:string) => void;

  // Sheet / Item
  defaultWeaponRune:                      (adjustment:SignedAdjustment, rune: string) => void;
  defaultArmorRune:                       (adjustment:SignedAdjustment, rune: string) => void;

  // Sheet / Stat Adjustments
      // ADJUST is any INCREASE/DECREASE with our without CONDITIONAL- prefix
  adjust:                                 (primary: string, secondary: string|null, adjust:number, type:StatAdjustType|null, conditional: string|null) => void;
  adjustConditional:                      (primary: string, secondary: string|null, text:string) => void;

  // Sheet / Misc
  displayCompanionTab:                    () => void;
  giveWeaponFamiliarity:                  (type: string) => void;
  setImprovisedWeaponNoPenalty:           () => void;
  setAddLevelToUntrainedWeapons:          () => void;
  setFinesseMeleeUseDexDamage:            () => void;
  sheetConcealFeatName:                   (name: string) => void;
  setSize:                                (size: Size) => void;
  setMap:                                 (tier: number) => void;

  // Universal
  addText:                                (text: string) => void;
  giveNotesField:                         (text: string) => void;
  defineVariable:                         (name: string, type: string) => void;
  setVariable:                            (name: string, mutator: string|null, value:string[]|string|null) => void;
  setKeyAbility:                          (abilities:Ability[]) => void;
  hideFeatName:                           (name: string) => void;
  overrideFeatLevel:                      (name: string, level: number) => void;
}

export type StatementCall = Readonly<{ [ K in keyof SupportedStatements ]: [ K, ...Parameters<SupportedStatements[K]> ]}[keyof SupportedStatements]>;
              
export interface StatementCallProcessor {
  processCall: (call: StatementCall, sheet: CalculatedSheet, ref: string, description: string, level: number) => void;
}

// FIXME: Should probably just expose the StatementCallProcessor interface and have the rest private,
//        to ensure no sneaky code ends up calling something like giveAbilityBoostSingle() outside of 
//        a processCall().
class StatementCallProcessorImplementation implements StatementCallProcessor, SupportedStatements {
  // Guaranteed to be set for the lifetime of a processCall
  #sheet!: CalculatedSheet;     // sheet we are updating
  #ref!: string;                // unique ref to the statement; mainly for choices
  #description!: string;        // description for registered changes or choices
  #level!: number;              // level to associate with choices

  #resolveLevel(level: Level) {
    const [type, offset] = level;

    // FIXME: Figure out what is the best fit for current/half out of
    //        this.#level, currentLevel() vs this.#sheet.level

    if (type === 'absolute')
      return offset;
    if (type === 'current')
      return this.#level;
    if (type === 'half')
      return this.#level / 2;
    if (isAbility(type)) {
      return this.#sheet.abilities[type].value;
    }

    throw new Error('Unexpected Level: ' + JSON.stringify(level));
  }

  processCall(call: StatementCall, sheet: CalculatedSheet, ref: string, description: string, level: number) {
    const [f, ...params] = call;

    const method = this[f] as (...p:any[]) => boolean;

    this.#sheet = sheet;
    this.#ref = ref;
    this.#description = description;
    this.#level = level;
    method.apply(this, params);
  }

  #boostChoice(options: AbilityChoice['options']) {
    const choices = currentlyMadeChoice(`ability-${this.#ref}`);

    if (choices) {
      choices
        .filter(isAbility)
        .forEach(ability => this.#sheet.abilities[ability].adjust(1, this.#ref, this.#description));
    }

    this.#sheet.activeChoices.push({
      type: 'ability',
      ref: `ability-${this.#ref}`,
      level: this.#level,
      label: this.#description,
      options
    });
  }
   
  // Boosts
  giveAbilityBoostSingle(alternatives: Ability[]) { 
    const options = [[...alternatives]];
    this.#boostChoice(options);
  }

  giveAbilityBoostMultiple(num: number) {
    const options: AbilityChoice['options'] = [];
    for (let i=0; i<num; i++) options.push([...abilityNames]);
    this.#boostChoice(options);
  }

  // Feats
  giveFeatName(feat: Feat) { 
    // GIVE-FEAT-NAME takes a Feat object, meaning we also get a list of traits. There are a total
    // of 2 out of nearly a 1000 GIVE-FEAT-NAME calls that have traits. And they do not match anything.
    const [name, _] = feat;
    const row = feats.byNameUnique(name);
    if (row) {
      console.log('Giving new feat', row);

      // NOTE: skillID means we need to be trained in that skill
      //       "prerequisites": "master in Nature" (freetext; assuming just for display)
      //       "prerequisites": "You made a bargain with a devil or won a legal case..." (really freetext)
      //       No actual place other than prerequisites specifying "master"
      //       (checked tags, nothing there).
      
      // FIXME: If we do not meet prerequisites then we should probably not get a feat even if given to us by code.
      //        A check for preprequisites is going to be needed for the giveFeat/giveFeatFrom/giveGeneralFeat etc
      //        that provide a choice.

      this.#sheet.feats.adjust({id: row.id}, this.#ref, this.#description);

      // Now, each feat added potentially has additional code of its own that needs to be run
      if ('wsci' in row) {
        this.#sheet.executeBlock(row.wsci, `feats[${row.id}]`, row.name, this.#level);
      }
    } else {
      console.warn('Unable to find feat matching GIVE-FEAT-NAME', name);
    }
  }

  #featChoice(options: FeatChoice['options'], kind: string) {
    const choice = currentlyMadeChoice(`feat-${this.#ref}`);

    if (isFeatID(choice)) {
      this.#sheet.feats.adjust({ id: choice }, this.#ref, this.#description);
    }

    this.#sheet.activeChoices.push({
      type: 'feat',
      ref: `feat-${this.#ref}`,
      level: this.#level,
      label: this.#description + ` - ${kind} Feat`,
      options
    });
  }

  #featSubset(level: Level, allOf: TagID[], anyOf: TagID[], includeSheetInAny: boolean, traits: Traits) {
    const traitIDs: TagID[] = traits
      .map(name => namedTrait(name).id);
    
    return feats
      .filter(feat => feat.level <= this.#resolveLevel(level))
      .filter(feat => {
          const extendedAllOf = [...allOf, ...traitIDs] satisfies TagID[];
          const extendedAnyOf = (includeSheetInAny? [...anyOf, ...this.#sheet.traits.value] : anyOf) satisfies TagID[];
          const tagIDs = tagIDsOf(feat);

          return extendedAllOf.every(t => tagIDs.includes(t)) 
              && (extendedAnyOf.length === 0 || extendedAnyOf.some(t => tagIDs.includes(t)))
      });
  }

  giveFeatFrom(text: string, choices: readonly string[]) { console.log(`Showing '${text}', picking feat from ${choices.join(', ')}`) }
  giveFeat(level: Level, traits: readonly string[]) { console.log(`Choice of feat <= ${level} with traits matching ${traits.join(', ')}`) }
  giveGeneralFeat(level: Level, traits: Traits) { console.log('Choice of general feat <= ', level, traits) }
  
  giveSkillFeat(level: Level, traits: Traits) { 
    const subset = this.#featSubset(level, [SKILL_TAG_ID], [GENERAL_TAG_ID], true, traits);
    const options: FeatChoice['options'] = subset.map(feat => feat.id);

    this.#featChoice(options, 'Skill');
  }
  
  giveAncestryFeat(level: Level, traits: Traits) { console.log('Choice of ancestry feat <= ', level, traits) }
  
  giveClassFeat(level: Level, traits: Traits) {
    const cls = currentClass();
    if (!cls) return;

    const classTagID = cls.tagID;

    const options: FeatChoice['options'] = [];
    const subset = this.#featSubset(level, [], [], false, traits);
    for (const feat of subset) {
      if (tagIDsOf(feat).includes(classTagID)) {
        // This feat has our class as a tag/trait
      } else {
        // The alternative lookup can also yield a hit
        if (!('genericType' in feat) || !('genTypeName' in feat))
          continue;

        if (feat.genericType !== 'CLASS-FEAT')
          continue;

        if (feat.genTypeName != currentClass()?.name)
          continue;
      }
      options.push(feat.id);
    }

    this.#featChoice(options, 'Class');
  }

  giveArchetypeFeat(level: Level, traits: Traits) { console.log('Choice of archetype feat <= ', level, traits) }

  // Languages
  giveLangName(name: Language) {
    const row = languages.byNameUnique(name);
    if (row) {
      this.#sheet.languages.adjust({id: row.id}, this.#ref, this.#description);
    } else {
      console.warn('Unable to find feat matching GIVE-LANG-NAME', name);
    }
  }

  giveLangBonusOnly() { console.log(`Choice of language, the ancestry's bonus languages as options.`) }
  giveLang() { console.log('Free choice of language') }

  // Proficiencies
  giveProfIn(prof: string, rank: Rank) {
    this.#sheet.proficiencies.adjustRank(prof, rank, this.#ref, this.#description);
  }

  giveProfIncreaseIn(prof: string) {
    this.#sheet.proficiencies.adjustRank(prof, 'increase', this.#ref, this.#description);
  }

  // Skills
  giveSkillIncrease() { console.log('Free choice of valid skill increase; Minimum level of 7 to increase a skill to master and 15 to increase to legendary') }
  giveSkill(rank: Rank, choices: Skill[]) { console.log(`Choice of valid skill to get rank ${rank} in`, choices.length === 0 ? '(free choice)' : `limited to ${choices}`) }

  // Lore
  giveLore(lore: string) { console.log(`Giving lore ${lore}`) }
  giveLoreChoose() { console.log('A new trained lore, entered by the user') }
  giveLoreChooseIncreasing() { console.log('A new trained lore, entered by the user; At 3rd level they become expert, at 7th they become master, and at 15th they become legendary') }

  // Spells
  setSpellCastingType(source: string, type: SpellcastingType) { console.log(`Setting ${source} spellcasting source to ${type}`) }
  setSpellTradition(source: string, tradition: SpellTradition) { console.log(`Setting ${source} spell tradition to ${tradition}`) }
  setSpellKeyAbility(source: string, ability: Ability) { console.log(`Setting ${source} key spell ability to ${ability}`) }
  setSpellSlots(source: string, algo: SpellSlotAlgorithm) { console.log(`Setting ${source} spell slot algorithm to ${algo}`) }
  giveSpellSlot(source: string, spellLevel: number) { console.log(`Giving a ${source} spell slot of levell ${spellLevel}`) }
  addSpellToList(source: string, spell: string, spellLevel: number|null) { console.log(`Adding "${spell}" at level ${spellLevel} to the ${source} spell list`) }
  giveFocusSpell(source: string, spell: string) { console.log(`Adding "${spell}" as focus spell using the ${source} source`) }
  giveFocusPoint() { console.log(`Increases the focus pool by one point`) }
  giveInnateSpellName(spell:string, spellLevel: number, tradition: SpellTradition, perDay: number) { console.log(`Gives ${spell} level ${spellLevel} as an innate ${tradition} spell; can be cast ${perDay === 0 ? 'any number of' : perDay} times per day`) }
  giveInnateSpell(spellLevel: number, tradition: SpellTradition, perDay: number) { console.log(`Choice of any ${spellLevel} ${tradition} spell as innate spell; can be cast ${perDay === 0 ? 'any number of' : perDay} times per day`) }

  // Resistances and Weaknesses
  giveResistance(resistance: string, level: Level) { console.log(`Gives ${resistance} resistance at level`, level) }
  giveWeakness(weakness: string, level: Level) { console.log(`Gives ${weakness} weakness at level`, level) }

  // Specializations
  giveWeaponSpecialization() { console.log('Gives weapon specialization') }
  giveGreaterWeaponSpecialization() { console.log('Gives greater weapon specialization') }
  giveArmorSpecialization(prof: string) { console.log('Gives armor specialization', prof) }
  giveWeaponCriticalSpecialization(prof: string) { console.log('Gives armor specialization', prof) }
  
  // Miscellaneous
                                          // A class feature is likely from classabilities.ts, with options among the feats
  giveClassFeatureName(feature: string, noCode: boolean) { console.log(`Adding class feature (or option) ${feature}; ${noCode ? 'skipping' : 'running'} associated code`) }
  giveCharTraitName(charTrait: string) { console.log(`Adding character trait ${charTrait}`) }
  giveCharTraitCommon() { console.log('Choice of any common ancestry trait') }
  giveCharTrait() { console.log('Choice of any ancestry trait') }
  giveDomain(source: string) { console.log(`Choice of domain for ${source}`) }
  giveDomainAdvancement(source: string) { console.log(`Choice of current domain for ${source} to get advancement`) }
                                          // Physical features are in physicalfeatures.ts
  givePhysicalFeatureName(physFeature: string) { console.log(`Giving physical feature ${physFeature}`) }
  giveSenseName(sense: string, imprecise: number|null) { console.log(`Giving sense ${sense}`, imprecise) }

  giveSpeed(type: SpeedType, speed: number | 'land_speed') {
    if (speed === 'land_speed') {
      // FIXME: Figure out land_speed; this means having one AdjustableStatistic depend on another
    } else {
      this.#sheet.speed[type].adjust({absolute: speed}, this.#ref, this.#description);
    }
  }

  giveHeritageEffectsAncestry(ancestry: string) { console.log(`Choice of heritage belonging to ${ancestry}; will gain effects`) }
  giveHeritageEffectsName(heritage: string) { console.log(`Gains the effects of the ${heritage} heritage`) }
                                          // Druidic Order etc are found in classabilities.ts; func is any key in this table
  giveScfs(clab: string, func: string) { console.log(`Running the first ${func} of ${clab}`) }
  clearDataFromCodeBlock() { console.log('Clearing everything having this code block as source') }

  // Sheet / Condition
  giveCondition(condition:string, value:number|null) { console.log(`Giving condition ${condition}`, value) }
  removeCondition(condition:string) { console.log(`Remving condition ${condition}`) }

  // Sheet / Item
  defaultWeaponRune(adjustment:SignedAdjustment, rune: string) { console.log(`By default has weapon rune of ${rune}`, adjustment) }
  defaultArmorRune(adjustment:SignedAdjustment, rune: string) { console.log(`By default has armor rune of ${rune}`, adjustment) }

  // Sheet / Stat Adjustments
      // ADJUST is any INCREASE/DECREASE with our without CONDITIONAL- prefix
  adjust(primary: string, secondary: string|null, adjust:number, type:StatAdjustType|null, conditional: string|null) { 
    console.log(`Gives a ${primary}${secondary?` / ${secondary}`:''}${type ? ` ${type}`:''} ${adjust<0?'bonus':'penalty'} of ${adjust}`, conditional) 
  }

  adjustConditional(primary: string, secondary: string|null, text:string) { console.log(`Describes ${primary}${secondary?` / ${secondary}`:''} adjustment as "${text}"`) }

  // Sheet / Misc
  displayCompanionTab() { console.log('Displaying companion tab') }
  giveWeaponFamiliarity(type: string) { console.log(`Giving familiarity with ${type} weapons`) }
  setImprovisedWeaponNoPenalty() { console.log('No penalty for improvised weapons') }
  setAddLevelToUntrainedWeapons() { console.log('Bonus to untrained weapons based on level') }
  setFinesseMeleeUseDexDamage() { console.log('Finesse melee using DEX for damage') }
  sheetConcealFeatName(name: string) { console.log('Hiding the feat', name) }
  setSize(size: Size) { console.log('Setting size to', size) }
  setMap(tier: number) { console.log('Multiple Attack Penalty set to tier', tier) }

  // Universal
  addText(text: string) { console.log(`Adding "${text}" to whatever context we are in`) }
  giveNotesField(text: string) { console.log(`Adding a fancy note field for '${text}'`) }
  defineVariable(name: string, type: string) { console.log('Defining', name, type) }
  setVariable(name: string, mutator: string|null, value:string[]|string|null) { console.log('Setting', name, mutator, value) }
  setKeyAbility(abilities:Ability[]) { console.log('Choice of key ability among', abilities, abilities.length === 1 ? 'which is actually not a choice since it is only one' : '') }
  hideFeatName(name: string) { console.log('Hiding feat', name) }
  overrideFeatLevel(name: string, level: number) { console.log('Overriding feat level', name, level) }
}

export const statementCallProcessor = new StatementCallProcessorImplementation() satisfies StatementCallProcessor & SupportedStatements as StatementCallProcessor & SupportedStatements;

// @ts-ignore
const validStatementCalls: StatementCall[] = [
  [ 'giveProfIn', 'A Home in Every Port', 'L' ],
  [ 'giveFeatFrom', 'Något', [ 'A Home in Every Port', 'Absorb Spell' ]],
  [ 'giveFeatName', ['Opportune Riposte' ] ],
  [ 'giveFeatName', ['Animal Companion', 'ranger' ] ],
  [ 'giveClassFeat', [ 'absolute', 1 ], [] ],
]

// @ts-ignore
const invalidStatementCalls: StatementCall[] = [
  // @ts-expect-error
  [ 'giveProfIn', 99, 'Luftballons' ],
  // @ts-expect-error
  [ 'giveCandy' ],
  // @ts-expect-error
  [ 'giveFeatName' ],
  // @ts-expect-error
  [ 'giveClassFeat', [ 'absolute', 'fotboll' ], [] ],
  // @ts-expect-error
  [ "adjust","SPEED",null,5,"motorcykel",null ]
]