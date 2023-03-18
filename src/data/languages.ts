import { hookupTableLookup } from '../tables';

import { ContentSrc } from './shared_types';

export interface LanguagesTableRowConstraints {
  table: 'languages';
  id: number;
  name?: string;
  speakers?: string;
  script?: string;
  description?: string;
  contentSrc: ContentSrc;
  homebrewID?: number;
  createdAt?: string;
  updatedAt?: string;
}

export type LanguagesTable = typeof languages;
export type LanguagesTableRow = LanguagesTable[number];
export type LanguageID = LanguagesTableRow['id'];

export const isLanguageID = (id?: number): id is LanguageID => !!id && !!languages.byIdLax(id);
export const assertIsLanguageID = (id?: number): asserts id is LanguageID => { if (!isLanguageID(id)) throw Error('Expected a LanguageID; got ' + id); }

const _languages = [
{
    "table": "languages",
    "id": 1,
    "name": "Common",
    "speakers": "Humans, Dwarves, Elves, Halflings, and other common ancestries",
    "script": "Common",
    "description": "Common is a relative term used to denote the most prevalent human language spoken in a particular region. In each different region there may be different dialects and variations in the common language. In general, Common is the name for the standard language in which most humanoids speak.",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:32:51",
    "updatedAt": "2019-12-13T00:32:51"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 2,
    "name": "Draconic",
    "speakers": "Dragons, reptilian humanoids",
    "script": "Iokharic",
    "description": "It is believed that Draconic is among the oldest, if not the oldest, language of the multiverse. Because of this, nearly all other languages can trace some roots back to this primordial tongue. Many reptilian races use crude versions of Draconic, including kobolds, lizardfolk, and troglodytes, and present this as proof of their kinship with dragons. It is equally likely that these races were once taught or enslaved by dragons, and it is even possible that they took Draconic for their own simply to make a claim to common ancestors.",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:33:09",
    "updatedAt": "2019-12-13T00:33:09"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 3,
    "name": "Dwarven",
    "speakers": "Dwarves",
    "script": "Dethek",
    "description": "Dwarven is a clipped language of hard consonants and guttural pronunciation. Dwarven shares its runic alphabet with Terran, along with a number of other similarities. Dwarven names are full of harsh-sounding consonants, and rarely include soft, or sibilant sounds. Honorifics are common in given names, such as \"-sun\" (\"-son\"), \"-dam\" (\"-daughter\"), and \"-hild\" (\"-wife\"). Family names sometimes contain words in (language: Common) such as \"gold\" or \"hammer\". Also, the letters Q and X do not appear in Dwarven.",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:33:18",
    "updatedAt": "2019-12-13T00:33:18"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 4,
    "name": "Elven",
    "speakers": "Elves, Half-Elves",
    "script": "Rellanic",
    "description": "Elven is believed to be among the eldest, if not the eldest of the languages mortals speak. Scholars conjecture that it was formed when elven speakers of (language: Sylvan) tried to introduce grammatical rules and vocabulary from both (language: Celestial) and (language: Draconic). The elven alphabet contains thirty-three letters (twenty-four consonants and nine vowels). It is a complex language, but sounds poetic in tone and cadence.",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:33:30",
    "updatedAt": "2019-12-13T00:33:30"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 5,
    "name": "Gnomish",
    "speakers": "Gnomes",
    "script": "Gnomish",
    "description": "In terms of the sheer number of words in its vocabulary, Gnome, or Gnomish, is the largest language known. It has changed dramatically since gnomes first introduced it to the world, a process which has by no means halted. It shares certain similarities with both (language: Aklo) and (language: Sylvan).",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:33:43",
    "updatedAt": "2019-12-13T00:33:43"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 6,
    "name": "Goblin",
    "speakers": "Goblins, Hobgoblins, Bugbears",
    "script": "Dethek",
    "description": "Goblin vocabulary is shared by the goblin, bugbear, and hobgoblin races, even if the pronunciations, inflections, and usage differs wildly among them. When spoken by goblins, it is nearly incomprehensible to outsiders, and sounds more like high-pitched yapping. Among the martial hobgoblins, it takes the form of short, barked commands, while the bugbears speak their taunts with a sibilance not heard among the other goblinoid races. It is an extremely flexible language, containing a plethora of terms related to subservience, fear, and death.",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:33:53",
    "updatedAt": "2019-12-13T00:33:53"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 7,
    "name": "Halfling",
    "speakers": "Halflings",
    "script": "Common",
    "description": "Halfling, which was properly called Luiric, was a language spoken by the halflings of Luiren. Since halflings were so adaptive by nature, the vast majority of halflings outside of Luiren had abandoned their native tongue and spoke (language: Common) or other human languages instead.",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:35:16",
    "updatedAt": "2019-12-13T00:35:16"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 8,
    "name": "Jotun",
    "speakers": "Giants, Ogres, Trolls, Ettins, Cyclopes",
    "script": "Dethek",
    "description": "The language of the various races of giants that exist today. It was first used by the giant slaves of the runelords in the ages long ago.",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:35:34",
    "updatedAt": "2019-12-13T00:35:34"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 9,
    "name": "Orcish",
    "speakers": "Orcs, Half-Orcs",
    "script": "Dethek",
    "description": "Much like the folk who speak it, Orc is a harsh and violent language, full of sharp delivery and hard consonants.",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:35:45",
    "updatedAt": "2019-12-13T00:35:45"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 10,
    "name": "Sylvan",
    "speakers": "Fey, Centaurs, plant creatures",
    "script": "Rellanic",
    "description": "The language of the fey, Sylvan is one of the most linguistically static of all languages. Thought to be nearly as old as (language: Draconic) or (language: Abyssal), Sylvan has a tiny vocabulary, which has barely changed over the eons.",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:36:05",
    "updatedAt": "2019-12-13T00:36:05"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 11,
    "name": "Undercommon",
    "speakers": "Drow, Duergars, Xulgaths",
    "script": "Rellanic",
    "description": "Undercommon is the most widely spoken language of the Darklands. It evolved from (language: Elven) and was repurposed by the drow over the centuries to fit their new homelands. It orginally incorporated words from other languages, but eventually mutated so far that it was mutually unintelligible with its mother tongues.",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:36:50",
    "updatedAt": "2019-12-13T00:36:50"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 12,
    "name": "Abyssal",
    "speakers": "Demons",
    "script": "Barazhad",
    "description": "Some believe that Abyssal was the first language developed by the inhabitants of the Outer Sphere. Given the incredible rate of change within the tongue, this is very difficult to prove. Although it is the native language of the demons of the Abyss, it is also spoken by many devils, daemons, or others who have frequent dealings with races of the lower realms.",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:37:05",
    "updatedAt": "2019-12-13T00:37:05"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 13,
    "name": "Aklo",
    "speakers": "Deros, evil Fey, otherworldly monsters",
    "script": "Aklo",
    "description": "Aklo is a language found in remote pockets of the Darklands, and is thought to have otherworldly origins. It is believed to be the language of the serpentfolk but is also spoken by creatures as diverse as linnorms, neothelids, alghollthus, shoggoths, and gibbering mouthers. Mortals struggle to learn and speak it. It shares certain similarities with (language: Gnomish).",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:37:17",
    "updatedAt": "2019-12-13T00:37:17"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 14,
    "name": "Aquan",
    "speakers": "Aquatic creatures, water elemental creatures",
    "script": "Rellanic",
    "description": "Aquan, from the Plane of Water, grew from a proto-elemental language which was the progenitor of all elemental languages. Much of its vocabulary is taken up with water-related terms. It is a guttural language with many long syllables made up of dense, throaty sounds, with affixes and inflections providing subtle shifts in meaning.",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:37:31",
    "updatedAt": "2019-12-13T00:37:31"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 15,
    "name": "Auran",
    "speakers": "Flying creatures, air elemental creatures",
    "script": "Rellanic",
    "description": "Auran is a soft-spoken, breathy language which shares a similar grammar with the other elemental languages. It is primarily spoken by those of the Elemental Plane of Air, and occasionally by other inhabitants of the world, where it is sometimes referred to as the \"tongue of the heavens\".",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:37:48",
    "updatedAt": "2019-12-13T00:37:48"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 16,
    "name": "Celestial",
    "speakers": "Angels",
    "script": "Enochian",
    "description": "Celestial is described as beautiful, yet alien in nature, since it developed among beings with thought patterns very unlike those of humanity. It shares aspects of its structure with both (language: Sylvan) and (language: Draconic), with few voiced consonants and lightly voiced vowels.",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:37:59",
    "updatedAt": "2019-12-13T00:37:59"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 17,
    "name": "Gnoll",
    "speakers": "Gnolls",
    "script": "Common",
    "description": "This language is hard for non-gnolls to understand and speak, as it is made up of countless barks, growls and yips. Like many other ancestral languages, its construction is a clear reflection of the cultural priorities of its speakers: gnoll has 37 words for the term \"slave\" and only two for \"work\".",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:38:08",
    "updatedAt": "2019-12-13T00:38:08"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 18,
    "name": "Ignan",
    "speakers": "Fire elemental creatures",
    "script": "Iokharic",
    "description": "The language of the Elemental Plane of Fire, Ignan is a quick, percussive language, said to emulate the popping of a fire. In some regions, Ignan is also known as the \"tongue of fire\" and is most commonly spoken in near volcanic mountain ranges.",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:38:18",
    "updatedAt": "2019-12-13T00:38:18"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 19,
    "name": "Infernal",
    "speakers": "Devils",
    "script": "Barazhad",
    "description": "Spoken predominantly in Hell and by those who traffic with it, Infernal is a concise language which requires precise speech. It contains many homophones in its vocabulary, leading to great confusion among novice speakers, as similar-sounding words can have widely varying meaning.",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:38:28",
    "updatedAt": "2019-12-13T00:38:28"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 20,
    "name": "Necril",
    "speakers": "Ghouls, intelligent undead",
    "script": "Necril",
    "description": "Necril is the muttering language spoken by the ravenous ghouls of the Darklands, but is also spoken by many intelligent undead throughout the world and by those who hunt them. It is a mixture of ancient and modern (language: Aklo) and (language: Undercommon), focusing on terms and concepts central to the ghouls' existence and morbid culture.",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:38:42",
    "updatedAt": "2019-12-13T00:38:42"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 21,
    "name": "Shadowtongue",
    "speakers": "Nidalese, Shadow Plane creatures",
    "script": "None",
    "description": "This strangely beautiful language is very mysterious in nature. It has no written form and when spoken it sounds like a whisper. It is believed to have an been influenced by (language: Infernal) and (language: Aklo).",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:39:10",
    "updatedAt": "2019-12-13T00:39:10"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 22,
    "name": "Terran",
    "speakers": "Earth elemental creatures",
    "script": "Dethek",
    "description": "Like the other elemental languages, Terran sentences always begin with the subject, followed by the object and the verb. It is an extremely slow language and not meant to be rushed. The Plane of Earth's oldest earth elementals speak a version of Terran that is so ancient it is incomprehensible to any others, including native Terran speakers. It is believed this form of the language is that spoken when the Plane of Earth formed, and maybe from even before that time.",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:39:33",
    "updatedAt": "2019-12-13T00:39:33"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 23,
    "name": "Druidic",
    "speakers": "Druids",
    "script": "Druidic",
    "description": "This language has been guarded so vigilantly by the druids of the world that it remains a secret language to this day. Speakers of (language: Elven) or (language: Sylvan) may be able to discern a few individual words here and there, but even they remain baffled without a greater context to place them in.",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:39:44",
    "updatedAt": "2019-12-13T00:39:44"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 24,
    "name": "Boggard",
    "speakers": "Boggards, Gripplis",
    "script": "Common",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:39:44",
    "updatedAt": "2019-12-13T00:39:44"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 25,
    "name": "Shoony",
    "speakers": "Shoony",
    "script": "Common",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:39:44",
    "updatedAt": "2019-12-13T00:39:44"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 26,
    "name": "Iruxi",
    "speakers": "Lizardfolk",
    "script": "Iokharic",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:39:44",
    "updatedAt": "2019-12-13T00:39:44"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 27,
    "name": "Amurrun",
    "speakers": "Catfolk, Lizardfolk",
    "script": "Common",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:39:44",
    "updatedAt": "2019-12-13T00:39:44"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 28,
    "name": "Tengu",
    "speakers": "Tengu, Oni",
    "script": "Tengu",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:39:44",
    "updatedAt": "2019-12-13T00:39:44"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 29,
    "name": "Ysoki",
    "speakers": "Ratfolk",
    "script": "Ysoki",
    "contentSrc": "CRB",
    "createdAt": "2019-12-13T00:39:44",
    "updatedAt": "2019-12-13T00:39:44"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 54,
    "name": "Androffan",
    "speakers": "Androids",
    "script": "Androffan",
    "description": "To the ear, Androffan is clipped and sharp; in written form it is quite alien to other forms of writing on Golarion, using multiple dots to supplement a curved and graceful script.",
    "contentSrc": "CRB",
    "createdAt": "2021-02-09T17:50:12",
    "updatedAt": "2021-02-09T17:50:12"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 55,
    "name": "Utopian",
    "speakers": "Residents of Axis, aeons, inevitables, and axiomites",
    "script": "Utopian",
    "description": "Utopian is the language of Axis, aeons, inevitables, and axiomites. Aeons demonstrated to axiomites after the Convergence that the language is a combination of aeon principles and formulaic mathematical expression.",
    "contentSrc": "CRB",
    "createdAt": "2021-02-09T17:50:12",
    "updatedAt": "2021-02-09T17:50:12"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 56,
    "name": "D'ziriak",
    "speakers": "D'ziriak",
    "description": "The d'ziriak are insect-like natives of the Shadow Plane who communicate using a language of their own also called D'ziriak. The language sounds quite simply like insect noises: a buzzing and a chittering noise.",
    "contentSrc": "CRB",
    "createdAt": "2021-02-09T17:50:12",
    "updatedAt": "2021-02-09T17:50:12"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 57,
    "name": "Strix",
    "speakers": "Strix",
    "description": "The Strix language is a strange creole of Azlanti and (language: Infernal), and can be understood by those who speak both languages, adding further to the mystery of their origin and the possibility of some sort of supernatural punishment. The strix refer to their kind as itarii in their own language.",
    "contentSrc": "CRB",
    "createdAt": "2021-02-09T17:50:12",
    "updatedAt": "2021-02-09T17:50:12"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 61,
    "name": "Alghollthu",
    "speakers": "Alghollthus, Azarketi",
    "description": "The language of alghollthus, also known as the Aboleth language, is one of the oldest on the face (and below the waters) of Golarion.",
    "contentSrc": "CRB",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 62,
    "name": "Azlanti",
    "speakers": "High Seas, Mordant Spire",
    "description": "Even though the language of the kingdom of Azlant has been lost for millennia, its linguistic legacy is carried on in such languages as Taldane, Polyglot, Hallit, and Varisian. The elves of the Mordant Spire refused to talk to anyone in anything but this ancient language, and act as guardians of the tongue just as they oversee the last remnants of the ancient continent above the waves. Phonemes from spoken Azlanti do not appear in modern Inner Sea languages. Certain traditional Chelish operas were still written in Azlanti.",
    "contentSrc": "CRB",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 63,
    "name": "Anadi",
    "speakers": "Anadi",
    "contentSrc": "CRB",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 64,
    "name": "Ancient Osiriani",
    "speakers": "Ancient osirians (extinct, but still known by sholars)",
    "contentSrc": "LOST-WORLD-GUIDE",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 66,
    "name": "Erutaki",
    "speakers": "Saga Lands",
    "contentSrc": "LOST-WORLD-GUIDE",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 67,
    "name": "Garundi",
    "speakers": "Mwangi Expanse",
    "contentSrc": "LOST-WORLD-GUIDE",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 68,
    "name": "Hallit",
    "speakers": "Irrisen, Mendev, Numeria, Realm of the Mammoth Lords, Sarkoris, Ustalav",
    "contentSrc": "LOST-WORLD-GUIDE",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 69,
    "name": "Jistkan",
    "speakers": "Ancient constructs",
    "contentSrc": "CRB",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 70,
    "name": "Jyoti",
    "speakers": "Jyotis",
    "contentSrc": "CRB",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 71,
    "name": "Kelish",
    "speakers": "Katapesh, Kelesh, Osirion, Qadira",
    "contentSrc": "LOST-WORLD-GUIDE",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 72,
    "name": "Mwangi",
    "speakers": "Mwangi Expanse, the Shackles, Thuvia, Vidrian",
    "contentSrc": "LOST-WORLD-GUIDE",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 73,
    "name": "Osiriani",
    "speakers": "Geb, Katapesh, Mana Wastes, Nex, Osirion, Rahadoum, Thuvia",
    "contentSrc": "LOST-WORLD-GUIDE",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 74,
    "name": "Protean",
    "speakers": "Proteans",
    "contentSrc": "CRB",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 75,
    "name": "Requian",
    "speakers": "Psychopomps",
    "contentSrc": "CRB",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 76,
    "name": "Shoanti",
    "speakers": "Hold of Belkzen, Varisia",
    "contentSrc": "LOST-WORLD-GUIDE",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 77,
    "name": "Skald",
    "speakers": "Irrisen, Lands of the Linnorm Kings",
    "contentSrc": "LOST-WORLD-GUIDE",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 78,
    "name": "Sphinx",
    "speakers": "Sphinxes",
    "contentSrc": "CRB",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 79,
    "name": "Thassilonian",
    "speakers": "Saga Lands",
    "contentSrc": "LOST-WORLD-GUIDE",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 80,
    "name": "Tien",
    "speakers": "Lands of the Linnorm Kings, Realm of the Mammoth Lords, Tian Xia",
    "contentSrc": "LOST-WORLD-GUIDE",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 81,
    "name": "Varisian",
    "speakers": "Brevoy, the Gravelands, Nidal, Nirmathas, Ustalav, Varisia",
    "contentSrc": "LOST-WORLD-GUIDE",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 82,
    "name": "Varki",
    "speakers": "Saga Lands",
    "contentSrc": "LOST-WORLD-GUIDE",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 83,
    "name": "Vudrani",
    "speakers": "Jalmeray, Katapesh, Nex, Vudra",
    "contentSrc": "LOST-WORLD-GUIDE",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 84,
    "name": "Arboreal",
    "speakers": "Arboreals and other plant creatures",
    "contentSrc": "CRB",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 85,
    "name": "Caligni",
    "speakers": "Calignis",
    "contentSrc": "CRB",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 86,
    "name": "Cyclops",
    "speakers": "Cyclopes and associated creatures",
    "contentSrc": "CRB",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 87,
    "name": "Daemonic",
    "speakers": "Daemons and their worshippers",
    "contentSrc": "CRB",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 88,
    "name": "Destrachan",
    "speakers": "Destrachans",
    "contentSrc": "CRB",
    "createdAt": "2021-02-21T17:49:02",
    "updatedAt": "2021-02-21T17:49:02"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 122,
    "name": "Rasu",
    "speakers": "Conrasu",
    "description": "__No Description__",
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-06-24T22:10:12",
    "updatedAt": "2021-06-24T22:10:12"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 123,
    "name": "Goloma",
    "speakers": "Goloma",
    "description": "__No Description__",
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2021-06-24T22:10:12",
    "updatedAt": "2021-06-24T22:10:12"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 124,
    "name": "Grippli",
    "speakers": "Grippli",
    "script": "None",
    "description": "The grippli language is composed of croaks, groans, clicks, and squeaks. Their croaking voices make them hard to comprehend in any language other than their own. Other races can learn Grippli, but cannot truly master it without magic. Writing is taboo to the grippli; only the tribe mother is permitted to make written records. Grippli has no written form, but the mother can read and write in (language: Undercommon).",
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2020-11-21T04:47:57",
    "updatedAt": "2020-11-21T04:47:57"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 125,
    "name": "Shisk",
    "speakers": "Shisk",
    "description": "__No Description__",
    "contentSrc": "LOST-MWANGI",
    "createdAt": "2020-11-21T04:47:57",
    "updatedAt": "2020-11-21T04:47:57"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 126,
    "name": "Nagaji",
    "speakers": "Nagaji",
    "description": "__No Description__",
    "contentSrc": "LOST-WORLD-GUIDE",
    "createdAt": "2020-11-21T04:47:57",
    "updatedAt": "2020-11-21T04:47:57"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 127,
    "name": "Anugobu",
    "speakers": "Anugobu",
    "description": "__No Description__",
    "contentSrc": "LOST-WORLD-GUIDE",
    "createdAt": "2020-11-21T04:47:57",
    "updatedAt": "2020-11-21T04:47:57"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 150,
    "name": "Xanmba",
    "contentSrc": "LOST-WORLD-GUIDE",
    "createdAt": "2021-08-15T20:54:49",
    "updatedAt": "2021-08-15T20:54:49"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 212,
    "name": "Hwan",
    "speakers": "Hwan is also spoken by a sizable minority in the city-state of Goka.",
    "description": "Hwan is the native language of the ethnic Tian-Hwan of Hwanggot.",
    "contentSrc": "CRB",
    "createdAt": "2021-12-18T23:01:44",
    "updatedAt": "2021-12-18T23:01:44"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 213,
    "name": "Okaiyan",
    "contentSrc": "CRB",
    "createdAt": "2021-12-18T23:01:44",
    "updatedAt": "2021-12-18T23:01:44"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 398,
    "name": "Arcadian",
    "speakers": "Arcadians",
    "script": "Common",
    "description": "__No Description__",
    "contentSrc": "CRB",
    "createdAt": "2022-10-30T15:48:47",
    "updatedAt": "2022-10-30T15:48:47"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 399,
    "name": "Kashrishi",
    "speakers": "Kashrishi",
    "description": "__No Description__",
    "contentSrc": "CRB",
    "createdAt": "2022-10-30T15:48:47",
    "updatedAt": "2022-10-30T15:48:47"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 400,
    "name": "Ratajin",
    "speakers": "Ratajin",
    "description": "__No Description__",
    "contentSrc": "CRB",
    "createdAt": "2022-10-30T15:48:47",
    "updatedAt": "2022-10-30T15:48:47"
} as const satisfies LanguagesTableRowConstraints,
{
    "table": "languages",
    "id": 401,
    "name": "Vishkanya",
    "speakers": "Vishkanya",
    "description": "__No Description__",
    "contentSrc": "CRB",
    "createdAt": "2022-10-30T15:48:47",
    "updatedAt": "2022-10-30T15:48:47"
} as const satisfies LanguagesTableRowConstraints,
 ] as const;

export const languages = hookupTableLookup(_languages);