import type { Expression } from '../wsc/types';
import { hookupTableLookup } from '../tables';

import { Rarity, ContentSrc, Version } from './shared_types';

export type BoostTwo = "ALL";

export interface BackgroundsTableRowConstraints {
  table: 'backgrounds';
  wsci?: Readonly<Expression[]>;
  id: number;
  name?: string;
  rarity: Rarity;
  description?: string;
  boostOne?: string;
  boostTwo?: BoostTwo;
  code?: readonly string[];
  isArchived: boolean;
  contentSrc: ContentSrc;
  homebrewID?: number;
  version?: Version;
  createdAt?: string;
  updatedAt?: string;
}

export type BackgroundsTable = typeof backgrounds;
export type BackgroundsTableRow = BackgroundsTable[number];
export type BackgroundID = BackgroundsTableRow['id'];

export const isBackgroundID = (id?: number): id is BackgroundID => !!id && !!backgrounds.byIdLax(id);
export const assertIsBackgroundID = (id?: number): asserts id is BackgroundID => { if (!isBackgroundID(id)) throw Error('Expected a BackgroundID; got ' + id); }

const _backgrounds = [
{
    "table": "backgrounds",
    "id": 16,
    "name": "Barrister",
    "rarity": "COMMON",
    "description": "__Piles of legal manuals, stern teachers, and experience in the courtroom have instructed you in legal matters. You’re capable of mounting a prosecution or defense in court, and you tend to keep abreast of local laws, as you never can tell when you might need to know them on short notice.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou’re trained in the Diplomacy skill and the Legal Lore skill. You gain the (feat: Group Impression) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE=Legal",
        "GIVE-FEAT-NAME=Group Impression"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T16:14:44",
    "updatedAt": "2020-06-19T16:14:44",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLore","Legal"],
        ["giveFeatName",["group impression"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 18,
    "name": "Acrobat",
    "rarity": "COMMON",
    "description": "__In a circus or on the streets, you earned your pay by performing as an acrobat. You might have turned to adventuring when the money dried up, or simply decided to put your skills to better use.__\nChoose two ability boosts. One must be to Strength or Dexterity, and one is a free ability boost.\nYou’re trained in the Acrobatics skill and the Circus Lore skill. You gain the (feat: Steady Balance) skill feat.",
    "boostOne": "STR,DEX",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Acrobatics:T",
        "GIVE-LORE=Circus",
        "GIVE-FEAT-NAME=Steady Balance"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T16:15:14",
    "updatedAt": "2020-06-19T16:15:14",
    "wsci": [
        ["giveProfIn","acrobatics","T"],
        ["giveLore","Circus"],
        ["giveFeatName",["steady balance"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 20,
    "name": "Artisan",
    "rarity": "COMMON",
    "description": "__As an apprentice, you practiced a particular form of building or crafting, developing specialized skill. You might have been a blacksmith’s apprentice toiling over the forge for countless hours, a young tailor sewing garments of all kinds, or a shipwright shaping the hulls of ships.__\nChoose two ability boosts. One must be to Strength or Intelligence, and one is a free ability boost.\nYou’re trained in the Crafting skill and the Guild Lore skill. You gain the (feat: Specialty Crafting) skill feat.",
    "boostOne": "STR,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-LORE=Guild",
        "GIVE-FEAT-NAME=Specialty Crafting"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T16:15:54",
    "updatedAt": "2020-06-19T16:15:54",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveLore","Guild"],
        ["giveFeatName",["specialty crafting"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 22,
    "name": "Barkeep",
    "rarity": "COMMON",
    "description": "__You have five specialties: hefting barrels, drinking, polishing steins, drinking, and drinking. You worked in a bar, where you learned how to hold your liquor and rowdily socialize.__\nChoose two ability boosts. One must be to Constitution or Charisma, and one is a free ability boost.\nYou’re trained in the Diplomacy skill and the Alcohol Lore skill. You gain the (feat: Hobnobber) skill feat.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE=Alcohol",
        "GIVE-FEAT-NAME=Hobnobber"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T16:16:36",
    "updatedAt": "2020-06-19T16:16:36",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLore","Alcohol"],
        ["giveFeatName",["hobnobber"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 23,
    "name": "Tinker",
    "rarity": "COMMON",
    "description": "__Creating all sorts of minor inventions scratches your itch for problem-solving. Your engineering skills take a particularly creative bent, and no one know what you’ll come up with next. It might be a genius device with tremendous potential... or it might explode.__\nChoose two ability boosts. One must be to Dexterity or Intelligence, and one is a free ability boost.\nYou’re trained in the Crafting skill and the Engineering Lore skill. You gain the (feat: Specialty Crafting) skill feat.",
    "boostOne": "DEX,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-LORE=Engineering",
        "GIVE-FEAT-NAME=Specialty Crafting"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T16:16:59",
    "updatedAt": "2020-06-19T16:16:59",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveLore","Engineering"],
        ["giveFeatName",["specialty crafting"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 24,
    "name": "Warrior",
    "rarity": "COMMON",
    "description": "__In your younger days, you waded into battle as a mercenary, a warrior defending a nomadic people, or a member of a militia or army. You might have wanted to break out from the regimented structure of these forces, or you could have always been as independent a warrior as you are now.__\nChoose two ability boosts. One must be to Strength or Constitution, and one is a free ability boost.\nYou’re trained in the Intimidation skill and the Warfare Lore skill. You gain the (feat: Intimidating Glare) skill feat.",
    "boostOne": "STR,CON",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-LORE=Warfare",
        "GIVE-FEAT-NAME=Intimidating Glare"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T16:17:20",
    "updatedAt": "2020-06-19T16:17:20",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveLore","Warfare"],
        ["giveFeatName",["intimidating glare"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 25,
    "name": "Bounty Hunter",
    "rarity": "COMMON",
    "description": "__Bringing in lawbreakers lined your pockets. Maybe you had an altruistic motive and sought to bring in criminals to make the streets safer, or maybe the coin was motivation enough. Your techniques for hunting down criminals transfer easily to the life of an adventurer.__\nChoose two ability boosts. One must be to Strength or Wisdom, and one is a free ability boost.\nYou’re trained in the Survival skill and the Legal Lore skill. You gain the (feat: Experienced Tracker) skill feat.",
    "boostOne": "STR,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE=Legal",
        "GIVE-FEAT-NAME=Experienced Tracker"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T16:20:09",
    "updatedAt": "2020-06-19T16:20:09",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLore","Legal"],
        ["giveFeatName",["experienced tracker"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 26,
    "name": "Charlatan",
    "rarity": "COMMON",
    "description": "__You traveled from place to place, peddling false fortunes and snake oil in one town, pretending to be royalty in exile to seduce a wealthy heir in the next. Becoming an adventurer might be your next big scam or an attempt to put your talents to use for a greater cause. Perhaps it’s a bit of both, as you realize that after pretending to be a hero, you’ve become the mask.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou’re trained in the Deception skill and the Underworld Lore skill. You gain the (feat: Charming Liar) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Deception:T",
        "GIVE-LORE=Underworld",
        "GIVE-FEAT-NAME=Charming Liar"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T16:21:24",
    "updatedAt": "2020-06-19T16:21:24",
    "wsci": [
        ["giveProfIn","deception","T"],
        ["giveLore","Underworld"],
        ["giveFeatName",["charming liar"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 27,
    "name": "Criminal",
    "rarity": "COMMON",
    "description": "__As an unscrupulous independent or as a member of an underworld organization, you lived a life of crime. You might have become an adventurer to seek redemption, to escape the law, or simply to get access to bigger and better loot.__\nChoose two ability boosts. One must be to Dexterity or Intelligence, and one is a free ability boost.\nYou’re trained in the Stealth skill and the Underworld Lore skill. You gain the (feat: Experienced Smuggler) skill feat.",
    "boostOne": "DEX,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Stealth:T",
        "GIVE-LORE=Underworld",
        "GIVE-FEAT-NAME=Experienced Smuggler"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T16:23:54",
    "updatedAt": "2020-06-19T16:23:54",
    "wsci": [
        ["giveProfIn","stealth","T"],
        ["giveLore","Underworld"],
        ["giveFeatName",["experienced smuggler"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 28,
    "name": "Detective",
    "rarity": "COMMON",
    "description": "__You solved crimes as a police inspector or took jobs for wealthy clients as a private investigator. You might have become an adventurer as part of your next big mystery, but likely it was due to the consequences or aftermath of a prior case.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in the Society skill and the Underworld Lore skill. You gain the (feat: Streetwise) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Underworld",
        "GIVE-FEAT-NAME=Streetwise"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T16:25:22",
    "updatedAt": "2020-06-19T16:25:22",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Underworld"],
        ["giveFeatName",["streetwise"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 30,
    "name": "Entertainer",
    "rarity": "COMMON",
    "description": "__Through an education in the arts or sheer dogged practice, you learned to entertain crowds. You might have been an actor, a dancer, a musician, a street magician, or any other sort of performer.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou’re trained in the Performance skill and the Theater Lore skill. You gain the (feat: Fascinating Performance) skill feat.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Performance:T",
        "GIVE-LORE=Theater",
        "GIVE-FEAT-NAME=Fascinating Performance"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T16:32:42",
    "updatedAt": "2020-06-19T16:32:42",
    "wsci": [
        ["giveProfIn","performance","T"],
        ["giveLore","Theater"],
        ["giveFeatName",["fascinating performance"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 31,
    "name": "Farmhand",
    "rarity": "COMMON",
    "description": "__With a strong back and an understanding of seasonal cycles, you tilled the land and tended crops. Your farm could have been razed by invaders, you could have lost the family tying you to the land, or you might have simply tired of the drudgery, but at some point you became an adventurer.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou’re trained in the Athletics skill and the Farming Lore skill. You gain the (feat: Assurance) skill feat with Athletics.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE=Farming",
        "GIVE-FEAT-NAME=Assurance"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T16:34:54",
    "updatedAt": "2020-06-19T16:34:54",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLore","Farming"],
        ["giveFeatName",["assurance"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 32,
    "name": "Field Medic",
    "rarity": "COMMON",
    "description": "__In the chaotic rush of battle, you learned to adapt to rapidly changing conditions as you administered to battle casualties. You patched up soldiers, guards, or other combatants, and learned a fair amount about the logistics of war.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou’re trained in the Medicine skill and the Warfare Lore skill. You gain the (feat: Battle Medicine) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Medicine:T",
        "GIVE-LORE=Warfare",
        "GIVE-FEAT-NAME=Battle Medicine"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T19:54:50",
    "updatedAt": "2020-06-19T19:54:50",
    "wsci": [
        ["giveProfIn","medicine","T"],
        ["giveLore","Warfare"],
        ["giveFeatName",["battle medicine"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 33,
    "name": "Fortune Teller",
    "rarity": "COMMON",
    "description": "__The strands of fate are clear to you, as you have learned many traditional forms by which laypeople can divine the future. You might have used these skills to guide your community, or simply to make money. But even the slightest peek into these practices connects you to the occult mysteries of the universe.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou’re trained in the Occultism skill and the Fortune-Telling Lore skill. You gain the (feat: Oddity Identification) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Occultism:T",
        "GIVE-LORE=Fortune-Telling",
        "GIVE-FEAT-NAME=Oddity Identification"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T19:56:16",
    "updatedAt": "2020-06-19T19:56:16",
    "wsci": [
        ["giveProfIn","occultism","T"],
        ["giveLore","Fortune-Telling"],
        ["giveFeatName",["oddity identification"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 34,
    "name": "Gambler",
    "rarity": "COMMON",
    "description": "__The thrill of the win drew you into games of chance. This might have been a lucrative sideline that paled in comparison to the real risks of adventuring, or you might have fallen on hard times due to your gambling and pursued adventuring as a way out of a spiral.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou’re trained in the Deception skill and the Games Lore skill. You gain the (feat: Lie to Me) skill feat.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Deception:T",
        "GIVE-LORE=Games",
        "GIVE-FEAT-NAME=Lie to Me"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T19:57:20",
    "updatedAt": "2020-06-19T19:57:20",
    "wsci": [
        ["giveProfIn","deception","T"],
        ["giveLore","Games"],
        ["giveFeatName",["lie to me"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 35,
    "name": "Gladiator",
    "rarity": "COMMON",
    "description": "__The bloody games of the arena taught you the art of combat. Before you attained true fame, you departed - or escaped - the arena to explore the world. Your skill at drawing both blood and a crowd’s attention pay off in a new adventuring life.__\nChoose two ability boosts. One must be to Strength or Charisma, and one is a free ability boost.\nYou’re trained in the Performance skill and the Gladiatorial Lore skill. You gain the (feat: Impressive Performance) skill feat.",
    "boostOne": "STR,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Performance:T",
        "GIVE-LORE=Gladiatorial",
        "GIVE-FEAT-NAME=Impressive Performance"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T19:58:57",
    "updatedAt": "2020-06-19T19:58:57",
    "wsci": [
        ["giveProfIn","performance","T"],
        ["giveLore","Gladiatorial"],
        ["giveFeatName",["impressive performance"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 37,
    "name": "Herbalist",
    "rarity": "COMMON",
    "description": "__As a formally trained apothecary or a rural practitioner of folk medicine, you learned the healing properties of various herbs. You’re adept at collecting the right natural cures in all sorts of environments and preparing them properly.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou’re trained in the Nature skill and the Herbalism Lore skill. You gain the (feat: Natural Medicine) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Nature:T",
        "GIVE-LORE=Herbalism",
        "GIVE-FEAT-NAME=Natural Medicine"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T20:10:02",
    "updatedAt": "2020-06-19T20:10:02",
    "wsci": [
        ["giveProfIn","nature","T"],
        ["giveLore","Herbalism"],
        ["giveFeatName",["natural medicine"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 39,
    "name": "Hunter",
    "rarity": "COMMON",
    "description": "__You stalked and took down animals and other creatures of the wild. Skinning animals, harvesting their flesh, and cooking them were also part of your training, all of which can give you useful resources while you adventure.__\nChoose two ability boosts. One must be to Dexterity or Wisdom, and one is a free ability boost.\nYou’re trained in the Survival skill and the Tanning Lore skill. You gain the (feat: Survey Wildlife) skill feat.",
    "boostOne": "DEX,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE=Tanning",
        "GIVE-FEAT-NAME=Survey Wildlife"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T20:16:56",
    "updatedAt": "2020-06-19T20:16:56",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLore","Tanning"],
        ["giveFeatName",["survey wildlife"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 40,
    "name": "Laborer",
    "rarity": "COMMON",
    "description": "__You’ve spent years performing arduous physical labor. It was a difficult life, but you somehow survived. You may have embraced adventuring as an easier method to make your way in the world, or you might adventure under someone else’s command.__\nChoose two ability boosts. One must be to Strength or Constitution, and one is a free ability boost.\nYou’re trained in the Athletics skill and the Labor Lore skill. You gain the (feat: Hefty Hauler) skill feat in Athletics.",
    "boostOne": "STR,CON",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE=Labor",
        "GIVE-FEAT-NAME=Hefty Hauler"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T20:18:48",
    "updatedAt": "2020-06-19T20:18:48",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLore","Labor"],
        ["giveFeatName",["hefty hauler"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 41,
    "name": "Martial Disciple - Acrobatics",
    "rarity": "COMMON",
    "description": "__You dedicated yourself to intense training and rigorous study to become a great warrior. The school you attended might have been a traditionalist monastery, an elite military academy, or the local branch of a prestigious mercenary organization.__\nChoose two ability boosts. One must be to Strength or Dexterity, and one is a free ability boost.\nYou’re trained in the Acrobatics skill and the Warfare Lore skill. You gain the (feat: Cat Fall) skill feat.",
    "boostOne": "STR,DEX",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Acrobatics:T",
        "GIVE-LORE=Warfare",
        "GIVE-FEAT-NAME=Cat Fall"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T20:22:18",
    "updatedAt": "2020-06-19T20:22:18",
    "wsci": [
        ["giveProfIn","acrobatics","T"],
        ["giveLore","Warfare"],
        ["giveFeatName",["cat fall"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 42,
    "name": "Martial Disciple - Athletics",
    "rarity": "COMMON",
    "description": "__You dedicated yourself to intense training and rigorous study to become a great warrior. The school you attended might have been a traditionalist monastery, an elite military academy, or the local branch of a prestigious mercenary organization.__\nChoose two ability boosts. One must be to Strength or Dexterity, and one is a free ability boost.\nYou’re trained in the Athletics skill and the Warfare Lore skill. You gain the (feat: Quick Jump) skill feat.",
    "boostOne": "STR,DEX",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE=Warfare",
        "GIVE-FEAT-NAME=Quick Jump"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T20:24:28",
    "updatedAt": "2020-06-19T20:24:28",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLore","Warfare"],
        ["giveFeatName",["quick jump"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 43,
    "name": "Merchant",
    "rarity": "COMMON",
    "description": "__In a dusty shop, market stall, or merchant caravan, you bartered wares for coin and trade goods. The skills you picked up still apply in the adventuring life, in which a good deal on a suit of armor could prevent your death.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou’re trained in the Diplomacy skill and the Mercantile Lore skill. You gain the (feat: Bargain Hunter) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE=Mercantile",
        "GIVE-FEAT-NAME=Bargain Hunter"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T20:27:22",
    "updatedAt": "2020-06-19T20:27:22",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLore","Mercantile"],
        ["giveFeatName",["bargain hunter"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 44,
    "name": "Miner",
    "rarity": "COMMON",
    "description": "__You earned a living wrenching precious minerals from the lightless depths of the earth. Adventuring might have seemed lucrative or glamorous compared to this backbreaking labor - and if you have to head back underground, this time you plan to do so armed with a real weapon instead of a miner’s pick.__\nChoose two ability boosts. One must be to Strength or Wisdom, and one is a free ability boost.\nYou’re trained in the Survival skill and the Mining Lore skill. You gain the (feat: Terrain Expertise) skill feat with underground terrain.",
    "boostOne": "STR,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE=Mining",
        "GIVE-FEAT-NAME=Terrain Expertise"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T20:31:04",
    "updatedAt": "2020-06-19T20:31:04",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLore","Mining"],
        ["giveFeatName",["terrain expertise"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 47,
    "name": "Prisoner",
    "rarity": "COMMON",
    "description": "__You might have been imprisoned for crimes (whether you were guilty or not), or enslaved for some part of your upbringing. In your adventuring life, you take full advantage of your newfound freedom.__\nChoose two ability boosts. One must be to Strength or Constitution, and one is a free ability boost.\nYou’re trained in the Stealth skill and the Underworld Lore skill. You gain the (feat: Experienced Smuggler) skill feat.",
    "boostOne": "STR,CON",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Stealth:T",
        "GIVE-LORE=Underworld",
        "GIVE-FEAT-NAME=Experienced Smuggler"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T20:43:16",
    "updatedAt": "2020-06-19T20:43:16",
    "wsci": [
        ["giveProfIn","stealth","T"],
        ["giveLore","Underworld"],
        ["giveFeatName",["experienced smuggler"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 48,
    "name": "Sailor",
    "rarity": "COMMON",
    "description": "__You heard the call of the sea from a young age. Perhaps you signed onto a merchant’s vessel, joined the navy, or even fell in with a crew of pirates and scalawags.__\nChoose two ability boosts. One must be to Strength or Dexterity, and one is a free ability boost.\nYou’re trained in the Athletics skill and the Sailing Lore skill. You gain the (feat: Underwater Marauder) skill feat.",
    "boostOne": "STR,DEX",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE=Sailing",
        "GIVE-FEAT-NAME=Underwater Marauder"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-06-19T20:45:32",
    "updatedAt": "2020-06-19T20:45:32",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLore","Sailing"],
        ["giveFeatName",["underwater marauder"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 54,
    "name": "Artist",
    "rarity": "COMMON",
    "description": "__Your art is your greatest passion, whatever form it takes. Adventuring might help you find inspiration, or simply be a way to survive until you become a world-famous artist.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou’re trained in the Crafting skill and the Art Lore skill. You gain the (feat: Specialty Crafting) skill feat.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-LORE=Art",
        "GIVE-FEAT-NAME=Specialty Crafting"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-07-23T22:59:04",
    "updatedAt": "2020-07-23T22:59:04",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveLore","Art"],
        ["giveFeatName",["specialty crafting"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 55,
    "name": "Lesser Scion",
    "rarity": "COMMON",
    "description": "__You are the youngest child in a noble house (in Cheliax, Isger, or Andoran) and stand to inherit nothing from your family. Although you have a minor title, it affords you no lands or wealth, but it has garnered you a small amount of respect and deference in your travels. When play begins, you are riding in a caravan bound for Almas, where a cousin has promised to allow you to stay with them for a month.__\nChoose two ability boosts. One must be to Dexterity or Intelligence, and one is a free ability boost.\nYou are trained in the Diplomacy skill and the Heraldry Lore skill. You gain the (feat: Hobnobber) skill feat.",
    "boostOne": "DEX,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE=Heraldry",
        "GIVE-FEAT-NAME=Hobnobber"
    ],
    "isArchived": true,
    "contentSrc": "FALL-OF-PLAGUE",
    "version": "1.0",
    "createdAt": "2020-07-23T23:01:40",
    "updatedAt": "2020-07-23T23:01:40",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLore","Heraldry"],
        ["giveFeatName",["hobnobber"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 56,
    "name": "Lost and Alone",
    "rarity": "COMMON",
    "description": "__You were training to become a knight in Lastwall when the Whispering Tyrant escaped his imprisonment and destroyed the nation. It was only by dumb luck that you are alive at all, but the memories of that fateful day haunt your dreams. When play begins, you have boarded a caravan heading toward a new town, having worn out your welcome at the taverns and inns of Elidir.__\nChoose two ability boosts. One must be to Strength or Charisma, and one is a free ability boost.\nYou are trained in the Intimidation skill and the Warfare Lore skill. You gain the (feat: Intimidating Glare) skill feat.",
    "boostOne": "STR,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-LORE=Warfare",
        "GIVE-FEAT-NAME=Intimidating Glare"
    ],
    "isArchived": true,
    "contentSrc": "FALL-OF-PLAGUE",
    "version": "1.0",
    "createdAt": "2020-07-23T23:04:02",
    "updatedAt": "2020-07-23T23:04:02",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveLore","Warfare"],
        ["giveFeatName",["intimidating glare"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 57,
    "name": "Missionary",
    "rarity": "COMMON",
    "description": "__You received training from clergy in a faraway temple, who sent you out into the world to spread the faith. Although you are relatively new at this, you are always on the lookout for new places in need of your deity’s teachings and guidance. When play begins, you are riding along in a caravan making your way through sparsely populated regions of Isger, spreading the news of your faith to those who will listen.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou are trained in the Diplomacy skill and Scribing Lore skill. You gain the (feat: Group Impression) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE=Scribing",
        "GIVE-FEAT-NAME=Group Impression"
    ],
    "isArchived": true,
    "contentSrc": "FALL-OF-PLAGUE",
    "version": "1.0",
    "createdAt": "2020-07-23T23:05:25",
    "updatedAt": "2020-07-23T23:05:25",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLore","Scribing"],
        ["giveFeatName",["group impression"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 58,
    "name": "Refugee - Plaguestone",
    "rarity": "COMMON",
    "description": "__The fighting around the Lake Encarthan region has forced many of the people residing there to flee from the violence. Although your home is gone, you have managed to survive and are making your way south in search of a better life. When play begins, you are riding along in a caravan taking you to what might be either a new home in Andoran or simply another waypoint in your journey.__\nChoose two ability boosts. One must be to Constitution or Intelligence, and one is a free ability boost.\nYou are trained in the Survival skill and the Hunting Lore skill. You gain the (feat: Forager) skill feat.",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE=Hunting",
        "GIVE-FEAT-NAME=Forager"
    ],
    "isArchived": true,
    "contentSrc": "FALL-OF-PLAGUE",
    "version": "1.0",
    "createdAt": "2020-07-23T23:07:39",
    "updatedAt": "2020-07-23T23:07:39",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLore","Hunting"],
        ["giveFeatName",["forager"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 59,
    "name": "Teamster",
    "rarity": "COMMON",
    "description": "__You left your home a few months back for a life on the road, working for one caravan company and then another, always on the lookout for a new job and a better life. Last week, you were hired by the Bort Bargith’s company in Elidir. You don’t know anyone from the company just yet, but most of its members seem to be honest merchants and traders.__\nChoose two ability boosts. One must be to Strength or Wisdom, and one is a free ability boost.\nYou are trained in the Nature skill and the Mercantile Lore skill. You gain the (feat: Train Animal) skill feat.",
    "boostOne": "STR,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Nature:T",
        "GIVE-LORE=Mercantile",
        "GIVE-FEAT-NAME=Train Animal"
    ],
    "isArchived": true,
    "contentSrc": "FALL-OF-PLAGUE",
    "version": "1.0",
    "createdAt": "2020-07-23T23:09:12",
    "updatedAt": "2020-07-23T23:09:12",
    "wsci": [
        ["giveProfIn","nature","T"],
        ["giveLore","Mercantile"],
        ["giveFeatName",["train animal"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 60,
    "name": "Dragon Scholar",
    "rarity": "COMMON",
    "description": "__Dragons have fascinated you for as long as you can remember. The potent power they possess, the long lives they lead, the ancient traditions they inspire – whatever the source of your interest, you’ve spent much of your life to this point immersed in all things draconic. These studies have bolstered your self-confidence and given you a wide range of methods and tactics you can use to impose your will on others.__\n__You’ve likely chosen to attend the Call for Heroes as a way to seek funds as an adventurer to afford more texts about dragons or perhaps out of a desire to encounter one in real life.__\nChoose two ability boosts. One must be Strength or Charisma, and one is a free ability boost.\nYou’re trained in the Intimidation skill and the Dragon Lore skill. You gain the (feat: Intimidating Glare) skill feat.",
    "boostOne": "STR,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-LORE=Dragon",
        "GIVE-FEAT-NAME=Intimidating Glare"
    ],
    "isArchived": true,
    "contentSrc": "AGE-OF-ASHES",
    "version": "1.0",
    "createdAt": "2020-07-24T20:53:09",
    "updatedAt": "2020-07-24T20:53:09",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveLore","Dragon"],
        ["giveFeatName",["intimidating glare"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 61,
    "name": "Emancipated",
    "rarity": "COMMON",
    "description": "__Until recently, the nation of Ravounel was part of the larger nation of Cheliax, where the church of Asmodeus is the law and slaves are traded freely in the open market. You had the poor fortune to be born into slavery, but the good luck to have grown up in the city of Kintargo. When Ravounel seceded from Cheliax, the leaders of this new nation freed all slaves, and you’ve wasted no time in exploring and establishing your new life. How and why you’ve come to Breachill is left to you to decide – but the fact that you feel empowered to determine your own destiny continues to drive you!__\n__The chance to become an adventurer has excited you for some time, as you hope to build a new life for yourself as a hero rewarded with fame and fortune. Joining the Call for Heroes is a great opportunity to find a group to adventure with.__\nChoose two ability boosts. One must be Dexterity or Charisma, and one is a free ability boost.\nYou’re trained in the Stealth skill and the Kintargo Lore skill. You gain the (feat: Terrain Stalker) skill feat.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Stealth:T",
        "GIVE-LORE=Kintargo",
        "GIVE-FEAT-NAME=Terrain Stalker"
    ],
    "isArchived": true,
    "contentSrc": "AGE-OF-ASHES",
    "version": "1.0",
    "createdAt": "2020-07-24T20:55:21",
    "updatedAt": "2020-07-24T20:55:21",
    "wsci": [
        ["giveProfIn","stealth","T"],
        ["giveLore","Kintargo"],
        ["giveFeatName",["terrain stalker"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 62,
    "name": "Haunting Vision",
    "rarity": "COMMON",
    "description": "__You’ve been haunted by frightening dreams of fires your whole life. This could be the result of a past, near-death experience with fire or it might have no obvious source that you know of. Recently, you stumbled upon an image, story, or other omen featuring the dragon god of destruction, Dahak, and you were struck with an unnerving sense of deja vu – you’ve come to think that the draconic deity might have something to do with your dreams, and as such have been studying all you can about the god. Your visions have bolstered your faith as well; even if you don’t worship a specific deity, you have a deep passion for matters of faith.__\n__Your latest dream, for the first time, had enough details to identify its setting – in this last dream, you saw the town of Breachill burning. You’ve decided to join the Call for Heroes hoping to save the town you fear might burn to the ground soon.__\nChoose two ability boosts. One must be Constitution or Wisdom, and one is a free ability boost.\nYou’re trained in the Religion skill and the Dahak Lore skill. You gain the (feat: Student of the Canon) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Religion:T",
        "GIVE-LORE=Dahak",
        "GIVE-FEAT-NAME=Student of the Canon"
    ],
    "isArchived": true,
    "contentSrc": "AGE-OF-ASHES",
    "version": "1.0",
    "createdAt": "2020-07-24T20:57:44",
    "updatedAt": "2020-07-24T20:57:44",
    "wsci": [
        ["giveProfIn","religion","T"],
        ["giveLore","Dahak"],
        ["giveFeatName",["student of the canon"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 63,
    "name": "Hellknight Historian",
    "rarity": "COMMON",
    "description": "__The various Hellknight Orders intrigue you, whether you seek to become one of their number yourself, wish to oppose their goals at every turn, or are merely inspired by or curious to learn more about them. You’ve heard that when the Order of the Nail abandoned Citadel Altaerein, they left behind the deed to the castle so anyone brave enough to explore the ruins and the defenses no doubt left behind would be rewarded with ownership of the abandoned fortress.__\n__You decided to join the Call for Heroes to hoping to gain an opportunity to explore Citadel Altaerein.__\nChoose two ability boosts. One must be Strength or Intelligence, and one is a free ability boost.\nYou’re trained in the Society skill and the Architecture Lore skill. You gain the (feat: Courtly Graces) skill feat.",
    "boostOne": "STR,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Architecture",
        "GIVE-FEAT-NAME=Courtly Graces"
    ],
    "isArchived": true,
    "contentSrc": "AGE-OF-ASHES",
    "version": "1.0",
    "createdAt": "2020-07-24T20:59:39",
    "updatedAt": "2020-07-24T20:59:39",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Architecture"],
        ["giveFeatName",["courtly graces"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 64,
    "name": "Local Scion",
    "rarity": "COMMON",
    "description": "__You’re from Breachill and have lived there most, if not all, of your life. You might be the son or daughter of a well-known local adventuring family, or a family with a storied tradition of military or other martial service. You likely also have some sort of skill with your hands, as the people of Breachill are very self-sufficient.__\n__The Call for Heroes is one of your hometown’s most iconic traditions, and you want to attend so you can prove your own merits to the council – beyond simply those of your family’s name.__\nChoose two ability boosts. One must be Constitution or Charisma, and one is a free ability boost.\nYou’re trained in the Crafting skill and the Breachill Lore skill. You gain the (feat: Specialty Crafting) skill feat.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-LORE=Breachill",
        "GIVE-FEAT-NAME=Specialty Crafting"
    ],
    "isArchived": true,
    "contentSrc": "AGE-OF-ASHES",
    "version": "1.0",
    "createdAt": "2020-07-24T21:01:38",
    "updatedAt": "2020-07-24T21:01:38",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveLore","Breachill"],
        ["giveFeatName",["specialty crafting"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 67,
    "name": "Returning Descendant",
    "rarity": "COMMON",
    "description": "__You aren’t from Breachill yourself – you might not even be from Isger or Avistan at all. You’ve lived a hard life, in any event. You have often had to make tough decisions, and have developed a knack for understanding how things work (and the best way to take them apart) that has helped you support yourself. Recently you discovered that an ancestor was from the town of Breachill and had a modest career as an adventurer. You can’t help but wonder if you would have had an easier life if you’d grown up there instead, and have decided to seek out this small town to learn more about it.__\n__You’ve decided to respond to the Call for Heroes to follow in your ancestor’s footsteps, either to honor their memory or accomplish the great deeds they did not.__\nChoose two ability boosts. One must be Dexterity or Wisdom, and one is a free ability boost.\nYou’re trained in the Thievery skill and the Engineering Lore skill. You gain the (feat: Pickpocket) skill feat.",
    "boostOne": "DEX,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Thievery:T",
        "GIVE-LORE=Engineering",
        "GIVE-FEAT-NAME=Pickpocket"
    ],
    "isArchived": true,
    "contentSrc": "AGE-OF-ASHES",
    "version": "1.0",
    "createdAt": "2020-07-24T21:12:47",
    "updatedAt": "2020-07-24T21:12:47",
    "wsci": [
        ["giveProfIn","thievery","T"],
        ["giveLore","Engineering"],
        ["giveFeatName",["pickpocket"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 68,
    "name": "Truth Seeker",
    "rarity": "COMMON",
    "description": "__Whether you are a local or from out of town, you’ve heard rumors that Breachill’s past contains a hidden secret. Perhaps you’ve heard strange rumors that the town’s founder, Lamond Breachton, was not the hero everyone touts, or maybe your grandmother heard stories from her own grandmother that contradict the town’s accepted narrative of its establishment. In the pursuit of the truth, you’ve learned to navigate the tangles of politics, and to never take anyone’s word at face value.__\n__You plan to join the Call for Heroes so that you can make yourself known to the council, or perhaps even ingratiating yourself to them, so you can seek the truth and eventually uncover Breachill’s secrets!__\nChoose two ability boosts. One must be Strength or Wisdom, and one is a free ability boost.\nYou’re trained in the Deception skill and the Politics Lore skill. You gain the (feat: Lie to Me) skill feat.",
    "boostOne": "STR,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Deception:T",
        "GIVE-LORE=Politics",
        "GIVE-FEAT-NAME=Lie to Me"
    ],
    "isArchived": true,
    "contentSrc": "AGE-OF-ASHES",
    "version": "1.0",
    "createdAt": "2020-07-24T21:14:30",
    "updatedAt": "2020-07-24T21:14:30",
    "wsci": [
        ["giveProfIn","deception","T"],
        ["giveLore","Politics"],
        ["giveFeatName",["lie to me"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 69,
    "name": "Animal Whisperer",
    "rarity": "COMMON",
    "description": "__You have always felt a connection to animals, and it was only a small leap to learn to train them. As you travel, you continuously encounter different creatures, befriending them along the way.__\nChoose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.\nYou’re trained in the Nature skill and a Lore skill related to one terrain inhabited by animals you like (such as Plains Lore or Swamp Lore). You gain the (feat: Train Animal) skill feat.",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Nature:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Train Animal"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-07-25T18:24:40",
    "updatedAt": "2020-07-25T18:24:40",
    "wsci": [
        ["giveProfIn","nature","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["train animal"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 70,
    "name": "Emissary",
    "rarity": "COMMON",
    "description": "__As a diplomat or messenger, you traveled to lands far and wide. Communicating with new people and forming alliances were your stock and trade.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou’re trained in the Society skill and a Lore skill related to one city you’ve visited often. You gain the (feat: Multilingual) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Multilingual"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-07-25T18:25:49",
    "updatedAt": "2020-07-25T18:25:49",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["multilingual"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 71,
    "name": "Guard",
    "rarity": "COMMON",
    "description": "__You served in the guard, out of either patriotism or the need for coin. Either way, you know how to get a difficult suspect to talk. However you left the guard, you might think of adventuring as a way to use your skills on a wider stage.__\nChoose two ability boosts. One must be to Strength or Charisma, and one is a free ability boost.\nYou’re trained in the Intimidation skill and the Legal Lore or Warfare Lore skill. You gain the (feat: Quick Coercion) skill feat.",
    "boostOne": "STR,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Quick Coercion"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-07-25T18:26:26",
    "updatedAt": "2020-07-25T18:26:26",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["quick coercion"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 72,
    "name": "Hermit",
    "rarity": "COMMON",
    "description": "__In an isolated place - like a cave, remote oasis, or secluded mansion - you lived a life of solitude. Adventuring might represent your first foray out among other people in some time. This might be a welcome reprieve from solitude or an unwanted change, but in either case, you’re likely still rough around the edges.__\nChoose two ability boosts. One must be to Constitution or Intelligence, and one is a free ability boost.\nYou’re trained in the Nature or Occultism skill, plus a Lore skill related to the terrain you lived in as a hermit (such as Cave Lore or Desert Lore). You gain the (feat: Dubious Knowledge) skill feat.",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Nature,Occultism]",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Dubious Knowledge"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-07-25T18:27:51",
    "updatedAt": "2020-07-25T18:27:51",
    "wsci": [
        ["giveSkill","T",["nature","occultism"]],
        ["giveLoreChoose"],
        ["giveFeatName",["dubious knowledge"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 73,
    "name": "Noble",
    "rarity": "COMMON",
    "description": "__To the common folk, the life of a noble seems one of idyllic luxury, but growing up as a noble or member of the aspiring gentry, you know the reality: a noble’s lot is obligation and intrigue. Whether you seek to escape your duties by adventuring or to better your station, you have traded silks and pageantry for an adventurer’s life.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou’re trained in the Society skill and your choice of the Genealogy Lore or Heraldry Lore skill. You gain the (feat: Courtly Graces) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Courtly Graces"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-07-25T18:28:36",
    "updatedAt": "2020-07-25T18:28:36",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["courtly graces"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 74,
    "name": "Nomad",
    "rarity": "COMMON",
    "description": "__Traveling far and wide, you picked up basic tactics for surviving on the road and in unknown lands, getting by with few supplies and even fewer comforts. As an adventurer, you travel still, often into even more dangerous places.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou’re trained in the Survival skill and a Lore skill related to one terrain you traveled in (such as Desert Lore or Swamp Lore). You gain the (feat: Assurance) skill feat with Survival.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Assurance"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-07-25T18:29:12",
    "updatedAt": "2020-07-25T18:29:12",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["assurance"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 75,
    "name": "Scholar",
    "rarity": "COMMON",
    "description": "__You have a knack for learning, and sequestered yourself from the outside world to learn all you could. You read about so many wondrous places and things in your books, and always dreamed about one day seeing the real things. Eventually, that curiosity led you to leave your studies and become an adventurer.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in your choice of the Arcana, Nature, Occultism, or Religion skill, and gain the (feat: Assurance) skill feat in your chosen skill. You’re also trained in the Academia Lore skill.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Arcana,Nature,Occultism,Religion]",
        "GIVE-LORE=Academia",
        "GIVE-FEAT-NAME=Assurance"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-07-25T18:30:30",
    "updatedAt": "2020-07-25T18:30:30",
    "wsci": [
        ["giveSkill","T",["arcana","nature","occultism","religion"]],
        ["giveLore","Academia"],
        ["giveFeatName",["assurance"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 76,
    "name": "Scout",
    "rarity": "COMMON",
    "description": "__You called the wilderness home as you found trails and guided travelers. Your wanderlust could have called you to the adventuring life, or perhaps you served as a scout for soldiers and found you liked battle.__\nChoose two ability boosts. One must be to Dexterity or Wisdom, and one is a free ability boost.\nYou’re trained in the Survival skill and a Lore skill related to one terrain you scouted in (such as Forest Lore or Cavern Lore). You gain the (feat: Forager) skill feat.",
    "boostOne": "DEX,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Forager"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-07-25T18:31:12",
    "updatedAt": "2020-07-25T18:31:12",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["forager"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 77,
    "name": "Street Urchin",
    "rarity": "COMMON",
    "description": "__You eked out a living by picking pockets on the streets of a major city, never knowing where you’d find your next meal. While some folk adventure for the glory, you do so to survive.__\nChoose two ability boosts. One must be to Dexterity or Constitution, and one is a free ability boost.\nYou’re trained in the Thievery skill and a Lore skill for the city you lived in as a street urchin. You gain the (feat: Pickpocket) skill feat.",
    "boostOne": "DEX,CON",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Thievery:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Pickpocket"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-07-25T18:31:44",
    "updatedAt": "2020-07-25T18:31:44",
    "wsci": [
        ["giveProfIn","thievery","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["pickpocket"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 78,
    "name": "Out-of-Towner",
    "rarity": "COMMON",
    "description": "__You’ve never been to Breachill, nor do you have roots in the town, but as chance has it you find yourself visiting. You might be here traveling with a friend, visiting an old acquaintance, or merely here to see a new part of the world. Before coming to town, though, you spent many years living with an ancestry other than your own, and your diverse childhood has left you with an open mind and a curious nature.__\n__You’re excited to meet new people and cultures, and answering the Call for Heroes seems to be an interesting way to do so.__\nChoose two ability boosts. One must be Constitution or Intelligence, and one is a free ability boost.\nYou’re trained in the Diplomacy skill and one of the following Lore skills thematically associated with the members of the ancestry you grew up with: Dwarf, Elf, Gnome, Goblin, or Halfling. You gain the (feat: Hobnobber) skill feat.",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Hobnobber"
    ],
    "isArchived": true,
    "contentSrc": "AGE-OF-ASHES",
    "version": "1.0",
    "createdAt": "2020-07-25T18:32:17",
    "updatedAt": "2020-07-25T18:32:17",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["hobnobber"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 79,
    "name": "Reputation Seeker",
    "rarity": "COMMON",
    "description": "__You’re likely from Breachill, but unlike the Local Scion, your family has no notable legacy in the area. You might not even have much of a family at all to call your own, and could be an orphan. You’ve seen so many people make names for themselves that you set out on your own and spent some time abroad in the jungles or deserts of Garund or in the upper reaches of the Darklands – regions that proved too dangerous to remain in for long on your own. You returned home with more caution and knowledge of the world beyond Breachill’s borders, but still determined to win fame.__\n__You’ve decided that joining an adventuring group would be the best way to secure aid in your quest to build your own reputation, and are attending the Call for Heroes to find such allies.__\nChoose two ability boosts. One must be Dexterity or Intelligence, and one is a free ability boost.\nYou’re trained in the Survival skill and the Darklands, Desert, or Jungle Lore skill. You gain the (feat: Terrain Expertise) skill feat (underground if you have Darklands Lore, desert if you have Desert Lore, or forest if you have Jungle Lore).",
    "boostOne": "DEX,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Terrain Expertise"
    ],
    "isArchived": true,
    "contentSrc": "AGE-OF-ASHES",
    "version": "1.0",
    "createdAt": "2020-07-25T18:32:52",
    "updatedAt": "2020-07-25T18:32:52",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["terrain expertise"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 80,
    "name": "Droskari Disciple",
    "rarity": "COMMON",
    "description": "__You grew up in the church of the Dark Smith, where you learned the value of hard work and achieving vocational mastery.__\nChoose two ability boosts. One must be to Constitution or Intelligence, and one is a free ability boost.\nYou gain the (feat: Skill Training) skill feat, and you’re trained in the Droskar Lore skill.",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-LORE=Droskar",
        "GIVE-FEAT-NAME=Skill Training"
    ],
    "isArchived": true,
    "contentSrc": "AGE-OF-ASHES",
    "version": "1.0",
    "createdAt": "2020-07-27T00:44:31",
    "updatedAt": "2020-07-27T00:44:31",
    "wsci": [
        ["giveLore","Droskar"],
        ["giveFeatName",["skill training"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 82,
    "name": "Hermean Heritor",
    "rarity": "RARE",
    "description": "~ Access: available after the events of Age of Ashes Adventure Path have occurred.\n__With the restrictions on Hermean citizenship lifted, you may have fled the city of Promise or have spent some of your childhood in the company of someone who did.__\nChoose two ability boosts. One must be in Constitution or Wisdom, and the other is a free ability boost.\nYou’re trained in the Society skill and the Legal Lore skill. You gain the (feat: Multilingual) skill feat or the (feat: Assurance) skill feat for Society.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Legal",
        "GIVE-SKILL-FEAT=1"
    ],
    "isArchived": true,
    "contentSrc": "AGE-OF-ASHES",
    "version": "1.0",
    "createdAt": "2020-07-27T07:14:28",
    "updatedAt": "2020-07-27T07:14:28",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Legal"],
        ["giveSkillFeat",["absolute",1],[]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 83,
    "name": "Legendary Parents",
    "rarity": "RARE",
    "description": "~ Access: available after the events of Age of Ashes Adventure Path have occurred.\n__One or more of your parents (either biological or adoptive) were heroes of the Age of Ashes Adventure Path. Others tend to treat you with a bit more respect, or perhaps fear your connections to people of great power.__\nChoose two ability boosts. One must be in Dexterity or Charisma, and the other is a free ability boost.\nYou’re trained in the Intimidation skill and the Genealogy Lore skill. You gain the (feat: Group Coercion) skill feat.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-LORE=Genealogy",
        "GIVE-FEAT-NAME=Group Coercion"
    ],
    "isArchived": true,
    "contentSrc": "AGE-OF-ASHES",
    "version": "1.0",
    "createdAt": "2020-07-27T07:17:00",
    "updatedAt": "2020-07-27T07:17:00",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveLore","Genealogy"],
        ["giveFeatName",["group coercion"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 84,
    "name": "Touched by Dahak",
    "rarity": "RARE",
    "description": "~ Access: available after the events of Age of Ashes Adventure Path have occurred.\n__As the manifestation of Dahak was destroyed, a shard of the dragon god’s wrathful nature infused you, resulting in a violent temper, strange apocalyptic dreams, an obsession with dragon hunting, or some other touch of his influence.__\nChoose two ability boosts. One must be in Strength or Charisma, and the other is a free ability boost.\nYou’re trained in the Athletics skill and the Dragon Lore skill. You gain the (feat: Titan Wrestler) skill feat.",
    "boostOne": "STR,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE=Dragon",
        "GIVE-FEAT-NAME=Titan Wrestler"
    ],
    "isArchived": true,
    "contentSrc": "AGE-OF-ASHES",
    "version": "1.0",
    "createdAt": "2020-07-27T07:19:33",
    "updatedAt": "2020-07-27T07:19:33",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLore","Dragon"],
        ["giveFeatName",["titan wrestler"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 86,
    "name": "Amnesiac",
    "rarity": "RARE",
    "description": "__Your background is… well… honestly, you can’t remember! You might have inklings deep within your mind, undercurrents of unusual emotions or unexpected responses to certain people or situations, but ultimately you don’t know who you once were. You might be adventuring specifically to help discover yourself. It’s up to you and the GM how to handle the truth of your character’s backstory. You could leave it to the GM so it’s a secret, work together with the GM, or even choose to leave it undecided until later. In any case, you and your GM should determine a few noteworthy details about your character or their belongings to get the first clues to your past.__\nYou gain three free ability boosts. You choose two, and the GM chooses the third based on their first inklings of your character’s possible history.",
    "boostTwo": "ALL",
    "code": [
        "GIVE-ABILITY-BOOST-MULTIPLE=3"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T22:21:56",
    "updatedAt": "2020-08-02T22:21:56",
    "wsci": [
        ["giveAbilityBoostMultiple",3]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 87,
    "name": "Bandit",
    "rarity": "COMMON",
    "description": "__Your past includes no small amount of rural banditry, robbing travelers on the road and scraping by. Whether your robbery was sanctioned by a local noble or you did so of your own accord, you eventually got caught up in the adventuring life. Now, adventure is your stock and trade, and years of camping and skirmishing have only helped.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou're trained in the Intimidation skill, and a Lore skill related to the terrain you worked in (such as Desert Lore or Plains Lore). You gain the (feat: Group Coercion) skill feat.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Group Coercion"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T22:25:00",
    "updatedAt": "2020-08-02T22:25:00",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["group coercion"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 88,
    "name": "Barber",
    "rarity": "COMMON",
    "description": "__Haircuts, dentistry, bloodletting, and surgery – if it takes a steady hand and a razor, you do it. You may have taken to the road to expand your skills, or to test yourself against a world that leaves your patients so battered and bruised.__\nChoose two ability boosts. One must be to Dexterity or Wisdom, and one is a free ability boost.\nYou're trained in the Medicine skill, and the Surgery Lore skill. You gain the (feat: Risky Surgery) skill feat.",
    "boostOne": "DEX,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Medicine:T",
        "GIVE-LORE=Surgery",
        "GIVE-FEAT-NAME=Risky Surgery"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T22:26:53",
    "updatedAt": "2020-08-02T22:26:53",
    "wsci": [
        ["giveProfIn","medicine","T"],
        ["giveLore","Surgery"],
        ["giveFeatName",["risky surgery"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 89,
    "name": "Blessed",
    "rarity": "RARE",
    "description": "__You have been blessed by a divinity. For an unknown reason, and irrespective of your actual beliefs, a deity has granted you a boon to use for good or ill. Your blessing grants wisdom and insight to aid you in your struggles. You may or may not even know the identity of the being who blessed you, and the blessing might come with a cost you discover later on.__\nChoose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.\nYou are trained in a Lore skill associated with the deity who blessed you (such as Shelyn Lore) if you know their identity, or else in a Lore skill of the GM's choice if you don't. Either you can cast (spell: guidance) as a divine innate spell at will, or you gain a similar blessing determined by the GM.",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-LORE-CHOOSE",
        "GIVE-INNATE-SPELL-NAME=Guidance:0:Divine:0"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T22:28:57",
    "updatedAt": "2020-08-02T22:28:57",
    "wsci": [
        ["giveLoreChoose"],
        ["giveInnateSpellName","guidance",0,"divine",0]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 90,
    "name": "Bookkeeper",
    "rarity": "COMMON",
    "description": "__You ran the numbers on a large farm, for a merchant’s endeavors, or with a major guild in the city. You kept track of expenses, payroll, profits, and anything else that had to do with money, for better or worse. If better, you might be adventuring to learn how others ply this trade. If worse, you may be fleeing from impending consequences, in the hope that no one finds you.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou're trained in the Society skill, and the Accounting Lore skill. You gain the (feat: Eye for Numbers) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Accounting",
        "GIVE-FEAT-NAME=Eye for Numbers"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T22:30:14",
    "updatedAt": "2020-08-02T22:30:14",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Accounting"],
        ["giveFeatName",["eye for numbers"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 91,
    "name": "Cook",
    "rarity": "COMMON",
    "description": "__You grew up in the kitchens of a tavern or other dining establishment and excelled there, becoming an exceptional cook. Baking, cooking, a little brewing on the side – you’ve spent lots of time out of sight. It’s about time you went out into the world to catch some sights for yourself.__\nChoose two ability boosts. One must be to Constitution or Intelligence, and one is a free ability boost.\nYou're trained in the Survival skill, and the Cooking Lore skill. You gain the (feat: Seasoned) skill feat.",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE=Cooking",
        "GIVE-FEAT-NAME=Seasoned"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T22:31:31",
    "updatedAt": "2020-08-02T22:31:31",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLore","Cooking"],
        ["giveFeatName",["seasoned"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 92,
    "name": "Courier",
    "rarity": "COMMON",
    "description": "__In your youth, you earned coin running messages for persons of wealth and influence, darting through crowded cobblestone streets. Your dogged commitment to deliver your message was good training for the life of an adventurer.__\nChoose two ability boosts. One must be to Dexterity or Intelligence, and one is a free ability boost.\nYou're trained in the Society skill, and a Lore skill for the city in which you were raised. You gain the (feat: Glean Contents) skill feat.",
    "boostOne": "DEX,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Glean Contents"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T22:33:34",
    "updatedAt": "2020-08-02T22:33:34",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["glean contents"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 93,
    "name": "Cultist",
    "rarity": "COMMON",
    "description": "__You were (or still are) a member of a cult whose rites may involve sacred dances to ensure a strong harvest or dire rituals that call upon dark powers. You might have taken up adventuring to further your cult’s aims, to initiate yourself into the world’s grander mysteries, or to flee unsavory practices or strictures.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou're trained in the Occultism skill, and a Lore skill related to your deity or cult. You gain the (feat: Schooled in Secrets) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Occultism:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Schooled in Secrets"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T22:34:57",
    "updatedAt": "2020-08-02T22:34:57",
    "wsci": [
        ["giveProfIn","occultism","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["schooled in secrets"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 94,
    "name": "Cursed",
    "rarity": "RARE",
    "description": "__You are the victim of a personal or hereditary curse. Through great effort and occult study, you have learned to fend off the curse's worst effects and, by extension, you can protect yourself against other harmful magic. However, the curse still hangs over you and sometimes manifests in dangerous ways.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou are trained in Occultism and Curse Lore. You gain the (feat: Warding Sign) reaction. You and the GM should determine the full effects of the curse, though you've staved most of them off for now. The GM determines the curse's lingering manifestations on you, which usually include at least a constant or very frequent thematic effect and occasional more dangerous effects.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Occultism:T",
        "GIVE-LORE=Curse",
        "GIVE-FEAT-NAME=Warding Sign",
        "GIVE-NOTES-FIELD=Use this area to keep information about your curse."
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T22:37:06",
    "updatedAt": "2020-08-02T22:37:06",
    "wsci": [
        ["giveProfIn","occultism","T"],
        ["giveLore","Curse"],
        ["giveFeatName",["warding sign"]],
        ["giveNotesField","Use this area to keep information about your curse."]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 95,
    "name": "Feral Child",
    "rarity": "RARE",
    "description": "__You spent your youth in the wilderness, living close to or perhaps raised by animals. You have a close, mystical connection with these animals and gained certain abilities from them, though this limited your well-roundedness in mental pursuits.__\nChoose one ability boost. It must be Strength, Dexterity, or Constitution.\nYou are trained in Nature and Survival. You gain low-light vision (or darkvision if you already had low-light vision), imprecise scent with a range of 30 feet, and the (feat: Forager) skill feat.",
    "boostTwo": "ALL",
    "code": [
        "GIVE-ABILITY-BOOST-SINGLE=STR,DEX,CON",
        "GIVE-PROF-IN=Nature:T",
        "GIVE-PROF-IN=Survival:T",
        "IF (HAS-VISION==Low-Light Vision) {GIVE-SENSE-NAME=Darkvision} ELSE {GIVE-SENSE-NAME=Low-Light Vision}",
        "GIVE-SENSE-NAME=Scent (imprecise 30 ft)",
        "GIVE-FEAT-NAME=Forager"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T22:48:59",
    "updatedAt": "2020-08-02T22:48:59",
    "wsci": [
        ["giveAbilityBoostSingle",["STR","DEX","CON"]],
        ["giveProfIn","nature","T"],
        ["giveProfIn","survival","T"],
        {"conditionals":[["hasVision","==","low-light vision"]],"consequent":["giveSenseName","darkvision",null],"alternate":["giveSenseName","low-light vision",null]},
        ["giveSenseName","scent",30],
        ["giveFeatName",["forager"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 96,
    "name": "Feybound",
    "rarity": "RARE",
    "description": "__You have spent time in the First World or another realm of the fey and aren't entirely the same person you were before. Perhaps you made a purchase at the legendary Witchmarket or partook deeply of fey food and wine. Whatever the case, willingly or inadvertently, you made a bargain with the fey, the benefits of which come at a price.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou are trained in Fey Lore and gain the (feat: Fey's Fortune) free action. You must follow some rule or limitation as part of your pact with the fey. If you violate the rule, you lose (feat: Fey's Fortune) until you receive the effects of a successful atone ritual using the Nature skill. The exact limitation is up to you and the GM, but the most common requirement is that you must fulfill a single request from any fey who knows your name.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-LORE=Fey",
        "GIVE-FEAT-NAME=Fey's Fortune"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T22:52:44",
    "updatedAt": "2020-08-02T22:52:44",
    "wsci": [
        ["giveLore","Fey"],
        ["giveFeatName",["fey's fortune"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 97,
    "name": "Haunted",
    "rarity": "RARE",
    "description": "__You are followed by a spirit or entity, either from childhood or since a traumatic or momentous event. You may have seen this entity. Others may have seen it as well. You have studied esoteric subjects trying to understand your situation, but this presence in your life remains a mystery. Whatever this entity is or wants, it influences your life in subtle ways, not always good. Sometimes the entity helps you, but at other times, its influence is malevolent or harmful. The entity is most likely to surface in stressful situations.__\nChoose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.\nYou are trained in Occultism and an additional skill in which the haunting entity is well-versed, determined by the GM. Any time you attempt a skill check for the entity's skill, the GM can offer you a +1 circumstance bonus to the check, as though the entity were (action: Aiding | Aid) you. If you accept but fail the check, you are frightened 2 (frightened 4 on a critical failure). The initial frightened value can't be reduced by effects that would reduce or prevent the condition (such as a fighter's bravery).",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Occultism:T",
        "GIVE-SKILL=T"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T22:57:36",
    "updatedAt": "2020-08-02T22:57:36",
    "wsci": [
        ["giveProfIn","occultism","T"],
        ["giveSkill","T",[]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 98,
    "name": "Insurgent",
    "rarity": "COMMON",
    "description": "__You were more than a rebel; you were a revolutionary, fighting for the promise of a new or better country. You may or may not still believe in the cause, or perhaps victory or exile has led you on this new journey to trumpet your glory... or to escape the consequences of your defeat.__\nChoose two ability boosts. One must be to Strength or Wisdom, and one is a free ability boost.\nYou're trained in the Deception skill, and the Warfare Lore skill. You gain the (feat: Lengthy Diversion) skill feat.",
    "boostOne": "STR,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Deception:T",
        "GIVE-LORE=Warfare",
        "GIVE-FEAT-NAME=Lengthy Diversion"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T22:59:27",
    "updatedAt": "2020-08-02T22:59:27",
    "wsci": [
        ["giveProfIn","deception","T"],
        ["giveLore","Warfare"],
        ["giveFeatName",["lengthy diversion"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 99,
    "name": "Outrider",
    "rarity": "COMMON",
    "description": "__In your youth, you galloped on horseback over vast prairies, serving as a vanguard for your settlement, an army, or another group. Seeing so many different lands built a thirst in you to adventure and explore the world instead of just racing past it.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou're trained in the Nature skill, and the Plains Lore skill. You gain the (feat: Express Rider) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Nature:T",
        "GIVE-LORE=Plains",
        "GIVE-FEAT-NAME=Express Rider"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T23:00:40",
    "updatedAt": "2020-08-02T23:00:40",
    "wsci": [
        ["giveProfIn","nature","T"],
        ["giveLore","Plains"],
        ["giveFeatName",["express rider"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 100,
    "name": "Pilgrim",
    "rarity": "COMMON",
    "description": "__In your youth, you made several pilgrimages to important shrines and holy sites. You might have been a mendicant friar, a seller of holy relics (real or fraudulent), or just a simple farmer following the dictates of your faith. Whatever the aims of your wanderings now, your faith still protects you on the road.__\nChoose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.\nYou're trained in the Religion skill, and a Lore skill for your patron deity. You gain the (feat: Pilgrim's Token) skill feat.",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Religion:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Pilgrim's Token"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T23:02:14",
    "updatedAt": "2020-08-02T23:02:14",
    "wsci": [
        ["giveProfIn","religion","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["pilgrim's token"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 101,
    "name": "Refugee",
    "rarity": "COMMON",
    "description": "__You come from a land very distant from the one you now find yourself in, driven by war, plague, or simply in the pursuit of opportunity. Regardless of your origin or the reason you left your home, you find yourself an outsider in this new land. Adventuring is a way to support yourself while offering hope to those who need it most.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou're trained in the Society skill, and a Lore skill related to the settlement you came from. You gain the (feat: Streetwise) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Streetwise"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T23:04:21",
    "updatedAt": "2020-08-02T23:04:21",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["streetwise"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 102,
    "name": "Returned",
    "rarity": "RARE",
    "description": "__You died and miraculously returned with knowledge of the realms beyond death and a stronger link to life. Some dead and undead souls might feel a strange, instinctual kinship with you.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou gain the (feat: Diehard) feat and the (feat: Additional Lore) feat for Boneyard Lore.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-FEAT-NAME=Diehard",
        "GIVE-FEAT-NAME=Additional Lore"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T23:06:50",
    "updatedAt": "2020-08-02T23:06:50",
    "wsci": [
        ["giveFeatName",["diehard"]],
        ["giveFeatName",["additional lore"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 103,
    "name": "Root Worker",
    "rarity": "COMMON",
    "description": "__Some ailments can’t be cured by herbs alone. You learned ritual remedies as well, calling on nature spirits to soothe aches and ward off the evil eye. Taking up with adventurers has given you company on the road, as well as protection from those who would brand you a fake – or worse.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou're trained in the Occultism skill, and the Herbalism Lore skill. You gain the (feat: Root Magic) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Occultism:T",
        "GIVE-LORE=Herbalism",
        "GIVE-FEAT-NAME=Root Magic"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T23:12:20",
    "updatedAt": "2020-08-02T23:12:20",
    "wsci": [
        ["giveProfIn","occultism","T"],
        ["giveLore","Herbalism"],
        ["giveFeatName",["root magic"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 104,
    "name": "Royalty",
    "rarity": "RARE",
    "description": "__You are a prominent member of a royal family. You have taken up the life of an adventurer – perhaps you're a deposed queen hoping to regain her throne, a prince seeking a more exciting life, or a princess on a secret mission.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou are trained in Society. You gain the (feat: Courtly Graces) skill feat and can influence commoners in your family's territory, as well as nobility anywhere. If you later gain the (feat: Connections) skill feat, you automatically have common and noble connections within any community in your royal family's territory and have noble connections in large communities outside your territory.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-FEAT-NAME=Courtly Graces"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T23:16:57",
    "updatedAt": "2020-08-02T23:16:57",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveFeatName",["courtly graces"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 105,
    "name": "Scavenger",
    "rarity": "COMMON",
    "description": "__You’ve made a living sorting through the things society throws away. You might have scavenged simply to survive, or plied a trade as a ragpicker, dung carter, or the like. While you’ve left that life behind, you still keep one eye on the ground out of habit.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou're trained in the Survival skill, and a Lore skill for the settlement you grew up scavenging in. You gain the (feat: Forager) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Forager"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T23:18:59",
    "updatedAt": "2020-08-02T23:18:59",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["forager"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 106,
    "name": "Servant",
    "rarity": "COMMON",
    "description": "__You held a role of servitude, waiting on nobles and engendering their trust as one of the confidantes of the household. You might have walked away on good terms, or perhaps you know dangerous secrets about your former masters. Regardless, you’re adventuring for a change and finding that in this new role, the skills you’ve learned now serve you.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou're trained in the Society skill, and the Labor Lore skill. You gain the (feat: Read Lips) skill feat.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Labor",
        "GIVE-FEAT-NAME=Read Lips"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T23:20:20",
    "updatedAt": "2020-08-02T23:20:20",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Labor"],
        ["giveFeatName",["read lips"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 107,
    "name": "Squire",
    "rarity": "COMMON",
    "description": "__You trained at the feet of a knight, maintaining their gear and supporting them at tourneys and in battle. Now you search for a challenge that will prove you worthy of full knighthood, or you've spurned pomp and ceremony to test yourself in honest, albeit less formal, combat.__\nChoose two ability boosts. One must be to Strength or Constitution, and one is a free ability boost.\nYou're trained in the Athletics skill and your choice of the Heraldry Lore or Warfare Lore skill. You gain the (feat: Armor Assist) skill feat.",
    "boostOne": "STR,CON",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Armor Assist"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T23:22:08",
    "updatedAt": "2020-08-02T23:22:08",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["armor assist"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 108,
    "name": "Tax Collector",
    "rarity": "COMMON",
    "description": "__Reviled but required, you were sent when taxes were due. Performing your job might have required travel and persuasion, or perhaps you were responsible for collecting taxes on trade. Either way, it sometimes meant dirty hands, and adventuring seemed the next logical step to you.__\nChoose two ability boosts. One must be to Strength or Charisma, and one is a free ability boost.\nYou're trained in the Intimidation skill, and a Lore skill for the settlement that employed you. You gain the (feat: Quick Coercion) skill feat.",
    "boostOne": "STR,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Quick Coercion"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T23:23:59",
    "updatedAt": "2020-08-02T23:23:59",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["quick coercion"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 109,
    "name": "Teacher",
    "rarity": "COMMON",
    "description": "__You are incredibly knowledgeable, skilled, and perhaps even trained to teach children and adults about the world and its wonders. From books to classes, you’re committed to imparting knowledge to all. Not everything can be taught or learned from a book, though, so you’ve become an adventurer to learn subjects more directly and bring that wisdom back to your students.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou're trained in your choice of either the Performance or Society skill, as well as the Academia Lore skill. You gain the (feat: Experienced Professional) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Performance,Society]",
        "GIVE-LORE=Academia",
        "GIVE-FEAT-NAME=Experienced Professional"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T23:25:40",
    "updatedAt": "2020-08-02T23:25:40",
    "wsci": [
        ["giveSkill","T",["performance","society"]],
        ["giveLore","Academia"],
        ["giveFeatName",["experienced professional"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 110,
    "name": "Ward",
    "rarity": "COMMON",
    "description": "__When you were young, you became the ward of another house – boarded, fed, and educated, but never quite a part of the family. Perhaps you had to tend to their needs in return for feeding and raising you, or perhaps you were provided for but disregarded. Now, adventuring is your chance to grow and roam free.__\nChoose two ability boosts. One must be to Constitution or Charisma, and one is a free ability boost.\nYou're trained in the Performance skill, and the Genealogy Lore skill. You gain the (feat: Fascinating Performance) skill feat.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Performance:T",
        "GIVE-LORE=Genealogy",
        "GIVE-FEAT-NAME=Fascinating Performance"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T23:27:55",
    "updatedAt": "2020-08-02T23:27:55",
    "wsci": [
        ["giveProfIn","performance","T"],
        ["giveLore","Genealogy"],
        ["giveFeatName",["fascinating performance"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 111,
    "name": "Aiudara Seeker",
    "rarity": "RARE",
    "description": "~ Access: available after the events of Age of Ashes Adventure Path have occurred.\n__The aiudara of Alseta’s Ring have become more well known, and you are interested in learning more about them.__\nChoose two ability boosts. One must be in Intelligence or Wisdom, and the other is a free ability boost.\nYou’re trained in the Arcana skill and the Portal Lore skill. You gain the (feat: Quick Identification) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Arcana:T",
        "GIVE-LORE=Portal",
        "GIVE-FEAT-NAME=Quick Identification"
    ],
    "isArchived": true,
    "contentSrc": "AGE-OF-ASHES",
    "version": "1.0",
    "createdAt": "2020-08-03T00:45:10",
    "updatedAt": "2020-08-03T00:45:10",
    "wsci": [
        ["giveProfIn","arcana","T"],
        ["giveLore","Portal"],
        ["giveFeatName",["quick identification"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 113,
    "name": "Raised by Belief",
    "rarity": "COMMON",
    "description": "__Whether in a monastery, a religious household, or just as part of your everyday life, your upbringing was steeped in the traditions of a faith or philosophy. You might remain committed or you may have turned from your childhood creed, but your skills are still founded in your devotion.__\nChoose two ability boosts. One boost must be to an ability specified in the Divine Ability entry for your deity, and one is a free ability boost.\nYou’re trained in your deity’s associated skill, and you gain (feat: Assurance) with that skill. You gain a Lore skill with a subcategory associated with your deity (Abadar Lore, for instance).",
    "boostTwo": "ALL",
    "code": [
        "GIVE-ABILITY-BOOST-MULTIPLE=2",
        "GIVE-SKILL=T",
        "GIVE-FEAT-NAME=Assurance",
        "GIVE-LORE-CHOOSE"
    ],
    "isArchived": true,
    "contentSrc": "LOST-GOD-MAGIC",
    "version": "1.0",
    "createdAt": "2020-08-24T09:06:18",
    "updatedAt": "2020-08-24T09:06:18",
    "wsci": [
        ["giveAbilityBoostMultiple",2],
        ["giveSkill","T",[]],
        ["giveFeatName",["assurance"]],
        ["giveLoreChoose"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 116,
    "name": "Animal Wrangler - Nature",
    "rarity": "COMMON",
    "description": "__You have a long history of working with large circus animals for the Celestial Menagerie, such as performing in an animal act, jostling animals back into their cages, or even sweeping dung out of squalid pens. Mistress Dusklight’s ongoing mistreatment of her animals compelled you to quit, and you now strive to ensure animals aren’t abused.__\nChoose two ability boosts. One must be to Strength or Wisdom, and one is a free ability boost.\nYou’re trained in the Nature skill and you gain the (feat: Train Animal) skill feat. You are also trained in a Lore skill related to a particular kind of common animal (such as Equine Lore, Feline Lore, or Pachyderm Lore).",
    "boostOne": "STR,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Nature:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Train Animal"
    ],
    "isArchived": true,
    "contentSrc": "EXTINCTION-CURSE",
    "version": "1.0",
    "createdAt": "2020-09-03T21:10:51",
    "updatedAt": "2020-09-03T21:10:51",
    "wsci": [
        ["giveProfIn","nature","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["train animal"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 117,
    "name": "Animal Wrangler - Athletics",
    "rarity": "COMMON",
    "description": "__You have a long history of working with large circus animals for the Celestial Menagerie, such as performing in an animal act, jostling animals back into their cages, or even sweeping dung out of squalid pens. Mistress Dusklight’s ongoing mistreatment of her animals compelled you to quit, and you now strive to ensure animals aren’t abused.__\nChoose two ability boosts. One must be to Strength or Wisdom, and one is a free ability boost.\nYou’re trained in the Athletics skill and you gain the (feat: Titan Wrestler) skill feat. You are also trained in a Lore skill related to a particular kind of common animal (such as Equine Lore, Feline Lore, or Pachyderm Lore).",
    "boostOne": "STR,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Titan Wrestler"
    ],
    "isArchived": true,
    "contentSrc": "EXTINCTION-CURSE",
    "version": "1.0",
    "createdAt": "2020-09-03T21:10:57",
    "updatedAt": "2020-09-03T21:10:57",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["titan wrestler"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 118,
    "name": "Barker",
    "rarity": "COMMON",
    "description": "__You’re skilled at shouting to catch and keep the attention of passersby. A few well-timed and forcefully spoken words not only get people to notice you but also engage them to respond to you. You may have previously worked as a crier or in a more formal barker capacity with Mistress Dusklight’s Celestial Menagerie. Either way, your ability to bully a crowd is impressive.__\nChoose two ability boosts. One must be to Constitution or Charisma, and one is a free ability boost.\nYou’re trained in the Intimidation skill and the Crowd Lore skill. You gain the (feat: Group Coercion) skill feat.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-LORE=Crowd",
        "GIVE-FEAT-NAME=Group Coercion"
    ],
    "isArchived": true,
    "contentSrc": "EXTINCTION-CURSE",
    "version": "1.0",
    "createdAt": "2020-09-03T21:12:50",
    "updatedAt": "2020-09-03T21:12:50",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveLore","Crowd"],
        ["giveFeatName",["group coercion"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 120,
    "name": "Blow-In - Thievery",
    "rarity": "COMMON",
    "description": "__You never expected to join a circus, but you were looking for a good place to lie low for reasons of your own. The Circus of Wayward Wonders came together with several different workers and performers a few months ago. Many came from a circus in Escadar called the Celestial Menagerie, but not all of them. It was easy to slip in among the roustabouts. Although you’d planned to move on quickly, the circus folk have adopted you as one of their own, and they don’t ask questions about your past.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou’re trained in the Thievery skill and the Underworld Lore skill. You gain the (feat: Subtle Theft) skill feat.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Thievery:T",
        "GIVE-LORE=Underworld",
        "GIVE-FEAT-NAME=Subtle Theft"
    ],
    "isArchived": true,
    "contentSrc": "EXTINCTION-CURSE",
    "version": "1.0",
    "createdAt": "2020-09-03T21:16:28",
    "updatedAt": "2020-09-03T21:16:28",
    "wsci": [
        ["giveProfIn","thievery","T"],
        ["giveLore","Underworld"],
        ["giveFeatName",["subtle theft"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 121,
    "name": "Blow-In - Deception",
    "rarity": "COMMON",
    "description": "__You never expected to join a circus, but you were looking for a good place to lie low for reasons of your own. The Circus of Wayward Wonders came together with several different workers and performers a few months ago. Many came from a circus in Escadar called the Celestial Menagerie, but not all of them. It was easy to slip in among the roustabouts. Although you’d planned to move on quickly, the circus folk have adopted you as one of their own, and they don’t ask questions about your past.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou’re trained in the Deception skill and the Underworld Lore skill. You gain the (feat: Lengthy Diversion) skill feat.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Deception:T",
        "GIVE-LORE=Underworld",
        "GIVE-FEAT-NAME=Lengthy Diversion"
    ],
    "isArchived": true,
    "contentSrc": "EXTINCTION-CURSE",
    "version": "1.0",
    "createdAt": "2020-09-03T21:16:45",
    "updatedAt": "2020-09-03T21:16:45",
    "wsci": [
        ["giveProfIn","deception","T"],
        ["giveLore","Underworld"],
        ["giveFeatName",["lengthy diversion"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 122,
    "name": "Butcher",
    "rarity": "COMMON",
    "description": "__You’ve spent uncounted hours walking up and down crowded and noisy circus stands, inventing innovative means to sell refreshments, food, and novelties at inflated prices. (You might know very little about slaughtering animals; “butcher” is a circus slang term for a vendor.) The Celestial Menagerie constantly pushed you to figure out how to sell increasingly shoddy toys to children and how to conceal the taste of spoiled treats that should have been discarded days earlier. You peddled disappointment and hated it, so you left to seek a new line of work – although you’re not yet willing to leave the circus life altogether.__\nChoose two ability boosts. One must be to Constitution or Intelligence, and one is a free ability boost.\nYou’re trained in the Society skill and the Mercantile Lore skill. You gain the (feat: Read Lips) skill feat.",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Mercantile",
        "GIVE-FEAT-NAME=Read Lips"
    ],
    "isArchived": true,
    "contentSrc": "EXTINCTION-CURSE",
    "version": "1.0",
    "createdAt": "2020-09-03T21:19:24",
    "updatedAt": "2020-09-03T21:19:24",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Mercantile"],
        ["giveFeatName",["read lips"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 123,
    "name": "Circus Born",
    "rarity": "COMMON",
    "description": "__The itinerant life of a traveling circus performer is nothing new to you; you were born and raised in the circus. You’ve seen more acts than you can count and grew up hearing the tall tales of circus performers while gathered around their campfires. You’ve experienced the thrill of captivating a crowd ever since you were young. You may have tried a few times to settle down, but the lure of the open road and the glamor of the big top always called you back.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou’re trained in the Performance skill and the Circus Lore skill. You gain the (feat: Experienced Professional) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Performance:T",
        "GIVE-LORE=Circus",
        "GIVE-FEAT-NAME=Experienced Professional"
    ],
    "isArchived": true,
    "contentSrc": "EXTINCTION-CURSE",
    "version": "1.0",
    "createdAt": "2020-09-03T21:20:57",
    "updatedAt": "2020-09-03T21:20:57",
    "wsci": [
        ["giveProfIn","performance","T"],
        ["giveLore","Circus"],
        ["giveFeatName",["experienced professional"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 124,
    "name": "Clown",
    "rarity": "COMMON",
    "description": "__Although you’ve spent time in greasepaint and colorful clothing to amuse crowds, your skills with buffoonery and physical comedy are exceptional whether or not you’re in costume. In the employ of Mistress Dusklight’s Celestial Menagerie, you spent too many routines distracting an audience from an ill-timed accident or evidence of abused animals or performers. You’ve had enough of that, and the Celestial Menagerie isn’t your home any longer.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou’re trained in the Performance skill and the Clown Lore skill. You gain the (feat: Virtuosic Performer) (comedy) skill feat.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Performance:T",
        "GIVE-LORE=Clown",
        "GIVE-FEAT-NAME=Virtuosic Performer"
    ],
    "isArchived": true,
    "contentSrc": "EXTINCTION-CURSE",
    "version": "1.0",
    "createdAt": "2020-09-03T21:26:44",
    "updatedAt": "2020-09-03T21:26:44",
    "wsci": [
        ["giveProfIn","performance","T"],
        ["giveLore","Clown"],
        ["giveFeatName",["virtuosic performer"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 125,
    "name": "Dreamer of the Verdant Moon",
    "rarity": "UNCOMMON",
    "description": "__You spent your early days in the aftermath of one of the great ravenings. You survived thanks to your resourcefulness and perhaps your patron’s favor and were blessed with skills and drive thereafter, but you must always hold to his standards, lest the hunger from the depths seek you out once again.__\nChoose two ability boosts. One must be to Strength or Wisdom, and one is a free ability boost.\nYou gain the (feat: Ravening’s Desperation) skill feat, and you’re trained in the Survival and Zevgavizeb Lore skills.",
    "boostOne": "STR,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE=Zevgavizeb",
        "GIVE-FEAT-NAME=Ravening's Desperation"
    ],
    "isArchived": true,
    "contentSrc": "EXTINCTION-CURSE",
    "version": "1.0",
    "createdAt": "2020-09-03T21:30:42",
    "updatedAt": "2020-09-03T21:30:42",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLore","Zevgavizeb"],
        ["giveFeatName",["ravening's desperation"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 126,
    "name": "Mystic Seer",
    "rarity": "COMMON",
    "description": "__You delight crowds by reading minds, telling futures, and contacting spirits. Although much of your work is misdirection and showmanship, your cons have inadvertently awakened a genuine awareness of magic in your mind. This new sense is both thrilling and frightening, and you hope that you can hone it further in the Circus of Wayward Wonders.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in the Arcana skill and the Scam Lore skill. You gain the (feat: Arcane Sense) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Arcana:T",
        "GIVE-LORE=Scam",
        "GIVE-FEAT-NAME=Arcane Sense"
    ],
    "isArchived": true,
    "contentSrc": "EXTINCTION-CURSE",
    "version": "1.0",
    "createdAt": "2020-09-03T21:34:52",
    "updatedAt": "2020-09-03T21:34:52",
    "wsci": [
        ["giveProfIn","arcana","T"],
        ["giveLore","Scam"],
        ["giveFeatName",["arcane sense"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 127,
    "name": "Rigger",
    "rarity": "COMMON",
    "description": "__You’ve worked as a roustabout to erect tents and set up rigging for acrobatic performances; you’ve sometimes even aided aerialists and acrobats in their death-defying training. Even though your work is often done before the crowds arrive, you know your skills contribute to the success and safety of the circus. Mistress Dusklight treats her roustabouts as little more than slaves, and you’ve resolved to join a company where your expertise is appreciated.__\nChoose two ability boosts. One must be to Strength or Dexterity, and one is a free ability boost.\nYou’re trained in the Athletics skill and the Circus Lore skill. You gain the (feat: Combat Climber) skill feat.",
    "boostOne": "STR,DEX",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE=Circus",
        "GIVE-FEAT-NAME=Combat Climber"
    ],
    "isArchived": true,
    "contentSrc": "EXTINCTION-CURSE",
    "version": "1.0",
    "createdAt": "2020-09-03T21:36:16",
    "updatedAt": "2020-09-03T21:36:16",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLore","Circus"],
        ["giveFeatName",["combat climber"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 128,
    "name": "Aerialist",
    "rarity": "COMMON",
    "description": "__Experienced with trapezes, aerial silks, and hoops, your skill is in performing death-defying stunts high above the ground. The Celestial Menagerie skimped on safety devices such as nets and quality ropes, so you also learned to take a fall better than most. After a harrowing near-death experience involving a cracked trapeze bar, you decided to take your expertise elsewhere.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou’re trained in the Acrobatics skill and the Rope Lore skill. You gain the (feat: Cat Fall) skill feat.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Acrobatics:T",
        "GIVE-LORE=Rope",
        "GIVE-FEAT-NAME=Cat Fall"
    ],
    "isArchived": true,
    "contentSrc": "EXTINCTION-CURSE",
    "version": "1.0",
    "createdAt": "2020-09-03T21:36:23",
    "updatedAt": "2020-09-03T21:36:23",
    "wsci": [
        ["giveProfIn","acrobatics","T"],
        ["giveLore","Rope"],
        ["giveFeatName",["cat fall"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 130,
    "name": "Aspiring Free Captain",
    "rarity": "COMMON",
    "description": "__You seek to join the Free Captains of the Shackles and have learned everything you need to know about sailing and bossing people around. Now you just need a crew and a ship.__\nChoose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.\nYou’re trained in the Intimidation skill and the Sailing Lore skill. You gain the (feat: Group Coercion) skill feat.",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-LORE=Sailing",
        "GIVE-FEAT-NAME=Group Coercion"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T20:39:05",
    "updatedAt": "2020-10-14T20:39:05",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveLore","Sailing"],
        ["giveFeatName",["group coercion"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 131,
    "name": "Aspiring River Monarch",
    "rarity": "COMMON",
    "description": "__New realms rise constantly in the River Kingdoms, and you intend to lead one of them. Making your reign last, however, will require both strength and grace.__\nChoose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.\nYou’re trained in the Society skill and the Politics Lore skill. You gain the (feat: Courtly Graces) skill feat.",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Politics",
        "GIVE-FEAT-NAME=Courtly Graces"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T20:40:35",
    "updatedAt": "2020-10-14T20:40:35",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Politics"],
        ["giveFeatName",["courtly graces"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 132,
    "name": "Atteran Rancher",
    "rarity": "COMMON",
    "description": "__You grew up breeding and training the famous horses of the Atteran Ranches in northern Nidal. You may even be sympathetic to the Desnan dissidents who hide there from the Umbral Court.__\nChoose two ability boosts. One must be to Strength or Dexterity, and one is a free ability boost.\nYou’re trained in the Nature skill and the Animal Lore skill. You gain the (feat: Train Animal) skill feat.",
    "boostOne": "STR,DEX",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Nature:T",
        "GIVE-LORE=Animal",
        "GIVE-FEAT-NAME=Train Animal"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T20:42:04",
    "updatedAt": "2020-10-14T20:42:04",
    "wsci": [
        ["giveProfIn","nature","T"],
        ["giveLore","Animal"],
        ["giveFeatName",["train animal"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 133,
    "name": "Bekyar Restorer",
    "rarity": "COMMON",
    "description": "__Though many Bekyars worship demons, you seek to pave a different path for yourself and your kindred, while also attempting to change other Mwangi’s treatment of your culture.__\nChoose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.\nYou’re trained in the Diplomacy skill and the Abyss Lore skill. You gain the (feat: Group Impression) skill feat.",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE=Abyss",
        "GIVE-FEAT-NAME=Group Impression"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T20:43:37",
    "updatedAt": "2020-10-14T20:43:37",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLore","Abyss"],
        ["giveFeatName",["group impression"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 134,
    "name": "Belkzen Slayer",
    "rarity": "COMMON",
    "description": "__You are a fearsome warrior from the Hold of Belkzen, and your clan counts on you for support, counsel, and defense. With the rising threat of the Whispering Tyrant threatening the safety of your home, you must not let your people down.__\nChoose two ability boosts. One must be to Strength or Charisma, and one is a free ability boost.\nYou’re trained in the Intimidation skill and the Orc Lore skill. You gain the (feat: Intimidating Glare) skill feat.",
    "boostOne": "STR,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-LORE=Orc",
        "GIVE-FEAT-NAME=Intimidating Glare"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T20:45:25",
    "updatedAt": "2020-10-14T20:45:25",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveLore","Orc"],
        ["giveFeatName",["intimidating glare"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 135,
    "name": "Bellflower Agent",
    "rarity": "COMMON",
    "description": "__You joined a secret society dedicated to freeing halfling slaves, most likely from the cruelty of Chelish reign. You know how to smuggle people in and out of countries.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou’re trained in the Stealth skill and the Underworld Lore skill. You gain the (feat: Experienced Smuggler) skill feat.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Stealth:T",
        "GIVE-LORE=Underworld",
        "GIVE-FEAT-NAME=Experienced Smuggler"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T20:47:59",
    "updatedAt": "2020-10-14T20:47:59",
    "wsci": [
        ["giveProfIn","stealth","T"],
        ["giveLore","Underworld"],
        ["giveFeatName",["experienced smuggler"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 136,
    "name": "Black Market Smuggler",
    "rarity": "COMMON",
    "description": "__You know how to work the less-than-legal side of the region’s markets and know how to slip contraband past the authorities.__\nChoose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.\nYou’re trained in the Stealth skill and the Underworld Lore skill. You gain the (feat: Experienced Smuggler) skill feat.",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Stealth:T",
        "GIVE-LORE=Underworld",
        "GIVE-FEAT-NAME=Experienced Smuggler"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T20:53:31",
    "updatedAt": "2020-10-14T20:53:31",
    "wsci": [
        ["giveProfIn","stealth","T"],
        ["giveLore","Underworld"],
        ["giveFeatName",["experienced smuggler"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 138,
    "name": "Bright Lion",
    "rarity": "COMMON",
    "description": "__You are a member of the Bright Lions and seek to overthrow the tyrannical reign of Walkena and free Mzali from his cruel whims. You’re experienced operating undercover and have had to be cautious of what you say and who you trust, lest you fall afoul of the god-king’s terrible punishments.__\nChoose two ability boosts. One must be to Strength or Charisma, and one is a free ability boost.\nYou’re trained in the Deception skill and the Mzali Lore skill. You gain the (feat: Lie to Me) skill feat.",
    "boostOne": "STR,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Deception:T",
        "GIVE-LORE=Mzali",
        "GIVE-FEAT-NAME=Lie to Me"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T20:56:39",
    "updatedAt": "2020-10-14T20:56:39",
    "wsci": [
        ["giveProfIn","deception","T"],
        ["giveLore","Mzali"],
        ["giveFeatName",["lie to me"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 139,
    "name": "Chelish Rebel",
    "rarity": "COMMON",
    "description": "__You joined the fight against House Thrune. You may have helped liberate the nation of Ravounel, or you might be involved in another rebellion, such as Pezzack’s, that studied Ravounel’s successes.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou’re trained in the Society skill and the Kintargo Lore skill. You gain the (feat: Streetwise) skill feat.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Kintargo",
        "GIVE-FEAT-NAME=Streetwise"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T20:58:01",
    "updatedAt": "2020-10-14T20:58:01",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Kintargo"],
        ["giveFeatName",["streetwise"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 140,
    "name": "Child of the Puddles",
    "rarity": "COMMON",
    "description": "__You grew up in the soggy, squalid quarter of Absalom known as the Puddles. You’re at home in tightly packed urban environments.__\nChoose two ability boosts. One must be to Dexterity or Intelligence, and one is a free ability boost.\nYou’re trained in the Acrobatics skill and the Absalom Lore skill. You gain the (feat: Steady Balance) skill feat.",
    "boostOne": "DEX,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Acrobatics:T",
        "GIVE-LORE=Absalom",
        "GIVE-FEAT-NAME=Steady Balance"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T20:59:17",
    "updatedAt": "2020-10-14T20:59:17",
    "wsci": [
        ["giveProfIn","acrobatics","T"],
        ["giveLore","Absalom"],
        ["giveFeatName",["steady balance"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 141,
    "name": "Child of Westcrown",
    "rarity": "COMMON",
    "description": "__Whether you come from Westcrown or elsewhere, you hold the values of pre-Thrune Cheliax dear. You disdain the infernal government, but you are proud of your country and do not consider yourself a rebel.__\nChoose two ability boosts. One must be to Strength or Charisma, and one is a free ability boost.\nYou’re trained in the Diplomacy skill and the Westcrown Lore skill. You gain the (feat: Group Impression) skill feat.",
    "boostOne": "STR,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE=Westcrown",
        "GIVE-FEAT-NAME=Group Impression"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T21:01:36",
    "updatedAt": "2020-10-14T21:01:36",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLore","Westcrown"],
        ["giveFeatName",["group impression"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 142,
    "name": "Cursed Family",
    "rarity": "COMMON",
    "description": "__Rumors abound that your family is cursed. While that would explain several unfortunate events in your family history, you may or may not believe it. Regardless, odd coincidences plague your lineage, and perhaps even appear in your own life, and you have become used to spotting strangeness around you.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou’re trained in the Occultism skill and the Curse Lore skill. You gain the (feat: Oddity Identification) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Occultism:T",
        "GIVE-LORE=Curse",
        "GIVE-FEAT-NAME=Oddity Identification"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T21:03:04",
    "updatedAt": "2020-10-14T21:03:04",
    "wsci": [
        ["giveProfIn","occultism","T"],
        ["giveLore","Curse"],
        ["giveFeatName",["oddity identification"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 143,
    "name": "Desert Tracker",
    "rarity": "COMMON",
    "description": "__You’re at home blazing trails in the burning sands, and you made a living guiding or following creatures in the desert. You might be a native nomad, an experienced desert guide, a naturalist, a bandit driven into the dunes by the law – or all of the above.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou’re trained in the Survival skill and the Desert Lore skill. You gain the (feat: Experienced Tracker) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE=Desert",
        "GIVE-FEAT-NAME=Experienced Tracker"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T21:04:32",
    "updatedAt": "2020-10-14T21:04:32",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLore","Desert"],
        ["giveFeatName",["experienced tracker"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 144,
    "name": "Diobel Pearl Diver",
    "rarity": "COMMON",
    "description": "__You spent a portion of your youth diving and gathering precious pearls under the attentive eyes of Kortos Consortium merchants.__\nChoose two ability boosts. One must be to Constitution or Dexterity, and one is a free ability boost.\nYou’re trained in the Athletics skill and the Ocean Lore skill. You gain the (feat: Underwater Marauder) skill feat.",
    "boostOne": "DEX,CON",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE=Ocean",
        "GIVE-FEAT-NAME=Underwater Marauder"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T21:05:47",
    "updatedAt": "2020-10-14T21:05:47",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLore","Ocean"],
        ["giveFeatName",["underwater marauder"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 145,
    "name": "Final Blade Survivor",
    "rarity": "COMMON",
    "description": "__You fell prey to the whims of the Galtan mob and were scheduled for execution by final blade, but through skill – or sheer luck – you managed to talk your way out of it.__\nChoose two ability boosts. One must be to Charisma or Wisdom, and one is a free ability boost.\nYou’re trained in the Deception skill and the Revolution Lore skill. You gain the (feat: Charming Liar) skill feat.",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Deception:T",
        "GIVE-LORE=Revolution",
        "GIVE-FEAT-NAME=Charming Liar"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T21:07:16",
    "updatedAt": "2020-10-14T21:07:16",
    "wsci": [
        ["giveProfIn","deception","T"],
        ["giveLore","Revolution"],
        ["giveFeatName",["charming liar"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 146,
    "name": "Freed Slave of Absalom",
    "rarity": "COMMON",
    "description": "__As a recently freed slave in Absalom, you belong to a new, close-knit social class at the heart of the city’s most important trades.__\nChoose two ability boosts. One must be to Constitution or Intelligence, and one is a free ability boost.\nYou’re trained in the Society skill and the Absalom Lore skill. You gain the (feat: Streetwise) skill feat.",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Absalom",
        "GIVE-FEAT-NAME=Streetwise"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T21:08:49",
    "updatedAt": "2020-10-14T21:08:49",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Absalom"],
        ["giveFeatName",["streetwise"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 147,
    "name": "Geb Crusader",
    "rarity": "COMMON",
    "description": "__You grew up considering the existence of the undead nation of Geb an atrocity and trained to one day take part in destroying it and putting its vile inhabitants to their final rest. Key to your preparations is a thorough study of Pharasma, Urgathoa, and other undead-related deities and their philosophies.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou’re trained in the Religion skill and the Undead Lore skill. You gain the (feat: Student of the Canon) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Religion:T",
        "GIVE-LORE=Undead",
        "GIVE-FEAT-NAME=Student of the Canon"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T21:10:06",
    "updatedAt": "2020-10-14T21:10:06",
    "wsci": [
        ["giveProfIn","religion","T"],
        ["giveLore","Undead"],
        ["giveFeatName",["student of the canon"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 148,
    "name": "Goblinblood Orphan",
    "rarity": "COMMON",
    "description": "__Your family, whether goblin, hobgoblin, or human, died in the Goblinblood Wars. Though you were marked by these losses, you managed to survive through your own resilience and resourcefulness.__\nChoose two ability boosts. One must be to Dexterity or Constitution, and one is a free ability boost.\nYou’re trained in the Survival skill and the Goblin Lore skill. You gain the (feat: Assurance) skill feat with Survival.",
    "boostOne": "DEX,CON",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE=Goblin",
        "GIVE-FEAT-NAME=Assurance"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T21:11:42",
    "updatedAt": "2020-10-14T21:11:42",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLore","Goblin"],
        ["giveFeatName",["assurance"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 149,
    "name": "Grand Council Bureaucrat",
    "rarity": "COMMON",
    "description": "__You spent years working as a clerk to a functionary in Absalom’s government. Your service taught you a thing or two about rousing speeches and manipulating the city’s bureaucracy.__\nChoose two ability boosts. One must be to Charisma or Intelligence, and one is a free ability boost.\nYou’re trained in the Society skill and the Government Lore skill. You gain the (feat: Group Impression) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Government",
        "GIVE-FEAT-NAME=Group Impression"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T21:13:43",
    "updatedAt": "2020-10-14T21:13:43",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Government"],
        ["giveFeatName",["group impression"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 150,
    "name": "Hermean Expatriate",
    "rarity": "COMMON",
    "description": "__You have been exiled from Hermea, perhaps of your own accord or perhaps because you didn’t measure up. However, you take with you some of the benefits of the excellent education afforded to its citizenry.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou’re trained in the Society skill and the Dragon Lore skill. You gain the (feat: Skill Training) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Dragon",
        "GIVE-FEAT-NAME=Skill Training"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T21:15:09",
    "updatedAt": "2020-10-14T21:15:09",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Dragon"],
        ["giveFeatName",["skill training"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 151,
    "name": "Inlander",
    "rarity": "COMMON",
    "description": "__You grew up in an untamed region of the Isle of Kortos, and you know how to survive in the wild.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou’re trained in the Survival skill and a Lore skill related to the terrain type associated with your home region (such as Hills Lore or Mountains Lore). You gain the (feat: Survey Wildlife) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Survey Wildlife"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T21:17:00",
    "updatedAt": "2020-10-14T21:17:00",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["survey wildlife"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 152,
    "name": "Issian Partisan",
    "rarity": "COMMON",
    "description": "__You grew up among the northern houses of Brevoy in old Issia. Steeped in the cultural legacy of pirates and smugglers, you rely on your cleverness and charm as you make your way throughout the world.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou’re trained in the Deception skill and the Underworld Lore skill. You gain the (feat: Charming Liar) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Deception:T",
        "GIVE-LORE=Underworld",
        "GIVE-FEAT-NAME=Charming Liar"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T21:18:34",
    "updatedAt": "2020-10-14T21:18:34",
    "wsci": [
        ["giveProfIn","deception","T"],
        ["giveLore","Underworld"],
        ["giveFeatName",["charming liar"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 153,
    "name": "Kalistrade Follower",
    "rarity": "COMMON",
    "description": "__You follow the philosophy of the Prophecies of Kalistrade, seeking to build up your wealth in this life so that you might meet the next world on your own terms.__\nChoose two ability boosts. One must be to Constitution or Intelligence, and one is a free ability boost.\nYou’re trained in the Diplomacy skill and the Kalistrade Lore skill. You gain the (feat: Bargain Hunter) skill feat.",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE=Kalistrade",
        "GIVE-FEAT-NAME=Bargain Hunter"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T21:20:04",
    "updatedAt": "2020-10-14T21:20:04",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLore","Kalistrade"],
        ["giveFeatName",["bargain hunter"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 154,
    "name": "Kyonin Emissary",
    "rarity": "COMMON",
    "description": "__You were trained to be an ambassador of the elven land of Kyonin, and you have now been sent out into the wider world to build alliances between Kyonin and the neighboring kingdoms.__\nChoose two ability boosts. One must be to Charisma or Intelligence, and one is a free ability boost.\nYou’re trained in the Society skill and the Politics Lore skill. You gain the (feat: Multilingual) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Politics",
        "GIVE-FEAT-NAME=Multilingual"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T21:22:12",
    "updatedAt": "2020-10-14T21:22:12",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Politics"],
        ["giveFeatName",["multilingual"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 155,
    "name": "Lastwall Survivor",
    "rarity": "COMMON",
    "description": "__You managed to escape the devastation that the Whispering Tyrant brought to your nation, but you lost everything to the lich-king’s minions, including your home and many friends and family.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou’re trained in the Medicine skill and the Undead Lore skill. You gain the (feat: Battle Medicine) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Medicine:T",
        "GIVE-LORE=Undead",
        "GIVE-FEAT-NAME=Battle Medicine"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T21:23:33",
    "updatedAt": "2020-10-14T21:23:33",
    "wsci": [
        ["giveProfIn","medicine","T"],
        ["giveLore","Undead"],
        ["giveFeatName",["battle medicine"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 156,
    "name": "Lumber Consortium Laborer",
    "rarity": "COMMON",
    "description": "__You have suffered as a worker for the unscrupulous Lumber Consortium, laboring under harsh conditions in dangerous wooded regions of Andoran.__\nChoose two ability boosts. One must be to Strength or Dexterity, and one is a free ability boost.\nYou’re trained in the Athletics skill and the Forest Lore skill. You gain the (feat: Assurance) skill feat with Athletics.",
    "boostOne": "STR,DEX",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE=Forest",
        "GIVE-FEAT-NAME=Assurance"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T21:24:43",
    "updatedAt": "2020-10-14T21:24:43",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLore","Forest"],
        ["giveFeatName",["assurance"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 157,
    "name": "Magaambya Academic",
    "rarity": "COMMON",
    "description": "__You studied magic at the prestigious Magaambya academy in Nantambu, learning magical traditions dating back to Old-Mage Jatembe and earning a pedigree respected by magical scholars almost everywhere.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou’re trained in your choice of either the Arcana or Nature skill, as well as the Academia Lore skill. You gain the (feat: Recognize Spell) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Arcana,Nature]",
        "GIVE-LORE=Academia",
        "GIVE-FEAT-NAME=Recognize Spell"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T21:26:44",
    "updatedAt": "2020-10-14T21:26:44",
    "wsci": [
        ["giveSkill","T",["arcana","nature"]],
        ["giveLore","Academia"],
        ["giveFeatName",["recognize spell"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 158,
    "name": "Mammoth Speaker",
    "rarity": "COMMON",
    "description": "__You have learned the secrets of taming the mighty mammoths and other megafauna of the far north. Perhaps these talents are a part of your people’s traditional customs, or perhaps you sought out these massive animals of your own accord.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou’re trained in the Nature skill and the Animal Lore skill. You gain the (feat: Train Animal) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Nature:T",
        "GIVE-LORE=Animal",
        "GIVE-FEAT-NAME=Train Animal"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T21:27:53",
    "updatedAt": "2020-10-14T21:27:53",
    "wsci": [
        ["giveProfIn","nature","T"],
        ["giveLore","Animal"],
        ["giveFeatName",["train animal"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 159,
    "name": "Mana Wastes Refugee",
    "rarity": "COMMON",
    "description": "__Exposure to the corrupting influence of the Mana Wastes’ strange energies has warped your inner essence, resulting in unpredictable interactions with magic items and more than a little know-how about surviving under bizarre and adverse natural conditions.__\nChoose two ability boosts. One must be to Constitution or Intelligence, and one is a free ability boost.\nYou’re trained in the Arcana skill and the Wilderness Lore skill. You gain the (feat: Trick Magic Item) skill feat.",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Arcana:T",
        "GIVE-LORE=Wilderness",
        "GIVE-FEAT-NAME=Trick Magic Item"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T22:25:05",
    "updatedAt": "2020-10-14T22:25:05",
    "wsci": [
        ["giveProfIn","arcana","T"],
        ["giveLore","Wilderness"],
        ["giveFeatName",["trick magic item"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 160,
    "name": "Mantis Scion",
    "rarity": "COMMON",
    "description": "__At least one of your parents is a member of the notorious Red Mantis assassins, merciless killers for hire who rarely fail to claim their marks. Whether on purpose or by simple exposure, you were trained from a young age in the art of stalking and killing people.__\nChoose two ability boosts. One must be to Dexterity or Wisdom, and one is a free ability boost.\nYou’re trained in the Stealth skill and the Assassin Lore skill. You gain the (feat: Assurance) skill feat with Stealth.",
    "boostOne": "DEX,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Stealth:T",
        "GIVE-LORE=Assassin",
        "GIVE-FEAT-NAME=Assurance"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T22:26:38",
    "updatedAt": "2020-10-14T22:26:38",
    "wsci": [
        ["giveProfIn","stealth","T"],
        ["giveLore","Assassin"],
        ["giveFeatName",["assurance"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 161,
    "name": "Menagerie Dung Sweeper",
    "rarity": "COMMON",
    "description": "__Whether you washed warrior beasts below the Irorium’s arena floor or tended to the mutated animals of a Puddle sideshow, you are experienced with all manner of weird wildlife.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou’re trained in the Nature skill and the Animal Lore skill. You gain the (feat: Train Animal) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Nature:T",
        "GIVE-LORE=Animal",
        "GIVE-FEAT-NAME=Train Animal"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T22:28:01",
    "updatedAt": "2020-10-14T22:28:01",
    "wsci": [
        ["giveProfIn","nature","T"],
        ["giveLore","Animal"],
        ["giveFeatName",["train animal"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 162,
    "name": "Merabite Prodigy",
    "rarity": "COMMON",
    "description": "__Even in a city renowned for its alchemy, you were able to rise above the competition.__\nChoose two ability boosts. One must be to Dexterity or Intelligence, and one is a free ability boost.\nYou’re trained in the Crafting skill and the Alchemical Lore skill. You gain the (feat: Specialty Crafting) skill feat with alchemy.",
    "boostOne": "DEX,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-LORE=Alchemical",
        "GIVE-FEAT-NAME=Specialty Crafting"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T22:29:43",
    "updatedAt": "2020-10-14T22:29:43",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveLore","Alchemical"],
        ["giveFeatName",["specialty crafting"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 163,
    "name": "Molthuni Mercenary",
    "rarity": "COMMON",
    "description": "__Whether you sought citizenship or simply needed a steady paycheck, you spent some of your time as a paid mercenary in the armed forces of Molthune, where you fought against Molthune’s enemies such as Nirmathas or the Ironfang Legion. Alternatively, you might have worked at sea, protecting Molthune’s military and trading ships against pirates on Lake Encarthan.__\nChoose two ability boosts. One must be to Strength or Constitution, and one is a free ability boost.\nYou’re trained in the Athletics skill and the Mercenary Lore skill. You gain the (feat: Experienced Professional) skill feat.",
    "boostOne": "STR,CON",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE=Mercenary",
        "GIVE-FEAT-NAME=Experienced Professional"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T22:31:23",
    "updatedAt": "2020-10-14T22:31:23",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLore","Mercenary"],
        ["giveFeatName",["experienced professional"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 164,
    "name": "Nexian Mystic",
    "rarity": "COMMON",
    "description": "__Your initiations into the Nexian mysteries and the philosophies of the Arclords of Nex grant you a preternatural comprehension of the arcane underpinnings of existence.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in the Arcana skill and a Lore skill related to one plane of your choice (other than the Material Plane). You gain the (feat: Arcane Sense) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Arcana:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Arcane Sense"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T22:33:17",
    "updatedAt": "2020-10-14T22:33:17",
    "wsci": [
        ["giveProfIn","arcana","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["arcane sense"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 165,
    "name": "Nirmathi Guerrilla",
    "rarity": "COMMON",
    "description": "__Woodcraft comes naturally to you, and you have learned how to use the forest to your tactical advantage against superior forces in skirmishes against the Molthuni army or the Ironfang Legion.__\nChoose two ability boosts. One must be to Dexterity or Wisdom, and one is a free ability boost.\nYou’re trained in the Survival skill and the Forest Lore skill. You gain the (feat: Terrain Stalker) (underbrush) skill feat.",
    "boostOne": "DEX,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE=Forest",
        "GIVE-FEAT-NAME=Terrain Stalker"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T22:35:33",
    "updatedAt": "2020-10-14T22:35:33",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLore","Forest"],
        ["giveFeatName",["terrain stalker"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 166,
    "name": "Oenopion Ooze-Tender",
    "rarity": "COMMON",
    "description": "__Your apprenticeship in one of Oenopion’s unorthodox arcane and alchemical academies instilled in you a deep reservoir of mostly reliable esoteric knowledge, not to mention a deep resentment born of countless hours spent mucking ooze pens and feeding helpless creatures to ravenous, belching jellies and gelatinous puddings.__\nChoose two ability boosts. One must be to Constitution or Intelligence, and one is a free ability boost.\nYou’re trained in the Crafting skill and the Ooze Lore skill. You gain the (feat: Dubious Knowledge) skill feat.",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-LORE=Ooze",
        "GIVE-FEAT-NAME=Dubious Knowledge"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T22:36:57",
    "updatedAt": "2020-10-14T22:36:57",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveLore","Ooze"],
        ["giveFeatName",["dubious knowledge"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 167,
    "name": "Onyx Trader",
    "rarity": "COMMON",
    "description": "__Oprak doesn’t share the secrets of the Onyx Vault with many, but you are one of the lucky few to be permitted into the heart of the nation. You have traveled the extradimensional paths of the Stone Roads and traded goods across a wide variety of lands. You’ve learned to step lively in foreign markets of all types.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou’re trained in the Society skill and the Mercantile Lore skill. You gain the (feat: Multilingual) skill feat.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Mercantile",
        "GIVE-FEAT-NAME=Multilingual"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T22:38:23",
    "updatedAt": "2020-10-14T22:38:23",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Mercantile"],
        ["giveFeatName",["multilingual"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 168,
    "name": "Osirionologist",
    "rarity": "COMMON",
    "description": "__Whether you’re a fascinated outsider or a local proud of your nation’s storied past, you’re a devoted student of Osirion’s history. You might be a traveling professor, a member of a society like the Pathfinders or the Esoteric Order of the Palatine Eye, or even a simple tomb robber cashing in on the glories of the past.__\nChoose two ability boosts. One must be to Constitution or Intelligence, and one is a free ability boost.\nYou’re trained in the Occultism skill and the Ancient Osirion Lore skill. You gain the (feat: Oddity Identification) skill feat.",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Occultism:T",
        "GIVE-LORE=Ancient Osirion",
        "GIVE-FEAT-NAME=Oddity Identification"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T22:40:21",
    "updatedAt": "2020-10-14T22:40:21",
    "wsci": [
        ["giveProfIn","occultism","T"],
        ["giveLore","Ancient Osirion"],
        ["giveFeatName",["oddity identification"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 169,
    "name": "Pathfinder Hopeful",
    "rarity": "COMMON",
    "description": "__You’ve long wanted to join the adventurous Pathfinder Society. You have taken up the dangerous life of an adventurer in hopes of earning a spot among the Pathfinders.__\nChoose two ability boosts. One must be to Constitution or Intelligence, and one is a free ability boost.\nYou’re trained in the Society skill and the Pathfinder Society Lore skill. You gain the (feat: Additional Lore) skill feat.",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Pathfinder Society",
        "GIVE-FEAT-NAME=Additional Lore"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T22:41:48",
    "updatedAt": "2020-10-14T22:41:48",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Pathfinder Society"],
        ["giveFeatName",["additional lore"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 170,
    "name": "Perfection Seeker",
    "rarity": "COMMON",
    "description": "__You aspire to perfect your body and mind in the tradition of Jalmeray’s Houses of Perfection, honing your acrobatic skills and mental faculties in preparation for a lifetime pushing the edge of what most consider possible.__\nChoose two ability boosts. One must be to Dexterity or Wisdom, and one is a free ability boost.\nYou’re trained in the Acrobatics skill as well as the Warfare Lore skill. You gain the (feat: Cat Fall) skill feat.",
    "boostOne": "DEX,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Acrobatics:T",
        "GIVE-LORE=Warfare",
        "GIVE-FEAT-NAME=Cat Fall"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T22:43:11",
    "updatedAt": "2020-10-14T22:43:11",
    "wsci": [
        ["giveProfIn","acrobatics","T"],
        ["giveLore","Warfare"],
        ["giveFeatName",["cat fall"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 171,
    "name": "Press-Ganged",
    "rarity": "COMMON",
    "description": "__You were forced into service as a sailor against your will. Perhaps you were punished for a crime, were drafted into military service, are repaying a debt, or simply were abducted. Though you were initially trained as a simple deckhand, you may have subsequently studied a trade under one of the vessel’s specialists.__\nChoose two ability boosts. One must be to Strength or Wisdom, and one is a free ability boost.\nYou’re trained in the Society skill and the Sailing Lore skill. You gain the (feat: Experienced Professional) skill feat.",
    "boostOne": "STR,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Sailing",
        "GIVE-FEAT-NAME=Experienced Professional"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T22:45:20",
    "updatedAt": "2020-10-14T22:45:20",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Sailing"],
        ["giveFeatName",["experienced professional"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 172,
    "name": "Purveyor of the Bizarre",
    "rarity": "COMMON",
    "description": "__Whether in Katapesh or one of the bustling markets along the Path of Salt, you’ve spent enough time buying and selling ancient or unusual items to give you an instinctive ability to quickly sort valuable trinkets from worthless baubles.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in the Arcana skill and the Mercantile Lore skill. You gain the (feat: Quick Identification) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Arcana:T",
        "GIVE-LORE=Mercantile",
        "GIVE-FEAT-NAME=Quick Identification"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T22:47:54",
    "updatedAt": "2020-10-14T22:47:54",
    "wsci": [
        ["giveProfIn","arcana","T"],
        ["giveLore","Mercantile"],
        ["giveFeatName",["quick identification"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 173,
    "name": "Quick",
    "rarity": "COMMON",
    "description": "__Staying alive among the scheming, ravenous undead of Geb required a deep knowledge of their motivations, capabilities, and weaknesses. More often than not, it also required the ability to weave alibis and life-preserving half-truths capable of swaying a stilled heart.__\nChoose two ability boosts. One must be to Charisma or Constitution, and one is a free ability boost.\nYou’re trained in the Deception skill and the Undead Lore skill. You gain the (feat: Charming Liar) skill feat.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Deception:T",
        "GIVE-LORE=Undead",
        "GIVE-FEAT-NAME=Charming Liar"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T22:50:12",
    "updatedAt": "2020-10-14T22:50:12",
    "wsci": [
        ["giveProfIn","deception","T"],
        ["giveLore","Undead"],
        ["giveFeatName",["charming liar"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 174,
    "name": "Razmiran Faithful",
    "rarity": "COMMON",
    "description": "__You serve a living god who rules upon the face of Golarion, and this gives your actions a divine mandate not to be trifled with.__\nChoose two ability boosts. One must be to Strength or Charisma, and one is a free ability boost.\nYou’re trained in the Intimidation skill and the Razmir Lore skill. You gain the (feat: Group Coercion) skill feat.",
    "boostOne": "STR,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-LORE=Razmir",
        "GIVE-FEAT-NAME=Group Coercion"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T22:51:18",
    "updatedAt": "2020-10-14T22:51:18",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveLore","Razmir"],
        ["giveFeatName",["group coercion"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 175,
    "name": "Rivethun Adherent",
    "rarity": "COMMON",
    "description": "__You have spent time learning the practices and traditions of the ancient Rivethun dwarven shamans and can recognize all sorts of magic. You may have chosen your own road since then, or you may remain an adherent of the philosophy.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou’re trained in the Occultism skill and the Spirit Lore skill. You gain the (feat: Recognize Spell) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Occultism:T",
        "GIVE-LORE=Spirit",
        "GIVE-FEAT-NAME=Recognize Spell"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T22:52:59",
    "updatedAt": "2020-10-14T22:52:59",
    "wsci": [
        ["giveProfIn","occultism","T"],
        ["giveLore","Spirit"],
        ["giveFeatName",["recognize spell"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 176,
    "name": "Rostland Partisan",
    "rarity": "COMMON",
    "description": "__You grew up among the southern houses of Brevoy in old Rostland. You’re accustomed to arguing from a position of underappreciated worth.__\nChoose two ability boosts. One must be to Constitution or Charisma, and one is a free ability boost.\nYou’re trained in the Diplomacy skill and the Politics Lore skill. You gain the (feat: Group Impression) skill feat.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE=Politics",
        "GIVE-FEAT-NAME=Group Impression"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T22:58:18",
    "updatedAt": "2020-10-14T22:58:18",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLore","Politics"],
        ["giveFeatName",["group impression"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 177,
    "name": "Sarkorian Reclaimer",
    "rarity": "COMMON",
    "description": "__Whether you trace your heritage to lost Sarkoris or are a crusader trying to atone for past fanatics’ wrongs, you seek to liberate the Sarkorian homeland from the demons who have defiled it.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free boost.\nYou’re trained in the Medicine skill and the Abyssal Lore skill. You gain the (feat: Battle Medicine) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Medicine:T",
        "GIVE-LORE=Abyssal",
        "GIVE-FEAT-NAME=Battle Medicine"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T23:02:00",
    "updatedAt": "2020-10-14T23:02:00",
    "wsci": [
        ["giveProfIn","medicine","T"],
        ["giveLore","Abyssal"],
        ["giveFeatName",["battle medicine"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 178,
    "name": "Sarkorian Survivor",
    "rarity": "COMMON",
    "description": "__The devastation and carnage of the Worldwound were nearly complete, but you somehow managed to survive it.__\nChoose two ability boosts. One must be to Strength or Constitution, and one is a free boost.\nYou’re trained in the Survival skill and the Sarkorian History Lore skill. You gain the (feat: Forager) skill feat.",
    "boostOne": "STR,CON",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE=Sarkorian History",
        "GIVE-FEAT-NAME=Forager"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-14T23:03:40",
    "updatedAt": "2020-10-14T23:03:40",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLore","Sarkorian History"],
        ["giveFeatName",["forager"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 179,
    "name": "Scholar of the Ancients",
    "rarity": "COMMON",
    "description": "__You’re fascinated by the lost Azlanti Empire and have dedicated yourself to seeking out and studying every broken artifact or scrap of knowledge that remains, whether as an academic pursuit or simply for the joy of treasure hunting.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou’re trained in the Arcana skill and the Azlant Lore skills. You gain the (feat: Quick Identification) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Arcana:T",
        "GIVE-LORE=Azlant",
        "GIVE-FEAT-NAME=Quick Identification"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:14:19",
    "updatedAt": "2020-10-15T23:14:19",
    "wsci": [
        ["giveProfIn","arcana","T"],
        ["giveLore","Azlant"],
        ["giveFeatName",["quick identification"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 180,
    "name": "Secular Medic",
    "rarity": "COMMON",
    "description": "__You’re from Rahadoum, where the Laws of Mortality taught you to reject the gods, yet you’ve seen firsthand how dangerous it can be to go without healing magic. As a result, you’ve thrown yourself into the study of medicine, so you can save lives without saving souls.__\nChoose two ability boosts. One must be to Wisdom or Dexterity, and one is a free ability boost.\nYou’re trained in the Medicine skill and the Anatomy Lore skill. You gain the (feat: Battle Medicine) skill feat.",
    "boostOne": "DEX,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Medicine:T",
        "GIVE-LORE=Anatomy",
        "GIVE-FEAT-NAME=Battle Medicine"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:15:51",
    "updatedAt": "2020-10-15T23:15:51",
    "wsci": [
        ["giveProfIn","medicine","T"],
        ["giveLore","Anatomy"],
        ["giveFeatName",["battle medicine"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 181,
    "name": "Senghor Sailor",
    "rarity": "COMMON",
    "description": "__As an experienced sailor from Senghor, you know that the only thing saving you from disaster on the high seas is a properly maintained ship. You know boat-building inside and out and you can quickly cobble together a solution in the event that something breaks.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in the Crafting skill and the Sailing Lore skill. You gain the (feat: Quick Repair) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-LORE=Sailing",
        "GIVE-FEAT-NAME=Quick Repair"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:16:56",
    "updatedAt": "2020-10-15T23:16:56",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveLore","Sailing"],
        ["giveFeatName",["quick repair"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 182,
    "name": "Shadow Haunted",
    "rarity": "COMMON",
    "description": "__You are from Nidal, and regardless of your personal values, Zon-Kuthon has a claim on your soul due to an ancient pact. The Midnight Lord’s unsettling influence is bred deep into your bones.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in the Intimidation skill and the Shadow Plane Lore skill. You gain the (feat: Quick Coercion) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-LORE=Shadow Plane",
        "GIVE-FEAT-NAME=Quick Coercion"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:18:01",
    "updatedAt": "2020-10-15T23:18:01",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveLore","Shadow Plane"],
        ["giveFeatName",["quick coercion"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 183,
    "name": "Shoanti Name-Bearer",
    "rarity": "COMMON",
    "description": "__You are a member of a Shoanti quah and have gone through its coming of age ceremony, gaining the traditional tattoo of your quah and earning your adult name.__\nChoose two ability boosts. One must be to Strength or Wisdom, and one is a free ability boost.\nYou’re trained in the Athletics skill and the Quah Lore skill. You gain the (feat: Combat Climber) skill feat.",
    "boostOne": "STR,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE=Quah",
        "GIVE-FEAT-NAME=Combat Climber"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:19:07",
    "updatedAt": "2020-10-15T23:19:07",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLore","Quah"],
        ["giveFeatName",["combat climber"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 184,
    "name": "Shory Seeker",
    "rarity": "COMMON",
    "description": "__You’ve dedicated your life to unraveling the secrets of the ancient Shory Empire, either through meticulous research or by traveling into dangerous and distant ruins to track down longlost artifacts.__\nChoose two ability boosts. One must be to Dexterity or Intelligence, and one is a free ability boost.\nYou’re trained in the Crafting skill and the Shory Lore skill. You gain the (feat: Specialty Crafting) skill feat.",
    "boostOne": "DEX,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-LORE=Shory",
        "GIVE-FEAT-NAME=Specialty Crafting"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:20:15",
    "updatedAt": "2020-10-15T23:20:15",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveLore","Shory"],
        ["giveFeatName",["specialty crafting"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 185,
    "name": "Sodden Scavenger",
    "rarity": "COMMON",
    "description": "__You’ve managed to eke out an existence in the storm-wracked Sodden Lands and have become an expert at scavenging food and tools.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou’re trained in the Survival skill and the Swamp Lore skill. You gain the (feat: Forager) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE=Swamp",
        "GIVE-FEAT-NAME=Forager"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:21:29",
    "updatedAt": "2020-10-15T23:21:29",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLore","Swamp"],
        ["giveFeatName",["forager"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 186,
    "name": "Storm Survivor",
    "rarity": "COMMON",
    "description": "__Through luck or through skill, you managed to survive a catastrophic maritime disaster, such as a shipwreck or being thrown overboard. You have a keen sense for weather or situations that are similar to the one you escaped.__\nChoose two ability boosts. One must be to Strength or Wisdom, and one is a free ability boost.\nYou’re trained in the Survival skill and the Weather Lore skill. You gain the (feat: Forager) skill feat.",
    "boostOne": "STR,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE=Weather",
        "GIVE-FEAT-NAME=Forager"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:22:41",
    "updatedAt": "2020-10-15T23:22:41",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLore","Weather"],
        ["giveFeatName",["forager"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 187,
    "name": "Taldan Schemer",
    "rarity": "COMMON",
    "description": "__Whether willing or unwilling, you have been involved in the many cutthroat political intrigues within Taldor. You might have been born into it as a member of the aristocracy, or you might have taken an active role in the recent events of the War for the Crown.__\nChoose two ability boosts. One must be to Charisma or Constitution, and one is a free ability boost.\nYou’re trained in the Diplomacy skill and the Politics Lore skill. You gain the (feat: Hobnobber) skill feat.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE=Politics",
        "GIVE-FEAT-NAME=Hobnobber"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:23:52",
    "updatedAt": "2020-10-15T23:23:52",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLore","Politics"],
        ["giveFeatName",["hobnobber"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 188,
    "name": "Thassilonian Traveler",
    "rarity": "COMMON",
    "description": "__You come from ancient Thassilon, one of the citizens that appeared out of time alongside the city of Xin-Edasseril. You know many things that have been long forgotten... along with many things that are no longer correct.__\nChoose two ability boosts. One must be to Constitution or Intelligence, and one is a free ability boost.\nYou’re trained in the Arcana skill and the Thassilon Lore skill. You gain the (feat: Dubious Knowledge) skill feat.",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Arcana:T",
        "GIVE-LORE=Thassilon",
        "GIVE-FEAT-NAME=Dubious Knowledge"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:25:29",
    "updatedAt": "2020-10-15T23:25:29",
    "wsci": [
        ["giveProfIn","arcana","T"],
        ["giveLore","Thassilon"],
        ["giveFeatName",["dubious knowledge"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 189,
    "name": "Thrune Loyalist",
    "rarity": "COMMON",
    "description": "__Despite the setbacks Cheliax has suffered recently, your loyalties lie with the devil-backed House Thrune. You consider the current queen to be the rightful ruler of your homeland, and you are willing to act against her enemies.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou’re trained in the Religion skill and the Hell Lore skill You gain the (feat: Student of the Canon) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Religion:T",
        "GIVE-LORE=Hell",
        "GIVE-FEAT-NAME=Student of the Canon"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:26:30",
    "updatedAt": "2020-10-15T23:26:30",
    "wsci": [
        ["giveProfIn","religion","T"],
        ["giveLore","Hell"],
        ["giveFeatName",["student of the canon"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 190,
    "name": "Thuvian Unifier",
    "rarity": "COMMON",
    "description": "__You believe the city-states of Thuvia should be united into one nation under the rule of your home city (most commonly Aspenthar), and you’re willing to do whatever it takes to make it happen.__\nChoose two ability boosts. One must be to Strength or Charisma, and one is a free ability boost.\nYou’re trained in the Intimidation skill and the Politics Lore skill. You gain the (feat: Quick Coercion) skill feat.",
    "boostOne": "STR,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-LORE=Politics",
        "GIVE-FEAT-NAME=Quick Coercion"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:27:39",
    "updatedAt": "2020-10-15T23:27:39",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveLore","Politics"],
        ["giveFeatName",["quick coercion"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 191,
    "name": "Trade Consortium Underling",
    "rarity": "COMMON",
    "description": "__Your experience as a ledger-keeper for one of Absalom’s trade guilds has made you a canny investor and shrewd entrepreneur.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in the Society skill and the Business Lore skill. You gain the (feat: Experienced Professional) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Business",
        "GIVE-FEAT-NAME=Experienced Professional"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:28:45",
    "updatedAt": "2020-10-15T23:28:45",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Business"],
        ["giveFeatName",["experienced professional"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 192,
    "name": "Ulfen Raider",
    "rarity": "COMMON",
    "description": "__You are an Ulfen warrior, feared among Avistan for the merciless and devastating raids your people once conducted along the shores. Though the days of these Ulfen raids are largely past, you have been trained to strike terror into the hearts of those who face you.__\nChoose two ability boosts. One must be to Strength or Charisma, and one is a free ability boost.\nYou’re trained in the Intimidation skill and the Sailing Lore skill. You gain the (feat: Intimidating Glare) skill feat.",
    "boostOne": "STR,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-LORE=Sailing",
        "GIVE-FEAT-NAME=Intimidating Glare"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:29:59",
    "updatedAt": "2020-10-15T23:29:59",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveLore","Sailing"],
        ["giveFeatName",["intimidating glare"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 193,
    "name": "Undersea Enthusiast",
    "rarity": "COMMON",
    "description": "__You love diving and exploring the world beneath the waves, and long periods of swimming have trained you to move easily through the water. You’re also fascinated by undersea creatures and cultures – and may even have a trace of one of them in your own lineage.__\nChoose two ability boosts. One must be to Strength or Constitution, and one is a free ability boost.\nYou’re trained in the Athletics skill and the Ocean Lore skill. You gain the (feat: Underwater Marauder) skill feat.",
    "boostOne": "STR,CON",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE=Ocean",
        "GIVE-FEAT-NAME=Underwater Marauder"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:31:17",
    "updatedAt": "2020-10-15T23:31:17",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLore","Ocean"],
        ["giveFeatName",["underwater marauder"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 194,
    "name": "Ustalavic Academic",
    "rarity": "COMMON",
    "description": "__You were educated at a famed Ustalavic academy, such as the University of Lepidstadt or the Sincomakti School of Sciences, and received quality instruction in advanced concepts of mathematics, science, and engineering.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in the Crafting skill and the Academia Lore skill. You gain the (feat: Skill Training) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-LORE=Academia",
        "GIVE-FEAT-NAME=Skill Training"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:32:28",
    "updatedAt": "2020-10-15T23:32:28",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveLore","Academia"],
        ["giveFeatName",["skill training"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 195,
    "name": "Varisian Wanderer",
    "rarity": "COMMON",
    "description": "__You have spent your youth wandering the lands of Varisia and beyond among the brightly painted wagons of a Varisian caravan. You have heard endless tales of your people’s history and lore, and have learned many songs and stories from the disparate people you have met.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou’re trained in the Performance skill and the Circus Lore skill. You gain the (feat: Fascinating Performance) skill feat. ",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Performance:T",
        "GIVE-LORE=Circus",
        "GIVE-FEAT-NAME=Fascinating Performance"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:34:09",
    "updatedAt": "2020-10-15T23:34:09",
    "wsci": [
        ["giveProfIn","performance","T"],
        ["giveLore","Circus"],
        ["giveFeatName",["fascinating performance"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 196,
    "name": "Vidrian Reformer",
    "rarity": "COMMON",
    "description": "__You know that the only way your homeland of Vidrian can remain free from outside conquerors is by forging a strong and unified government. As such, you seek to bind your fellow citizens together through careful diplomacy and force of personality – or, if necessary, subterfuge and intrigue.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou’re trained in the Diplomacy skill and the Politics Lore skill. You gain the (feat: Hobnobber) skill feat.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE=Politics",
        "GIVE-FEAT-NAME=Hobnobber"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:35:35",
    "updatedAt": "2020-10-15T23:35:35",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLore","Politics"],
        ["giveFeatName",["hobnobber"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 197,
    "name": "Whispering Way Scion",
    "rarity": "COMMON",
    "description": "__Your family has long been associated with the enigmatic death cult known as the Whispering Way, which was recently responsible for the terrible devastation in the nation of Lastwall. Whether or not you have followed in their footsteps, you know many of the philosophy’s secrets.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in the Religion skill and the Undead Lore skill. You gain the (feat: Student of the Canon) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Religion:T",
        "GIVE-LORE=Undead",
        "GIVE-FEAT-NAME=Student of the Canon"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:36:36",
    "updatedAt": "2020-10-15T23:36:36",
    "wsci": [
        ["giveProfIn","religion","T"],
        ["giveLore","Undead"],
        ["giveFeatName",["student of the canon"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 198,
    "name": "Wildwood Local",
    "rarity": "COMMON",
    "description": "__You might have been born and raised among the druids of the Verduran Forest, or you may have spent time among them as an adult and come to know their ways.__\nChoose two ability boosts. One must be to Dexterity or Wisdom, and one is a free ability boost.\nYou’re trained in the Nature skill as well as the Forest Lore skill. You gain the (feat: Natural Medicine) skill feat.",
    "boostOne": "DEX,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Nature:T",
        "GIVE-LORE=Forest",
        "GIVE-FEAT-NAME=Natural Medicine"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:37:45",
    "updatedAt": "2020-10-15T23:37:45",
    "wsci": [
        ["giveProfIn","nature","T"],
        ["giveLore","Forest"],
        ["giveFeatName",["natural medicine"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 199,
    "name": "Winter's Child",
    "rarity": "COMMON",
    "description": "__Your or one of your ancestors hails from Irrisen, and some spark of the icy region’s magic has manifested itself within your bones. The blood of Baba Yaga’s legacy runs in your veins, and you are at one with the mysteries and dangers of the frozen land.__\nChoose two ability boosts. One must be to Constitution or Charisma, and one is a free ability boost.\nYou’re trained in the Arcana skill and the Weather Lore skill. You gain the (feat: Arcane Sense) skill feat.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Arcana:T",
        "GIVE-LORE=Weather",
        "GIVE-FEAT-NAME=Arcane Sense"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:38:50",
    "updatedAt": "2020-10-15T23:38:50",
    "wsci": [
        ["giveProfIn","arcana","T"],
        ["giveLore","Weather"],
        ["giveFeatName",["arcane sense"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 200,
    "name": "Witch Wary",
    "rarity": "COMMON",
    "description": "__You have little love or trust for spellcraft and those who practice it, and have developed a paranoid knack for recognizing such tricks. You are constantly on guard for the magic of witches and have been trained to spot the signs of those with minds affected by magic.__\nChoose two ability boosts. One must be to Dexterity or Intelligence, and one is a free ability boost.\nYou’re trained in the Occultism skill and the Curse Lore skill. You gain the (feat: Oddity Identification) skill feat.",
    "boostOne": "DEX,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Occultism:T",
        "GIVE-LORE=Curse",
        "GIVE-FEAT-NAME=Oddity Identification"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:39:59",
    "updatedAt": "2020-10-15T23:39:59",
    "wsci": [
        ["giveProfIn","occultism","T"],
        ["giveLore","Curse"],
        ["giveFeatName",["oddity identification"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 201,
    "name": "Wonder Taster",
    "rarity": "COMMON",
    "description": "__Having once sampled Numerian fluids, you’ve tasted knowledge beyond comprehension. You are driven to recapture that astounding experience.__\nChoose two ability boosts. One must be to Intelligence or Constitution, and one is a free ability boost.\nYou’re trained in the Crafting skill and the Alchemical Lore skill. You gain the (feat: Alchemical Crafting) skill feat.",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-LORE=Alchemical",
        "GIVE-FEAT-NAME=Alchemical Crafting"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-15T23:41:05",
    "updatedAt": "2020-10-15T23:41:05",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveLore","Alchemical"],
        ["giveFeatName",["alchemical crafting"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 202,
    "name": "Bonuwat Wavetouched",
    "rarity": "COMMON",
    "description": "__You are a child of the Bonuwat people, and the sea’s salt flows through your veins. You’ve taken to sailing and swimming gracefully and with ease, earning you the honorific “wavetouched.”__\nChoose two ability boosts. One must be to Strength or Wisdom, and one is a free ability boost.\nYou’re trained in the Athletics skill and the Ocean Lore skill. You gain the (feat: Underwater Marauder) skill feat.",
    "boostOne": "STR,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE=Ocean",
        "GIVE-FEAT-NAME=Underwater Marauder",
        "OVERRIDE-FEAT-LEVEL=Wavetouched Paragon:1"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2020-10-26T21:05:36",
    "updatedAt": "2020-10-26T21:05:36",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLore","Ocean"],
        ["giveFeatName",["underwater marauder"]],
        ["overrideFeatLevel","wavetouched paragon",1]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 207,
    "name": "Ex-Con Token Guard",
    "rarity": "COMMON",
    "description": "__Not everyone starts life on easy street – your own experience is testament to that. You took a wrong turn at some point early on and became a career criminal. Perhaps you were a petty pickpocket, or maybe you've even murdered someone. Either way, your crimes landed you with a transformative prison sentence in the Brine prison. Only then did you realize that something needed to change. After your release, you dedicated yourself to helping other downtrodden individuals and those forced to resort to crime to survive. You joined the Coins District Guard, but soon learned that this precinct was a haven for the very corruption you sought to undo. Your efforts at reform never took root and you feared that your decision to become an officer of the law was a huge mistake.__\n__You transferred to the Edgewatch, the Precipice Quarter's new precinct, in the hope that you might meet others who sought to help – not exploit – Absalom's misguided.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou're trained in the Thievery skill and your choice of Legal Lore or Underworld Lore. You gain a +1 circumstance bonus to Deception, Diplomacy, and Intimidation checks to interact with Token Guards and convicted criminals such as prison inmates. You gain the (feat: Pickpocket) skill feat.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Thievery:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Pickpocket",
        "CONDITIONAL-INCREASE-SKILL_Deception=1~circumstance bonus to interact with Token Guards and convicted criminals such as prison inmates",
        "CONDITIONAL-INCREASE-SKILL_Diplomacy=1~circumstance bonus to interact with Token Guards and convicted criminals such as prison inmates",
        "CONDITIONAL-INCREASE-SKILL_Intimidation=1~circumstance bonus to interact with Token Guards and convicted criminals such as prison inmates"
    ],
    "isArchived": true,
    "contentSrc": "AGENTS-OF-EDGEWATCH",
    "version": "1.0",
    "createdAt": "2020-11-15T03:28:51",
    "updatedAt": "2020-11-15T03:28:51",
    "wsci": [
        ["giveProfIn","thievery","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["pickpocket"]],
        ["adjust","SKILL","deception",1,null,"circumstance bonus to interact with Token Guards and convicted criminals such as prison inmates"],
        ["adjust","SKILL","diplomacy",1,null,"circumstance bonus to interact with Token Guards and convicted criminals such as prison inmates"],
        ["adjust","SKILL","intimidation",1,null,"circumstance bonus to interact with Token Guards and convicted criminals such as prison inmates"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 208,
    "name": "Godless Graycloak",
    "rarity": "COMMON",
    "description": "__You were a member of a church once, and you saw some things among Absalom's religious elite that put you off piety for good. Maybe it was one too many beggars turned away at the temple's front door, or maybe it was a high-ranking priests consistent abuses of power. What got to you most, though, was that according to just about every belief system out there, sinners and saints, priests and paupers were all alike in one key way: they never saw retribution or accolades until buried 6 feet under. You wanted more from Absalom. You wanted more from the world. You wanted justice now, on this plane, not in some indeterminate afterlife. So you left the church and wandered the city, a ghost of your former self.\nYou finally found a like mind in Captain Runewulf, \"the Unbeliever\", whose reputation and similar distaste for religion inspired you to join the Graycloaks. As a sworn protector of the Ascendant Court, you didn't differentiate between Sarenites or Pharasmins, Iomedaeans or Norgorberites; if you saw someone in danger, you put your life on the line to save them, whatever their place within or outside a church.__\n__Your good record has earned you a transfer-temporary or not, the choice is yours-to the newly formed Edgewatch, where you'll use your authority to guard the lives of not just Absalomians, but all who have come to your grand city to experience its wonders.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou're trained in the Religion skill and your choice of a specific religion Lore skill (such as Iomedae Lore or Norgorber Lore). You gain a +1 circumstance bonus to Deception, Diplomacy, and Intimidation checks to interact with Graycloaks, priests, and clerics. You gain the (feat: Quick Identification) feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Religion:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Quick Identification",
        "CONDITIONAL-INCREASE-SKILL_Deception=1~circumstance bonus to interact with Graycloaks, priests, and clerics",
        "CONDITIONAL-INCREASE-SKILL_Diplomacy=1~circumstance bonus to interact with Graycloaks, priests, and clerics",
        "CONDITIONAL-INCREASE-SKILL_Intimidation=1~circumstance bonus to interact with Graycloaks, priests, and clerics"
    ],
    "isArchived": true,
    "contentSrc": "AGENTS-OF-EDGEWATCH",
    "version": "1.0",
    "createdAt": "2020-11-15T03:32:10",
    "updatedAt": "2020-11-15T03:32:10",
    "wsci": [
        ["giveProfIn","religion","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["quick identification"]],
        ["adjust","SKILL","deception",1,null,"circumstance bonus to interact with Graycloaks, priests, and clerics"],
        ["adjust","SKILL","diplomacy",1,null,"circumstance bonus to interact with Graycloaks, priests, and clerics"],
        ["adjust","SKILL","intimidation",1,null,"circumstance bonus to interact with Graycloaks, priests, and clerics"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 209,
    "name": "Grizzled Muckrucker",
    "rarity": "COMMON",
    "description": "__You've served on the Muckruckers, the unofficial guards of the flooded Puddles district. The pay's no good, the conditions are squalid, and you've seen things during your time on the force that've made you question your career entirely. Perhaps you joined the group out of a sense of duty to your fellow Absalomians, or maybe you felt an obligation to help restore your apocalyptic home district to some semblance of normalcy. Either way, the traumas you've endured, the double-crossers who've betrayed you, the wretched monsters that have crawled out of the muck to assail you – it's enough to turn an officer to weary cynicism or self-destruction through merciful drink.__\n__Thankfully, you found an out: an invitation to transfer to the newly formed Edgewatch. You accepted the offer in the hope that some fresh experience in a new district, surrounded by new people, might reignite the hope and passion you felt for the job so long ago.__\nChoose two ability boosts. One must be to Constitution or Charisma, and one is a free ability boost.\nYou're trained in the Survival skill, as well as either Labor Lore or Underworld Lore. You gain a +1 circumstance bonus to Deception, Diplomacy, and Intimidation checks to interact with Muckruckers, mercenaries, and adventurers. You gain the (feat: Experienced Tracker) skill feat.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Experienced Tracker",
        "CONDITIONAL-INCREASE-SKILL_Deception=1~circumstance bonus to interact with Muckruckers, mercenaries, and adventurers",
        "CONDITIONAL-INCREASE-SKILL_Diplomacy=1~circumstance bonus to interact with Muckruckers, mercenaries, and adventurers",
        "CONDITIONAL-INCREASE-SKILL_Intimidation=1~circumstance bonus to interact with Muckruckers, mercenaries, and adventurers"
    ],
    "isArchived": true,
    "contentSrc": "AGENTS-OF-EDGEWATCH",
    "version": "1.0",
    "createdAt": "2020-11-15T03:34:26",
    "updatedAt": "2020-11-15T03:34:26",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["experienced tracker"]],
        ["adjust","SKILL","deception",1,null,"circumstance bonus to interact with Muckruckers, mercenaries, and adventurers"],
        ["adjust","SKILL","diplomacy",1,null,"circumstance bonus to interact with Muckruckers, mercenaries, and adventurers"],
        ["adjust","SKILL","intimidation",1,null,"circumstance bonus to interact with Muckruckers, mercenaries, and adventurers"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 210,
    "name": "Harbor Guard Moonlighter",
    "rarity": "COMMON",
    "description": "__The Harbor Guard isn't known for being the most honorable precinct in town. A few years after you joined the force, you became disillusioned by the rampant corruption within the precinct and the district at large. One night, you stumbled on an ad for a local monster hunter's guild. You joined on a whim, but fell in love with the swashbuckling lifestyle of an independent bounty hunter. You've since earned quite a reputation for your nocturnal adventures; everyone still knows that you're a Harbor Guard, but stories of your dungeon-delving adventures have long overshadowed that facet of your life. Unfortunately, long nights of monster-hunting have negatively impacted your performance at your day job, so maybe it wasn't a surprise when your supervising officer put in a transfer request for you, spelling the end of your plucky nighttime antics with that particular guild.__\n__Despite the decline in your performance, Lieutenant Lavarsus of Edgewatch sees potential (and even, maybe, a bit of himself) in you. You're eager to be on a new unit and for the chance to bring your monster-hunting skills to a district that has been plagued by such supernatural beasts for far too long.__\nChoose two ability boosts. One must be to Strength or Constitution, and one is a free ability boost.\nYou're trained in the Athletics skill and your choice of Sailing Lore or Hunting Lore. You gain a +1 circumstance bonus to Deception, Diplomacy, and Intimidation checks to interact with Harbor Guards, ship captains, and freelance adventurers. You gain the (feat: Quick Jump) skill feat.",
    "boostOne": "STR,CON",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Quick Jump",
        "CONDITIONAL-INCREASE-SKILL_Deception=1~circumstance bonus to interact with Harbor Guards, ship captains, and freelance adventurers",
        "CONDITIONAL-INCREASE-SKILL_Diplomacy=1~circumstance bonus to interact with Harbor Guards, ship captains, and freelance adventurers",
        "CONDITIONAL-INCREASE-SKILL_Intimidation=1~circumstance bonus to interact with Harbor Guards, ship captains, and freelance adventurers"
    ],
    "isArchived": true,
    "contentSrc": "AGENTS-OF-EDGEWATCH",
    "version": "1.0",
    "createdAt": "2020-11-15T03:36:46",
    "updatedAt": "2020-11-15T03:36:46",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["quick jump"]],
        ["adjust","SKILL","deception",1,null,"circumstance bonus to interact with Harbor Guards, ship captains, and freelance adventurers"],
        ["adjust","SKILL","diplomacy",1,null,"circumstance bonus to interact with Harbor Guards, ship captains, and freelance adventurers"],
        ["adjust","SKILL","intimidation",1,null,"circumstance bonus to interact with Harbor Guards, ship captains, and freelance adventurers"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 211,
    "name": "Learned Guard Prodigy",
    "rarity": "COMMON",
    "description": "__For some, the nuts and bolts of keeping the peace are practically second nature. Such is the case for you, a member of the Learned Guard with an incredible mind for investigation as well as a gift for understanding magic. You probably aren't a hit with your peers, who find your intellect and natural gift of deduction perhaps a bit off-putting, but when left to your own devices you excel, and you get along well with professors and mages such as those who work in Forae Logos or the Arcanamirium.__\n__After no shortage of debating the pros and cons, you decided to transfer to the Edgewatch precinct. Sure, you have a keen understanding of the theories and principles behind law enforcement, but you've reasoned that in order to be a truly effective guard you'll need some first-hand experience in a high-risk area nabbing suspects and protecting innocents – all the while taking fastidious notes and writing your grand thesis on the merits and shortcomings of Absalom's laws.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou're trained in your choice of the Arcana or Occultism skill, as well as Legal Lore. You gain a +1 circumstance bonus to Deception, Diplomacy, and Intimidation checks to interact with Learned Guards and with academics such as librarians and scholars. You gain the (feat: Recognize Spell) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Arcana,Occultism]",
        "GIVE-LORE=Legal",
        "GIVE-FEAT-NAME=Recognize Spell",
        "CONDITIONAL-INCREASE-SKILL_Deception=1~circumstance bonus to interact with Learned Guards and with academics such as librarians and scholars",
        "CONDITIONAL-INCREASE-SKILL_Diplomacy=1~circumstance bonus to interact with Learned Guards and with academics such as librarians and scholars",
        "CONDITIONAL-INCREASE-SKILL_Intimidation=1~circumstance bonus to interact with Learned Guards and with academics such as librarians and scholars"
    ],
    "isArchived": true,
    "contentSrc": "AGENTS-OF-EDGEWATCH",
    "version": "1.0",
    "createdAt": "2020-11-15T03:40:17",
    "updatedAt": "2020-11-15T03:40:17",
    "wsci": [
        ["giveSkill","T",["arcana","occultism"]],
        ["giveLore","Legal"],
        ["giveFeatName",["recognize spell"]],
        ["adjust","SKILL","deception",1,null,"circumstance bonus to interact with Learned Guards and with academics such as librarians and scholars"],
        ["adjust","SKILL","diplomacy",1,null,"circumstance bonus to interact with Learned Guards and with academics such as librarians and scholars"],
        ["adjust","SKILL","intimidation",1,null,"circumstance bonus to interact with Learned Guards and with academics such as librarians and scholars"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 212,
    "name": "Political Scion",
    "rarity": "COMMON",
    "description": "__Like your parents and your parents before them, you initially followed the long path toward politics from an early age. Your close association with Absalom's upper echelons put you in touch with the city's various military or special operations units – the First Guard, the Wave Riders, the Varlokkur – though you avoided any actual duty with these groups. Thanks to your strict upbringing and the connections of your family, you soon became a lauded and highly respected member of Absalom's political elite. But you couldn't stifle a certain feeling that you were destined for more than simply filling the pointed shoes of your forebears. Despite your easily earned accolades and a relatively cushy life as a young lawyer or councilmember, you sought to do more with your diplomatic training and not live out the exact same life as your ancestors.__\n__Your decision to transfer to the Edgewatch has rubbed your traditionalist family the wrong way, and they've cut off the financial aid they've provided you your whole life. But you don't care – you know you're doing the right thing by taking on the rough jobs of a low-ranking guard, and you're ready to shine based on your own merits, not those of your lofty kin.__\nChoose two ability boosts. One must be to Constitution or Intelligence, and one is a free ability boost.\nYou're trained in the Diplomacy skill and Legal Lore. You gain a +1 circumstance bonus to Deception, Diplomacy, and Intimidation checks to interact with members of Absalom's political establishment. You gain the (feat: Hobnobber) skill feat.",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE=Legal",
        "GIVE-FEAT-NAME=Hobnobber",
        "CONDITIONAL-INCREASE-SKILL_Deception=1~circumstance bonus to interact with members of Absalom's political establishment",
        "CONDITIONAL-INCREASE-SKILL_Diplomacy=1~circumstance bonus to interact with members of Absalom's political establishment",
        "CONDITIONAL-INCREASE-SKILL_Intimidation=1~circumstance bonus to interact with members of Absalom's political establishment"
    ],
    "isArchived": true,
    "contentSrc": "AGENTS-OF-EDGEWATCH",
    "version": "1.0",
    "createdAt": "2020-11-15T03:43:42",
    "updatedAt": "2020-11-15T03:43:42",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLore","Legal"],
        ["giveFeatName",["hobnobber"]],
        ["adjust","SKILL","deception",1,null,"circumstance bonus to interact with members of Absalom's political establishment"],
        ["adjust","SKILL","diplomacy",1,null,"circumstance bonus to interact with members of Absalom's political establishment"],
        ["adjust","SKILL","intimidation",1,null,"circumstance bonus to interact with members of Absalom's political establishment"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 213,
    "name": "Post Guard of All Trade",
    "rarity": "COMMON",
    "description": "__Not all cops are passionate about their jobs. For some, the pursuit of justice is just another way to pay the bills. Honestly, it was probably the Post Guard's generous time-off policy that drew you to their service, and during your yearly sabbaticals you've dabbled in hobbies as diverse as fishing, baking, or even stand-up comedy. Even while on duty, you're probably idly fiddling with a lucky coin or practicing magic tricks with a deck of cards. You probably irritate your fellow guards a bit with your non sequiturs, casual attitude, and tendency to daydream, but results don't lie, and more often than not you prove your worth when the chips are down.__\n__For all the excitement of guarding Absalom's Postern Gate, the Post Guard wasn't really the right fit for someone as distractible as yourself, so your boss put in a “promotion” for you to transfer to the newly formed Edgewatch. You're all for the reassignment, since it will put you smack in the middle of the most entertaining and diverse gathering of the century, the Radiant Festival.__\nChoose two ability boosts. One must be to Dexterity or Intelligence, and one is a free ability boost.\nYou're trained in the Performance skill, a Lore skill of your choice, and you gain a bonus language. You gain a +1 circumstance bonus to Deception, Diplomacy, and Intimidation checks to interact with Post Guards. You gain the (feat: Dubious Knowledge) skill feat.",
    "boostOne": "DEX,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Performance:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-LANG-BONUS-ONLY",
        "GIVE-FEAT-NAME=Dubious Knowledge",
        "CONDITIONAL-INCREASE-SKILL_Deception=1~circumstance bonus to interact with Post Guards",
        "CONDITIONAL-INCREASE-SKILL_Diplomacy=1~circumstance bonus to interact with Post Guards",
        "CONDITIONAL-INCREASE-SKILL_Intimidation=1~circumstance bonus to interact with Post Guards"
    ],
    "isArchived": true,
    "contentSrc": "AGENTS-OF-EDGEWATCH",
    "version": "1.0",
    "createdAt": "2020-11-15T03:47:00",
    "updatedAt": "2020-11-15T03:47:00",
    "wsci": [
        ["giveProfIn","performance","T"],
        ["giveLoreChoose"],
        ["giveLangBonusOnly"],
        ["giveFeatName",["dubious knowledge"]],
        ["adjust","SKILL","deception",1,null,"circumstance bonus to interact with Post Guards"],
        ["adjust","SKILL","diplomacy",1,null,"circumstance bonus to interact with Post Guards"],
        ["adjust","SKILL","intimidation",1,null,"circumstance bonus to interact with Post Guards"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 214,
    "name": "Sally Guard Neophyte",
    "rarity": "COMMON",
    "description": "__You joined the Sally Guard, Westgate's guard precinct, at an early age, bringing with you the requisite steel armor, sword, and lance, though your gear is of dubious make. The other guards may have suspected that you were a novice with less combat experience than them; if so, you proved their suspicions on your first day of training when your mount immediately threw you in the mud. A supervisor took mercy on you and offered to transfer you to another guard unit in the city, promising that you'd have a place on the Sally Guard when you decided you were ready for the challenge.__\n__Biting your lip in shame, you took the Edgewatch reassignment in order to gain the experience necessary to go back to your home district with your head held high. You'll prove them wrong, one way or another, and show everyone that you can protect the ones you hold most dear.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou're trained in the Nature skill and your choice of Hunting Lore or Stabling Lore. You start out with a riding horse (page 295), as well as a suit of shoddy (item: half-plate armor | Half Plate), a shoddy (item: longsword), and a shoddy (item: lance).",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Nature:T",
        "GIVE-LORE-CHOOSE"
    ],
    "isArchived": true,
    "contentSrc": "AGENTS-OF-EDGEWATCH",
    "version": "1.0",
    "createdAt": "2020-11-15T03:51:33",
    "updatedAt": "2020-11-15T03:51:33",
    "wsci": [
        ["giveProfIn","nature","T"],
        ["giveLoreChoose"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 215,
    "name": "Sleepless Suns Star",
    "rarity": "COMMON",
    "description": "__Among your fellow guards who patrol the Foreign Quarter, you're something of a big deal. Your good work and big personality have made a big enough splash that word has gotten out about your status as a rising star among the watchdogs of Absalom. Your popularity has also earned you the trust of many citizens of the Foreign Quarter.__\n__Your laudable performance has earned you a transfer to the newly formed Edgewatch in the Precipice Quarter, where you'll put your formidable reputation to good use by patrolling the Radiant Festival and ensuring the safety of Absalom's most vulnerable visitors.__\nChoose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.\nYou're trained in the Society, plus either Gladiatorial Lore or Genealogy Lore. You gain a +1 circumstance bonus to Deception, Diplomacy, and Intimidation checks to interact with members of the Sleepless Suns and residents of the Foreign Quarter. You gain the (feat: Multilingual) skill feat.",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Multilingual",
        "CONDITIONAL-INCREASE-SKILL_Deception=1~circumstance bonus to interact with members of the Sleepless Suns and residents of the Foreign Quarter",
        "CONDITIONAL-INCREASE-SKILL_Diplomacy=1~circumstance bonus to interact with members of the Sleepless Suns and residents of the Foreign Quarter",
        "CONDITIONAL-INCREASE-SKILL_Intimidation=1~circumstance bonus to interact with members of the Sleepless Suns and residents of the Foreign Quarter"
    ],
    "isArchived": true,
    "contentSrc": "AGENTS-OF-EDGEWATCH",
    "version": "1.0",
    "createdAt": "2020-11-15T03:53:45",
    "updatedAt": "2020-11-15T03:53:45",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["multilingual"]],
        ["adjust","SKILL","deception",1,null,"circumstance bonus to interact with members of the Sleepless Suns and residents of the Foreign Quarter"],
        ["adjust","SKILL","diplomacy",1,null,"circumstance bonus to interact with members of the Sleepless Suns and residents of the Foreign Quarter"],
        ["adjust","SKILL","intimidation",1,null,"circumstance bonus to interact with members of the Sleepless Suns and residents of the Foreign Quarter"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 216,
    "name": "Undercover Lotus Guard",
    "rarity": "COMMON",
    "description": "__It's a well-known secret that for every playhouse in the Ivy District, there's an underground criminal element lurking somewhere in the shadows. To get intel on the occultists, assassins, and thieves' guilds that pull the strings of power in the Ivy District, the Lotus Guard trains some of the best undercover agents and operatives in all of Absalom. You're one such agent, and you've put your life on the line more times than you can count by getting close to the Ivy's most dangerous criminals. Your risky missions and thrill-seeking derring-do have earned you many accolades – but also no shortage of enemies.__\n__You transferred to the Edgewatch after your cover was unexpectedly blown and you needed a safe place to lie low away from the Ivy District. With your mastery of disguise and your ability to confidently converse with criminal masterminds, it won't be long before you've made yourself an indispensable undercover operator in this precinct as well.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou're trained in the Deception skill, Art Lore, and Underworld Lore. You gain a +1 circumstance bonus to Deception, Diplomacy, and Intimidation checks to interact with Lotus Guards and high-ranking criminals like guild masters, gang leaders, and mob bosses. You gain the (feat: Charming Liar) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Deception:T",
        "GIVE-LORE=Art",
        "GIVE-LORE=Underworld",
        "GIVE-FEAT-NAME=Charming Liar",
        "CONDITIONAL-INCREASE-SKILL_Deception=1~circumstance bonus to interact with Lotus Guards and high-ranking criminals like guild masters, gang leaders, and mob bosses",
        "CONDITIONAL-INCREASE-SKILL_Diplomacy=1~circumstance bonus to interact with Lotus Guards and high-ranking criminals like guild masters, gang leaders, and mob bosses",
        "CONDITIONAL-INCREASE-SKILL_Intimidation=1~circumstance bonus to interact with Lotus Guards and high-ranking criminals like guild masters, gang leaders, and mob bosses"
    ],
    "isArchived": true,
    "contentSrc": "AGENTS-OF-EDGEWATCH",
    "version": "1.0",
    "createdAt": "2020-11-15T03:56:41",
    "updatedAt": "2020-11-15T03:56:41",
    "wsci": [
        ["giveProfIn","deception","T"],
        ["giveLore","Art"],
        ["giveLore","Underworld"],
        ["giveFeatName",["charming liar"]],
        ["adjust","SKILL","deception",1,null,"circumstance bonus to interact with Lotus Guards and high-ranking criminals like guild masters, gang leaders, and mob bosses"],
        ["adjust","SKILL","diplomacy",1,null,"circumstance bonus to interact with Lotus Guards and high-ranking criminals like guild masters, gang leaders, and mob bosses"],
        ["adjust","SKILL","intimidation",1,null,"circumstance bonus to interact with Lotus Guards and high-ranking criminals like guild masters, gang leaders, and mob bosses"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 218,
    "name": "Archaeologist",
    "rarity": "COMMON",
    "description": "__You've excavated enough sites to know that ancient civilizations aren't lost; they're merely buried and waiting for the right scholar to unearth them and tell their story. You might have worked as a laborer or local guide before learning formal archaeological techniques.__\nChoose two ability boosts. One must be to Constitution or Intelligence, and one is a free ability boost.\nYou're trained in the Society skill, and the Architecture Lore skill. You gain the (feat: Additional Lore) skill feat related to an ancient culture or the history of a culture you've studied (such as Azlanti Lore or Osirian History Lore).",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Architecture",
        "GIVE-FEAT-NAME=Additional Lore"
    ],
    "isArchived": true,
    "contentSrc": "LOST-SOCIETY-GUIDE",
    "version": "1.0",
    "createdAt": "2020-11-16T12:47:54",
    "updatedAt": "2020-11-16T12:47:54",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Architecture"],
        ["giveFeatName",["additional lore"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 219,
    "name": "Pathfinder Recruiter",
    "rarity": "COMMON",
    "description": "__The Pathfinder Society's always on the lookout for talent, but that talent rarely just stumbles into the Grand Lodge. Whether you're professionally trained to encourage new recruits or the Society's own scouts identified your potential and raised you from childhood, you're committed to expanding the Society's roster.__\nChoose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.\nYou're trained in the Diplomacy skill, and a Lore skill related to one city you've visited often. You gain the (feat: Group Impression) skill feat.",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Group Impression"
    ],
    "isArchived": true,
    "contentSrc": "LOST-SOCIETY-GUIDE",
    "version": "1.0",
    "createdAt": "2020-11-16T12:50:54",
    "updatedAt": "2020-11-16T12:50:54",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["group impression"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 221,
    "name": "Spell Seeker",
    "rarity": "COMMON",
    "description": "__Conventional magic can only hold your attention for so long. Instead, you've devoted yourself to understanding truly esoteric spells, which invariably draws you to explore the world and all its eldritch traditions.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou're trained in your choice of either the Arcana or Occultism skill, as well as the Library Lore skill. You gain the (Feat: Recognize Spell) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Arcana,Occultism]",
        "GIVE-LORE=Library",
        "GIVE-FEAT-NAME=Recognize Spell"
    ],
    "isArchived": true,
    "contentSrc": "LOST-SOCIETY-GUIDE",
    "version": "1.0",
    "createdAt": "2020-11-16T12:56:35",
    "updatedAt": "2020-11-16T12:56:35",
    "wsci": [
        ["giveSkill","T",["arcana","occultism"]],
        ["giveLore","Library"],
        ["giveFeatName",["recognize spell"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 222,
    "name": "Trailblazer",
    "rarity": "COMMON",
    "description": "__Uncharted realms have always intrigued you, and you've explored and mapped large territories in service to merchants, governments, or your own curiosity. Where some see a blank spot on a map, you see the potential for something new and undiscovered.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou're trained in the Survival skill, and the Cartography Lore skill. You gain the (feat: Terrain Expertise) skill feat with one terrain you've explored (such as forest or underground).",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE=Cartography",
        "GIVE-FEAT-NAME=Terrain Expertise"
    ],
    "isArchived": true,
    "contentSrc": "LOST-SOCIETY-GUIDE",
    "version": "1.0",
    "createdAt": "2020-11-16T12:58:53",
    "updatedAt": "2020-11-16T12:58:53",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLore","Cartography"],
        ["giveFeatName",["terrain expertise"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 223,
    "name": "Translator",
    "rarity": "COMMON",
    "description": "__In your youth, you learned to transcribe books and translate scrolls to preserve knowledge or perhaps to aid wealthy merchants and politicians. Whether you set out to make your own fortune or are drawn to decipher the strangest codes, your linguistic training will guide your discoveries.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou're trained in the Society skill, and the Scribing Lore skill. You gain the (feat: Multilingual) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Scribing",
        "GIVE-FEAT-NAME=Multilingual"
    ],
    "isArchived": true,
    "contentSrc": "LOST-SOCIETY-GUIDE",
    "version": "1.0",
    "createdAt": "2020-11-16T13:01:38",
    "updatedAt": "2020-11-16T13:01:38",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Scribing"],
        ["giveFeatName",["multilingual"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 224,
    "name": "Harrow-Led",
    "rarity": "COMMON",
    "description": "__You were the subject of a harrow reading at a pivotal point in your life, such as on an important birthday, or upon reaching adulthood. The reading was eerily accurate and has been relevant, for good or ill, at more points in your life than you could call mere coincidence.__\nRandomly determine two harrow suits tied to your character, each reflecting a specific ability score. You can do so by drawing cards from a harrow deck or by rolling a d6: 1 = hammers (**Strength**), 2 = keys (**Dexterity**), 3 = shields (**Constitution**), 4 = books (**Intelligence**), 5 = stars (**Wisdom**), 6 = crowns (**Charisma**). The first suit is your aligned score, and the second suit is your misaligned score.\nChoose two ability boosts. One must be to your aligned or misaligned score, and one is a free ability boost. You're trained in your choice of the Occultism, Performance, or Society skill and the Harrow Lore skill. You gain the (feat: Dubious Knowledge) skill feat.",
    "boostOne": "STR,DEX,CON,INT,WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Occultism,Performance,Society]",
        "GIVE-LORE=Harrow",
        "GIVE-FEAT-NAME=Dubious Knowledge"
    ],
    "isArchived": true,
    "contentSrc": "AGENTS-OF-EDGEWATCH",
    "version": "1.0",
    "createdAt": "2020-11-25T07:53:02",
    "updatedAt": "2020-11-25T07:53:02",
    "wsci": [
        ["giveSkill","T",["occultism","performance","society"]],
        ["giveLore","Harrow"],
        ["giveFeatName",["dubious knowledge"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 225,
    "name": "Bibliophile",
    "rarity": "COMMON",
    "description": "__You love few things more than a good book, and as a result, Odd Stories is your favorite shop in Otari. The bookseller Morlibint supplies you with fiction, anthologies, and other delightful reads, and he’s always eager to discuss his latest finds with you. You know that imagination is the greatest magic, but a working knowledge of actual magic helps, too.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou’re trained in the Arcana skill and the Library Lore skill. You gain the (feat: Arcane Sense) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Arcana:T",
        "GIVE-LORE=Library",
        "GIVE-FEAT-NAME=Arcane Sense"
    ],
    "isArchived": true,
    "contentSrc": "ABOMINATION-VAULTS",
    "version": "1.0",
    "createdAt": "2021-01-16T23:32:37",
    "updatedAt": "2021-01-16T23:32:37",
    "wsci": [
        ["giveProfIn","arcana","T"],
        ["giveLore","Library"],
        ["giveFeatName",["arcane sense"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 226,
    "name": "Eldritch Anatomist",
    "rarity": "COMMON",
    "description": "__You’re a trained physician who can ably tend wounds of many kinds. But more than a practitioner, you’re a scholar. Some cultures shape flesh to extreme degrees, creating aberrations from humanoid forms. The fleshforges of distant Nex practice this fleshwarping, as do certain subterranean societies you hope to one day study – preferably from a safe and clinical distance.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in the Medicine skill and the Fleshwarp Lore skill. You gain the (feat: Assurance) skill feat with Medicine.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Medicine:T",
        "GIVE-LORE=Fleshwarp",
        "GIVE-FEAT-NAME=Assurance"
    ],
    "isArchived": true,
    "contentSrc": "ABOMINATION-VAULTS",
    "version": "1.0",
    "createdAt": "2021-01-16T23:35:09",
    "updatedAt": "2021-01-16T23:35:09",
    "wsci": [
        ["giveProfIn","medicine","T"],
        ["giveLore","Fleshwarp"],
        ["giveFeatName",["assurance"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 227,
    "name": "Fogfen Tale-Teller",
    "rarity": "COMMON",
    "description": "__You know there are monstrous things out in the swamp known as Fogfen; you’ve seen these things through the mist, gliding through the murky water and heaving themselves over sodden bits of land. No one in Otari believes your tales of swamp monsters from the depths, even when you embellish the creatures of your stories with fangs, wings, or tentacles. You’ll just have to prove to them that there are truly monsters out there, and that they were wrong to doubt you.__\nChoose two ability boosts. One must be to Strength or Charisma, and one is a free ability boost.\nYou’re trained in Athletics and the Swamp Lore skill. You gain the (feat: Titan Wrestler) skill feat.",
    "boostOne": "STR,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE=Swamp",
        "GIVE-FEAT-NAME=Titan Wrestler"
    ],
    "isArchived": true,
    "contentSrc": "ABOMINATION-VAULTS",
    "version": "1.0",
    "createdAt": "2021-01-16T23:37:18",
    "updatedAt": "2021-01-16T23:37:18",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLore","Swamp"],
        ["giveFeatName",["titan wrestler"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 228,
    "name": "Market Runner",
    "rarity": "COMMON",
    "description": "__Keeleno Lathenar, the proprietor of Otari Market, is a grim and bitter man. A werewolf named Jaul Mezmin mauled his wife, Ayla, to death 30 years ago. Keeleno has never forgotten nor forgiven this attack, and he believes against all odds that Jaul has evaded justice and is alive and well. Running errands for Keeleno around town, you’ve gotten to know him almost as well as you know Otari. Keeleno’s suspicions have rubbed off on you a bit, so you keep a wary eye on other people – particularly around the full moon.__\nChoose two ability boosts. One must be to Constitution or Charisma, and one is a free ability boost.\nYou’re trained in the Diplomacy skill and the Otari Lore skill. You gain the (feat: Hobnobber) skill feat.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE=Otari",
        "GIVE-FEAT-NAME=Hobnobber"
    ],
    "isArchived": true,
    "contentSrc": "ABOMINATION-VAULTS",
    "version": "1.0",
    "createdAt": "2021-01-16T23:39:37",
    "updatedAt": "2021-01-16T23:39:37",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLore","Otari"],
        ["giveFeatName",["hobnobber"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 229,
    "name": "Ruin Delver",
    "rarity": "COMMON",
    "description": "__You’ve looked through some of the smaller ruins in the Otari hinterlands but have never quite built up the courage to check out the creepy lighthouse called Gauntlight. You’ve heard that these ruins are pretty well picked over, and mostly collapsed, but you always planned to some day explore them and perhaps find some bauble left behind from the centuries-old battle where the Roseguard slew an evil sorcerer. You know that the crumbled stone of old ruins has a tendency to shift, so you’d better step lightly if you get the chance to explore Gauntlight.__\nChoose two ability boosts. One must be to Dexterity or Intelligence, and one is a free ability boost.\nYou’re trained in Acrobatics and the Roseguard Lore skill. You gain the (feat: Cat Fall) skill feat.",
    "boostOne": "DEX,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Acrobatics:T",
        "GIVE-LORE=Roseguard",
        "GIVE-FEAT-NAME=Cat Fall"
    ],
    "isArchived": true,
    "contentSrc": "ABOMINATION-VAULTS",
    "version": "1.0",
    "createdAt": "2021-01-16T23:41:53",
    "updatedAt": "2021-01-16T23:41:53",
    "wsci": [
        ["giveProfIn","acrobatics","T"],
        ["giveLore","Roseguard"],
        ["giveFeatName",["cat fall"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 230,
    "name": "Starwatcher",
    "rarity": "COMMON",
    "description": "__You’re one of Wrin Sivinxi’s closest confidantes. You’ve spent many long nights with her under the stars, learning the tales associated with the Cosmic Caravan and how the heavens can predict the future. You know that Wrin has paralyzing claustrophobia; she sees menace in angles and danger in confined spaces, which is why her shop is an all domed canvas that opens to the sky. If Wrin thinks there’s trouble, you’ll be the first to offer to help.__\nChoose two ability boosts. One must be to Constitution or Intelligence, and one is a free ability boost.\nYou’re trained in the Occultism skill and the Astrology Lore skill. You gain the (feat: Dubious Knowledge) skill feat.",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Occultism:T",
        "GIVE-LORE=Astrology",
        "GIVE-FEAT-NAME=Dubious Knowledge"
    ],
    "isArchived": true,
    "contentSrc": "ABOMINATION-VAULTS",
    "version": "1.0",
    "createdAt": "2021-01-16T23:44:14",
    "updatedAt": "2021-01-16T23:44:14",
    "wsci": [
        ["giveProfIn","occultism","T"],
        ["giveLore","Astrology"],
        ["giveFeatName",["dubious knowledge"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 231,
    "name": "Witchlight Follower",
    "rarity": "COMMON",
    "description": "__While in a dismal forest or remote swamp, you caught sight of a string of lights bobbing through the trees. You stepped forward for a closer look, and then still further when the lights retreated a few paces. Then you remembered the rumors. Will-o’-wisps, rushlights, corpse lanterns – whatever they’re called – such evil creatures lead people to their doom. With a supreme effort of will, you broke free from the alluring enchantment, and you’ve resolved to never let the strange lights of remote wildernesses claim you again.__\nChoose two ability boosts. One must be to Dexterity or Wisdom, and one is a free ability boost.\nYou’re trained in Survival and the Wisp Lore skill. You gain the (feat: Terrain Expertise) skill feat with both swamp terrain and subterranean bodies of water.",
    "boostOne": "DEX,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE=Wisp",
        "GIVE-FEAT-NAME=Terrain Expertise"
    ],
    "isArchived": true,
    "contentSrc": "ABOMINATION-VAULTS",
    "version": "1.0",
    "createdAt": "2021-01-16T23:46:22",
    "updatedAt": "2021-01-16T23:46:22",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLore","Wisp"],
        ["giveFeatName",["terrain expertise"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 283,
    "name": "Sewer Dragon",
    "rarity": "COMMON",
    "description": "~ Prerequisites: Kobold ancestry\n__You are one of the Sewer Dragons, born in Absalom's sewers, strengthened by a life defending your territory.__\nChoose two ability boosts. One must be to Dexterity or Intelligence, and one is a free ability boost.\nYou're trained in the Crafting skill, and the Kobold Lore skill. You gain the (feat: Snare Crafting) skill feat.",
    "boostOne": "DEX,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-LORE=Kobold",
        "GIVE-FEAT-NAME=Snare Crafting"
    ],
    "isArchived": true,
    "contentSrc": "PATH-SOCIETY",
    "version": "1.0",
    "createdAt": "2021-04-28T00:25:20",
    "updatedAt": "2021-04-28T00:25:20",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveLore","Kobold"],
        ["giveFeatName",["snare crafting"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 284,
    "name": "Demon Slayer",
    "rarity": "COMMON",
    "description": "__For over a century, Mendev led a multinational coalition against ever-growing abyssal invaders in the Worldwound, and the Pathfinder Society aided in the so-called Fifth Crusade that ultimately sealed the planar rift and defeated its demon armies. You might be a hardened recruit who clashed with the demons, or perhaps you were a survivor who lost everything to the fiendish armies and narrowly escaped—or was rescued by Pathfinders. Your exposure to the Worldwound has taught you vital lessons in identifying fiends and their magic.__\nChoose two ability boosts. One must be to Strength or Constitution, and one is a free ability boost.\nYou're trained in the Religion skill, and the Demon Lore skill. You gain the (feat: Recognize Spell) skill feat. Add (language: Abyssal) to the list of additional languages you can learn for having a high Intelligence modifier.",
    "boostOne": "STR,CON",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Religion:T",
        "GIVE-LORE=Demon",
        "GIVE-FEAT-NAME=Recognize Spell"
    ],
    "isArchived": true,
    "contentSrc": "PATH-SOCIETY",
    "version": "1.0",
    "createdAt": "2021-04-28T00:34:14",
    "updatedAt": "2021-04-28T00:34:14",
    "wsci": [
        ["giveProfIn","religion","T"],
        ["giveLore","Demon"],
        ["giveFeatName",["recognize spell"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 285,
    "name": "Early Explorer",
    "rarity": "COMMON",
    "description": "__In the past decade, the Pathfinder Society has clashed with demonic armies, meddled in politics, and more, but you joined the organization before everything seemed so complicated. Whether you’re a dedicated scholar of ruins or an explorer who just longs for months-long expeditions into the wilderness, you’re a Pathfinder to explore, report, and cooperate.__\nChoose two ability boosts. One must be to Strength or Wisdom, and one is a free ability boost.\nYou're trained in the Survival skill, and the Pathfinder Society Lore skill. You gain the (feat: Forager) skill feat.",
    "boostOne": "STR,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE=Pathfinder Society",
        "GIVE-FEAT-NAME=Forager"
    ],
    "isArchived": true,
    "contentSrc": "PATH-SOCIETY",
    "version": "1.0",
    "createdAt": "2021-04-28T00:44:14",
    "updatedAt": "2021-04-28T00:44:14",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLore","Pathfinder Society"],
        ["giveFeatName",["forager"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 286,
    "name": "Faction Opportunist",
    "rarity": "COMMON",
    "description": "__As the Pathfinder Society's influence has grown, so too did many of its factions become wealthier and more powerful. These factions relied on a host of Pathfinders and independent operatives alike to establish trade networks, shape national politics, and more, and you were among the specialists who helped one of these factions realize its goal. These events provided you countless opportunities to develop your own contacts and negotiating skills.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou're trained in the Diplomacy skill, plus either Guild Lore, Heraldry Lore, or Mercantile Lore. You gain the (feat: Hobnobber) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Hobnobber"
    ],
    "isArchived": true,
    "contentSrc": "PATH-SOCIETY",
    "version": "1.0",
    "createdAt": "2021-04-28T00:47:03",
    "updatedAt": "2021-04-28T00:47:03",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["hobnobber"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 287,
    "name": "Finadar Leshy",
    "rarity": "COMMON",
    "description": "~ Prerequisites: Leshy ancestry\n__You are a leshy from Finadar Forest, originally created under the corruption of a cyclopean monolith. Though the Pathfinder Society managed to sever the monolith’s connection, freeing the forest and your people from its influence, you retain a trace, unnerving connection to the Abyss.__\nChoose two ability boosts. One must be to Constitution or Charisma, and one is a free ability boost.\nYou're trained in the Intimidation skill, and the Abyssal Lore skill. You gain the (feat: Intimidating Glare) skill feat.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-LORE=Abyssal",
        "GIVE-FEAT-NAME=Intimidating Glare"
    ],
    "isArchived": true,
    "contentSrc": "PATH-SOCIETY",
    "version": "1.0",
    "createdAt": "2021-04-28T01:03:53",
    "updatedAt": "2021-04-28T01:03:53",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveLore","Abyssal"],
        ["giveFeatName",["intimidating glare"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 288,
    "name": "Former Aspis Agent",
    "rarity": "COMMON",
    "description": "__For more than a century, the Pathfinder Society has clashed with the avaricious and underhanded Aspis Consortium, and several years ago the Society dealt its rival a decisive blow. You may be one of the few survivors of a doomed Aspis expedition, or perhaps you chafed at the Consortium’s villainous practices and defected to the Pathfinders. No matter your reasons, you know how to be efficient and ruthless when the circumstances demand.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou're trained in the Intimidation skill, and the Aspis Consortium Lore skill. You gain the (feat: Group Coercion) skill feat. You gain access to any uncommon options as though you were a member of the Aspis Consortium.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-LORE=Aspis Consortium",
        "GIVE-FEAT-NAME=Group Coercion"
    ],
    "isArchived": true,
    "contentSrc": "PATH-SOCIETY",
    "version": "1.0",
    "createdAt": "2021-04-28T01:05:48",
    "updatedAt": "2021-04-28T01:05:48",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveLore","Aspis Consortium"],
        ["giveFeatName",["group coercion"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 289,
    "name": "Deckhand",
    "rarity": "COMMON",
    "description": "__The rolling waves of the high seas, the constant sway of the deck underfoot, and the creaking heights of a ship's rigging are as familiar to you as solid ground. You might have worked on a simple fishing boat, a wealthy merchant's galley, a mighty warship—or even a pirate's caravel. Whether your crew retired, your ship sank, or you've turned to adventuring so you can keep all the treasure for yourself, you still retain an excellent sense of balance and quick reflexes.__\nChoose two ability boosts. One must be to Strength or Dexterity, and one is a free ability boost.\nYou're trained in the Acrobatics skill, and the Sailing Lore skill. You gain the (feat: Cat Fall) skill feat.",
    "boostOne": "STR,DEX",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Acrobatics:T",
        "GIVE-LORE=Sailing",
        "GIVE-FEAT-NAME=Cat Fall"
    ],
    "isArchived": true,
    "contentSrc": "PATH-SOCIETY",
    "version": "1.0",
    "createdAt": "2021-04-28T17:40:11",
    "updatedAt": "2021-04-28T17:40:11",
    "wsci": [
        ["giveProfIn","acrobatics","T"],
        ["giveLore","Sailing"],
        ["giveFeatName",["cat fall"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 295,
    "name": "Alkenstar Tinker",
    "rarity": "COMMON",
    "description": "__Creating all sorts of minor inventions scratches your itch for problem-solving. Your engineering skills take a particularly creative bent, and no one know what you’ll come up with next. It might be a genius device with tremendous potential... or it might explode.__\nChoose two ability boosts. One must be to Dexterity or Intelligence, and one is a free ability boost.\nYou’re trained in the Crafting skill and the Engineering Lore skill. You gain the (feat: Alchemical Crafting) skill feat.",
    "boostOne": "DEX,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-LORE=Engineering",
        "GIVE-FEAT-NAME=Alchemical Crafting"
    ],
    "isArchived": true,
    "contentSrc": "LOST-WORLD-GUIDE",
    "version": "1.0",
    "createdAt": "2021-05-07T21:56:33",
    "updatedAt": "2021-05-07T21:56:33",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveLore","Engineering"],
        ["giveFeatName",["alchemical crafting"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 333,
    "name": "Ruby Phoenix Fanatic",
    "rarity": "RARE",
    "description": "__Have you heard of the peerless sorcerer Hao Jin, also known as the Ruby Phoenix? Of course you have! You're her biggest fan! She's got amazing powers of self-resurrection, her hair is as red and fiery as a phoenix, and she has a huge vault full of the most incredible treasures in the multiverse. Now she's finally back from a mysterious 300-year quest on the plane of Axis so she can host this year's Ruby Phoenix Tournament—and you can't wait to meet her!__\n__In order to get as close to Hao Jin as possible, you've researched everything there is to know about the Ruby Phoenix's home, her planar escapades, and her competition. You've also trained your body to prove yourself a worthy champion. When Hao Jin's committee invited you and some friends to take part in the tournament's prequalifier, you just about fainted from excitement. Is your dream of meeting the Ruby Phoenix about to come true? As long as you win enough matches to get into the actual tournament, it just might! Just try not to act too star-struck when you finally get a chance to talk to her, okay?__\nChoose two ability boosts. One must be to Constitution or Intelligence, and one is a free ability boost.\nYou're trained in the Axis Lore, Gladiatorial Lore, and Goka Lore skills., and a Lore skill. You gain the (feat: Dubious Knowledge) skill feat.",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-LORE=Axis",
        "GIVE-LORE=Gladiatorial",
        "GIVE-LORE=Goka",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Dubious Knowledge"
    ],
    "isArchived": true,
    "contentSrc": "FIST-PHOENIX",
    "version": "1.0",
    "createdAt": "2021-07-08T05:59:50",
    "updatedAt": "2021-07-08T05:59:50",
    "wsci": [
        ["giveLore","Axis"],
        ["giveLore","Gladiatorial"],
        ["giveLore","Goka"],
        ["giveLoreChoose"],
        ["giveFeatName",["dubious knowledge"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 334,
    "name": "Abadar's Avenger",
    "rarity": "COMMON",
    "description": "__Hao Jin really has some nerve for a supposed disciple of Abadar. First, she dares to start a collection of trinkets in hopes of emulating the great Abadar's unsurpassable First Vault. As if that weren't enough, she also sets up a contest to give away her most powerful treasures to anyone who can throw a punch! Abadar hasn't directly told you as much, per se, but surely this kind of hubris can't sit well with your beloved deity, regardless of Hao Jin's own supposed ties to the Master of the First Vault. At the very least, someone's got to check out this shoddy imitation of the First Vault and write a report for the church of Abadar—and you've decided that someone is you.__\n__With or without the blessing of an actual priest of Abadar, you've taken it upon yourself to investigate Hao Jin's “wondrous” vault by winning her Ruby Phoenix Tournament. You read a few flyers about the tournament's home city and joined the first team that could handle your righteous zealotry, but any more preparation would be a waste of time. You clearly have the divine will of Abadar on your side (but again, no actual proof of this), which is all you'll need to win this tournament and dispel any notions of Hao Jin's ties to your patron deity.__\nChoose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.\nYou're trained in the Religion skill, and the Goka Lore skill. You gain the (feat: Assurance) skill feat with Religion.",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Religion:T",
        "GIVE-LORE=Goka",
        "GIVE-FEAT-NAME=Assurance"
    ],
    "isArchived": true,
    "contentSrc": "FIST-PHOENIX",
    "version": "1.0",
    "createdAt": "2021-07-08T05:59:59",
    "updatedAt": "2021-07-08T05:59:59",
    "wsci": [
        ["giveProfIn","religion","T"],
        ["giveLore","Goka"],
        ["giveFeatName",["assurance"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 336,
    "name": "Newcomer in Need",
    "rarity": "COMMON",
    "description": "__You're a Gokan native in a bad spot, and you're going to need a miracle to get you out of your current fix. Miracles are in short supply, but the title of Ruby Phoenix Champion might just do the trick.\nMaybe you need the prize money to pay for a relative's expensive operation or to free your family from debt to Golden League gangsters. Or maybe there's a particular prize in Hao Jin's vault that could literally save your life—an amulet you can use to flee to the farthest corners of the multiverse or even an artifact that could resurrect you if you die, just like the Ruby Phoenix.\nThe tough circumstances of your upbringing in one of Goka's more downtrodden neighborhoods—such as industrial Oldtown, the slums of the Scales district, or even the crime-ridden undercity—taught you lessons of self-reliance and how to quickly make friends in unlikely circumstances. You've scraped together an entry into the Ruby Phoenix Tournament's prequalifier with a team you can trust. Now all that's left is to pull off the impossible and win this thing once and for all.__\nChoose two ability boosts. One must be to Dexterity or Constitution, and one is a free ability boost.\nYou're trained in the Society skill, and the Goka Lore skill. You gain the (feat: Streetwise) skill feat.",
    "boostOne": "DEX,CON",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Goka",
        "GIVE-FEAT-NAME=Streetwise"
    ],
    "isArchived": true,
    "contentSrc": "FIST-PHOENIX",
    "version": "1.0",
    "createdAt": "2021-07-08T06:00:41",
    "updatedAt": "2021-07-08T06:00:41",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Goka"],
        ["giveFeatName",["streetwise"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 338,
    "name": "Undercover Contender",
    "rarity": "COMMON",
    "description": "__Gangsters and cheats seem as drawn to the Ruby Phoenix Tournament as piranhas to a bloody hippo, and you're dead set on making sure this tournament is as scandal-free as possible. Your reasons are your own—maybe a high-ranking official in Goka has tasked you with the case, or maybe foul play led to losing someone dear to you in the last tournament. Maybe you just hate to see fair fighters get knocked out by crooked contenders. Whatever your motives, you've promised to be in the ring in case anyone tries to derail the contest. The Golden League crime syndicate is the most obvious suspect, what with their meddling in the Ruby Phoenix Tournament a decade ago, but maybe there will be others—unscrupulous contenders trying to pull one over on Hao Jin, perhaps, or an entirely new devious conspiracy hoping to hijack the event for their own evil purposes. In any case, you'll be around to deliver the hammer of justice.\nYou've told a small squad of your closest confidants about your mission, and you've managed to secure a spot in the tournament's prequalifier along with them. You and your team have to win fights to stay in the competition long enough to make sure things go smoothly. If that means you end up being the Ruby Phoenix Champions, all the better.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou're trained in the Deception skill, and the Underworld Lore skill. You gain the (feat: Lengthy Diversion) skill feat.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Deception:T",
        "GIVE-LORE=Underworld",
        "GIVE-FEAT-NAME=Lengthy Diversion"
    ],
    "isArchived": true,
    "contentSrc": "FIST-PHOENIX",
    "version": "1.0",
    "createdAt": "2021-07-08T06:03:12",
    "updatedAt": "2021-07-08T06:03:12",
    "wsci": [
        ["giveProfIn","deception","T"],
        ["giveLore","Underworld"],
        ["giveFeatName",["lengthy diversion"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 370,
    "name": "Sponsored by a Stranger",
    "rarity": "COMMON",
    "description": "__You remember the day the stranger approached you to make several peculiar inquiries. You don't remember much about them, other than a large head and a frail body. At first, the stranger's questions seemed odd: how might forgotten history nevertheless shape the present, whether an insect hive mind could be manipulated at a distance, and so on. You don't remember all of the questions, and you don't know why you could refuse to answer some but felt compelled to answer others. The stranger nevertheless seemed pleased with your responses and insisted you would find study at the Magaambya enlightening. You never saw them again, but you're now here at the Magaambya, with more questions than answers about your future.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou're trained in your choice of the Occultism or Nature skill. You gain your choice of the (feat: Dubious Knowledge) or (feat: Quick Identification) skill feat. You're also trained in Insect Lore.\nYour recommended primary branch is the Rain-Scribes.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Occultism,Nature]",
        "GIVE-LORE=Insect",
        "GIVE-FEAT-FROM=Choose a Feat:Dubious Knowledge,Quick Identification"
    ],
    "isArchived": true,
    "contentSrc": "STRENGTH-THOUSANDS",
    "version": "1.0",
    "createdAt": "2021-08-13T05:28:53",
    "updatedAt": "2021-08-13T05:28:53",
    "wsci": [
        ["giveSkill","T",["occultism","nature"]],
        ["giveLore","Insect"],
        ["giveFeatFrom","Choose a Feat",["Dubious Knowledge","Quick Identification"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 371,
    "name": "Sponsored by Family",
    "rarity": "COMMON",
    "description": "__Several members of your family have studied at the Magaambya, although not all of them have graduated as lore-speakers (or even advanced past initiates to become attendants). Your family has decided that you're an excellent candidate to join their ranks. Although lore-speakers of the Magaambya know they are supported by the strength of thousands of graduates who have come before them, you can take the smaller, more personal comfort in the support of your family.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou're trained in your choice of the Diplomacy or Society skill. You gain a skill feat: (feat: Hobnobber) if you chose Diplomacy or (feat: Eye for Numbers) if you chose Society. You're also trained in Magaambya Lore.\nYour recommended primary branch is the Uzunjati.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Diplomacy,Society]",
        "GIVE-LORE=Magaambya",
        "GIVE-FEAT-FROM=Choose a Feat:Hobnobber,Eye for Numbers"
    ],
    "isArchived": true,
    "contentSrc": "STRENGTH-THOUSANDS",
    "version": "1.0",
    "createdAt": "2021-08-13T05:31:32",
    "updatedAt": "2021-08-13T05:31:32",
    "wsci": [
        ["giveSkill","T",["diplomacy","society"]],
        ["giveLore","Magaambya"],
        ["giveFeatFrom","Choose a Feat",["Hobnobber","Eye for Numbers"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 372,
    "name": "Sponsored by Teacher Ot",
    "rarity": "COMMON",
    "description": "__You have known the Magaambyan teacher Takulu Ot and his wife Niana for many years. Both are amateur bird-watchers and musicians, and you share one of these hobbies. They are pleasant people and well-regarded in Nantambu, although their unshakable generosity and friendliness strike cynics as too earnest to be genuine. You know otherwise; Takulu and Niana are just as sincere as they appear. Takulu always seemed to watch you with a discerning eye, and one day he idly observed that you'd do well at the Magaambya. Talking about it further with him, Takulu agreed that he would sponsor you personally and be the one to give your intake interview. With a twinkle in his eye, he asked that you call him Teacher Ot from now on, just as all of his students do.__\nChoose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.\nYou're trained in your choice of the Survival or Performance skill. You gain a skill feat: (feat: Survey Wildlife) if you chose Survival or (feat: Impressive Performance) if you chose Performance. You're also trained in Nantambu Lore.\nYour recommended primary branch is the Emerald Boughs.",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Survival,Performance]",
        "GIVE-LORE=Nantambu",
        "GIVE-FEAT-FROM=Choose a Feat:Survey Wildlife,Impressive Performance"
    ],
    "isArchived": true,
    "contentSrc": "STRENGTH-THOUSANDS",
    "version": "1.0",
    "createdAt": "2021-08-13T05:34:00",
    "updatedAt": "2021-08-13T05:34:00",
    "wsci": [
        ["giveSkill","T",["survival","performance"]],
        ["giveLore","Nantambu"],
        ["giveFeatFrom","Choose a Feat",["Survey Wildlife","Impressive Performance"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 373,
    "name": "Sponsored by Village",
    "rarity": "COMMON",
    "description": "__You come from a small community far from any large cities, but the Magaambya is known even in your isolated corner of the world. You have shown more scholarly talent than anyone from your village in many years, perhaps even generations, and the village elders have insisted you explore your potential at the Magaambya. Whether you were eager to leave or not seemed irrelevant to the elders; you had the talent, so you must go. You don't know how the elders had the connections or influence to sponsor your education there, but you've left your tightknit community behind for the city of Nantambu and the Magaambya at its heart.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou're trained in your choice of the Crafting or Survival skill. You gain a skill feat: (feat: Crafter's Appraisal) if you chose Crafting or (feat: Forager) if you chose Survival. You're also trained in the Lore skill appropriate for the terrain around your community (such as Forest Lore or Jungle Lore).\nYour recommended primary branch is the Cascade Bearers.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Crafting,Survival]",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-FROM=Choose a Feat:Crafter's Appraisal,Forager"
    ],
    "isArchived": true,
    "contentSrc": "STRENGTH-THOUSANDS",
    "version": "1.0",
    "createdAt": "2021-08-13T05:37:01",
    "updatedAt": "2021-08-13T05:37:01",
    "wsci": [
        ["giveSkill","T",["crafting","survival"]],
        ["giveLoreChoose"],
        ["giveFeatFrom","Choose a Feat",["Crafter's Appraisal","Forager"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 374,
    "name": "Unsponsored",
    "rarity": "COMMON",
    "description": "__You have aspirations of attending the Magaambya academy of magic, but fate seemed to thwart you at every turn. You were unable to obtain a sponsorship and lost a collection of helpful textbooks to unexpected insect damage. You nevertheless made the long trip to Nantambu through terrible weather, uncharacteristically bad roads, and indifferent fellow travelers. Yet you have persevered. Now that you are here, alone but determined, you won't let anything stand in your way.__\nChoose two ability boosts. One must be to Constitution or Charisma, and one is a free ability boost.\nYou're trained in your choice of the Diplomacy or Intimidation skill. You gain a skill feat: (feat: Group Impression) if you chose Diplomacy or (feat: Intimidating Glare) if you chose Intimidation. You're also trained in Academia Lore.\nYour recommended primary branch is the Tempest-Sun Mages.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Diplomacy,Intimidation]",
        "GIVE-LORE=Academia",
        "GIVE-FEAT-FROM=Choose a Feat:Group Impression,Intimidating Glare"
    ],
    "isArchived": true,
    "contentSrc": "STRENGTH-THOUSANDS",
    "version": "1.0",
    "createdAt": "2021-08-13T05:39:56",
    "updatedAt": "2021-08-13T05:39:56",
    "wsci": [
        ["giveSkill","T",["diplomacy","intimidation"]],
        ["giveLore","Academia"],
        ["giveFeatFrom","Choose a Feat",["Group Impression","Intimidating Glare"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 377,
    "name": "Astrologer",
    "rarity": "COMMON",
    "description": "__Astrologers look to the stars for signs and portents, using their positions to chart courses for those living beneath them. As the celestial spheres move, so does fate itself. You studied the stars and learned to divine your path based on their guidance. Whether the stars directly called you to a life of adventure or you use the stars to guide your wanderlust, you’re living out the stars’ guidance in a life of adventure.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in Occultism and Astrology Lore. You gain the (feat: Oddity Identification) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=SKILL_Occultism:T",
        "GIVE-LORE=Astrology",
        "GIVE-FEAT-NAME=Oddity Identification"
    ],
    "isArchived": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "version": "1.0",
    "createdAt": "2021-08-21T06:30:11",
    "updatedAt": "2021-08-21T06:30:11",
    "wsci": [
        ["giveProfIn","skill_occultism","T"],
        ["giveLore","Astrology"],
        ["giveFeatName",["oddity identification"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 378,
    "name": "Eidolon Contact",
    "rarity": "COMMON",
    "description": "__You’ve come into contact with a disembodied being of magical essence known as an eidolon. You might have forged a powerful conduit with that eidolon, allowing you to manifest it as a summoner, but it’s much more likely that you lost contact over time, though not before learning a few half-remembered secrets. If you lost contact, you might have become an adventurer to try to reach the eidolon again, or to be sure that you’re rid of it forever.__\nChoose two ability boosts. One must be to Constitution or Charisma, and one is a free ability boost.\nYou’re trained in your choice of Arcana, Nature, Occultism, or Religion, and a Lore skill for the creature associated with your contacted eidolon (such as Angel Lore or Dragon Lore). You gain the (feat: Dubious Knowledge) skill feat.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Arcana,Nature,Occultism,Religion]",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Dubious Knowledge"
    ],
    "isArchived": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "version": "1.0",
    "createdAt": "2021-08-21T06:32:34",
    "updatedAt": "2021-08-21T06:32:34",
    "wsci": [
        ["giveSkill","T",["arcana","nature","occultism","religion"]],
        ["giveLoreChoose"],
        ["giveFeatName",["dubious knowledge"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 379,
    "name": "False Medium",
    "rarity": "COMMON",
    "description": "__There are people in this world who possess the ability to pierce the veil between the world of the living and the world of the dead, allowing them to communicate with spirits. You... are not one of them. But you know enough about the occult, as well as cold reading tricks and various practices from local religions, to scam your way into people’s coinpurses. Unlike a through-and-through charlatan, there’s some real occult methodology behind your flimflam, but that’s likely cold comfort to the people you swindle. Whether you decided to take a more righteous path, were caught and pledged to make it right, or still slip in a few “séances” between adventures, you’ve taken to an adventuring lifestyle as you move from place to place.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou’re trained in Occultism and Fortune-Telling Lore. You gain the (feat: Deceptive Worship) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=SKILL_Occultism:T",
        "GIVE-LORE=Fortune-Telling",
        "GIVE-FEAT-NAME=Deceptive Worship"
    ],
    "isArchived": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "version": "1.0",
    "createdAt": "2021-08-21T06:35:15",
    "updatedAt": "2021-08-21T06:35:15",
    "wsci": [
        ["giveProfIn","skill_occultism","T"],
        ["giveLore","Fortune-Telling"],
        ["giveFeatName",["deceptive worship"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 380,
    "name": "Magical Merchant",
    "rarity": "COMMON",
    "description": "__Selling magic items isn’t like being an ordinary merchant. The wares you buy and sell are expensive, making each sale rare and lucrative. You’ve developed knowledge of expert handiwork to ensure you don’t fall for a scam, since buying a single counterfeit item can lead to bankruptcy. Whether you went out of business and had to find alternative employment, or took up adventuring to acquire new merchandise, you’ve taken to adventuring yourself.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in Crafting and Mercantile Lore. You gain the (feat: Crafter's Appraisal) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=SKILL_Crafting:T",
        "GIVE-LORE=Mercantile",
        "GIVE-FEAT-NAME=Crafter's Appraisal"
    ],
    "isArchived": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "version": "1.0",
    "createdAt": "2021-08-21T06:37:15",
    "updatedAt": "2021-08-21T06:37:15",
    "wsci": [
        ["giveProfIn","skill_crafting","T"],
        ["giveLore","Mercantile"],
        ["giveFeatName",["crafter's appraisal"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 381,
    "name": "Magical Misfit",
    "rarity": "COMMON",
    "description": "__You don’t understand folks who claim that magical talent is some sort of burden or great responsibility; you’ve always used your magic to cause trouble and to escape the consequences. Whether becoming an adventurer is your attempt to make amends or just a new way to make some mischief, you’re excited to see where it takes you, and you still delight in using your skills to get out of trouble.__\nChoose two ability boosts. One must be to Intelligence or Dexterity, and one is a free ability boost.\nYou’re trained in Arcana and Underworld Lore. You gain the (feat: Trick Magic Item) skill feat.",
    "boostOne": "DEX,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=SKILL_Arcana:T",
        "GIVE-LORE=Underworld",
        "GIVE-FEAT-NAME=Trick Magic Item"
    ],
    "isArchived": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "version": "1.0",
    "createdAt": "2021-08-21T06:38:52",
    "updatedAt": "2021-08-21T06:38:52",
    "wsci": [
        ["giveProfIn","skill_arcana","T"],
        ["giveLore","Underworld"],
        ["giveFeatName",["trick magic item"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 382,
    "name": "Musical Prodigy",
    "rarity": "COMMON",
    "description": "__Ever since you were young, you’ve been almost supernaturally skilled in a particular type of music. The people around you were sure you’d grow up to perform at royal courts or to become a world-famous composer, but you’ve chosen a life of adventure instead. You might have given up on those dreams to find your own meaning, or you might find that adventuring allows you to experience unfiltered emotions and exploits that you can translate into a wondrous symphony some day.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou’re trained in Performance and Music Lore. You gain the (feat: Virtuosic Performer) skill feat.\n",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=SKILL_Performance:T",
        "GIVE-LORE=Music",
        "GIVE-FEAT-NAME=Virtuosic Performer"
    ],
    "isArchived": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "version": "1.0",
    "createdAt": "2021-08-21T06:40:31",
    "updatedAt": "2021-08-21T06:40:31",
    "wsci": [
        ["giveProfIn","skill_performance","T"],
        ["giveLore","Music"],
        ["giveFeatName",["virtuosic performer"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 383,
    "name": "Occult Librarian",
    "rarity": "COMMON",
    "description": "__Hours spent reading numerous compendiums dedicated to various occult topics honed your knowledge of these more obscure magical arts. You might have taken to adventuring to finance your acquisition of rare tomes, to explore occult mysteries that can’t be found in the pages of a book, or perhaps to put your skills to the test.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in the Occultism skill and the Academia Lore skill. You gain the (feat: Schooled in Secrets) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=SKILL_Occultism:T",
        "GIVE-LORE=Academia",
        "GIVE-FEAT-NAME=Schooled in Secrets"
    ],
    "isArchived": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "version": "1.0",
    "createdAt": "2021-08-21T06:42:17",
    "updatedAt": "2021-08-21T06:42:17",
    "wsci": [
        ["giveProfIn","skill_occultism","T"],
        ["giveLore","Academia"],
        ["giveFeatName",["schooled in secrets"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 384,
    "name": "Plant Whisperer",
    "rarity": "COMMON",
    "description": "__You’ve always had a green thumb, allowing you to care for plants that others found too difficult to grow and tend with a skill that borders on the magical. As you travel, you encounter all sorts of new plants and plant creatures, allowing you to expand your horizons and deepen your understanding of flora.__\nChoose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.\nYou’re trained in Nature and Plant Lore. You gain the (feat: Natural Medicine) skill feat.",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=SKILL_Nature:T",
        "GIVE-LORE=Plant",
        "GIVE-FEAT-NAME=Natural Medicine"
    ],
    "isArchived": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "version": "1.0",
    "createdAt": "2021-08-21T06:46:45",
    "updatedAt": "2021-08-21T06:46:45",
    "wsci": [
        ["giveProfIn","skill_nature","T"],
        ["giveLore","Plant"],
        ["giveFeatName",["natural medicine"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 385,
    "name": "Street Preacher",
    "rarity": "COMMON",
    "description": "__Forget the church orthodoxy and the stuffy cloisters—spreading the word of your god to the people is your calling. You’ve preached on the street corners and in public houses, to wanderers on the road and to captives in the stocks. Adventuring can take you across the world. What vocation could better serve to take your holy words to fresh ears?__\nChoose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.\nYou’re trained in the Religion skill and the Lore skill for your patron deity. You gain the (feat: Dubious Knowledge) skill feat.",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=SKILL_Religion:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Dubious Knowledge"
    ],
    "isArchived": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "version": "1.0",
    "createdAt": "2021-08-21T06:49:21",
    "updatedAt": "2021-08-21T06:49:21",
    "wsci": [
        ["giveProfIn","skill_religion","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["dubious knowledge"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 386,
    "name": "Student of Magic",
    "rarity": "COMMON",
    "description": "__You are currently enrolled at a school of magic, where you’re learning the fundamentals of your magical tradition. Whether your adventuring occurs during breaks between semesters, as part of a work study program, or even within the halls of the academy itself, you’ll have to learn to juggle your dual life.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in your choice of Arcana, Nature, Occultism, or Religion, as well as Academia Lore. You gain the (feat: Recognize Spell) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Arcana,Nature,Occultism,Religion]",
        "GIVE-LORE=Academia",
        "GIVE-FEAT-NAME=Recognize Spell"
    ],
    "isArchived": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "version": "1.0",
    "createdAt": "2021-08-21T06:52:03",
    "updatedAt": "2021-08-21T06:52:03",
    "wsci": [
        ["giveSkill","T",["arcana","nature","occultism","religion"]],
        ["giveLore","Academia"],
        ["giveFeatName",["recognize spell"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 387,
    "name": "Anti-Magical",
    "rarity": "RARE",
    "description": "__Magic has never worked quite right around you. Perhaps you have become a magic-user in spite of that, or perhaps you use your unique ability to fight magic-users.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou’re trained in a Lore skill of your choice, though it can’t be about a magical subject (as determined by the GM if it’s unclear). Whenever you would be affected by magic, even your own magic or that of an ally, the originator of the effect must attempt a DC 3 flat check. On a failure, the magic doesn’t affect you (though it still has its normal effects on anyone else). On a success, the magic affects you and there is no need to attempt further flat checks for the same magical effect, even if it affects you again later.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-LORE-CHOOSE"
    ],
    "isArchived": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "version": "1.0",
    "createdAt": "2021-08-21T06:55:41",
    "updatedAt": "2021-08-21T06:55:41",
    "wsci": [
        ["giveLoreChoose"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 388,
    "name": "Chosen One",
    "rarity": "RARE",
    "description": "__Your birth has fulfilled a prediction, and people close to you are counting on you to do great things. There’s intense pressure on you to be up to the task, and the fickle nature of prophecy complicates your path.__\nChoose two ability boosts. One must be to Strength or Charisma, and one is a free ability boost.\nDecide with your GM the basics of the prophecy in which you’re meant to play a major part. You’re trained in one skill related to the prophecy, and the Fortune-Telling Lore skill. You gain the (action: Prophecy's Pawn) free action.",
    "boostOne": "STR,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T",
        "GIVE-LORE=Fortune-Telling",
        "GIVE-FEAT-NAME=Prophecy's Pawn"
    ],
    "isArchived": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "version": "1.0",
    "createdAt": "2021-08-21T06:58:15",
    "updatedAt": "2021-08-21T06:58:15",
    "wsci": [
        ["giveSkill","T",[]],
        ["giveLore","Fortune-Telling"],
        ["giveFeatName",["prophecy's pawn"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 389,
    "name": "Genie-Blessed",
    "rarity": "RARE",
    "description": "__You’ve sought out a powerful genie and requested their blessing, hoping to increase your fortune. Your wish was vague, but fortune and the genie favored you with a more powerful effect than an ordinary wish, granting you bits of wish-twisted luck throughout the rest of your life. Meanwhile, other genies of the same kind recognize you as one blessed by one of their most powerful nobles, and might treat you with greater respect or envy.__\nChoose two ability boosts. One must be to Charisma, and one is a free ability boost.\nYou’re trained in the Diplomacy skill and the Genie Lore skill. You gain the (action: Wish for Luck) free action.",
    "boostOne": "CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=SKILL_Diplomacy:T",
        "GIVE-LORE=Genie",
        "GIVE-FEAT-NAME=Wish for Luck"
    ],
    "isArchived": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "version": "1.0",
    "createdAt": "2021-08-21T07:10:14",
    "updatedAt": "2021-08-21T07:10:14",
    "wsci": [
        ["giveProfIn","skill_diplomacy","T"],
        ["giveLore","Genie"],
        ["giveFeatName",["wish for luck"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 390,
    "name": "Magical Experiment",
    "rarity": "RARE",
    "description": "__At some point in your life, powerful people performed magical experiments on you that changed you permanently. You may have signed up for this voluntarily, but it may have been against your will. You still bear the marks, as well as the abilities.__\nYou gain one ability boost. It must be to Constitution.\nYou’re trained in Occultism and the Academia Lore skill.\nYou gain one special ability as a result of the magical experimentation. Work with the GM to select an appropriate ability from the list or to come up with another special ability ((feat: Magical Experiment Options)).",
    "boostTwo": "ALL",
    "code": [
        "GIVE-ABILITY-BOOST-SINGLE=CON",
        "GIVE-PROF-IN=SKILL_Occultism:T",
        "GIVE-LORE=Academia",
        "GIVE-FEAT-NAME=Magical Experiment Options"
    ],
    "isArchived": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "version": "1.0",
    "createdAt": "2021-08-21T07:17:12",
    "updatedAt": "2021-08-21T07:17:12",
    "wsci": [
        ["giveAbilityBoostSingle",["CON"]],
        ["giveProfIn","skill_occultism","T"],
        ["giveLore","Academia"],
        ["giveFeatName",["magical experiment options"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 391,
    "name": "Seer of the Dead",
    "rarity": "RARE",
    "description": "__You have long been gifted with the ability to see and speak with the departed. This could have manifested at your birth or when a chance encounter linked you inextricably to the spirits of the dead. Their constant presence might feel like a curse, or it might provide you with welcome companionship.__\nYou gain one ability boost. It must be to Constitution or Wisdom.\nYou’re trained in Religion and Undead Lore. You gain the effects of the (spell: spirit sense) spell at all times.",
    "boostTwo": "ALL",
    "code": [
        "GIVE-ABILITY-BOOST-SINGLE=CON,WIS",
        "GIVE-PROF-IN=SKILL_Religion:T",
        "GIVE-LORE=Undead"
    ],
    "isArchived": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "version": "1.0",
    "createdAt": "2021-08-21T07:36:31",
    "updatedAt": "2021-08-21T07:36:31",
    "wsci": [
        ["giveAbilityBoostSingle",["CON","WIS"]],
        ["giveProfIn","skill_religion","T"],
        ["giveLore","Undead"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 394,
    "name": "Time Traveler",
    "rarity": "RARE",
    "description": "__You come from a different time. Whether by your own doing or a terrible accident, powerful magic has resulted in you coming to this time from the future or from the past, but you are unable to return. You might be from New Thassilon, an entire nation of time travelers.__\nChoose two ability boosts. One must be to Dexterity or Intelligence, and one is a free ability boost.\nYou are trained in three Lore skills of your choice that represent your knowledge from your old time. You gain the (action: Bend Time) free action.",
    "boostOne": "DEX,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-LORE-CHOOSE",
        "GIVE-LORE-CHOOSE",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Bend Time"
    ],
    "isArchived": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "version": "1.0",
    "createdAt": "2021-08-21T08:03:47",
    "updatedAt": "2021-08-21T08:03:47",
    "wsci": [
        ["giveLoreChoose"],
        ["giveLoreChoose"],
        ["giveLoreChoose"],
        ["giveFeatName",["bend time"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 412,
    "name": "Song of the Deep",
    "rarity": "RARE",
    "description": "__During a sea voyage, you washed overboard, ingested sea water, and drowned. Merfolk, kelpies, sea serpents, or another magical denizen of the sea pulled your unconscious body from the briny depths. Having spent so much time underwater, your lungs were filled with salt water. To restore your ability to breathe, they exhaled into your lungs and shared the ability to breathe underwater in the process. You came back with the ability to breathe water, as well as a newfound knowledge of your time beneath the waves.__\nYou gain one ability boost. It must be to Strength, Constitution, or Charisma.\nYou’re trained in the Athletics skill and the Ocean Lore skill. You have the ability to breathe underwater.\n~ Special: You can choose to lose the ability to breathe air when you take this background, making you only able to breathe underwater. If you do, you gain a second ability boost, which is a free ability boost.",
    "boostTwo": "ALL",
    "code": [
        "GIVE-ABILITY-BOOST-SINGLE=STR,CON,CHA",
        "GIVE-PROF-IN=SKILL_Athletics:T",
        "GIVE-LORE=Ocean",
        "GIVE-FEAT-FROM=Choose an Option:Song of the Deep - Can Breathe Air,Song of the Deep - Cannot Breathe Air",
        "SHEET-CONCEAL-FEAT-NAME=Song of the Deep - Can Breathe Air",
        "SHEET-CONCEAL-FEAT-NAME=Song of the Deep - Cannot Breathe Air"
    ],
    "isArchived": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "version": "1.0",
    "createdAt": "2021-08-24T00:07:24",
    "updatedAt": "2021-08-24T00:07:24",
    "wsci": [
        ["giveAbilityBoostSingle",["STR","CON","CHA"]],
        ["giveProfIn","skill_athletics","T"],
        ["giveLore","Ocean"],
        ["giveFeatFrom","Choose an Option",["Song of the Deep - Can Breathe Air","Song of the Deep - Cannot Breathe Air"]],
        ["sheetConcealFeatName","song of the deep - can breathe air"],
        ["sheetConcealFeatName","song of the deep - cannot breathe air"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 432,
    "name": "Anti-Tech Activist",
    "rarity": "COMMON",
    "description": "__You’ve seen the sorts of things that technology brings — polluted environments, workers put out of their jobs or horribly injured, and the slow erosion of society — and you’ve vowed to inform the larger world of these ills. You do so with long, impassioned speeches on street corners and village squares and by talking personally with the heads of various guilds. Adventuring into the wider world could help spread your message even farther.__\nChoose two ability boosts. One must be to Constitution or Charisma, and one is a free ability boost.\nYou’re trained in the Intimidation skill and the Guild Lore skill. You gain the (feat: Group Coercion) skill feat.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-LORE=Guild",
        "GIVE-FEAT-NAME=Group Coercion"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-05T02:18:15",
    "updatedAt": "2021-10-05T02:18:15",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveLore","Guild"],
        ["giveFeatName",["group coercion"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 433,
    "name": "Clockfighter",
    "rarity": "COMMON",
    "description": "__While others choose to use their engineering ability to heal the injured or make brilliant innovations, you’ve used your skill to repair and modify clockwork constructs that battle in gladiatorial combat. You know how to get a crowd electrified for your clockwork gladiator, win or lose, and you know how to repair it when it gets damaged. These skills serve you well as an adventurer.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou’re trained in the Crafting skill and the Gladiatorial Lore skill. You gain the (feat: Experienced Professional) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-LORE=Gladiatorial",
        "GIVE-FEAT-NAME=Experienced Professional"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-05T02:20:01",
    "updatedAt": "2021-10-05T02:20:01",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveLore","Gladiatorial"],
        ["giveFeatName",["experienced professional"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 434,
    "name": "Clockwork Researcher",
    "rarity": "COMMON",
    "description": "__New forms of clockwork technology are incredibly interesting to you, and you’ve been studying examples of them to see where else they might be best put to use. You might eventually develop a new prototype machine or find a way to make related technologies practical enough for everyone to benefit. Though before you do, you must continue your research!__\nChoose two ability boosts. One must be to Dexterity or Intelligence, and one is a free ability boost.\nYou’re trained in the Society skill and the Engineering Lore skill. You gain the (feat: Eye for Numbers) skill feat.",
    "boostOne": "DEX,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Engineering",
        "GIVE-FEAT-NAME=Eye for Numbers"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-05T02:21:43",
    "updatedAt": "2021-10-05T02:21:43",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Engineering"],
        ["giveFeatName",["eye for numbers"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 435,
    "name": "Codebreaker",
    "rarity": "COMMON",
    "description": "__Whether you’re employed by a military organization to decipher coded messages sent by enemy factions or work independently to crack an enigma created by a past civilization, you have a head for patterns and linguistics. You might even use new clockwork devices to aid you in your efforts.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in the Society skill and the Cryptography Lore skill. You gain the (feat: Glean Contents) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Cryptography",
        "GIVE-FEAT-NAME=Glean Contents"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-05T02:23:32",
    "updatedAt": "2021-10-05T02:23:32",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Cryptography"],
        ["giveFeatName",["glean contents"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 436,
    "name": "Disciple of the Gear",
    "rarity": "COMMON",
    "description": "__While many regard science and faith as incompatible, you believe scientific advancement is your deity’s will. Perhaps you’re a follower of Brigh, Casandalee, or some other god of technology, or perhaps you see the furnaces and sparks of modernity as the latest manifestation of Sarenrae’s flame or Gozreh’s lightning—whatever the case, you’re always willing to spread the word of your deity, and you’ve learned some basic tinkering to show how your deity’s focus can increase the common standard of living.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in the Crafting skill and the Lore skill for the deity you worship. You gain the (feat: Quick Repair) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Quick Repair"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-05T02:25:41",
    "updatedAt": "2021-10-05T02:25:41",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["quick repair"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 437,
    "name": "Driver",
    "rarity": "COMMON",
    "description": "__You practically live behind the controls of a vehicle, and can handle just about anything the road, waves, and sky can throw at you. You likely adventure to test your skills in unusual environments and new and interesting vehicles.__\nChoose two ability boosts. One must be to Strength or Dexterity, and one is a free ability boost.\nYou’re trained in the Acrobatics skill and the Piloting Lore skill. You gain the (feat: Assurance) skill feat with Piloting Lore.",
    "boostOne": "STR,DEX",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Acrobatics:T",
        "GIVE-LORE=Piloting",
        "GIVE-FEAT-NAME=Assurance"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-05T02:27:30",
    "updatedAt": "2021-10-05T02:27:30",
    "wsci": [
        ["giveProfIn","acrobatics","T"],
        ["giveLore","Piloting"],
        ["giveFeatName",["assurance"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 438,
    "name": "Hounded Thief",
    "rarity": "COMMON",
    "description": "__Some time ago, you stole a unique item from a strange individual. It might have been a piece of clockwork from a far-off land or some other bit of strange technology. You might still have it or you might have sold it, but either way, you can’t shake the feeling that you’re being followed and watched, likely by forces who want to retrieve what you took. Luckily, a life of adventure keeps you on the move.__\nChoose two ability boosts. One must be to Dexterity or Wisdom, and one is a free ability boost.\nYou’re trained in the Thievery skill and the Underworld Lore skill. You gain the (feat: Pickpocket) skill feat.",
    "boostOne": "DEX,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Thievery:T",
        "GIVE-LORE=Underworld",
        "GIVE-FEAT-NAME=Pickpocket"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-05T02:29:21",
    "updatedAt": "2021-10-05T02:29:21",
    "wsci": [
        ["giveProfIn","thievery","T"],
        ["giveLore","Underworld"],
        ["giveFeatName",["pickpocket"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 439,
    "name": "Junker",
    "rarity": "COMMON",
    "description": "__You live on the outskirts of civilization, combing through the detritus left behind for interesting trinkets to sell or use in your own crafting. Though you have a preferred terrain to search, you know that the greatest treasures occur where people make greater use of technology.__\nChoose two ability boosts. One must be to Strength or Wisdom, and one is a free ability boost.\nYou’re trained in the Athletics skill and the Lore skill of the terrain in which you scavenge. You gain the (feat: Hefty Hauler) skill feat.",
    "boostOne": "STR,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Hefty Hauler"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-05T02:30:58",
    "updatedAt": "2021-10-05T02:30:58",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["hefty hauler"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 440,
    "name": "Mechanic",
    "rarity": "COMMON",
    "description": "__The intricate inner workings of machines are no stranger to you. Whether they are mundane devices or complex clockworks, you know what makes them tick and how to maintain them. An adventuring group might keep you around to repair their equipment, or you might travel around to offer your rare services to those in need—for a price, of course!__\nChoose two ability boosts. One must be to Strength or Intelligence, and one is a free ability boost.\nYou’re trained in the Crafting skill and the Engineering Lore skill. You gain the (feat: Quick Repair) skill feat.",
    "boostOne": "STR,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-LORE=Engineering",
        "GIVE-FEAT-NAME=Quick Repair"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-05T02:32:28",
    "updatedAt": "2021-10-05T02:32:28",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveLore","Engineering"],
        ["giveFeatName",["quick repair"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 441,
    "name": "Medicinal Clocksmith",
    "rarity": "COMMON",
    "description": "__While others might have looked to clockwork as a mechanical innovation, you see the potential in the technology to improve the health of patients. You might be an experienced field medic who reached for a scrapped construct to help a wounded soldier, or a vanguard surgeon who’s found replacing organs with clockwork more effective than repairing them. Perhaps you’ve also worked to “optimize” organic bodies with fine machinery, with or without the permission of your patients.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in the Medicine skill and the Engineering Lore skill. You gain the (feat: Risky Surgery) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Medicine:T",
        "GIVE-LORE=Engineering",
        "GIVE-FEAT-NAME=Risky Surgery"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-05T02:34:04",
    "updatedAt": "2021-10-05T02:34:04",
    "wsci": [
        ["giveProfIn","medicine","T"],
        ["giveLore","Engineering"],
        ["giveFeatName",["risky surgery"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 442,
    "name": "Printer",
    "rarity": "COMMON",
    "description": "__Keeping your finger on the pulse of the city, you write a small news broadsheet to sell on street corners. You rent the use of a printing press to achieve this goal, so you’re familiar with such machines. However, people and their stories are your main focus, and you adventure to chase the latest scoop.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou’re trained in the Society skill and the Scribing Lore skill. You gain the (feat: Multilingual) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Scribing",
        "GIVE-FEAT-NAME=Multilingual"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-05T02:35:36",
    "updatedAt": "2021-10-05T02:35:36",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Scribing"],
        ["giveFeatName",["multilingual"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 443,
    "name": "Saboteur",
    "rarity": "COMMON",
    "description": "__Whether you do it for personal enjoyment or at the behest of a mercenary company or military organization, you have a knack for destroying things. You have a sense for an object or structure’s weak spots and know where to deliver a hammer strike or alchemical bomb. You adventure to hone your skills or complete a particular mission.__\nChoose two ability boosts. One must be to Strength or Dexterity, and one is a free ability boost.\nYou’re trained in the Thievery skill and the Engineering Lore skill. You gain the (feat: Concealing Legerdemain) skill feat.",
    "boostOne": "STR,DEX",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Thievery:T",
        "GIVE-LORE=Engineering",
        "GIVE-FEAT-NAME=Concealing Legerdemain"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-05T02:37:39",
    "updatedAt": "2021-10-05T02:37:39",
    "wsci": [
        ["giveProfIn","thievery","T"],
        ["giveLore","Engineering"],
        ["giveFeatName",["concealing legerdemain"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 444,
    "name": "Toymaker",
    "rarity": "COMMON",
    "description": "__You delight in making little trinkets for children of all ages, and seeing their faces light up thanks to one of your creations brings joy to your heart. Perhaps you sell your wares from a particular shop or from the back of a wagon as you travel from town to town.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou’re trained in the Crafting skill and the Mercantile Lore skill. You gain the (feat: Specialty Crafting) skill feat, choosing artistry, blacksmithing, glassmaking, leatherworking, tailoring, or woodworking as your specialty.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-LORE=Mercantile",
        "GIVE-FEAT-NAME=Specialty Crafting"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-05T02:39:21",
    "updatedAt": "2021-10-05T02:39:21",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveLore","Mercantile"],
        ["giveFeatName",["specialty crafting"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 446,
    "name": "Mechanical Symbiosis",
    "rarity": "RARE",
    "description": "__Whether you purposefully took it on or had it thrust upon you, a bronze, clockwork object is latched onto some part of your body. It may have sunk its needles into you or locked its spidery legs around your neck, torso, or upper arm. Some entity or spirit lives in this collection of gears and wires—whether or not other people hear its whispers is up to you. The entity may be an ancient, terrible being that has razed villages with its hosts, or it may be a brilliant, starry-eyed child who barely understands you’re not part of its own body.__\n__You have studied and searched for information on these rare, crab-like machines, leaving you an expert in the binding of elemental spirits or mortal souls to mechanical objects. Though you have several theories on what the symbiotic entity might be, you have no definitive answers—this may be why you’re adventuring in the first place, or perhaps you’ve made a deal with someone to get it removed. The entity might talk to you periodically, or it might only speak when it wants you to do something in particular or finds the two of you in danger. You and the GM should decide on the entity’s motivations, or if the motivations should be a secret known only to the GM.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in the Arcana skill and an additional skill in which the clockwork entity is well-versed, determined by the GM. Any time you attempt a skill check for the entity’s skill, the GM can offer you a +1 circumstance bonus to the check, as though the entity were (action: Aiding | Aid) you. If you accept but fail the check, the entity clenches up and you are stunned 1 (stunned 2 on a critical failure).",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Arcana:T",
        "GIVE-SKILL=T",
        "GIVE-NOTES-FIELD=You may use this area to keep track of the clockwork entity's skill."
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-05T02:48:11",
    "updatedAt": "2021-10-05T02:48:11",
    "wsci": [
        ["giveProfIn","arcana","T"],
        ["giveSkill","T",[]],
        ["giveNotesField","You may use this area to keep track of the clockwork entity's skill."]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 447,
    "name": "Discarded Duplicate",
    "rarity": "RARE",
    "description": "__Someone created you for a specific purpose. Some important person, be they a storied royal, a contentious politician, or a stark military leader, needed a body double for their most dangerous appearances. Using a mixture of fringe science and magic, you were commissioned and trained to emulate this person in every way, and have stood in for them in countless deadly circumstances. You may or may not know the reason behind your decommissioning, but whoever discarded you didn’t finish you off. Now, the world is yours to explore—but “you” may have a bold or brutish reputation, or the individual you were duplicating may be long dead. Regardless of the fate of this individual, your way of life has changed drastically.__\n__You and the GM can work out how to incorporate your previous life into your story. The GM can keep this knowledge hidden even from you, or you or another character know what happened. You and the GM can also leave the information unspecified and fill it in later.__\nYou gain three free ability boosts. You choose two, and the GM chooses one based on the attributes of the character you were built to duplicate.",
    "boostTwo": "ALL",
    "code": [
        "GIVE-ABILITY-BOOST-MULTIPLE=3"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-05T02:48:27",
    "updatedAt": "2021-10-05T02:48:27",
    "wsci": [
        ["giveAbilityBoostMultiple",3]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 448,
    "name": "Saved by Clockwork",
    "rarity": "RARE",
    "description": "__Through bloody combat, a terrible accident, or purposeful sacrifice, you’ve lost some piece of your body that has been replaced with a clockwork mechanism. Whether your arm is now a whirring series of pumps, steel coils, and iron gears; your heart a intricate crystal clock that requires winding every day; or your lower leg a sculpted metal tube powered by adamantine springs and steam, part of you needs regular maintenance and repair. You might have received instructions from the brilliant inventor who saved you, or you might have woken up on a battlefield with no memory of the procedure or the individuals involved. Regardless, you possess the knowledge to take care of yourself—even if it’s how to wind a key in your own heart or reconstruct a mechanical foot.__\nChoose two ability boosts. One must be to Strength or Intelligence, and one is a free ability boost.\nYou’re trained in the Crafting skill. Every day you must perform 10 minutes of maintenance and wind up your clockwork parts, or you risk failure of the components, with consequences depending on what you replaced (determined by you and the GM). Your clockwork components allow you to react to danger with alacrity. You gain a +2 circumstance bonus to initiative rolls.",
    "boostOne": "STR,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "CONDITIONAL-INCREASE-PERCEPTION=2~circumstance bonus to initiative rolls"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-05T02:51:33",
    "updatedAt": "2021-10-05T02:51:33",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["adjust","PERCEPTION",null,2,null,"circumstance bonus to initiative rolls"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 449,
    "name": "Tech-Reliant",
    "rarity": "RARE",
    "description": "__Some event, be it an accident, attack, or disaster, has left you horribly scarred by magic. Your body no longer tolerates magical healing, and you can’t use magic, forcing you to rely on gadgets and ingenuity where others trust in spells and magical items. You might have been well-versed in magic before, or barely familiar with its use. This event may have injured your body in visible ways, but no matter the extent of your injuries, your body no longer interacts with healing magic in any capacity.__\nChoose two ability boosts. One must be to Constitution or Intelligence, and one is a free ability boost.\nYou’re trained in the Crafting skill and the Medicine skill. You gain the (feat: Battle Medicine) skill feat, and a +1 circumstance bonus to saving throws against spells. Healing spells, healing magic items, and magical effects with the (trait: healing) trait have no effect on you.",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-PROF-IN=Medicine:T",
        "GIVE-FEAT-NAME=Battle Medicine",
        "CONDITIONAL-INCREASE-SAVE_FORT=1~circumstance bonus against spells",
        "CONDITIONAL-INCREASE-SAVE_REFLEX=1~circumstance bonus against spells",
        "CONDITIONAL-INCREASE-SAVE_WILL=1~circumstance bonus against spells"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-05T02:55:33",
    "updatedAt": "2021-10-05T02:55:33",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveProfIn","medicine","T"],
        ["giveFeatName",["battle medicine"]],
        ["adjust","SAVE","fort",1,null,"circumstance bonus against spells"],
        ["adjust","SAVE","reflex",1,null,"circumstance bonus against spells"],
        ["adjust","SAVE","will",1,null,"circumstance bonus against spells"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 450,
    "name": "Wished Alive",
    "rarity": "RARE",
    "description": "__Once you were a simple construct or inanimate doll, but due to a deeply felt wish, either yours or another’s, you came to life, and so you’re now a living, breathing creature.__\nChoose two ability boosts. One must be to Constitution or Charisma, and one is a free ability boost.\nYou’re trained in the Diplomacy skill. Once per day, you can fervently wish for something you could work towards achieving as a single action which has the (trait: concentrate) trait. If you do, you gain a +2 circumstance bonus on the first skill check you attempt before the end of your turn to fulfill that wish.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-05T02:57:29",
    "updatedAt": "2021-10-05T02:57:29",
    "wsci": [
        ["giveProfIn","diplomacy","T"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 451,
    "name": "Back-Alley Doctor",
    "rarity": "COMMON",
    "description": "__You’re the medic many turn to when a more official clinic or healer might not be available. You may specialize in stitching up bullet wounds or have a standing, confidential deal with a criminal syndicate to provide your services any time of day or night. In either case, you’ve perhaps turned to the adventuring life because a former client is unhappy with your work or members of the local constabulary have been asking too many questions.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou’re trained in the Medicine skill and the Underworld Lore skill. You gain the (feat: Risky Surgery) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Medicine:T",
        "GIVE-LORE=Underworld",
        "GIVE-FEAT-NAME=Risky Surgery"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-06T06:50:21",
    "updatedAt": "2021-10-06T06:50:21",
    "wsci": [
        ["giveProfIn","medicine","T"],
        ["giveLore","Underworld"],
        ["giveFeatName",["risky surgery"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 452,
    "name": "Cannoneer",
    "rarity": "COMMON",
    "description": "__You served as a crewmate aboard a military vessel or pirate ship and were responsible for the use and maintenance of the ship’s cannons. A strong back and quick reflexes were equally important to you in your duties, and you know your way around explosives and the dangers that lie therein. These skills serve you well in your new life as an adventurer, as compared to the weight of a cannon, a gear load that makes your allies blanche just makes you laugh instead.__\nChoose two ability boosts. One boost must be to Dexterity or Strength, and one is a free ability boost.\nYou’re trained in the Athletics skill and the Warfare Lore skill. You gain the (feat: Hefty Hauler) skill feat.",
    "boostOne": "STR,DEX",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE=Warfare",
        "GIVE-FEAT-NAME=Hefty Hauler"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-06T06:53:52",
    "updatedAt": "2021-10-06T06:53:52",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLore","Warfare"],
        ["giveFeatName",["hefty hauler"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 453,
    "name": "Deputy",
    "rarity": "COMMON",
    "description": "__While your life may have taken some twists and turns in the intervening years, you were once deputized as the lawful protector of a community. While the role was temporary and you’ve since turned in your badge, that responsibility shaped you. Whenever a community is in trouble, and the sheriff is nowhere to be found, residents call on you to capture a criminal, rescue the mayor’s offspring from bandits, or go toe to toe with outlaws.__\nChoose two ability boosts. One must be to Dexterity or Wisdom, and one is a free ability boost.\nYou’re trained in the Survival skill and the Hunting Lore skill. You gain the (feat: Experienced Tracker) skill feat.",
    "boostOne": "DEX,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE=Hunting",
        "GIVE-FEAT-NAME=Experienced Tracker"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-06T06:55:19",
    "updatedAt": "2021-10-06T06:55:19",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLore","Hunting"],
        ["giveFeatName",["experienced tracker"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 454,
    "name": "Fireworks Performer",
    "rarity": "COMMON",
    "description": "__Few celebrations in Tian-Xia are complete without a show of fireworks, and your job is to make sure they go off without a hitch. You load the fireworks, set the fuses, and choreograph the performance, bringing the show together in a finale of lights and explosions. Then it’s time to pack up your gear and move on to the next civic holiday or religious festival. Of course, someone who travels the roads with a pack full of high explosives is bound to run into an adventure or two along the way, and so over time, your fireworks have been spent in support of that life.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou’re trained in the Performance skill and the Engineering Lore skill. You gain the (feat: Fascinating Performance) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Performance:T",
        "GIVE-LORE=Engineering",
        "GIVE-FEAT-NAME=Fascinating Performance"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-06T06:56:59",
    "updatedAt": "2021-10-06T06:56:59",
    "wsci": [
        ["giveProfIn","performance","T"],
        ["giveLore","Engineering"],
        ["giveFeatName",["fascinating performance"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 455,
    "name": "Gunsmith",
    "rarity": "COMMON",
    "description": "__From a young age, you apprenticed to an experienced gunsmith and over time your skill and knowledge rose to match that of your master. Today, you can easily repair, modify, or improve nearly any firearm you’ve seen before, and even if you haven’t seen it, you’ll break it down to learn about what makes it tick in no time. You’ve taken those skills on the road, using them to assist yourself and your allies as an adventurer when it comes to maintaining their weapons, shields, armor, and more.__\nChoose two ability boosts. One of these boosts must be to Intelligence or Dexterity, and one is a free ability boost.\nYou’re trained in the Crafting skill and the Engineering Lore skill. You gain the (feat: Quick Repair) skill feat.",
    "boostOne": "DEX,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-LORE=Engineering",
        "GIVE-FEAT-NAME=Quick Repair"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-06T06:58:06",
    "updatedAt": "2021-10-06T06:58:06",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveLore","Engineering"],
        ["giveFeatName",["quick repair"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 456,
    "name": "Hired Killer",
    "rarity": "COMMON",
    "description": "__Your life truly began after your first kill. Maybe you killed in self-defense, maybe it was a crime of passion, or maybe it was just an accident and you were a kid in the wrong place at the wrong time. In the end, the why doesn’t matter. You got away with it. And then you found that maybe it didn’t bother you as much as it should have. And maybe, just maybe, you had a talent you could use to forge a life for yourself. A blood-soaked talent and a blood-soaked life, sure. But it’s yours.__\nChoose two ability boosts. One boost must be to Strength or Dexterity, and one is a free ability boost.\nYou’re trained in the Stealth skill and the Underworld Lore skill. You gain the (feat: Terrain Stalker) skill feat, choosing a terrain appropriate for where you make your kills.",
    "boostOne": "STR,DEX",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Stealth:T",
        "GIVE-LORE=Underworld",
        "GIVE-FEAT-NAME=Terrain Stalker"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-06T07:02:19",
    "updatedAt": "2021-10-06T07:02:19",
    "wsci": [
        ["giveProfIn","stealth","T"],
        ["giveLore","Underworld"],
        ["giveFeatName",["terrain stalker"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 457,
    "name": "Farmsteader",
    "rarity": "COMMON",
    "description": "__You built your house using wood from the trees surrounding it. Raised it up from the dirt and called it home. You thought that it would be where you would grow old and die. But despite your best efforts, you were wrong. The land that once gave you food fell fallow, and dust took to the air and choked the livestock. Now you wander the world as an adventurer. Are you in search of a new place to settle down and try again, or have you become disillusioned by your old dreams, leading you to seek out a new purpose?__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou’re trained in the Survival skill and the Farming Lore skill. You gain the (feat: Forager) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE=Farming",
        "GIVE-FEAT-NAME=Forager"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-06T07:04:58",
    "updatedAt": "2021-10-06T07:04:58",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLore","Farming"],
        ["giveFeatName",["forager"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 458,
    "name": "Junk Collector",
    "rarity": "COMMON",
    "description": "__You live by the adage that one person’s trash is another’s treasure. Whether by sifting through scrap heaps or digging up old battlefields, you remain on the lookout for lost or discarded objects that you might be able to turn into something useful. More often than not, what you find is just junk... but you’re convinced that one of these days, you’re going to hit the jackpot. You’ve even taken up adventuring as a means to supercharge your access to all sorts of junk, gear, and loot.__\nChoose two ability boosts. One must be to Dexterity or Intelligence, and one is a free ability boost.\nYou’re trained in the Crafting skill and your choice of either the Engineering Lore or Mining Lore skill. You gain the (feat: Crafter’s Appraisal) skill feat.",
    "boostOne": "DEX,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Crafter’s Appraisal"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-06T07:11:26",
    "updatedAt": "2021-10-06T07:11:26",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["crafter’s appraisal"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 459,
    "name": "Saloon Entertainer",
    "rarity": "COMMON",
    "description": "__All you want to do is entertain the people, but sure enough, bad news seems to follow you. Gunfights, brawls, robberies, and more befall establishments you play at, and word is quick to spread. Keep one town ahead of the gossip, and you just might be able to play a gig, command a stage, or run a table again.__\nChoose two ability boosts. One must be to Charisma or Dexterity, and one is a free ability boost.\nYou’re trained in the Performance skill and a lore skill of your choice. You gain the (feat: Virtuosic Performer) skill feat.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Performance:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Virtuosic Performer"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-06T07:22:37",
    "updatedAt": "2021-10-06T07:22:37",
    "wsci": [
        ["giveProfIn","performance","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["virtuosic performer"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 460,
    "name": "Spotter",
    "rarity": "COMMON",
    "description": "__An eye for detail, a sense for the wind, and a strong trust in your gut feelings. These qualities have set you apart from others when it comes to assisting a sharpshooter with setting up the perfect shot against their target. Elevation, velocity, and concealment—these are all vital factors that need to be considered to pull off a feat of true marksmanship, and no sniper would be able to function without an experienced spotter. Since your younger days, you’ve put your skills as a spotter to work as an adventurer. Whether you’re taking your own shots now or spotting for others, your talents grant you an edge in an adventuring career.__\nChoose two ability boosts. One must be to Dexterity or Wisdom, and one is a free ability boost.\nYou’re trained in the Stealth skill and the Scouting Lore skill. You gain the (feat: Terrain Stalker) skill feat.",
    "boostOne": "DEX,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Stealth:T",
        "GIVE-LORE=Scouting",
        "GIVE-FEAT-NAME=Terrain Stalker"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-06T07:25:51",
    "updatedAt": "2021-10-06T07:25:51",
    "wsci": [
        ["giveProfIn","stealth","T"],
        ["giveLore","Scouting"],
        ["giveFeatName",["terrain stalker"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 461,
    "name": "Undertaker",
    "rarity": "COMMON",
    "description": "__People die. This is the unfortunate fact of life on which you’ve founded your business, because wherever people die, there is a demand for mortuary services. You might be a Pharasmin priest or a secular professional, but your job is seeing to the body, comforting the bereaved, and making sure that the deceased goes to their ultimate reward with all due dignity. Of course, someone in your position sees a lot of strange deaths, and chances are one of them set you on the road to adventure.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in the Medicine skill and a Lore skill specializing in one local type of undead. You gain the (feat: Forensic Acumen) skill feat.\n",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Medicine:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Forensic Acumen"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-06T07:29:11",
    "updatedAt": "2021-10-06T07:29:11",
    "wsci": [
        ["giveProfIn","medicine","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["forensic acumen"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 463,
    "name": "Waste Walker",
    "rarity": "COMMON",
    "description": "__Whether you grew up in the Mana Wastes or another similarly desolate place, you quickly learned that only the strong survive. You and your family were forced to evade monsters, mutants, wild magic, and worse, as each new day heralded the possibility of a danger or threat you’d never seen before. You learned to adapt to the worst possible conditions and how to forage and survive in a place few others would dare to live.__\nChoose two ability boosts. One boost must be to Strength or Wisdom, and one is a free ability boost.\nYou’re trained in the Survival skill, and Mana Wastes Lore (or another similar Lore skill associated with the wastes where you grew up). You gain the (feat: Forager) skill feat.",
    "boostOne": "STR,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Forager"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-06T07:42:08",
    "updatedAt": "2021-10-06T07:42:08",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["forager"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 464,
    "name": "Alkenstar Outlaw",
    "rarity": "UNCOMMON",
    "description": "__You’re an outlaw whose first crime was stealing the guns from Alkenstar’s Gunworks which allowed you to commence a crime spree of epic proportions. You don’t know where your road ends, but it’s probably going to be a bloody affair. The life of an adventurer might even be a relief compared to a life forever on the run from Alkenstar authorities and their allies.__\nChoose two ability boosts. One boost must be to Dexterity or Constitution, and one is a free ability boost.\nYou’re trained in Thievery and Underworld Lore. You gain the (feat: Subtle Theft) skill feat.",
    "boostOne": "DEX,CON",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Thievery:T",
        "GIVE-LORE=Underworld",
        "GIVE-FEAT-NAME=Subtle Theft"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-06T07:43:21",
    "updatedAt": "2021-10-06T07:43:21",
    "wsci": [
        ["giveProfIn","thievery","T"],
        ["giveLore","Underworld"],
        ["giveFeatName",["subtle theft"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 465,
    "name": "Alkenstar Sojourner",
    "rarity": "UNCOMMON",
    "description": "__You came to Alkenstar because you heard they had guns, but you stayed because of the atmosphere. Or the guns. Either way, journalism and scientific curiosity opened the door to a life of adventure. Now you continue to adventure in the Alkenstar area, using your skills to deal with whatever situations present themselves.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou’re trained in Society and Engineering Lore. You gain the (feat: Streetwise) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Engineering",
        "GIVE-FEAT-NAME=Streetwise"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-06T07:48:04",
    "updatedAt": "2021-10-06T07:48:04",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Engineering"],
        ["giveFeatName",["streetwise"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 466,
    "name": "Circuit Judge",
    "rarity": "UNCOMMON",
    "description": "__You’re a circuit judge, a courtroom on horseback who serves a group of communities out in the Mana Wastes or a similar backwoods region. You show up every couple of months, hear the cases that have piled up since your last visit, give verdicts, and then it’s on to the next town in your itinerary. It’s not the easiest life in the world, but it’s an interesting one, and you hear some mighty strange cases. Chances are, it was one of those cases that set you on the road to adventure.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in Deception and Legal Lore. You gain the (feat: Lie to Me) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Deception:T",
        "GIVE-LORE=Legal",
        "GIVE-FEAT-NAME=Lie to Me"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-06T07:49:17",
    "updatedAt": "2021-10-06T07:49:17",
    "wsci": [
        ["giveProfIn","deception","T"],
        ["giveLore","Legal"],
        ["giveFeatName",["lie to me"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 467,
    "name": "Goldhand Arms Dealer",
    "rarity": "COMMON",
    "description": "__You’re a dwarven agent of the Goldhand Lodge, a collection of dwarven merchants based out of Dongun Hold who seeks to sell guns far and wide. High King Anong Arunak hasn’t expressed approval for such a method of distribution yet, but in the meantime you’re still out and about, talking up your wares and occasionally providing visceral demonstrations of the overwhelming stopping power of your firearms. These demonstrations and sales have given you a taste for adventure, and the constant threat of piracy has convinced you of the importance of adventuring with a group.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou’re trained in Diplomacy and Mercantile Lore. You gain the (feat: Group Impression) skill feat.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE=Mercantile",
        "GIVE-FEAT-NAME=Group Impression"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-06T07:51:12",
    "updatedAt": "2021-10-06T07:51:12",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLore","Mercantile"],
        ["giveFeatName",["group impression"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 468,
    "name": "Press-Ganged",
    "rarity": "UNCOMMON",
    "description": "__Was it five shots or six? It doesn’t really matter in the end, because after those nice folks bought all your drinks, you woke up on the lowest rung of the ladder. Whether a crewmate on a ship, a conscript in an army, or something worse, you’ve nowhere to go but up. This background generally requires buy-in with the entire group to tell a story allowing you to play a character starting their adventuring due to circumstances outside their own control. However, you can also play a character who was once press-ganged and has since escaped that life. If you do, press-ganged doesn’t have the uncommon trait, and it has the same mechanical effects either way.__\nChoose two ability boosts. One must be to Strength or Constitution, and one is a free ability boost.\nYou’re trained in the Athletics skill and the Labor Lore skill. You gain the (feat: Armor Assist) skill feat.",
    "boostOne": "STR,CON",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE=Labor",
        "GIVE-FEAT-NAME=Armor Assist"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-06T07:59:17",
    "updatedAt": "2021-10-06T07:59:17",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLore","Labor"],
        ["giveFeatName",["armor assist"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 469,
    "name": "Sheriff",
    "rarity": "UNCOMMON",
    "description": "__You hold an official title of sheriff or deputy in a small community. Those that would do harm to others flee your gaze, for they know it brings the promise of castigation. You protect your town, watch over those who have placed their trust in you, and make sure those that would do others harm are brought to justice.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou’re trained in the Intimidation skill and the Hunting Lore skill. You gain the (feat: Group Coercion) skill feat.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-LORE=Hunting",
        "GIVE-FEAT-NAME=Group Coercion"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-06T08:01:43",
    "updatedAt": "2021-10-06T08:01:43",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveLore","Hunting"],
        ["giveFeatName",["group coercion"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 470,
    "name": "Otherworldly Mission",
    "rarity": "RARE",
    "description": "__You’re called to serve a specific purpose—your deity told you so, and so it must be true. Maybe you grew up knowing all along, or maybe it came to you one day in a vision, clear as a bell and twice as loud. You have some task that only you can accomplish. You mission might be as dangerous as killing a deadly tyrant or as simple as opening a particular door on a particular day.__\nYou should work with your GM on how to handle the truth of your character’s backstory or leave it to the GM to decide in secret. Is this call to action a message from the character’s own mind, are they being manipulated by some manner of supernatural entity, or are they actually getting marching orders from one of the deities of the setting?\nChoose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.\nYou’re trained in Religion. Once per adventure, you can ask the voice you believe to be a deity for orders and get some kind of instruction—you never get any kind of explanation, simply a command to go somewhere or do something. Following those commands isn’t always safe, but it’s usually interesting.",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Religion:T"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-06T08:26:19",
    "updatedAt": "2021-10-06T08:26:19",
    "wsci": [
        ["giveProfIn","religion","T"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 471,
    "name": "Revenant",
    "rarity": "RARE",
    "description": "__You died. No real doubt about that. Bullet to the brain or knife to the throat, you were dead as dead can be. Then you got back up again. Maybe you had some unfinished business, or maybe you were just so tough and so mean that Hell itself spat you out. Either way, you came back for a reason.__\nChoose two ability boosts. One must be to Constitution or Charisma, and one is a free ability boost.\nYou’re trained in Religion and Boneyard Lore. You’re still alive, not undead, but you have the negative healing ability, which means you’re harmed by positive damage and healed by negative effects as if you were undead.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Religion:T",
        "GIVE-LORE=Boneyard"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-06T08:27:53",
    "updatedAt": "2021-10-06T08:27:53",
    "wsci": [
        ["giveProfIn","religion","T"],
        ["giveLore","Boneyard"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 472,
    "name": "Tall Tale",
    "rarity": "RARE",
    "description": "__You’ve ridden a tornado, lassoed a river, mooned a dragon under a full moon, and shot six zombies with one bullet. That’s what the stories say, anyway, and even if people don’t strictly believe them, they are curious about you. Certainly, the stories keep spreading, and it would appear that you either have a unique destiny or are trying to convince the world that you do.__\nChoose two ability boosts. One must be to Constitution or Charisma, and one is a free ability boost.\nYou’re trained in Performance. You gain the (feat: Impressive Performance) skill feat. You can gain the (feat: Connections) skill feat later without being expert in Society or having (feat: Courtly Graces)—this represents less traditional social connections and more the way that your legend has spread, and you’ve learned to leverage your legend, with people wanting to meet you and see you for themselves.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Performance:T",
        "GIVE-FEAT-NAME=Impressive Performance",
        "GIVE-FEAT-NAME=Connections"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-06T08:29:39",
    "updatedAt": "2021-10-06T08:29:39",
    "wsci": [
        ["giveProfIn","performance","T"],
        ["giveFeatName",["impressive performance"]],
        ["giveFeatName",["connections"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 474,
    "name": "Wandering Preacher",
    "rarity": "COMMON",
    "description": "__While you once spoke to a small congregation in a ramshackle church, those days are behind you now. Your church was destroyed, your congregants scattered, and now you meander the lands holding a worn copy of your religious text in one hand, and a fiery conviction in the other.__\nChoose two ability boosts. One boost must be to Constitution or Wisdom, and one is a free ability boost.\nYou’re trained in the Religion skill and a Lore skill associated with the deity you preach for (such as Pharasmin Lore). You gain the (feat: Pilgrim’s Token) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Religion:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Pilgrim's Token"
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2021-10-13T22:03:04",
    "updatedAt": "2021-10-13T22:03:04",
    "wsci": [
        ["giveProfIn","religion","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["pilgrim's token"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 518,
    "name": "Broken Tusk Recruiter",
    "rarity": "UNCOMMON",
    "description": "__Your gifted tongue, friendly demeanor, and deep knowledge of Broken Tusk culture and traditions make you an ideal recruiter for new followers. Whenever Broken Tusks come upon weak, weary, or wandering souls, you're often the first sent to meet these folks and determine if they would be a good fit for the following.__\nChoose two ability boosts. One must be to Constitution or Charisma, and one is a free ability boost.\nYou're trained in the Diplomacy skill, and the Hillcross Lore skill. You gain the (feat: Group Impression) skill feat.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE=Hillcross",
        "GIVE-FEAT-NAME=Group Impression"
    ],
    "isArchived": true,
    "contentSrc": "QUEST-FROZEN-FLAME",
    "version": "1.0",
    "createdAt": "2022-01-17T10:11:19",
    "updatedAt": "2022-01-17T10:11:19",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLore","Hillcross"],
        ["giveFeatName",["group impression"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 519,
    "name": "Ex-Mendevian Crusader",
    "rarity": "UNCOMMON",
    "description": "__When the Great Quake rumbled across the eastern lands and opened the rift that southerners called “the Worldwound,” you answered the call to arms to fight back the demonic hordes. What you saw during the war changed you forever—so much so that you became a wanderer, hermit, or other voluntary outcast. When you came upon the Broken Tusk following, you determined you'd finally found a people whose values and traditions made you feel whole again. The Broken Tusk was supposedly once a much bigger following, and so you've joined them in the hopes of helping them heal old wounds and rebuild in the shadow of loss. In the process, perhaps this new family will help you do the same.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou're trained in the Religion skill, and the Demon Lore skill. You gain the (feat: Pilgrim's Token) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Religion:T",
        "GIVE-LORE=Demon",
        "GIVE-FEAT-NAME=Pilgrim's Token"
    ],
    "isArchived": true,
    "contentSrc": "QUEST-FROZEN-FLAME",
    "version": "1.0",
    "createdAt": "2022-01-17T10:12:23",
    "updatedAt": "2022-01-17T10:12:23",
    "wsci": [
        ["giveProfIn","religion","T"],
        ["giveLore","Demon"],
        ["giveFeatName",["pilgrim's token"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 520,
    "name": "Mammoth Herder",
    "rarity": "UNCOMMON",
    "description": "__You're adept at calming, wrangling, and living beside woolly mammoths and other megafauna commonly found in the Realm of the Mammoth Lords. Perhaps you've even formed a particularly strong bond with one or two of your following's animals, and you tend to get along with other herders in the following, such as young Imek or old Chultei. When the Broken Tusk following must move, you and the other herders know how to convey this message to the animals in your herd.__\nChoose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.\nYou're trained in the Nature skill, and the Herding Lore skill. You gain the (feat: Train Animal) skill feat.",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Nature:T",
        "GIVE-LORE=Herding",
        "GIVE-FEAT-NAME=Train Animal"
    ],
    "isArchived": true,
    "contentSrc": "QUEST-FROZEN-FLAME",
    "version": "1.0",
    "createdAt": "2022-01-17T10:13:36",
    "updatedAt": "2022-01-17T10:13:36",
    "wsci": [
        ["giveProfIn","nature","T"],
        ["giveLore","Herding"],
        ["giveFeatName",["train animal"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 521,
    "name": "Megafauna Hunter",
    "rarity": "UNCOMMON",
    "description": "__Life is only as meaningful as its risks, and the risks you're willing to take are big indeed. Like Wipa's half- sister Panuaku, Mammoth Lord Merthig, and Eiwa's great-grandnephew Pakano, you revel in the thrill of the hunt, especially when it involves mortal combat with megafauna, dinosaurs, and other oversized beasts. Though you're still early in your hunting career, your talent shows great promise, and you have a natural knack for tracking and taking down big game such as moose, saber-toothed tigers, and even wild mammoths.__\nChoose two ability boosts. One must be to Strength or Dexterity, and one is a free ability boost.\nYou're trained in the Athletics skill, and the Hunting Lore skill. You gain the (feat: Titan Wrestler) skill feat.",
    "boostOne": "STR,DEX",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE=Hunting",
        "GIVE-FEAT-NAME=Titan Wrestler"
    ],
    "isArchived": true,
    "contentSrc": "QUEST-FROZEN-FLAME",
    "version": "1.0",
    "createdAt": "2022-01-17T10:14:45",
    "updatedAt": "2022-01-17T10:14:45",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLore","Hunting"],
        ["giveFeatName",["titan wrestler"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 522,
    "name": "Northland Forager",
    "rarity": "UNCOMMON",
    "description": "__The vast tundra and looming mountains of the Realm of the Mammoth Lords may seem featureless and barren to the untrained eye, but you know better. You see what others don't: nutritious roots buried beneath muddy reeds, succulent bird eggs cradled in craggy rocks, restorative berries nestled among thorny thickets, and more. In the south, farmers toil in dusty fields to eat the same vegetables every day, but your diet is varied and you're rarely hungry—the entire Realm is your garden.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou're trained in the Survival skill, and the Herbalism Lore skill. You gain the (feat: Forager) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T",
        "GIVE-LORE=Herbalism",
        "GIVE-FEAT-NAME=Forager"
    ],
    "isArchived": true,
    "contentSrc": "QUEST-FROZEN-FLAME",
    "version": "1.0",
    "createdAt": "2022-01-17T10:16:14",
    "updatedAt": "2022-01-17T10:16:14",
    "wsci": [
        ["giveProfIn","survival","T"],
        ["giveLore","Herbalism"],
        ["giveFeatName",["forager"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 523,
    "name": "Songsinger in Training",
    "rarity": "UNCOMMON",
    "description": "You are a pupil of Argakoa the Songsinger, Otter House leader and Mammoth Lord. Argakoa has been the Broken Tusk's foremost songsinger for many winters, and she sees in you a promising disciple who can carry the torch when it's time for her to pass it. The role of songsinger is a great distinction. These chanters, musicians, and poets are responsible for recording, preserving, and sharing the Broken Tusk's oral history. As one of these songsingers, it's up to you to decide which stories are worthy of passing on and which should be left along the migration trail.\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou're trained in the Performance skill, and the Genealogy Lore skill. You gain the (feat: Impressive Performance) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Performance:T",
        "GIVE-LORE=Genealogy",
        "GIVE-FEAT-NAME=Impressive Performance"
    ],
    "isArchived": true,
    "contentSrc": "QUEST-FROZEN-FLAME",
    "version": "1.0",
    "createdAt": "2022-01-17T10:17:20",
    "updatedAt": "2022-01-17T10:17:20",
    "wsci": [
        ["giveProfIn","performance","T"],
        ["giveLore","Genealogy"],
        ["giveFeatName",["impressive performance"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 558,
    "name": "Curandero",
    "rarity": "COMMON",
    "description": "__You learned the healing arts of your community wielding your ceremonial chonta, a tool you carved yourself and imbued with sacred oils and herbs. This process opened your eyes to ailments of a more mystical nature: malefic spirits, haunts, possession, and more. You likely took up adventuring to combat these horrors, or you may have fled an evil beyond your power to vanquish.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou're trained in the Medicine skill, and the Herbalism Lore skill. You gain the (feat: Inoculation) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Medicine:T",
        "GIVE-LORE=Herbalism",
        "GIVE-FEAT-NAME=Inoculation"
    ],
    "isArchived": true,
    "contentSrc": "BOOK-OF-DEAD",
    "version": "1.0",
    "createdAt": "2022-04-30T06:08:30",
    "updatedAt": "2022-04-30T06:08:30",
    "wsci": [
        ["giveProfIn","medicine","T"],
        ["giveLore","Herbalism"],
        ["giveFeatName",["inoculation"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 559,
    "name": "Grave Robber",
    "rarity": "COMMON",
    "description": "__Resurrectionist. Body snatcher. No matter what you're called, you know where the bodies are buried, and how many coins they'll fetch when dug up. Adventuring comes naturally to you—in your mind dungeons are just oversized tombs—as does returning home with your loot undetected.__\nChoose two ability boosts. One must be to Strength or Dexterity, and one is a free ability boost.\nYou're trained in the Stealth skill, and the c Lore skill. You gain the (feat: Experienced Smuggler) skill feat.",
    "boostOne": "STR,DEX",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Stealth:T",
        "GIVE-LORE=Underworld",
        "GIVE-FEAT-NAME=Experienced Smuggler"
    ],
    "isArchived": true,
    "contentSrc": "BOOK-OF-DEAD",
    "version": "1.0",
    "createdAt": "2022-04-30T06:10:03",
    "updatedAt": "2022-04-30T06:10:03",
    "wsci": [
        ["giveProfIn","stealth","T"],
        ["giveLore","Underworld"],
        ["giveFeatName",["experienced smuggler"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 560,
    "name": "Haunted Citizen",
    "rarity": "COMMON",
    "description": "__You grew up in a region where undead lurk everywhere. This could be a domain as small as a vampire's fief or as vast as the nation of Ustalav. As an ever-present concern, the undead greatly shaped your life. Living with fear became an everyday skill... as did pleading for your life.__\nChoose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.\nYou're trained in the Diplomacy skill, and a Lore skill for your home settlement. You gain the (feat: No Cause for Alarm) skill feat.",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=No Cause for Alarm"
    ],
    "isArchived": true,
    "contentSrc": "BOOK-OF-DEAD",
    "version": "1.0",
    "createdAt": "2022-04-30T06:15:41",
    "updatedAt": "2022-04-30T06:15:41",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["no cause for alarm"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 561,
    "name": "Necromancer's Apprentice",
    "rarity": "COMMON",
    "description": "__You apprenticed under a necromancer—a hard education in a field where a cadaver you were dissecting could suddenly animate and every magical artifact seemed deadly. Now on your own, you're grateful you learned to identify magical threats quickly and thoroughly.__\nChoose two ability boosts. One must be to Constitution or Intelligence, and one is a free ability boost.\nYou're trained in the Arcana skill, and the Necromancy Lore skill. You gain the (feat: Quick Identification) skill feat.",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Arcana:T",
        "GIVE-LORE=Necromancy",
        "GIVE-FEAT-NAME=Quick Identification"
    ],
    "isArchived": true,
    "contentSrc": "BOOK-OF-DEAD",
    "version": "1.0",
    "createdAt": "2022-04-30T06:17:08",
    "updatedAt": "2022-04-30T06:17:08",
    "wsci": [
        ["giveProfIn","arcana","T"],
        ["giveLore","Necromancy"],
        ["giveFeatName",["quick identification"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 562,
    "name": "Night Watch",
    "rarity": "COMMON",
    "description": "__When everyone else slumbers, you're on guard. You might have been a watch member in a teeming metropolis, the guard in an unquiet cemetery, or a lonely shepherd. Many a night you've shouted out warnings into the dark, unsure of what lurked just beyond the range of your lantern's light. More than once you've seen things shambling in the dark that never should have been up and about.__\nChoose two ability boosts. One must be to Strength or Charisma, and one is a free ability boost.\nYou're trained in the Intimidation skill and either Legal Lore or the Lore skill for your home settlement. You gain the (feat: Quick Coercion) skill feat.",
    "boostOne": "STR,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Quick Coercion"
    ],
    "isArchived": true,
    "contentSrc": "BOOK-OF-DEAD",
    "version": "1.0",
    "createdAt": "2022-04-30T06:18:23",
    "updatedAt": "2022-04-30T06:18:23",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["quick coercion"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 563,
    "name": "Pyre Tender",
    "rarity": "COMMON",
    "description": "__You're experienced at building funeral pyres. You might have lit flaming biers in the Land of the Linnorm Kings, tended the cremation pits of Cheliax or Vudra, or been a backwoods charcoal burner, using the right mixture of alchemy to act as an accelerant. However you worship, you know nothing sends off the departed like flame.__\nChoose two ability boosts. One must be to Dexterity or Intelligence, and one is a free ability boost.\nYou're trained in the Crafting skill, and the Funeral Lore skill. You gain the (feat: Alchemical Crafting) skill feat.",
    "boostOne": "DEX,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-LORE=Funeral",
        "GIVE-FEAT-NAME=Alchemical Crafting"
    ],
    "isArchived": true,
    "contentSrc": "BOOK-OF-DEAD",
    "version": "1.0",
    "createdAt": "2022-04-30T06:19:34",
    "updatedAt": "2022-04-30T06:19:34",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveLore","Funeral"],
        ["giveFeatName",["alchemical crafting"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 564,
    "name": "Scion of Slayers",
    "rarity": "RARE",
    "description": "__You were born into a lineage of undead slayers. No mere occupation, in your family slaying is a mantle of almost mystic responsibility passed from parent to child. Over the generations, this single-minded focus has begun to manifest in uncanny ways during combat.__\nChoose two ability boosts. One must be to Strength or Intelligence, and one is a free ability boost.\nYou're trained in the Athletics skill and the Undead Lore skill. You can cast (spell: disrupt undead) as an innate divine cantrip. You can use Intelligence as your spellcasting ability for this innate spell.",
    "boostOne": "STR,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE=Undead",
        "GIVE-INNATE-SPELL-NAME=Disrupt Undead:0:DIVINE:0"
    ],
    "isArchived": true,
    "contentSrc": "BOOK-OF-DEAD",
    "version": "1.0",
    "createdAt": "2022-04-30T06:24:09",
    "updatedAt": "2022-04-30T06:24:09",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLore","Undead"],
        ["giveInnateSpellName","disrupt undead",0,"divine",0]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 565,
    "name": "Tomb Born",
    "rarity": "RARE",
    "description": "__Your parents conceived you for a fell purpose at a site tainted by death, like a wight's barrow, mass grave, or ossuary. Their reasons could be a mystery, or you might know of their grand design and seek to escape—or fulfill—their plans. Either way, you're at your most dangerous when near death.__\nChoose two ability boosts. One must be to Dexterity or Constitution, and one is a free ability boost.\nYou're trained in the Undead Lore skill. You gain the (feat: Final Spite) reaction.",
    "boostOne": "DEX,CON",
    "boostTwo": "ALL",
    "code": [
        "GIVE-LORE=Undead",
        "GIVE-FEAT-NAME=Final Spite"
    ],
    "isArchived": true,
    "contentSrc": "BOOK-OF-DEAD",
    "version": "1.0",
    "createdAt": "2022-04-30T06:32:46",
    "updatedAt": "2022-04-30T06:32:46",
    "wsci": [
        ["giveLore","Undead"],
        ["giveFeatName",["final spite"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 566,
    "name": "Willing Host",
    "rarity": "RARE",
    "description": "__You speak to spirits only you can perceive: wispy shreds of lost souls, household guardians, ancestral spirits, and other entities. You can negotiate with these beings, allowing them into your body to impart knowledge or aid in a task for the price of a favor.__\nChoose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.\nYou're trained in the Spirit Lore skill. You gain the (feat: Host Spirit) action.",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-LORE=Spirit",
        "GIVE-FEAT-NAME=Host Spirit"
    ],
    "isArchived": true,
    "contentSrc": "BOOK-OF-DEAD",
    "version": "1.0",
    "createdAt": "2022-04-30T06:34:04",
    "updatedAt": "2022-04-30T06:34:04",
    "wsci": [
        ["giveLore","Spirit"],
        ["giveFeatName",["host spirit"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 586,
    "name": "Ozem Experience",
    "rarity": "COMMON",
    "description": "__You or someone close to you worked with the Knights of Ozem before Lastwall fell. In addition to knowledge of the organization’s tenets and goals, you have germane understanding of the order’s history. You believe there are valuable lessons in the Knights of Ozem’s exploits.__\nChoose two ability boosts. One must be to Strength or Intelligence, and one is a free ability boost.\nYou’re trained in the Society skill and the Warfare Lore skill. You gain the (feat: Courtly Graces) skill feat.",
    "boostOne": "STR,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Warfare",
        "GIVE-FEAT-NAME=Courtly Graces"
    ],
    "isArchived": true,
    "contentSrc": "LOST-KNIGHTS-WALL",
    "version": "1.0",
    "createdAt": "2022-05-17T11:42:46",
    "updatedAt": "2022-05-17T11:42:46",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Warfare"],
        ["giveFeatName",["courtly graces"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 587,
    "name": "Pillar",
    "rarity": "COMMON",
    "description": "__Not every Knight of Lastwall contributes to the crusade through combat. Pillars provide essential upkeep and service at camps, enjoying the same rank of knight as the crusaders and strategists for which the knights are known. You spent time as an assistant among the pillars, learning how noncombatants provide for the physical and mental wellbeing of an army__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in one of your choice of the Medicine, Society, or Survival skills, as well as the Labor Lore skill. You gain the (feat: Additional Lore) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Medicine,Societ,Survival]",
        "GIVE-LORE=Labor",
        "GIVE-FEAT-NAME=Additional Lore"
    ],
    "isArchived": true,
    "contentSrc": "LOST-KNIGHTS-WALL",
    "version": "1.0",
    "createdAt": "2022-05-17T11:44:34",
    "updatedAt": "2022-05-17T11:44:34",
    "wsci": [
        ["giveSkill","T",["medicine","societ","survival"]],
        ["giveLore","Labor"],
        ["giveFeatName",["additional lore"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 588,
    "name": "Reclaimed",
    "rarity": "COMMON",
    "description": "__A unit of Crimson Reclaimers saved you from certain death in the Gravelands. You spent time with one or more Crimson Reclaimers as they escorted you to safety, and you’ve learned the ways of this faction of the Knights of Lastwall. You consider yourself forever in their debt and defend their reputation unquestioningly against any accusations of duplicity__\nChoose two ability boosts. One must be to Constitution or Charisma, and one is a free ability boost.\nYou’re trained in the Intimidation skill and the Crimson Reclaimers Lore skill. You gain the (feat: Group Coercion) skill feat.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-LORE=Crimson Reclaimers",
        "GIVE-FEAT-NAME=Group Coercion"
    ],
    "isArchived": true,
    "contentSrc": "LOST-KNIGHTS-WALL",
    "version": "1.0",
    "createdAt": "2022-05-17T11:46:41",
    "updatedAt": "2022-05-17T11:46:41",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveLore","Crimson Reclaimers"],
        ["giveFeatName",["group coercion"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 589,
    "name": "Reclaimer Investigator",
    "rarity": "COMMON",
    "description": "__You believe the mysterious patron of the Crimson Reclaimers has an ulterior motive that bedevils the Knights of Lastwall. Whatever the organization gains from the pact, some mysterious force with its own agenda and a need for anonymity benefits as well. You’ve made it your mission to determine what that agenda is before the patron decides it has manipulated from the shadows long enough.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost\nYou’re trained in the Occultism skill and the Crimson Reclaimers Lore skill. You gain the (feat: Oddity Identification) skill feat",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Occultism:T",
        "GIVE-LORE=Crimson Reclaimers",
        "GIVE-FEAT-NAME=Oddity Identification"
    ],
    "isArchived": true,
    "contentSrc": "LOST-KNIGHTS-WALL",
    "version": "1.0",
    "createdAt": "2022-05-17T11:48:31",
    "updatedAt": "2022-05-17T11:48:31",
    "wsci": [
        ["giveProfIn","occultism","T"],
        ["giveLore","Crimson Reclaimers"],
        ["giveFeatName",["oddity identification"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 590,
    "name": "Sentinel Reflectance",
    "rarity": "COMMON",
    "description": "__After an altercation with an undead creature, you feared you might be infected. Either through medical intervention, luck, or misunderstanding how undeath spreads, your fears abated. However, your brush with living death taught you the value of life. You do whatever you can to avoid the end you thought you’d been fated.__\nChoose two ability boosts. One must be to Dexterity or Wisdom, and one is a free ability boost.\nYou’re trained in the Diplomacy skill and the Shining Sentinels Lore skill. You gain the (feat: No Cause for Alarm) skill feat.",
    "boostOne": "DEX,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE=Shining Sentinels",
        "GIVE-FEAT-NAME=No Cause for Alarm"
    ],
    "isArchived": true,
    "contentSrc": "LOST-KNIGHTS-WALL",
    "version": "1.0",
    "createdAt": "2022-05-17T11:50:52",
    "updatedAt": "2022-05-17T11:50:52",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLore","Shining Sentinels"],
        ["giveFeatName",["no cause for alarm"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 591,
    "name": "Relentless Dedication",
    "rarity": "RARE",
    "description": "__Recruiters invite many candidates like you to train to be Knights of Lastwall, but only a select few make the cut. Whereas others lose heart, your perseverance paid off. Your commitment to the cause is so clear, it overcame whatever disqualified your previous attempts to join the new Shining Crusade.__\nChoose two ability boosts. One must be to Strength or Constitution, and one is a free ability boost\nYou’re trained in the Warfare Lore skill, and you gain the (feat: Canny Acumen) feat.",
    "boostOne": "STR,CON",
    "boostTwo": "ALL",
    "code": [
        "GIVE-LORE=Warfare",
        "GIVE-FEAT-NAME=Canny Acumen"
    ],
    "isArchived": true,
    "contentSrc": "LOST-KNIGHTS-WALL",
    "version": "1.0",
    "createdAt": "2022-05-17T11:52:11",
    "updatedAt": "2022-05-17T11:52:11",
    "wsci": [
        ["giveLore","Warfare"],
        ["giveFeatName",["canny acumen"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 592,
    "name": "Tyrant Witness",
    "rarity": "RARE",
    "description": "__When Tar-Baphon broke free of Gallowspire, you saw him emerge. When the god-slaying lich obliterated Vigil and Roslar’s Coffer, you scrambled to safety. And when necrotic rainfall swept through the lands and the Gallowgarden grew, you weathered the storms. Others talk of what the Whispering Tyrant’s return did to Lastwall, but you were there. And it changed you.__\nChoose two ability boosts. One must be to Dexterity or Wisdom, and one is a free ability boost.\nYou’re trained in the Undead Lore skill. You can cast (spell: disrupt undead) as a divine innate cantrip. As normal, the cantrip heightens to half your level rounded up.",
    "boostOne": "DEX,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-LORE=Undead",
        "GIVE-INNATE-SPELL-NAME=Disrupt Undead:0:DIVINE:0"
    ],
    "isArchived": true,
    "contentSrc": "LOST-KNIGHTS-WALL",
    "version": "1.0",
    "createdAt": "2022-05-17T11:54:54",
    "updatedAt": "2022-05-17T11:54:54",
    "wsci": [
        ["giveLore","Undead"],
        ["giveInnateSpellName","disrupt undead",0,"divine",0]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 611,
    "name": "Able Carter",
    "rarity": "UNCOMMON",
    "description": "__You worked for many years as a hauler within Geb, either on your own or with a larger operation that shipped goods across Geb's ancient roads. In either case, you were loosely affiliated with the Carters Consortium, and you might have even been part of that faction when allegations of Pharasma worship among its leaders caused the faction's sharp drop in significance.__\n__Yet the goods still need to be moved from ports to warehouses or from town to town, and that was your business. You've seen a lot of Geb in your time, and you're good at interacting with the quick and the dead alike, but you've given up the shipping business for more lucrative opportunities.__\n__The Carters Consortium values your past work, especially because so few people are sticking by them today. Your party gains 1 Reputation Point with the Carters Consortium at the start of the campaign.__\nChoose two ability boosts. One must be to Strength or Charisma, and one is a free ability boost.\nYou're trained in your choice of either the Deception or Diplomacy skill, as well as a Lore skill with one of Geb's cities: Graydirge, Mechitar, or Yled. You gain a skill feat: (feat: Charming Liar) if you chose Deception or (feat: Hobnobber) if you chose Diplomacy",
    "boostOne": "STR,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Deception,Diplomacy]",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-FROM=Choose a feat based on your chosen skill:Charming Liar,Hobnobber"
    ],
    "isArchived": true,
    "contentSrc": "BLOOD-LORDS",
    "version": "1.0",
    "createdAt": "2022-07-12T07:35:42",
    "updatedAt": "2022-07-12T07:35:42",
    "wsci": [
        ["giveSkill","T",["deception","diplomacy"]],
        ["giveLoreChoose"],
        ["giveFeatFrom","Choose a feat based on your chosen skill",["Charming Liar","Hobnobber"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 612,
    "name": "Corpse Stitcher",
    "rarity": "UNCOMMON",
    "description": "__The number of zombies working across Geb as farmhands, laborers, or shambling soldiers seems nearly uncountable. None of these zombies can do their work if they fall to pieces, so the Reanimators maintain legions of surgeons and tailors to keep zombies stitched together and suitable for service. You were one of these corpse stitchers, working long hours to ensure that Geb's mindless workforce could perform at its best. On the day you saw some of your friends come under your needle, you realized how expendable Geb's fleshy population truly is, and you decided that you should seek out a different line of work.__\n__The Reanimators appreciate your past service. Your party gains 1 Reputation Point with the Reanimators at the start of the campaign.__\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nYou're trained in the Medicine skill, and the Zombie Lore skill. You gain your choice of either the (feat: Risky Surgery) or (feat: Stitch Flesh) skill feats.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Medicine:T",
        "GIVE-LORE=Zombie",
        "GIVE-FEAT-FROM=Choose a Feat:Risky Surgery,Stitch Flesh"
    ],
    "isArchived": true,
    "contentSrc": "BLOOD-LORDS",
    "version": "1.0",
    "createdAt": "2022-07-12T07:40:48",
    "updatedAt": "2022-07-12T07:40:48",
    "wsci": [
        ["giveProfIn","medicine","T"],
        ["giveLore","Zombie"],
        ["giveFeatFrom","Choose a Feat",["Risky Surgery","Stitch Flesh"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 613,
    "name": "Food Trader",
    "rarity": "UNCOMMON",
    "description": "__In your past, you accompanied caravans, ships, or both hauling foodstuffs out of Geb for export. You might be a Gebbite or a foreigner who has decided to work in Geb because of the undeniable opportunities. In any case, you've traveled between Geb and other nations of the Inner Sea and seen firsthand that many nations view Geb with a combination of barely disguised revulsion and eagerness for its bountiful food exports. Even though you aren't in that line of business any longer, you understand how vital this international trade is to Geb's prosperity and appreciate the hardworking people who work in it.__\n__You are still highly regarded by the Export Guild for your past journeys on the nation's behalf. Your party gains 1 Reputation Point with the Export Guild at the start of the campaign.__\nChoose two ability boosts. One must be to Constitution or Intelligence, and one is a free ability boost.\nYou're trained in your choice of either the Crafting or Society skill, as well as the Mercantile Lore skill. You gain a skill feat: (feat: Seasoned) if you chose Crafting or (feat: Streetwise) if you chose Society.",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Crafting,Society]",
        "GIVE-LORE=Mercantile",
        "GIVE-FEAT-FROM=Choose a feat based on your chosen skill:Seasoned,Streetwise"
    ],
    "isArchived": true,
    "contentSrc": "BLOOD-LORDS",
    "version": "1.0",
    "createdAt": "2022-07-12T07:42:49",
    "updatedAt": "2022-07-12T07:42:49",
    "wsci": [
        ["giveSkill","T",["crafting","society"]],
        ["giveLore","Mercantile"],
        ["giveFeatFrom","Choose a feat based on your chosen skill",["Seasoned","Streetwise"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 614,
    "name": "Money Counter",
    "rarity": "UNCOMMON",
    "description": "__The wealthiest of all the factions in Geb is the Tax Collectors Union, but it's the money counters in its banks and vaults that keep the numbers tallied. You used to work as one of these drudges who counted other people's money all day, until you decided to slip some unaccounted coins into your own pocket. You weren't caught, but you knew it would only be a matter of time before you felt the Union's wrath if you remained employed. You took the next opportunity to leave with both your official and unofficial final payments.__\n__The Tax Collectors Union is unaware of your petty theft, and you remain in good standing with them. Your party gains 1 Reputation Point with the Tax Collectors Union at the start of the campaign.__\nChoose two ability boosts. One must be to Dexterity or Intelligence, and one is a free ability boost.\nYou're trained in your choice of either the Society or Thievery skill, as well as the Accounting Lore skill. You gain a skill feat: (feat: Eye for Numbers) if you chose Society or (feat: Subtle Theft) if you chose Thievery.",
    "boostOne": "DEX,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Society,Thievery]",
        "GIVE-LORE=Accounting",
        "GIVE-FEAT-FROM=Choose a feat based on your chosen skill:Eye for Numbers,Subtle Theft"
    ],
    "isArchived": true,
    "contentSrc": "BLOOD-LORDS",
    "version": "1.0",
    "createdAt": "2022-07-12T07:45:17",
    "updatedAt": "2022-07-12T07:45:17",
    "wsci": [
        ["giveSkill","T",["society","thievery"]],
        ["giveLore","Accounting"],
        ["giveFeatFrom","Choose a feat based on your chosen skill",["Eye for Numbers","Subtle Theft"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 615,
    "name": "Propaganda Promoter",
    "rarity": "UNCOMMON",
    "description": "__The ghost king Geb has returned to a more active role in leading his nation after thousands of years, and it's shocking that some people in the nation haven't heard that. You helped the Celebrants plan parades, exciting displays like circuses, news missives, and more to help push messages of loyalty to the nation. Even though most Celebrants are followers of Urgathoa, deity of gluttony and undeath, you might follow a different faith (or no faith at all); more important is helping Celebrants spread their message. You started to see that propaganda was often timed to help the Celebrants, in addition to the nation as a whole, and you saw just how powerful the right message at the right time can be.__\n__You are still well-regarded by the Celebrants. Your party gains 1 Reputation Point with the Celebrants at the start of the campaign.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou're trained in your choice of either the Acrobatics or Performance skill, as well as the Urgathoa Lore skill. You gain a skill feat: (feat: Steady Balance) if you chose Acrobatics or (feat: Impressive Performance) if you chose Performance.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Acrobatics,Performance]",
        "GIVE-LORE=Urgathoa",
        "GIVE-FEAT-FROM=Choose a feat based on your chosen skill:Steady Balance,Impressive Performance"
    ],
    "isArchived": true,
    "contentSrc": "BLOOD-LORDS",
    "version": "1.0",
    "createdAt": "2022-07-12T07:47:00",
    "updatedAt": "2022-07-12T07:47:00",
    "wsci": [
        ["giveSkill","T",["acrobatics","performance"]],
        ["giveLore","Urgathoa"],
        ["giveFeatFrom","Choose a feat based on your chosen skill",["Steady Balance","Impressive Performance"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 616,
    "name": "Construction Occultist",
    "rarity": "UNCOMMON",
    "description": "__You helped to build and design buildings and public works on behalf of Geb's architectural faction, the Builders League. You've been taught that creating bridges, gatehouses, roads, walls, and more is as much about planning as it is about brute labor. You learned that the Builders League has plans of occult significance for many of its construction projects and might have even aided them in the way you laid stones or designed walls (although you never learned the great design behind those secret plans). Although you've left construction behind, the skills in long-term planning and leveraging effort remain with you.__\n__You are still well-regarded by the Builders League. Your party gains 1 Reputation Point with the Builders League at the start of the campaign.__\nChoose two ability boosts. One must be to Strength or Intelligence, and one is a free ability boost.\nYou're trained in your choice of either the Athletics or Occultism skill, as well as the Architecture Lore skill. You gain a skill feat: (feat: Hefty Hauler) if you chose Athletics or (feat: Oddity Identification) if you chose Occultism.",
    "boostOne": "STR,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Athletics,Occultism]",
        "GIVE-LORE=Architecture",
        "GIVE-FEAT-FROM=Choose a feat based on your chosen skill:Hefty Hauler,Oddity Identification"
    ],
    "isArchived": true,
    "contentSrc": "BLOOD-LORDS",
    "version": "1.0",
    "createdAt": "2022-07-12T07:47:09",
    "updatedAt": "2022-07-12T07:47:09",
    "wsci": [
        ["giveSkill","T",["athletics","occultism"]],
        ["giveLore","Architecture"],
        ["giveFeatFrom","Choose a feat based on your chosen skill",["Hefty Hauler","Oddity Identification"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 621,
    "name": "Empty Whispers",
    "rarity": "RARE",
    "description": "__You knew someone once, and now you know only a life stitched together and healed over, nary even a scar remaining. You hear voices of souls that have fallen through the cracks of reality, creatures who have been removed from memory, banished planar entities, and similar. Their whispers guide you.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou're trained in the Occultism skill and the Planar Rift Lore skill. You get a Planar Rift Lore check to sense planar rifts, even if you aren't specifically (action: Investigating|Investigate) or (action: Searching|Search) for them, as well as locations where magic has been used to remove the memory of an object or creature from existence.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Occultism:T",
        "GIVE-LORE=Planar Rift"
    ],
    "isArchived": true,
    "contentSrc": "DARK-ARCHIVE",
    "version": "1.0",
    "createdAt": "2022-07-27T10:59:51",
    "updatedAt": "2022-07-27T10:59:51",
    "wsci": [
        ["giveProfIn","occultism","T"],
        ["giveLore","Planar Rift"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 622,
    "name": "Acolyte",
    "rarity": "COMMON",
    "description": "__You spent your early days in a religious monastery or cloister. You may have traveled out into the world to spread the message of your religion or because you cast away the teachings of your faith, but deep down you’ll always carry within you the lessons you learned.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou’re trained in the Religion skill and the Scribing Lore skill. You gain the (feat: Student of the Canon) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Religion:T",
        "GIVE-LORE=Scribing",
        "GIVE-FEAT-NAME=Student of the Canon"
    ],
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2022-07-27T11:00:03",
    "updatedAt": "2022-07-27T11:00:03",
    "wsci": [
        ["giveProfIn","religion","T"],
        ["giveLore","Scribing"],
        ["giveFeatName",["student of the canon"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 623,
    "name": "Legacy of the Hammer",
    "rarity": "UNCOMMON",
    "description": "__Your introduction to the criminal life was spurred forward by a seemingly innocuous hammer that provided you with all kinds of innovative criminal ideas. It has since left your possession, but every now and then you hear a faint whisper urging you toward crime.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou're trained in the Thievery skill, and the Engineering Lore skill. You gain the (feat: Concealing Legerdemain) skill feat.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Thievery:T",
        "GIVE-LORE=Engineering",
        "GIVE-FEAT-NAME=Concealing Legerdemain"
    ],
    "isArchived": true,
    "contentSrc": "DARK-ARCHIVE",
    "version": "1.0",
    "createdAt": "2022-07-27T11:01:31",
    "updatedAt": "2022-07-27T11:01:31",
    "wsci": [
        ["giveProfIn","thievery","T"],
        ["giveLore","Engineering"],
        ["giveFeatName",["concealing legerdemain"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 624,
    "name": "Reborn Soul",
    "rarity": "RARE",
    "description": "__You were given a second opportunity at life by mysterious forces in the Lands of Second Souls. You remember your life before your death and now live with an extra lifetime of knowledge.__\nChoose two ability boosts. One must be to Constitution or Charisma, and one is a free ability boost.\nYou become trained in two Lore skills, which you and your GM choose from Lore skills associated with your past life. At 3rd level, 7th level, and 15th level, you receive skill increases, which you can apply only to these Lore skills. In certain situations analogous to your past life, fragments of memories resurface, potentially helping or distracting you. The GM can offer you a +1 circumstance bonus on skill checks with either of these Lore skills or on other skill checks that echo your past life. If you accept but fail the check, you're stupefied 1 for 1 minute by the mental distraction of your past-life memories, or stupefied 2 for 1 minute on a critical failure.",
    "boostOne": "CON,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-LORE-CHOOSE",
        "GIVE-LORE-CHOOSE"
    ],
    "isArchived": true,
    "contentSrc": "DARK-ARCHIVE",
    "version": "1.0",
    "createdAt": "2022-07-27T11:03:02",
    "updatedAt": "2022-07-27T11:03:02",
    "wsci": [
        ["giveLoreChoose"],
        ["giveLoreChoose"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 625,
    "name": "Child of the Twin Village",
    "rarity": "RARE",
    "description": "__You were born in a village where everyone has a twin with a special link. You have moved to the wider world for reasons of your own, but you still have an unbreakable connection to your twin through your dreams.__\nChoose two ability boosts. One must be to Constitution or Charisma, and one is a free ability boost.\nYou're trained in Diplomacy and Dreamlands Lore. You gain the ability to communicate with your twin in your dreams. You and your twin gain the effects of (spell: dream message) every night, only between the two of you; this isn't a spell, but a natural effect. Unless your twin is another PC, your GM roleplays your twin or summarizes your interaction during these dreams.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE=Dreamlands"
    ],
    "isArchived": true,
    "contentSrc": "DARK-ARCHIVE",
    "version": "1.0",
    "createdAt": "2022-07-27T11:03:19",
    "updatedAt": "2022-07-27T11:03:19",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLore","Dreamlands"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 632,
    "name": "Banished Brighite",
    "rarity": "UNCOMMON",
    "description": "__Once, you were a dedicated and important priest of Brigh, goddess of clockwork and invention, based out of the largest church to your deity, the Temple of Brigh in Alkenstar. Here, you made important discoveries in the annals of your religion's canon and furthered the Bronze Lady's agendas of innovation and creation. Your future seemed bright, and you predicted that it was only a matter of time until you ascended to the rank of primary cog or, someday, grand cog.__\n__Then, your years of devout service were undone in an instant. A man named Ambrost Mugland came to the Temple and demanded not only access to the religious formulas you'd been uncovering, but exclusive rights to the precious knowledge. When you refused, Mugland sent word to the church's leaders that you'd been meddling in heretical doctrine. He also implicated you in the theft of church funds that had mysteriously gone missing as of late. Sure enough, you found yourself being asked to hand in your robes. Your church colleagues didn't turn you in, but they told you in no uncertain terms that you wouldn't be able to find sanctuary for your alleged crimes in the halls of the Temple of Brigh.__\n__On the run and with nowhere to turn, your faith has been thoroughly tested, though so far you've remained true to your religion and maintained your sacred skills and divine powers. It's unclear what the Bronze Lady has in store for you, but at least one thing's for certain: Ambrost Mugland will pay for what he did.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou're trained in the Religion skill, and the Brigh Lore skill. You gain the (feat: Quick Identification) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Religion:T",
        "GIVE-LORE=Brigh",
        "GIVE-FEAT-NAME=Quick Identification"
    ],
    "isArchived": true,
    "contentSrc": "OUTLAWS-ALKENSTAR",
    "version": "1.0",
    "createdAt": "2022-07-29T07:15:51",
    "updatedAt": "2022-07-29T07:15:51",
    "wsci": [
        ["giveProfIn","religion","T"],
        ["giveLore","Brigh"],
        ["giveFeatName",["quick identification"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 633,
    "name": "Framed in Ferrous Quarter",
    "rarity": "UNCOMMON",
    "description": "__Everyone knows that Ferrous Quarter isn't exactly the nicest part of Alkenstar. Hard-working laborers, gunsmiths suffering from black lung, and red-eyed tinkerers alike can toil their entire lives on these grimy streets and still wind up dead in an alley with nothing to show for it. You were once one of these humble artisans, until one day, out of nowhere, things broke bad.__\n__Maybe you hung out with the wrong crowd. Maybe it was just bad luck. Whatever the case, you were framed for a crime you didn't commit—larceny, smuggling, possibly even murder. You didn't stick around long enough to find out what, exactly, the shieldmarshals banging on your door were charging you with. Now, you're on the lam, uncertain where you'll be able to get a good night's sleep, let alone your next meal.__\n__At least one thing's for sure, though: before you turned heel and ran into the streets, you saw a telltale signature on the arrest warrant. It was the scrawl of a corrupt shieldmarshal who's framed countless other hardworking folks in your neighborhood on the basis of cooked-up evidence. Yes, you're sure of it—the crooked guard who took you down is none other than Deputy Anjelique Loveless, and you're determined to return the favor.__\nChoose two ability boosts. One must be to Dexterity or Constitution, and one is a free ability boost.\nYou're trained in the Crafting skill, and the Engineering Lore skill. You gain the (feat: Specialty Crafting) skill feat.",
    "boostOne": "DEX,CON",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-LORE=Engineering",
        "GIVE-FEAT-NAME=Specialty Crafting"
    ],
    "isArchived": true,
    "contentSrc": "OUTLAWS-ALKENSTAR",
    "version": "1.0",
    "createdAt": "2022-07-29T07:16:48",
    "updatedAt": "2022-07-29T07:16:48",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveLore","Engineering"],
        ["giveFeatName",["specialty crafting"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 634,
    "name": "Inexplicably Expelled",
    "rarity": "UNCOMMON",
    "description": "__Gaining admission to Blythir College is a difficult task, even for Alkenstar's most well-to-do families. In the magic-warped Mana Wastes, it's next to impossible to fake arcane talents or alchemical aptitude. So when you were accepted to the school, it was one of the most triumphant moments of your life.__\n__Unfortunately, your victory was short-lived. Just as you were you making significant headway on a promising series of explosive experiments, you found a letter on your desk informing you that, effective immediately, you were permanently expelled from Blythir College. As bogus as the punishment was, the charges leveled against you were even more puzzling: theft of property, both intellectual and physical. And just like that, you found your prestigious honors replaced with a ruined reputation, and your colleagues and mentors became bitter rivals and accusers. In an instant, you'd gone from promising scholar to wanted criminal.__\n__You followed the money for answers and learned that a shady financier named Ambrost Mugland didn't want you to finish your research at Blythir. He'd learned that you were on the brink of a great discovery—one that even you weren't fully aware of—and he decided that your imminent breakthrough would be bad for business. Unfortunately for Mugland, he chose the wrong student to destroy. Now, you'll do whatever's necessary to get your revenge on the villain who stole the future you had worked so hard to build for yourself.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou're trained in the Crafting skill, and the Academia Lore skill. You gain the (feat: Alchemical Crafting) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Crafting:T",
        "GIVE-LORE=Academia",
        "GIVE-FEAT-NAME=Alchemical Crafting"
    ],
    "isArchived": true,
    "contentSrc": "OUTLAWS-ALKENSTAR",
    "version": "1.0",
    "createdAt": "2022-07-29T07:17:24",
    "updatedAt": "2022-07-29T07:17:24",
    "wsci": [
        ["giveProfIn","crafting","T"],
        ["giveLore","Academia"],
        ["giveFeatName",["alchemical crafting"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 635,
    "name": "Ratted-Out Gun Runner",
    "rarity": "UNCOMMON",
    "description": "__Sure, you've got a checkered past. Who doesn't? It's hard to make a living in the City of Smog, so you did what you could to put silvers in your pocket and food on the table. You made a good deal of money selling firearms from the Gunworks to people who perhaps shouldn't have had them. You even worked with wasteland marauders a few times, sticking up Ustradi barges plying the river between the Gunworks and Alkenstar. Of course, you never hurt any innocents or did anything truly heinous; your criminal career was always just a matter of money.__\n__One day, a corrupt financier named Ambrost Mugland—a true crook if there ever was one—approached you, demanding a cut of your business. When you refused, he put in a word with the shieldmarshals that you'd be a certain somewhere at a certain time with a certain large quantity of illegally obtained firearms. Even though you escaped arrest, your identity was compromised, and your old accomplices have all turned their backs on you. Your gun-running days are clearly over. Now, you're just running.__\nChoose two ability boosts. One must be to Dexterity or Wisdom, and one is a free ability boost.\nYou're trained in the Stealth skill, and the Firearm Lore skill. You gain the (feat: Experienced Smuggler) skill feat.",
    "boostOne": "DEX,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Stealth:T",
        "GIVE-LORE=Firearm",
        "GIVE-FEAT-NAME=Experienced Smuggler"
    ],
    "isArchived": true,
    "contentSrc": "OUTLAWS-ALKENSTAR",
    "version": "1.0",
    "createdAt": "2022-07-29T07:17:46",
    "updatedAt": "2022-07-29T07:17:46",
    "wsci": [
        ["giveProfIn","stealth","T"],
        ["giveLore","Firearm"],
        ["giveFeatName",["experienced smuggler"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 636,
    "name": "Snubbed Out Stoolie",
    "rarity": "UNCOMMON",
    "description": "__You were once a distinguished informant for the shieldmarshals, working deep undercover to infiltrate gangs of bootleggers and assassins. Then, one day, you discovered that the records of your service had all been completely destroyed. In an instant, you were no longer an elite spy impersonating a criminal—you were just a plain criminal.__\n__Now, not a trace remains of your work for the city. Not only is it as though you were never a shieldmarshal at all, but you've got a rap sheet implicating you as a key member in the criminal organizations you spent your career infiltrating. Luckily, no one could take away the skills you learned from your deep-cover missions, and your new notoriety has earned you quite a reputation among Alkenstar's criminal elite. Through your underworld connections, you've identified Deputy Shieldmarshal Anjelique Loveless as the one responsible for your fall from grace. It seems you were onto something that she didn't want you to know about, but there's only one way to figure out exactly why Loveless ruined your reputation and gave you your outlaw status—find her.__\nChoose two ability boosts. One must be to Strength or Charisma, and one is a free ability boost.\nYou're trained in the Deception skill, and the Underworld Lore skill. You gain the (feat: Lie to Me) skill feat.",
    "boostOne": "STR,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Deception:T",
        "GIVE-LORE=Underworld",
        "GIVE-FEAT-NAME=Lie to Me"
    ],
    "isArchived": true,
    "contentSrc": "OUTLAWS-ALKENSTAR",
    "version": "1.0",
    "createdAt": "2022-07-29T07:18:56",
    "updatedAt": "2022-07-29T07:18:56",
    "wsci": [
        ["giveProfIn","deception","T"],
        ["giveLore","Underworld"],
        ["giveFeatName",["lie to me"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 637,
    "name": "Wanted Witness",
    "rarity": "UNCOMMON",
    "description": "__You saw something you shouldn't have, plain and simple. The shame is that you don't even know what it is, exactly, that you saw.__\n__After moving to Alkenstar, you swiftly fell in love with the City of Smog, but you found it difficult to get a foothold in the fast-paced metropolis. Luckily, a chance invitation promised good work for someone with your unique social talents. You went to an inconspicuous chamber in a humble tower somewhere in the Capital District. There, you met some clearly powerful, clearly corrupt members of the Alkenstar elite. Among the faces you recognized were the notorious mogul Ambrost Mugland and the steely-eyed shieldmarshal Anjelique Loveless. Before you were asked to leave, you made quite an impression—but not a good one.__\n__Not only did you not make the cut for whatever kinds of jobs were on offer that day, but you soon discovered that you couldn't get a room at any inn in the city, and there were wanted posters with your name on them plastered all over town. Friends and families turned their backs on you, afraid to get involved. Clearly, someone at that meeting—Mugland, maybe, or perhaps Loveless— believed you were a liability, and they had you excised from Alkenstar society. All you want is to be able to walk the streets without fearing for your life, and there's only one way to make that happen: find the villains responsible for your predicament and get them to undo the curse now attached to your name.__\nChoose two ability boosts. One must be to Constitution or Charisma, and one is a free ability boost.\nYou're trained in the Society skill, and the Alkenstar Lore skill. You gain the (feat: Read Lips) skill feat.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Alkenstar",
        "GIVE-FEAT-NAME=Read Lips"
    ],
    "isArchived": true,
    "contentSrc": "OUTLAWS-ALKENSTAR",
    "version": "1.0",
    "createdAt": "2022-07-29T07:19:31",
    "updatedAt": "2022-07-29T07:19:31",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Alkenstar"],
        ["giveFeatName",["read lips"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 664,
    "name": "Astrological Augur",
    "rarity": "RARE",
    "description": "__During your formative years, you learned the stars are a gateway to mystical power or glimpses into the future. Perhaps you grew up surrounded by Iruxi culture or were raised in one of the remaining Lirgeni sanctuaries. You've studied the constellations, using their alignment to predict fortune (or misfortune) and gaining magical powers unlike any of the other astrologers you know. Your readings might primarily focus on the Cosmic Caravan, or perhaps you use other stars to guide you, like the zodiac of Tian Xia.__\nChoose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.\nYou're trained in Astrology Lore. You can cast (spell: augury) as a divine innate spell once per week, and the spell's effects can see up to 1 hour in the future rather than 30 minutes.",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-LORE=Astrology",
        "GIVE-INNATE-SPELL-NAME=Augury:2:DIVINE:1"
    ],
    "isArchived": true,
    "contentSrc": "LOST-TRAVEL-GUIDE",
    "version": "1.0",
    "createdAt": "2022-09-03T08:01:53",
    "updatedAt": "2022-09-03T08:01:53",
    "wsci": [
        ["giveLore","Astrology"],
        ["giveInnateSpellName","augury",2,"divine",1]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 665,
    "name": "Doomcaller",
    "rarity": "RARE",
    "description": "__In the stars you see not guidance or wisdom but a twinkling door to the impending end of all things. You might have been raised in this ideology, gleaned it from superstition, or received a prophetic vision. Regardless, you've come to view the stars and whatever power they evoke as a path to doom, a curse to warn the masses. Others might spurn your warnings, while some might join you in enlightening the ignorant. To you, there's no greater truth than the coming end, and you know that whatever the cause for it will come from the stars—or perhaps the stars are just a gate to a more terrifying beyond.__\nChoose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost.\nYou're trained in Occultism and Star Lore. You also gain the (feat: Stellar Misfortune) action.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Occultism:T",
        "GIVE-LORE=Star",
        "GIVE-FEAT-NAME=Stellar Misfortune"
    ],
    "isArchived": true,
    "contentSrc": "LOST-TRAVEL-GUIDE",
    "version": "1.0",
    "createdAt": "2022-09-03T08:05:38",
    "updatedAt": "2022-09-03T08:05:38",
    "wsci": [
        ["giveProfIn","occultism","T"],
        ["giveLore","Star"],
        ["giveFeatName",["stellar misfortune"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 666,
    "name": "Eclipseborn",
    "rarity": "RARE",
    "description": "__You were born at the exact moment of a solar or lunar eclipse. At the eclipse's junction, or not long after, a catastrophe fell upon the area of your birth—perhaps it affected only the people around you, a city, or even spanned the entire region. Whatever the scope, those present at your arrival came to believe the eclipse was the omen of ill fortune, and you were its harbinger. You grew up distinctly aware others viewed you as a child of misfortune and, to a certain extent, they were right.__\nChoose two ability boosts. One must be to Charisma or Constitution, and one is a free ability boost.\nDecide with the GM what catastrophic event coincided with your birth; you're trained in a Lore skill related to that event. You can cast (spell: ill omen) as an occult innate spell once per day. After you Cast this Spell, but before you regain the ability to cast it the following day, the GM can force you to reroll a successful saving throw, attack roll, or skill check as misfortune finds its way back to you. This is a (trait: misfortune) effect. If this effect causes you to fail the associated saving throw, attack roll, or skill check, you can cast ill omen again a second time that day.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-LORE-CHOOSE",
        "GIVE-INNATE-SPELL-NAME=Ill Omen:1:OCCULT:1"
    ],
    "isArchived": true,
    "contentSrc": "LOST-TRAVEL-GUIDE",
    "version": "1.0",
    "createdAt": "2022-09-03T08:07:29",
    "updatedAt": "2022-09-03T08:07:29",
    "wsci": [
        ["giveLoreChoose"],
        ["giveInnateSpellName","ill omen",1,"occult",1]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 667,
    "name": "Nocturnal Navigator",
    "rarity": "RARE",
    "description": "__You have a great affinity for the night skies. You watch the stars, and you feel they speak secret messages specifically to you, which help you navigate your surroundings or perhaps determine your next course of action. Often, the stars have led you to places of great adventure, where you find new experiences and challenges. You might have come to make use of your talents as a guide for traveling groups, or maybe you preferred using your talents in pursuing a star-driven journey for personal enlightenment.__\nChoose two ability boosts. One must be to Dexterity or Wisdom, and one is a free ability boost.\nYou're trained in Survival. Whenever you can clearly identify the stars, if you roll a success on a check to (action: Sense Direction) or otherwise orienteer, you get a critical success instead; if you roll a critical failure at such a check, you get a failure instead.",
    "boostOne": "DEX,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Survival:T"
    ],
    "isArchived": true,
    "contentSrc": "LOST-TRAVEL-GUIDE",
    "version": "1.0",
    "createdAt": "2022-09-03T08:08:48",
    "updatedAt": "2022-09-03T08:08:48",
    "wsci": [
        ["giveProfIn","survival","T"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 668,
    "name": "Sign Bound",
    "rarity": "RARE",
    "description": "__You were born under a powerful manifestation of a specific constellation, and its connection to you is obvious. You tend to feel most at ease while your constellation is prominent and can draw upon your sign's influence from time to time. When you gain this background, choose a specific constellation, such as the Thrush or the Wagon. Your associated constellation determines one of the ability boosts you gain and an innate spell. The list includes benefits for the constellations of the Cosmic Caravan, but you might have been born under a different constellation and gain different benefits as determined by the GM.__\nChoose two ability boosts. One must be to the ability tied to your sign, and one is a free ability boost.\nYou're trained in Astrology Lore. You also gain the ability to cast an occult innate spell, as determined by your sign. The frequency with which you can cast this spell is listed below; cantrips can be used as often as you wish. As normal, you cast non-cantrip innate spells at the lowest level available to that spell, such as 2nd level for (spell: speak with animals), and cantrips are heightened to half your level. Additionally, once during the prominent time for your sign (such as 12 Pharast–18 Gozran for the Bridge), you can cast your sign's spell without expending its normal use.\nThe Thrush (Dexterity): (spell: ghost sound); at will\nThe Lantern Bearer (Wisdom): (spell: light); at will\nThe Newlyweds (Charisma): (spell: charm); once per day\nThe Bridge (Constitution): (spell: endure elements); once per week\nThe Daughter (Charisma): (spell: guidance); at will\nThe Rider (Strength): (spell: phantom steed); once per week\nThe Patriarch (Strength): (spell: know direction); at will\nThe Wagon (Constitution): (spell: longstrider); once per week\nThe Pack (Dexterity): (spell: speak with animals); once per week\nThe Mother (Wisdom): (spell: remove fear); once per week\nThe Star Gazer (Intelligence): (spell: true strike); once per week\nThe Stranger (Charisma): (spell: message); at will\nThe Follower (Intelligence): (spell: stabilize); at will",
    "boostTwo": "ALL",
    "code": [
        "GIVE-LORE=Astrology",
        "GIVE-ABILITY-BOOST-MULTIPLE=2",
        "GIVE-NOTES-FIELD=Use this area to keep information about your sign."
    ],
    "isArchived": true,
    "contentSrc": "LOST-TRAVEL-GUIDE",
    "version": "1.0",
    "createdAt": "2022-09-03T08:13:49",
    "updatedAt": "2022-09-03T08:13:49",
    "wsci": [
        ["giveLore","Astrology"],
        ["giveAbilityBoostMultiple",2],
        ["giveNotesField","Use this area to keep information about your sign."]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 669,
    "name": "Starless One",
    "rarity": "RARE",
    "description": "__You were born on a night when not a single star was in the night sky. While this is likely due to a haze, cloud cover, or other natural phenomena, there is always a chance that the stars hid from you on purpose. You have never been able to rely on the stars to guide you and you choose to exert your own will on your fortune rather than rely on the heavens. You've learned to reject outside influence on your fate, maintaining control of your own destiny.__\nChoose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.\nYou're trained in Occultism and Astrology Lore. You also gain the (feat: Reclaim Destiny) action.",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Occultism:T",
        "GIVE-LORE=Astrology",
        "GIVE-FEAT-NAME=Reclaim Destiny"
    ],
    "isArchived": true,
    "contentSrc": "LOST-TRAVEL-GUIDE",
    "version": "1.0",
    "createdAt": "2022-09-03T08:14:59",
    "updatedAt": "2022-09-03T08:14:59",
    "wsci": [
        ["giveProfIn","occultism","T"],
        ["giveLore","Astrology"],
        ["giveFeatName",["reclaim destiny"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 670,
    "name": "Sun Dancer",
    "rarity": "RARE",
    "description": "__You've been taught the Burning Mother's blessings could be invited through dances done under its presence, such as in welcoming the first rays of warmth in the spring. You could have been the apprentice of some primal caster who wished to harness the sun's power for their incantations or lived in a community who reveres the Daughter of the Cosmic Caravan through displays of veneration for the sun. Whatever the case, you developed a supernatural connection to the sun.__\nChoose two ability boosts. One must be to Charisma or Dexterity, and one is a free ability boost.\nYou're trained in Performance. You gain the (feat: Fascinating Performance) skill feat. If you use this feat outdoors in direct sunlight, you gain a +1 circumstance bonus to the skill check.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Performance:T",
        "GIVE-FEAT-NAME=Fascinating Performance"
    ],
    "isArchived": true,
    "contentSrc": "LOST-TRAVEL-GUIDE",
    "version": "1.0",
    "createdAt": "2022-09-03T08:17:51",
    "updatedAt": "2022-09-03T08:17:51",
    "wsci": [
        ["giveProfIn","performance","T"],
        ["giveFeatName",["fascinating performance"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 671,
    "name": "Tide Watcher",
    "rarity": "RARE",
    "description": "__Where you hail from, the ocean is the lifeblood of your community; knowing how it changes according to the moon was integral to everyday life. You've studied the moon's phases to predict the rise and fall of the ocean waters. Eventually, you gained a supernatural ability to foretell to some degree of accuracy the coming of more severe changes, such as tidal waves or encroaching storms. At times, it fell on you to warn settlements of such oncoming natural disasters.__\nChoose two ability boosts. One must be to Charisma or Intelligence, and one is a free ability boost.\nYou're trained in Nature and Ocean Lore. During the night when you can see the moon, you gain a +1 circumstance bonus to Survival checks to discern weather patterns and predict upcoming weather conditions—this bonus increases to +2 if you're in the vicinity of the ocean.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Nature:T",
        "GIVE-LORE=Ocean"
    ],
    "isArchived": true,
    "contentSrc": "LOST-TRAVEL-GUIDE",
    "version": "1.0",
    "createdAt": "2022-09-03T08:18:40",
    "updatedAt": "2022-09-03T08:18:40",
    "wsci": [
        ["giveProfIn","nature","T"],
        ["giveLore","Ocean"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 678,
    "name": "Attention Addict",
    "rarity": "COMMON",
    "description": "__A roaring crowd chanting your name. Your face plastered all over the city. Fawning fans begging for your autograph. Jealous rivals. Endless fame. The promise of all this and more is what drove you to enter this year's Ruby Phoenix Tournament, and with your prodigious star power it's no wonder why they selected you for the prequalifier on Danger Island. You've got champion stamped all over you. Obviously, the organizers knew a winner when they saw one.__\n__It's already clear that you'll be named Ruby Phoenix Champion—the challenges leading up to your prize ceremony are mere formalities, but you're happy to indulge the impassioned masses. After all, the people want a show, and what kind of celebrity would you be if you denied them? You might even deign to compete in some fights, too, as long as your hair doesn't get mussed.__\nChoose two ability boosts. One must be to Strength or Charisma, and one is a free ability boost.\nYou're trained in the Performance skill, and the Gladiatorial Lore skill. You gain the (feat: Impressive Performance) skill feat.",
    "boostOne": "STR,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Performance:T",
        "GIVE-LORE=Gladiatorial",
        "GIVE-FEAT-NAME=Impressive Performance"
    ],
    "isArchived": true,
    "contentSrc": "FIST-PHOENIX",
    "version": "1.0",
    "createdAt": "2022-09-11T06:19:12",
    "updatedAt": "2022-09-11T06:19:12",
    "wsci": [
        ["giveProfIn","performance","T"],
        ["giveLore","Gladiatorial"],
        ["giveFeatName",["impressive performance"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 679,
    "name": "Second Chance Champion",
    "rarity": "UNCOMMON",
    "description": "__You competed in the last Ruby Phoenix Tournament 10 years ago, though you didn't make it to the end. One wrong step, one mistimed punch, one blocked spell—whatever it was, that was all it took for your opponent to get the upper hand and knock you out of the tournament. Well, maybe it was a simple mistake or maybe you just weren't up to snuff, and you're too headstrong to admit it.__\n__Now, after training for a decade to ensure you don't repeat any of your prior mistakes, you've joined forces with a team of fellow fighters in order to maximize your odds of making it all the way to the finals. Whatever happened before, you've vowed to return to the ring in Goka for an epic rematch, and this time you're not walking out until you've been named Ruby Phoenix Champion.__\nChoose two ability boosts. One must be to Strength or Dexterity, and one is a free ability boost.\nYou're trained in the Athletics skill, and the Gladiatorial Lore skill. You gain the (feat: Cat Fall) skill feat.",
    "boostOne": "STR,DEX",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE=Gladiatorial",
        "GIVE-FEAT-NAME=Cat Fall"
    ],
    "isArchived": true,
    "contentSrc": "FIST-PHOENIX",
    "version": "1.0",
    "createdAt": "2022-09-11T06:19:57",
    "updatedAt": "2022-09-11T06:19:57",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLore","Gladiatorial"],
        ["giveFeatName",["cat fall"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 680,
    "name": "Energy Scarred",
    "rarity": "RARE",
    "description": "__Exposure to a significant magical event overloaded you with magical energy. Perhaps you were exposed to dangerous levels of magical energy that left you near death, or it built up over long-term exposure to a powerful source of magic.__\nChoose two ability boosts. One must be Constitution and one is a free ability boost.\nYour innate magical trait is primal. Choose acid, cold, electricity, fire, force, negative, positive, or sonic. You are trained in a Lore skill associated with the chosen energy (such as Fire Lore) and you gain resistance to that energy type equal to half your level (minimum 1).",
    "boostOne": "CON",
    "boostTwo": "ALL",
    "code": [
        "GIVE-LORE-CHOOSE",
        "GIVE-NOTES-FIELD=Use this area to keep information about your chosen energy."
    ],
    "isArchived": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "version": "1.0",
    "createdAt": "2022-09-11T06:22:32",
    "updatedAt": "2022-09-11T06:22:32",
    "wsci": [
        ["giveLoreChoose"],
        ["giveNotesField","Use this area to keep information about your chosen energy."]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 681,
    "name": "Mystic Tutor",
    "rarity": "RARE",
    "description": "__You spent years predicting, identifying, and harnessing the innate magical talents of those around you. A magic-rich world has taught you that you can never have too much training when everyone around you is capable of magic__\nChoose two ability boosts. One must be Intelligence or Wisdom and one is a free ability boost.\nYour innate magical trait is arcane or occult. You're trained in either Arcana or Occultism, depending on your innate magical trait, and the Academia Lore skill. You gain the (feat: Recognize Spell) skill feat.",
    "boostOne": "INT,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Arcana,Occultism]",
        "GIVE-LORE=Academia",
        "GIVE-FEAT-NAME=Recognize Spell",
        "GIVE-NOTES-FIELD=Use this area to keep information about your innate magical trait."
    ],
    "isArchived": true,
    "contentSrc": "GUNS-AND-GEARS",
    "version": "1.0",
    "createdAt": "2022-09-11T06:24:33",
    "updatedAt": "2022-09-11T06:24:33",
    "wsci": [
        ["giveSkill","T",["arcana","occultism"]],
        ["giveLore","Academia"],
        ["giveFeatName",["recognize spell"]],
        ["giveNotesField","Use this area to keep information about your innate magical trait."]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 682,
    "name": "Surge Investigator",
    "rarity": "RARE",
    "description": "__From rivers that charm all who come near to forests that speak through dream messages, you have seen and studied many kinds of magical terrain. The world is so rich in magic that it can affect the land itself, and you have traveled extensively to learn the ways of identifying the oddities of magical terrain wherever it arises.__\nChoose two ability boosts. One must be Constitution or Wisdom and one is a free ability boost.\nYou're trained in your choice of Nature or Occultism and the Magical Terrain Lore skill. You gain the (feat: Terrain Expertise) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-SKILL=T[Nature,Occultism]",
        "GIVE-LORE=Magical Terrain",
        "GIVE-FEAT-NAME=Terrain Expertise"
    ],
    "isArchived": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "version": "1.0",
    "createdAt": "2022-09-11T06:26:16",
    "updatedAt": "2022-09-11T06:26:16",
    "wsci": [
        ["giveSkill","T",["nature","occultism"]],
        ["giveLore","Magical Terrain"],
        ["giveFeatName",["terrain expertise"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 683,
    "name": "Once Bitten",
    "rarity": "COMMON",
    "description": "__After an altercation with an undead creature, you feared you might be infected. Either through medical intervention, luck, or misunderstanding how undeath spreads, your fears abated. However, your brush with living death taught you the value of life. You do whatever you can to avoid the end you thought you'd been fated.__\nChoose two ability boosts. One must be to Dexterity or Wisdom, and one is a free ability boost.\nYou’re trained in the Medicine skill and the Undead Lore skill. You gain the (feat: Battle Medicine) skill feat.",
    "boostOne": "DEX,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Medicine:T",
        "GIVE-LORE=Undead",
        "GIVE-FEAT-NAME=Battle Medicine"
    ],
    "isArchived": true,
    "contentSrc": "LOST-KNIGHTS-WALL",
    "version": "1.0",
    "createdAt": "2022-09-11T06:27:02",
    "updatedAt": "2022-09-11T06:27:02",
    "wsci": [
        ["giveProfIn","medicine","T"],
        ["giveLore","Undead"],
        ["giveFeatName",["battle medicine"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 685,
    "name": "Academy Dropout",
    "rarity": "COMMON",
    "description": "__You were enrolled at a prestigious magical academy, but you’ve since dropped out. Maybe there was a momentous incident, maybe you had to return to other responsibilities, or perhaps it was just too much for you. Whatever the case, your exit from the academy has shaped your life as much as your entrance and led you to a life of adventure.__\nChoose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost.\nYou’re trained in Arcana and Academia Lore. You gain the (feat: Dubious Knowledge) skill feat.",
    "boostOne": "INT,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Arcana:T",
        "GIVE-LORE=Academia",
        "GIVE-FEAT-NAME=Dubious Knowledge"
    ],
    "isArchived": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "version": "1.0",
    "createdAt": "2022-09-27T03:15:27",
    "updatedAt": "2022-09-27T03:15:27",
    "wsci": [
        ["giveProfIn","arcana","T"],
        ["giveLore","Academia"],
        ["giveFeatName",["dubious knowledge"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 704,
    "name": "Brevic Noble",
    "rarity": "COMMON",
    "description": "__You claim a tangential but legitimate connection to one of Brevoy’s noble families. If you aren’t human, you were adopted by one of Brevoy’s nobles or were perhaps a favored servant or even a childhood friend of a noble scion. Whatever the case, you’ve had a comfortable life, though still a far cry from the one your distant cousins or close associates know. An expedition into the storied Stolen Lands seems like just the test to see if you really are worthy of the “noble” title._\nChoose two ability boosts. One must be to Constitution or Wisdom, and one is a free ability boost.\nChoose one of the Brevic lineages below.\n~ Garess: Family ties to the Golushkin Mountain dwarves left its mark. Your family motto is “Strong as the Mountains.” You’re trained in the Crafting skill and the Architecture Lore skill. You gain the (feat: Specialty Crafting) skill feat.\n~ Lebeda: Your family’s history of trading along the shores of Lake Reykal pervades your blood. Your family motto is “Success through Grace.” You’re trained in the Society skill and the Mercantile Lore skill. You gain the (feat: Multilingual) skill feat.\n~Lodovka: Your family has made a living off the coasts of the Lake of Mists and Veils since before Brevoy existed. Your family motto is “The Waters, Our Fields.” You’re trained in the Athletics skill and the Fishing Lore skill. You gain the (feat: Underwater Marauder) skill feat.\n~ Medvyed: Your family has a deep respect for the wilderness and is skilled at hunting and surviving off the land. Your family motto is “Endurance Overcomes All.” You’re trained in the Survival skill and the Hunting Lore skill. You gain the (feat: Terrain Expertise) skill feat (choose your terrain from aquatic, forest, mountain, plains, or swamp).\n~ Orlovsky: Your family has a reputation for avoiding conflicts. Your family motto is “High Above.” You’re trained in the Diplomacy skill and the Brevoy Lore skill. You gain the (feat: Group Impression) skill feat.\n~ Surtova: Your family is well known for their political agility and scheming nature. Your family motto is “Ours Is the Right.” You’re trained in the Deception skill and the Politics Lore skill. You gain the (feat: Charming Liar) skill feat.",
    "boostOne": "CON,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-FEAT-FROM=Choose a Feat Based on Your Lineage:Specialty Crafting,Multilingual,Underwater Marauder,Terrain Expertise,Group Impression,Charming Liar",
        "GIVE-LORE-CHOOSE",
        "GIVE-SKILL=T[Crafting,Society,Athletics,Survival,Diplomacy,Deception,]",
        "GIVE-NOTES-FIELD=Use this area to keep information about your lineage."
    ],
    "isArchived": true,
    "contentSrc": "PATH-SOCIETY",
    "version": "1.0",
    "createdAt": "2022-10-30T23:56:50",
    "updatedAt": "2022-10-30T23:56:50",
    "wsci": [
        ["giveFeatFrom","Choose a Feat Based on Your Lineage",["Specialty Crafting","Multilingual","Underwater Marauder","Terrain Expertise","Group Impression","Charming Liar"]],
        ["giveLoreChoose"],
        ["giveSkill","T",["crafting","society","athletics","survival","diplomacy","deception"]],
        ["giveNotesField","Use this area to keep information about your lineage."]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 705,
    "name": "Brevic Outcast",
    "rarity": "COMMON",
    "description": "__You spent your early days in a religious monastery or cloister. You may have traveled out into the world to spread the message of your religion or because you cast away the teachings of your faith, but deep down you’ll always carry within you the lessons you learned.__\nChoose two ability boosts. One must be to Charisma or Constitution, and one is a free ability boost.\nYou’re trained in the Politics Lore skill. You take a –1 penalty on all Charisma-based skill checks attempted when dealing with members of the nobility, but gain the (feat: Haughty Obstinacy) human ancestry feat, even if you aren’t a human. If you manage to establish yourself as a true noble or secure a leadership role in a kingdom, you no longer take the penalty to Charisma-based checks.",
    "boostOne": "CON,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-LORE=Politics",
        "GIVE-FEAT-NAME=Haughty Obstinacy"
    ],
    "isArchived": true,
    "contentSrc": "PATH-SOCIETY",
    "version": "1.0",
    "createdAt": "2022-10-31T00:01:33",
    "updatedAt": "2022-10-31T00:01:33",
    "wsci": [
        ["giveLore","Politics"],
        ["giveFeatName",["haughty obstinacy"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 706,
    "name": "Issian Patriot",
    "rarity": "COMMON",
    "description": "__You grew up in northern Brevoy, but the call for heroes willing to help take back your country’s rightful holdings in the Stolen Lands has inflamed your dreams of profit and possibilities, and you have joined an expedition journeying south__\nChoose two ability boosts. One must be to Dexterity or Intelligence, and one is a free ability boost\nYou’re trained in the Society skill and the Legal Lore skill. You gain the (feat: Streetwise) skill feat.",
    "boostOne": "DEX,INT",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Society:T",
        "GIVE-LORE=Legal",
        "GIVE-FEAT-NAME=Streetwise"
    ],
    "isArchived": true,
    "contentSrc": "PATH-SOCIETY",
    "version": "1.0",
    "createdAt": "2022-10-31T00:04:15",
    "updatedAt": "2022-10-31T00:04:15",
    "wsci": [
        ["giveProfIn","society","T"],
        ["giveLore","Legal"],
        ["giveFeatName",["streetwise"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 707,
    "name": "Local Brigand",
    "rarity": "COMMON",
    "description": "__You hail from the River Kingdoms or the more lawless reaches of Brevoy. Your life has been hard. You know how to ambush travelers, bully traders, avoid the law, and camp where no one can find you. Recently, you’ve run into some trouble, either with the law or with other bandits, and you’re looking to get away to somewhere no one would ever think to look for you. An expedition into the rugged wilderness seems like a perfect way to lie low until the trouble blows over.__\nChoose two ability boosts. One must be to Strength or Constitution, and one is a free ability boost.\nYou’re trained in the Intimidation skill and the Banditry Lore skill. You gain the (feat: Group Coercion) skill feat.",
    "boostOne": "STR,CON",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Intimidation:T",
        "GIVE-LORE=Banditry",
        "GIVE-FEAT-NAME=Group Coercion"
    ],
    "isArchived": true,
    "contentSrc": "PATH-SOCIETY",
    "version": "1.0",
    "createdAt": "2022-10-31T00:05:58",
    "updatedAt": "2022-10-31T00:05:58",
    "wsci": [
        ["giveProfIn","intimidation","T"],
        ["giveLore","Banditry"],
        ["giveFeatName",["group coercion"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 708,
    "name": "Rostlander",
    "rarity": "COMMON",
    "description": "__You were raised in the south of Brevoy, a land of dense forests and rolling plains, of crystalline rivers and endless sapphire skies. You come from hardy stock and were raised with simple sensibilities—that hard work earns well-deserved gains, the importance of charity and compassion, and the value of personal and familial honor. Yours is the country of the Aldori swordlords and the heroes who refused to bend before the armies of a violent conqueror. You care little for matters of politics and nobles or of deception and schemes. You are thoroughly Brevic, and the call for champions willing to expand your land’s influence into the Stolen Lands has inflamed your sense of patriotism and honor, and so you have joined an expedition to journey southward and build a kingdom.__\nChoose two ability boosts. One must be to Strength or Constitution, and one is a free ability boost\nYou’re trained in the Athletics skill and the Farming Lore skill. You gain the (feat: Hefty Hauler) skill feat.",
    "boostOne": "STR,CON",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Athletics:T",
        "GIVE-LORE=Farming",
        "GIVE-FEAT-NAME=Hefty Hauler"
    ],
    "isArchived": true,
    "contentSrc": "PATH-SOCIETY",
    "version": "1.0",
    "createdAt": "2022-10-31T00:08:27",
    "updatedAt": "2022-10-31T00:08:27",
    "wsci": [
        ["giveProfIn","athletics","T"],
        ["giveLore","Farming"],
        ["giveFeatName",["hefty hauler"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 709,
    "name": "Sword Scion",
    "rarity": "COMMON",
    "description": "__You have lived all your life in and around the city of Restov, growing up on tales of Baron Sirian Aldori and the exploits of your home’s heroic and legendary swordlords. Joining an expedition into the Stolen Lands seems like a perfect way to improve your skills and begin crafting a legend worthy of Baron Aldori.__\nChoose two ability boosts. One must be to Dexterity or Charisma, and one is a free ability boost.\nYou’re trained in the Warfare Lore skill. You gain access to Aldori dueling swords and can purchase one as part of your starting equipment. You treat (item: Aldori dueling swords|Aldori Dueling Sword) as martial weapons rather than advanced weapons for the purpose of proficiency.",
    "boostOne": "DEX,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-LORE=Warfare"
    ],
    "isArchived": true,
    "contentSrc": "PATH-SOCIETY",
    "version": "1.0",
    "createdAt": "2022-10-31T00:10:34",
    "updatedAt": "2022-10-31T00:10:34",
    "wsci": [
        ["giveLore","Warfare"]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 714,
    "name": "Friendly Darkmoon Kobold",
    "rarity": "RARE",
    "description": "__It has taken time, but over the years, you've managed to find a place among the citizens of Falcon's Hollow. While many still distrust kobolds, they at least see you as a fellow villager, if not a friend, and you've got quite the talent for quickly convincing larger groups of people that you mean them no harm.__\n~ Prerequisites: Kobold ancestry\nChoose two ability boosts. One must be to Wisdom or Charisma, and one is a free ability boost.\nYou're trained in the Diplomacy skill, and the Kobold Lore skill. You gain the (feat: Group Impression) skill feat.",
    "boostOne": "WIS,CHA",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Diplomacy:T",
        "GIVE-LORE=Kobold",
        "GIVE-FEAT-NAME=Group Impression"
    ],
    "isArchived": true,
    "contentSrc": "CROWN-OF-KOBOLD-KING",
    "version": "1.0",
    "createdAt": "2022-11-26T10:04:12",
    "updatedAt": "2022-11-26T10:04:12",
    "wsci": [
        ["giveProfIn","diplomacy","T"],
        ["giveLore","Kobold"],
        ["giveFeatName",["group impression"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
{
    "table": "backgrounds",
    "id": 715,
    "name": "Borderlands Pioneer",
    "rarity": "COMMON",
    "description": "__You have long lived along the southern border of Brevoy, in the shadow of the wilderness known as the Stolen Lands. Life has been hard, but through hunting, trapping, trading, and coaxing crops from the ground, you’ve learned how to survive on the rugged frontier. Whether because of your personal expertise and familiarity with the borderlands or in order to reclaim your family’s land, you’ve joined the expedition into the Stolen Lands.__\nChoose two ability boosts. One must be to Strength or Wisdom, and one is a free ability boost.\nYou’re trained in the Nature skill and a Lore skill associated with a particular type of wilderness (choose from forest, hills, mountains, plains, rivers, or swamp). You gain the (feat: Train Animal) skill feat.",
    "boostOne": "STR,WIS",
    "boostTwo": "ALL",
    "code": [
        "GIVE-PROF-IN=Nature:T",
        "GIVE-LORE-CHOOSE",
        "GIVE-FEAT-NAME=Train Animal"
    ],
    "isArchived": true,
    "contentSrc": "KINGMAKER",
    "version": "1.0",
    "createdAt": "2022-11-26T11:30:40",
    "updatedAt": "2022-11-26T11:30:40",
    "wsci": [
        ["giveProfIn","nature","T"],
        ["giveLoreChoose"],
        ["giveFeatName",["train animal"]]
    ] satisfies Expression[]
} as const satisfies BackgroundsTableRowConstraints,
 ] as const;

export const backgrounds = hookupTableLookup(_backgrounds);