import type { Expression } from '../wsc/types';
import { hookupTableLookup } from '../tables';

export interface ConditionsTableRowConstraints {
  table: 'conditions';
  wsci?: Readonly<Expression[]>;
  id: number;
  name?: string;
  description?: string;
  hasValue: boolean;
  code?: readonly string[];
  createdAt?: string;
  updatedAt?: string;
}

export type ConditionsTable = typeof conditions;
export type ConditionsTableRow = ConditionsTable[number];
export type ConditionID = ConditionsTableRow['id'];

export const isConditionID = (id?: number): id is ConditionID => !!id && !!conditions.byIdLax(id);
export const assertIsConditionID = (id?: number): asserts id is ConditionID => { if (!isConditionID(id)) throw Error('Expected a ConditionID; got ' + id); }

const _conditions = [
{
    "table": "conditions",
    "id": 1,
    "name": "Encumbered",
    "description": "You are carrying more weight than you can manage. While you’re encumbered, you’re clumsy 1 and take a -10-foot penalty to all your Speeds. As with all penalties to your Speed, this can’t reduce your Speed below 5 feet.",
    "hasValue": true,
    "code": [
        "GIVE-CONDITION=Clumsy:1",
        "DECREASE-SPEED=10"
    ],
    "createdAt": "2020-01-23T20:47:30",
    "updatedAt": "2020-01-23T20:47:30",
    "wsci": [
        ["giveCondition","clumsy",1],
        ["adjust","SPEED",null,-10,null,null]
    ] satisfies Expression[]
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 2,
    "name": "Clumsy",
    "description": "Your movements become clumsy and inexact. You take a status penalty equal to the condition value to Dexterity-based checks and DCs, including AC, Reflex saves, ranged attack rolls, and skill checks using Acrobatics, Stealth, and Thievery.",
    "hasValue": true,
    "code": [
        "DECREASE-SCORE_DEX=CONDITION_VALUE_TIMES_TWO-STATUS"
    ],
    "createdAt": "2020-01-24T00:35:11",
    "updatedAt": "2020-01-24T00:35:11"
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 3,
    "name": "Blinded",
    "description": "You can’t see. All normal terrain is difficult terrain to you. You can’t detect anything using vision. You automatically critically fail Perception checks that require you to be able to see, and if vision is your only precise sense, you take a -4 status penalty to Perception checks. You are immune to (trait: visual) effects. Blinded overrides dazzled.",
    "hasValue": true,
    "code": [
        "DECREASE-PERCEPTION=4-STATUS"
    ],
    "createdAt": "2020-01-25T00:04:55",
    "updatedAt": "2020-01-25T00:04:55",
    "wsci": [
        ["adjust","PERCEPTION",null,-4,"status",null]
    ] satisfies Expression[]
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 4,
    "name": "Concealed",
    "description": "While you are concealed from a creature, such as in a thick fog, you are difficult for that creature to see. You can still be observed, but you’re tougher to target. A creature that you’re concealed from must succeed at a DC 5 flat check when targeting you with an attack, spell, or other effect. Area effects aren’t subject to this flat check. If the check fails, the attack, spell, or effect doesn’t affect you.",
    "hasValue": true,
    "createdAt": "2020-01-25T00:09:02",
    "updatedAt": "2020-01-25T00:09:02"
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 5,
    "name": "Confused",
    "description": "You don’t have your wits about you, and you attack wildly. You are flat-footed, you don’t treat anyone as your ally (though they might still treat you as theirs), and you can’t (action: Delay), (trait: Ready), or use reactions.\nYou use all your actions to (action: Strike) or cast offensive cantrips, though the GM can have you use other actions to facilitate attack, such as draw a weapon, move so that a target is in reach, and so forth. Your targets are determined randomly by the GM. If you have no other viable targets, you target yourself, automatically hitting but not scoring a critical hit. If it’s impossible for you to attack or cast spells, you babble incoherently, wasting your actions.\nEach time you take damage from an attack or spell, you can attempt a DC 11 flat check to recover from your confusion and end the condition.",
    "hasValue": true,
    "code": [
        "GIVE-CONDITION=Flat-Footed"
    ],
    "createdAt": "2020-01-25T00:10:35",
    "updatedAt": "2020-01-25T00:10:35",
    "wsci": [
        ["giveCondition","flat-footed",null]
    ] satisfies Expression[]
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 6,
    "name": "Controlled",
    "description": "Someone else is making your decisions for you, usually because you’re being commanded or magically dominated. The controller dictates how you act and can make you use any of your actions, including attacks, reactions, or even (action: Delay). The controller usually does not have to spend their own actions when controlling you.",
    "hasValue": true,
    "createdAt": "2020-01-25T00:12:14",
    "updatedAt": "2020-01-25T00:12:14"
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 7,
    "name": "Dazzled",
    "description": "Your eyes are overstimulated. If vision is your only precise sense, all creatures and objects are concealed from you.",
    "hasValue": true,
    "createdAt": "2020-01-25T00:13:06",
    "updatedAt": "2020-01-25T00:13:06"
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 8,
    "name": "Deafened",
    "description": "You can’t hear. You automatically critically fail Perception checks that require you to be able to hear. You take a -2 status penalty to Perception checks for initiative and checks that involve sound but also rely on other senses. If you perform an action with the (trait: auditory) trait, you must succeed at a DC 5 flat check or the action is lost; attempt the check after spending the action but before any effects are applied. You are immune to (trait: auditory) effects.",
    "hasValue": true,
    "code": [
        "CONDITIONAL-DECREASE-PERCEPTION=2~status penalty to checks for initiative",
        "CONDITIONAL-DECREASE-PERCEPTION=2~status penalty to checks that involve sound but also rely on other senses"
    ],
    "createdAt": "2020-01-25T00:36:51",
    "updatedAt": "2020-01-25T00:36:51",
    "wsci": [
        ["adjust","PERCEPTION",null,-2,null,"status penalty to checks for initiative"],
        ["adjust","PERCEPTION",null,-2,null,"status penalty to checks that involve sound but also rely on other senses"]
    ] satisfies Expression[]
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 9,
    "name": "Doomed",
    "description": "A powerful force has gripped your soul, calling you closer to death. The dying value at which you die is reduced by your doomed value. If your maximum dying value is reduced to 0, you instantly die. When you die, you’re no longer doomed.\nYour doomed value decreases by 1 each time you get a full night’s rest.",
    "hasValue": true,
    "createdAt": "2020-01-25T00:39:13",
    "updatedAt": "2020-01-25T00:39:13"
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 10,
    "name": "Drained",
    "description": "When a creature successfully drains you of blood or life force, you become less healthy. You take a status penalty equal to your drained value on Constitution-based checks, such as Fortitude saves. You also lose a number of Hit Points equal to your level (minimum 1) times the drained value, and your maximum Hit Points are reduced by the same amount. Losing these Hit Points doesn’t count as taking damage.\nEach time you get a full night’s rest, your drained value decreases by 1. This increases your maximum Hit Points, but you don’t immediately recover the lost Hit Points.",
    "hasValue": true,
    "code": [
        "DECREASE-SCORE_CON=CONDITION_VALUE_TIMES_TWO-STATUS"
    ],
    "createdAt": "2020-01-25T00:44:28",
    "updatedAt": "2020-01-25T00:44:28"
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 11,
    "name": "Dying",
    "description": "You are bleeding out or otherwise at death’s door. While you have this condition, you are unconscious. If you ever reach dying 4, you die. If you’re dying, you must attempt a (activity: recovery check) at the start of your turn each round to determine whether you get better or worse. Your dying condition increases by 1 if you take damage while dying, or by 2 if you take damage from an enemy’s critical hit or a critical failure on your save.\nIf you lose the dying condition by succeeding at a (activity: recovery check) and are still at 0 Hit Points, you remain unconscious, but you can wake up as described in that condition. You lose the dying condition automatically and wake up if you ever have 1 Hit Point or more. Any time you lose the dying condition, you gain the wounded 1 condition, or increase your wounded condition value by 1 if you already have that condition.",
    "hasValue": true,
    "code": [
        "GIVE-CONDITION=Unconscious"
    ],
    "createdAt": "2020-01-25T00:48:50",
    "updatedAt": "2020-01-25T00:48:50",
    "wsci": [
        ["giveCondition","unconscious",null]
    ] satisfies Expression[]
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 12,
    "name": "Enfeebled",
    "description": "You’re physically weakened. When you are enfeebled, you take a status penalty equal to the condition value to Strength-based rolls and DCs, including Strength-based melee attack rolls, Strength-based damage rolls, and Athletics checks.",
    "hasValue": true,
    "code": [
        "DECREASE-SCORE_STR=CONDITION_VALUE_TIMES_TWO-STATUS"
    ],
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33"
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 13,
    "name": "Immobilized",
    "description": "You can’t use any action with the (trait: move) trait. If you’re immobilized by something holding you in place and an external force would move you out of your space, the force must succeed at a check against either the DC of the effect holding you in place or the relevant defense (usually Fortitude DC) of the monster holding you in place.",
    "hasValue": true,
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33"
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 14,
    "name": "Fascinated",
    "description": "You are compelled to focus your attention on something, distracting you from whatever else is going on around you. You take a -2 status penalty to Perception and skill checks, and you can’t use actions with the (trait: concentrate) trait unless they or their intended consequences are related to the subject of your fascination (as determined by the GM). For instance, you might be able to (action: Seek) and (action: Recall Knowledge) about the subject, but you likely couldn’t cast a spell targeting a different creature. This condition ends if a creature uses hostile actions against you or any of your allies.",
    "hasValue": true,
    "code": [
        "DECREASE-PERCEPTION=2-STATUS"
    ],
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33",
    "wsci": [
        ["adjust","PERCEPTION",null,-2,"status",null]
    ] satisfies Expression[]
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 15,
    "name": "Fatigued",
    "description": "You’re tired and can’t summon much energy. You take a -1 status penalty to AC and saving throws. While exploring, you can’t choose an (trait: exploration) activity. You can’t use exploration activities performed while traveling. You recover from fatigue after a full night’s rest.",
    "hasValue": true,
    "code": [
        "DECREASE-AC=1-STATUS",
        "DECREASE-SAVE_FORT=1-STATUS",
        "DECREASE-SAVE_REFLEX=1-STATUS",
        "DECREASE-SAVE_WILL=1-STATUS"
    ],
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33",
    "wsci": [
        ["adjust","AC",null,-1,"status",null],
        ["adjust","SAVE","fort",-1,"status",null],
        ["adjust","SAVE","reflex",-1,"status",null],
        ["adjust","SAVE","will",-1,"status",null]
    ] satisfies Expression[]
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 16,
    "name": "Flat-Footed",
    "description": "You’re distracted or otherwise unable to focus your full attention on defense. You take a -2 circumstance penalty to AC. Some effects give you the flat-footed condition only to certain creatures or against certain attacks. Others – especially conditions – can make you universally flat-footed against everything. If a rule doesn’t specify that the condition applies only to certain circumstances, it applies to all of them; for example, many effects simply say \"The target is flat-footed.\"",
    "hasValue": true,
    "code": [
        "DECREASE-AC=2-CIRCUM"
    ],
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33",
    "wsci": [
        ["adjust","AC",null,-2,"circumstance",null]
    ] satisfies Expression[]
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 17,
    "name": "Fleeing",
    "description": "You’re forced to run away due to fear or some other compulsion. On your turn, you must spend each of your actions trying to escape the source of the fleeing condition as expediently as possible (such as by using move actions to flee, or opening doors barring your escape). The source is usually the effect or caster that gave you the condition, though some effects might define something else as the source. You can’t (action: Delay) or (action: Ready) while fleeing.",
    "hasValue": true,
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33"
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 18,
    "name": "Frightened",
    "description": "You’re gripped by fear and struggle to control your nerves. The frightened condition always includes a value. You take a status penalty equal to this value to all your checks and DCs. Unless specified otherwise, at the end of each of your turns, the value of your frightened condition decreases by 1.",
    "hasValue": true,
    "code": [
        "DECREASE-SCORE_STR=CONDITION_VALUE_TIMES_TWO-STATUS",
        "DECREASE-SCORE_DEX=CONDITION_VALUE_TIMES_TWO-STATUS",
        "DECREASE-SCORE_CON=CONDITION_VALUE_TIMES_TWO-STATUS",
        "DECREASE-SCORE_WIS=CONDITION_VALUE_TIMES_TWO-STATUS",
        "DECREASE-SCORE_INT=CONDITION_VALUE_TIMES_TWO-STATUS",
        "DECREASE-SCORE_CHA=CONDITION_VALUE_TIMES_TWO-STATUS",
        "INCREASE-MAX_HEALTH=CONDITION_VALUE*LEVEL"
    ],
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33"
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 19,
    "name": "Grabbed",
    "description": "You’re held in place by another creature, giving you the flat-footed and immobilized conditions. If you attempt a (trait: manipulate) action while grabbed, you must succeed at a DC 5 flat check or it is lost; roll the check after spending the action, but before any effects are applied.",
    "hasValue": true,
    "code": [
        "GIVE-CONDITION=Flat-Footed",
        "GIVE-CONDITION=Immobilized"
    ],
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33",
    "wsci": [
        ["giveCondition","flat-footed",null],
        ["giveCondition","immobilized",null]
    ] satisfies Expression[]
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 20,
    "name": "Hidden",
    "description": "While you’re hidden from a creature, that creature knows the space you’re in but can’t tell precisely where you are. You typically become hidden by using Stealth to (action: Hide). When (action: Seeking | Seek) a creature using only imprecise senses, it remains hidden, rather than observed. A creature you’re hidden from is flat-footed to you, and it must succeed at a DC 11 flat check when targeting you with an attack, spell, or other effect or it fails to affect you. Area effects aren’t subject to this flat check. A creature might be able to use the (action: Seek) action to try to observe you.",
    "hasValue": true,
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33"
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 21,
    "name": "Invisible",
    "description": "While invisible, you can’t be seen. You’re undetected to everyone. Creatures can (action: Seek) to attempt to detect you; if a creature succeeds at its Perception check against your Stealth DC, you become hidden to that creature until you (action: Sneak) to become undetected again. If you become invisible while someone can already see you, you start out hidden to the observer (instead of undetected) until you successfully (action: Sneak). You can’t become observed while invisible except via special abilities or magic.",
    "hasValue": true,
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33"
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 22,
    "name": "Paralyzed",
    "description": "Your body is frozen in place. You have the flat-footed condition and can’t act except to (action: Recall Knowledge) and use actions that require only the use of your mind (as determined by the GM). Your senses still function, but only in the areas you can perceive without moving your body, so you can’t (action: Seek) while paralyzed.",
    "hasValue": true,
    "code": [
        "GIVE-CONDITION=Flat-Footed"
    ],
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33",
    "wsci": [
        ["giveCondition","flat-footed",null]
    ] satisfies Expression[]
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 23,
    "name": "Persistent Damage",
    "description": "When you take persistent damage, instead of taking the damage amount immediately, you take it at the end of each of your turns as long as you have the condition, rolling any damage dice anew each time. After you take persistent damage, roll a DC 15 flat check to see if you recover from the persistent damage. If you succeed, the condition ends.",
    "hasValue": true,
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33"
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 24,
    "name": "Petrified",
    "description": "You have been turned to stone. You can’t act, nor can you sense anything. You become an object with a Bulk double your normal Bulk (typically 12 for a petrified Medium creature or 6 for a petrified Small creature), AC 9, Hardness 8, and the same current Hit Points you had when alive. You don’t have a Broken Threshold. When you’re turned back into flesh, you have the same number of Hit Points you had as a statue. If the statue is destroyed, you immediately die. While petrified, your mind and body are in stasis, so you don’t age or notice the passing of time.",
    "hasValue": true,
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33"
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 25,
    "name": "Prone",
    "description": "You’re lying on the ground. You are flat-footed and take a -2 circumstance penalty to attack rolls. The only move actions you can use while you’re prone are (action: Crawl) and (action: Stand | Stand / Drop Prone). (action: Standing | Stand / Drop Prone) up ends the prone condition. \nYou can (action: Take Cover) while prone to hunker down and gain greater cover against ranged attacks, even if you don’t have an object to get behind, gaining a +4 circumstance bonus to AC against ranged attacks (but you remain flat-footed).\nIf you would be knocked prone while you’re (action: Climbing | Climb) or (action: Flying | Fly), you fall. You can’t be knocked prone when (action: Swimming | Swim).",
    "hasValue": true,
    "code": [
        "GIVE-CONDITION=Flat-Footed",
        "DECREASE-ATTACKS=2-CIRCUM"
    ],
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33",
    "wsci": [
        ["giveCondition","flat-footed",null],
        ["adjust","ATTACKS",null,-2,"circumstance",null]
    ] satisfies Expression[]
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 26,
    "name": "Quickened",
    "description": "You gain 1 additional action at the start of your turn each round. Many effects that make you quickened specify the types of actions you can use with this additional action. If you become quickened from multiple sources, you can use the extra action you’ve been granted for any single action allowed by any of the effects that made you quickened. Because quickened has its effect at the start of your turn, you don’t immediately gain actions if you become quickened during your turn.",
    "hasValue": true,
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33"
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 27,
    "name": "Restrained",
    "description": "You’re tied up and can barely move, or a creature has you pinned. You have the flat-footed and immobilized conditions, and you can’t use any actions with the (trait: attack) or (trait: manipulate) traits except to attempt to (action: Escape) or (action: Force Open) your bonds. Restrained overrides grabbed.",
    "hasValue": true,
    "code": [
        "GIVE-CONDITION=Flat-Footed",
        "GIVE-CONDITION=Immobilized"
    ],
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33",
    "wsci": [
        ["giveCondition","flat-footed",null],
        ["giveCondition","immobilized",null]
    ] satisfies Expression[]
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 28,
    "name": "Sickened",
    "description": "You feel ill. Sickened always includes a value. You take a status penalty equal to this value on all your checks and DCs. You can’t willingly ingest anything – including elixirs and potions – while sickened. You can spend a single action retching in an attempt to recover, which lets you immediately attempt a Fortitude save against the DC of the effect that made you sickened. On a success, you reduce your sickened value by 1 (or by 2 on a critical success).",
    "hasValue": true,
    "code": [
        "DECREASE-SCORE_STR=CONDITION_VALUE_TIMES_TWO-STATUS",
        "DECREASE-SCORE_DEX=CONDITION_VALUE_TIMES_TWO-STATUS",
        "DECREASE-SCORE_CON=CONDITION_VALUE_TIMES_TWO-STATUS",
        "DECREASE-SCORE_WIS=CONDITION_VALUE_TIMES_TWO-STATUS",
        "DECREASE-SCORE_INT=CONDITION_VALUE_TIMES_TWO-STATUS",
        "DECREASE-SCORE_CHA=CONDITION_VALUE_TIMES_TWO-STATUS",
        "INCREASE-MAX_HEALTH=CONDITION_VALUE*LEVEL"
    ],
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33"
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 29,
    "name": "Slowed",
    "description": "You have fewer actions. Slowed always includes a value. When you regain your actions at the start of your turn, reduce the number of actions you regain by your slowed value. Because slowed has its effect at the start of your turn, you don’t immediately lose actions if you become slowed during your turn.",
    "hasValue": true,
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33"
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 30,
    "name": "Stunned",
    "description": "You’ve become senseless. You can’t act while stunned. Stunned usually includes a value, which indicates how many total actions you lose, possibly over multiple turns, from being stunned. Each time you regain actions (such as at the start of your turn), reduce the number you regain by your stunned value, then reduce your stunned value by the number of actions you lost. For example, if you were stunned 4, you would lose all 3 of your actions on your turn, reducing you to stunned 1; on your next turn, you would lose 1 more action, and then be able to use your remaining 2 actions normally. Stunned might also have a duration instead of a value, such as “stunned for 1 minute.” In this case, you lose all your actions for the listed duration. Stunned overrides slowed.",
    "hasValue": true,
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33"
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 31,
    "name": "Stupefied",
    "description": "Your thoughts and instincts are clouded. Stupefied always includes a value. You take a status penalty equal to this value on Intelligence-, Wisdom-, and Charisma-based checks and DCs, including Will saving throws, spell attack rolls, spell DCs, and skill checks that use these ability scores. Any time you attempt to Cast a Spell while stupefied, the spell is disrupted unless you succeed at a flat check with a DC equal to 5 + your stupefied value.",
    "hasValue": true,
    "code": [
        "DECREASE-SCORE_INT=CONDITION_VALUE_TIMES_TWO-STATUS",
        "DECREASE-SCORE_WIS=CONDITION_VALUE_TIMES_TWO-STATUS",
        "DECREASE-SCORE_CHA=CONDITION_VALUE_TIMES_TWO-STATUS"
    ],
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33"
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 32,
    "name": "Unconscious",
    "description": "You’re sleeping, or you’ve been knocked out. You can’t act. You take a -4 status penalty to AC, Perception, and Reflex saves, and you have the blinded and flat-footed conditions.\nWhen you gain this condition, you fall prone and drop items you are wielding or holding unless the effect states otherwise or the GM determines you’re in a position in which you wouldn’t. For more information about the unconscious condition, see page 623 [https://pf2.easytool.es/index.php?id=428&name=unconscious].",
    "hasValue": true,
    "code": [
        "DECREASE-AC=4-STATUS",
        "DECREASE-PERCEPTION=4-STATUS",
        "DECREASE-SAVE_REFLEX=4-STATUS",
        "GIVE-CONDITION=Blinded",
        "GIVE-CONDITION=Flat-Footed"
    ],
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33",
    "wsci": [
        ["adjust","AC",null,-4,"status",null],
        ["adjust","PERCEPTION",null,-4,"status",null],
        ["adjust","SAVE","reflex",-4,"status",null],
        ["giveCondition","blinded",null],
        ["giveCondition","flat-footed",null]
    ] satisfies Expression[]
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 33,
    "name": "Unnoticed",
    "description": "If you are unnoticed by a creature, that creature has no idea you are present at all. When you’re unnoticed, you’re also undetected by the creature. This condition matters for abilities that can be used only against targets totally unaware of your presence.",
    "hasValue": true,
    "code": [
        "GIVE-CONDITION=Undetected"
    ],
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33",
    "wsci": [
        ["giveCondition","undetected",null]
    ] satisfies Expression[]
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 34,
    "name": "Undetected",
    "description": "When you are undetected by a creature, that creature cannot see you at all, has no idea what space you occupy, and can’t target you, though you still can be affected by abilities that target an area. When you’re undetected by a creature, that creature is flat-footed to you. A creature you’re undetected by can guess which square you’re in to try targeting you. It must pick a square and attempt an attack. This works like targeting a hidden creature (requiring a DC 11 flat check), but the flat check and attack roll are rolled in secret by the GM, who doesn’t reveal whether the attack missed due to failing the flat check, failing the attack roll, or choosing the wrong square. A creature can use the (action: Seek) action to try to find you.",
    "hasValue": true,
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33"
} as const satisfies ConditionsTableRowConstraints,
{
    "table": "conditions",
    "id": 35,
    "name": "Wounded",
    "description": "You have been seriously injured. If you lose the dying condition and do not already have the wounded condition, you become wounded 1. If you already have the wounded condition when you lose the dying condition, your wounded condition value increases by 1. If you gain the dying condition while wounded, increase your dying condition value by your wounded value. The wounded condition ends if someone successfully restores Hit Points to you with (action: Treat Wounds), or if you are restored to full Hit Points and rest for 10 minutes.",
    "hasValue": true,
    "createdAt": "2020-01-25T00:50:33",
    "updatedAt": "2020-01-25T00:50:33"
} as const satisfies ConditionsTableRowConstraints,
 ] as const;

export const conditions = hookupTableLookup(_conditions);