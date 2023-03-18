import { hookupTableLookup } from '../tables';

export interface SkillsTableRowConstraints {
  table: 'skills';
  id: number;
  name?: string;
  ability?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type SkillsTable = typeof skills;
export type SkillsTableRow = SkillsTable[number];
export type SkillID = SkillsTableRow['id'];

export const isSkillID = (id?: number): id is SkillID => !!id && !!skills.byIdLax(id);
export const assertIsSkillID = (id?: number): asserts id is SkillID => { if (!isSkillID(id)) throw Error('Expected a SkillID; got ' + id); }

const _skills = [
{
    "table": "skills",
    "id": 1,
    "name": "Acrobatics",
    "ability": "DEX",
    "description": "Acrobatics measures your ability to perform tasks requiring coordination and grace, such as when you're trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship's deck.",
    "createdAt": "2020-01-07T13:44:11",
    "updatedAt": "2020-01-07T13:44:11"
} as const satisfies SkillsTableRowConstraints,
{
    "table": "skills",
    "id": 3,
    "name": "Arcana",
    "ability": "INT",
    "description": "Arcana measures how much you know about arcane magic and creatures. Even if you’re untrained, you can Recall Knowledge about arcane theories; magic traditions; creatures of arcane significance (like dragons and beasts); and the Elemental, Astral, and Shadow Planes.",
    "createdAt": "2020-01-07T13:46:42",
    "updatedAt": "2020-01-07T13:46:42"
} as const satisfies SkillsTableRowConstraints,
{
    "table": "skills",
    "id": 4,
    "name": "Athletics",
    "ability": "STR",
    "description": "Athletics allows you to perform deeds of physical prowess, such as trying to climb a sheer or slippery cliff, avoid hazards while scaling a wall, or clinging to a surface while something is trying to knock you off. ",
    "createdAt": "2020-01-07T13:47:21",
    "updatedAt": "2020-01-07T13:47:21"
} as const satisfies SkillsTableRowConstraints,
{
    "table": "skills",
    "id": 5,
    "name": "Crafting",
    "ability": "INT",
    "description": "You can use this skill to create, understand, and repair items. Even if you’re untrained, you can Recall Knowledge about alchemical reactions, the value of items, engineering, unusual materials, and alchemical or mechanical creatures. The GM determines which creatures this applies to, but it usually includes constructs.",
    "createdAt": "2020-01-07T13:48:57",
    "updatedAt": "2020-01-07T13:48:57"
} as const satisfies SkillsTableRowConstraints,
{
    "table": "skills",
    "id": 6,
    "name": "Deception",
    "ability": "CHA",
    "description": "With Deception you can trick and mislead others using disguises, lies, and other forms of subterfuge. Typical deceptive situations include trying to fast-talk a guard, con a merchant, earn money through gambling, pass yourself off in a disguise, dull someone's suspicions with false assurances, or maintain a straight face while telling a blatant lie.",
    "createdAt": "2020-01-07T13:50:45",
    "updatedAt": "2020-01-07T13:50:45"
} as const satisfies SkillsTableRowConstraints,
{
    "table": "skills",
    "id": 7,
    "name": "Diplomacy",
    "ability": "CHA",
    "description": "With Diplomacy you can influence others through negotiation and flattery.",
    "createdAt": "2020-01-07T13:51:51",
    "updatedAt": "2020-01-07T13:51:51"
} as const satisfies SkillsTableRowConstraints,
{
    "table": "skills",
    "id": 8,
    "name": "Intimidation",
    "ability": "CHA",
    "description": "With Intimidation you can bend others to your will using threats. Examples include trying to pry information out of a prisoner, convincing street thugs to back down from a confrontation, or using the edge of a broken bottle to convince a sneering vizier to reconsider a decision.",
    "createdAt": "2020-01-07T13:52:44",
    "updatedAt": "2020-01-07T13:52:44"
} as const satisfies SkillsTableRowConstraints,
{
    "table": "skills",
    "id": 9,
    "name": "Lore",
    "ability": "INT",
    "description": "Each Lore includes a subcategory in which you have specialized information on that narrow topic. If you have multiple subcategories of Lore that could apply to a check or that would overlap with another skill in the circumstances, you can use the skill with the better skill modifier or the one you would prefer to use. If there’s any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge about the subject of your Lore skill’s subcategory.",
    "createdAt": "2020-01-07T13:57:46",
    "updatedAt": "2020-01-07T13:57:46"
} as const satisfies SkillsTableRowConstraints,
{
    "table": "skills",
    "id": 10,
    "name": "Medicine",
    "ability": "WIS",
    "description": "With Medicine you can patch up wounds and help people recover from diseases and poisons. Even if you’re untrained in Medicine, you can use it to Recall Knowledge about diseases, injuries, poisons, and other ailments. You can use this to perform forensic examinations if you spend 10 minutes (or more, as determined by the GM) checking for evidence such as wound patterns. This is most useful when determining how a body was injured or killed.",
    "createdAt": "2020-01-07T13:59:24",
    "updatedAt": "2020-01-07T13:59:24"
} as const satisfies SkillsTableRowConstraints,
{
    "table": "skills",
    "id": 11,
    "name": "Nature",
    "ability": "WIS",
    "description": "With Nature you know a great deal about the natural world, and you can command and train animals and magical beasts. Even if you’re untrained in Nature, you can use it to Recall Knowledge about fauna, flora, geography, weather, the environment, creatures of natural origin (like animals, beasts, fey, and plants), the First World, the Material Plane, and the Elemental Planes.",
    "createdAt": "2020-01-07T14:01:38",
    "updatedAt": "2020-01-07T14:01:38"
} as const satisfies SkillsTableRowConstraints,
{
    "table": "skills",
    "id": 12,
    "name": "Occultism",
    "ability": "INT",
    "description": "With Occultism you know a great deal about ancient philosophies, esoteric lore, obscure mysticism, and supernatural creatures. Even if you’re untrained in Occultism, you can use it to Recall Knowledge about ancient mysteries; obscure philosophies; creatures of occult significance (like aberrations, spirits, and oozes); and the Positive Energy, Negative Energy, Shadow, Astral, and Ethereal Planes.",
    "createdAt": "2020-01-07T14:03:14",
    "updatedAt": "2020-01-07T14:03:14"
} as const satisfies SkillsTableRowConstraints,
{
    "table": "skills",
    "id": 14,
    "name": "Performance",
    "ability": "CHA",
    "description": "With Performance you can delight an audience with music, dance, acting, storytelling, or some other form of entertainment.",
    "createdAt": "2020-01-07T14:12:05",
    "updatedAt": "2020-01-07T14:12:05"
} as const satisfies SkillsTableRowConstraints,
{
    "table": "skills",
    "id": 15,
    "name": "Religion",
    "ability": "WIS",
    "description": "With Religion the secrets of deities, dogma, faith, and the realms of divine creatures both sublime and sinister are open to you. You also understand how magic works, though your training imparts a religious slant to that knowledge. Even if you’re untrained in Religion, you can use it to Recall Knowledge about divine agents, the finer points of theology, obscure myths regarding a faith, and creatures of religious significance (like celestials, fiends, and undead), the Outer Sphere, and the Positive and Negative Energy Planes.",
    "createdAt": "2020-01-07T14:15:14",
    "updatedAt": "2020-01-07T14:15:14"
} as const satisfies SkillsTableRowConstraints,
{
    "table": "skills",
    "id": 16,
    "name": "Society",
    "ability": "INT",
    "description": "With Society understand the people and systems that make civilization run, and you know the historical events that make societies what they are today. Further, you can use that knowledge to navigate the complex physical, societal, and economic workings of settlements. Even if you’re untrained in Society, you can use to Recall Knowledge about local history, important personalities, legal institutions, societal structure, and humanoid cultures. The GM might allow Society to apply to other creatures that are major elements of society in your region, such as the draconic nobility in a kingdom of humans ruled by dragons. You may also use Society to Subsist in a settlement by finding shelter, scrounging, or begging for food.",
    "createdAt": "2020-01-07T14:17:57",
    "updatedAt": "2020-01-07T14:17:57"
} as const satisfies SkillsTableRowConstraints,
{
    "table": "skills",
    "id": 17,
    "name": "Stealth",
    "ability": "DEX",
    "description": "With Stealth you are skilled at avoiding detection, allowing you to slip past foes, hide, or conceal an item.",
    "createdAt": "2020-01-07T14:19:26",
    "updatedAt": "2020-01-07T14:19:26"
} as const satisfies SkillsTableRowConstraints,
{
    "table": "skills",
    "id": 18,
    "name": "Survival",
    "ability": "WIS",
    "description": "With Survival you are adept at living in the wilderness, foraging for food and building shelter, and with training you discover the secrets of tracking and hiding your trail. Even if you’re untrained, you can still use Survival to Subsist in the wild by foraging for food and building shelter.",
    "createdAt": "2020-01-07T14:20:48",
    "updatedAt": "2020-01-07T14:20:48"
} as const satisfies SkillsTableRowConstraints,
{
    "table": "skills",
    "id": 19,
    "name": "Thievery",
    "ability": "DEX",
    "description": "With Thievery you are adept in a particular set of skills favored by thieves and miscreants.",
    "createdAt": "2020-01-07T14:25:04",
    "updatedAt": "2020-01-07T14:25:04"
} as const satisfies SkillsTableRowConstraints,
 ] as const;

export const skills = hookupTableLookup(_skills);