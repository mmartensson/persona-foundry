import { hookupTableLookup } from '../tables';

import { ContentSrc } from './shared_types';

export interface DomainsTableRowConstraints {
  table: 'domains';
  id: number;
  name?: string;
  description?: string;
  initialSpellID?: number;
  advancedSpellID?: number;
  contentSrc: ContentSrc;
  homebrewID?: number;
  createdAt?: string;
  updatedAt?: string;
}

export type DomainsTable = typeof domains;
export type DomainsTableRow = DomainsTable[number];
export type DomainID = DomainsTableRow['id'];

export const isDomainID = (id?: number): id is DomainID => !!id && !!domains.byIdLax(id);
export const assertIsDomainID = (id?: number): asserts id is DomainID => { if (!isDomainID(id)) throw Error('Expected a DomainID; got ' + id); }

const _domains = [
{
    "table": "domains",
    "id": 1,
    "name": "Air",
    "description": "**Domain Spell:** (spell: Pushing Gust)\n**Advanced Domain Spell:** (spell: Disperse Into Air)\n----\nYou can control winds and the weather.\n",
    "initialSpellID": 71,
    "advancedSpellID": 72,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 2,
    "name": "Ambition",
    "description": "**Domain Spell:** (spell: Blind Ambition)\n**Advanced Domain Spell:** (spell: Competitive Edge)\n----\nYou strive to keep up with and outpace the competition.",
    "initialSpellID": 67,
    "advancedSpellID": 68,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 3,
    "name": "Change",
    "description": "**Domain Spell:** (spell: Adapt Self)\n**Advanced Domain Spell:** (spell: Adaptive Ablation)\n----\nYou can restructure the physical and metaphysical.",
    "initialSpellID": 73,
    "advancedSpellID": 74,
    "contentSrc": "LOST-GOD-MAGIC",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 4,
    "name": "Cities",
    "description": "**Domain Spell:** (spell: Face in the Crowd)\n**Advanced Domain Spell:** (spell: Pulse of the City)\n----\nYou have powers over urban environments and denizens.",
    "initialSpellID": 75,
    "advancedSpellID": 76,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 5,
    "name": "Cold",
    "description": "**Domain Spell:** (spell: Winter Bolt)\n**Advanced Domain Spell:** (spell: Diamond Dust)\n----\nYou control ice, snow, and freezing temperatures.\n",
    "initialSpellID": 541,
    "advancedSpellID": 542,
    "contentSrc": "LOST-GOD-MAGIC",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 6,
    "name": "Confidence",
    "description": "**Domain Spell:** (spell: Veil of Confidence)\n**Advanced Domain Spell:** (spell: Delusional Pride)\n----\nYou overcome your fear and project pride.\n",
    "initialSpellID": 538,
    "advancedSpellID": 539,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 7,
    "name": "Creation",
    "description": "**Domain Spell:** (spell: Splash of Art)\n**Advanced Domain Spell:** (spell: Artistic Flourish)\n----\nYou have divine abilities related to crafting and art.\n",
    "initialSpellID": 540,
    "advancedSpellID": 543,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 8,
    "name": "Darkness",
    "description": "**Domain Spell:** (spell: Cloak of Shadow)\n**Advanced Domain Spell:** (spell: Darkened Eyes)\n----\nYou operate in the darkness and take away the light.\n",
    "initialSpellID": 545,
    "advancedSpellID": 546,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 9,
    "name": "Death",
    "description": "**Domain Spell:** (spell: Death's Call)\n**Advanced Domain Spell:** (spell: Eradicate Undeath)\n----\nYou have the power to end lives and destroy undead.\n",
    "initialSpellID": 547,
    "advancedSpellID": 549,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 10,
    "name": "Decay",
    "description": "**Domain Spell:** (spell: Withering Grasp)\n**Advanced Domain Spell:** (spell: Fallow Field)\n----\nYou have the power to spoil and deteriorate matter.\n",
    "initialSpellID": 550,
    "advancedSpellID": 551,
    "contentSrc": "LOST-GOD-MAGIC",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 11,
    "name": "Delirium",
    "description": "**Domain Spell:** (spell: Hyperfocus)\n**Advanced Domain Spell:** (spell: Ephemeral Hazards)\n----\nYou can bring about hallucinations and restlessness.\n",
    "initialSpellID": 552,
    "advancedSpellID": 553,
    "contentSrc": "LOST-GOD-MAGIC",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 12,
    "name": "Destruction",
    "description": "**Domain Spell:** (spell: Cry of Destruction)\n**Advanced Domain Spell:** (spell: Destructive Aura)\n----\nYou are a conduit for divine devastation.\n",
    "initialSpellID": 554,
    "advancedSpellID": 555,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 13,
    "name": "Dreams",
    "description": "**Domain Spell:** (spell: Sweet Dream)\n**Advanced Domain Spell:** (spell: Dreamer's Call)\n----\nYou have the power to enter and manipulate dreams.",
    "initialSpellID": 556,
    "advancedSpellID": 557,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 14,
    "name": "Dust",
    "description": "**Domain Spell:** (spell: Parch)\n**Advanced Domain Spell:** (spell: Dust Storm)\n----\nYou have the power to dry and crumble what opposes you.\n",
    "initialSpellID": 558,
    "advancedSpellID": 559,
    "contentSrc": "LOST-GOD-MAGIC",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 15,
    "name": "Duty",
    "description": "**Domain Spell:** (spell: Oathkeeper's Insignia)\n**Advanced Domain Spell:** (spell: Dutiful Challenge)\n----\nYou defend oaths and carry out your divine missions with great dedication.\n",
    "initialSpellID": 560,
    "advancedSpellID": 561,
    "contentSrc": "LOST-GOD-MAGIC",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 16,
    "name": "Earth",
    "description": "**Domain Spell:** (spell: Hurtling Stone)\n**Advanced Domain Spell:** (spell: Localized Quake)\n----\nYou control soil and stone.\n",
    "initialSpellID": 562,
    "advancedSpellID": 563,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 17,
    "name": "Family",
    "description": "**Domain Spell:** (spell: Soothing Words)\n**Advanced Domain Spell:** (spell: Unity)\n----\nYou aid and protect your family and community more effectively.\n",
    "initialSpellID": 564,
    "advancedSpellID": 565,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 18,
    "name": "Fate",
    "description": "**Domain Spell:** (spell: Read Fate)\n**Advanced Domain Spell:** (spell: Tempt Fate)\n----\nYou see and understand hidden inevitabilities.\n",
    "initialSpellID": 566,
    "advancedSpellID": 1910,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 19,
    "name": "Fire",
    "description": "**Domain Spell:** (spell: Fire Ray)\n**Advanced Domain Spell:** (spell: Flame Barrier)\n----\nYou control flame.\n",
    "initialSpellID": 568,
    "advancedSpellID": 569,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 20,
    "name": "Freedom",
    "description": "**Domain Spell:** (spell: Unimpeded Stride)\n**Advanced Domain Spell:** (spell: Word of Freedom)\n----\nYou liberate yourself and others from shackles and constraints.\n",
    "initialSpellID": 570,
    "advancedSpellID": 571,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 21,
    "name": "Glyph",
    "description": "**Domain Spell:** (spell: Redact)\n**Advanced Domain Spell:** (spell: Ghostly Transcription)\n----\nYou wield power over written words and symbols.\n",
    "initialSpellID": 572,
    "advancedSpellID": 573,
    "contentSrc": "LOST-GOD-MAGIC",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 22,
    "name": "Healing",
    "description": "**Domain Spell:** (spell: Healer's Blessing)\n**Advanced Domain Spell:** (spell: Rebuke Death)\n----\nYour healing magic is particularly potent.\n",
    "initialSpellID": 574,
    "advancedSpellID": 575,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 23,
    "name": "Indulgence",
    "description": "**Domain Spell:** (spell: Overstuff)\n**Advanced Domain Spell:** (spell: Take Its Course)\n----\nYou feast mightily and can shake off the effects of overindulging.\n",
    "initialSpellID": 576,
    "advancedSpellID": 577,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 24,
    "name": "Knowledge",
    "description": "**Domain Spell:** (spell: Scholarly Recollection)\n**Advanced Domain Spell:** (spell: Know the Enemy)\n----\nYou receive divine insights.\n",
    "initialSpellID": 579,
    "advancedSpellID": 580,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 25,
    "name": "Lightning",
    "description": "**Domain Spell:** (spell: Charged Javelin)\n**Advanced Domain Spell:** (spell: Bottle the Storm)\n----\nYou control electricity, thunder, and storms.\n",
    "initialSpellID": 581,
    "advancedSpellID": 582,
    "contentSrc": "LOST-GOD-MAGIC",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 26,
    "name": "Luck",
    "description": "**Domain Spell:** (spell: Bit of Luck)\n**Advanced Domain Spell:** (spell: Lucky Break)\n----\nYou’re unnaturally lucky and keep out of harm’s way.\n",
    "initialSpellID": 583,
    "advancedSpellID": 584,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 27,
    "name": "Magic",
    "description": "**Domain Spell:** (spell: Magic's Vessel)\n**Advanced Domain Spell:** (spell: Mystic Beacon)\n----\nYou perform the unexpected and inexplicable.\n",
    "initialSpellID": 585,
    "advancedSpellID": 586,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 28,
    "name": "Might",
    "description": "**Domain Spell:** (spell: Athletic Rush)\n**Advanced Domain Spell:** (spell: Enduring Might)\n----\nYour physical power is bolstered by divine strength.\n",
    "initialSpellID": 587,
    "advancedSpellID": 588,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 29,
    "name": "Moon",
    "description": "**Domain Spell:** (spell: Moonbeam)\n**Advanced Domain Spell:** (spell: Touch of the Moon)\n----\nYou command powers associated with the moon.\n",
    "initialSpellID": 589,
    "advancedSpellID": 590,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 30,
    "name": "Nature",
    "description": "**Domain Spell:** (spell: Vibrant Thorns)\n**Advanced Domain Spell:** (spell: Nature's Bounty)\n----\nYou hold power over animals and plants.\n",
    "initialSpellID": 591,
    "advancedSpellID": 592,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 31,
    "name": "Nightmares",
    "description": "**Domain Spell:** (spell: Waking Nightmare)\n**Advanced Domain Spell:** (spell: Shared Nightmare)\n----\nYou fill minds with horror and dread.\n",
    "initialSpellID": 593,
    "advancedSpellID": 594,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 32,
    "name": "Pain",
    "description": "**Domain Spell:** (spell: Savor the Sting)\n**Advanced Domain Spell:** (spell: Retributive Pain)\n----\nYou punish those who displease you with the sharp sting of pain.\n",
    "initialSpellID": 595,
    "advancedSpellID": 596,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 33,
    "name": "Passion",
    "description": "**Domain Spell:** (spell: Charming Touch)\n**Advanced Domain Spell:** (spell: Captivating Adoration)\n----\nYou evoke passion, whether as love or lust.\n",
    "initialSpellID": 597,
    "advancedSpellID": 598,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 34,
    "name": "Perfection",
    "description": "**Domain Spell:** (spell: Perfected Mind)\n**Advanced Domain Spell:** (spell: Perfected Form)\n----\nYou strive to perfect your mind, body, and spirit.\n",
    "initialSpellID": 599,
    "advancedSpellID": 600,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 35,
    "name": "Plague",
    "description": "**Domain Spell:** (spell: Divine Plagues)\n**Advanced Domain Spell:** (spell: Foul Miasma)\n----\nYou wield disease and pestilence like a weapon.\n",
    "initialSpellID": 601,
    "advancedSpellID": 602,
    "contentSrc": "LOST-GOD-MAGIC",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 36,
    "name": "Protection",
    "description": "**Domain Spell:** (spell: Protector's Sacrifice)\n**Advanced Domain Spell:** (spell: Protector's Sphere)\n----\nYou ward yourself and others.\n",
    "initialSpellID": 603,
    "advancedSpellID": 604,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 37,
    "name": "Repose",
    "description": "**Domain Spell:** (spell: Share Burden)\n**Advanced Domain Spell:** (spell: Font of Serenity)\n----\nYou ease mental burdens.\n",
    "initialSpellID": 605,
    "advancedSpellID": 606,
    "contentSrc": "LOST-GOD-MAGIC",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 38,
    "name": "Secrecy",
    "description": "**Domain Spell:** (spell: Forced Quiet)\n**Advanced Domain Spell:** (spell: Safeguard Secret)\n----\nYou protect secrets and keep them hidden.\n",
    "initialSpellID": 607,
    "advancedSpellID": 608,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 39,
    "name": "Sorrow",
    "description": "**Domain Spell:** (spell: Lament)\n**Advanced Domain Spell:** (spell: Overflowing Sorrow)\n----\nYou have a painful connection to melancholy and sadness.\n",
    "initialSpellID": 609,
    "advancedSpellID": 610,
    "contentSrc": "LOST-GOD-MAGIC",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 40,
    "name": "Soul",
    "description": "**Domain Spell:** (spell: Eject Soul)\n**Advanced Domain Spell:** (spell: Ectoplasmic Interstice)\n----\nYou wield power over the spiritual.\n",
    "initialSpellID": 611,
    "advancedSpellID": 612,
    "contentSrc": "LOST-GOD-MAGIC",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 41,
    "name": "Star",
    "description": "**Domain Spell:** (spell: Zenith Star)\n**Advanced Domain Spell:** (spell: Asterism)\n----\nYou command the power of the stars.\n",
    "initialSpellID": 613,
    "advancedSpellID": 614,
    "contentSrc": "LOST-GOD-MAGIC",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 42,
    "name": "Sun",
    "description": "**Domain Spell:** (spell: Dazzling Flash)\n**Advanced Domain Spell:** (spell: Positive Luminance)\n----\nYou harness the power of the sun and other light sources, and punish undead.\n",
    "initialSpellID": 615,
    "advancedSpellID": 616,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 43,
    "name": "Swarm",
    "description": "**Domain Spell:** (spell: Swarmsense)\n**Advanced Domain Spell:** (spell: Swarm Form)\n----\nYou exert control over masses of creatures.\n",
    "initialSpellID": 617,
    "advancedSpellID": 618,
    "contentSrc": "LOST-GOD-MAGIC",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 44,
    "name": "Time",
    "description": "**Domain Spell:** (spell: Delay Consequence)\n**Advanced Domain Spell:** (spell: Stasis)\n----\nYou reign over the flow of time.\n",
    "initialSpellID": 619,
    "advancedSpellID": 620,
    "contentSrc": "LOST-GOD-MAGIC",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 45,
    "name": "Toil",
    "description": "**Domain Spell:** (spell: Practice Makes Perfect)\n**Advanced Domain Spell:** (spell: Tireless Worker)\n----\nYou work constantly and refuse to let anything stand in your way.\n",
    "initialSpellID": 621,
    "advancedSpellID": 622,
    "contentSrc": "AGE-OF-ASHES",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 46,
    "name": "Travel",
    "description": "**Domain Spell:** (spell: Agile Feet)\n**Advanced Domain Spell:** (spell: Traveler's Transit)\n----\nYou have power over movement and journeys.\n",
    "initialSpellID": 623,
    "advancedSpellID": 624,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 47,
    "name": "Trickery",
    "description": "**Domain Spell:** (spell: Sudden Shift)\n**Advanced Domain Spell:** (spell: Trickster's Twin)\n----\nYou deceive others and cause mischief.\n",
    "initialSpellID": 625,
    "advancedSpellID": 626,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 48,
    "name": "Truth",
    "description": "**Domain Spell:** (spell: Word of Truth)\n**Advanced Domain Spell:** (spell: Glimpse the Truth)\n----\nYou pierce lies and discover the truth.\n",
    "initialSpellID": 627,
    "advancedSpellID": 628,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 49,
    "name": "Tyranny",
    "description": "**Domain Spell:** (spell: Touch of Obedience)\n**Advanced Domain Spell:** (spell: Commanding Lash)\n----\nYou wield power to rule and enslave others.\n",
    "initialSpellID": 629,
    "advancedSpellID": 630,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 50,
    "name": "Undeath",
    "description": "**Domain Spell:** (spell: Touch of Undeath)\n**Advanced Domain Spell:** (spell: Malignant Sustenance)\n----\nYour magic carries close ties to the undead.\n",
    "initialSpellID": 631,
    "advancedSpellID": 632,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 51,
    "name": "Vigil",
    "description": "**Domain Spell:** (spell: Object Memory)\n**Advanced Domain Spell:** (spell: Remember the Lost)\n----\nYou watch over those long passed and guard their secrets.\n",
    "initialSpellID": 633,
    "advancedSpellID": 634,
    "contentSrc": "LOST-GOD-MAGIC",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 52,
    "name": "Void",
    "description": "**Domain Spell:** (spell: Empty Inside)\n**Advanced Domain Spell:** (spell: Door to Beyond)\n----\nYou draw power from emptiness.\n",
    "initialSpellID": 635,
    "advancedSpellID": 636,
    "contentSrc": "LOST-GOD-MAGIC",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 53,
    "name": "Water",
    "description": "**Domain Spell:** (spell: Tidal Surge)\n**Advanced Domain Spell:** (spell: Downpour)\n----\nYou control water and bodies of water.\n",
    "initialSpellID": 637,
    "advancedSpellID": 638,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 54,
    "name": "Wealth",
    "description": "**Domain Spell:** (spell: Appearance of Wealth)\n**Advanced Domain Spell:** (spell: Precious Metals)\n----\nYou hold power over wealth, trade, and treasure.\n",
    "initialSpellID": 639,
    "advancedSpellID": 640,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 55,
    "name": "Wyrmkin",
    "description": "**Domain Spell:** (spell: Draconic Barrage)\n**Advanced Domain Spell:** (spell: Roar of the Wyrm)\n----\nYou draw on the power of dragons, linnorms, and other powerful reptilian creatures.\n",
    "initialSpellID": 641,
    "advancedSpellID": 642,
    "contentSrc": "LOST-GOD-MAGIC",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 56,
    "name": "Zeal",
    "description": "**Domain Spell:** (spell: Weapon Surge)\n**Advanced Domain Spell:** (spell: Zeal for Battle)\n----\nYour inner fire increases your combat prowess.\n",
    "initialSpellID": 643,
    "advancedSpellID": 644,
    "contentSrc": "CRB",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 57,
    "name": "Naga",
    "description": "**Domain Spell:** (spell: Split the Tongue)\n**Advanced Domain Spell:** (spell: Ordained Purpose)\n----\nLike the serpentine nagas, you're in tune with cosmic forces that Ravithra once controlled.",
    "initialSpellID": 979,
    "advancedSpellID": 978,
    "contentSrc": "AGENTS-OF-EDGEWATCH",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 58,
    "name": "Abomination",
    "description": "**Domain Spell:** (spell: Lift Nature's Call)\n**Advanced Domain Spell:** (spell: Fearful Feast)\n----\nYou seek to instill abhorrence and horror in those around you.\n",
    "initialSpellID": 1219,
    "advancedSpellID": 1218,
    "contentSrc": "ABOMINATION-VAULTS",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 59,
    "name": "Fire (apocryphal)",
    "description": "**Domain Spell:** (spell: Cinder Gaze)\n **Advanced Domain Spell:** (spell: Flame Barrier)\n ----\n You control flame.\n ",
    "initialSpellID": 2342,
    "advancedSpellID": 569,
    "contentSrc": "DARK-ARCHIVE",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 60,
    "name": "Air (apocryphal)",
    "description": "**Domain Spell:** (spell: Pushing Gust)\n **Advanced Domain Spell:** (spell: Wind Whispers)\n ----\n You can control winds and the weather.\n ",
    "initialSpellID": 71,
    "advancedSpellID": 2298,
    "contentSrc": "DARK-ARCHIVE",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 61,
    "name": "Ambition (apocryphal)",
    "description": "**Domain Spell:** (spell: Hollow Heart)\n **Advanced Domain Spell:** (spell: Competitive Edge)\n ----\n You strive to keep up with and outpace the competition.",
    "initialSpellID": 2262,
    "advancedSpellID": 68,
    "contentSrc": "DARK-ARCHIVE",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 62,
    "name": "Confidence (apocryphal)",
    "description": "**Domain Spell:** (spell: Veil of Confidence)\n **Advanced Domain Spell:** (spell: Shaken Confidence)\n ----\n You overcome your fear and project pride.\n",
    "initialSpellID": 538,
    "advancedSpellID": 2283,
    "contentSrc": "DARK-ARCHIVE",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 63,
    "name": "Darkness (apocryphal)",
    "description": "**Domain Spell:** (spell: Cloak of Shadow)\n **Advanced Domain Spell:** (spell: Isolation)\n ----\n You operate in the darkness and take away the light.\n",
    "initialSpellID": 545,
    "advancedSpellID": 2265,
    "contentSrc": "DARK-ARCHIVE",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 64,
    "name": "Death (apocryphal)",
    "description": "**Domain Spell:** (spell: Death's Call)\n **Advanced Domain Spell:** (spell: Euphoric Renewal)\n ----\n You have the power to end lives and destroy undead.\n",
    "initialSpellID": 547,
    "advancedSpellID": 2257,
    "contentSrc": "DARK-ARCHIVE",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 65,
    "name": "Fate (apocryphal)",
    "description": "**Domain Spell:** (spell: String of Fate)\n **Advanced Domain Spell:** (spell: Tempt Fate)\n ----\n You see and understand hidden inevitabilities.\n",
    "initialSpellID": 2286,
    "advancedSpellID": 1910,
    "contentSrc": "DARK-ARCHIVE",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 66,
    "name": "Indulgence (apocryphal)",
    "description": "**Domain Spell:** (spell: Frenzied Revelry)\n **Advanced Domain Spell:** (spell: Take Its Course)\n ----\n You feast mightily and can shake off the effects of overindulging.\n",
    "initialSpellID": 2261,
    "advancedSpellID": 577,
    "contentSrc": "DARK-ARCHIVE",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 67,
    "name": "Knowledge (apocryphal)",
    "description": "**Domain Spell:** (spell: Scholarly Recollection)\n **Advanced Domain Spell:** (spell: Wordsmith)\n ----\n You receive divine insights.\n",
    "initialSpellID": 579,
    "advancedSpellID": 2299,
    "contentSrc": "DARK-ARCHIVE",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 68,
    "name": "Might (apocryphal)",
    "description": "**Domain Spell:** (spell: Victory Cry)\n **Advanced Domain Spell:** (spell: Enduring Might)\n ----\n Your physical power is bolstered by divine strength.\n",
    "initialSpellID": 2295,
    "advancedSpellID": 588,
    "contentSrc": "DARK-ARCHIVE",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 69,
    "name": "Secrecy (apocryphal)",
    "description": "**Domain Spell:** (spell: Forced Quiet)\n **Advanced Domain Spell:** (spell: Weaponize Secret)\n ----\n You protect secrets and keep them hidden.\n",
    "initialSpellID": 607,
    "advancedSpellID": 2297,
    "contentSrc": "DARK-ARCHIVE",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 70,
    "name": "Travel (apocryphal)",
    "description": "**Domain Spell:** (spell: Agile Feet)\n **Advanced Domain Spell:** (spell: Inevitable Destination)\n ----\n You have power over movement and journeys.\n",
    "initialSpellID": 623,
    "advancedSpellID": 2264,
    "contentSrc": "DARK-ARCHIVE",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
{
    "table": "domains",
    "id": 71,
    "name": "Water (apocryphal)",
    "description": "**Domain Spell:** (spell: Tidal Surge)\n **Advanced Domain Spell:** (spell: Purifying Veil)\n ----\n You control water and bodies of water.\n",
    "initialSpellID": 637,
    "advancedSpellID": 2277,
    "contentSrc": "DARK-ARCHIVE",
    "createdAt": "2020-06-07T14:14:44",
    "updatedAt": "2020-06-07T14:14:44"
} as const satisfies DomainsTableRowConstraints,
 ] as const;

export const domains = hookupTableLookup(_domains);