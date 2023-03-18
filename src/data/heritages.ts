import type { Expression } from '../wsc/types';
import { hookupTableLookup } from '../tables';

import { Rarity, ContentSrc } from './shared_types';

export interface HeritagesTableRowConstraints {
  table: 'heritages';
  wsci?: Readonly<Expression[]>;
  id: number;
  name?: string;
  ancestryID?: number;
  rarity: Rarity;
  description?: string;
  code?: readonly string[];
  isArchived: boolean;
  contentSrc: ContentSrc;
  indivAncestryName?: string;
  homebrewID?: number;
  createdAt?: string;
  updatedAt?: string;
}

export type HeritagesTable = typeof heritages;
export type HeritagesTableRow = HeritagesTable[number];
export type HeritageID = HeritagesTableRow['id'];

export const isHeritageID = (id?: number): id is HeritageID => !!id && !!heritages.byIdLax(id);
export const assertIsHeritageID = (id?: number): asserts id is HeritageID => { if (!isHeritageID(id)) throw Error('Expected a HeritageID; got ' + id); }

const _heritages = [
{
    "table": "heritages",
    "id": 614,
    "name": "Bloodhound Shoony",
    "ancestryID": 155,
    "rarity": "COMMON",
    "description": "Your ancestors were famous trackers, and you carry in your blood that same gift of the hunt. You gain a special sense: imprecise scent with a range of 30 feet. This means you can use your sense of smell to determine the location of a creature, but it remains hidden (as detailed on page 465 of the Core Rulebook). In addition, you gain a +2 circumstance bonus to Survival checks to (Action: Track) creatures that you have previously sensed with your scent.",
    "code": [
        "CONDITIONAL-INCREASE-SKILL_SURVIVAL=2~circumstance bonus to Track creatures that you have previously sensed with your scent"
    ],
    "isArchived": true,
    "contentSrc": "EXTINCTION-CURSE",
    "createdAt": "2020-07-20T05:43:29",
    "updatedAt": "2020-07-20T05:43:29",
    "wsci": [
        ["adjust","SKILL","survival",2,null,"circumstance bonus to Track creatures that you have previously sensed with your scent"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 615,
    "name": "Paddler Shoony",
    "ancestryID": 155,
    "rarity": "COMMON",
    "description": "You hail from shoonies who have lived long and successfully among the reeds and cattails of swamps and marshes, and have adapted to the challenges of living near waterlogged areas. You ignore difficult terrain and greater difficult terrain from bogs. When you roll a success to Swim, you get a critical success instead.",
    "isArchived": true,
    "contentSrc": "EXTINCTION-CURSE",
    "createdAt": "2020-07-20T05:43:29",
    "updatedAt": "2020-07-20T05:43:29"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 616,
    "name": "Thickcoat Shoony",
    "ancestryID": 155,
    "rarity": "COMMON",
    "description": "You are a rare shoony who hails from colder climes. You gain cold resistance equal to half your level (minimum 1), and you treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on). You don’t need to succeed at a flat check to target a concealed creature if that creature is concealed only by snow. Unless you wear protective gear or take shelter, environmental heat effects are one step more extreme for you.",
    "code": [
        "GIVE-RESISTANCE=COLD:Half_Level"
    ],
    "isArchived": true,
    "contentSrc": "EXTINCTION-CURSE",
    "createdAt": "2020-07-20T05:43:29",
    "updatedAt": "2020-07-20T05:43:29",
    "wsci": [
        ["giveResistance","cold",["half",null]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 617,
    "name": "Fishseeker Shoony",
    "ancestryID": 155,
    "rarity": "COMMON",
    "description": "You come from a long line of fisherfolk and have inherited the quick reflexes necessary to nab and reel in big game. If you roll a success on an attempt to (Action: Grab an Edge), you get a critical success instead; if you roll a critical failure, you get a failure instead. A creature that rolls a failure on a check to (Action: Disarm) you gets a critical failure instead.",
    "isArchived": true,
    "contentSrc": "EXTINCTION-CURSE",
    "createdAt": "2020-07-20T05:43:29",
    "updatedAt": "2020-07-20T05:43:29"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 618,
    "name": "Gourd Leshy",
    "ancestryID": 156,
    "rarity": "COMMON",
    "description": "You have a large gourd for a skull. Your knowledge comes from within your spirit, rather than a physical brain, and you have found a handier use for the space inside your head. You can store a collection of up to 1 Bulk of objects within your head. The DC of checks to (action: Steal) objects from inside your head increases by 4. Additionally, if you store only one object within your head, you can draw it effortlessly into your hand as part of another action to use the object. Drawing the item grants this other action the manipulate trait.",
    "code": [
        "GIVE-CHAR-TRAIT-NAME=Plant"
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "createdAt": "2020-07-20T05:43:55",
    "updatedAt": "2020-07-20T05:43:55",
    "wsci": [
        ["giveCharTraitName","Plant"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 619,
    "name": "Leaf Leshy",
    "ancestryID": 156,
    "rarity": "COMMON",
    "description": "Your body is made mostly from natural foliage, and like a leaf tumbling from a tree, you land from falls with particular grace. You take no damage from falling, regardless of the distance you fall.",
    "code": [
        "GIVE-CHAR-TRAIT-NAME=Plant"
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "createdAt": "2020-07-20T05:43:55",
    "updatedAt": "2020-07-20T05:43:55",
    "wsci": [
        ["giveCharTraitName","Plant"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 620,
    "name": "Fungus Leshy",
    "ancestryID": 156,
    "rarity": "COMMON",
    "description": "Your body was made from fungi that grows in the shade of caves and trees, and you are at home in dark caverns and warrens. You gain darkvision. You lose the (trait: plant) trait and gain the (trait: fungus) trait.",
    "code": [
        "GIVE-SENSE-NAME=Darkvision",
        "GIVE-CHAR-TRAIT-NAME=Fungus"
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "createdAt": "2020-07-20T05:43:55",
    "updatedAt": "2020-07-20T05:43:55",
    "wsci": [
        ["giveSenseName","darkvision",null],
        ["giveCharTraitName","Fungus"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 621,
    "name": "Vine Leshy",
    "ancestryID": 156,
    "rarity": "COMMON",
    "description": "The prehensile vines woven into your body grant you unmatched skill at climbing. You do not need to have any hands free to (Action: Climb). Additionally, if you roll a success on an Athletics check to (Action: Climb), you get a critical success instead.",
    "code": [
        "CONDITIONAL-SKILL_ATHLETICS=When you roll a success to Climb, you get a critical success instead.",
        "GIVE-CHAR-TRAIT-NAME=Plant"
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "createdAt": "2020-07-20T05:43:55",
    "updatedAt": "2020-07-20T05:43:55",
    "wsci": [
        ["adjustConditional","SKILL","athletics","When you roll a success to Climb, you get a critical success instead."],
        ["giveCharTraitName","Plant"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 622,
    "name": "Wetlander Lizardfolk",
    "ancestryID": 157,
    "rarity": "COMMON",
    "description": "Your family is descended from the most common lizardfolk heritage, and you are accustomed to aquatic environments. You gain a 15-foot swim Speed.",
    "code": [
        "GIVE-SPEED=Swim:15"
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "createdAt": "2020-07-20T05:44:09",
    "updatedAt": "2020-07-20T05:44:09",
    "wsci": [
        ["giveSpeed","swim",15]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 623,
    "name": "Unseen Lizardfolk",
    "ancestryID": 157,
    "rarity": "COMMON",
    "description": "You can change your skin color to blend in with your surroundings, making minor shifts with a single action and dramatic changes over the course of an hour. When you’re in an area where your coloration is roughly similar to the environment (for instance, forest green in a forest), you can use the minor, single action application of this ability to make localized changes that help you blend into your surroundings, gaining a +2 circumstance bonus to Stealth checks until your surroundings change in coloration or pattern.",
    "code": [
        "CONDITIONAL-INCREASE-SKILL_STEALTH=2~circumstance bonus when blended into your surroundings, until your surroundings shift in coloration or pattern"
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "createdAt": "2020-07-20T05:44:09",
    "updatedAt": "2020-07-20T05:44:09",
    "wsci": [
        ["adjust","SKILL","stealth",2,null,"circumstance bonus when blended into your surroundings, until your surroundings shift in coloration or pattern"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 624,
    "name": "Sandstrider Lizardfolk",
    "ancestryID": 157,
    "rarity": "COMMON",
    "description": "Your thick scales help you retain water and combat the sun’s glare. You gain fire resistance equal to half your level (minimum 1). Environmental heat effects are one step less extreme for you, and you can go 10 times as long as normal before you are affected by starvation or thirst. However, unless you wear protective gear or take shelter, environmental cold effects are one step more extreme for you.",
    "code": [
        "GIVE-RESISTANCE=Fire:Half_Level"
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "createdAt": "2020-07-20T05:44:09",
    "updatedAt": "2020-07-20T05:44:09",
    "wsci": [
        ["giveResistance","fire",["half",null]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 625,
    "name": "Frilled Lizardfolk",
    "ancestryID": 157,
    "rarity": "COMMON",
    "description": "You can flare your neck frill and flex your dorsal spines, (Action: Demoralizing | Demoralize) your foes. When you do, (Action: Demoralize) loses the auditory trait and gains the visual trait, and you don’t take a penalty when you attempt to (Action: Demoralize) a creature that doesn’t understand your language. You also gain the (Feat: Threatening Approach) action.",
    "code": [
        "GIVE-FEAT-NAME=Threatening Approach"
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "createdAt": "2020-07-20T05:44:09",
    "updatedAt": "2020-07-20T05:44:09",
    "wsci": [
        ["giveFeatName",["threatening approach"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 626,
    "name": "Cliffscale Lizardfolk",
    "ancestryID": 157,
    "rarity": "COMMON",
    "description": "Your toes are adapted for gripping and climbing. You gain the (Feat: Combat Climber) feat as a bonus feat, and as long as you aren’t wearing footwear, you can use the sticky pads on your feet to (Action: Climb), leaving your hands free. Additionally, if you roll a success on an Athletics check to climb, you get a critical success instead.",
    "code": [
        "GIVE-FEAT-NAME=Combat Climber",
        "CONDITIONAL-SKILL_ATHLETICS=When you roll a success to Climb, you get a critical success instead."
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "createdAt": "2020-07-20T05:44:09",
    "updatedAt": "2020-07-20T05:44:09",
    "wsci": [
        ["giveFeatName",["combat climber"]],
        ["adjustConditional","SKILL","athletics","When you roll a success to Climb, you get a critical success instead."]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 653,
    "name": "Runtboss Hobgoblin",
    "ancestryID": 163,
    "rarity": "COMMON",
    "description": "You come from a long line of hobgoblins who commanded goblins. You are smaller than other hobgoblins, but goblins still listen to any commands you bellow. You gain the (Feat: Group Coercion) skill feat. If you roll a success on an Intimidation check to (Action: Coerce) a goblin (but not other creatures with the goblin trait), you get a critical success instead; if you roll a critical failure, you get a failure instead.",
    "code": [
        "GIVE-FEAT-NAME=Group Coercion",
        "CONDITIONAL-SKILL_INTIMIDATION=When you roll a success to Coerce a goblin (but not other creatures with the goblin trait), you get a critical success instead; if you roll a critical failure, you get a failure instead."
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "createdAt": "2020-07-26T04:07:21",
    "updatedAt": "2020-07-26T04:07:21",
    "wsci": [
        ["giveFeatName",["group coercion"]],
        ["adjustConditional","SKILL","intimidation","When you roll a success to Coerce a goblin (but not other creatures with the goblin trait), you get a critical success instead; if you roll a critical failure, you get a failure instead."]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 654,
    "name": "Warmarcher Hobgoblin",
    "ancestryID": 163,
    "rarity": "COMMON",
    "description": "You come from a line of wandering mercenaries, constantly on the march and scavenging food on the trail. If you fail, but not critically fail, to (Action: Subsist) in the wilderness, you can still keep yourself fed with poor meals. When exploring, you can (Action: Hustle) twice as long before you have to stop.",
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "createdAt": "2020-07-26T04:07:21",
    "updatedAt": "2020-07-26T04:07:21"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 655,
    "name": "Elfbane Hobgoblin",
    "ancestryID": 163,
    "rarity": "COMMON",
    "description": "Hobgoblins were engineered long ago from the unreliable and fecund goblins, to be used as an army against the elves. Although the elves ultimately freed the hobgoblins from their bondage, some hobgoblins retain ancestral resistance to magic, which they refer to as “elf magic.” You gain the (feat: Resist Elf Magic) reaction.",
    "code": [
        "GIVE-FEAT-NAME=Resist Elf Magic"
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "createdAt": "2020-07-26T04:07:21",
    "updatedAt": "2020-07-26T04:07:21",
    "wsci": [
        ["giveFeatName",["resist elf magic"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 656,
    "name": "Smokeworker Hobgoblin",
    "ancestryID": 163,
    "rarity": "COMMON",
    "description": "Your family have been alchemists, engineers, and scientists for generations, on projects bringing smoke and fire to the field of battle. You gain fire resistance equal to half your level (minimum 1). You automatically succeed at the DC 5 flat check to target a concealed creature if that creature is concealed only by smoke.",
    "code": [
        "GIVE-RESISTANCE=Fire:Half_Level"
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "createdAt": "2020-07-26T04:07:21",
    "updatedAt": "2020-07-26T04:07:21",
    "wsci": [
        ["giveResistance","fire",["half",null]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 657,
    "name": "Warrenbred Hobgoblin",
    "ancestryID": 163,
    "rarity": "COMMON",
    "description": "Your ancestors lived underground. Your ears are larger than those of other hobgoblins and sensitive to echoes. When you are underground, you can use the (Action: Seek) action to sense undetected creatures within a 30-foot burst instead of a 15-foot burst. In addition, if you roll a success on an Acrobatics check to (Action: Squeeze), you get a critical success instead.",
    "code": [
        "CONDITIONAL-SKILL_ACROBATICS=When you roll a success to Squeeze, you get a critical success instead."
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "createdAt": "2020-07-26T04:07:21",
    "updatedAt": "2020-07-26T04:07:21",
    "wsci": [
        ["adjustConditional","SKILL","acrobatics","When you roll a success to Squeeze, you get a critical success instead."]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 665,
    "name": "Clawed Catfolk",
    "ancestryID": 165,
    "rarity": "COMMON",
    "description": "Your family has particularly long, sharp claws capable of delivering bleeding wounds with a wicked swipe. You gain a claw unarmed attack that deals 1d6 slashing damage. Your claws are in the brawling group and have the (trait: agile), (trait: finesse), and (trait: unarmed) traits.",
    "code": [
        "GIVE-PHYSICAL-FEATURE-NAME=Amurrun Claws"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-06T00:37:20",
    "updatedAt": "2020-08-06T00:37:20",
    "wsci": [
        ["givePhysicalFeatureName","amurrun claws"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 666,
    "name": "Nine Lives Catfolk",
    "ancestryID": 165,
    "rarity": "COMMON",
    "description": "Your family has always seemed to bounce back from disaster, not through physical hardiness or specialized skill, but from sheer luck. Other catfolk whisper that you have nine lives. If you are reduced to 0 Hit Points by a critical hit on an attack roll, you become dying 1 instead of dying 2.",
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-06T00:37:20",
    "updatedAt": "2020-08-06T00:37:20"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 667,
    "name": "Winter Catfolk",
    "ancestryID": 165,
    "rarity": "COMMON",
    "description": "You have a thick coat of fur that protects you from the cold. You gain cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).",
    "code": [
        "GIVE-RESISTANCE=Cold:Half_Level"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-06T00:37:20",
    "updatedAt": "2020-08-06T00:37:20",
    "wsci": [
        ["giveResistance","cold",["half",null]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 668,
    "name": "Jungle Catfolk",
    "ancestryID": 165,
    "rarity": "COMMON",
    "description": "You’re descended from jungle stalkers and can move swiftly through scrub and underbrush. You ignore difficult terrain from undergrowth, and greater difficult terrain from undergrowth is only difficult terrain for you.",
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-06T00:37:20",
    "updatedAt": "2020-08-06T00:37:20"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 669,
    "name": "Hunting Catfolk",
    "ancestryID": 165,
    "rarity": "COMMON",
    "description": "You come from a long line of skilled hunters and trackers and have a particularly keen sense of smell. You gain imprecise scent with a range of 30 feet. This means you can use your sense of smell to determine a creature's location. The GM will usually double the range if you're downwind from the creature or halve the range if you're upwind.\nIn addition, you gain a +2 circumstance bonus to (action: Track) a creature or object if you've smelled it before.",
    "code": [
        "GIVE-SENSE-NAME=Scent (imprecise 30 ft)",
        "CONDITIONAL-INCREASE-SKILL_Survival=2~circumstance bonus to Track a creature or object if you've smelled it before"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-06T00:37:20",
    "updatedAt": "2020-08-06T00:37:20",
    "wsci": [
        ["giveSenseName","scent",30],
        ["adjust","SKILL","survival",2,null,"circumstance bonus to Track a creature or object if you've smelled it before"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 670,
    "name": "Mountainkeeper Tengu",
    "ancestryID": 167,
    "rarity": "COMMON",
    "description": "You come from a line of tengu ascetics, leaving you with a link to the spirits of the world and the Great Beyond. You can cast the (spell: disrupt undead) cantrip as a primal innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up. Each time you cast a spell from a tengu heritage or ancestry feat, you can decide whether it’s a divine or primal spell.",
    "code": [
        "GIVE-INNATE-SPELL-NAME=Disrupt Undead:0:Primal:0"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-07T04:34:29",
    "updatedAt": "2020-08-07T04:34:29",
    "wsci": [
        ["giveInnateSpellName","disrupt undead",0,"primal",0]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 671,
    "name": "Stormtossed Tengu",
    "ancestryID": 167,
    "rarity": "COMMON",
    "description": "Whether due to a blessing from Hei Feng or hatching from your egg during a squall, you are resistant to storms. You gain electricity resistance equal to half your level (minimum 1). You automatically succeed at the flat check to target a concealed creature if that creature is concealed only by rain or fog.",
    "code": [
        "GIVE-RESISTANCE=Electricity:Half_Level"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-07T04:34:29",
    "updatedAt": "2020-08-07T04:34:29",
    "wsci": [
        ["giveResistance","electricity",["half",null]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 672,
    "name": "Jinxed Tengu",
    "ancestryID": 167,
    "rarity": "COMMON",
    "description": "Your lineage has been exposed to curse after curse, and now, they slide off your feathers like rain. If you succeed at a saving throw against a curse or (trait: misfortune) effect, you get a critical success instead. When you would gain the doomed condition, attempt a DC 17 flat check. On a success, reduce the value of the doomed condition you would gain by 1.",
    "code": [
        "CONDITIONAL-SAVE_FORT=When you roll a success against a curse or misfortune effect, you get a critical success instead.",
        "CONDITIONAL-SAVE_WILL=When you roll a success against a curse or misfortune effect, you get a critical success instead.",
        "CONDITIONAL-SAVE_REFLEX=When you roll a success against a curse or misfortune effect, you get a critical success instead."
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-07T04:34:29",
    "updatedAt": "2020-08-07T04:34:29",
    "wsci": [
        ["adjustConditional","SAVE","fort","When you roll a success against a curse or misfortune effect, you get a critical success instead."],
        ["adjustConditional","SAVE","will","When you roll a success against a curse or misfortune effect, you get a critical success instead."],
        ["adjustConditional","SAVE","reflex","When you roll a success against a curse or misfortune effect, you get a critical success instead."]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 673,
    "name": "Skyborn Tengu",
    "ancestryID": 167,
    "rarity": "COMMON",
    "description": "Your bones may be especially light, you may be a rare tengu with wings, or your connection to the spirits of wind and sky might be stronger than most, slowing your descent through the air. You take no damage from falling, regardless of the distance you fall.",
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-07T04:34:29",
    "updatedAt": "2020-08-07T04:34:29"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 674,
    "name": "Taloned Tengu",
    "ancestryID": 167,
    "rarity": "COMMON",
    "description": "Your talons are every bit as sharp and strong as your beak. You gain a talons unarmed attack that deals 1d4 slashing damage. Your talons are in the brawling group and have the (trait: agile), (trait: finesse), (trait: unarmed), and (trait: versatile piercing | versatile p) traits.",
    "code": [
        "GIVE-PHYSICAL-FEATURE-NAME=Tengu Talons"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-07T04:34:29",
    "updatedAt": "2020-08-07T04:34:29",
    "wsci": [
        ["givePhysicalFeatureName","tengu talons"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 693,
    "name": "Hold-Scarred Orc",
    "ancestryID": 172,
    "rarity": "COMMON",
    "description": "You are part of an orc community that participates in ritual scarification or tattooing. The marks on your skin show your exceptional hardiness and vitality. You gain 12 Hit Points from your ancestry instead of 10. You also gain the (feat: Diehard) feat.",
    "code": [
        "GIVE-FEAT-NAME=Diehard",
        "INCREASE-MAX_HEALTH=2-HERITAGE"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-07T07:27:44",
    "updatedAt": "2020-08-07T07:27:44",
    "wsci": [
        ["giveFeatName",["diehard"]],
        ["adjust","MAX_HEALTH",null,2,"heritage",null]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 694,
    "name": "Badlands Orc",
    "ancestryID": 172,
    "rarity": "COMMON",
    "description": "You come from sun-scorched badlands, where long legs and an ability to withstand the elements helped you thrive. You can (action: Hustle) twice as long while exploring before you have to stop, and you treat environmental heat effects as if they were one step less extreme (incredible heat becomes extreme, extreme heat becomes severe, and so on).",
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-07T07:27:44",
    "updatedAt": "2020-08-07T07:27:44"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 695,
    "name": "Deep Orc",
    "ancestryID": 172,
    "rarity": "COMMON",
    "description": "Your calloused hands and red eyes speak to a life spent in the deep darkness of mountain caverns, where you learned to battle on rocky cliffs and survive with minimal resources. You gain the (feat: Terrain Expertise) skill feat for underground terrain and the (feat: Combat Climber) skill feat.",
    "code": [
        "GIVE-FEAT-NAME=Terrain Expertise",
        "GIVE-FEAT-NAME=Combat Climber"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-07T07:27:44",
    "updatedAt": "2020-08-07T07:27:44",
    "wsci": [
        ["giveFeatName",["terrain expertise"]],
        ["giveFeatName",["combat climber"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 696,
    "name": "Rainfall Orc",
    "ancestryID": 172,
    "rarity": "COMMON",
    "description": "You were born in a rain forest with only tangles of trees providing protection from torrential rainstorms and flash floods. You've learned to move adeptly through jungle terrain and resist the various ailments common in humid environs. You gain a +2 circumstance bonus to Athletics checks to (action: Climb) or (action: Swim) and a +1 circumstance bonus to saving throws against diseases.",
    "code": [
        "CONDITIONAL-INCREASE-SKILL_Athletics=2~circumstance bonus to Climb or Swim",
        "CONDITIONAL-INCREASE-SAVE_FORT=1~circumstance bonus against diseases",
        "CONDITIONAL-INCREASE-SAVE_REFLEX=1~circumstance bonus against diseases",
        "CONDITIONAL-INCREASE-SAVE_WILL=1~circumstance bonus against diseases"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-07T07:27:44",
    "updatedAt": "2020-08-07T07:27:44",
    "wsci": [
        ["adjust","SKILL","athletics",2,null,"circumstance bonus to Climb or Swim"],
        ["adjust","SAVE","fort",1,null,"circumstance bonus against diseases"],
        ["adjust","SAVE","reflex",1,null,"circumstance bonus against diseases"],
        ["adjust","SAVE","will",1,null,"circumstance bonus against diseases"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 702,
    "name": "Desert Ratfolk",
    "ancestryID": 174,
    "rarity": "COMMON",
    "description": "You are native to arid plains and likely grew up traveling the roads. You have a leaner build than other ratfolk, with longer limbs and short fur. If you have both hands free, you can increase your Speed to 30 feet as you run on all fours. In addition, environmental heat effects are one step less extreme for you, and you can go 10 times as long as normal before you are affected by starvation or thirst. However, unless you wear protective gear or take shelter, environmental cold effects are one step more extreme for you.",
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-07T08:14:29",
    "updatedAt": "2020-08-07T08:14:29"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 703,
    "name": "Sewer Ratfolk",
    "ancestryID": 174,
    "rarity": "COMMON",
    "description": "You come from a long line of ysoki from a community based in the sewers beneath a large settlement. You are immune to the disease filth fever. Each of your successful saving throws against a disease or poison reduces its stage by 2, or by 1 for a virulent disease or poison. Each critical success against an ongoing disease or poison reduces its stage by 3, or by 2 for a virulent disease or poison.",
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-07T08:14:29",
    "updatedAt": "2020-08-07T08:14:29"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 704,
    "name": "Longsnout Ratfolk",
    "ancestryID": 174,
    "rarity": "COMMON",
    "description": "The long snouts that run in your family give you a keener sense of smell than most ratfolk. You gain imprecise scent with a range of 30 feet. This means you can use your sense of smell to determine a creature’s location. The GM will usually double the range if you’re downwind from the creature or halve the range if you’re upwind.\nIn addition, you gain a +2 circumstance bonus to Perception checks to (action: Seek) a creature or object within the range of your scent.",
    "code": [
        "GIVE-SENSE-NAME=Scent (imprecise 30 ft)",
        "CONDITIONAL-INCREASE-PERCEPTION=2~circumstance bonus to Seek a creature or object within the range of your scent"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-07T08:14:29",
    "updatedAt": "2020-08-07T08:14:29",
    "wsci": [
        ["giveSenseName","scent",30],
        ["adjust","PERCEPTION",null,2,null,"circumstance bonus to Seek a creature or object within the range of your scent"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 705,
    "name": "Deep Ratfolk",
    "ancestryID": 174,
    "rarity": "COMMON",
    "description": "Your ancestors lived deeper underground than other ratfolk, granting you the ability to see in the dark. You gain darkvision.",
    "code": [
        "GIVE-SENSE-NAME=Darkvision"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-07T08:14:29",
    "updatedAt": "2020-08-07T08:14:29",
    "wsci": [
        ["giveSenseName","darkvision",null]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 706,
    "name": "Shadow Ratfolk",
    "ancestryID": 174,
    "rarity": "COMMON",
    "description": "Your ancestors lived in dark spaces underground, granting you dark fur and a vaguely unnatural mien that unnerves sapient creatures and frightens animals. You gain the trained proficiency rank in Intimidation and can use Intimidation to (action: Coerce) animals. When you (action: Demoralize) an animal, you don’t take a penalty for not sharing a language with it. If you would automatically become trained in Intimidation (from your background or class, for example), you become trained in another skill of your choice.\nAnimals’ attitudes toward you begin one degree worse than normal, usually starting at unfriendly instead of indifferent for domesticated animals, and hostile instead of unfriendly for wild animals.",
    "code": [
        "GIVE-PROF-IN=Intimidation:T"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-07T08:14:29",
    "updatedAt": "2020-08-07T08:14:29",
    "wsci": [
        ["giveProfIn","intimidation","T"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 707,
    "name": "Dragonscaled Kobold",
    "ancestryID": 175,
    "rarity": "COMMON",
    "description": "Your scales are especially colorful, possessing some of the same resistance a dragon possesses. You gain resistance equal to half your level (minimum 1) to the damage type associated with your draconic exemplar. Double this resistance against dragons’ Breath Weapons.",
    "code": [
        "IF (HAS-FEAT==Draconic Exemplar - Black) {GIVE-RESISTANCE=Acid:Half_Level}",
        "IF (HAS-FEAT==Draconic Exemplar - Blue) {GIVE-RESISTANCE=Electricity:Half_Level}",
        "IF (HAS-FEAT==Draconic Exemplar - Green) {GIVE-RESISTANCE=Poison:Half_Level}",
        "IF (HAS-FEAT==Draconic Exemplar - Red) {GIVE-RESISTANCE=Fire:Half_Level}",
        "IF (HAS-FEAT==Draconic Exemplar - White) {GIVE-RESISTANCE=Cold:Half_Level}",
        "IF (HAS-FEAT==Draconic Exemplar - Brass) {GIVE-RESISTANCE=Fire:Half_Level}",
        "IF (HAS-FEAT==Draconic Exemplar - Bronze) {GIVE-RESISTANCE=Electricity:Half_Level}",
        "IF (HAS-FEAT==Draconic Exemplar - Copper) {GIVE-RESISTANCE=Acid:Half_Level}",
        "IF (HAS-FEAT==Draconic Exemplar - Gold) {GIVE-RESISTANCE=Fire:Half_Level}",
        "IF (HAS-FEAT==Draconic Exemplar - Silver) {GIVE-RESISTANCE=Cold:Half_Level}"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-14T22:51:34",
    "updatedAt": "2020-08-14T22:51:34",
    "wsci": [
        {"conditionals":[["hasFeat","==","draconic exemplar - black"]],"consequent":["giveResistance","acid",["half",null]]},
        {"conditionals":[["hasFeat","==","draconic exemplar - blue"]],"consequent":["giveResistance","electricity",["half",null]]},
        {"conditionals":[["hasFeat","==","draconic exemplar - green"]],"consequent":["giveResistance","poison",["half",null]]},
        {"conditionals":[["hasFeat","==","draconic exemplar - red"]],"consequent":["giveResistance","fire",["half",null]]},
        {"conditionals":[["hasFeat","==","draconic exemplar - white"]],"consequent":["giveResistance","cold",["half",null]]},
        {"conditionals":[["hasFeat","==","draconic exemplar - brass"]],"consequent":["giveResistance","fire",["half",null]]},
        {"conditionals":[["hasFeat","==","draconic exemplar - bronze"]],"consequent":["giveResistance","electricity",["half",null]]},
        {"conditionals":[["hasFeat","==","draconic exemplar - copper"]],"consequent":["giveResistance","acid",["half",null]]},
        {"conditionals":[["hasFeat","==","draconic exemplar - gold"]],"consequent":["giveResistance","fire",["half",null]]},
        {"conditionals":[["hasFeat","==","draconic exemplar - silver"]],"consequent":["giveResistance","cold",["half",null]]}
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 708,
    "name": "Cavern Kobold",
    "ancestryID": 175,
    "rarity": "COMMON",
    "description": "You hatched into a warren among narrow tunnels and countless kin. Your body is flexible. When (action: Climbing | Climb) rock walls, stalactites, and other natural stone features, you move at half your Speed on a success and at full Speed on a critical success (and you move at full Speed on a success if you have (feat: Quick Climb)). This doesn't affect you if you're using a climb Speed. If you roll a success on an Acrobatics check to (action: Squeeze), you get a critical success instead.",
    "code": [
        "CONDITIONAL-SKILL_Acrobatics=When you roll a success to Squeeze, you get a critical success instead."
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-14T22:51:34",
    "updatedAt": "2020-08-14T22:51:34",
    "wsci": [
        ["adjustConditional","SKILL","acrobatics","When you roll a success to Squeeze, you get a critical success instead."]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 709,
    "name": "Venomtail Kobold",
    "ancestryID": 175,
    "rarity": "COMMON",
    "description": "A vestigial spur in your tail secretes one dose of deadly venom each day. You gain the (feat: Tail Toxin) action.",
    "code": [
        "GIVE-FEAT-NAME=Tail Toxin"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-14T22:51:34",
    "updatedAt": "2020-08-14T22:51:34",
    "wsci": [
        ["giveFeatName",["tail toxin"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 710,
    "name": "Strongjaw Kobold",
    "ancestryID": 175,
    "rarity": "COMMON",
    "description": "Your bloodline is noted for their powerful jaws and sharp teeth. You gain a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group and have the (trait: finesse) and (trait: unarmed) traits.",
    "code": [
        "GIVE-PHYSICAL-FEATURE-NAME=Jaws"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-14T22:51:34",
    "updatedAt": "2020-08-14T22:51:34",
    "wsci": [
        ["givePhysicalFeatureName","jaws"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 711,
    "name": "Spellscale Kobold",
    "ancestryID": 175,
    "rarity": "COMMON",
    "description": "A trace of draconic magic flows through your veins. Choose one cantrip from the arcane spell list. You can Cast this Spell as an arcane innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up. You gain the trained proficiency rank in arcane spell attack rolls and spell DCs, and your key spellcasting ability is Charisma.",
    "code": [
        "GIVE-INNATE-SPELL=0:Arcane:0",
        "GIVE-PROF-IN=ArcaneSpellAttacks:T",
        "GIVE-PROF-IN=ArcaneSpellDCs:T",
        "SET-SPELL-TRADITION=Spellscale Kobold:Arcane",
        "SET-SPELL-KEY-ABILITY=Spellscale Kobold:CHA"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-08-14T22:51:34",
    "updatedAt": "2020-08-14T22:51:34",
    "wsci": [
        ["giveInnateSpell",0,"arcane",0],
        ["giveProfIn","arcane_spell_attacks","T"],
        ["giveProfIn","arcane_spell_dc","T"],
        ["setSpellTradition","spellscale kobold","arcane"],
        ["setSpellKeyAbility","spellscale kobold","CHA"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 712,
    "name": "Skilled Human",
    "ancestryID": 176,
    "rarity": "COMMON",
    "description": "Your ingenuity allows you to train in a wide variety of skills. You become trained in one skill of your choice. At 5th level, you become an expert in the chosen skill.",
    "code": [
        "IF (HAS-LEVEL>=5) {GIVE-SKILL=E} ELSE {GIVE-SKILL=T}"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-23T22:16:27",
    "updatedAt": "2020-08-23T22:16:27",
    "wsci": [
        {"conditionals":[["hasLevel",">=",5]],"consequent":["giveSkill","E",[]],"alternate":["giveSkill","T",[]]}
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 713,
    "name": "Versatile Human",
    "ancestryID": 176,
    "rarity": "COMMON",
    "description": "Humanity’s versatility and ambition have fueled its ascendance to be the most common ancestry in most nations throughout the world. Select a general feat of your choice for which you meet the prerequisites.",
    "code": [
        "GIVE-GENERAL-FEAT=1"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-23T22:16:27",
    "updatedAt": "2020-08-23T22:16:27",
    "wsci": [
        ["giveGeneralFeat",["absolute",1],[]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 714,
    "name": "Half-Elf Human",
    "ancestryID": 176,
    "rarity": "COMMON",
    "description": "Either one of your parents was an elf, or one or both were half-elves. You have pointed ears and other telltale signs of elf heritage. You gain the (trait: elf) trait and low-light vision. In addition, you can select elf, half-elf, and human feats whenever you gain an ancestry feat.",
    "code": [
        "GIVE-CHAR-TRAIT-NAME=Elf",
        "GIVE-CHAR-TRAIT-NAME=Half-Elf",
        "GIVE-SENSE-NAME=Low-Light Vision"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-23T22:16:27",
    "updatedAt": "2020-08-23T22:16:27",
    "wsci": [
        ["giveCharTraitName","Elf"],
        ["giveCharTraitName","Half-Elf"],
        ["giveSenseName","low-light vision",null]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 715,
    "name": "Half-Orc Human",
    "ancestryID": 176,
    "rarity": "COMMON",
    "description": "One of your parents was an orc, or one or both were half-orcs. You have a green tinge to your skin and other indicators of orc heritage. You gain the (trait: orc) trait and low-light vision. In addition, you can select orc, half-orc, and human feats whenever you gain an ancestry feat.",
    "code": [
        "GIVE-CHAR-TRAIT-NAME=Orc",
        "GIVE-CHAR-TRAIT-NAME=Half-Orc",
        "GIVE-SENSE-NAME=Low-Light Vision"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-23T22:16:27",
    "updatedAt": "2020-08-23T22:16:27",
    "wsci": [
        ["giveCharTraitName","Orc"],
        ["giveCharTraitName","Half-Orc"],
        ["giveSenseName","low-light vision",null]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 716,
    "name": "Ancient-Blooded Dwarf",
    "ancestryID": 177,
    "rarity": "COMMON",
    "description": "Dwarven heroes of old could shrug off their enemies’ magic, and some of that resistance manifests in you. You gain the (feat:Call on Ancient Blood) reaction.",
    "code": [
        "GIVE-FEAT-NAME=Call on Ancient Blood"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-23T22:44:49",
    "updatedAt": "2020-08-23T22:44:49",
    "wsci": [
        ["giveFeatName",["call on ancient blood"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 717,
    "name": "Death Warden Dwarf",
    "ancestryID": 177,
    "rarity": "COMMON",
    "description": "Your ancestors have been tomb guardians for generations, and the power they cultivated to ward off necromancy has passed on to you. If you roll a success on a saving throw against a necromancy effect, you get a critical success instead.",
    "code": [
        "CONDITIONAL-SAVE_FORT=When you roll a success against a necromancy effect‚ you get a critical success instead.",
        "CONDITIONAL-SAVE_REFLEX=When you roll a success against a necromancy effect‚ you get a critical success instead.",
        "CONDITIONAL-SAVE_WILL=When you roll a success against a necromancy effect‚ you get a critical success instead."
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-23T22:44:49",
    "updatedAt": "2020-08-23T22:44:49"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 718,
    "name": "Forge Dwarf",
    "ancestryID": 177,
    "rarity": "COMMON",
    "description": "You have a remarkable adaptation to hot environments from ancestors who inhabited blazing deserts or volcanic chambers beneath the earth. This grants you fire resistance equal to half your level (minimum 1), and you treat environmental heat effects as if they were one step less extreme (incredible heat becomes extreme, extreme heat becomes severe, and so on).",
    "code": [
        "GIVE-RESISTANCE=Fire:Half_Level"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-23T22:44:49",
    "updatedAt": "2020-08-23T22:44:49",
    "wsci": [
        ["giveResistance","fire",["half",null]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 719,
    "name": "Strong-Blooded Dwarf",
    "ancestryID": 177,
    "rarity": "COMMON",
    "description": "Your blood runs hearty and strong, and you can shake off toxins. You gain poison resistance equal to half your level (minimum 1), and each of your successful saving throws against a poison affliction reduces its stage by 2, or by 1 for a virulent poison. Each critical success against an ongoing poison reduces its stage by 3, or by 2 for a virulent poison.",
    "code": [
        "GIVE-RESISTANCE=Poison:Half_Level"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-23T22:44:49",
    "updatedAt": "2020-08-23T22:44:49",
    "wsci": [
        ["giveResistance","poison",["half",null]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 720,
    "name": "Rock Dwarf",
    "ancestryID": 177,
    "rarity": "COMMON",
    "description": "Your ancestors lived and worked among the great ancient stones of the mountains or the depths of the earth. This makes you solid as a rock when you plant your feet. You gain a +2 circumstance bonus to your Fortitude or Reflex DC against attempts to (action: Shove) or (action: Trip) you. This bonus also applies to saving throws against spells or effects that attempt to knock you prone.\nIn addition, if any effect would force you to move 10 feet or more, you are moved only half the distance.",
    "code": [
        "CONDITIONAL-INCREASE-SAVE_FORT=2~circumstance bonus against attempts to Shove or Trip you and against spells or effects that attempt to knock you prone",
        "CONDITIONAL-INCREASE-SAVE_REFLEX=2~circumstance bonus against attempts to Shove or Trip you and against spells or effects that attempt to knock you prone"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-23T22:44:49",
    "updatedAt": "2020-08-23T22:44:49",
    "wsci": [
        ["adjust","SAVE","fort",2,null,"circumstance bonus against attempts to Shove or Trip you and against spells or effects that attempt to knock you prone"],
        ["adjust","SAVE","reflex",2,null,"circumstance bonus against attempts to Shove or Trip you and against spells or effects that attempt to knock you prone"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 721,
    "name": "Arctic Elf",
    "ancestryID": 178,
    "rarity": "COMMON",
    "description": "You dwell deep in the frozen north and have gained incredible resilience against cold environments, granting you cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).",
    "code": [
        "GIVE-RESISTANCE=Cold:HALF_LEVEL"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-23T23:07:31",
    "updatedAt": "2020-08-23T23:07:31"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 722,
    "name": "Whisper Elf",
    "ancestryID": 178,
    "rarity": "COMMON",
    "description": "Your ears are finely tuned, able to detect even the slightest whispers of sound. As long as you can hear normally, you can use the (action: Seek) action to sense undetected creatures in a 60-foot cone instead of a 30-foot cone. You also gain a +2 circumstance bonus to locate undetected creatures that you could hear within 30 feet with a (action: Seek) action.",
    "code": [
        "CONDITIONAL-INCREASE-PERCEPTION=2~circumstance bonus to locate undetected creatures that you could hear within 30 feet with a Seek action"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-23T23:07:31",
    "updatedAt": "2020-08-23T23:07:31",
    "wsci": [
        ["adjust","PERCEPTION",null,2,null,"circumstance bonus to locate undetected creatures that you could hear within 30 feet with a Seek action"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 723,
    "name": "Seer Elf",
    "ancestryID": 178,
    "rarity": "COMMON",
    "description": "You have an inborn ability to detect and understand magical phenomena. You can cast the (spell: detect magic) cantrip as an arcane innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up. In addition, you gain a +1 circumstance bonus to checks to (action: Identify Magic) and to (action: Decipher Writing) of a magical nature. These skill actions typically use the Arcana, Nature, Occultism, or Religion skill.",
    "code": [
        "GIVE-INNATE-SPELL-NAME=Detect Magic:0:ARCANE:0",
        "CONDITIONAL-INCREASE-SKILL_Arcana=1~circumstance bonus to Identify Magic and to Decipher Writing of a magical nature",
        "CONDITIONAL-INCREASE-SKILL_Nature=1~circumstance bonus to Identify Magic and to Decipher Writing of a magical nature",
        "CONDITIONAL-INCREASE-SKILL_Occultism=1~circumstance bonus to Identify Magic and to Decipher Writing of a magical nature",
        "CONDITIONAL-INCREASE-SKILL_Religion=1~circumstance bonus to Identify Magic and to Decipher Writing of a magical nature"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-23T23:07:31",
    "updatedAt": "2020-08-23T23:07:31",
    "wsci": [
        ["giveInnateSpellName","detect magic",0,"arcane",0],
        ["adjust","SKILL","arcana",1,null,"circumstance bonus to Identify Magic and to Decipher Writing of a magical nature"],
        ["adjust","SKILL","nature",1,null,"circumstance bonus to Identify Magic and to Decipher Writing of a magical nature"],
        ["adjust","SKILL","occultism",1,null,"circumstance bonus to Identify Magic and to Decipher Writing of a magical nature"],
        ["adjust","SKILL","religion",1,null,"circumstance bonus to Identify Magic and to Decipher Writing of a magical nature"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 724,
    "name": "Cavern Elf",
    "ancestryID": 178,
    "rarity": "COMMON",
    "description": "You were born or spent many years in underground tunnels or caverns where light is scarce. You gain darkvision.",
    "code": [
        "GIVE-SENSE-NAME=Darkvision"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-23T23:07:31",
    "updatedAt": "2020-08-23T23:07:31",
    "wsci": [
        ["giveSenseName","darkvision",null]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 725,
    "name": "Woodland Elf",
    "ancestryID": 178,
    "rarity": "COMMON",
    "description": "You’re adapted to life in the forest or the deep jungle, and you know how to climb trees and use foliage to your advantage. When (action: Climbing | Climb) trees, vines, and other foliage, you move at half your Speed on a success and at full Speed on a critical success (and you move at full Speed on a success if you have (feat: Quick Climb)). This doesn’t affect you if you’re using a climb Speed. You can always use the (action: Take Cover) action when you are within forest terrain to gain cover, even if you’re not next to an obstacle you can (action: Take Cover) behind.",
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-23T23:07:31",
    "updatedAt": "2020-08-23T23:07:31"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 726,
    "name": "Chameleon Gnome",
    "ancestryID": 179,
    "rarity": "COMMON",
    "description": "The color of your hair and skin is mutable, possibly due to latent magic. You can slowly change the vibrancy and the exact color, and the coloration can be different across your body, allowing you to create patterns or other colorful designs. It takes a single action for minor localized shifts and up to an hour for dramatic shifts throughout your body. While you’re asleep, the colors shift on their own in tune with your dreams, giving you an unusual coloration each morning. When you’re in an area where your coloration is roughly similar to the environment (for instance, forest green in a forest), you can use the single action to make minor localized shifts designed to help you blend into your surroundings. This grants you a +2 circumstance bonus to Stealth checks until your surroundings shift in coloration or pattern.",
    "code": [
        "CONDITIONAL-INCREASE-SKILL_STEALTH=2~circumstance bonus when blended into your surroundings, until your surroundings shift in coloration or pattern"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-24T00:16:38",
    "updatedAt": "2020-08-24T00:16:38",
    "wsci": [
        ["adjust","SKILL","stealth",2,null,"circumstance bonus when blended into your surroundings, until your surroundings shift in coloration or pattern"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 727,
    "name": "Fey-Touched Gnome",
    "ancestryID": 179,
    "rarity": "COMMON",
    "description": "The blood of the fey is so strong within you that you’re truly one of them. You gain the fey trait, in addition to the gnome and humanoid traits. Choose one cantrip from the primal spell list (page 314). You can cast this spell as a primal innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up. You can change this cantrip to a different one from the same list once per day by meditating to realign yourself with the First World; this is a 10-minute activity that has the concentrate trait.",
    "code": [
        "GIVE-CHAR-TRAIT-NAME=Fey",
        "GIVE-INNATE-SPELL=0:PRIMAL:0"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-24T00:16:38",
    "updatedAt": "2020-08-24T00:16:38",
    "wsci": [
        ["giveCharTraitName","Fey"],
        ["giveInnateSpell",0,"primal",0]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 728,
    "name": "Sensate Gnome",
    "ancestryID": 179,
    "rarity": "COMMON",
    "description": "You see all colors as brighter, hear all sounds as richer, and especially smell all scents with incredible detail. You gain a special sense: imprecise scent with a range of 30 feet. This means you can use your sense of smell to determine the exact location of a creature (as explained on page 465). The GM will usually double the range if you’re downwind from the creature or halve the range if you’re upwind. In addition, you gain a +2 circumstance bonus to Perception checks whenever you’re trying to locate an undetected creature that is within the range of your scent.",
    "code": [
        "CONDITIONAL-INCREASE-PERCEPTION=2~circumstance bonus whenever you're trying to locate an undetected creature that is within the range of your scent."
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-24T00:16:38",
    "updatedAt": "2020-08-24T00:16:38",
    "wsci": [
        ["adjust","PERCEPTION",null,2,null,"circumstance bonus whenever you're trying to locate an undetected creature that is within the range of your scent."]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 729,
    "name": "Umbral Gnome",
    "ancestryID": 179,
    "rarity": "COMMON",
    "description": "Whether from a connection to dark or shadowy fey, from the underground deep gnomes also known as svirfneblin, or another source, you can see in complete darkness. You gain darkvision.",
    "code": [
        "GIVE-SENSE-NAME=Darkvision"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-24T00:16:38",
    "updatedAt": "2020-08-24T00:16:38",
    "wsci": [
        ["giveSenseName","darkvision",null]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 730,
    "name": "Wellspring Gnome",
    "ancestryID": 179,
    "rarity": "COMMON",
    "description": "Some other source of magic has a greater hold on you than the primal magic of your fey lineage does. This connection might come from an occult plane or an ancient occult song; a deity, celestial, or fiend; magical effluent left behind by a mage war; or ancient rune magic. Choose arcane, divine, or occult. You gain one cantrip from that magical tradition’s spell list (pages 307–315). You can cast this spell as an innate spell at will, as a spell of your chosen tradition. A cantrip is heightened to a spell level equal to half your level rounded up. Whenever you gain a primal innate spell from a gnome ancestry feat, change its tradition from primal to your chosen tradition.",
    "code": [
        "GIVE-FEAT-FROM=Choose a Tradition:Wellspring Gnome - Arcane,Wellspring Gnome - Divine,Wellspring Gnome - Occult"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-24T00:16:38",
    "updatedAt": "2020-08-24T00:16:38",
    "wsci": [
        ["giveFeatFrom","Choose a Tradition",["Wellspring Gnome - Arcane","Wellspring Gnome - Divine","Wellspring Gnome - Occult"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 731,
    "name": "Irongut Goblin",
    "ancestryID": 180,
    "rarity": "COMMON",
    "description": "You can subsist on food that most folks would consider spoiled. You can keep yourself fed with poor meals in a settlement as long as garbage is readily available, without using the (action: Subsist) downtime activity. You can eat and drink things when you are sickened.\nYou gain a +2 circumstance bonus to saving throws against afflictions, against gaining the sickened condition, and to remove the sickened condition. When you roll a success on a Fortitude save affected by this bonus, you get a critical success instead. All these benefits apply only when the affliction or condition resulted from something you ingested.",
    "code": [
        "CONDITIONAL-INCREASE-SAVE_REFLEX=2~circumstance bonus against afflictions, gaining the sickened condition, and to removing the sickened condition from something you ingested.",
        "CONDITIONAL-INCREASE-SAVE_WILL=2~circumstance bonus against afflictions, gaining the sickened condition, and to removing the sickened condition from something you ingested.",
        "CONDITIONAL-INCREASE-SAVE_FORT=2~circumstance bonus against afflictions, gaining the sickened condition, and to removing the sickened condition from something you ingested. When you roll a success that is affected by this bonus‚ you get a critical success instead."
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-24T00:46:45",
    "updatedAt": "2020-08-24T00:46:45"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 732,
    "name": "Charhide Goblin",
    "ancestryID": 180,
    "rarity": "COMMON",
    "description": "Your ancestors have always had a connection to fire and a thicker skin, which allows you to resist burning. You gain fire resistance equal to half your level (minimum 1). You can also recover from being on fire more easily. Your flat check to remove persistent fire damage is DC 10 instead of DC 15, which is reduced to DC 5 if another creature uses a particularly appropriate action to help.",
    "code": [
        "GIVE-RESISTANCE=Fire:Half_Level"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-24T00:46:45",
    "updatedAt": "2020-08-24T00:46:45",
    "wsci": [
        ["giveResistance","fire",["half",null]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 733,
    "name": "Razortooth Goblin",
    "ancestryID": 180,
    "rarity": "COMMON",
    "description": "Your family’s teeth are formidable weapons. You gain a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group and have the (trait: finesse) and (trait: unarmed) traits.",
    "code": [
        "GIVE-PHYSICAL-FEATURE-NAME=Jaws"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-24T00:46:45",
    "updatedAt": "2020-08-24T00:46:45",
    "wsci": [
        ["givePhysicalFeatureName","jaws"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 734,
    "name": "Snow Goblin",
    "ancestryID": 180,
    "rarity": "COMMON",
    "description": "You are acclimated to living in frigid lands and have skin ranging from sky blue to navy in color, as well as blue fur. You gain cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).",
    "code": [
        "GIVE-RESISTANCE=Cold:Half_Level"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-24T00:46:45",
    "updatedAt": "2020-08-24T00:46:45",
    "wsci": [
        ["giveResistance","cold",["half",null]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 735,
    "name": "Unbreakable Goblin",
    "ancestryID": 180,
    "rarity": "COMMON",
    "description": "You’re able to bounce back from injuries easily due to an exceptionally thick skull, cartilaginous bones, or some other mixed blessing. You gain 10 Hit Points from your ancestry instead of 6. When you fall, reduce the falling damage you take as though you had fallen half the distance.",
    "code": [
        "INCREASE-MAX_HEALTH=4-HERITAGE"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-24T00:46:45",
    "updatedAt": "2020-08-24T00:46:45",
    "wsci": [
        ["adjust","MAX_HEALTH",null,4,"heritage",null]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 736,
    "name": "Gutsy Halfling",
    "ancestryID": 181,
    "rarity": "COMMON",
    "description": "Your family line is known for keeping a level head and staving off fear when the chips were down, making them wise leaders and sometimes even heroes. When you roll a success on a saving throw against an (trait: emotion) effect, you get a critical success instead.",
    "code": [
        "CONDITIONAL-SAVE_FORT=When you roll a success against an emotion effect, you get a critical success instead.",
        "CONDITIONAL-SAVE_REFLEX=When you roll a success against an emotion effect, you get a critical success instead.",
        "CONDITIONAL-SAVE_WILL=When you roll a success against an emotion effect, you get a critical success instead."
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-24T01:21:54",
    "updatedAt": "2020-08-24T01:21:54",
    "wsci": [
        ["adjustConditional","SAVE","fort","When you roll a success against an emotion effect, you get a critical success instead."],
        ["adjustConditional","SAVE","reflex","When you roll a success against an emotion effect, you get a critical success instead."],
        ["adjustConditional","SAVE","will","When you roll a success against an emotion effect, you get a critical success instead."]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 737,
    "name": "Twilight Halfling",
    "ancestryID": 181,
    "rarity": "COMMON",
    "description": "Your ancestors performed many secret acts under the concealing cover of dusk, whether for good or ill, and over time they developed the ability to see in twilight beyond even the usual keen sight of halflings. You gain low-light vision.",
    "code": [
        "GIVE-SENSE-NAME=low-light vision"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-24T01:21:54",
    "updatedAt": "2020-08-24T01:21:54",
    "wsci": [
        ["giveSenseName","low-light vision",null]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 738,
    "name": "Wildwood Halfling",
    "ancestryID": 181,
    "rarity": "COMMON",
    "description": "You hail from deep in a jungle or forest, and you’ve learned how to use your small size to wriggle through undergrowth, vines, and other obstacles. You ignore difficult terrain from trees, foliage, and undergrowth.",
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-24T01:21:54",
    "updatedAt": "2020-08-24T01:21:54"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 739,
    "name": "Nomadic Halfling",
    "ancestryID": 181,
    "rarity": "COMMON",
    "description": "Your ancestors have traveled from place to place for generations, never content to settle down. You gain two additional languages of your choice, chosen from among the common and uncommon languages available to you, and every time you take the (Feat: Multilingual) feat, you gain another new language.",
    "code": [
        "GIVE-LANG",
        "GIVE-LANG"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-24T01:21:54",
    "updatedAt": "2020-08-24T01:21:54",
    "wsci": [
        ["giveLang"],
        ["giveLang"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 740,
    "name": "Hillock Halfling",
    "ancestryID": 181,
    "rarity": "COMMON",
    "description": "Accustomed to a calm life in the hills, your people find rest and relaxation especially replenishing, particularly when indulging in creature comforts. When you regain Hit Points overnight, add your level to the Hit Points regained. When anyone uses the Medicine skill to (action: Treat your Wounds | Treat Wounds), you can eat a snack to add your level to the Hit Points you regain from their treatment.",
    "isArchived": true,
    "contentSrc": "CRB",
    "createdAt": "2020-08-24T01:21:54",
    "updatedAt": "2020-08-24T01:21:54"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 753,
    "name": "Ancient Elf",
    "rarity": "COMMON",
    "description": "In your long life, you’ve dabbled in many paths and many styles. A typical ancient elf is at least 100 years old, though you might be younger at the GM’s discretion. Choose a class other than your own. You gain the multiclass dedication feat for that class, even though you don’t meet its level prerequisite. You must still meet its other prerequisites to gain the feat.",
    "code": [
        "GIVE-FEAT=2[dedication,multiclass]"
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "indivAncestryName": "Elf",
    "createdAt": "2020-08-26T02:32:32",
    "updatedAt": "2020-08-26T02:32:32",
    "wsci": [
        ["giveFeat",["absolute",2],["dedication","multiclass"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 754,
    "name": "Anvil Dwarf",
    "rarity": "COMMON",
    "description": "You are a descendant of a famed crafter and have your own amazing talent. Other dwarves might consider this a blessing from your ancestors or from the Forgefather himself, depending on where you grew up. You become trained in Crafting (or another skill if you were already trained in Crafting) and gain the (feat: Specialty Crafting) skill feat, but you can pick two different specialties instead of one.",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-FEAT-NAME=Specialty Crafting"
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "indivAncestryName": "Dwarf",
    "createdAt": "2020-08-26T02:32:47",
    "updatedAt": "2020-08-26T02:32:47",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveFeatName",["specialty crafting"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 755,
    "name": "Desert Elf",
    "rarity": "COMMON",
    "description": "You live under the desert’s blazing heat, gaining incredible resilience to warm environments. You gain fire resistance equal to half your level (minimum 1), and environmental heat effects are one step less extreme for you (incredible heat becomes extreme, extreme heat becomes severe, and so on).",
    "code": [
        "GIVE-RESISTANCE=Fire:HALF_LEVEL"
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "indivAncestryName": "Elf",
    "createdAt": "2020-08-26T02:32:57",
    "updatedAt": "2020-08-26T02:32:57"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 757,
    "name": "Observant Halfling",
    "rarity": "COMMON",
    "description": "Your finely honed senses quickly clue you in to danger or trickery. You gain a +1 circumstance bonus to your Perception DC, though not to your Perception checks.",
    "code": [
        "CONDITIONAL-INCREASE-PERCEPTION=1~circumstance bonus to your Perception DC, though not to your Perception checks"
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "indivAncestryName": "Halfling",
    "createdAt": "2020-08-26T02:33:14",
    "updatedAt": "2020-08-26T02:33:14",
    "wsci": [
        ["adjust","PERCEPTION",null,1,null,"circumstance bonus to your Perception DC, though not to your Perception checks"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 758,
    "name": "Tailed Goblin",
    "rarity": "COMMON",
    "description": "You have a powerful tail, likely because you descend from a community of monkey goblins. You gain a +2 circumstance bonus to Athletics checks to (action: Climb), you gain (feat: Combat Climber) as a bonus feat, and you reduce the number of free hands required to (action: Climb) or (action: Trip) by one.",
    "code": [
        "CONDITIONAL-INCREASE-SKILL_ATHLETICS=2~circumstance bonus to Climb checks",
        "GIVE-FEAT-NAME=Combat Climber"
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "indivAncestryName": "Goblin",
    "createdAt": "2020-08-26T02:33:21",
    "updatedAt": "2020-08-26T02:33:21",
    "wsci": [
        ["adjust","SKILL","athletics",2,null,"circumstance bonus to Climb checks"],
        ["giveFeatName",["combat climber"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 759,
    "name": "Treedweller Goblin",
    "rarity": "COMMON",
    "description": "You have adapted particularly well to living in forested environments. As long as you are in a forest or jungle, you gain a +2 circumstance bonus to Stealth checks to (action: Hide) and (action: Sneak), Survival checks to (action: Subsist | Subsist - Survival), and your Survival DC to (action: Cover Tracks).",
    "code": [
        "CONDITIONAL-INCREASE-SKILL_STEALTH=2~circumstance bonus to Hide and Sneak checks",
        "CONDITIONAL-INCREASE-SKILL_SURVIVAL=2~circumstance bonus to Subsist checks and to your DC to Cover Tracks"
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "indivAncestryName": "Goblin",
    "createdAt": "2020-08-26T02:33:28",
    "updatedAt": "2020-08-26T02:33:28",
    "wsci": [
        ["adjust","SKILL","stealth",2,null,"circumstance bonus to Hide and Sneak checks"],
        ["adjust","SKILL","survival",2,null,"circumstance bonus to Subsist checks and to your DC to Cover Tracks"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 760,
    "name": "Vivacious Gnome",
    "rarity": "COMMON",
    "description": "You have an incredibly strong connection to the positive energy that flows through the First World, making it harder to attack your life force with negative energy. You gain negative resistance equal to half your level (minimum 1). When you have the doomed condition, the condition affects you as if its value was 1 lower than it actually is (doomed 1 has no effect, doomed 2 causes you to die at dying 3, and so on).",
    "code": [
        "GIVE-RESISTANCE=Negative:Half_Level"
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "indivAncestryName": "Gnome",
    "createdAt": "2020-08-26T02:33:34",
    "updatedAt": "2020-08-26T02:33:34",
    "wsci": [
        ["giveResistance","negative",["half",null]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 763,
    "name": "Elemental Heart Dwarf",
    "rarity": "COMMON",
    "description": "Whether through a connection to Torag’s forge, the azers of the Plane of Fire, or another source, you can exude a burst of energy. Mbe’ke and Taralu dwarves of the Mwangi Expanse believe this heritage is a gift from dragons or elemental spirits. Choose one of the following damage types: (trait: acid), (trait: cold), (trait: electricity), or (trait: fire). Once chosen, this can’t be changed.\nYou gain the (feat: Energy Emanation) activity.",
    "code": [
        "GIVE-FEAT-NAME=Energy Emanation",
        "GIVE-NOTES-FIELD=Use this area to keep track of the damage type you chose."
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "indivAncestryName": "Dwarf",
    "createdAt": "2020-08-26T02:48:43",
    "updatedAt": "2020-08-26T02:48:43",
    "wsci": [
        ["giveFeatName",["energy emanation"]],
        ["giveNotesField","Use this area to keep track of the damage type you chose."]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 764,
    "name": "Jinxed Halfling",
    "rarity": "UNCOMMON",
    "description": "You were born with a strange blessing: bereft of the typical halfling luck, you can instead manipulate the fortunes of others. You can never take the (feat: Halfling Luck) feat, and you gain the (action: Jinx) action.",
    "code": [
        "GIVE-FEAT-NAME=Jinx"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "indivAncestryName": "Halfling",
    "createdAt": "2020-08-26T03:00:18",
    "updatedAt": "2020-08-26T03:00:18",
    "wsci": [
        ["giveFeatName",["jinx"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 789,
    "name": "Wintertouched Human",
    "rarity": "COMMON",
    "description": "The power of winter flows through you. This heritage is most common among the Jadwiga of Irrisen, due to their descent from Baba Yaga, and certain Erutaki touched by the spirits. You gain cold resistance equal to half your level (minimum 1), and you treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).",
    "code": [
        "GIVE-RESISTANCE=Cold:Half_Level"
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "indivAncestryName": "Human",
    "createdAt": "2020-11-21T00:36:51",
    "updatedAt": "2020-11-21T00:36:51",
    "wsci": [
        ["giveResistance","cold",["half",null]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 974,
    "name": "Polyglot Android",
    "ancestryID": 269,
    "rarity": "COMMON",
    "description": "You were preprogrammed with a multitude of linguistic proficiencies, likely to act as a translator. You learn two new languages, chosen from common languages and any uncommon languages you have access to. These languages take the same form (signed or spoken) as your other languages. If you select the (feat: Multilingual) feat, you learn three new languages instead of two.",
    "code": [
        "GIVE-LANG",
        "GIVE-LANG"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-21T20:34:46",
    "updatedAt": "2021-02-21T20:34:46",
    "wsci": [
        ["giveLang"],
        ["giveLang"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 975,
    "name": "Laborer Android",
    "ancestryID": 269,
    "rarity": "COMMON",
    "description": "Your body is adapted to endure physical hardships or perform hard labor for long periods of time. You become trained in Athletics (or another skill if you’re already trained in Athletics), and you gain the (feat: Hefty Hauler) skill feat.",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-FEAT-NAME=Hefty Hauler"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-21T20:34:46",
    "updatedAt": "2021-02-21T20:34:46",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveFeatName",["hefty hauler"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 976,
    "name": "Impersonator Android",
    "ancestryID": 269,
    "rarity": "COMMON",
    "description": "Your body was augmented with processes and an appearance intended to blend in with humans more easily. You become trained in Deception (or another skill if you’re already trained in Deception). You don’t require a (item: disguise kit) when attempting Deception checks to (action: Impersonate) a human. In addition, you gain a +4 circumstance bonus to (action: Impersonate) checks to pretend that you’re a human version of yourself, rather than an android. This bonus doesn’t apply to other checks to (action: Impersonate) humans.",
    "code": [
        "GIVE-PROF-IN=Deception:T",
        "CONDITIONAL-INCREASE-SKILL_Deception=4~circumstance bonus to Impersonate a human version of yourself"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-21T20:34:46",
    "updatedAt": "2021-02-21T20:34:46",
    "wsci": [
        ["giveProfIn","deception","T"],
        ["adjust","SKILL","deception",4,null,"circumstance bonus to Impersonate a human version of yourself"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 977,
    "name": "Artisan Android",
    "ancestryID": 269,
    "rarity": "COMMON",
    "description": "Your body was originally designed to create works of art, complex tools, or maintain advanced machinery. You become trained in Crafting (or another skill if you’re already trained in Crafting), and you gain the (feat: Specialty Crafting) skill feat in a specialty of your choice.",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-FEAT-NAME=Specialty Crafting"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-21T20:34:46",
    "updatedAt": "2021-02-21T20:34:46",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveFeatName",["specialty crafting"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 978,
    "name": "Warrior Android",
    "ancestryID": 269,
    "rarity": "COMMON",
    "description": "Your body was originally created to function as a security officer or soldier. You’re a naturally gifted warrior preprogrammed for combat. You’re trained in all simple and martial weapons.",
    "code": [
        "GIVE-PROF-IN=Simple_Weapons:T",
        "GIVE-PROF-IN=Martial_Weapons:T"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-21T20:34:46",
    "updatedAt": "2021-02-21T20:34:46",
    "wsci": [
        ["giveProfIn","simple_weapons","T"],
        ["giveProfIn","martial_weapons","T"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 984,
    "name": "Bright Fetchling",
    "ancestryID": 274,
    "rarity": "COMMON",
    "description": "Your body proves that shadow can’t exist without light. Perhaps your eyes glow brighter or your veins occasionally pulse with light. You emit dim light within 5 feet of you. You can activate or suppress this ability as an action, which has the (trait: concentrate) trait. Additionally, you can force fragments of your shadow to glow and cast (spell: dancing lights) and (spell: light) as occult innate cantrips. Cantrips are heightened to a spell level equal to half your level rounded up.",
    "code": [
        "GIVE-INNATE-SPELL-NAME=Dancing Lights:0:Occult:0",
        "GIVE-INNATE-SPELL-NAME=Light:0:Occult:0"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T21:53:17",
    "updatedAt": "2021-02-22T21:53:17",
    "wsci": [
        ["giveInnateSpellName","dancing lights",0,"occult",0],
        ["giveInnateSpellName","light",0,"occult",0]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 985,
    "name": "Deep Fetchling",
    "ancestryID": 274,
    "rarity": "COMMON",
    "description": "Your predecessors dwelled in the Shadow Plane’s deepest, most treacherous regions. You might cast a denser shadow, have a slower pulse, or find comfort in the embrace of darkness. You gain cold or negative resistance equal to half your level (minimum 1), chosen when you gain this heritage.",
    "code": [
        "GIVE-FEAT-FROM=Choose a Resistance:Deep Heritage - Cold,Deep Heritage - Negative"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T21:53:17",
    "updatedAt": "2021-02-22T21:53:17",
    "wsci": [
        ["giveFeatFrom","Choose a Resistance",["Deep Heritage - Cold","Deep Heritage - Negative"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 986,
    "name": "Resolute Fetchling",
    "ancestryID": 274,
    "rarity": "COMMON",
    "description": "Your ancestors have long dealt with the horrific – in the Shadow Plane or elsewhere – and you bear their mental fortitude. When you roll a success on a saving throw against an (trait: emotion) effect, you get a critical success instead.",
    "code": [
        "CONDITIONAL-SAVE_FORT=When you roll a success against an emotion effect, you get a critical success instead.",
        "CONDITIONAL-SAVE_WILL=When you roll a success against an emotion effect, you get a critical success instead.",
        "CONDITIONAL-SAVE_REFLEX=When you roll a success against an emotion effect, you get a critical success instead."
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T21:53:17",
    "updatedAt": "2021-02-22T21:53:17",
    "wsci": [
        ["adjustConditional","SAVE","fort","When you roll a success against an emotion effect, you get a critical success instead."],
        ["adjustConditional","SAVE","will","When you roll a success against an emotion effect, you get a critical success instead."],
        ["adjustConditional","SAVE","reflex","When you roll a success against an emotion effect, you get a critical success instead."]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 987,
    "name": "Wisp Fetchling",
    "ancestryID": 274,
    "rarity": "COMMON",
    "description": "Your ancestors’ exposure to the Shadow Plane wrought great physical changes. Your hair or skin sometimes appears insubstantial, and you’re slighter and more agile than other fetchlings. You’re Small instead of Medium. You gain the trained proficiency rank in Acrobatics, the (feat: Quick Squeeze) skill feat, and a +1 circumstance bonus to Acrobatics checks to (action: Tumble Through). If you would automatically become trained in Acrobatics (from your background or class, for example), you instead become trained in a skill of your choice.",
    "code": [
        "GIVE-PROF-IN=Acrobatics:T",
        "GIVE-FEAT-NAME=Quick Squeeze",
        "CONDITIONAL-INCREASE-SKILL_Acrobatics=1~circumstance bonus to Tumble Through",
        "SET-SIZE=SMALL"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T21:53:17",
    "updatedAt": "2021-02-22T21:53:17",
    "wsci": [
        ["giveProfIn","acrobatics","T"],
        ["giveFeatName",["quick squeeze"]],
        ["adjust","SKILL","acrobatics",1,null,"circumstance bonus to Tumble Through"],
        ["setSize","small"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 988,
    "name": "Liminal Fetchling",
    "ancestryID": 274,
    "rarity": "COMMON",
    "description": "You come from a line of fetchlings with a closer connection to the Ethereal and Shadow Planes, and you share those realms’ affinity with the in-between and unseen. You gain a +1 circumstance bonus to locate undetected creatures within 60 feet when using the (action: Seek) action. Your flat check to target concealed creatures is DC 3 instead of DC 5, and your flat check to target undetected creatures is DC 9 instead of DC 11.",
    "code": [
        "CONDITIONAL-INCREASE-PERCEPTION=1~circumstance bonus when Seeking undetected creatures within 60 feet"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T21:53:17",
    "updatedAt": "2021-02-22T21:53:17",
    "wsci": [
        ["adjust","PERCEPTION",null,1,null,"circumstance bonus when Seeking undetected creatures within 60 feet"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 989,
    "name": "Created Fleshwarp",
    "ancestryID": 275,
    "rarity": "COMMON",
    "description": "You were created through occult or alchemical processes, such as being grown in a vat or stitched together from the body parts of other creatures by a scientist in Ustalav. Your manufactured body is durable; you don’t need to eat and can’t starve. You gain a +2 circumstance bonus to saving throws against diseases.",
    "code": [
        "CONDITIONAL-INCREASE-SAVE_FORT=2~circumstance bonus against diseases",
        "CONDITIONAL-INCREASE-SAVE_REFLEX=2~circumstance bonus against diseases",
        "CONDITIONAL-INCREASE-SAVE_WILL=2~circumstance bonus against diseases"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T22:09:04",
    "updatedAt": "2021-02-22T22:09:04",
    "wsci": [
        ["adjust","SAVE","fort",2,null,"circumstance bonus against diseases"],
        ["adjust","SAVE","reflex",2,null,"circumstance bonus against diseases"],
        ["adjust","SAVE","will",2,null,"circumstance bonus against diseases"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 990,
    "name": "Shapewrought Fleshwarp",
    "ancestryID": 275,
    "rarity": "COMMON",
    "description": "A victim of fleshwarping, you likely bear loose flesh, bony spurs, or features of inhuman creatures sprouting from your skin. You have nevertheless turned the psychic toll of your transformation into a strength. You gain resistance to mental damage equal to half your level (minimum 1).",
    "code": [
        "GIVE-RESISTANCE=Mental:Half_Level"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T22:09:04",
    "updatedAt": "2021-02-22T22:09:04",
    "wsci": [
        ["giveResistance","mental",["half",null]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 991,
    "name": "Mutated Fleshwarp",
    "ancestryID": 275,
    "rarity": "COMMON",
    "description": "Transformed by uncontrolled magic, you originated in a the Mana Wastes or another region similarly devastated by uncontrolled magic. Due to your toughened or redundant organs, the DC for your checks to recover from persistent bleed damage is 10 instead of 15, and it’s reduced to 5 instead of 10 if you have particularly effective assistance recovering from the persistent damage.",
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T22:09:04",
    "updatedAt": "2021-02-22T22:09:04"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 992,
    "name": "Technological Fleshwarp",
    "ancestryID": 275,
    "rarity": "COMMON",
    "description": "Your transformation is due to manipulation by advanced technology, like that found in Numeria. Your emotions are dulled and hard to influence. When you roll a success on a saving throw against an (trait: emotion) effect, you get a critical success instead.",
    "code": [
        "CONDITIONAL-SAVE_FORT=When you roll a success against an emotion effect, you get a critical success instead.",
        "CONDITIONAL-SAVE_WILL=When you roll a success against an emotion effect, you get a critical success instead.",
        "CONDITIONAL-SAVE_REFLEX=When you roll a success against an emotion effect, you get a critical success instead."
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T22:09:04",
    "updatedAt": "2021-02-22T22:09:04",
    "wsci": [
        ["adjustConditional","SAVE","fort","When you roll a success against an emotion effect, you get a critical success instead."],
        ["adjustConditional","SAVE","will","When you roll a success against an emotion effect, you get a critical success instead."],
        ["adjustConditional","SAVE","reflex","When you roll a success against an emotion effect, you get a critical success instead."]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 993,
    "name": "Celestial Envoy Kitsune",
    "ancestryID": 276,
    "rarity": "COMMON",
    "description": "Whether due to Daikitsu's grace or faithful forebears, you have a strong connection to the divine, affording you certain protections. You gain the (feat: Invoke Celestial Privilege) reaction. Your alternate form is a common Medium humanoid ancestry prevalent where you grew up (typically human), called a tailless form.",
    "code": [
        "GIVE-FEAT-NAME=Invoke Celestial Privilege"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T22:29:25",
    "updatedAt": "2021-02-22T22:29:25",
    "wsci": [
        ["giveFeatName",["invoke celestial privilege"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 994,
    "name": "Dark Fields Kitsune",
    "ancestryID": 276,
    "rarity": "COMMON",
    "description": "You can exert your unsettling presence to subtly (action: Demoralize) others. When you do, (action: Demoralize) loses the (trait: auditory) trait and gains the (trait: visual) trait, and you don't take a penalty when you attempt to (action: Demoralize) a creature that doesn't understand your language. You also gain the (feat: Invigorating Fear) reaction. Your alternate form is a fox, which has the statistics of 1st-level (spell: pest form).",
    "code": [
        "GIVE-FEAT-NAME=Invigorating Fear"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T22:29:25",
    "updatedAt": "2021-02-22T22:29:25",
    "wsci": [
        ["giveFeatName",["invigorating fear"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 995,
    "name": "Earthly Wilds Kitsune",
    "ancestryID": 276,
    "rarity": "COMMON",
    "description": "You are a creature of the material world, with an affinity closer to the wilds than urban society. You gain a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group and have the (trait: finesse) and (trait: unarmed) traits. Your alternate form is a fox, which has the statistics of 1st-level (spell: pest form).",
    "code": [
        "GIVE-PHYSICAL-FEATURE-NAME=Jaws"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T22:29:25",
    "updatedAt": "2021-02-22T22:29:25",
    "wsci": [
        ["givePhysicalFeatureName","jaws"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 996,
    "name": "Frozen Wind Kitsune",
    "ancestryID": 276,
    "rarity": "COMMON",
    "description": "Your ancestors crossed the Crown of the World or resided on snowy peaks. You gain cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on). Your alternate form is a common Medium humanoid ancestry prevalent where you grew up (typically human), called a tailless form.",
    "code": [
        "GIVE-RESISTANCE=Cold:Half_Level"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T22:29:25",
    "updatedAt": "2021-02-22T22:29:25",
    "wsci": [
        ["giveResistance","cold",["half",null]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 997,
    "name": "Empty Sky Kitsune",
    "ancestryID": 276,
    "rarity": "COMMON",
    "description": "Your spirit is open to the secrets of beyond, granting you greater access to kitsune magic. You gain the (feat: Kitsune Spell Familiarity) ancestry feat. Your alternate form is a common Medium humanoid ancestry prevalent where you grew up (typically human), called a tailless form.",
    "code": [
        "GIVE-FEAT-NAME=Kitsune Spell Familiarity"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T22:29:25",
    "updatedAt": "2021-02-22T22:29:25",
    "wsci": [
        ["giveFeatName",["kitsune spell familiarity"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 998,
    "name": "Draxie Sprite",
    "ancestryID": 277,
    "rarity": "COMMON",
    "description": "You are kin to faerie dragons, tracing your heritage back to the death of the mightiest faerie dragon in the First World. You gain touch telepathy, allowing you to communicate silently and purely mentally with any creature you’re touching, as long as you share a language.",
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T23:07:32",
    "updatedAt": "2021-02-22T23:07:32"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 999,
    "name": "Grig Sprite",
    "ancestryID": 277,
    "rarity": "COMMON",
    "description": "You have the hindquarters of a cricket and adore art and music. Your cricket legs grant you a +2 circumstance bonus on Athletics checks to (action: High Jump) or (action: Long Jump), and you gain (spell: ghost sound) as a primal innate cantrip.",
    "code": [
        "CONDITIONAL-INCREASE-SKILL_Athletics=2~circumstance bonus to High Jump and Long Jump",
        "GIVE-INNATE-SPELL-NAME=Ghost Sound:0:Primal:0"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T23:07:32",
    "updatedAt": "2021-02-22T23:07:32",
    "wsci": [
        ["adjust","SKILL","athletics",2,null,"circumstance bonus to High Jump and Long Jump"],
        ["giveInnateSpellName","ghost sound",0,"primal",0]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1000,
    "name": "Luminous Sprite",
    "ancestryID": 277,
    "rarity": "COMMON",
    "description": "You glow with magical luminance. You naturally shed light as a (item: torch); this light has the (trait: evocation), (trait: light), and (trait: primal) traits. You can extinguish, rekindle, or change the color of this light using a single action, which has the (trait: concentrate) trait.",
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T23:07:32",
    "updatedAt": "2021-02-22T23:07:32"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1001,
    "name": "Melixie Sprite",
    "ancestryID": 277,
    "rarity": "COMMON",
    "description": "You have the features of a bee, butterfly, or other insect that loves sweets. You can ask questions of and receive answers from arthropods (insects, spiders, scorpions, crabs, and similar invertebrate animals), as well as use Diplomacy to (action: Make an Impression) on and (action: Request) things of them. Most bees, butterflies, moths, and beetles have an indifferent or friendly starting attitude toward you and give you time to make your case, though other arthropods react to you like any other adventurer.",
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T23:07:32",
    "updatedAt": "2021-02-22T23:07:32"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1002,
    "name": "Nyktera Sprite",
    "ancestryID": 277,
    "rarity": "COMMON",
    "description": "You have batlike features, an affinity for batkind, and hearing that is second to none. As long as you can hear normally, you can use the (action: Seek) action to sense undetected creatures in a 60-foot cone instead of a 30-foot cone. You also gain a +2 circumstance bonus to locate undetected creatures that you could hear within 30 feet with a (action: Seek) action.",
    "code": [
        "CONDITIONAL-INCREASE-PERCEPTION=2~circumstance bonus when you Seek to locate undetected creatures that you could hear within 30 feet"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T23:07:32",
    "updatedAt": "2021-02-22T23:07:32",
    "wsci": [
        ["adjust","PERCEPTION",null,2,null,"circumstance bonus when you Seek to locate undetected creatures that you could hear within 30 feet"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1003,
    "name": "Pixie Sprite",
    "ancestryID": 277,
    "rarity": "COMMON",
    "description": "You are larger than other sprites. Instead of Tiny, your size is Small.",
    "code": [
        "SET-SIZE=SMALL"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T23:07:32",
    "updatedAt": "2021-02-22T23:07:32",
    "wsci": [
        ["setSize","small"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1004,
    "name": "Nightglider Strix",
    "ancestryID": 278,
    "rarity": "COMMON",
    "description": "You are a dedicated nocturnal avian, keeping watch and predating in the most lightless environments. You gain darkvision.",
    "code": [
        "GIVE-SENSE-NAME=Darkvision"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T23:22:08",
    "updatedAt": "2021-02-22T23:22:08",
    "wsci": [
        ["giveSenseName","darkvision",null]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1005,
    "name": "Songbird Strix",
    "ancestryID": 278,
    "rarity": "COMMON",
    "description": "You descend from a talented line of strix storytellers. From the highest mountains and purest landscapes where your lungs fill with glorious clean air, you trill, whistle, and croon sweet songs. While natural sounds make you predisposed to sing, voices make you predisposed to mimicry. You receive a +1 circumstance bonus on Deception checks to (action: Impersonate) a mimicked voice, where the sound of the voice is the only factor; if you are a master in Deception, you gain a +2 circumstance bonus instead. You also gain a +1 circumstance bonus on Performance checks to sing; if you are a master in Performance, you gain a +2 circumstance bonus instead.",
    "code": [
        "CONDITIONAL-INCREASE-SKILL_Deception=1~circumstance bonus to Impersonate a mimicked voice, where the sound of the voice is the only factor",
        "IF (HAS-PROF>=Deception:M) {CONDITIONAL-INCREASE-SKILL_Deception=2~circumstance bonus to Impersonate a mimicked voice, where the sound of the voice is the only factor}",
        "CONDITIONAL-INCREASE-SKILL_Performance=1~circumstance bonus to sing",
        "IF (HAS-PROF>=Performance:M) {CONDITIONAL-INCREASE-SKILL_Performance=2~circumstance bonus to sing}"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T23:22:08",
    "updatedAt": "2021-02-22T23:22:08",
    "wsci": [
        ["adjust","SKILL","deception",1,null,"circumstance bonus to Impersonate a mimicked voice, where the sound of the voice is the only factor"],
        {"conditionals":[["hasProf",">=","deception","M"]],"consequent":["adjust","SKILL","deception",2,null,"circumstance bonus to Impersonate a mimicked voice, where the sound of the voice is the only factor"]},
        ["adjust","SKILL","performance",1,null,"circumstance bonus to sing"],
        {"conditionals":[["hasProf",">=","performance","M"]],"consequent":["adjust","SKILL","performance",2,null,"circumstance bonus to sing"]}
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1006,
    "name": "Predator Strix",
    "ancestryID": 278,
    "rarity": "COMMON",
    "description": "You come from a line of strix with exceptionally broad wings and lengthy talons. You gain a talon melee unarmed attack that deals 1d4 slashing damage. Your talon attack is in the brawling group and has the (trait: agile), (trait: finesse), and (trait: unarmed) traits.",
    "code": [
        "GIVE-PHYSICAL-FEATURE-NAME=Talons"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T23:22:08",
    "updatedAt": "2021-02-22T23:22:08",
    "wsci": [
        ["givePhysicalFeatureName","talons"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1007,
    "name": "Shoreline Strix",
    "ancestryID": 278,
    "rarity": "COMMON",
    "description": "You’re the descendant of strix who traveled to the coasts. Your feathers are especially water-repellent and sleekly angled for diving, allowing you to catch fish and other prey in the shallows. You are trained in Athletics, and you gain the (feat: Underwater Marauder) skill feat as a bonus skill feat.",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-FEAT-NAME=Underwater Marauder"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T23:22:08",
    "updatedAt": "2021-02-22T23:22:08",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveFeatName",["underwater marauder"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1008,
    "name": "Scavenger Strix",
    "ancestryID": 278,
    "rarity": "COMMON",
    "description": "Your ancestors originated from a land where food was scarce and threats were many. You are trained in Survival. You gain the (feat: Forager) skill feat as a bonus feat. Your thoroughness when gathering food provides you a +1 circumstance bonus to Survival checks to (action: Subsist | Subsist - Survival).",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-FEAT-NAME=Forager",
        "CONDITIONAL-INCREASE-SKILL_Survival=1~circumstance bonus to Subsist"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-22T23:22:08",
    "updatedAt": "2021-02-22T23:22:08",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveFeatName",["forager"]],
        ["adjust","SKILL","survival",1,null,"circumstance bonus to Subsist"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1013,
    "name": "Wavediver Tengu",
    "rarity": "COMMON",
    "description": "You’re one of the rare tengu who can cut through water like a bird through air, and you often lurk in rivers or oceans where few expect you. You gain a swim Speed of 15 feet.",
    "code": [
        "GIVE-SPEED=Swim:15"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "indivAncestryName": "Tengu",
    "createdAt": "2021-02-23T04:13:35",
    "updatedAt": "2021-02-23T04:13:35",
    "wsci": [
        ["giveSpeed","swim",15]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1014,
    "name": "Dogtooth Tengu",
    "rarity": "COMMON",
    "description": "In addition to a beak, your mouth also features a number of vicious, pointed teeth. Some legends claim your powerful jaws can even bite through steel. While you aren’t that strong yet, your fangs can still leave terrible wounds. Your beak unarmed attack gains the (trait: deadly d8) trait.",
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "indivAncestryName": "Tengu",
    "createdAt": "2021-02-23T04:13:47",
    "updatedAt": "2021-02-23T04:13:47"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1015,
    "name": "Snow Ratfolk",
    "rarity": "COMMON",
    "description": "You have a thicker coat and bulkier frame to defend against the cold, granting you cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).",
    "code": [
        "GIVE-RESISTANCE=Cold:Half_Level"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "indivAncestryName": "Ratfolk",
    "createdAt": "2021-02-23T04:13:58",
    "updatedAt": "2021-02-23T04:13:58",
    "wsci": [
        ["giveResistance","cold",["half",null]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1016,
    "name": "Tunnel Ratfolk",
    "rarity": "COMMON",
    "description": "Your incredibly small bones allow you to easily compress your body and squeeze through gaps. You gain the (feat: Quick Squeeze) feat as a bonus feat, even if you aren’t trained in Acrobatics. Tight spaces not tight enough to require the (action: Squeeze) action aren’t difficult terrain for you.",
    "code": [
        "GIVE-FEAT-NAME=Quick Squeeze"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "indivAncestryName": "Ratfolk",
    "createdAt": "2021-02-23T04:14:08",
    "updatedAt": "2021-02-23T04:14:08",
    "wsci": [
        ["giveFeatName",["quick squeeze"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1017,
    "name": "Battle-Ready Orc",
    "rarity": "COMMON",
    "description": "You descend from a line of terrifying battlefield commanders. You become trained in Intimidation, and you gain the (feat: Intimidating Glare) skill feat.",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-FEAT-NAME=Intimidating Glare"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "indivAncestryName": "Orc",
    "createdAt": "2021-02-23T04:41:12",
    "updatedAt": "2021-02-23T04:41:12",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveFeatName",["intimidating glare"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1018,
    "name": "Grave Orc",
    "rarity": "COMMON",
    "description": "You were exposed to powerful necromantic energies that should have killed you—but you survived. Your skin is cold, clammy, and gray. You gain resistance to negative damage equal to half your level (minimum 1). You also gain a +1 circumstance bonus to saving throws against (trait: necromancy) effects.",
    "code": [
        "GIVE-RESISTANCE=Negative:Half_Level",
        "CONDITIONAL-INCREASE-SAVE_FORT=1~circumstance bonus against necromancy effects",
        "CONDITIONAL-INCREASE-SAVE_REFLEX=1~circumstance bonus against necromancy effects",
        "CONDITIONAL-INCREASE-SAVE_WILL=1~circumstance bonus against necromancy effects"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "indivAncestryName": "Orc",
    "createdAt": "2021-02-23T04:43:25",
    "updatedAt": "2021-02-23T04:43:25",
    "wsci": [
        ["giveResistance","negative",["half",null]],
        ["adjust","SAVE","fort",1,null,"circumstance bonus against necromancy effects"],
        ["adjust","SAVE","reflex",1,null,"circumstance bonus against necromancy effects"],
        ["adjust","SAVE","will",1,null,"circumstance bonus against necromancy effects"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1019,
    "name": "Winter Orc",
    "rarity": "COMMON",
    "description": "Your ancestors survived in cold climates. You become trained in Survival, and you treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).",
    "code": [
        "GIVE-PROF-IN=Survival:T"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "indivAncestryName": "Orc",
    "createdAt": "2021-02-23T04:44:21",
    "updatedAt": "2021-02-23T04:44:21",
    "wsci": [
        ["giveProfIn","survival","T"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1020,
    "name": "Cloudleaper Lizardfolk",
    "rarity": "COMMON",
    "description": "Your body is light with flaps of skin along your limbs that catch the air that passes beneath you. As long as you can act and have enough room, you can open the flaps to slow any fall just enough to avoid taking damage (whether you have the room to do so depends on the GM’s discretion).",
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "indivAncestryName": "Lizardfolk",
    "createdAt": "2021-02-23T04:55:31",
    "updatedAt": "2021-02-23T04:55:31"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1021,
    "name": "Woodstalker Lizardfolk",
    "rarity": "COMMON",
    "description": "You move easily through thick forest and jungle, using every branch or bush. You can always use the (action: Take Cover) action when in forest or jungle terrain to gain cover, even if you’re not next to an obstacle you would normally be able to (action: Take Cover) behind. You gain the (feat: Terrain Stalker) feat, even if you’re not trained in Stealth, and you must choose underbrush as your chosen terrain.",
    "code": [
        "GIVE-FEAT-NAME=Terrain Stalker"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "indivAncestryName": "Lizardfolk",
    "createdAt": "2021-02-23T04:57:03",
    "updatedAt": "2021-02-23T04:57:03",
    "wsci": [
        ["giveFeatName",["terrain stalker"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1022,
    "name": "Cactus Leshy",
    "rarity": "COMMON",
    "description": "Spines cover your body. You gain a spine unarmed attack that deals 1d6 piercing damage. Your spines are in the brawling group and have the finesse and unarmed traits.",
    "code": [
        "GIVE-PHYSICAL-FEATURE-NAME=Spines"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "indivAncestryName": "Leshy",
    "createdAt": "2021-02-23T05:42:21",
    "updatedAt": "2021-02-23T05:42:21",
    "wsci": [
        ["givePhysicalFeatureName","spines"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1023,
    "name": "Fruit Leshy",
    "rarity": "COMMON",
    "description": "Your body continually produces small fruits imbued with primal magic. At dawn each day, a new fruit ripens. You or an ally can remove this fruit as an (action: Interact) action. If a living creature that can derive sustenance from fruit consumes it as an (action: Interact) action within the next hour, they regain 1d8 Hit Points, plus an additional 1d8 Hit Points for every 2 of your levels beyond 1st. This effect has the (trait: healing), (trait: necromancy), (trait: positive), and (trait: primal) traits.",
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "indivAncestryName": "Leshy",
    "createdAt": "2021-02-23T05:43:48",
    "updatedAt": "2021-02-23T05:43:48"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1024,
    "name": "Lotus Leshy",
    "rarity": "COMMON",
    "description": "You effortlessly float on the surface of water. You can walk on the surface of still water and other non-damaging liquids, moving at half your normal Speed. You can attempt to walk along the surface of flowing water as well, still moving at half Speed, but doing so requires a successful Acrobatics check to (action: Balance) using the DC of a Swim check to move through the water; on a failure, you fall into the water. This Acrobatics check doesn’t use an action.",
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "indivAncestryName": "Leshy",
    "createdAt": "2021-02-23T05:48:20",
    "updatedAt": "2021-02-23T05:48:20"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1025,
    "name": "Root Leshy",
    "rarity": "COMMON",
    "description": "Your body is made from hardy roots that attach you firmly to the ground. You gain 10 Hit Points from your ancestry instead of 8. You can go without sunlight for 2 weeks before you begin to starve. You gain a +2 circumstance bonus to your Fortitude or Reflex DC against attempts to (action: Shove) or (action: Trip) you. This bonus also applies to saving throws against spells or effects that attempt to move you or knock you prone.",
    "code": [
        "INCREASE-MAX_HEALTH=2-HERITAGE",
        "CONDITIONAL-INCREASE-SAVE_FORT=2~circumstance bonus to DC against attempts to Shove you and against spells or effects that attempt to move you or knock you prone",
        "CONDITIONAL-INCREASE-SAVE_REFLEX=2~circumstance bonus to DC against attempts to Trip you and against spells or effects that attempt to move you or knock you prone",
        "CONDITIONAL-INCREASE-SAVE_WILL=2~circumstance bonus against spells or effects that attempt to move you or knock you prone"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "indivAncestryName": "Leshy",
    "createdAt": "2021-02-23T05:56:52",
    "updatedAt": "2021-02-23T05:56:52",
    "wsci": [
        ["adjust","MAX_HEALTH",null,2,"heritage",null],
        ["adjust","SAVE","fort",2,null,"circumstance bonus to DC against attempts to Shove you and against spells or effects that attempt to move you or knock you prone"],
        ["adjust","SAVE","reflex",2,null,"circumstance bonus to DC against attempts to Trip you and against spells or effects that attempt to move you or knock you prone"],
        ["adjust","SAVE","will",2,null,"circumstance bonus against spells or effects that attempt to move you or knock you prone"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1026,
    "name": "Seaweed Leshy",
    "rarity": "COMMON",
    "description": "Your body is made from woven seaweed, and you’re just as comfortable underwater as on land. You gain a swim Speed of 20 feet, and you can always breathe underwater. However, your land Speed is reduced by 5 feet (to 20 feet for most seaweed leshys).",
    "code": [
        "GIVE-SPEED=Swim:20",
        "DECREASE-SPEED=5"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "indivAncestryName": "Leshy",
    "createdAt": "2021-02-23T06:01:39",
    "updatedAt": "2021-02-23T06:01:39",
    "wsci": [
        ["giveSpeed","swim",20],
        ["adjust","SPEED",null,-5,null,null]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1027,
    "name": "Caveclimber Kobold",
    "rarity": "COMMON",
    "description": "You live in a vertically-oriented home, and you’re a consummate climber. You gain the (feat: Combat Climber) skill feat, even if you don’t meet the prerequisites. You can use your clawed feet and tail to (action: Climb), leaving your hands free. Additionally, if you succeed at an Athletics check to (action: Climb), you critically succeed instead.",
    "code": [
        "GIVE-FEAT-NAME=Combat Climber",
        "CONDITIONAL-SKILL_Athletics=When you roll a success to Climb, you get a critical success instead."
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "indivAncestryName": "Kobold",
    "createdAt": "2021-02-23T06:05:23",
    "updatedAt": "2021-02-23T06:05:23",
    "wsci": [
        ["giveFeatName",["combat climber"]],
        ["adjustConditional","SKILL","athletics","When you roll a success to Climb, you get a critical success instead."]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1028,
    "name": "Tunnelfooted Kobold",
    "rarity": "COMMON",
    "description": "You grew up in a warren crisscrossed by underwater passages, whether natural or excavated. You gain a swim Speed of 15 feet.",
    "code": [
        "GIVE-SPEED=Swim:15"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "indivAncestryName": "Kobold",
    "createdAt": "2021-02-23T06:08:40",
    "updatedAt": "2021-02-23T06:08:40",
    "wsci": [
        ["giveSpeed","swim",15]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1030,
    "name": "Steelskin Hobgoblin",
    "rarity": "COMMON",
    "description": "When you are cut or burned, your body responds by forming tough but flexible callouses over the site of the injury. Over time, this makes the most vulnerable sections of your body harder and more resistant to damage. Many steelskin hobgoblins intentionally use blades and flame to scar themselves in intricate patterns, though this isn’t universal. Your flat check to recover from persistent physical (including bleed), energy, or poison damage is DC 13 (rather than DC 15), or DC 8 when provided particularly effective assistance.",
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "indivAncestryName": "Hobgoblin",
    "createdAt": "2021-02-23T07:03:02",
    "updatedAt": "2021-02-23T07:03:02"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1032,
    "name": "Liminal Catfolk",
    "rarity": "COMMON",
    "description": "You’ve inherited a closeness to the far corners of the world, where the boundaries between dimensions grow thin. You can cast (spell: detect magic) as an occult innate cantrip heightened to half your level, rounded up. You also gain a +1 circumstance bonus to Occultism checks to (action: Recall Knowledge) about creatures that originated outside of the Material Plane.",
    "code": [
        "GIVE-INNATE-SPELL-NAME=Detect Magic:0:ARCANE:0",
        "CONDITIONAL-INCREASE-SKILL_OCCULTISM=1~circumstance bonus to Recall Knowledge about creatures that originated outside of the Material Plane"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "indivAncestryName": "Catfolk",
    "createdAt": "2021-02-23T09:52:38",
    "updatedAt": "2021-02-23T09:52:38",
    "wsci": [
        ["giveInnateSpellName","detect magic",0,"arcane",0],
        ["adjust","SKILL","occultism",1,null,"circumstance bonus to Recall Knowledge about creatures that originated outside of the Material Plane"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1033,
    "name": "Flexible Catfolk",
    "rarity": "COMMON",
    "description": "You’ve inherited flexibility beyond that of most humanoids. You don’t treat tight spaces that don’t require you to (action: Squeeze) as difficult terrain. In addition, you get a +1 circumstance bonus to checks when you attempt to (action: Escape).",
    "code": [
        "CONDITIONAL-INCREASE-SKILL_ATHLETICS=1~circumstance bonus to Escape",
        "CONDITIONAL-INCREASE-SKILL_ACROBATICS=1~circumstance bonus to Escape"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "indivAncestryName": "Catfolk",
    "createdAt": "2021-02-23T09:53:03",
    "updatedAt": "2021-02-23T09:53:03",
    "wsci": [
        ["adjust","SKILL","athletics",1,null,"circumstance bonus to Escape"],
        ["adjust","SKILL","acrobatics",1,null,"circumstance bonus to Escape"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1034,
    "name": "Sharp-Eared Catfolk",
    "rarity": "COMMON",
    "description": "You were born with big, expressive ears that move with your moods and perk up at any unexpected sound. You gain a +2 circumstance bonus to locate undetected creatures that you could hear within 30 feet with a (action: Seek) action. As long as you’re aware of a creature via sound, once per round, your ears can help you (action: Point Out) the creature to all allies as a free action.",
    "code": [
        "CONDITIONAL-INCREASE-PERCEPTION=2~circumstance bonus to locate undetected creatures that you could hear within 30 feet with a Seek action"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "indivAncestryName": "Catfolk",
    "createdAt": "2021-02-23T09:59:43",
    "updatedAt": "2021-02-23T09:59:43",
    "wsci": [
        ["adjust","PERCEPTION",null,2,null,"circumstance bonus to locate undetected creatures that you could hear within 30 feet with a Seek action"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1035,
    "name": "Shortshanks Hobgoblin",
    "rarity": "COMMON",
    "description": "You have a longer torso and broader shoulders than most hobgoblins, making your legs seem short by comparison. This gives you a strong, muscular core and lowers your center of gravity—features that assist you in riding and climbing—and you’ve trained at riding in a saddle from an extremely early age. You gain the (feat: Ride) feat. Additionally, you are not flat-footed while you (action: Climb).",
    "code": [
        "GIVE-FEAT-NAME=Ride"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "indivAncestryName": "Hobgoblin",
    "createdAt": "2021-02-23T21:32:02",
    "updatedAt": "2021-02-23T21:32:02",
    "wsci": [
        ["giveFeatName",["ride"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1045,
    "name": "Inured Azarketi",
    "ancestryID": 280,
    "rarity": "COMMON",
    "description": "Your ancestors had to survive in polluted water that made every breath noxious. You gain poison resistance equal to half your level (minimum 1). Furthermore, you can survive outside of water for 72 hours before you begin to suffocate.",
    "code": [
        "GIVE-RESISTANCE=Poison:Half_Level"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-24T19:23:05",
    "updatedAt": "2021-02-24T19:23:05",
    "wsci": [
        ["giveResistance","poison",["half",null]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1046,
    "name": "Mistbreath Azarketi",
    "ancestryID": 280,
    "rarity": "COMMON",
    "description": "You descend from azarketis who migrated to land environments that could support their need for water. Over time, your people adapted to life on land culturally and physically, even resulting in azarketis born with human hair like their Azlanti ancestors. You no longer need to be immersed in water every 24 hours to maintain your skin and can instead mist or wipe your skin with water to live comfortably. Your land Speed is 25 feet, but your swim Speed is only 15 feet.",
    "code": [
        "INCREASE-SPEED=5",
        "DECREASE-SPEED_SWIM=15"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-24T19:23:05",
    "updatedAt": "2021-02-24T19:23:05",
    "wsci": [
        ["adjust","SPEED",null,5,null,null],
        ["adjust","SPEED","swim",-15,null,null]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1047,
    "name": "Murkeyed Azarketi",
    "ancestryID": 280,
    "rarity": "COMMON",
    "description": "You live in murky waters and have grown accustomed to life in a low-visibility environment. You need only a successful DC 3 flat check when targeting a concealed creature and a successful DC 9 flat check when targeting a hidden creature.",
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-24T19:23:05",
    "updatedAt": "2021-02-24T19:23:05"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1048,
    "name": "Ancient Scale Azarketi",
    "ancestryID": 280,
    "rarity": "COMMON",
    "description": "Your lineage stems from azarketis who remain dedicated to their deep-sea roots. Divorced from land society, you’re a foreigner to any world above a thousand fathoms deep. You gain darkvision. Your body is dotted with phosphorescent spots that emit a guiding light and help you communicate. The spots—located primarily on your face, arms, and hands—illuminate a 10-foot radius around you with dim light. You can activate, deactivate, or change the arrangement of lights as an action, which has the (trait: concentrate) trait.",
    "code": [
        "GIVE-SENSE-NAME=Darkvision"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-24T19:23:05",
    "updatedAt": "2021-02-24T19:23:05",
    "wsci": [
        ["giveSenseName","darkvision",null]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1049,
    "name": "Benthic Azarketi",
    "ancestryID": 280,
    "rarity": "COMMON",
    "description": "Your heritage traces to azarketis living deep beneath the sea, and you can handle the chilling depths more easily than most. You gain resistance to cold equal to half your level, and you don’t treat environmental cold as one degree more severe when you are wet. You adapt to pressure changes from being deep underwater automatically without ill effect.",
    "code": [
        "GIVE-RESISTANCE=Cold:Half_Level"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-24T19:23:05",
    "updatedAt": "2021-02-24T19:23:05",
    "wsci": [
        ["giveResistance","cold",["half",null]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1050,
    "name": "River Azarketi",
    "ancestryID": 280,
    "rarity": "COMMON",
    "description": "You come from azarketis who abandoned the oceans for the fresh water of inland life. The varied geography of rivers required you to develop advanced physical skills to swim against rapids, leap through cascading waters, and deftly navigate shallow and narrow channels. When you succeed at an Athletics check to (action: Swim), you get a critical success instead.",
    "code": [
        "CONDITIONAL-SKILL_Athletics=When you roll a success to Swim, you get a critical success instead."
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-24T19:23:05",
    "updatedAt": "2021-02-24T19:23:05",
    "wsci": [
        ["adjustConditional","SKILL","athletics","When you roll a success to Swim, you get a critical success instead."]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1051,
    "name": "Spined Azarketi",
    "ancestryID": 280,
    "rarity": "COMMON",
    "description": "Your fins conceal launchable toxic spines. You have a spine ranged unarmed attack with the (trait: unarmed) trait that deals 1d4 poison damage, has a range increment of 10 feet, and is in the dart weapon group.",
    "code": [
        "GIVE-PHYSICAL-FEATURE-NAME=Toxic Spines"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-24T19:23:05",
    "updatedAt": "2021-02-24T19:23:05",
    "wsci": [
        ["givePhysicalFeatureName","toxic spines"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1052,
    "name": "Tactile Azarketi",
    "ancestryID": 280,
    "rarity": "COMMON",
    "description": "Your skin can detect the slightest changes in ocean currents. You gain imprecise wavesense (Bestiary 344) with a range of 30 feet, allowing you to sense motion in the water around you. You also gain a +1 circumstance bonus to Survival checks to (action: Sense Direction) in aquatic environments.",
    "code": [
        "GIVE-SENSE-NAME=Wavesense (imprecise 30 ft)",
        "CONDITIONAL-INCREASE-SKILL_Survival=1~circumstance bonus to Sense Direction in aquatic environments"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-24T19:23:05",
    "updatedAt": "2021-02-24T19:23:05",
    "wsci": [
        ["giveSenseName","wavesense",30],
        ["adjust","SKILL","survival",1,null,"circumstance bonus to Sense Direction in aquatic environments"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1053,
    "name": "Thalassic Azarketi",
    "ancestryID": 280,
    "rarity": "COMMON",
    "description": "You trace your lineage from azarketis who lived their lives among the great oceans and seas of the world. You know how to use the currents and the primal magic of water to guide your attacks. You gain the (feat: Underwater Marauder) skill feat, and your piercing ranged attacks don’t have their range increments halved when fighting underwater targets.",
    "code": [
        "GIVE-FEAT-NAME=Underwater Marauder"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "createdAt": "2021-02-24T19:23:05",
    "updatedAt": "2021-02-24T19:23:05",
    "wsci": [
        ["giveFeatName",["underwater marauder"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1169,
    "name": "Oathkeeper Dwarf",
    "rarity": "COMMON",
    "description": "Growing up, you never tried to lie to get what you wanted, and even when necessary, lying makes you uncomfortable. The especially faithful might even have thought that you were blessed by the dwarven god of duty, Kols. You gain a +1 circumstance bonus to Perception checks to (action: Sense Motive) and to Perception DCs against attempts to (action: Lie) to you. Furthermore, you gain a +2 circumstance bonus to Diplomacy checks to convince others you speak the truth when you are telling the truth, and you take a –4 circumstance penalty to (action: Lie) and to your Deception DC against (action: Sense Motive).",
    "code": [
        "CONDITIONAL-INCREASE-PERCEPTION=1~circumstance bonus to Sense Motive and to DC against attempts to Lie to you",
        "CONDITIONAL-INCREASE-SKILL_Diplomacy=2~circumstance bonus to convince others you speak the truth when you are telling the truth",
        "CONDITIONAL-DECREASE-SKILL_Deception=4~circumstance penalty to Lie and to DC against Sense Motive"
    ],
    "isArchived": true,
    "contentSrc": "LOST-CHAR-GUIDE",
    "indivAncestryName": "Dwarf",
    "createdAt": "2021-04-23T20:55:24",
    "updatedAt": "2021-04-23T20:55:24",
    "wsci": [
        ["adjust","PERCEPTION",null,1,null,"circumstance bonus to Sense Motive and to DC against attempts to Lie to you"],
        ["adjust","SKILL","diplomacy",2,null,"circumstance bonus to convince others you speak the truth when you are telling the truth"],
        ["adjust","SKILL","deception",-4,null,"circumstance penalty to Lie and to DC against Sense Motive"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1644,
    "name": "Rite of Invocation Conrasu",
    "ancestryID": 421,
    "rarity": "COMMON",
    "description": "You augmented your exoskeleton with magic. You gain one cantrip from the arcane or occult spell list. You can cast this spell as an innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up.",
    "code": [
        "GIVE-FEAT-FROM=Choose a Tradition:Rite of Invocation - Arcane,Rite of Invocation - Occult"
    ],
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T02:15:50",
    "updatedAt": "2021-07-02T02:15:50",
    "wsci": [
        ["giveFeatFrom","Choose a Tradition",["Rite of Invocation - Arcane","Rite of Invocation - Occult"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1645,
    "name": "Rite of Knowing Conrasu",
    "ancestryID": 421,
    "rarity": "COMMON",
    "description": "You enhanced your exoskeleton with a connection to Axis, allowing you to tap into the infinite knowledge of the plane. You gain the (feat: Call to Axis) action.",
    "code": [
        "GIVE-FEAT-NAME=Call to Axis"
    ],
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T02:15:50",
    "updatedAt": "2021-07-02T02:15:50",
    "wsci": [
        ["giveFeatName",["call to axis"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1646,
    "name": "Rite of Passage Conrasu",
    "ancestryID": 421,
    "rarity": "COMMON",
    "description": "Your exoskeleton remains connected with the plants that created it. You can ignore difficult terrain and uneven ground caused by undergrowth. In addition, when you use the Acrobatics skill to (action: Balance) on narrow surfaces or uneven ground within forests, you aren’t flat-footed. When you roll a success attempting one of these Acrobatics checks, you get a critical success instead.",
    "code": [
        "CONDITIONAL-SKILL_Acrobatics=When you roll a success to Balance on narrow surfaces or uneven ground within forests, you get a critical success instead."
    ],
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T02:15:50",
    "updatedAt": "2021-07-02T02:15:50",
    "wsci": [
        ["adjustConditional","SKILL","acrobatics","When you roll a success to Balance on narrow surfaces or uneven ground within forests, you get a critical success instead."]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1647,
    "name": "Rite of Light Conrasu",
    "ancestryID": 421,
    "rarity": "COMMON",
    "description": "Your exoskeleton bears small shoots that can share life. When using your Sunlight Healing, you can restore the Hit Points of an adjacent ally instead of yourself. That ally becomes temporarily immune to all uses of Sunlight Healing for 1 day.",
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T02:15:50",
    "updatedAt": "2021-07-02T02:15:50"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1648,
    "name": "Rite of Reinforcement Conrasu",
    "ancestryID": 421,
    "rarity": "COMMON",
    "description": "Your woven exoskeleton rivals the hardest armors that can be found. Your exoskeleton is medium armor in the plate armor group that grants a +4 item bonus to AC, a Dex cap of +1, a check penalty of –2, a speed penalty of –5 feet, and a Strength value of 16, and has the (trait: comfort) trait. You can never wear other armor or remove your exoskeleton. You can etch armor runes onto your exoskeleton as normal.\n__Add (item: conrasu exoskeleton) to your inventory and equip it.__",
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T02:15:50",
    "updatedAt": "2021-07-02T02:15:50"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1676,
    "name": "Farsight Goloma",
    "ancestryID": 428,
    "rarity": "COMMON",
    "description": "Your eyes have adapted to see more in less than favorable conditions. You gain low-light vision.",
    "code": [
        "GIVE-SENSE-NAME=Low-Light Vision"
    ],
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T04:26:35",
    "updatedAt": "2021-07-02T04:26:35",
    "wsci": [
        ["giveSenseName","low-light vision",null]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1677,
    "name": "Frightful Goloma",
    "ancestryID": 428,
    "rarity": "COMMON",
    "description": "Your face has a particularly off-putting appearance. You are trained in Intimidation (or another skill of your choice if you were already trained in Intimidation) and gain the (feat: Intimidating Glare) skill feat as a bonus feat.",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-FEAT-NAME=Intimidating Glare"
    ],
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T04:26:35",
    "updatedAt": "2021-07-02T04:26:35",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveFeatName",["intimidating glare"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1678,
    "name": "Vicious Goloma",
    "ancestryID": 428,
    "rarity": "COMMON",
    "description": "The chitin on your hands forms powerful claws that allow you to defend yourself. You gain a claw unarmed attack that deals 1d6 slashing damage. Your claws are in the brawling group and have the (trait: agile), (trait: finesse), and (trait: unarmed) traits.",
    "code": [
        "GIVE-PHYSICAL-FEATURE-NAME=Vicious Claws"
    ],
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T04:26:35",
    "updatedAt": "2021-07-02T04:26:35",
    "wsci": [
        ["givePhysicalFeatureName","vicious claws"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1679,
    "name": "Insightful Goloma",
    "ancestryID": 428,
    "rarity": "COMMON",
    "description": "You’ve learned to watch for telltale signs of dangerous sentiments to help you avoid trouble. You gain a +1 circumstance bonus to your Perception DC against attempts to (action: Lie) to you and your Perception checks to (action: Sense Motive).",
    "code": [
        "CONDITIONAL-INCREASE-PERCEPTION=1~circumstance bonus to your DC against attempts to Lie to you and to checks to Sense Motive"
    ],
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T04:26:35",
    "updatedAt": "2021-07-02T04:26:35",
    "wsci": [
        ["adjust","PERCEPTION",null,1,null,"circumstance bonus to your DC against attempts to Lie to you and to checks to Sense Motive"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1680,
    "name": "Vigilant Goloma",
    "ancestryID": 428,
    "rarity": "COMMON",
    "description": "You’ve learned to be aware of not just obvious physical dangers, but also noticeable magical threats. You can cast the (spell: detect magic) cantrip as an arcane innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up. In addition, your awareness allows you to notice magical traps easier than others. Your proficiency rank in Perception is considered one step better when attempting to detect magical traps. (Trained is considered expert, expert is considered master, and master is considered legendary).",
    "code": [
        "GIVE-INNATE-SPELL-NAME=Detect Magic:0:ARCANE:0"
    ],
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T04:26:35",
    "updatedAt": "2021-07-02T04:26:35",
    "wsci": [
        ["giveInnateSpellName","detect magic",0,"arcane",0]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1681,
    "name": "Ant Gnoll",
    "ancestryID": 429,
    "rarity": "COMMON",
    "description": "You’re a sharp-featured, big-eared gnoll about three feet tall. Many are skeptical that you are in fact a gnoll. Your size is Small instead of Medium. You are trained in Deception (or another skill if you were already trained in Deception). You gain a +1 circumstance bonus to Deception checks to (action: Lie) when specifically claiming innocence, to Deception DCs against (action: Sense Motive) checks to uncover such lies, and to initiative checks when you roll Deception for initiative.",
    "code": [
        "CONDITIONAL-INCREASE-SKILL_Deception=1~circumstance bonus to Lie when specifically claiming innocence, to DC against Sense Motive checks to uncover such lies, and to initiative checks.",
        "GIVE-PROF-IN=Deception:T",
        "SET-SIZE=SMALL"
    ],
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T04:47:24",
    "updatedAt": "2021-07-02T04:47:24",
    "wsci": [
        ["adjust","SKILL","deception",1,null,"circumstance bonus to Lie when specifically claiming innocence, to DC against Sense Motive checks to uncover such lies, and to initiative checks."],
        ["giveProfIn","deception","T"],
        ["setSize","small"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1682,
    "name": "Sweetbreath Gnoll",
    "ancestryID": 429,
    "rarity": "COMMON",
    "description": "You’re a striped, pale-furred gnoll with oddly pleasant breath, which you can use to entrance your prey. You are trained in Diplomacy (or another skill if you were already trained in Diplomacy). You also gain a +1 circumstance bonus to checks to (action: Make an Impression) if the target can smell your breath.",
    "code": [
        "CONDITIONAL-INCREASE-SKILL_Diplomacy=1~circumstance bonus to Make an Impression if the target can smell your breath",
        "GIVE-PROF-IN=Diplomacy:T"
    ],
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T04:47:24",
    "updatedAt": "2021-07-02T04:47:24",
    "wsci": [
        ["adjust","SKILL","diplomacy",1,null,"circumstance bonus to Make an Impression if the target can smell your breath"],
        ["giveProfIn","diplomacy","T"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1683,
    "name": "Witch Gnoll",
    "ancestryID": 429,
    "rarity": "COMMON",
    "description": "You’re a shaggy, dark-furred gnoll capable of making some truly uncanny sounds. You can cast the (spell: ghost sound) cantrip as an occult innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up. In addition, you gain a +1 circumstance bonus to checks to (action: Impersonate) and (action: Create a Diversion) when using only your voice.",
    "code": [
        "CONDITIONAL-INCREASE-SKILL_Deception=1~circumstance bonus to Impersonate and Create a Diversion when using only your voice",
        "GIVE-INNATE-SPELL-NAME=Ghost Sound:0:Occult:0"
    ],
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T04:47:24",
    "updatedAt": "2021-07-02T04:47:24",
    "wsci": [
        ["adjust","SKILL","deception",1,null,"circumstance bonus to Impersonate and Create a Diversion when using only your voice"],
        ["giveInnateSpellName","ghost sound",0,"occult",0]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1684,
    "name": "Great Gnoll",
    "ancestryID": 429,
    "rarity": "COMMON",
    "description": "You’re a large, powerful gnoll, with tawny fur and brown spots on your hide. You gain 10 Hit Points from your ancestry instead of 8 and gain a +1 circumstance bonus to Athletics checks to (action: Shove) or (action: Trip) foes.",
    "code": [
        "CONDITIONAL-INCREASE-SKILL_Athletics=1~circumstance bonus to Shove or Trip foes",
        "INCREASE-MAX_HEALTH=2-HERITAGE"
    ],
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T04:47:24",
    "updatedAt": "2021-07-02T04:47:24",
    "wsci": [
        ["adjust","SKILL","athletics",1,null,"circumstance bonus to Shove or Trip foes"],
        ["adjust","MAX_HEALTH",null,2,"heritage",null]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1695,
    "name": "Snaptongue Grippli",
    "ancestryID": 432,
    "rarity": "COMMON",
    "description": "Your tongue is especially long, and you can launch it with extraordinary range and precision. You can use your tongue to deliver touch-range spells and perform extremely simple (action: Interact) actions, such as opening some types of unlocked doors. Your tongue can’t perform actions that require fingers or significant manual dexterity, including any action that would require a check to accomplish, and you can’t use it to hold items.",
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T04:59:17",
    "updatedAt": "2021-07-02T04:59:17"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1696,
    "name": "Stickytoe Grippli",
    "ancestryID": 432,
    "rarity": "COMMON",
    "description": "Your hands and feet exude a film that helps them adhere to surfaces. You gain a +2 circumstance bonus to your Fortitude and Reflex DC against attempts to (action: Disarm), (action: Shove), or (action: Trip) you. When ascending trees, vines, and other foliage, if you roll a success on the Athletics check to (action: Climb), you get a critical success instead.",
    "code": [
        "CONDITIONAL-SKILL_Athletics=When ascending trees, vines, and other foliage, if you roll a success to Climb, you get a critical success instead.",
        "CONDITIONAL-INCREASE-SAVE_FORT=2~circumstance bonus to your DC against attempts to Disarm, Shove, or Trip you.",
        "CONDITIONAL-INCREASE-SAVE_REFLEX=2~circumstance bonus to your DC against attempts to Disarm, Shove, or Trip you."
    ],
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T04:59:17",
    "updatedAt": "2021-07-02T04:59:17",
    "wsci": [
        ["adjustConditional","SKILL","athletics","When ascending trees, vines, and other foliage, if you roll a success to Climb, you get a critical success instead."],
        ["adjust","SAVE","fort",2,null,"circumstance bonus to your DC against attempts to Disarm, Shove, or Trip you."],
        ["adjust","SAVE","reflex",2,null,"circumstance bonus to your DC against attempts to Disarm, Shove, or Trip you."]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1697,
    "name": "Poisonhide Grippli",
    "ancestryID": 432,
    "rarity": "COMMON",
    "description": "You may be small, but the poison glands concealed across your body hide a deadly defense. You gain the (feat: Toxic Skin) reaction.",
    "code": [
        "GIVE-FEAT-NAME=Toxic Skin"
    ],
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T04:59:17",
    "updatedAt": "2021-07-02T04:59:17",
    "wsci": [
        ["giveFeatName",["toxic skin"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1698,
    "name": "Windweb Grippli",
    "ancestryID": 432,
    "rarity": "COMMON",
    "description": "Tough webbing along your hands and toes can slow any fall. As long as you have one hand free, you take no falling damage, regardless of the distance you fall.",
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T04:59:17",
    "updatedAt": "2021-07-02T04:59:17"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1699,
    "name": "Quillcoat Shisk",
    "ancestryID": 433,
    "rarity": "COMMON",
    "description": "Your body has adapted a defensive mechanism to break off your quills in an attacker, allowing you to defend yourself against aggressive predators, though it takes a while for the quills to grow back. You gain the (feat: Barbed Quills) reaction.",
    "code": [
        "GIVE-FEAT-NAME=Barbed Quills"
    ],
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T05:24:42",
    "updatedAt": "2021-07-02T05:24:42",
    "wsci": [
        ["giveFeatName",["barbed quills"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1700,
    "name": "Spellkeeper Shisk",
    "ancestryID": 433,
    "rarity": "COMMON",
    "description": "Your magical knowledge allows you to cast simple spells. Choose occult or primal. You gain one cantrip from that magical tradition’s spell list. You can cast this spell as an innate spell at will, as a spell of your chosen tradition. A cantrip is heightened to a spell level equal to half your level rounded up.",
    "code": [
        "GIVE-FEAT-FROM=Choose a Tradition:Spellkeeper - Primal,Spellkeeper - Occult"
    ],
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T05:24:42",
    "updatedAt": "2021-07-02T05:24:42",
    "wsci": [
        ["giveFeatFrom","Choose a Tradition",["Spellkeeper - Primal","Spellkeeper - Occult"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1701,
    "name": "Stonestep Shisk",
    "ancestryID": 433,
    "rarity": "COMMON",
    "description": "Navigating mountains and other rocky terrain is second nature to you. You can ignore non-magical difficult terrain caused by rubble and uneven ground made of stone and earth.",
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T05:24:42",
    "updatedAt": "2021-07-02T05:24:42"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1702,
    "name": "Stronggut Shisk",
    "ancestryID": 433,
    "rarity": "COMMON",
    "description": "Your metabolism is slow, allowing you to go for days without food and process maladies at a slower rate. You can go for 1 week without food before you begin to starve. Additionally, the onset times and lengths of stages for all diseases and poisons that affect you are increased by 50%. If the onset time or stage is instant or lasts only 1 round, this ability has no effect.",
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T05:24:42",
    "updatedAt": "2021-07-02T05:24:42"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1703,
    "name": "Lorekeeper Shisk",
    "ancestryID": 433,
    "rarity": "COMMON",
    "description": "You grew up surrounded by knowledge and secrets. You become trained in one Lore skill and one other Intelligence- or Wisdom-based skill of your choice. At 5th level, you become expert in the chosen skills.",
    "code": [
        "GIVE-LORE-CHOOSE",
        "GIVE-SKILL=T[Arcana,Crafting,Medicine,Nature,Occultism,Religion,Society,Survival]",
        "IF (HAS-LEVEL<=5) {GIVE-SKILL=E[Arcana,Crafting,Medicine,Nature,Occultism,Religion,Society,Survival]}"
    ],
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T05:24:42",
    "updatedAt": "2021-07-02T05:24:42",
    "wsci": [
        ["giveLoreChoose"],
        ["giveSkill","T",["arcana","crafting","medicine","nature","occultism","religion","society","survival"]],
        {"conditionals":[["hasLevel","<=",5]],"consequent":["giveSkill","E",["arcana","crafting","medicine","nature","occultism","religion","society","survival"]]}
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1704,
    "name": "Polychromatic Anadi",
    "ancestryID": 434,
    "rarity": "COMMON",
    "description": "Your body is covered with exceptionally colorful hairs that create vibrant, eye-catching patterns, some of which might even show in your human form. You become trained in Performance (or another skill if you were already trained in Performance), and you gain the (feat: Impressive Performance) feat.",
    "code": [
        "GIVE-PROF-IN=Performance:T",
        "GIVE-FEAT-NAME=Impressive Performance"
    ],
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T05:27:38",
    "updatedAt": "2021-07-02T05:27:38",
    "wsci": [
        ["giveProfIn","performance","T"],
        ["giveFeatName",["impressive performance"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1705,
    "name": "Venomous Anadi",
    "ancestryID": 434,
    "rarity": "COMMON",
    "description": "Your natural form’s fangs are capable of injecting foes with venom. You gain the (feat: Anadi Venom) ability.",
    "code": [
        "GIVE-FEAT-NAME=Anadi Venom"
    ],
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T05:27:38",
    "updatedAt": "2021-07-02T05:27:38",
    "wsci": [
        ["giveFeatName",["anadi venom"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1706,
    "name": "Spindly Anadi",
    "ancestryID": 434,
    "rarity": "COMMON",
    "description": "Your limbs are exceptionally long in both forms, allowing you to skitter about with surprising agility. Your Speed increases from 25 to 30 feet.",
    "code": [
        "INCREASE-SPEED=5"
    ],
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T05:27:38",
    "updatedAt": "2021-07-02T05:27:38",
    "wsci": [
        ["adjust","SPEED",null,5,null,null]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1707,
    "name": "Snaring Anadi",
    "ancestryID": 434,
    "rarity": "COMMON",
    "description": "You were hatched with hooked fangs that give you an edge when hunting in your true form. Your fangs attack gains the (trait: grapple) and (trait: trip) traits.",
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T05:27:38",
    "updatedAt": "2021-07-02T05:27:38"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 1708,
    "name": "Adaptive Anadi",
    "ancestryID": 434,
    "rarity": "COMMON",
    "description": "You descend from a line of anadi who worked to perfect their transformation magic, allowing them to integrate into a wider variety of cultures. Choose a common, Medium humanoid ancestry. Your human form is replaced with a form that matches this choice. You also gain the (feat: Adopted Ancestry) feat for your chosen humanoid ancestry.",
    "code": [
        "GIVE-FEAT-NAME=Adopted Ancestry"
    ],
    "isArchived": true,
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-07-02T05:27:38",
    "updatedAt": "2021-07-02T05:27:38",
    "wsci": [
        ["giveFeatName",["adopted ancestry"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 2435,
    "name": "Hunter Automaton",
    "ancestryID": 575,
    "rarity": "COMMON",
    "description": "You were designed to serve as a scout or assassin and have a body resembling a pack hunter like a large cat or wolf. Though you typically move like a quadruped, you can still stand and fight like a biped, allowing you to use all equipment normally. Your quadruped design allows you to move quickly; if you have both hands free, you can increase your Speed to 30 feet as you run on all fours.",
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "createdAt": "2021-10-05T02:09:01",
    "updatedAt": "2021-10-05T02:09:01"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 2436,
    "name": "Warrior Automaton",
    "ancestryID": 575,
    "rarity": "COMMON",
    "description": "Sporting a bulkier, powerful design, your body has been designed for combat. You have a bulky, humanoid shape. The damage die for your fist increases to 1d6 instead of 1d4. You don’t take a penalty when making a lethal attack with your fist or any other unarmed attack.",
    "code": [
        "GIVE-PHYSICAL-FEATURE-NAME=Powerful Fist"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "createdAt": "2021-10-05T02:09:01",
    "updatedAt": "2021-10-05T02:09:01",
    "wsci": [
        ["givePhysicalFeatureName","powerful fist"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 2437,
    "name": "Sharpshooter Automaton",
    "ancestryID": 575,
    "rarity": "COMMON",
    "description": "Your lithe, humanoid shape is designed for speed and accuracy suitable for ranged combat. You gain the (feat: Automaton Aim) action.",
    "code": [
        "GIVE-FEAT-NAME=Automaton Aim"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "createdAt": "2021-10-05T02:09:01",
    "updatedAt": "2021-10-05T02:09:01",
    "wsci": [
        ["giveFeatName",["automaton aim"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 2438,
    "name": "Mage Automaton",
    "ancestryID": 575,
    "rarity": "COMMON",
    "description": "The chamber housing your core has a more direct connection to the rest of your humanoid shape, allowing you to tap into your core’s magical energy. You gain one cantrip from the arcane spell list. You can cast this spell as an arcane innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up.",
    "code": [
        "GIVE-INNATE-SPELL=0:Arcane:0"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "createdAt": "2021-10-05T02:09:01",
    "updatedAt": "2021-10-05T02:09:01",
    "wsci": [
        ["giveInnateSpell",0,"arcane",0]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 2520,
    "name": "Stuffed Poppet",
    "ancestryID": 595,
    "rarity": "COMMON",
    "description": "You have little inside you other than cotton, sawdust, or dried leaves. You take no damage from falling, regardless of the distance you fall.",
    "isArchived": true,
    "contentSrc": "LOST-GRAND-BAZAAR",
    "createdAt": "2021-10-17T00:53:43",
    "updatedAt": "2021-10-17T00:53:43"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 2521,
    "name": "Windup Poppet",
    "ancestryID": 595,
    "rarity": "COMMON",
    "description": "You’re made primarily of soft metals, such as tin or silver, and your life force dwells within an exceptional array of clockworks deep in your body. Provided you wind metal tabs on your body a few times each day, you don’t need food or water to survive. You must still breathe to ventilate your internal mechanisms and sleep to give your mechanisms rest, just like other poppets.",
    "isArchived": true,
    "contentSrc": "LOST-GRAND-BAZAAR",
    "createdAt": "2021-10-17T00:53:43",
    "updatedAt": "2021-10-17T00:53:43"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 2522,
    "name": "Ghost Poppet",
    "ancestryID": 595,
    "rarity": "COMMON",
    "description": "You awakened when a bit of another person’s life force and a fragment of their soul—possibly, but not always, at the moment of their death—found its way into your constructed body. You don’t remember anything more than vague flashes of your “before life,” but that life essence still protects you. You gain resistance to negative damage equal to half your level (minimum 1).",
    "code": [
        "GIVE-RESISTANCE=Negative:Half_Level"
    ],
    "isArchived": true,
    "contentSrc": "LOST-GRAND-BAZAAR",
    "createdAt": "2021-10-17T00:53:43",
    "updatedAt": "2021-10-17T00:53:43",
    "wsci": [
        ["giveResistance","negative",["half",null]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 2523,
    "name": "Wishborn Poppet",
    "ancestryID": 595,
    "rarity": "COMMON",
    "description": "You were wished to life, either by a powerful spellcaster or by the earnest desire of an innocent person who loved you very much. You’re living proof that a hopeful spirit can overcome any obstacle. If you roll a success on a saving throw against an (trait: emotion) or (trait: fear) effect, you get a critical success instead.",
    "code": [
        "CONDITIONAL-SAVE_FORT=When you roll a success against an emotion or fear effect, you get a critical success instead.",
        "CONDITIONAL-SAVE_REFLEX=When you roll a success against an emotion or fear effect, you get a critical success instead.",
        "CONDITIONAL-SAVE_WILL=When you roll a success against an emotion or fear effect, you get a critical success instead."
    ],
    "isArchived": true,
    "contentSrc": "LOST-GRAND-BAZAAR",
    "createdAt": "2021-10-17T00:53:43",
    "updatedAt": "2021-10-17T00:53:43",
    "wsci": [
        ["adjustConditional","SAVE","fort","When you roll a success against an emotion or fear effect, you get a critical success instead."],
        ["adjustConditional","SAVE","reflex","When you roll a success against an emotion or fear effect, you get a critical success instead."],
        ["adjustConditional","SAVE","will","When you roll a success against an emotion or fear effect, you get a critical success instead."]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 2524,
    "name": "Toy Poppet",
    "ancestryID": 595,
    "rarity": "COMMON",
    "description": "You have the form of a child’s tiny toy or doll, but you don’t let your small size impede your joy of life. Instead of Small, your size is Tiny. Like other Tiny creatures, you don’t automatically receive lesser cover from being in a larger creature’s space, but circumstances might allow you to (action: Take Cover). You can purchase weapons, armor, and other items for your size with the same statistics as normal gear, except that melee weapons have a reach of 0 for you (or a reach 5 feet shorter than normal if they have the (trait: reach) trait). You can enter another creature’s space, which is important because you must usually enter a creature’s space to attack it with melee (action: Strikes | Strike)!\nRemember to adjust the Bulk of items and your Bulk limit for Tiny size (Core Rulebook 295). The information on how to handle Tiny PCs, including rules for attempting to ride on other characters, appears on page 66 of the __Pathfinder Lost Omens Ancestry Guide__.",
    "code": [
        "SET-SIZE=TINY"
    ],
    "isArchived": true,
    "contentSrc": "LOST-GRAND-BAZAAR",
    "createdAt": "2021-10-17T00:53:43",
    "updatedAt": "2021-10-17T00:53:43",
    "wsci": [
        ["setSize","tiny"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 3270,
    "name": "Pine Leshy",
    "rarity": "COMMON",
    "description": "You excrete a thick, sticky sap from your bark-like flesh, making it easier to climb and hold onto your gear. You gain the (feat: Combat Climber) feat as a bonus feat, and you gain a +2 circumstance bonus to your Reflex DC against attempts to (action: Disarm) you.",
    "code": [
        "GIVE-FEAT-NAME=Combat Climber",
        "CONDITIONAL-INCREASE-SAVE_REFLEX=2~circumstance bonus to DC against attempts to Disarm you"
    ],
    "isArchived": true,
    "contentSrc": "QUEST-FROZEN-FLAME",
    "indivAncestryName": "Leshy",
    "createdAt": "2022-03-05T20:56:08",
    "updatedAt": "2022-03-05T20:56:08",
    "wsci": [
        ["giveFeatName",["combat climber"]],
        ["adjust","SAVE","reflex",2,null,"circumstance bonus to DC against attempts to Disarm you"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 4494,
    "name": "Sturdy Skeleton",
    "ancestryID": 847,
    "rarity": "COMMON",
    "description": "Certain hazardous conditions are not suitable for the average skeleton, so a necromancer might choose to reanimate the bones of a dwarf, orc, or other creature with a reputation for sturdiness. You have 10 Hit Points instead of 6 and gain the (feat: Diehard) feat.",
    "code": [
        "INCREASE-MAX_HEALTH=4-HERITAGE",
        "GIVE-FEAT-NAME=Diehard"
    ],
    "isArchived": true,
    "contentSrc": "BOOK-OF-DEAD",
    "createdAt": "2022-04-27T18:40:12",
    "updatedAt": "2022-04-27T18:40:12",
    "wsci": [
        ["adjust","MAX_HEALTH",null,4,"heritage",null],
        ["giveFeatName",["diehard"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 4495,
    "name": "Monstrous Skeleton",
    "ancestryID": 847,
    "rarity": "COMMON",
    "description": "Inhuman skeletons are often created for both their deadly physical attacks and their terrifying appearances. Beasts and monstrous humanoids with the strangest skeletons tend to be the centerpiece of the collection of a necromancer skilled enough to raise one. You gain a claw, horn, tail, or wing unarmed attack that deals 1d6 damage. A claw deals slashing damage, a horn deals piercing damage, and a tail or wing deals bludgeoning damage. This unarmed attack is in the brawling group and has the (trait: finesse) and (trait: unarmed) traits.",
    "isArchived": true,
    "contentSrc": "BOOK-OF-DEAD",
    "createdAt": "2022-04-27T18:40:12",
    "updatedAt": "2022-04-27T18:40:12"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 4496,
    "name": "Fodder Skeleton",
    "ancestryID": 847,
    "rarity": "COMMON",
    "description": "Humans, and those who are physically closest to them, are the favored material of necromancers. They are readily available, and their physiology has been studied the most extensively, so these skeletons can be easily mass-produced. Despite their name, fodder skeletons make rather mobile foot soldiers due to how efficiently they transfer necromantic energy within their bodies. You have a base Speed of 30 feet, instead of 25 feet.",
    "code": [
        "INCREASE-SPEED=5"
    ],
    "isArchived": true,
    "contentSrc": "BOOK-OF-DEAD",
    "createdAt": "2022-04-27T18:40:12",
    "updatedAt": "2022-04-27T18:40:12",
    "wsci": [
        ["adjust","SPEED",null,5,null,null]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 4497,
    "name": "Compact Skeleton",
    "ancestryID": 847,
    "rarity": "COMMON",
    "description": "For tasks that require a lighter touch, gnome, goblin, and halfling remains are more suitable than a larger creature's. These smaller, nimbler skeletons fit well in a traveling chest, can be forced through tight spaces, and more easily avoid detection. Your size is Small instead of Medium. You gain the (feat: Quick Squeeze) feat, even if you aren't trained in Acrobatics. Tight spaces not tight enough to require the (action: Squeeze) activity aren't difficult terrain for you.",
    "code": [
        "GIVE-FEAT-NAME=Quick Squeeze",
        "SET-SIZE=SMALL"
    ],
    "isArchived": true,
    "contentSrc": "BOOK-OF-DEAD",
    "createdAt": "2022-04-27T18:40:12",
    "updatedAt": "2022-04-27T18:40:12",
    "wsci": [
        ["giveFeatName",["quick squeeze"]],
        ["setSize","small"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5528,
    "name": "Ancient Ash Ghoran",
    "ancestryID": 1066,
    "rarity": "COMMON",
    "description": "Your memory is sharp and clear, and you remember so much. You remember the calm before the storm and the soil after the rain, the acrid tang of magic and the whisper of a song. You remember it all. You become trained in one skill of your choice. At 5th level, you become an expert in that skill.",
    "code": [
        "GIVE-SKILL=T",
        "IF (HAS-LEVEL>=5) {GIVE-SKILL-INCREASE}"
    ],
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T09:32:36",
    "updatedAt": "2022-11-23T09:32:36",
    "wsci": [
        ["giveSkill","T",[]],
        {"conditionals":[["hasLevel",">=",5]],"consequent":["giveSkillIncrease"]}
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5529,
    "name": "Strong Oak Ghoran",
    "ancestryID": 1066,
    "rarity": "COMMON",
    "description": "Most ghorans have bodies of pliable vines and tough stems, but you're covered in sturdy, rough bark and your legs are stable as roots. You gain a +2 circumstance bonus on your Fortitude or Reflex DC against attempts to (action: Grapple) or (action: Trip) you. This bonus also applies to saving throws against effects that would grab you, restrain you, or knock you prone. You also gain a +2 circumstance bonus on Acrobatics checks to (action: Balance).",
    "code": [
        "CONDITIONAL-INCREASE-SKILL_Acrobatics=2~circumstance bonus to checks to Balance",
        "CONDITIONAL-INCREASE-SAVE_FORT=2~circumstance bonus against attempts to Shove or Trip you",
        "CONDITIONAL-INCREASE-SAVE_REFLEX=2~circumstance bonus against attempts to Shove or Trip yo"
    ],
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T09:32:36",
    "updatedAt": "2022-11-23T09:32:36",
    "wsci": [
        ["adjust","SKILL","acrobatics",2,null,"circumstance bonus to checks to Balance"],
        ["adjust","SAVE","fort",2,null,"circumstance bonus against attempts to Shove or Trip you"],
        ["adjust","SAVE","reflex",2,null,"circumstance bonus against attempts to Shove or Trip yo"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5530,
    "name": "Enchanting Lily Ghoran",
    "ancestryID": 1066,
    "rarity": "COMMON",
    "description": "You smell ever so sweet—a delicate, floral scent like the intoxicating fragrance of lilies and the soft scent of lilacs. You're trained in Diplomacy (or another skill if you were already trained in Diplomacy). You also gain a +1 circumstance bonus to checks to (action: Make an Impression) if the target can smell your fragrance.",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "CONDITIONAL-INCREASE-SKILL_Diplomacy=1~circumstance bonus to Make an Impression if the target can smell your fragrance"
    ],
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T09:32:36",
    "updatedAt": "2022-11-23T09:32:36",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["adjust","SKILL","diplomacy",1,null,"circumstance bonus to Make an Impression if the target can smell your fragrance"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5531,
    "name": "Thorned Rose Ghoran",
    "ancestryID": 1066,
    "rarity": "COMMON",
    "description": "Your beautiful petals and seemingly smooth skin hide silent barbs to pierce the unwary. Your body is covered with wickedly sharp thorns to discourage those that might prey upon you. You gain the (feat: Wicked Thorns) reaction.",
    "code": [
        "GIVE-FEAT-NAME=Wicked Thorns"
    ],
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T09:32:36",
    "updatedAt": "2022-11-23T09:32:36",
    "wsci": [
        ["giveFeatName",["wicked thorns"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5532,
    "name": "Xyloshi Kashrishi",
    "ancestryID": 1067,
    "rarity": "COMMON",
    "description": "You have prominent neck muscles that allow you to use your facial horn as a tool or weapon. You gain a horn unarmed attack that deals 1d6 piercing damage. Your horn is in the brawling group, and has the (trait: finesse) and (trait: unarmed) traits.",
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T09:47:48",
    "updatedAt": "2022-11-23T09:47:48"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5533,
    "name": "Athamasi Kashrishi",
    "ancestryID": 1067,
    "rarity": "COMMON",
    "description": "You have a set of small secondary arms adapted for climbing and hanging from trees. You can't hold or retrieve objects with these limbs, but you can (action: Climb) or (action: Grab an Edge) even if one or both of your primary hands are full. You aren't flat-footed while (action: Climbing|Climb).",
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T09:47:48",
    "updatedAt": "2022-11-23T09:47:48"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5534,
    "name": "Lethoci Kashrishi",
    "ancestryID": 1067,
    "rarity": "COMMON",
    "description": "You come from a kashrishi family adapted to coastal shores, or inland ponds and lakes. You gain a +2 circumstance bonus to Athletics checks to (action: Swim). If you critically fail an Athletics check to Swim, you get a failure instead.",
    "code": [
        "SKILL_Athletics=2~circumstance bonus to checks to swim"
    ],
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T09:47:48",
    "updatedAt": "2022-11-23T09:47:48"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5535,
    "name": "Nascent Kashrishi",
    "ancestryID": 1067,
    "rarity": "COMMON",
    "description": "While most kashrishi are fully adapted to their environment by the time they reach adulthood, some retain unrealized potential well into adulthood before unlocking it. You gain a 1st-level kashrishi ancestry feat for which you meet the prerequisites, if any.",
    "code": [
        "GIVE-ANCESTRY-FEAT=1"
    ],
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T09:47:48",
    "updatedAt": "2022-11-23T09:47:48",
    "wsci": [
        ["giveAncestryFeat",["absolute",1],[]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5536,
    "name": "Trogloshi Kashrishi",
    "ancestryID": 1067,
    "rarity": "COMMON",
    "description": "You're adapted to the sunless regions of dense jungle forests and deep caves, with soft flesh lacking pigment and unusually clear crystalline horns. You gain the (feat: Crystal Luminescence) ancestry feat.",
    "code": [
        "GIVE-FEAT-NAME=Crystal Luminescence"
    ],
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T09:47:48",
    "updatedAt": "2022-11-23T09:47:48",
    "wsci": [
        ["giveFeatName",["crystal luminescence"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5537,
    "name": "Venomshield Nagaji Nagaji",
    "ancestryID": 1068,
    "rarity": "COMMON",
    "description": "Your intrinsic connection to nagas and mundane serpents grants you an innate resistance to toxins of every sort. You gain resistance to poison equal to half your level (minimum 1 resistance), and you gain a +1 circumstance bonus to all saving throws against poison.",
    "code": [
        "GIVE-RESISTANCE=Poison:Half_Level",
        "CONDITIONAL-INCREASE-SAVE_FORT=1~circumstance bonus against poison effects",
        "CONDITIONAL-INCREASE-SAVE_REFLEX=1~circumstance bonus against poison effects",
        "CONDITIONAL-INCREASE-SAVE_WILL=1~circumstance bonus against poison effects"
    ],
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T10:05:06",
    "updatedAt": "2022-11-23T10:05:06",
    "wsci": [
        ["giveResistance","poison",["half",null]],
        ["adjust","SAVE","fort",1,null,"circumstance bonus against poison effects"],
        ["adjust","SAVE","reflex",1,null,"circumstance bonus against poison effects"],
        ["adjust","SAVE","will",1,null,"circumstance bonus against poison effects"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5538,
    "name": "Titan Nagaji Nagaji",
    "ancestryID": 1068,
    "rarity": "COMMON",
    "description": "You were raised to be a warrior or a bodyguard, and your specialized diet and bulging muscles have made your scales as strong as armored plates. Your scales are medium armor in the plate armor group that grant a +4 item bonus to AC, a Dex cap of +1, a check penalty of –2, a Speed penalty of –5 feet, a Strength value of 16, and have the comfort trait. You can never wear other armor or remove your scales. You can etch armor runes onto your scales.",
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T10:05:06",
    "updatedAt": "2022-11-23T10:05:06"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5539,
    "name": "Sacred Nagaji Nagaji",
    "ancestryID": 1068,
    "rarity": "COMMON",
    "description": "You stand out from most nagaji, with the upper body of a beautiful human and the lower body of a green or white snake. Legends claim your ancestors were faithful snakes uplifted by Nalinivati rather than nagaji created by the goddess. Instead of a fangs unarmed attack, you have a tail attack that deals 1d6 bludgeoning damage, is in the brawling weapon group, and has the (trait: finesse) and (trait: unarmed) traits. You gain a +2 circumstance bonus on your Fortitude or Reflex DC against attempts to (action: Grapple) or (action: Trip) you. This bonus also applies to saving throws against effects that would grab you, restrain you, or knock you prone.",
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T10:05:06",
    "updatedAt": "2022-11-23T10:05:06"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5540,
    "name": "Hooded Nagaji Nagaji",
    "ancestryID": 1068,
    "rarity": "COMMON",
    "description": "You bear the hooded head of a spitting cobra, and like such cobras, you can shoot streams of venom from your mouth. You gain a venomous spit ranged unarmed attack with a range increment of 10 feet that deals 1d4 poison damage. On a critical hit, the target takes persistent poison damage equal to the number of weapon damage dice. Your spit doesn't have a weapon group or a critical specialization effect.",
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T10:05:06",
    "updatedAt": "2022-11-23T10:05:06"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5541,
    "name": "Whipfang Nagaji Nagaji",
    "ancestryID": 1068,
    "rarity": "COMMON",
    "description": "You have a long, flexible neck that can curl into a striking pose like that of a snake. Your deceptively powerful muscles allow you to bite with surprising distance and speed. You gain the (feat: Raise Neck) action.",
    "code": [
        "GIVE-FEAT-NAME=Raise Neck"
    ],
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T10:05:06",
    "updatedAt": "2022-11-23T10:05:06",
    "wsci": [
        ["giveFeatName",["raise neck"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5542,
    "name": "Bandaagee Vanara",
    "ancestryID": 1069,
    "rarity": "COMMON",
    "description": "Your family is one of many who claims to be descended from the regal vanara peacekeeping family called the Bandaagee. Bandaagee are the most common kind of vanaras. You're very familiar with the trappings of civilization and move easily through the most crowded communities. You ignore difficult terrain from crowds.",
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T10:09:55",
    "updatedAt": "2022-11-23T10:09:55"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5543,
    "name": "Ragdyan Vanara",
    "ancestryID": 1069,
    "rarity": "COMMON",
    "description": "Keepers of traditions and tellers of ancient tales, your family traces its lineage to those born directly from Ragdya's whims. When you speak, others are inclined to listen to you, perhaps due to the divine spark of your connection to Ragdya. You gain one cantrip from the divine spell list; this cantrip can't deal damage or otherwise cause direct harm. You can cast this spell as a divine innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up.",
    "code": [
        "GIVE-INNATE-SPELL=0:DIVINE:0"
    ],
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T10:09:55",
    "updatedAt": "2022-11-23T10:09:55",
    "wsci": [
        ["giveInnateSpell",0,"divine",0]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5544,
    "name": "Lahkgyan Vanara",
    "ancestryID": 1069,
    "rarity": "COMMON",
    "description": "Your vanara ancestors might have been born in Ragdya's image, but they found survival only in service to his enemy: the red-faced Lahkgya. You have sharp teeth meant for gnashing and ripping into flesh. You can subsist on raw meat alone. You have a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group and have the finesse and unarmed traits.",
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T10:09:55",
    "updatedAt": "2022-11-23T10:09:55"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5545,
    "name": "Wajaghand Vanara",
    "ancestryID": 1069,
    "rarity": "COMMON",
    "description": "Your ancestors were forced into labor by the rakshasa immortal Ravana, the First and the Last. Although their cleverness while in captivity saved countless lives, and they're bound no longer, the time marked your family with scars upon the mind that will never truly heal, even across the generations. You gain a +1 circumstance bonus to saving throws against (trait: emotion) effects, and whenever you roll a success on a saving throw against an (trait: emotion) effect, you get a critical success instead.",
    "code": [
        "CONDITIONAL-INCREASE-SAVE_FORT=1~circumstance bonus against emotion effects and if you roll a success, you get a critical success instead.",
        "CONDITIONAL-INCREASE-SAVE_WILL=1~circumstance bonus against emotion effects and if you roll a success, you get a critical success instead.",
        "CONDITIONAL-INCREASE-SAVE_REFLEX=1~circumstance bonus against emotion effects and if you roll a success, you get a critical success instead."
    ],
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T10:09:55",
    "updatedAt": "2022-11-23T10:09:55",
    "wsci": [
        ["adjust","SAVE","fort",1,null,"circumstance bonus against emotion effects and if you roll a success, you get a critical success instead."],
        ["adjust","SAVE","will",1,null,"circumstance bonus against emotion effects and if you roll a success, you get a critical success instead."],
        ["adjust","SAVE","reflex",1,null,"circumstance bonus against emotion effects and if you roll a success, you get a critical success instead."]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5552,
    "name": "Discarded Fleshwarp Fleshwarp",
    "rarity": "COMMON",
    "description": "The biomancers and mutagenists who warped your form labeled you a “discard on discovery”—a euphemism for destroying you on sight. An anomaly among anomalies, your body stubbornly repudiates the efforts of fleshcrafters seeking to mold you to their grandiose visions, and your immune responses blunt the worst effects of unwanted fleshwarping attempts. If you roll a success on a saving throw against a (trait: transmutation) effect, you get a critical success instead.",
    "code": [
        "CONDITIONAL-SAVE_FORT=When you roll a success against a transmutation effect, you get a critical success instead.",
        "CONDITIONAL-SAVE_REFLEX=When you roll a success against a transmutation effect, you get a critical success instead.",
        "CONDITIONAL-SAVE_WILL=When you roll a success against a transmutation effect, you get a critical success instead."
    ],
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "indivAncestryName": "Fleshwarp",
    "createdAt": "2022-11-23T10:43:35",
    "updatedAt": "2022-11-23T10:43:35",
    "wsci": [
        ["adjustConditional","SAVE","fort","When you roll a success against a transmutation effect, you get a critical success instead."],
        ["adjustConditional","SAVE","reflex","When you roll a success against a transmutation effect, you get a critical success instead."],
        ["adjustConditional","SAVE","will","When you roll a success against a transmutation effect, you get a critical success instead."]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5553,
    "name": "Cataphract Fleshwarp Fleshwarp",
    "rarity": "COMMON",
    "description": "Your battle-hardened skeleton is laced with additional cartilage and muscle to help bear armor across vast areas of operation, and your skin is bedecked with tiny spurs of pliable, resilient keratin to optimize the grip and weight distribution of your armor. You gain the (feat: Armor Proficiency) feat. If your class makes you trained in all types of armor, you instead become trained in Athletics (or a skill of your choice if you're already trained in Athletics) and gain the (feat: Armor Assist) skill feat.",
    "code": [
        "GIVE-FEAT-NAME=Armor Proficiency",
        "IF (HAS-PROF==HEAVY_ARMOR:T) {GIVE-FEAT-NAME=Armor Assist} ELSE {GIVE-FEAT-NAME=Armor Proficiency}"
    ],
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "indivAncestryName": "Fleshwarp",
    "createdAt": "2022-11-23T10:47:34",
    "updatedAt": "2022-11-23T10:47:34",
    "wsci": [
        ["giveFeatName",["armor proficiency"]],
        {"conditionals":[["hasProf","==","heavy_armor","T"]],"consequent":["giveFeatName",["armor assist"]],"alternate":["giveFeatName",["armor proficiency"]]}
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5554,
    "name": "Surgewise Fleshwarp Fleshwarp",
    "rarity": "COMMON",
    "description": "The undulations of your body's cilia are hyper-attuned to wellsprings of magic; they trill and thrum with insights into occult energies, and their vibrations alert you to the presence of secrets. You gain the trained proficiency rank in Occultism. If you're trained in Occultism, you instead become trained in another skill of your choice. You also gain the (feat: Oddity Identification) skill feat.",
    "code": [
        "GIVE-FEAT-NAME=Oddity Identification",
        "GIVE-PROF-IN=Occultism:T"
    ],
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "indivAncestryName": "Fleshwarp",
    "createdAt": "2022-11-23T10:50:37",
    "updatedAt": "2022-11-23T10:50:37",
    "wsci": [
        ["giveFeatName",["oddity identification"]],
        ["giveProfIn","occultism","T"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5555,
    "name": "Elusive Vishkanya Vishkanya",
    "ancestryID": 1071,
    "rarity": "COMMON",
    "description": "Your flexible body seems unnaturally fluid to some, though they can rarely put a finger on what seems strange about you. You can escape foes with ease. You gain a +1 circumstance bonus to checks to (action: Escape). Additionally, you move twice as fast when (action: Squeezing|Squeeze).",
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T11:27:33",
    "updatedAt": "2022-11-23T11:27:33"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5556,
    "name": "Keen-Venom Vishkanya Vishkanya",
    "ancestryID": 1071,
    "rarity": "COMMON",
    "description": "You're practiced with using your venom in combat, allowing you to employ your venom at a moment's notice. Your (feat: Envenom) action doesn't trigger reactions that normally trigger on a (trait: manipulate) action. Additionally, you gain the (feat: Venom Draw) action.",
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T11:27:33",
    "updatedAt": "2022-11-23T11:27:33"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5557,
    "name": "Prismatic Vishkanya Vishkanya",
    "ancestryID": 1071,
    "rarity": "COMMON",
    "description": "Your scales shimmer and catch the light in an intoxicating display of colors. You become trained in Performance (or another skill of your choice if you're already trained in Performance) and gain the (feat: Fascinating Performance) feat.",
    "code": [
        "GIVE-FEAT-NAME=Fascinating Performance",
        "GIVE-PROF-IN=Performance:T"
    ],
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T11:27:33",
    "updatedAt": "2022-11-23T11:27:33",
    "wsci": [
        ["giveFeatName",["fascinating performance"]],
        ["giveProfIn","performance","T"]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5558,
    "name": "Scalekeeper Vishkanya Vishkanya",
    "ancestryID": 1071,
    "rarity": "COMMON",
    "description": "You are part of the family of vishkanyas in your community tasked with keeping records of the history and experiences of your people. Your scholarly skill affords you a quick mind. Once per day, you can attempt to (action: Recall Knowledge) as a free action.",
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T11:27:33",
    "updatedAt": "2022-11-23T11:27:33"
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5559,
    "name": "Old-Blood Vishkanya Vishkanya",
    "ancestryID": 1071,
    "rarity": "COMMON",
    "description": "You have a direct matrilineal line to the original group of vishkanyas upon the Vudrani ships that came to reclaim Jalmeray. Since then, your family has adjusted well to a new life in the Inner Sea. You become trained in Society (or another skill of your choice if you're already trained in Society), and you gain your choice of the (feat: Courtly Graces) or (feat: Streetwise) feat.",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-FEAT-FROM=Choose a Feat:Courtly Graces,Streetwise"
    ],
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T11:27:33",
    "updatedAt": "2022-11-23T11:27:33",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveFeatFrom","Choose a Feat",["Courtly Graces","Streetwise"]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
{
    "table": "heritages",
    "id": 5560,
    "name": "Venom-Resistant Vishkanaya Vishkanya",
    "ancestryID": 1071,
    "rarity": "COMMON",
    "description": "Your body contains not just venom but numerous antivenoms. You gain poison resistance equal to half your level (minimum 1), and each of your successful saving throws against a poison affliction reduces its stage by 2, or by 1 for a virulent poison. Each critical success against an ongoing poison reduces its stage by 3, or by 2 for a virulent poison.",
    "code": [
        "GIVE-RESISTANCE=Poison:Half_Level"
    ],
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2022-11-23T11:27:33",
    "updatedAt": "2022-11-23T11:27:33",
    "wsci": [
        ["giveResistance","poison",["half",null]]
    ] satisfies Expression[]
} as const satisfies HeritagesTableRowConstraints,
 ] as const;

export const heritages = hookupTableLookup(_heritages);