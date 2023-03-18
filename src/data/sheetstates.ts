import type { Expression } from '../wsc/types';
import { hookupTableLookup } from '../tables';

import { ContentSrc } from './shared_types';

export interface SheetstatesTableRowConstraints {
  table: 'sheetstates';
  wsci?: Readonly<Expression[]>;
  id: number;
  name?: string;
  description?: string;
  code?: readonly string[];
  contentSrc: ContentSrc;
  homebrewID?: number;
  createdAt?: string;
  updatedAt?: string;
}

export type SheetstatesTable = typeof sheetstates;
export type SheetstatesTableRow = SheetstatesTable[number];
export type SheetstateID = SheetstatesTableRow['id'];

export const isSheetstateID = (id?: number): id is SheetstateID => !!id && !!sheetstates.byIdLax(id);
export const assertIsSheetstateID = (id?: number): asserts id is SheetstateID => { if (!isSheetstateID(id)) throw Error('Expected a SheetstateID; got ' + id); }

const _sheetstates = [
{
    "table": "sheetstates",
    "id": 1,
    "name": "Rage",
    "description": "You gain a number of temporary Hit Points equal to your level + Con mod.\nWhile you are raging:\n* : You deal 2 additional damage with melee weapons and unarmed attacks.\nThis additional damage is halved if your weapon or unarmed attack is (trait: agile).\n* : You take a -1 penalty to AC.\n* : You can’t use actions with the (trait: concentrate) trait unless they\nalso have the (trait: rage) trait. You can (action: Seek) while raging.",
    "code": [
        "DECREASE-AC=1-RAGE",
        "INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=2-RAGE",
        "INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=1-RAGE",
        "OVERRIDE-TEMP_HEALTH=LEVEL+CON_MOD",
        "IF (HAS-CLASS-ABILITY==Fury && HAS-CLASS-ABILITY==Weapon Specialization) {INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=6-RAGE}",
        "IF (HAS-CLASS-ABILITY==Fury && HAS-CLASS-ABILITY==Weapon Specialization) {INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=3-RAGE}",
        "IF (HAS-CLASS-ABILITY==Fury && HAS-CLASS-ABILITY==Greater Weapon Specialization) {INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=12-RAGE}",
        "IF (HAS-CLASS-ABILITY==Fury && HAS-CLASS-ABILITY==Greater Weapon Specialization) {INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=6-RAGE}",
        "IF (HAS-CLASS-ABILITY==Animal && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=5~damage instead from Rage for your chosen animal’s unarmed attacks}",
        "IF (HAS-CLASS-ABILITY==Animal && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=2~damage instead from Rage for your chosen animal’s unarmed attacks}",
        "IF (HAS-CLASS-ABILITY==Animal && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=12~damage instead from Rage for your chosen animal’s unarmed attacks}",
        "IF (HAS-CLASS-ABILITY==Animal && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=6~damage instead from Rage for your chosen animal’s unarmed attacks}",
        "IF (HAS-CLASS-ABILITY==Dragon) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=4~damage instead from Rage if you use draconic rage}",
        "IF (HAS-CLASS-ABILITY==Dragon) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=2~damage instead from Rage if you use draconic rage}",
        "IF (HAS-CLASS-ABILITY==Dragon && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=8~damage instead from Rage if you use draconic rage}",
        "IF (HAS-CLASS-ABILITY==Dragon && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=4~damage instead from Rage if you use draconic rage}",
        "IF (HAS-CLASS-ABILITY==Dragon && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=16~damage instead from Rage if you use draconic rage}",
        "IF (HAS-CLASS-ABILITY==Dragon && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=8~damage instead from Rage if you use draconic rage}",
        "IF (HAS-CLASS-ABILITY==Giant) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=6~damage instead from Rage when wielding a larger weapon}",
        "IF (HAS-CLASS-ABILITY==Giant) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=3~damage instead from Rage when wielding a larger weapon}",
        "IF (HAS-CLASS-ABILITY==Giant && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=10~damage instead from Rage when wielding a larger weapon}",
        "IF (HAS-CLASS-ABILITY==Giant && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=5~damage instead from Rage when wielding a larger weapon}",
        "IF (HAS-CLASS-ABILITY==Giant && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=18~damage instead from Rage when wielding a larger weapon}",
        "IF (HAS-CLASS-ABILITY==Giant && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=9~damage instead from Rage when wielding a larger weapon}",
        "IF (HAS-CLASS-ABILITY==Spirit) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=3~negative/positive damage instead from Rage if you use spirit rage}",
        "IF (HAS-CLASS-ABILITY==Spirit) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=1~negative/positive damage instead from Rage if you use spirit rage}",
        "IF (HAS-CLASS-ABILITY==Spirit && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=7~negative/positive damage instead from Rage if you use spirit rage}",
        "IF (HAS-CLASS-ABILITY==Spirit && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=3~negative/positive damage instead from Rage if you use spirit rage}",
        "IF (HAS-CLASS-ABILITY==Spirit && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=13~negative/positive damage instead from Rage if you use spirit rage}",
        "IF (HAS-CLASS-ABILITY==Spirit && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=6~negative/positive damage instead from Rage if you use spirit rage}",
        "IF (HAS-CLASS-ABILITY==Superstition) {CONDITIONAL-INCREASE-SAVE_FORT=2~status bonus against magic}",
        "IF (HAS-CLASS-ABILITY==Superstition) {CONDITIONAL-INCREASE-SAVE_REFLEX=2~status bonus against magic}",
        "IF (HAS-CLASS-ABILITY==Superstition) {CONDITIONAL-INCREASE-SAVE_WILL=2~status bonus against magic}",
        "IF (HAS-CLASS-ABILITY==Superstition) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=4~damage instead from Rage against creatures that can cast spells}",
        "IF (HAS-CLASS-ABILITY==Superstition) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=2~damage instead from Rage against creatures that can cast spells}",
        "IF (HAS-CLASS-ABILITY==Superstition && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=8~damage instead from Rage against creatures that can cast spells}",
        "IF (HAS-CLASS-ABILITY==Superstition && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=4~damage instead from Rage against creatures that can cast spells}",
        "IF (HAS-CLASS-ABILITY==Superstition && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=12~damage instead from Rage against creatures that can cast spells}",
        "IF (HAS-CLASS-ABILITY==Superstition && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=6~damage instead from Rage against creatures that can cast spells}",
        "IF (HAS-CLASS-ABILITY==Superstition && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=8~damage instead from Rage against creatures that can't cast spells}",
        "IF (HAS-CLASS-ABILITY==Superstition && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=4~damage instead from Rage against creatures that that can't cast spells}"
    ],
    "contentSrc": "CRB",
    "createdAt": "2021-03-31T22:46:11",
    "updatedAt": "2021-03-31T22:46:11"
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 2,
    "name": "Panache",
    "description": "While you have panache, you gain a +5-foot status bonus to your Speeds\nand gain a +1 circumstance bonus to checks to Tumble Through\nor to take any actions that give you panache due to your style.\nThe precise strike class feature also causes you to deal extra precision damage.",
    "code": [
        "INCREASE-SPEED=5-STATUS",
        "IF (HAS-CLASS-ABILITY==Vivacious Speed) {INCREASE-SPEED=10-STATUS}",
        "IF (HAS-CLASS-ABILITY==Vivacious Speed && HAS-LEVEL>=7) {INCREASE-SPEED=15-STATUS}",
        "IF (HAS-CLASS-ABILITY==Vivacious Speed && HAS-LEVEL>=11) {INCREASE-SPEED=20-STATUS}",
        "IF (HAS-CLASS-ABILITY==Vivacious Speed && HAS-LEVEL>=15) {INCREASE-SPEED=25-STATUS}",
        "IF (HAS-CLASS-ABILITY==Vivacious Speed && HAS-LEVEL>=19) {INCREASE-SPEED=30-STATUS}",
        "CONDITIONAL-INCREASE-SKILL_Acrobatics=1~circumstance bonus to Tumble Through"
    ],
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2021-03-31T22:46:11",
    "updatedAt": "2021-03-31T22:46:11",
    "wsci": [
        ["adjust","SPEED",null,5,"status",null],
        {"conditionals":[["hasClassAbility","==","vivacious speed"]],"consequent":["adjust","SPEED",null,10,"status",null]},
        {"conditionals":[["hasClassAbility","==","vivacious speed "],["hasLevel",">=",7]],"consequent":["adjust","SPEED",null,15,"status",null]},
        {"conditionals":[["hasClassAbility","==","vivacious speed "],["hasLevel",">=",11]],"consequent":["adjust","SPEED",null,20,"status",null]},
        {"conditionals":[["hasClassAbility","==","vivacious speed "],["hasLevel",">=",15]],"consequent":["adjust","SPEED",null,25,"status",null]},
        {"conditionals":[["hasClassAbility","==","vivacious speed "],["hasLevel",">=",19]],"consequent":["adjust","SPEED",null,30,"status",null]},
        ["adjust","SKILL","acrobatics",1,null,"circumstance bonus to Tumble Through"]
    ] satisfies Expression[]
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 8,
    "name": "Graviton Mode",
    "description": "When you enter graviton mode, you become graviton attuned and can use actions and zenith spells with the graviton trait. While graviton-attuned, you gain a +1 status bonus to Reflex saves.",
    "code": [
        "INCREASE-SAVE_REFLEX=1"
    ],
    "contentSrc": "CRB",
    "homebrewID": 99,
    "createdAt": "2021-04-28T04:15:56",
    "updatedAt": "2021-04-28T04:15:56",
    "wsci": [
        ["adjust","SAVE","reflex",1,null,null]
    ] satisfies Expression[]
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 9,
    "name": "Photon Mode",
    "description": "When you enter photon mode, you become photon attuned and can use actions and zenith spells with the photon trait. While photon-attuned, you deal additional damage equal to the number of weapon damage dice.",
    "contentSrc": "CRB",
    "homebrewID": 99,
    "createdAt": "2021-04-28T05:13:30",
    "updatedAt": "2021-04-28T05:13:30"
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 10,
    "name": "Crown of Madness",
    "description": "After you roll a Will Save with the Mental trait, regardless of success or failure, you become Frightened 1. If you ever become Frightened 4 or greater, you also become confused so long as you are Frightened 4 or above. This can only be removed via a Wish spell or by becoming The Phoenix of the End. ",
    "contentSrc": "CRB",
    "homebrewID": 243,
    "createdAt": "2021-05-22T15:03:44",
    "updatedAt": "2021-05-22T15:03:44"
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 29,
    "name": "Rejected",
    "description": "When a creature critically fails a check to Seduce, that creature rolls a Diplomacy check against its own Will DC as it attempts to shake off the blow to its ego.\nFailure: The creature suffers a -1 circumstance penalty to all Deception, Diplomacy, Intimidation, Perception, and Performance checks and DCs, as well as all sexual actions and activities, for 10 minutes.\nCritical Failure: As with failure, but the effects last for 1 hour.",
    "contentSrc": "CRB",
    "homebrewID": 269,
    "createdAt": "2021-06-02T00:08:55",
    "updatedAt": "2021-06-02T00:08:55"
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 40,
    "name": "Spirt Barbarian Rage",
    "description": "You gain a number of temporary Hit Points equal to your level + Con mod.\nWhile you are raging:\n* : You deal 2 additional damage with melee weapons and unarmed attacks.\nThis additional damage is halved if your weapon or unarmed attack is (trait: agile).\n* : You take a -1 penalty to AC.\n* : You can’t use actions with the (trait: concentrate) trait unless they\nalso have the (trait: rage) trait. You can (action: Seek) while raging.",
    "code": [
        "DECREASE-AC=1-RAGE",
        "INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=3-RAGE",
        "INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=1-RAGE",
        "OVERRIDE-TEMP_HEALTH=LEVEL+CON_MOD",
        "IF (HAS-CLASS-ABILITY==Spirit) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=3~negative/positive damage instead from Rage if you use spirit rage}",
        "IF (HAS-CLASS-ABILITY==Spirit) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=1~negative/positive damage instead from Rage if you use spirit rage}",
        "IF (HAS-CLASS-ABILITY==Spirit && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=7~negative/positive damage instead from Rage if you use spirit rage}",
        "IF (HAS-CLASS-ABILITY==Spirit && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=3~negative/positive damage instead from Rage if you use spirit rage}",
        "IF (HAS-CLASS-ABILITY==Spirit && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=13~negative/positive damage instead from Rage if you use spirit rage}",
        "IF (HAS-CLASS-ABILITY==Spirit && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=6~negative/positive damage instead from Rage if you use spirit rage}"
    ],
    "contentSrc": "CRB",
    "homebrewID": 288,
    "createdAt": "2021-06-18T06:18:04",
    "updatedAt": "2021-06-18T06:18:04"
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 41,
    "name": "Darkside",
    "description": "You envelop yourself with darkness. You become Drained 1 (Or increase your drained condition by 1). This trance lasts for 1 minute, until no enemies remain or until you fall unconscious, whichever comes first. You can end this trance prematurely by taking 1 action with the Concentrate trait.\nWhile in darkside:\n* : You deal 2 additional damage with melee weapons and unarmed attacks.\nThis additional damage is halved if your weapon or unarmed attack is (trait: agile).\n* : You take a -1 penalty to AC.\n* : You can’t use actions with the (trait: concentrate) trait unless they\nalso have the (trait: rage) trait. You can (action: Seek) while raging.",
    "code": [
        "GIVE-CONDITION=Drained:1",
        "INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=2-DARKSIDE",
        "INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=1-DARKSIDE",
        "CONDITIONAL-INCREASE-SKILL_INTIMIDATION=1~status bonus to Demoralize."
    ],
    "contentSrc": "CRB",
    "homebrewID": 312,
    "createdAt": "2021-06-26T23:00:58",
    "updatedAt": "2021-06-26T23:00:58"
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 42,
    "name": "Furious Flame",
    "description": "While in this form your Melee strikes deal 2 Additional fire damage.\nIf you have the Advanced Forms feat, this increases to 4 Additional fire damage.\nYou gain flow by successfully landing Strikes.",
    "code": [
        "IF (HAS-FEAT==Advanced Forms) {CONDITIONAL-INCREASE-ATTACKS_DMG_BONUS=4~additional fire damage while in furious flame form.} ELSE {CONDITIONAL-INCREASE-ATTACKS_DMG_BONUS=2~additional fire damage while in furious flame form.}",
        "IF (HAS-FEAT==Elemental Aegis) {GIVE-RESISTANCE=Fire:Half_Level+1}"
    ],
    "contentSrc": "CRB",
    "homebrewID": 312,
    "createdAt": "2021-07-01T20:53:09",
    "updatedAt": "2021-07-01T20:53:09",
    "wsci": [
        {"conditionals":[["hasFeat","==","advanced forms"]],"consequent":["adjust","ATTACKS","dmg_bonus",4,null,"additional fire damage while in furious flame form."],"alternate":["adjust","ATTACKS","dmg_bonus",2,null,"additional fire damage while in furious flame form."]},
        {"conditionals":[["hasFeat","==","elemental aegis"]],"consequent":["giveResistance","fire",["half",1]]}
    ] satisfies Expression[]
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 44,
    "name": "Corrosive Canyon",
    "description": "This form grants you a +1 circumstance bonus to Athletics checks made to Trip, Shove, Grapple or Disarm.\nIf you have the Advanced Forms feat, this increases to +2.\nYou gain flow by successfully Trip, Shove, Grapple, Disarm or cause a inflict a status condition onto a target.",
    "code": [
        "CONDITIONAL-INCREASE-SKILL_ATHLETICS=1~circumstance bonus to Trip, Shove, Grapple or Disarm.",
        "IF (HAS-FEAT==Advanced Forms) {CONDITIONAL-INCREASE-SKILL_ATHLETICS=2~circumstance bonus to Trip, Shove, Grapple or Disarm.}",
        "IF (HAS-FEAT==Elemental Aegis) {GIVE-RESISTANCE=Acid:Half_Level+1}"
    ],
    "contentSrc": "CRB",
    "homebrewID": 312,
    "createdAt": "2021-07-01T21:08:42",
    "updatedAt": "2021-07-01T21:08:42",
    "wsci": [
        ["adjust","SKILL","athletics",1,null,"circumstance bonus to Trip, Shove, Grapple or Disarm."],
        {"conditionals":[["hasFeat","==","advanced forms"]],"consequent":["adjust","SKILL","athletics",2,null,"circumstance bonus to Trip, Shove, Grapple or Disarm."]},
        {"conditionals":[["hasFeat","==","elemental aegis"]],"consequent":["giveResistance","acid",["half",1]]}
    ] satisfies Expression[]
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 45,
    "name": "Lightning Lancer",
    "description": "This form grants you a +10 status bonus to all Speeds.\nIf you have the Advanced Forms feat, this increases to +20 status bonus to all Speeds.\nYou gain flow by taking the Step or Stride actions.",
    "code": [
        "INCREASE-SPEED=10-STATUS",
        "IF (HAS-FEAT==Advanced Forms) {INCREASE-SPEED=20-STATUS}",
        "IF (HAS-FEAT==Elemental Aegis) {GIVE-RESISTANCE=Electricity:Half_Level+1}"
    ],
    "contentSrc": "CRB",
    "homebrewID": 312,
    "createdAt": "2021-07-01T21:13:46",
    "updatedAt": "2021-07-01T21:13:46",
    "wsci": [
        ["adjust","SPEED",null,10,"status",null],
        {"conditionals":[["hasFeat","==","advanced forms"]],"consequent":["adjust","SPEED",null,20,"status",null]},
        {"conditionals":[["hasFeat","==","elemental aegis"]],"consequent":["giveResistance","electricity",["half",1]]}
    ] satisfies Expression[]
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 46,
    "name": "Frigid Fortress",
    "description": "You gain resistance 1 to physical damage, but weakness 2 to fire and electric. At 8th level the resistance increases to 3 and the weakness to 6.\nIf you have the Advanced Forms feat, the resistance increases to 5 and the weakness to 9. Then to 7 and 12 at 16th level.\nYou gain flow by gaining bonuses to AC, using the Shield Block reaction or succeeding in saving throws.",
    "code": [
        "IF (HAS-LEVEL<=7) {GIVE-WEAKNESS=Fire:2}",
        "IF (HAS-LEVEL<=7) {GIVE-WEAKNESS=Electric:2}",
        "IF (HAS-LEVEL<=7) {GIVE-RESISTANCE=All Physical:1}",
        "IF (HAS-LEVEL>=8) {GIVE-WEAKNESS=Fire:6}",
        "IF (HAS-LEVEL>=8) {GIVE-WEAKNESS=Electric:6}",
        "IF (HAS-LEVEL>=8) {GIVE-RESISTANCE=All Physical:3}",
        "IF (HAS-FEAT==Advanced Forms && HAS-LEVEL<=15) {GIVE-RESISTANCE=All Physical:5}",
        "IF (HAS-FEAT==Advanced Forms && HAS-LEVEL<=15) {GIVE-WEAKNESS=Fire:9}",
        "IF (HAS-FEAT==Advanced Forms && HAS-LEVEL<=15) {GIVE-WEAKNESS=Electric:9}",
        "IF (HAS-FEAT==Advanced Forms && HAS-LEVEL>=16) {GIVE-RESISTANCE=All Physical:7}",
        "IF (HAS-FEAT==Advanced Forms && HAS-LEVEL>=16) {GIVE-WEAKNESS=Fire:12}",
        "IF (HAS-FEAT==Advanced Forms && HAS-LEVEL>=16) {GIVE-WEAKNESS=Electric:12}",
        "IF (HAS-FEAT==Elemental Aegis) {GIVE-RESISTANCE=Cold:Half_Level+1}"
    ],
    "contentSrc": "CRB",
    "homebrewID": 312,
    "createdAt": "2021-07-01T21:21:38",
    "updatedAt": "2021-07-01T21:21:38",
    "wsci": [
        {"conditionals":[["hasLevel","<=",7]],"consequent":["giveWeakness","fire",["absolute",2]]},
        {"conditionals":[["hasLevel","<=",7]],"consequent":["giveWeakness","electric",["absolute",2]]},
        {"conditionals":[["hasLevel","<=",7]],"consequent":["giveResistance","all physical",["absolute",1]]},
        {"conditionals":[["hasLevel",">=",8]],"consequent":["giveWeakness","fire",["absolute",6]]},
        {"conditionals":[["hasLevel",">=",8]],"consequent":["giveWeakness","electric",["absolute",6]]},
        {"conditionals":[["hasLevel",">=",8]],"consequent":["giveResistance","all physical",["absolute",3]]},
        {"conditionals":[["hasFeat","==","advanced forms "],["hasLevel","<=",15]],"consequent":["giveResistance","all physical",["absolute",5]]},
        {"conditionals":[["hasFeat","==","advanced forms "],["hasLevel","<=",15]],"consequent":["giveWeakness","fire",["absolute",9]]},
        {"conditionals":[["hasFeat","==","advanced forms "],["hasLevel","<=",15]],"consequent":["giveWeakness","electric",["absolute",9]]},
        {"conditionals":[["hasFeat","==","advanced forms "],["hasLevel",">=",16]],"consequent":["giveResistance","all physical",["absolute",7]]},
        {"conditionals":[["hasFeat","==","advanced forms "],["hasLevel",">=",16]],"consequent":["giveWeakness","fire",["absolute",12]]},
        {"conditionals":[["hasFeat","==","advanced forms "],["hasLevel",">=",16]],"consequent":["giveWeakness","electric",["absolute",12]]},
        {"conditionals":[["hasFeat","==","elemental aegis"]],"consequent":["giveResistance","cold",["half",1]]}
    ] satisfies Expression[]
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 49,
    "name": "Giant Rage",
    "description": "You gain a number of temporary Hit Points equal to your level + Con mod.\nWhile you are raging:\n* : You deal 2 additional damage with melee weapons and unarmed attacks.\nThis additional damage is halved if your weapon or unarmed attack is (trait: agile).\n* : You take a -1 penalty to AC.\n* : You can’t use actions with the (trait: concentrate) trait unless they\nalso have the (trait: rage) trait. You can (action: Seek) while raging.",
    "code": [
        "DECREASE-AC=1-RAGE",
        "INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=6-RAGE",
        "INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=3-RAGE",
        "OVERRIDE-TEMP_HEALTH=LEVEL+CON_MOD",
        "IF (HAS-CLASS-ABILITY==Giant) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=6~damage instead from Rage when wielding a larger weapon}",
        "IF (HAS-CLASS-ABILITY==Giant) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=3~damage instead from Rage when wielding a larger weapon}",
        "IF (HAS-CLASS-ABILITY==Giant && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=10~damage instead from Rage when wielding a larger weapon}",
        "IF (HAS-CLASS-ABILITY==Giant && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=5~damage instead from Rage when wielding a larger weapon}",
        "IF (HAS-CLASS-ABILITY==Giant && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=18~damage instead from Rage when wielding a larger weapon}",
        "IF (HAS-CLASS-ABILITY==Giant && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=9~damage instead from Rage when wielding a larger weapon}"
    ],
    "contentSrc": "CRB",
    "homebrewID": 341,
    "createdAt": "2021-07-27T03:02:46",
    "updatedAt": "2021-07-27T03:02:46"
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 50,
    "name": "Graviton Mode",
    "description": "When you enter graviton mode, you become graviton attuned and can use actions and zenith spells with the graviton trait. While graviton-attuned, you gain a +1 status bonus to Reflex saves.\n\n",
    "code": [
        "INCREASE-SAVE_REFLEX=1-STATUS"
    ],
    "contentSrc": "CRB",
    "homebrewID": 327,
    "createdAt": "2021-07-28T07:26:41",
    "updatedAt": "2021-07-28T07:26:41",
    "wsci": [
        ["adjust","SAVE","reflex",1,"status",null]
    ] satisfies Expression[]
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 51,
    "name": "Photon Mode",
    "description": "When you enter photon mode, you become photon attuned and can use actions and zenith spells with the photon trait. While photon-attuned, you deal additional damage equal to the number of weapon damage dice.",
    "contentSrc": "CRB",
    "homebrewID": 327,
    "createdAt": "2021-07-28T07:29:04",
    "updatedAt": "2021-07-28T07:29:04"
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 58,
    "name": "Inspiring Marshal Stance",
    "description": "You become a brilliant example of dedication and poise in battle, encouraging your allies to follow suit. When you spend this action, attempt a Diplomacy check. The DC is usually a standard-difficulty DC of your level, but the GM can assign a different DC based on the circumstances. The effect depends on the result of your check.\n\nCritical Success Your marshal’s aura increases to a 20-foot emanation and grants you and allies a +1 status bonus to attack rolls and saves against mental effects.\nSuccess As critical success, but your aura’s size doesn’t increase.\nFailure You fail to enter the stance.\nCritical Failure You fail to enter the stance and can’t take this action again for 1 minute.",
    "code": [
        "INCREASE-ATTACKS=1"
    ],
    "contentSrc": "CRB",
    "homebrewID": 383,
    "createdAt": "2021-09-04T03:53:08",
    "updatedAt": "2021-09-04T03:53:08",
    "wsci": [
        ["adjust","ATTACKS",null,1,null,null]
    ] satisfies Expression[]
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 60,
    "name": "Overdrive",
    "description": "Your Strikes deal additional damage equal to your Intelligence modifier on a Critical Success or half on a Success.",
    "contentSrc": "GUNS-AND-GEARS",
    "createdAt": "2021-09-04T03:56:42",
    "updatedAt": "2021-09-04T03:56:42"
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 64,
    "name": "Spectral Movement",
    "description": "Your walking speed increases by 10 feet. In addition, you \ncan move through other creatures and solid objects as \nif they were difficult terrain and you can move through \ndifficult terrain as if it were normal. If you end your \nturn inside a creature or object, you’re shunted back to \nwhere you entered and take 1d6 force damage per 10 feet \n(rounded up) you travel in this way. Objects that have \nbeen in your possession less than 1 minute cannot move \nthrough creatures and objects with you.\nAs a final benefit of this boon, due to your incorporeal \nnature, during your turn you have resistance to all \nnonmagical bludgeoning, slashing, and piercing damage \nfrom sources you can see.",
    "code": [
        "GIVE-RESISTANCE=All Physical:5"
    ],
    "contentSrc": "CRB",
    "homebrewID": 426,
    "createdAt": "2021-10-29T19:24:53",
    "updatedAt": "2021-10-29T19:24:53",
    "wsci": [
        ["giveResistance","all physical",["absolute",5]]
    ] satisfies Expression[]
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 65,
    "name": "Arcane Cascade",
    "description": "While you are in Cascade:\n* : You deal 1 additional damage with melee Strikes.\nThis additional damage is halved if your weapon or unarmed attack is (trait: agile).\n* : you gain a +10-foot status bonus to your Speeds.",
    "code": [
        "INCREASE-MELEE_ATTACKS_DMG_BONUS=1-CASCADE",
        "INCREASE-SPEED=10-CASCADE",
        "IF (HAS-CLASS-ABILITY==Weapon Specialization) {INCREASE-MELEE_ATTACKS_DMG_BONUS=3-CASCADE}",
        "IF (HAS-CLASS-ABILITY==Greater Weapon Specialization) {INCREASE-MELEE_ATTACKS_DMG_BONUS=5-CASCADE}"
    ],
    "contentSrc": "CRB",
    "homebrewID": 415,
    "createdAt": "2021-11-07T16:04:27",
    "updatedAt": "2021-11-07T16:04:27"
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 75,
    "name": "Reduce",
    "description": "When Enlarge effects expire or are dismissed.",
    "code": [
        "SET-SIZE=MEDIUM",
        "REMOVE-CONDITION=Clumsy"
    ],
    "contentSrc": "CRB",
    "homebrewID": 321,
    "createdAt": "2021-12-02T19:19:11",
    "updatedAt": "2021-12-02T19:19:11",
    "wsci": [
        ["setSize","medium"],
        ["removeCondition","clumsy"]
    ] satisfies Expression[]
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 76,
    "name": "Enlarge",
    "description": "Bolstered by magical power, the target grows to size Large. Its equipment grows with it but returns to natural size if removed. The creature is clumsy 1. Its reach increases by 5 feet (or by 10 feet if it started out Tiny), and it gains a +2 status bonus to melee damage. This spell has no effect on a Large or larger creature.",
    "code": [
        "SET-SIZE=LARGE",
        "INCREASE-MELEE_ATTACKS_DMG_BONUS=2-STATUS",
        "GIVE-CONDITION=Clumsy:1"
    ],
    "contentSrc": "CRB",
    "homebrewID": 321,
    "createdAt": "2021-12-02T19:19:20",
    "updatedAt": "2021-12-02T19:19:20",
    "wsci": [
        ["setSize","large"],
        ["adjust","MELEE_ATTACKS","dmg_bonus",2,"status",null],
        ["giveCondition","clumsy",1]
    ] satisfies Expression[]
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 78,
    "name": "Arcane Cascade",
    "description": "While you’re in the stance, your melee Strikes deal 1 extra damage. This damage increases to 2 if you have weapon specialization and 3 if you have greater weapon specialization. Any Strike that benefits from this damage gains the arcane trait, making it magical.",
    "code": [
        "INCREASE-SPEED=10-STATUS",
        "IF (HAS-CLASS-ABILITY==Weapon Specialization) {INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=1-ARCANE_CASCADE}",
        "IF (HAS-CLASS-ABILITY==Greater Weapon Specialization) {INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=2-ARCANE_CASCADE}"
    ],
    "contentSrc": "CRB",
    "homebrewID": 475,
    "createdAt": "2021-12-20T17:51:13",
    "updatedAt": "2021-12-20T17:51:13"
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 88,
    "name": "Rage Fixed",
    "description": "You gain a number of temporary Hit Points equal to your level + Con mod.\nWhile you are raging:\n* : You deal 2 additional damage with melee weapons and unarmed attacks.\nThis additional damage is halved if your weapon or unarmed attack is (trait: agile).\n* : You take a -1 penalty to AC.\n* : You can’t use actions with the (trait: concentrate) trait unless they\nalso have the (trait: rage) trait. You can (action: Seek) while raging.",
    "code": [
        "DECREASE-AC=1-RAGE",
        "INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=2-RAGE",
        "INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=1-RAGE",
        "OVERRIDE-TEMP_HEALTH=LEVEL+CON_MOD",
        "IF (HAS-CLASS-ABILITY==Fury && HAS-CLASS-ABILITY==Weapon Specialization) {INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=6-RAGE}",
        "IF (HAS-CLASS-ABILITY==Fury && HAS-CLASS-ABILITY==Weapon Specialization) {INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=3-RAGE}",
        "IF (HAS-CLASS-ABILITY==Fury && HAS-CLASS-ABILITY==Greater Weapon Specialization) {INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=12-RAGE}",
        "IF (HAS-CLASS-ABILITY==Fury && HAS-CLASS-ABILITY==Greater Weapon Specialization) {INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=6-RAGE}",
        "IF (HAS-CLASS-ABILITY==Animal && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=5~damage instead from Rage for your chosen animal’s unarmed attacks}",
        "IF (HAS-CLASS-ABILITY==Animal && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=2~damage instead from Rage for your chosen animal’s unarmed attacks}",
        "IF (HAS-CLASS-ABILITY==Animal && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=12~damage instead from Rage for your chosen animal’s unarmed attacks}",
        "IF (HAS-CLASS-ABILITY==Animal && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=6~damage instead from Rage for your chosen animal’s unarmed attacks}",
        "IF (HAS-CLASS-ABILITY==Dragon) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=4~damage instead from Rage if you use draconic rage}",
        "IF (HAS-CLASS-ABILITY==Dragon) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=2~damage instead from Rage if you use draconic rage}",
        "IF (HAS-CLASS-ABILITY==Dragon && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=8~damage instead from Rage if you use draconic rage}",
        "IF (HAS-CLASS-ABILITY==Dragon && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=4~damage instead from Rage if you use draconic rage}",
        "IF (HAS-CLASS-ABILITY==Dragon && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=16~damage instead from Rage if you use draconic rage}",
        "IF (HAS-CLASS-ABILITY==Dragon && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=8~damage instead from Rage if you use draconic rage}",
        "IF (HAS-CLASS-ABILITY==Giant) {INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=4}",
        "IF (HAS-CLASS-ABILITY==Giant) {INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=2}",
        "IF (HAS-CLASS-ABILITY==Giant && HAS-CLASS-ABILITY==Weapon Specialization) {INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=8}",
        "IF (HAS-CLASS-ABILITY==Giant && HAS-CLASS-ABILITY==Weapon Specialization) {INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=3}",
        "IF (HAS-CLASS-ABILITY==Giant && HAS-CLASS-ABILITY==Greater Weapon Specialization) {INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=16}",
        "IF (HAS-CLASS-ABILITY==Giant && HAS-CLASS-ABILITY==Greater Weapon Specialization) {INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=7}",
        "IF (HAS-CLASS-ABILITY==Spirit) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=3~negative/positive damage instead from Rage if you use spirit rage}",
        "IF (HAS-CLASS-ABILITY==Spirit) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=1~negative/positive damage instead from Rage if you use spirit rage}",
        "IF (HAS-CLASS-ABILITY==Spirit && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=7~negative/positive damage instead from Rage if you use spirit rage}",
        "IF (HAS-CLASS-ABILITY==Spirit && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=3~negative/positive damage instead from Rage if you use spirit rage}",
        "IF (HAS-CLASS-ABILITY==Spirit && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=13~negative/positive damage instead from Rage if you use spirit rage}",
        "IF (HAS-CLASS-ABILITY==Spirit && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=6~negative/positive damage instead from Rage if you use spirit rage}",
        "IF (HAS-CLASS-ABILITY==Superstition) {CONDITIONAL-INCREASE-SAVE_FORT=2~status bonus against magic}",
        "IF (HAS-CLASS-ABILITY==Superstition) {CONDITIONAL-INCREASE-SAVE_REFLEX=2~status bonus against magic}",
        "IF (HAS-CLASS-ABILITY==Superstition) {CONDITIONAL-INCREASE-SAVE_WILL=2~status bonus against magic}",
        "IF (HAS-CLASS-ABILITY==Superstition) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=4~damage instead from Rage against creatures that can cast spells}",
        "IF (HAS-CLASS-ABILITY==Superstition) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=2~damage instead from Rage against creatures that can cast spells}",
        "IF (HAS-CLASS-ABILITY==Superstition && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=8~damage instead from Rage against creatures that can cast spells}",
        "IF (HAS-CLASS-ABILITY==Superstition && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=4~damage instead from Rage against creatures that can cast spells}",
        "IF (HAS-CLASS-ABILITY==Superstition && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=12~damage instead from Rage against creatures that can cast spells}",
        "IF (HAS-CLASS-ABILITY==Superstition && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=6~damage instead from Rage against creatures that can cast spells}",
        "IF (HAS-CLASS-ABILITY==Superstition && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=8~damage instead from Rage against creatures that can't cast spells}",
        "IF (HAS-CLASS-ABILITY==Superstition && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=4~damage instead from Rage against creatures that that can't cast spells}"
    ],
    "contentSrc": "CRB",
    "homebrewID": 415,
    "createdAt": "2022-01-12T04:27:08",
    "updatedAt": "2022-01-12T04:27:08"
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 90,
    "name": "Rage giant",
    "description": "You gain a number of temporary Hit Points equal to your level + Con mod.\nWhile you are raging:\n* : You deal 2 additional damage with melee weapons and unarmed attacks.\nThis additional damage is halved if your weapon or unarmed attack is (trait: agile).\n* : You take a -1 penalty to AC.\n* : You can’t use actions with the (trait: concentrate) trait unless they\nalso have the (trait: rage) trait. You can (action: Seek) while raging.",
    "code": [
        "DECREASE-AC=1-RAGE",
        "INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=2-RAGE",
        "INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=1-RAGE",
        "OVERRIDE-TEMP_HEALTH=LEVEL+CON_MOD",
        "IF (HAS-CLASS-ABILITY==Giant) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=6~damage instead from Rage when wielding a larger weapon}",
        "IF (HAS-CLASS-ABILITY==Giant) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=3~damage instead from Rage when wielding a larger weapon}",
        "IF (HAS-CLASS-ABILITY==Giant && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=10~damage instead from Rage when wielding a larger weapon}",
        "IF (HAS-CLASS-ABILITY==Giant && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=5~damage instead from Rage when wielding a larger weapon}",
        "IF (HAS-CLASS-ABILITY==Giant && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=18~damage instead from Rage when wielding a larger weapon}",
        "IF (HAS-CLASS-ABILITY==Giant && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=9~damage instead from Rage when wielding a larger weapon}"
    ],
    "contentSrc": "CRB",
    "homebrewID": 288,
    "createdAt": "2022-01-29T19:51:29",
    "updatedAt": "2022-01-29T19:51:29"
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 91,
    "name": "Giant Rage",
    "description": "You gain a number of temporary Hit Points equal to your level + Con mod.\nWhile you are raging:\n* : You deal 2 additional damage with melee weapons and unarmed attacks.\nThis additional damage is halved if your weapon or unarmed attack is (trait: agile).\n* : You take a -1 penalty to AC.\n* : You can’t use actions with the (trait: concentrate) trait unless they\nalso have the (trait: rage) trait. You can (action: Seek) while raging.",
    "code": [
        "DECREASE-AC=1-RAGE",
        "INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=2-RAGE",
        "INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=1-RAGE",
        "OVERRIDE-TEMP_HEALTH=LEVEL+CON_MOD",
        "IF (HAS-CLASS-ABILITY==Giant) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=6~damage instead from Rage when wielding a larger weapon}",
        "IF (HAS-CLASS-ABILITY==Giant) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=3~damage instead from Rage when wielding a larger weapon}",
        "IF (HAS-CLASS-ABILITY==Giant && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=10~damage instead from Rage when wielding a larger weapon}",
        "IF (HAS-CLASS-ABILITY==Giant && HAS-CLASS-ABILITY==Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=5~damage instead from Rage when wielding a larger weapon}",
        "IF (HAS-CLASS-ABILITY==Giant && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=18~damage instead from Rage when wielding a larger weapon}",
        "IF (HAS-CLASS-ABILITY==Giant && HAS-CLASS-ABILITY==Greater Weapon Specialization) {CONDITIONAL-INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=9~damage instead from Rage when wielding a larger weapon}"
    ],
    "contentSrc": "CRB",
    "homebrewID": 509,
    "createdAt": "2022-01-29T19:53:58",
    "updatedAt": "2022-01-29T19:53:58"
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 93,
    "name": "Panache (Precision Damage)",
    "description": "While you have panache, you gain a +5-foot status bonus to your Speeds and gain a +1 circumstance bonus to checks to Tumble Through or to take any actions that give you panache due to your style.\n\nThe precise strike class feature also causes you to deal extra precision damage.",
    "code": [
        "INCREASE-SPEED=5-STATUS",
        "IF (HAS-CLASS-ABILITY==Vivacious Speed) {INCREASE-SPEED=10-STATUS}",
        "IF (HAS-CLASS-ABILITY==Vivacious Speed && HAS-LEVEL>=7) {INCREASE-SPEED=15-STATUS}",
        "IF (HAS-CLASS-ABILITY==Vivacious Speed && HAS-LEVEL>=11) {INCREASE-SPEED=20-STATUS}",
        "IF (HAS-CLASS-ABILITY==Vivacious Speed && HAS-LEVEL>=15) {INCREASE-SPEED=25-STATUS}",
        "IF (HAS-CLASS-ABILITY==Vivacious Speed && HAS-LEVEL>=19) {INCREASE-SPEED=30-STATUS}",
        "CONDITIONAL-INCREASE-SKILL_Acrobatics=1~circumstance bonus to Tumble Through",
        "INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=2"
    ],
    "contentSrc": "CRB",
    "homebrewID": 498,
    "createdAt": "2022-03-01T23:11:07",
    "updatedAt": "2022-03-01T23:11:07",
    "wsci": [
        ["adjust","SPEED",null,5,"status",null],
        {"conditionals":[["hasClassAbility","==","vivacious speed"]],"consequent":["adjust","SPEED",null,10,"status",null]},
        {"conditionals":[["hasClassAbility","==","vivacious speed "],["hasLevel",">=",7]],"consequent":["adjust","SPEED",null,15,"status",null]},
        {"conditionals":[["hasClassAbility","==","vivacious speed "],["hasLevel",">=",11]],"consequent":["adjust","SPEED",null,20,"status",null]},
        {"conditionals":[["hasClassAbility","==","vivacious speed "],["hasLevel",">=",15]],"consequent":["adjust","SPEED",null,25,"status",null]},
        {"conditionals":[["hasClassAbility","==","vivacious speed "],["hasLevel",">=",19]],"consequent":["adjust","SPEED",null,30,"status",null]},
        ["adjust","SKILL","acrobatics",1,null,"circumstance bonus to Tumble Through"],
        ["adjust","AGILE_MELEE_ATTACKS_DMG_BONUS",null,2,null,null]
    ] satisfies Expression[]
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 105,
    "name": "Overdrive - Speed Boosters",
    "description": "Temporarily cranking the gizmos on your body into overdrive, you try to add greater power to your attacks. Attempt a Crafting check that has a standard DC for your level.\nCritical Success Your gizmos go into a state of incredible efficiency called critical overdrive, adding great power to your attacks. Your Strikes deal additional damage equal to your Intelligence modifier for 1 minute. After the Overdrive ends, your gizmos become unusable as they cool down or reset, and you can't use Overdrive for 1 minute.\nSuccess Your gizmos go into overdrive, adding power to your attacks. As critical success, except the additional damage is equal to half your Intelligence modifier.\nFailure You make a miscalculation and nothing happens.\nCritical Failure Whoops! Something explodes. You take fire damage equal to your level, and you can't use Overdrive again for 1 minute as your gizmos cool down and reset.\n\nSpecial When under the effects of Overdrive, you can still use the Overdrive action. You can't extend your Overdrive's duration this way, but you can turn an overdrive into a critical overdrive if you critically succeed. A failure has no effect on your current Overdrive, and you end your Overdrive on a critical failure.",
    "code": [
        "INCREASE-SPEED=10-STATUS",
        "INCREASE-MELEE_ATTACKS_DMG_BONUS=INT_MOD",
        "INCREASE-RANGED_ATTACKS_DMG_BONUS=INT_MOD"
    ],
    "contentSrc": "CRB",
    "homebrewID": 541,
    "createdAt": "2022-03-02T00:58:06",
    "updatedAt": "2022-03-02T00:58:06"
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 136,
    "name": "Meta Speed",
    "description": "You channel your Eldritch energies to move at insane speeds.\n- You gain the Meta Charge ability.",
    "code": [
        "INCREASE-SPEED=30-STATUS",
        "GIVE-FEAT-NAME=Meta Charge",
        "IF (HAS-FEAT-NAME==Improved Eldritch Power) {INCREASE-SPEED=60-STATUS}",
        "IF (HAS-FEAT-NAME==Epic Eldritch Power) {INCREASE-SPEED=90-STATUS}"
    ],
    "contentSrc": "CRB",
    "homebrewID": 541,
    "createdAt": "2022-03-04T01:56:21",
    "updatedAt": "2022-03-04T01:56:21"
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 144,
    "name": "Meta Strength",
    "description": "You flood your muscles with Eldritch energy.\n- Strength increases by 4.\n",
    "code": [
        "INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=2-META STRENGTH",
        "INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=1-META STRENGTH",
        "INCREASE-SKILL_Athletics=2",
        "IF (HAS-FEAT-NAME==Improved Eldritch Power) {INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=4-META STRENGTH}",
        "IF (HAS-FEAT-NAME==Improved Eldritch Power) {INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=2-META STRENGTH}",
        "IF (HAS-FEAT-NAME==Improved Eldritch Power) {INCREASE-SKILL_Athletics=4}",
        "IF (HAS-FEAT-NAME==EPIC Eldritch Power) {INCREASE-NON_AGILE_MELEE_ATTACKS_DMG_BONUS=8-META STRENGTH}",
        "IF (HAS-FEAT-NAME==EPIC Eldritch Power) {INCREASE-AGILE_MELEE_ATTACKS_DMG_BONUS=4-META STRENGTH}",
        "IF (HAS-FEAT-NAME==EPIC Eldritch Power) {INCREASE-SKILL_Athletics=8}"
    ],
    "contentSrc": "CRB",
    "homebrewID": 541,
    "createdAt": "2022-03-04T03:40:21",
    "updatedAt": "2022-03-04T03:40:21"
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 146,
    "name": "Transform",
    "description": "While you are transformed:\n• You gain a +5-foot status bonus to your Speed.\n• You gain a +1-status bonus to your Armor Class.\n• A weapon that you are wielding gains the agile trait.\nThe weapon’s damage die goes down by one step (d12\nto d10, d10 to d8, d8 to d6, d6 to d4). If the weapon\nalready has the agile trait, its damage die does not go\ndown by one step.\nAfter your transformation ends, you can not transform\nagain for 1 minute.",
    "code": [
        "AC=1-STATUS",
        "IF (HAS-CLASS-ABILITY==Leader) {",
        "INCREASE-SAVE_FORT=1-STATUS",
        "INCREASE-SAVE_REFLEX=1-STATUS",
        "INCREASE-SAVE_Will=1-STATUS",
        "}",
        "IF (HAS-CLASS-ABILITY==Transformation Improvement && HAS-CLASS-ABILITY==Leader) {",
        "INCREASE-SAVE_FORT=2-STATUS",
        "INCREASE-SAVE_REFLEX=2-STATUS",
        "INCREASE-SAVE_Will=2-STATUS",
        "}",
        "INCREASE-SPEED=5-STATUS",
        "IF (HAS-CLASS-ABILITY==Acrobat) {INCREASE-SPEED=10-STATUS}",
        "IF (HAS-CLASS-ABILITY==Acrobat && HAS-CLASS-ABILITY==Transformation Improvement) {INCREASE-SPEED=20-STATUS}",
        "IF (HAS-FEAT==Supernova Stride) {INCREASE-SPEED=30-STATUS}"
    ],
    "contentSrc": "CRB",
    "homebrewID": 601,
    "createdAt": "2022-04-19T23:55:15",
    "updatedAt": "2022-04-19T23:55:15"
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 148,
    "name": "Cathodic Protection",
    "description": "You gain Temporary Hit Points equal to your level.",
    "code": [
        "SET-TEMP-HP=LEVEL"
    ],
    "contentSrc": "CRB",
    "homebrewID": 738,
    "createdAt": "2022-10-10T11:55:25",
    "updatedAt": "2022-10-10T11:55:25"
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 154,
    "name": "Drunk Condition",
    "description": "If your character is drunk, this apply +1 in your ATTACK Bonus and -1 to your Intelligence and your Charisma",
    "code": [
        "INCREASE-ATTACKS=1",
        "DECREASE-SCORE_CHA=1",
        "DECREASE-SCORE_INT=1"
    ],
    "contentSrc": "CRB",
    "homebrewID": 750,
    "createdAt": "2022-10-15T02:05:02",
    "updatedAt": "2022-10-15T02:05:02",
    "wsci": [
        ["adjust","ATTACKS",null,1,null,null],
        ["adjust","SCORE","cha",-1,null,null],
        ["adjust","SCORE","int",-1,null,null]
    ] satisfies Expression[]
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 174,
    "name": "Mage Armor",
    "description": "You ward yourself with shimmering magical energy, \ngaining a +1 item bonus to AC and a maximum Dexterity modifier. \nWhile wearing mage armor, you use your unarmored proficiency to calculate your AC.",
    "code": [
        "INCREASE-AC=1-Item"
    ],
    "contentSrc": "CRB",
    "homebrewID": 759,
    "createdAt": "2022-10-20T19:18:25",
    "updatedAt": "2022-10-20T19:18:25"
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 178,
    "name": "Shield (Cantrip)",
    "description": "You raise a magical shield of force. \nThis counts as using the Raise a Shield action, \ngiving you a +1 circumstance bonus to AC until the \nstart of your next turn, but it doesn't require a hand to use.\n\nWhile the spell is in effect, you can use the Shield Block reaction \nwith your magic shield. The shield has Hardness 5. After you \nuse Shield Block, the spell ends and you can't cast it again \nfor 10 minutes. Unlike a normal Shield Block, \nyou can use the spell's reaction against the magic missile spell.\n\nHeightening the spell increases the shield's Hardness.",
    "code": [
        "INCREASE-AC=1-Circumstance"
    ],
    "contentSrc": "CRB",
    "homebrewID": 759,
    "createdAt": "2022-10-20T19:43:59",
    "updatedAt": "2022-10-20T19:43:59",
    "wsci": [
        ["adjust","AC",null,1,"circumstance",null]
    ] satisfies Expression[]
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 180,
    "name": "Inspire Courage",
    "description": "You inspire your allies with words or tunes of encouragement. \nYou and all allies in the area gain a +1 status bonus to attack rolls, \ndamage rolls, and saves against fear effects.",
    "code": [
        "INCREASE-ATTACKS_DMG_BONUS=1-Status",
        "INCREASE-ATTACKS=1-Status",
        "INCREASE-ARCANE_SPELL_ATTACK=1-Status",
        "INCREASE-OCCULT_SPELL_ATTACK=1-Status",
        "INCREASE-DIVINE_SPELL_ATTACK=1-Status",
        "INCREASE-PRIMAL_SPELL_ATTACK=1-Status",
        "CONDITIONAL-INCREASE-SAVE_Will=1~status bonus to saves against fear effects."
    ],
    "contentSrc": "CRB",
    "homebrewID": 759,
    "createdAt": "2022-10-20T20:03:56",
    "updatedAt": "2022-10-20T20:03:56",
    "wsci": [
        ["adjust","ATTACKS","dmg_bonus",1,"status",null],
        ["adjust","ATTACKS",null,1,"status",null],
        ["adjust","ARCANE_SPELL_ATTACK",null,1,"status",null],
        ["adjust","OCCULT_SPELL_ATTACK",null,1,"status",null],
        ["adjust","DIVINE_SPELL_ATTACK",null,1,"status",null],
        ["adjust","PRIMAL_SPELL_ATTACK",null,1,"status",null],
        ["adjust","SAVE","will",1,null,"status bonus to saves against fear effects."]
    ] satisfies Expression[]
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 181,
    "name": "Not Drunk",
    "description": "Gives -2 to everything",
    "code": [
        "DECREASE-ATTACKS=2",
        "DECREASE-SCORE_INT=2",
        "DECREASE-SCORE_STR=2",
        "DECREASE-SCORE_CHA=2",
        "DECREASE-SCORE_DEX=2",
        "DECREASE-SCORE_CON=2",
        "DECREASE-SCORE_WIS=2"
    ],
    "contentSrc": "CRB",
    "homebrewID": 750,
    "createdAt": "2022-10-27T03:42:22",
    "updatedAt": "2022-10-27T03:42:22",
    "wsci": [
        ["adjust","ATTACKS",null,-2,null,null],
        ["adjust","SCORE","int",-2,null,null],
        ["adjust","SCORE","str",-2,null,null],
        ["adjust","SCORE","cha",-2,null,null],
        ["adjust","SCORE","dex",-2,null,null],
        ["adjust","SCORE","con",-2,null,null],
        ["adjust","SCORE","wis",-2,null,null]
    ] satisfies Expression[]
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 185,
    "name": "Moderate Curse (Hero's Burden)",
    "description": "You thrive while adrenaline flows and your life depends on your might alone, but holding the collective battle prowess of the ages within you leaves your body weakened after a fight. You smell faintly of steel and blood no matter how you try to remove or mask the scent, you appear more muscular than you actually are, and you hear the faint clash and clamor of battle in the distance at all times.\n\nMinor Curse Your body languishes when you aren't bringing harm to your foes. You take a –2 status penalty to AC and saving throws, but each time you make a Strike, you can suspend these penalties until the start of your next turn.\n\nModerate Curse The strain of conflict wears upon your body, even though you gain vitality from it. Making a Strike reduces the penalty from your minor curse to –1 rather than suspending it entirely. You gain a +2 status bonus to weapon and unarmed damage rolls. You also gain fast healing equal to half your level while in a non-trivial combat encounter.\n\nMajor Curse Your body proves capable of truly heroic feats, but doing so interferes with your mental focus. Your moderate curse's fast healing is equal to your level, and its damage bonus is +6. You gain a +1 status bonus to weapon and unarmed attack rolls, but you are stupefied 2.",
    "code": [
        "DECREASE-AC=1-CURSE",
        "INCREASE-MELEE_ATTACKS_DMG_BONUS=2-CURSE",
        "DECREASE-SAVE_REFLEX=2-CURSE",
        "DECREASE-SAVE_WILL=2-CURSE",
        "DECREASE-SAVE_FORT=2-CURSE"
    ],
    "contentSrc": "CRB",
    "homebrewID": 383,
    "createdAt": "2022-11-10T03:16:22",
    "updatedAt": "2022-11-10T03:16:22"
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 186,
    "name": "Winter - Hair Barret",
    "description": "Winter season",
    "code": [
        "INCREASE-SPEED=5-STATUS"
    ],
    "contentSrc": "CRB",
    "homebrewID": 689,
    "createdAt": "2023-01-06T18:01:13",
    "updatedAt": "2023-01-06T18:01:13",
    "wsci": [
        ["adjust","SPEED",null,5,"status",null]
    ] satisfies Expression[]
} as const satisfies SheetstatesTableRowConstraints,
{
    "table": "sheetstates",
    "id": 187,
    "name": "Sprint - Hair Barret",
    "description": "__No Description__",
    "contentSrc": "CRB",
    "homebrewID": 689,
    "createdAt": "2023-01-06T18:02:03",
    "updatedAt": "2023-01-06T18:02:03"
} as const satisfies SheetstatesTableRowConstraints,
 ] as const;

export const sheetstates = hookupTableLookup(_sheetstates);