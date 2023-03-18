import { hookupTableLookup } from '../tables';

export interface DamagetypesTableRowConstraints {
  table: 'damagetypes';
  id: number;
  name?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type DamagetypesTable = typeof damagetypes;
export type DamagetypesTableRow = DamagetypesTable[number];
export type DamagetypeID = DamagetypesTableRow['id'];

export const isDamagetypeID = (id?: number): id is DamagetypeID => !!id && !!damagetypes.byIdLax(id);
export const assertIsDamagetypeID = (id?: number): asserts id is DamagetypeID => { if (!isDamagetypeID(id)) throw Error('Expected a DamagetypeID; got ' + id); }

const _damagetypes = [
{
    "table": "damagetypes",
    "id": 1,
    "name": "Piercing",
    "description": "Damage of this type is dealt from stabs and punctures."
} as const satisfies DamagetypesTableRowConstraints,
{
    "table": "damagetypes",
    "id": 2,
    "name": "Slashing",
    "description": "Damage of this type is dealt from a cut of a blade or similar."
} as const satisfies DamagetypesTableRowConstraints,
{
    "table": "damagetypes",
    "id": 3,
    "name": "Acid",
    "description": "Damage of this type can be delivered by gases, liquids, and certain solids that dissolve flesh, and sometimes harder materials."
} as const satisfies DamagetypesTableRowConstraints,
{
    "table": "damagetypes",
    "id": 4,
    "name": "Cold",
    "description": "Damage of this type freezes material by way of contact with chilling gases and ice."
} as const satisfies DamagetypesTableRowConstraints,
{
    "table": "damagetypes",
    "id": 5,
    "name": "Electricity",
    "description": "Damage of this type comes from the discharge of powerful lightning and sparks."
} as const satisfies DamagetypesTableRowConstraints,
{
    "table": "damagetypes",
    "id": 6,
    "name": "Fire",
    "description": "Damage of this type burns through heat and combustion."
} as const satisfies DamagetypesTableRowConstraints,
{
    "table": "damagetypes",
    "id": 7,
    "name": "Sonic",
    "description": "Damage of this type assaults matter with high-frequency vibration and sound waves."
} as const satisfies DamagetypesTableRowConstraints,
{
    "table": "damagetypes",
    "id": 8,
    "name": "Positive",
    "description": "Damage of this type often manifests as healing energy to living creatures but withers undead bodies and disrupts and injures incorporeal undead."
} as const satisfies DamagetypesTableRowConstraints,
{
    "table": "damagetypes",
    "id": 9,
    "name": "Negative",
    "description": "Damage of this type often revivifies the unnatural, unliving power of undead, while manifesting as damage that gnaws at the living."
} as const satisfies DamagetypesTableRowConstraints,
{
    "table": "damagetypes",
    "id": 10,
    "name": "Force",
    "description": "Powerful and pure magical energy can manifest itself as Force damage. Few things can resist this type of damage - not even incorporeal creatures such as ghosts and wraiths."
} as const satisfies DamagetypesTableRowConstraints,
{
    "table": "damagetypes",
    "id": 11,
    "name": "Chaotic",
    "description": "Damage of this type can only harm creatures of the opposing alignment trait. Meaning, Chaotic damage can only harm Lawful creatures."
} as const satisfies DamagetypesTableRowConstraints,
{
    "table": "damagetypes",
    "id": 12,
    "name": "Lawful",
    "description": "Damage of this type can only harm creatures of the opposing alignment trait. Meaning, Lawful damage can only harm Chaotic creatures."
} as const satisfies DamagetypesTableRowConstraints,
{
    "table": "damagetypes",
    "id": 13,
    "name": "Good",
    "description": "Damage of this type can only harm creatures of the opposing alignment trait. Meaning, Good damage can only harm Evil creatures."
} as const satisfies DamagetypesTableRowConstraints,
{
    "table": "damagetypes",
    "id": 14,
    "name": "Evil",
    "description": "Damage of this type can only harm creatures of the opposing alignment trait. Meaning, Evil damage can only harm Good creatures."
} as const satisfies DamagetypesTableRowConstraints,
{
    "table": "damagetypes",
    "id": 15,
    "name": "Mental",
    "description": "Sometimes an effect can target the mind with enough psychic force to actually deal damage to the creature. When it does, it deals Mental damage. Mindless creatures and those with only programmed or rudimentary intelligence are often immune to Mental damag"
} as const satisfies DamagetypesTableRowConstraints,
{
    "table": "damagetypes",
    "id": 16,
    "name": "Poison",
    "description": "Venoms, toxins and the like can deal Poison damage, which affects creatures by way of contact, ingestion, inhalation, or injury."
} as const satisfies DamagetypesTableRowConstraints,
{
    "table": "damagetypes",
    "id": 17,
    "name": "Bleed",
    "description": "Damage of this type is persistent damage that represents a loss of blood. As such, it has no effect on nonliving creatures or living creatures that don’t need blood to live. Weaknesses and resistances to physical damage apply."
} as const satisfies DamagetypesTableRowConstraints,
{
    "table": "damagetypes",
    "id": 18,
    "name": "Precision",
    "description": "Sometimes you are able to make the most of your attack through sheer precision. When you hit with an ability that grants you Precision damage, you increase the attack’s listed damage, using the same damage type, rather than tracking a separate pool of dam"
} as const satisfies DamagetypesTableRowConstraints,
{
    "table": "damagetypes",
    "id": 19,
    "name": "Bludgeoning",
    "description": "Damage of this type is dealt from blunt-force trauma."
} as const satisfies DamagetypesTableRowConstraints,
 ] as const;

export const damagetypes = hookupTableLookup(_damagetypes);