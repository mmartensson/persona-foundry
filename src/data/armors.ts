import { hookupTableLookup } from '../tables';

import { Category } from './shared_types';

export interface ArmorsTableRowConstraints {
  table: 'armors';
  id: number;
  itemID?: number;
  profName?: string;
  acBonus?: number;
  dexCap?: number;
  checkPenalty?: number;
  speedPenalty?: number;
  minStrength?: number;
  armorType?: string;
  category?: Category;
  createdAt?: string;
  updatedAt?: string;
}

export type ArmorsTable = typeof armors;
export type ArmorsTableRow = ArmorsTable[number];
export type ArmorID = ArmorsTableRow['id'];

export const isArmorID = (id?: number): id is ArmorID => !!id && !!armors.byIdLax(id);
export const assertIsArmorID = (id?: number): asserts id is ArmorID => { if (!isArmorID(id)) throw Error('Expected a ArmorID; got ' + id); }

const _armors = [
{
    "table": "armors",
    "id": 2,
    "itemID": 31,
    "profName": "No Armor",
    "acBonus": 0,
    "checkPenalty": 0,
    "speedPenalty": 0,
    "minStrength": 0,
    "armorType": "N/A",
    "category": "UNARMORED",
    "createdAt": "2020-01-22T22:03:47",
    "updatedAt": "2020-01-22T22:03:47"
} as const satisfies ArmorsTableRowConstraints,
{
    "table": "armors",
    "id": 18,
    "itemID": 698,
    "profName": "Ordinary Clothing",
    "acBonus": 0,
    "dexCap": 5,
    "checkPenalty": 0,
    "speedPenalty": 0,
    "minStrength": 0,
    "armorType": "CLOTH",
    "category": "UNARMORED",
    "createdAt": "2020-07-12T07:17:08",
    "updatedAt": "2020-07-12T07:17:08"
} as const satisfies ArmorsTableRowConstraints,
{
    "table": "armors",
    "id": 19,
    "itemID": 699,
    "profName": "Ordinary Clothing",
    "acBonus": 0,
    "dexCap": 5,
    "checkPenalty": 0,
    "speedPenalty": 0,
    "minStrength": 0,
    "armorType": "CLOTH",
    "category": "UNARMORED",
    "createdAt": "2020-07-12T07:18:28",
    "updatedAt": "2020-07-12T07:18:28"
} as const satisfies ArmorsTableRowConstraints,
{
    "table": "armors",
    "id": 20,
    "itemID": 700,
    "profName": "Ordinary Clothing",
    "acBonus": 0,
    "dexCap": 5,
    "checkPenalty": 0,
    "speedPenalty": 0,
    "minStrength": 0,
    "armorType": "CLOTH",
    "category": "UNARMORED",
    "createdAt": "2020-07-12T07:18:53",
    "updatedAt": "2020-07-12T07:18:53"
} as const satisfies ArmorsTableRowConstraints,
{
    "table": "armors",
    "id": 21,
    "itemID": 701,
    "profName": "Ordinary Clothing",
    "acBonus": 0,
    "dexCap": 5,
    "checkPenalty": 0,
    "speedPenalty": 0,
    "minStrength": 0,
    "armorType": "CLOTH",
    "category": "UNARMORED",
    "createdAt": "2020-07-12T07:19:52",
    "updatedAt": "2020-07-12T07:19:52"
} as const satisfies ArmorsTableRowConstraints,
{
    "table": "armors",
    "id": 22,
    "itemID": 702,
    "profName": "Ordinary Clothing",
    "acBonus": 0,
    "dexCap": 5,
    "checkPenalty": 0,
    "speedPenalty": 0,
    "minStrength": 0,
    "armorType": "CLOTH",
    "category": "UNARMORED",
    "createdAt": "2020-07-12T07:20:12",
    "updatedAt": "2020-07-12T07:20:12"
} as const satisfies ArmorsTableRowConstraints,
{
    "table": "armors",
    "id": 26,
    "itemID": 997,
    "profName": "Ordinary Clothing",
    "acBonus": 0,
    "dexCap": 5,
    "checkPenalty": 0,
    "speedPenalty": 0,
    "minStrength": 0,
    "armorType": "CLOTH",
    "category": "UNARMORED",
    "createdAt": "2020-07-14T21:59:22",
    "updatedAt": "2020-07-14T21:59:22"
} as const satisfies ArmorsTableRowConstraints,
{
    "table": "armors",
    "id": 27,
    "itemID": 998,
    "profName": "Ordinary Clothing",
    "acBonus": 0,
    "dexCap": 5,
    "checkPenalty": 0,
    "speedPenalty": 0,
    "minStrength": 0,
    "armorType": "CLOTH",
    "category": "UNARMORED",
    "createdAt": "2020-07-14T21:59:41",
    "updatedAt": "2020-07-14T21:59:41"
} as const satisfies ArmorsTableRowConstraints,
{
    "table": "armors",
    "id": 29,
    "itemID": 1141,
    "profName": "Padded Armor",
    "acBonus": 1,
    "dexCap": 3,
    "checkPenalty": 0,
    "speedPenalty": 0,
    "minStrength": 10,
    "armorType": "CLOTH",
    "category": "LIGHT",
    "createdAt": "2020-07-15T20:28:40",
    "updatedAt": "2020-07-15T20:28:40"
} as const satisfies ArmorsTableRowConstraints,
{
    "table": "armors",
    "id": 62,
    "itemID": 1747,
    "profName": "Padded Armor",
    "acBonus": 1,
    "dexCap": 3,
    "checkPenalty": 0,
    "speedPenalty": 0,
    "minStrength": 10,
    "armorType": "CLOTH",
    "category": "LIGHT",
    "createdAt": "2020-09-23T23:31:13",
    "updatedAt": "2020-09-23T23:31:13"
} as const satisfies ArmorsTableRowConstraints,
{
    "table": "armors",
    "id": 77,
    "itemID": 2125,
    "profName": "Oni King Armor",
    "acBonus": 15,
    "dexCap": 25,
    "checkPenalty": 0,
    "speedPenalty": 0,
    "minStrength": 30,
    "armorType": "PLATE",
    "category": "MEDIUM",
    "createdAt": "2020-12-24T15:53:18",
    "updatedAt": "2020-12-24T15:53:18"
} as const satisfies ArmorsTableRowConstraints,
{
    "table": "armors",
    "id": 83,
    "itemID": 2166,
    "profName": "Robe of Shadow",
    "acBonus": 5,
    "dexCap": 50,
    "checkPenalty": 0,
    "speedPenalty": 0,
    "minStrength": 10,
    "armorType": "CLOTH",
    "category": "UNARMORED",
    "createdAt": "2021-01-29T17:24:15",
    "updatedAt": "2021-01-29T17:24:15"
} as const satisfies ArmorsTableRowConstraints,
{
    "table": "armors",
    "id": 149,
    "itemID": 4248,
    "profName": "Krill Natural Armor",
    "acBonus": 1,
    "dexCap": 4,
    "checkPenalty": 0,
    "speedPenalty": 0,
    "minStrength": 0,
    "armorType": "CLOTH",
    "category": "UNARMORED",
    "createdAt": "2021-10-28T23:34:07",
    "updatedAt": "2021-10-28T23:34:07"
} as const satisfies ArmorsTableRowConstraints,
{
    "table": "armors",
    "id": 152,
    "itemID": 4508,
    "profName": "Sarkorian God-Caller Garb",
    "acBonus": 0,
    "dexCap": 5,
    "checkPenalty": 0,
    "speedPenalty": 0,
    "minStrength": 10,
    "armorType": "CLOTH",
    "category": "UNARMORED",
    "createdAt": "2021-11-04T09:06:46",
    "updatedAt": "2021-11-04T09:06:46"
} as const satisfies ArmorsTableRowConstraints,
{
    "table": "armors",
    "id": 159,
    "itemID": 4748,
    "profName": "Leather (Homebrew)",
    "acBonus": 1,
    "dexCap": 20,
    "checkPenalty": 0,
    "speedPenalty": 0,
    "minStrength": 0,
    "armorType": "LEATHER",
    "category": "LIGHT",
    "createdAt": "2021-11-07T11:20:33",
    "updatedAt": "2021-11-07T11:20:33"
} as const satisfies ArmorsTableRowConstraints,
{
    "table": "armors",
    "id": 179,
    "itemID": 5209,
    "profName": "Fine Clothing with Wing Armor",
    "acBonus": 1,
    "dexCap": 4,
    "checkPenalty": 0,
    "speedPenalty": 0,
    "minStrength": 10,
    "armorType": "COMPOSITE",
    "category": "LIGHT",
    "createdAt": "2022-04-02T11:48:06",
    "updatedAt": "2022-04-02T11:48:06"
} as const satisfies ArmorsTableRowConstraints,
{
    "table": "armors",
    "id": 195,
    "itemID": 5873,
    "profName": "Padded Armor",
    "acBonus": 1,
    "dexCap": 3,
    "checkPenalty": 0,
    "speedPenalty": 0,
    "minStrength": 10,
    "armorType": "CLOTH",
    "category": "LIGHT",
    "createdAt": "2022-08-17T02:16:14",
    "updatedAt": "2022-08-17T02:16:14"
} as const satisfies ArmorsTableRowConstraints,
 ] as const;

export const armors = hookupTableLookup(_armors);