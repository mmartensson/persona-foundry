import type { Expression } from '../wsc/types';
import { hookupTableLookup } from '../tables';

import { Rarity, ContentSrc, Version } from './shared_types';

export interface UniheritagesTableRowConstraints {
  table: 'uniheritages';
  wsci?: Readonly<Expression[]>;
  id: number;
  name?: string;
  rarity: Rarity;
  description?: string;
  tagID?: number;
  code?: readonly string[];
  artworkURL?: string;
  isArchived: boolean;
  contentSrc: ContentSrc;
  homebrewID?: number;
  version?: Version;
  createdAt?: string;
  updatedAt?: string;
}

export type UniheritagesTable = typeof uniheritages;
export type UniheritagesTableRow = UniheritagesTable[number];
export type UniheritageID = UniheritagesTableRow['id'];

export const isUniheritageID = (id?: number): id is UniheritageID => !!id && !!uniheritages.byIdLax(id);
export const assertIsUniheritageID = (id?: number): asserts id is UniheritageID => { if (!isUniheritageID(id)) throw Error('Expected a UniheritageID; got ' + id); }

const _uniheritages = [
{
    "table": "uniheritages",
    "id": 4,
    "name": "Half-Elf",
    "rarity": "UNIQUE",
    "description": "Either one of your parents was an elf, or one or both were half-elves. You have pointed ears and other telltale signs of elf heritage. You gain the (trait: elf) trait and low-light vision. In addition, you can select elf and half-elf feats whenever you gain an ancestry feat.\nBy default, half-elves descend from humans, but your GM might allow you to be the offspring of an elf and a different ancestry. In these cases, the GM will let you select the half-elf heritage as the heritage for this other ancestry. The most likely other parent of a half-elf are gnomes and halflings.",
    "tagID": 654,
    "code": [
        "GIVE-SENSE-NAME=Low-Light Vision",
        "GIVE-CHAR-TRAIT-NAME=Elf",
        "GIVE-CHAR-TRAIT-NAME=Half-Elf"
    ],
    "artworkURL": "/images/community_use/Half-Elf - Varril.png",
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-07-19T21:56:34",
    "updatedAt": "2020-07-19T21:56:34",
    "wsci": [
        ["giveSenseName","low-light vision",null],
        ["giveCharTraitName","Elf"],
        ["giveCharTraitName","Half-Elf"]
    ] satisfies Expression[]
} as const satisfies UniheritagesTableRowConstraints,
{
    "table": "uniheritages",
    "id": 5,
    "name": "Half-Orc",
    "rarity": "UNIQUE",
    "description": "One of your parents was an orc, or one or both were half-orcs. You have a green tinge to your skin and other indicators of orc heritage. You gain the (trait: orc) trait and low-light vision. In addition, you can select orc and half-orc feats whenever you gain an ancestry feat.\nBy default, half-orcs descend from humans, but your GM might allow you to be the offspring of an orc and a different ancestry. In these cases, the GM will let you select the half-orc heritage as the heritage for this other ancestry. The most likely other parent of a half-orc are goblins, halflings, and dwarves.",
    "tagID": 655,
    "code": [
        "GIVE-SENSE-NAME=Low-Light Vision",
        "GIVE-CHAR-TRAIT-NAME=Orc",
        "GIVE-CHAR-TRAIT-NAME=Half-Orc"
    ],
    "artworkURL": "/images/community_use/Half-Orc - Krundo.png",
    "isArchived": true,
    "contentSrc": "CRB",
    "version": "1.0",
    "createdAt": "2020-07-19T22:14:30",
    "updatedAt": "2020-07-19T22:14:30",
    "wsci": [
        ["giveSenseName","low-light vision",null],
        ["giveCharTraitName","Orc"],
        ["giveCharTraitName","Half-Orc"]
    ] satisfies Expression[]
} as const satisfies UniheritagesTableRowConstraints,
{
    "table": "uniheritages",
    "id": 8,
    "name": "Dhampir",
    "rarity": "UNCOMMON",
    "description": "__Many call vampires the children of the night, but it is dhampirs who can truly claim that title. These mortal offspring of vampires walk the line between life and undeath not just physiologically, but also in their social standing, temperament, and worldview.__\n\nYou are the scion of a vampire, half living and half undead, gifted with uncanny charm and grace, a bloodless pallor, and elongated incisors. You gain the (trait: dhampir) trait, in addition to the traits from your ancestry. You have the negative healing ability, which means you are harmed by positive damage and healed by negative effects as if you were undead. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can choose from dhampir feats and feats from your ancestry whenever you gain an ancestry feat.",
    "tagID": 697,
    "code": [
        "GIVE-CHAR-TRAIT-NAME=Dhampir",
        "IF (HAS-VISION==Low-Light Vision) {GIVE-SENSE-NAME=Darkvision} ELSE {GIVE-SENSE-NAME=Low-Light Vision}"
    ],
    "artworkURL": "/images/community_use/Dhampir - Nyctessa.png",
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-02T22:16:38",
    "updatedAt": "2020-08-02T22:16:38",
    "wsci": [
        ["giveCharTraitName","Dhampir"],
        {"conditionals":[["hasVision","==","low-light vision"]],"consequent":["giveSenseName","darkvision",null],"alternate":["giveSenseName","low-light vision",null]}
    ] satisfies Expression[]
} as const satisfies UniheritagesTableRowConstraints,
{
    "table": "uniheritages",
    "id": 9,
    "name": "Aasimar",
    "rarity": "UNCOMMON",
    "description": "__Born with the power of benevolent celestial entities, aasimars are thought to be supremely blessed with strength of will, extraordinary beauty, and innate magical gifts. But many aasimars find that these perceived talents – whether they actually have them or not – set them apart from their friends and family, fostering loneliness in themselves and jealousy in others.__\n\nYou descend from celestials or were touched by the celestial realms, gaining an air of awe and grace, as well as features distinctive to your celestial forebears. You gain the (trait: aasimar) trait, in addition to the traits from your ancestry. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can choose from aasimar feats and feats from your ancestry whenever you gain an ancestry feat.",
    "tagID": 702,
    "code": [
        "GIVE-CHAR-TRAIT-NAME=Aasimar",
        "IF (HAS-VISION==Low-Light Vision) {GIVE-SENSE-NAME=Darkvision} ELSE {GIVE-SENSE-NAME=Low-Light Vision}"
    ],
    "artworkURL": "/images/community_use/Angelkin - Talitha.png",
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-05T06:17:06",
    "updatedAt": "2020-08-05T06:17:06",
    "wsci": [
        ["giveCharTraitName","Aasimar"],
        {"conditionals":[["hasVision","==","low-light vision"]],"consequent":["giveSenseName","darkvision",null],"alternate":["giveSenseName","low-light vision",null]}
    ] satisfies Expression[]
} as const satisfies UniheritagesTableRowConstraints,
{
    "table": "uniheritages",
    "id": 14,
    "name": "Duskwalker",
    "rarity": "UNCOMMON",
    "description": "__The first duskwalkers manifested as the result of a bargain between two powerful psychopomps, the immortal guardians and guides of souls after death. One believed that certain souls who helped preserve the cycle of life and death but had their own lives cut short deserved reincarnation, while the other felt this would too greatly violate that same cycle. In the end, the duskwalkers rose from a concession between the two that allowed such rebirths to occur but limited their frequency – only a finite number of duskwalkers ever exist at any one point in time.__\n\nThanks to an ancient bargain, your soul has been reborn as a duskwalker, a planar scion with a connection to psychopomps and the Boneyard. You gain the (trait: duskwalker) trait in addition to the traits from your ancestry. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. Neither your body nor your spirit can ever become undead. You can choose from duskwalker feats and feats from your ancestry whenever you gain an ancestry feat.",
    "tagID": 709,
    "code": [
        "GIVE-CHAR-TRAIT-NAME=Duskwalker",
        "IF (HAS-VISION==Low-Light Vision) {GIVE-SENSE-NAME=Darkvision} ELSE {GIVE-SENSE-NAME=Low-Light Vision}"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-07T02:14:16",
    "updatedAt": "2020-08-07T02:14:16",
    "wsci": [
        ["giveCharTraitName","Duskwalker"],
        {"conditionals":[["hasVision","==","low-light vision"]],"consequent":["giveSenseName","darkvision",null],"alternate":["giveSenseName","low-light vision",null]}
    ] satisfies Expression[]
} as const satisfies UniheritagesTableRowConstraints,
{
    "table": "uniheritages",
    "id": 15,
    "name": "Changeling",
    "rarity": "UNCOMMON",
    "description": "__Tales of children stolen away and replaced by monsters exist across countless cultures – but the true monsters are the hag mothers of these strange children. After the hag seduces, uses, and disposes of their father, the changeling child is usually abandoned in their father’s community to be raised among them. Such a child faces no end of challenges, often beginning life as an orphaned outsider.__\n\nYour mother was a hag. Your heterochromatic eyes are the most obvious signifier of this parentage, but you likely also have a slighter build, paler skin, and darker hair than most members of your other parent’s ancestry. You gain the (trait: changeling) trait. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can select from changeling feats and feats from your other parent’s ancestry whenever you gain an ancestry feat.",
    "tagID": 710,
    "code": [
        "GIVE-CHAR-TRAIT-NAME=Changeling",
        "IF (HAS-VISION==Low-Light Vision) {GIVE-SENSE-NAME=Darkvision} ELSE {GIVE-SENSE-NAME=Low-Light Vision}"
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-07T02:27:05",
    "updatedAt": "2020-08-07T02:27:05",
    "wsci": [
        ["giveCharTraitName","Changeling"],
        {"conditionals":[["hasVision","==","low-light vision"]],"consequent":["giveSenseName","darkvision",null],"alternate":["giveSenseName","low-light vision",null]}
    ] satisfies Expression[]
} as const satisfies UniheritagesTableRowConstraints,
{
    "table": "uniheritages",
    "id": 17,
    "name": "Tiefling",
    "rarity": "UNCOMMON",
    "description": "__When the influence of a demon, devil, or other fiend infiltrates the bloodline of a mortal family, tieflings are the inevitable result. Tieflings carry the sinister mark of the fiendish planes upon their flesh, and their specific abilities and physical qualities vary according to their heritage. Hellspawn are those who descend from devils, grimspawn hail from daemonic influences, and pitborn bear the influence of demons, though these are only the three most common among a wide variety of tiefling lineages.__\n\nYou descend from fiends or bear the mark of the fiendish realms, manifesting as some unusual feature that belies your heritage, such as horns or a tail. You gain the (trait: tiefling) trait, in addition to the traits from your ancestry. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can choose from tiefling feats and feats from your ancestry whenever you gain an ancestry feat.",
    "tagID": 714,
    "code": [
        "GIVE-CHAR-TRAIT-NAME=Tiefling",
        "IF (HAS-VISION==Low-Light Vision) {GIVE-SENSE-NAME=Darkvision} ELSE {GIVE-SENSE-NAME=Low-Light Vision}"
    ],
    "artworkURL": "/images/community_use/Pitborn - Emil.png",
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "version": "1.0",
    "createdAt": "2020-08-07T03:26:51",
    "updatedAt": "2020-08-07T03:26:51",
    "wsci": [
        ["giveCharTraitName","Tiefling"],
        {"conditionals":[["hasVision","==","low-light vision"]],"consequent":["giveSenseName","darkvision",null],"alternate":["giveSenseName","low-light vision",null]}
    ] satisfies Expression[]
} as const satisfies UniheritagesTableRowConstraints,
{
    "table": "uniheritages",
    "id": 24,
    "name": "Ganzi",
    "rarity": "UNCOMMON",
    "description": "__Children of chaos, ganzis are born of the roiling effervescence of the untamable Maelstrom, the primal sea of all creation. Their blood crackles with the promise of change and the raw power of creation unshackled.__\n\nYour blood is touched by primal chaos. You gain the (trait: ganzi) trait in addition to the traits from your ancestry. You gain resistance to a single damage type equal to half your level; at the beginning of each day, determine randomly whether this resistance applies to acid, electricity, or sonic damage. You also gain a +1 circumstance bonus to saving throws against effects that would cause you to gain the controlled condition. You can choose from ganzi feats and feats from your ancestry whenever you gain an ancestry feat.",
    "tagID": 1191,
    "code": [
        "GIVE-CHAR-TRAIT-NAME=Ganzi",
        "GIVE-RESISTANCE=Acid, Electricity, or Sonic:Half_Level",
        "CONDITIONAL-INCREASE-SAVE_FORT=1~circumstance bonus against effects that give you the controlled condition",
        "CONDITIONAL-INCREASE-SAVE_REFLEX=1~circumstance bonus against effects that give you the controlled condition",
        "CONDITIONAL-INCREASE-SAVE_WILL=1~circumstance bonus against effects that give you the controlled condition",
        "GIVE-NOTES-FIELD=Use this area to keep information about your random resistance."
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "version": "1.0",
    "createdAt": "2021-02-19T00:25:22",
    "updatedAt": "2021-02-19T00:25:22"
} as const satisfies UniheritagesTableRowConstraints,
{
    "table": "uniheritages",
    "id": 25,
    "name": "Ifrit",
    "rarity": "UNCOMMON",
    "description": "__Ifrits descend from creatures such as efreet, salamanders, and magma dragons. Their spark of ancestral flame gives them a reputation for being passionate, if not capricious.__\n\nYou descend from fire elementals or bear the mark of the Inner Spheres, and your features illustrate the influence that elemental fire has over you. You gain the (trait: ifrit) trait, in addition to the traits from your ancestry. You gain resistance to fire equal to half your level (minimum 1), and you treat environmental heat effects as if they were one step less severe (incredible heat becomes extreme, extreme heat becomes severe, and so on). You can choose from ifrit feats and feats from your ancestry whenever you gain an ancestry feat.",
    "tagID": 1192,
    "code": [
        "GIVE-CHAR-TRAIT-NAME=Ifrit",
        "GIVE-RESISTANCE=Fire:Half_Level"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "version": "1.0",
    "createdAt": "2021-02-19T01:40:40",
    "updatedAt": "2021-02-19T01:40:40",
    "wsci": [
        ["giveCharTraitName","Ifrit"],
        ["giveResistance","fire",["half",null]]
    ] satisfies Expression[]
} as const satisfies UniheritagesTableRowConstraints,
{
    "table": "uniheritages",
    "id": 26,
    "name": "Oread",
    "rarity": "UNCOMMON",
    "description": "__The Plane of Earth’s influence runs through an oread’s family, most often from a shaitan or crystal dragon ancestor. Oreads tend to be stoic, steadfast, and dependable, but they contain depths not seen on the surface.__\n\nAn earth elemental ancestor has influenced your bloodline, and your features highlight this elemental planar connection. You might have a crystalline or metallic sheen to your skin or hair, rough and stony flesh, or glittering gemstone eyes. You gain the (trait: oread) trait, in addition to the traits from your ancestry. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can choose from oread feats and feats from your ancestry whenever you gain an ancestry feat.",
    "tagID": 1193,
    "code": [
        "GIVE-CHAR-TRAIT-NAME=Oread",
        "IF (HAS-VISION==Low-Light Vision) {GIVE-SENSE-NAME=Darkvision} ELSE {GIVE-SENSE-NAME=Low-Light Vision}"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "version": "1.0",
    "createdAt": "2021-02-19T02:12:30",
    "updatedAt": "2021-02-19T02:12:30",
    "wsci": [
        ["giveCharTraitName","Oread"],
        {"conditionals":[["hasVision","==","low-light vision"]],"consequent":["giveSenseName","darkvision",null],"alternate":["giveSenseName","low-light vision",null]}
    ] satisfies Expression[]
} as const satisfies UniheritagesTableRowConstraints,
{
    "table": "uniheritages",
    "id": 27,
    "name": "Sylph",
    "rarity": "UNCOMMON",
    "description": "__Sylphs are an intense and lively people, flighty and tempestuous. These planar scions have kinship to beings of elemental air such as djinn, invisible stalkers, and cloud dragons.__\n\nYou are descended from air elementals or were born under the element’s influence. You gain the (trait: sylph) trait, in addition to the traits from your ancestry. You also gain low-light vision or darkvision if your ancestry already has low-light vision. You can choose from sylph feats and feats from your ancestry whenever you gain an ancestry feat.",
    "tagID": 1197,
    "code": [
        "GIVE-CHAR-TRAIT-NAME=Sylph",
        "IF (HAS-VISION==Low-Light Vision) {GIVE-SENSE-NAME=Darkvision} ELSE {GIVE-SENSE-NAME=Low-Light Vision}"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "version": "1.0",
    "createdAt": "2021-02-19T07:50:12",
    "updatedAt": "2021-02-19T07:50:12",
    "wsci": [
        ["giveCharTraitName","Sylph"],
        {"conditionals":[["hasVision","==","low-light vision"]],"consequent":["giveSenseName","darkvision",null],"alternate":["giveSenseName","low-light vision",null]}
    ] satisfies Expression[]
} as const satisfies UniheritagesTableRowConstraints,
{
    "table": "uniheritages",
    "id": 28,
    "name": "Undine",
    "rarity": "UNCOMMON",
    "description": "__These dynamic, fluid mortals trace their ancestry to creatures from the Plane of Water, such as marids, water mephits, and brine dragons.__\n\nA water elemental ancestor influences your bloodline. You gain the (trait: undine) trait, in addition to the traits from your ancestry. You gain a swim Speed of 10 feet and the (trait: amphibious) trait. Like all creatures with the amphibious trait, you can breathe both water and air. You can choose from undine feats and feats from your ancestry whenever you gain an ancestry feat.",
    "tagID": 1202,
    "code": [
        "GIVE-CHAR-TRAIT-NAME=Undine",
        "GIVE-SPEED=Swim:10"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "version": "1.0",
    "createdAt": "2021-02-19T21:11:39",
    "updatedAt": "2021-02-19T21:11:39",
    "wsci": [
        ["giveCharTraitName","Undine"],
        ["giveSpeed","swim",10]
    ] satisfies Expression[]
} as const satisfies UniheritagesTableRowConstraints,
{
    "table": "uniheritages",
    "id": 30,
    "name": "Suli",
    "rarity": "UNCOMMON",
    "description": "__Sulis are geniekin who embody a mixture of elements, most commonly air, earth, fire, and water. They are typically the descendants of jann, genies of all four elements that wander the Material Plane instead of making a home on the Elemental Planes.__\n\nYou are descended from a janni or otherwise embody a dichotomy of opposing elemental planar forces. You gain the (trait: suli) trait, in addition to the traits from your ancestry. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can choose from suli feats and feats from your ancestry whenever you gain an ancestry feat.",
    "tagID": 1204,
    "code": [
        "GIVE-CHAR-TRAIT-NAME=Suli",
        "IF (HAS-VISION==Low-Light Vision) {GIVE-SENSE-NAME=Darkvision} ELSE {GIVE-SENSE-NAME=Low-Light Vision}"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "version": "1.0",
    "createdAt": "2021-02-19T22:09:33",
    "updatedAt": "2021-02-19T22:09:33",
    "wsci": [
        ["giveCharTraitName","Suli"],
        {"conditionals":[["hasVision","==","low-light vision"]],"consequent":["giveSenseName","darkvision",null],"alternate":["giveSenseName","low-light vision",null]}
    ] satisfies Expression[]
} as const satisfies UniheritagesTableRowConstraints,
{
    "table": "uniheritages",
    "id": 40,
    "name": "Beastkin",
    "rarity": "RARE",
    "description": "__Beastkin have extraordinary abilities derived from the animal world, allowing them to partially or fully transform into animals, granting them deadly fangs, refined senses, and other such traits. A beastkin treads the line between nature and society, living with a foot in each.__\n \nThe blood of a beast flows through your veins, granting you the ferocity and might of animals. Only creatures with the (trait: humanoid) trait can take the beastkin versatile heritage. Choose a type of animal such as bat, eagle, shark, spider, tyrannosaurus, wasp, or wolf. This is the type of animal tied to your heritage and is known as your inherent animal. You gain the beast and (trait: beastkin) traits, in addition to the traits from your ancestry. You gain the (feat: Change Shape | Change Shape - Beastkin) ability. A beastkin’s hybrid form is their natural shape. You can choose from beastkin feats and feats from your ancestry whenever you gain an ancestry feat.",
    "tagID": 1214,
    "code": [
        "GIVE-CHAR-TRAIT-NAME=Beastkin",
        "GIVE-FEAT-NAME=Change Shape - Beastkin",
        "GIVE-NOTES-FIELD=Use this area to keep information about your type of animal."
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "version": "1.0",
    "createdAt": "2021-02-20T09:17:29",
    "updatedAt": "2021-02-20T09:22:02",
    "wsci": [
        ["giveCharTraitName","Beastkin"],
        ["giveFeatName",["change shape - beastkin"]],
        ["giveNotesField","Use this area to keep information about your type of animal."]
    ] satisfies Expression[]
} as const satisfies UniheritagesTableRowConstraints,
{
    "table": "uniheritages",
    "id": 46,
    "name": "Aphorite",
    "rarity": "UNCOMMON",
    "description": "__Once perfectly identical beings who bridged the gap between Axis’s perfect order and mortals’ unrestricted existence, aphorites are now lit more by the spark of free will than the beacon of cosmic law.__\nYou were born with a connection to Axis, the Plane of Law. You gain the (trait: aphorite) trait, in addition to the traits from your ancestry. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can choose from aphorite feats and feats from your ancestry whenever you gain an ancestry feat.",
    "tagID": 1240,
    "code": [
        "GIVE-CHAR-TRAIT-NAME=Aphorite",
        "IF (HAS-VISION==Low-Light Vision) {GIVE-SENSE-NAME=Darkvision} ELSE {GIVE-SENSE-NAME=Low-Light Vision}"
    ],
    "isArchived": true,
    "contentSrc": "LOST-ANCESTRY-GUIDE",
    "version": "1.0",
    "createdAt": "2021-02-22T23:57:02",
    "updatedAt": "2021-02-22T23:57:02",
    "wsci": [
        ["giveCharTraitName","Aphorite"],
        {"conditionals":[["hasVision","==","low-light vision"]],"consequent":["giveSenseName","darkvision",null],"alternate":["giveSenseName","low-light vision",null]}
    ] satisfies Expression[]
} as const satisfies UniheritagesTableRowConstraints,
{
    "table": "uniheritages",
    "id": 201,
    "name": "Reflection",
    "rarity": "RARE",
    "description": "__Stories of malevolent duplicates are commonly told around campfires to frighten companions. In these tales, the duplicate forms after a botched ritual or exposure to a mysterious artifact, and is bent on replacing the creature they've replicated. Most believe such stories to be only that, but such reflection duplicates are real. While some wish to replace their progenitors, others merely want to forge a new life for themselves where no one knows of their origins.__\n\nYou were created as a duplicate of another creature, intentionally or accidentally, though you might not know of your origins. Other than a minor mark or two, you look just like your progenitor. You gain the (trait: reflection) trait, in addition to the traits from your ancestry. You don't need to attempt Deception checks to (action: Impersonate) your progenitor unless you're interacting with people who know them personally or you do something known to be out of character for them. The GM might require you to roll a Deception check in other circumstances, such as if you're mirror-risen and interacting with someone who has seen an accurate likeness of your progenitor and might notice a distinguishing feature on the reverse side. You can choose from reflection feats and feats from your ancestry whenever you gain an ancestry feat.",
    "tagID": 3887,
    "code": [
        "GIVE-CHAR-TRAIT-NAME=Reflection",
        "GIVE-NOTES-FIELD=Use this area to keep information about your progenitor."
    ],
    "isArchived": true,
    "contentSrc": "DARK-ARCHIVE",
    "version": "1.0",
    "createdAt": "2022-07-27T17:44:36",
    "updatedAt": "2022-07-27T17:44:36",
    "wsci": [
        ["giveCharTraitName","Reflection"],
        ["giveNotesField","Use this area to keep information about your progenitor."]
    ] satisfies Expression[]
} as const satisfies UniheritagesTableRowConstraints,
 ] as const;

export const uniheritages = hookupTableLookup(_uniheritages);