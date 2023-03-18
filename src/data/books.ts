import type { Expression } from '../wsc/types';
import { hookupTableLookup } from '../tables';

export interface BooksTableRowConstraints {
  table: 'books';
  id: number;
  wsci?: Readonly<Expression[]>;
  codeName: string;
  name: string;
  url?: string;
  description?: string;
  code?: readonly string[];
  createdAt?: string;
  updatedAt?: string;
}

export type BooksTable = typeof books;
export type BooksTableRow = BooksTable[number];
export type BookID = BooksTableRow['id'];

export const isBookID = (id?: number): id is BookID => !!id && !!books.byIdLax(id);
export const assertIsBookID = (id?: number): asserts id is BookID => { if (!isBookID(id)) throw Error('Expected a BookID; got ' + id); }

const _books = [
{
    "table": "books",
    "codeName": "CROWN-OF-KOBOLD-KING",
    "name": "Crown of the Kobold King",
    "url": "https://paizo.com/products/btq02ase",
    "id": 120104592
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "SLITHERING",
    "name": "The Slithering",
    "url": "https://paizo.com/products/btq023hg?Pathfinder-Adventure-The-Slithering",
    "id": 283431440
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "LOST-LEGENDS",
    "name": "Lost Omens: Legends",
    "url": "https://paizo.com/products/btq023gd?Pathfinder-Lost-Omens-Legends",
    "code": [
        "IF(HAS-ENABLED-SOURCE==Advanced Player's Guide){SET-VARIABLE=WITCH_MAJOR_LESSONS.SET_INDEX_NEXT:Lesson of the Frozen Queen}"
    ],
    "id": 413324143,
    "wsci": [
        {"conditionals":[["hasEnabledSource","==","advanced player's guide"]],"consequent":["setVariable","witch_major_lessons",".SET_INDEX_NEXT","Lesson of the Frozen Queen"]}
    ] satisfies Expression[]
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "CRB",
    "name": "Core Rulebook",
    "url": "https://paizo.com/products/btq01zp3?Pathfinder-Core-Rulebook",
    "id": 518655072
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "LOST-ANCESTRY-GUIDE",
    "name": "Lost Omens: Ancestry Guide",
    "url": "https://paizo.com/products/btq026k5?Pathfinder-Lost-Omens-Ancestry-Guide",
    "id": 537973644
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "EXTINCTION-CURSE",
    "name": "Extinction Curse",
    "url": "https://paizo.com/store/pathfinder/adventures/adventurePath/extinctioncurse",
    "id": 555382386
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "MALEVOLENCE",
    "name": "Malevolence",
    "url": "https://paizo.com/products/btq027qf?Pathfinder-Adventure-Malevolence",
    "id": 566951640
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "LOST-IMPOSSIBLE-LANDS",
    "name": "Lost Omens: Impossible Lands",
    "url": "https://paizo.com/products/btq02dxx?Pathfinder-Lost-Omens-Impossible-Lands",
    "id": 721805553
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "PATH-SOCIETY",
    "name": "Pathfinder Society",
    "url": "https://paizo.com/pathfindersociety",
    "id": 738288709
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "BEST-3",
    "name": "Bestiary 3",
    "url": "https://paizo.com/products/btq027mn?Pathfinder-Bestiary-3",
    "id": 782854079
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "LOST-KNIGHTS-WALL",
    "name": "Lost Omens: Knights of Lastwall",
    "url": "https://paizo.com/products/btq02ajm?Pathfinder-Lost-Omens-Knights-of-Lastwall",
    "id": 886567698
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "GM-GUIDE",
    "name": "Gamemastery Guide",
    "url": "https://paizo.com/products/btq022c1?Pathfinder-Gamemastery-Guide",
    "id": 1114025217
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "AGENTS-OF-EDGEWATCH",
    "name": "Agents of Edgewatch",
    "url": "https://paizo.com/store/pathfinder/adventures/adventurePath/agentsOfEdgewatch",
    "id": 1302264450
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "LOST-GOD-MAGIC",
    "name": "Lost Omens: Gods & Magic",
    "url": "https://paizo.com/products/btq021wf?Pathfinder-Lost-Omens-Gods-Magic",
    "id": 1354686016
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "LOST-TRAVEL-GUIDE",
    "name": "Lost Omens: Travel Guide",
    "url": "https://paizo.com/products/btq02dv8",
    "id": 1416358807
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "SECRETS-OF-MAGIC",
    "name": "Secrets of Magic",
    "url": "https://paizo.com/products/btq026l5?Pathfinder-Secrets-of-Magic",
    "id": 1542072840
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "LOST-CITY-ABSALOM",
    "name": "Lost Omens: City of Absalom",
    "url": "https://paizo.com/products/btq02ap2",
    "id": 1707705799
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "FALL-OF-PLAGUE",
    "name": "The Fall of Plaguestone",
    "url": "https://paizo.com/products/btq01zoh?Pathfinder-Adventure-The-Fall-of-Plaguestone",
    "id": 1842336337
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "KINGMAKER",
    "name": "Kingmaker",
    "url": "https://paizo.com/products/btq02e0d?Pathfinder-Kingmaker-Adventure-Path",
    "id": 1909021151
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "QUEST-FROZEN-FLAME",
    "name": "Quest for the Frozen Flame",
    "url": "https://paizo.com/store/pathfinder/adventures/adventurePath/questForTheFrozenFlame",
    "id": 1952023998
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "OUTLAWS-ALKENSTAR",
    "name": "Outlaws of Alkenstar",
    "url": "https://paizo.com/store/pathfinder/adventures/adventurePath/outlawsOfAlkenstar",
    "id": 2079410404
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "LOST-MONSTERS-MYTH",
    "name": "Lost Omens: Monsters of Myth",
    "url": "https://paizo.com/products/btq02aoy",
    "id": 2301840009
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "LOST-WORLD-GUIDE",
    "name": "Lost Omens: World Guide",
    "url": "https://paizo.com/products/btq01zoj?Pathfinder-Lost-Omens-World-Guide",
    "id": 2318515203
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "LOST-GRAND-BAZAAR",
    "name": "Lost Omens: Grand Bazaar",
    "url": "https://paizo.com/products/btq029xo?Pathfinder-Lost-Omens-The-Grand-Bazaar",
    "id": 2329578482
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "LOST-SOCIETY-GUIDE",
    "name": "Lost Omens: Pathfinder Society Guide",
    "url": "https://paizo.com/products/btq0233q?Pathfinder-Lost-Omens-Pathfinder-Society-Guide",
    "id": 2334056764
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "BOOK-OF-DEAD",
    "name": "Book of the Dead",
    "url": "https://paizo.com/products/btq02c0j",
    "id": 2498590351
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "NIGHT-GRAY-DEATH",
    "name": "Night of the Gray Death",
    "url": "https://paizo.com/products/btq02alp?Pathfinder-Adventure-Night-of-the-Gray-Death",
    "id": 2774063188
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "ABOMINATION-VAULTS",
    "name": "Abomination Vaults",
    "url": "https://paizo.com/store/pathfinder/adventures/adventurePath/abominationVaults",
    "id": 2846488963
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "FIST-PHOENIX",
    "name": "Fists of the Ruby Phoenix",
    "url": "https://paizo.com/store/pathfinder/adventures/adventurePath/fistsOfTheRubyPhoenix",
    "id": 2867089343
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "DARK-ARCHIVE",
    "name": "Dark Archive",
    "url": "https://paizo.com/products/btq02d8j",
    "code": [
        "IF(HAS-ENABLED-SOURCE==Advanced Player's Guide){SET-VARIABLE=WITCH_GREATER_LESSONS.SET_INDEX_NEXT:Lesson of Favors}",
        "IF(HAS-ENABLED-SOURCE==Advanced Player's Guide){SET-VARIABLE=WITCH_MAJOR_LESSONS.SET_INDEX_NEXT:Lesson of Bargains}"
    ],
    "id": 3067008852,
    "wsci": [
        {"conditionals":[["hasEnabledSource","==","advanced player's guide"]],"consequent":["setVariable","witch_greater_lessons",".SET_INDEX_NEXT","Lesson of Favors"]},
        {"conditionals":[["hasEnabledSource","==","advanced player's guide"]],"consequent":["setVariable","witch_major_lessons",".SET_INDEX_NEXT","Lesson of Bargains"]}
    ] satisfies Expression[]
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "STRENGTH-THOUSANDS",
    "name": "Strength of Thousands",
    "url": "https://paizo.com/store/pathfinder/adventures/adventurePath/strengthOfThousands",
    "code": [
        "IF(HAS-ENABLED-SOURCE==Advanced Player's Guide){SET-VARIABLE=WITCH_BASIC_LESSONS.SET_INDEX_NEXT:Lesson of Calamity}"
    ],
    "id": 3252234338,
    "wsci": [
        {"conditionals":[["hasEnabledSource","==","advanced player's guide"]],"consequent":["setVariable","witch_basic_lessons",".SET_INDEX_NEXT","Lesson of Calamity"]}
    ] satisfies Expression[]
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "AGE-OF-ASHES",
    "name": "Age of Ashes",
    "url": "https://paizo.com/store/pathfinder/adventures/adventurePath/ageOfAshes",
    "id": 3467740618
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "GUNS-AND-GEARS",
    "name": "Guns & Gears",
    "url": "https://paizo.com/products/btq026mw?Pathfinder-Guns-Gears",
    "code": [
        "DEFINE-VARIABLE=INVENTOR_ARMOR_TYPES:LIST",
        "SET-VARIABLE=INVENTOR_ARMOR_TYPES:[\"(item: Power Suit | Innovation Armor - Power Suit)\",\"(item: Subterfuge Suit | Innovation Armor - Subterfuge Suit)\"]",
        "DEFINE-VARIABLE=INVENTOR_ARMOR_INITIAL_MODS:LIST",
        "SET-VARIABLE=INVENTOR_ARMOR_INITIAL_MODS:[\"Modification - Harmonic Oscillator\",\"Modification - Metallic Reactance\",\"Modification - Muscular Exoskeleton\",\"Modification - Otherworldly Protection\", \"Modification - Phlogistonic Regulator\", \"Modification - Speed Boosters\", \"Modification - Subtle Dampeners\"]",
        "DEFINE-VARIABLE=INVENTOR_CONSTRUCT_INITIAL_MODS:LIST",
        "SET-VARIABLE=INVENTOR_CONSTRUCT_INITIAL_MODS:[\"Modification - Accelerated Mobility\",\"Modification - Amphibious Construction\",\"Modification - Increased Size\",\"Modification - Manual Dexterity\", \"Modification - Projectile Launcher\", \"Modification - Sensory Array\", \"Modification - Wonder Gears\"]",
        "DEFINE-VARIABLE=INVENTOR_WEAPON_INITIAL_MODS:LIST",
        "SET-VARIABLE=INVENTOR_WEAPON_INITIAL_MODS:[\"Modification - Blunt Shot\",\"Modification - Complex Simplicity\",\"Modification - Dynamic Weighting\",\"Modification - Entangling Form\", \"Modification - Hampering Spikes\", \"Modification - Hefty Composition\", \"Modification - Modular Head\", \"Modification - Pacification Tools\", \"Modification - Razor Prongs\", \"Modification - Segmented Frame\"]",
        "DEFINE-VARIABLE=INVENTOR_ARMOR_BREAKTHROUGH_MODS:LIST",
        "SET-VARIABLE=INVENTOR_ARMOR_BREAKTHROUGH_MODS:[\"Modification - Antimagic Plating\",\"Modification -  Camouflage Pigmentation\",\"Modification - Dense Plating\",\"Modification - Enhanced Resistance\", \"Modification - Heavy Construction\", \"Modification - Hyper Boosters\", \"Modification - Layered Mesh\",\"Modification - Tensile Absorption\"]",
        "DEFINE-VARIABLE=INVENTOR_ARMOR_REVOLUTIONARY_MODS:LIST",
        "SET-VARIABLE=INVENTOR_ARMOR_REVOLUTIONARY_MODS:[\"Modification - Automated Impediments\",\"Modification - Energy Barrier\",\"Modification - Incredible Resistance\",\"Modification - Multisensory Mask\", \"Modification - Perfect Fortification\", \"Modification - Physical Protections\", \"Modification - Rune Capacity\"]",
        "DEFINE-VARIABLE=INVENTOR_CONSTRUCT_BREAKTHROUGH_MODS:LIST",
        "SET-VARIABLE=INVENTOR_CONSTRUCT_BREAKTHROUGH_MODS:[\"Modification - Advanced Weaponry\",\"Modification - Antimagic Construction\",\"Modification - Climbing Limbs\",\"Modification - Durable Construction\", \"Modification - Marvelous Gears\", \"Modification - Turret Configuration\"]",
        "DEFINE-VARIABLE=INVENTOR_CONSTRUCT_REVOLUTIONARY_MODS:LIST",
        "SET-VARIABLE=INVENTOR_CONSTRUCT_REVOLUTIONARY_MODS:[\"Modification - Flight Chassis\",\"Modification - Miracle Gears\",\"Modification - Resistant Coating\",\"Modification - Runic Keystone\", \"Modification - Wall Configuration\"]",
        "DEFINE-VARIABLE=INVENTOR_WEAPON_BREAKTHROUGH_MODS:LIST",
        "SET-VARIABLE=INVENTOR_WEAPON_BREAKTHROUGH_MODS:[\"Modification - Advanced Rangefinder\",\"Modification - Aerodynamic Construction\",\"Modification - Inconspicuous Appearance\",\"Modification - Integrated Gauntlet\", \"Modification - Manifold Alloy\", \"Modification - Rope Shot\",\"Modification - Tangle Line\"]",
        "DEFINE-VARIABLE=INVENTOR_WEAPON_REVOLUTIONARY_MODS:LIST",
        "SET-VARIABLE=INVENTOR_WEAPON_REVOLUTIONARY_MODS:[\"Modification - Attack Refiner\",\"Modification - Deadly Strike\",\"Modification - Enhanced Damage\",\"Modification - Extensible Weapon\", \"Modification - Impossible Alloy\", \"Modification - Momentum Retainer\",\"Modification - Omnirange Stabilizers\",\"Modification - Rune Capacity\"]"
    ],
    "id": 3512057558,
    "wsci": [
        ["defineVariable","inventor_armor_types","list"],
        ["setVariable","inventor_armor_types",null,["(item: Power Suit | Innovation Armor - Power Suit)","(item: Subterfuge Suit | Innovation Armor - Subterfuge Suit)"]],
        ["defineVariable","inventor_armor_initial_mods","list"],
        ["setVariable","inventor_armor_initial_mods",null,["Modification - Harmonic Oscillator","Modification - Metallic Reactance","Modification - Muscular Exoskeleton","Modification - Otherworldly Protection","Modification - Phlogistonic Regulator","Modification - Speed Boosters","Modification - Subtle Dampeners"]],
        ["defineVariable","inventor_construct_initial_mods","list"],
        ["setVariable","inventor_construct_initial_mods",null,["Modification - Accelerated Mobility","Modification - Amphibious Construction","Modification - Increased Size","Modification - Manual Dexterity","Modification - Projectile Launcher","Modification - Sensory Array","Modification - Wonder Gears"]],
        ["defineVariable","inventor_weapon_initial_mods","list"],
        ["setVariable","inventor_weapon_initial_mods",null,["Modification - Blunt Shot","Modification - Complex Simplicity","Modification - Dynamic Weighting","Modification - Entangling Form","Modification - Hampering Spikes","Modification - Hefty Composition","Modification - Modular Head","Modification - Pacification Tools","Modification - Razor Prongs","Modification - Segmented Frame"]],
        ["defineVariable","inventor_armor_breakthrough_mods","list"],
        ["setVariable","inventor_armor_breakthrough_mods",null,["Modification - Antimagic Plating","Modification -  Camouflage Pigmentation","Modification - Dense Plating","Modification - Enhanced Resistance","Modification - Heavy Construction","Modification - Hyper Boosters","Modification - Layered Mesh","Modification - Tensile Absorption"]],
        ["defineVariable","inventor_armor_revolutionary_mods","list"],
        ["setVariable","inventor_armor_revolutionary_mods",null,["Modification - Automated Impediments","Modification - Energy Barrier","Modification - Incredible Resistance","Modification - Multisensory Mask","Modification - Perfect Fortification","Modification - Physical Protections","Modification - Rune Capacity"]],
        ["defineVariable","inventor_construct_breakthrough_mods","list"],
        ["setVariable","inventor_construct_breakthrough_mods",null,["Modification - Advanced Weaponry","Modification - Antimagic Construction","Modification - Climbing Limbs","Modification - Durable Construction","Modification - Marvelous Gears","Modification - Turret Configuration"]],
        ["defineVariable","inventor_construct_revolutionary_mods","list"],
        ["setVariable","inventor_construct_revolutionary_mods",null,["Modification - Flight Chassis","Modification - Miracle Gears","Modification - Resistant Coating","Modification - Runic Keystone","Modification - Wall Configuration"]],
        ["defineVariable","inventor_weapon_breakthrough_mods","list"],
        ["setVariable","inventor_weapon_breakthrough_mods",null,["Modification - Advanced Rangefinder","Modification - Aerodynamic Construction","Modification - Inconspicuous Appearance","Modification - Integrated Gauntlet","Modification - Manifold Alloy","Modification - Rope Shot","Modification - Tangle Line"]],
        ["defineVariable","inventor_weapon_revolutionary_mods","list"],
        ["setVariable","inventor_weapon_revolutionary_mods",null,["Modification - Attack Refiner","Modification - Deadly Strike","Modification - Enhanced Damage","Modification - Extensible Weapon","Modification - Impossible Alloy","Modification - Momentum Retainer","Modification - Omnirange Stabilizers","Modification - Rune Capacity"]]
    ] satisfies Expression[]
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "LOST-MWANGI",
    "name": "Lost Omens: The Mwangi Expanse",
    "url": "https://paizo.com/products/btq027ot?Pathfinder-Lost-Omens-The-Mwangi-Expanse",
    "id": 3524608537
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "BEST-2",
    "name": "Bestiary 2",
    "url": "https://paizo.com/products/btq022yq?Pathfinder-Bestiary-2",
    "id": 3578046465
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "ADV-PLAYER-GUIDE",
    "name": "Advanced Player's Guide",
    "url": "https://paizo.com/products/btq023ih?Pathfinder-Advanced-Players-Guide",
    "code": [
        "DEFINE-VARIABLE=WITCH_BASIC_LESSONS:LIST",
        "SET-VARIABLE=WITCH_BASIC_LESSONS:[\"Lesson of Dreams\",\"Lesson of Life\",\"Lesson of Protection\",\"Lesson of the Elements\",\"Lesson of Vengeance\"]",
        "DEFINE-VARIABLE=WITCH_GREATER_LESSONS:LIST",
        "SET-VARIABLE=WITCH_GREATER_LESSONS:[\"Lesson of Mischief\",\"Lesson of Shadow\",\"Lesson of Snow\"]",
        "DEFINE-VARIABLE=WITCH_MAJOR_LESSONS:LIST",
        "SET-VARIABLE=WITCH_MAJOR_LESSONS:[\"Lesson of Death\",\"Lesson of Renewal\"]"
    ],
    "id": 3798243732,
    "wsci": [
        ["defineVariable","witch_basic_lessons","list"],
        ["setVariable","witch_basic_lessons",null,["Lesson of Dreams","Lesson of Life","Lesson of Protection","Lesson of the Elements","Lesson of Vengeance"]],
        ["defineVariable","witch_greater_lessons","list"],
        ["setVariable","witch_greater_lessons",null,["Lesson of Mischief","Lesson of Shadow","Lesson of Snow"]],
        ["defineVariable","witch_major_lessons","list"],
        ["setVariable","witch_major_lessons",null,["Lesson of Death","Lesson of Renewal"]]
    ] satisfies Expression[]
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "LOST-CHAR-GUIDE",
    "name": "Lost Omens: Character Guide",
    "url": "https://paizo.com/products/btq01zt4?Pathfinder-Lost-Omens-Character-Guide",
    "id": 3956226673
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "RAGE-OF-ELEMENTS",
    "name": "Rage of Elements",
    "url": "https://downloads.paizo.com/PZO2113_KineticistClassPlaytest.pdf",
    "id": 4130617526
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "BEST-1",
    "name": "Bestiary",
    "url": "https://paizo.com/products/btq01zp4?Pathfinder-Bestiary",
    "id": 4228847133
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "THRESHOLD-KNOWLEDGE",
    "name": "Threshold of Knowledge",
    "url": "https://paizo.com/products/btq02apx?Pathfinder-Adventure-Threshold-of-Knowledge",
    "id": 4270316607
} as const satisfies BooksTableRowConstraints,
{
    "table": "books",
    "codeName": "TROUBLES-IN-OTARI",
    "name": "Troubles in Otari",
    "url": "https://paizo.com/products/btq026k1?Pathfinder-Adventure-Troubles-in-Otari",
    "id": 4283403904
} as const satisfies BooksTableRowConstraints,
 ] as const;

export const books = hookupTableLookup(_books);