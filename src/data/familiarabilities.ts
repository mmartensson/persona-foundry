import type { Expression } from '../wsc/types';
import { hookupTableLookup } from '../tables';

import { ContentSrc } from './shared_types';

export interface FamiliarabilitiesTableRowConstraints {
  table: 'familiarabilities';
  wsci?: Readonly<Expression[]>;
  id: number;
  name?: string;
  prerequisites?: string;
  requirements?: string;
  description?: string;
  code?: readonly string[];
  isMaster: boolean;
  contentSrc: ContentSrc;
  homebrewID?: number;
  createdAt?: string;
  updatedAt?: string;
}

export type FamiliarabilitiesTable = typeof familiarabilities;
export type FamiliarabilitiesTableRow = FamiliarabilitiesTable[number];
export type FamiliarabilityID = FamiliarabilitiesTableRow['id'];

export const isFamiliarabilityID = (id?: number): id is FamiliarabilityID => !!id && !!familiarabilities.byIdLax(id);
export const assertIsFamiliarabilityID = (id?: number): asserts id is FamiliarabilityID => { if (!isFamiliarabilityID(id)) throw Error('Expected a FamiliarabilityID; got ' + id); }

const _familiarabilities = [
{
    "table": "familiarabilities",
    "id": 1,
    "name": "Accompanist",
    "description": "Your familiar helps you perform. Whenever you attempt a Performance check, if your familiar is nearby and can act, it accompanies you with chirps, claps, or its own miniature instrument. This grants you a +1 circumstance bonus, or +2 if you’re a master in Performance.",
    "code": [
        "CONDITIONAL-INCREASE-SKILL_Performance=1~circumstance bonus from your familiar if it is nearby and can act",
        "IF (HAS-PROF>=Performance:M) {CONDITIONAL-INCREASE-SKILL_Performance=2~circumstance bonus from your familiar if it is nearby and can act}"
    ],
    "isMaster": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-27T15:42:41",
    "updatedAt": "2020-08-27T15:42:41",
    "wsci": [
        ["adjust","SKILL","performance",1,null,"circumstance bonus from your familiar if it is nearby and can act"],
        {"conditionals":[["hasProf",">=","performance","M"]],"consequent":["adjust","SKILL","performance",2,null,"circumstance bonus from your familiar if it is nearby and can act"]}
    ] satisfies Expression[]
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 2,
    "name": "Amphibious",
    "description": "Your familiar gains a swim Speed of 25 feet (or Speed of 25 feet if it already has a swim Speed).",
    "code": [
        "FAMILIAR-GIVE-SPEED=swim 25"
    ],
    "isMaster": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-27T15:51:53",
    "updatedAt": "2020-08-27T15:51:53",
    "wsci": [
        ["familiarGiveSpeed","swim",25]
    ] satisfies Expression[]
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 3,
    "name": "Burrower",
    "description": "Your familiar gains a burrow Speed of 5 feet, allowing it to dig Tiny holes.",
    "code": [
        "FAMILIAR-GIVE-SPEED=burrow 5"
    ],
    "isMaster": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-27T15:52:31",
    "updatedAt": "2020-08-27T15:52:31",
    "wsci": [
        ["familiarGiveSpeed","burrow",5]
    ] satisfies Expression[]
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 4,
    "name": "Climber",
    "description": "Your familiar gains a climb Speed of 25 feet.",
    "code": [
        "FAMILIAR-GIVE-SPEED=climb 25"
    ],
    "isMaster": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-27T15:54:39",
    "updatedAt": "2020-08-27T15:54:39",
    "wsci": [
        ["familiarGiveSpeed","climb",25]
    ] satisfies Expression[]
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 5,
    "name": "Damage Avoidance",
    "description": "Choose one type of save. It takes no damage when it succeeds at that type of save; this doesn’t prevent effects other than damage.",
    "code": [
        "GIVE-NOTES-FIELD=Use this area to keep track of the type of save you chose."
    ],
    "isMaster": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-27T15:56:11",
    "updatedAt": "2020-08-27T15:56:11",
    "wsci": [
        ["giveNotesField","Use this area to keep track of the type of save you chose."]
    ] satisfies Expression[]
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 6,
    "name": "Darkvision",
    "description": "Your familiar gains darkvision.",
    "code": [
        "FAMILIAR-GIVE-SENSE=darkvision"
    ],
    "isMaster": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-27T15:57:33",
    "updatedAt": "2020-08-27T15:57:33",
    "wsci": [
        ["familiarGiveSense","darkvision",null]
    ] satisfies Expression[]
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 7,
    "name": "Fast Movement",
    "description": "Increase one of the familiar’s Speeds from 25 feet to 40 feet.",
    "code": [
        "GIVE-NOTES-FIELD=Use this area to keep information about your familiar’s Speeds."
    ],
    "isMaster": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-27T15:59:48",
    "updatedAt": "2020-08-27T15:59:48",
    "wsci": [
        ["giveNotesField","Use this area to keep information about your familiar’s Speeds."]
    ] satisfies Expression[]
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 8,
    "name": "Flier",
    "description": "Your familiar gains a fly Speed of 25 feet.",
    "code": [
        "FAMILIAR-GIVE-SPEED=fly 25"
    ],
    "isMaster": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-27T16:00:58",
    "updatedAt": "2020-08-27T16:00:58",
    "wsci": [
        ["familiarGiveSpeed","fly",25]
    ] satisfies Expression[]
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 9,
    "name": "Focused Rejuvenation",
    "description": "When you (action: Refocus), you generate magical energy that heals your familiar. Your familiar regains 1 Hit Point per level whenever you (action: Refocus).",
    "isMaster": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-27T16:01:54",
    "updatedAt": "2020-08-27T16:01:54"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 10,
    "name": "Independent",
    "description": "In an encounter, if you don’t command your familiar, it still gains 1 action each round. Typically, you still decide how it spends that action, but, the GM might determine that your familiar chooses its own tactics rather than performing your preferred action.",
    "isMaster": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-27T16:02:41",
    "updatedAt": "2020-08-27T16:02:41"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 11,
    "name": "Kinspeech",
    "prerequisites": "familiar must be an animal, it must have the Speech ability, and you must be at least 6th level",
    "description": "Your familiar can understand and speak with animals of the same species.",
    "isMaster": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-27T16:05:31",
    "updatedAt": "2020-08-27T16:05:31"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 12,
    "name": "Lab Assistant",
    "prerequisites": "Quick Alchemy, familiar with manual dexterity",
    "requirements": "your familiar must be in your space",
    "description": "Your familiar can use your (feat: Quick Alchemy) action. You must have (feat: Quick Alchemy), and your familiar must be in your space. This has the same cost and requirement as if you used it.",
    "isMaster": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-27T16:08:00",
    "updatedAt": "2020-08-27T16:08:00"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 13,
    "name": "Manual Dexterity",
    "description": "Your familiar can use up to two of its limbs as if they were hands to use (trait: manipulate) actions.",
    "isMaster": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-27T16:08:56",
    "updatedAt": "2020-08-27T16:08:56"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 14,
    "name": "Master’s Form",
    "prerequisites": "your familiar must have the manual dexterity and speech abilities",
    "description": "Your familiar can change shape as a single action, transforming into a humanoid of your ancestry with the same age, gender, and build of its true form, though it always maintains a clearly unnatural remnant of its nature, such as a cat’s eyes or a serpent’s tongue. This form is always the same each time it uses this ability. This otherwise uses the effects of (spell: humanoid form), except the change is purely cosmetic. It only appears humanoid and gains no new capabilities.",
    "isMaster": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-27T16:11:22",
    "updatedAt": "2020-08-27T16:11:22"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 15,
    "name": "Partner in Crime",
    "description": "Your familiar is your criminal associate. Despite being a (trait: minion), your familiar gains 1 reaction at the start of its turns, which it can use only to (action: Aid) you on a Deception or Thievery skill check (it still has to prepare to help you as normal for the (action: Aid) reaction). It automatically succeeds at its check to (action: Aid) you with those skills or automatically critically succeeds if you’re a master of the skill in question.",
    "isMaster": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-27T16:14:05",
    "updatedAt": "2020-08-27T16:14:05"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 16,
    "name": "Plant Form",
    "prerequisites": "you must have a familiar with the plant trait",
    "description": "Your plant familiar can change shape as a single action, transforming into a Tiny plant of a type roughly similar to the familiar’s nature. This otherwise uses the effects of (spell: tree shape).",
    "isMaster": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-27T16:15:49",
    "updatedAt": "2020-08-27T16:15:49"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 17,
    "name": "Poison Reservoir",
    "prerequisites": "you must have a homunculus familiar",
    "description": "Your homunculus familiar has a reservoir for poison, allowing it to apply an (trait: injury) poison to an adjacent ally’s exposed weapon with a single (action: Interact) action. You must supply the poison and instill it into this reservoir using two consecutive (action: Interact) actions.",
    "isMaster": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-27T16:17:37",
    "updatedAt": "2020-08-27T16:17:37"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 18,
    "name": "Resistance",
    "description": "Choose two of the following: acid, cold, electricity, fire, poison, or sonic. Your familiar gains resistance equal to half your level against the chosen damage types.",
    "code": [
        "GIVE-NOTES-FIELD=Use this area to keep track of the damage types you chose."
    ],
    "isMaster": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-27T16:19:22",
    "updatedAt": "2020-08-27T16:19:22",
    "wsci": [
        ["giveNotesField","Use this area to keep track of the damage types you chose."]
    ] satisfies Expression[]
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 19,
    "name": "Scent",
    "description": "Your familiar gains scent (imprecise, 30 feet).",
    "code": [
        "FAMILIAR-GIVE-SENSE=scent (imprecise, 30 feet)"
    ],
    "isMaster": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-27T16:20:50",
    "updatedAt": "2020-08-27T16:20:50"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 20,
    "name": "Skilled",
    "description": "Choose a skill other than Acrobatics or Stealth. Your familiar’s modifier for that skill is equal to your level plus your key spellcasting ability modifier, rather than just your level. You can select this ability repeatedly, choosing a different skill each time.",
    "code": [
        "GIVE-NOTES-FIELD=Use this area to keep information about the skill you chose."
    ],
    "isMaster": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-27T16:22:50",
    "updatedAt": "2020-08-27T16:22:50",
    "wsci": [
        ["giveNotesField","Use this area to keep information about the skill you chose."]
    ] satisfies Expression[]
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 21,
    "name": "Speech",
    "description": "Your familiar understands and speaks a language you know.",
    "code": [
        "GIVE-NOTES-FIELD=Use this area to keep track of the language your familiar knows."
    ],
    "isMaster": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-27T16:24:23",
    "updatedAt": "2020-08-27T16:24:23",
    "wsci": [
        ["giveNotesField","Use this area to keep track of the language your familiar knows."]
    ] satisfies Expression[]
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 22,
    "name": "Spellcasting",
    "prerequisites": "you must be able to cast 6th-level spells using spell slots",
    "description": "Choose a spell in your repertoire or that you prepared today that is at least 5 levels lower than your highest-level spell slot. Your familiar can Cast that Spell once per day using your magical tradition, spell attack modifier, and spell DC. If the spell has a drawback that affects the caster, both you and your familiar are affected.",
    "code": [
        "GIVE-NOTES-FIELD=Use this area to keep information about the spell your familiar can cast."
    ],
    "isMaster": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-27T16:28:00",
    "updatedAt": "2020-08-27T16:28:00",
    "wsci": [
        ["giveNotesField","Use this area to keep information about the spell your familiar can cast."]
    ] satisfies Expression[]
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 23,
    "name": "Toolbearer",
    "prerequisites": "your familiar must have the manual dexterity ability",
    "description": "Your familiar can carry a set of tools of up to light Bulk. So long as your familiar is adjacent to you, you can draw and replace the tools as part of the action that uses them as if you were wearing them.",
    "code": [
        "GIVE-NOTES-FIELD=Use this area to keep information about what your familiar is carrying."
    ],
    "isMaster": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-27T16:30:21",
    "updatedAt": "2020-08-27T16:30:21",
    "wsci": [
        ["giveNotesField","Use this area to keep information about what your familiar is carrying."]
    ] satisfies Expression[]
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 24,
    "name": "Touch Telepathy",
    "description": "Your familiar can telepathically communicate with you via touch. If it also has the speech ability, it can telepathically communicate via touch with any creature if they share a language.",
    "isMaster": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-27T16:32:29",
    "updatedAt": "2020-08-27T16:32:29"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 25,
    "name": "Tough",
    "description": "Your familiar’s maximum Hit Points increase by 2 per level.",
    "code": [
        "FAMILIAR-GIVE-MAX-HP=2"
    ],
    "isMaster": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-27T16:34:35",
    "updatedAt": "2020-08-27T16:34:35"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 26,
    "name": "Valet",
    "description": "You can command your familiar to deliver you items more efficiently. Your familiar doesn’t use its 2 actions immediately upon your command. Instead, up to twice before the end of your turn, you can have your familiar (action: Interact) to retrieve an item of light or negligible Bulk you are wearing and place it into one of your free hands. The familiar can’t use this ability to retrieve stowed items. If the familiar has a different number of actions, it can retrieve one item for each action it has when commanded this way.",
    "isMaster": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-27T16:36:32",
    "updatedAt": "2020-08-27T16:36:32"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 27,
    "name": "Cantrip Connection",
    "prerequisites": "you must be able to prepare cantrips or add them to your repertoire",
    "description": "You can prepare an additional cantrip, or if you have a repertoire, instead designate a cantrip to add to your repertoire every time you select this ability; you can retrain it but can’t otherwise change it.",
    "code": [
        "GIVE-NOTES-FIELD=Use this area to keep information about your additional cantrip."
    ],
    "isMaster": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-27T16:41:10",
    "updatedAt": "2020-08-27T16:41:10",
    "wsci": [
        ["giveNotesField","Use this area to keep information about your additional cantrip."]
    ] satisfies Expression[]
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 28,
    "name": "Extra Reagents",
    "prerequisites": "you must have the infused reagents ability",
    "description": "Your familiar grows extra infused reagents on or in its body. You gain an additional batch of infused reagents.",
    "isMaster": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-27T16:43:19",
    "updatedAt": "2020-08-27T16:43:19"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 29,
    "name": "Familiar Focus",
    "prerequisites": "you must have a focus pool",
    "description": "Once per day, your familiar can use 2 actions with the (trait: concentrate) trait for you to regain 1 Focus Point, up to your usual maximum.",
    "isMaster": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-27T16:45:51",
    "updatedAt": "2020-08-27T16:45:51"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 30,
    "name": "Innate Surge",
    "prerequisites": "you must have an innate spell gained from an ancestry feat",
    "description": "Once per day, you can draw upon your familiar’s innate magic to replenish your own. You can cast one innate spell gained from an ancestry feat that you have already cast today. You must still Cast the Spell and meet the spell’s other requirements.",
    "isMaster": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-27T16:47:47",
    "updatedAt": "2020-08-27T16:47:47"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 31,
    "name": "Lifelink",
    "description": "If your familiar would be reduced to 0 HP by damage, as a reaction with the (trait: concentrate) trait, you can take the damage. If you do, you take all the damage and your familiar takes none. However, special effects when hit still apply to your familiar.",
    "isMaster": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-27T16:52:10",
    "updatedAt": "2020-08-27T16:52:10"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 32,
    "name": "Share Senses",
    "description": "Once every 10 minutes, you can use a single action with the (trait: concentrate) trait to project your senses into your familiar. When you do, you lose all sensory information from your own body, but can sense through your familiar’s body for up to 1 minute. You can (action: Dismiss) this effect.",
    "isMaster": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-27T16:53:30",
    "updatedAt": "2020-08-27T16:53:30"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 33,
    "name": "Spell Battery",
    "prerequisites": "you must be able to cast 4th-level spells using spell slots",
    "description": "You gain one additional spell slot at least 3 levels lower than your highest-level spell slot.",
    "code": [
        "GIVE-NOTES-FIELD=Use this area to keep information about your additional spell slot."
    ],
    "isMaster": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-27T16:55:52",
    "updatedAt": "2020-08-27T16:55:52",
    "wsci": [
        ["giveNotesField","Use this area to keep information about your additional spell slot."]
    ] satisfies Expression[]
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 34,
    "name": "Spell Delivery",
    "requirements": "your familiar is in your space",
    "description": "If your familiar is in your space, you can cast a spell with a range of touch, transfer its power to your familiar, and command the familiar to deliver the spell. If you do, the familiar uses its 2 actions for the round to move to a target of your choice and touch that target. If it doesn’t reach the target to touch it this turn, the spell has no effect.",
    "isMaster": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-27T16:57:44",
    "updatedAt": "2020-08-27T16:57:44"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 35,
    "name": "Darkeater",
    "description": "Your familiar naturally recovers in the shadows. After spending 10 consecutive minutes in an area of dim light or darkness, your familiar recovers a number of Hit Points equal to half your level.",
    "isMaster": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "createdAt": "2020-08-27T16:57:44",
    "updatedAt": "2020-08-27T16:57:44"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 36,
    "name": "Shadow Step",
    "prerequisites": "you must be at least 7th level",
    "description": "~ Shadow Step: ONE-ACTION ((trait: conjuration), (trait: shadow), (trait: teleportation)) **Requirements** The familiar is in dim light or darkness. **Effect** The familiar teleports itself up to 30 feet. The destination must be in dim light or darkness and must be within your familiar’s line of sight and line of effect. This action has the trait matching your tradition of magic, or (trait: occult) if you aren’t a spellcaster.",
    "isMaster": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "createdAt": "2020-08-27T16:57:44",
    "updatedAt": "2020-08-27T16:57:44"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 37,
    "name": "Ambassador",
    "description": "Your familiar knows how to act cute or focused on cue, helping you make a good impression. Despite being a minion, your familiar gains 1 reaction at the start of its turns, which it can use only to (action: Aid) you on a Diplomacy check to (action: Make an Impression) (it still has to prepare to help you as normal for the (action: Aid) reaction, which requires it to participate throughout the activity). It automatically succeeds at its check to (action: Aid) you with those skills or automatically critically succeeds if you're a master of the skill in question.",
    "isMaster": true,
    "contentSrc": "LOST-GRAND-BAZAAR",
    "createdAt": "2020-08-27T16:57:44",
    "updatedAt": "2020-08-27T16:57:44"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 38,
    "name": "Gills",
    "description": "Your familiar grows a set of gills, allowing it to breathe water in addition to air.",
    "isMaster": true,
    "contentSrc": "LOST-GRAND-BAZAAR",
    "createdAt": "2020-08-27T16:57:44",
    "updatedAt": "2020-08-27T16:57:44"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 39,
    "name": "Greater Resistance",
    "prerequisites": "your familiar must have the resistance ability",
    "description": "Your familiar increases the resistance it gains from its resistance familiar ability to 3 + half your level.",
    "isMaster": true,
    "contentSrc": "LOST-GRAND-BAZAAR",
    "createdAt": "2020-08-27T16:57:44",
    "updatedAt": "2020-08-27T16:57:44"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 40,
    "name": "Major Resistance",
    "prerequisites": "your familiar must have the greater resistance ability and you must be at least 8th level",
    "description": "Your familiar increases the resistance it gains from its resistance familiar ability to a value equal to your level.",
    "isMaster": true,
    "contentSrc": "LOST-GRAND-BAZAAR",
    "createdAt": "2020-08-27T16:57:44",
    "updatedAt": "2020-08-27T16:57:44"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 41,
    "name": "Second Opinion",
    "prerequisites": "your familiar must have the skilled ability",
    "description": "Your familiar is your academic confidant. Despite being a minion, your familiar gains 1 reaction at the start of its turns, which it can use only to (action: Aid) you on a (action: Recall Knowledge) skill check for a skill in which it has the skilled familiar ability (it still has to prepare to help you as normal for the (action: Aid) reaction). It automatically succeeds at its check to (action: Aid) you with those skills or automatically critically succeeds if you’re a master of the skill in question.",
    "isMaster": true,
    "contentSrc": "LOST-GRAND-BAZAAR",
    "createdAt": "2020-08-27T16:57:44",
    "updatedAt": "2020-08-27T16:57:44"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 42,
    "name": "Snoop",
    "description": "Your familiar keeps its eyes and ears open, ready to relay every snippet of gossip it catches, helping you gather information. Despite being a minion, your familiar gains 1 reaction at the start of its turns, which it can use only to (action: Aid) you on a Diplomacy check to (action: Gather Information) (it still has to prepare to help you as normal for the (action: Aid) reaction, which requires it to participate throughout the activity). It automatically succeeds at its check to (action: Aid) you with those skills or automatically critically succeeds if you’re a master of the skill in question.",
    "isMaster": true,
    "contentSrc": "LOST-GRAND-BAZAAR",
    "createdAt": "2020-08-27T16:57:44",
    "updatedAt": "2020-08-27T16:57:44"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 43,
    "name": "Threat Display",
    "description": "Your familiar helps you convey wordless threats through body language. Whenever you attempt an Intimidation check to (action: Demoralize) a creature, if your familiar is within 30 feet of your target and can act, it accompanies you with snarls, hisses, or raising its hackles. If it can do so, you don’t take the normal –4 penalty on the Intimidation check if your target doesn’t understand the language you’re speaking.",
    "isMaster": true,
    "contentSrc": "LOST-GRAND-BAZAAR",
    "createdAt": "2020-08-27T16:57:44",
    "updatedAt": "2020-08-27T16:57:44"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 44,
    "name": "Tremorsense",
    "description": "Your familiar is keenly aware of any vibrations traveling through a surface. It gains imprecise tremorsense with a range of 30 feet.",
    "isMaster": true,
    "contentSrc": "LOST-GRAND-BAZAAR",
    "createdAt": "2020-08-27T16:57:44",
    "updatedAt": "2020-08-27T16:57:44"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 45,
    "name": "Wavesense",
    "description": "Your familiar can sense vibrations in the water. It gains imprecise wavesense with a range of 30 feet.",
    "isMaster": true,
    "contentSrc": "LOST-GRAND-BAZAAR",
    "createdAt": "2020-08-27T16:57:44",
    "updatedAt": "2020-08-27T16:57:44"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 46,
    "name": "Recall Familiar",
    "description": "You can summon your familiar to your side. Once per day, you can use a 3-action activity, which has the (trait: concentrate) trait, to teleport your familiar to your space. Your familiar must be within 1 mile or the attempt to summon it fails. This is a (trait: conjuration) and (trait: teleport) effect.",
    "isMaster": true,
    "contentSrc": "LOST-GRAND-BAZAAR",
    "createdAt": "2020-08-27T16:57:44",
    "updatedAt": "2020-08-27T16:57:44"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 47,
    "name": "Restorative Familiar",
    "description": "Once per day, your familiar can use 2 actions with the (trait: concentrate) trait to give up some of its animating energy and heal you. It must be in your space to do so. You restore a number of Hit Points equal to 1d8 times half your level (minimum 1d8).",
    "isMaster": true,
    "contentSrc": "LOST-GRAND-BAZAAR",
    "createdAt": "2020-08-27T16:57:44",
    "updatedAt": "2020-08-27T16:57:44"
} as const satisfies FamiliarabilitiesTableRowConstraints,
{
    "table": "familiarabilities",
    "id": 48,
    "name": "Tattoo Transformation",
    "description": "Your familiar can transform into a tattoo you carry on your flesh. When transformed into a tattoo, the familiar looks like a colorful and stylized version of itself and can’t act except to turn back into a familiar. It isn’t affected by area effects and must be targeted separately to affect it, which requires knowledge that it’s a creature. This means you and your allies can heal or assist the familiar while most enemies stay unaware of its true nature. Creatures must attempt a DC 20 Perception check to (action: Seek) to realize a tattoo is actually a familiar (which few foes will try). Your familiar can still communicate its feelings empathically. Transforming into a tattoo or back to familiar form is a 1-minute activity that has the (trait: concentrate) trait.",
    "isMaster": true,
    "contentSrc": "LOST-GRAND-BAZAAR",
    "createdAt": "2020-08-27T16:57:44",
    "updatedAt": "2020-08-27T16:57:44"
} as const satisfies FamiliarabilitiesTableRowConstraints,
 ] as const;

export const familiarabilities = hookupTableLookup(_familiarabilities);