import { hookupTableLookup } from '../tables';

export type EtchedType = "WEAPON" | "ARMOR";

export interface ItemrunesTableRowConstraints {
  table: 'itemrunes';
  id: number;
  itemID?: number;
  isFundamental: boolean;
  etchedType?: EtchedType;
  createdAt?: string;
  updatedAt?: string;
}

export type ItemrunesTable = typeof itemrunes;
export type ItemrunesTableRow = ItemrunesTable[number];
export type ItemruneID = ItemrunesTableRow['id'];

export const isItemruneID = (id?: number): id is ItemruneID => !!id && !!itemrunes.byIdLax(id);
export const assertIsItemruneID = (id?: number): asserts id is ItemruneID => { if (!isItemruneID(id)) throw Error('Expected a ItemruneID; got ' + id); }

const _itemrunes = [
{
    "table": "itemrunes",
    "id": 20,
    "itemID": 118,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-06-22T06:17:55",
    "updatedAt": "2020-06-22T06:17:55"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 24,
    "itemID": 122,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-06-22T06:22:26",
    "updatedAt": "2020-06-22T06:22:26"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 25,
    "itemID": 123,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-06-22T06:23:24",
    "updatedAt": "2020-06-22T06:23:24"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 26,
    "itemID": 124,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-06-22T06:24:11",
    "updatedAt": "2020-06-22T06:24:11"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 27,
    "itemID": 125,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-06-22T06:25:20",
    "updatedAt": "2020-06-22T06:25:20"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 28,
    "itemID": 126,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-06-22T06:26:18",
    "updatedAt": "2020-06-22T06:26:18"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 29,
    "itemID": 127,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-06-22T06:27:57",
    "updatedAt": "2020-06-22T06:27:57"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 30,
    "itemID": 128,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-06-22T06:28:55",
    "updatedAt": "2020-06-22T06:28:55"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 31,
    "itemID": 129,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-06-22T06:29:46",
    "updatedAt": "2020-06-22T06:29:46"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 32,
    "itemID": 130,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-06-22T06:30:30",
    "updatedAt": "2020-06-22T06:30:30"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 33,
    "itemID": 131,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-06-22T06:31:15",
    "updatedAt": "2020-06-22T06:31:15"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 34,
    "itemID": 132,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-06-22T06:31:48",
    "updatedAt": "2020-06-22T06:31:48"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 36,
    "itemID": 1045,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-07-15T00:51:59",
    "updatedAt": "2020-07-15T00:51:59"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 37,
    "itemID": 1046,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-07-15T00:53:03",
    "updatedAt": "2020-07-15T00:53:03"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 38,
    "itemID": 1047,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-07-15T00:53:12",
    "updatedAt": "2020-07-15T00:53:12"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 40,
    "itemID": 1049,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-07-15T00:54:37",
    "updatedAt": "2020-07-15T00:54:37"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 41,
    "itemID": 1050,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-07-15T00:55:00",
    "updatedAt": "2020-07-15T00:55:00"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 42,
    "itemID": 1051,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-07-15T00:55:08",
    "updatedAt": "2020-07-15T00:55:08"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 43,
    "itemID": 1052,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T00:58:53",
    "updatedAt": "2020-07-15T00:58:53"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 44,
    "itemID": 1053,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T01:01:14",
    "updatedAt": "2020-07-15T01:01:14"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 46,
    "itemID": 1055,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T01:16:39",
    "updatedAt": "2020-07-15T01:16:39"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 47,
    "itemID": 1056,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T01:16:48",
    "updatedAt": "2020-07-15T01:16:48"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 48,
    "itemID": 1057,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-07-15T01:20:52",
    "updatedAt": "2020-07-15T01:20:52"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 49,
    "itemID": 1058,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T01:24:20",
    "updatedAt": "2020-07-15T01:24:20"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 50,
    "itemID": 1059,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T01:25:53",
    "updatedAt": "2020-07-15T01:25:53"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 52,
    "itemID": 1061,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T01:30:13",
    "updatedAt": "2020-07-15T01:30:13"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 53,
    "itemID": 1062,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T01:30:21",
    "updatedAt": "2020-07-15T01:30:21"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 55,
    "itemID": 1064,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-07-15T01:35:30",
    "updatedAt": "2020-07-15T01:35:30"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 56,
    "itemID": 1065,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-07-15T01:35:39",
    "updatedAt": "2020-07-15T01:35:39"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 58,
    "itemID": 1067,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T01:40:13",
    "updatedAt": "2020-07-15T01:40:13"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 59,
    "itemID": 1068,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T01:40:23",
    "updatedAt": "2020-07-15T01:40:23"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 61,
    "itemID": 1070,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T01:45:49",
    "updatedAt": "2020-07-15T01:45:49"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 62,
    "itemID": 1071,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T01:45:57",
    "updatedAt": "2020-07-15T01:45:57"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 67,
    "itemID": 1076,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T02:11:05",
    "updatedAt": "2020-07-15T02:11:05"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 68,
    "itemID": 1077,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T02:11:16",
    "updatedAt": "2020-07-15T02:11:16"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 70,
    "itemID": 1079,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T02:16:17",
    "updatedAt": "2020-07-15T02:16:17"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 71,
    "itemID": 1080,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T02:16:27",
    "updatedAt": "2020-07-15T02:16:27"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 72,
    "itemID": 1081,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T02:22:43",
    "updatedAt": "2020-07-15T02:22:43"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 73,
    "itemID": 1082,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T02:26:47",
    "updatedAt": "2020-07-15T02:26:47"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 74,
    "itemID": 1083,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T02:34:04",
    "updatedAt": "2020-07-15T02:34:04"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 76,
    "itemID": 1085,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T02:40:27",
    "updatedAt": "2020-07-15T02:40:27"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 77,
    "itemID": 1086,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T02:40:39",
    "updatedAt": "2020-07-15T02:40:39"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 79,
    "itemID": 1088,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-07-15T02:46:04",
    "updatedAt": "2020-07-15T02:46:04"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 80,
    "itemID": 1089,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-07-15T02:46:12",
    "updatedAt": "2020-07-15T02:46:12"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 81,
    "itemID": 1090,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T02:54:46",
    "updatedAt": "2020-07-15T02:54:46"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 82,
    "itemID": 1091,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-07-15T02:55:06",
    "updatedAt": "2020-07-15T02:55:06"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 83,
    "itemID": 1092,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-07-15T02:55:23",
    "updatedAt": "2020-07-15T02:55:23"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 84,
    "itemID": 1093,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T02:58:21",
    "updatedAt": "2020-07-15T02:58:21"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 85,
    "itemID": 1094,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T03:04:32",
    "updatedAt": "2020-07-15T03:04:32"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 86,
    "itemID": 1095,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-07-15T03:12:21",
    "updatedAt": "2020-07-15T03:12:21"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 87,
    "itemID": 1096,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T03:15:40",
    "updatedAt": "2020-07-15T03:15:40"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 88,
    "itemID": 1097,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-07-15T03:24:42",
    "updatedAt": "2020-07-15T03:24:42"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 89,
    "itemID": 1098,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T03:29:33",
    "updatedAt": "2020-07-15T03:29:33"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 90,
    "itemID": 1099,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-15T03:29:47",
    "updatedAt": "2020-07-15T03:29:47"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 91,
    "itemID": 1405,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-27T01:11:59",
    "updatedAt": "2020-07-27T01:11:59"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 93,
    "itemID": 1407,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-27T01:15:33",
    "updatedAt": "2020-07-27T01:15:33"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 94,
    "itemID": 1408,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-07-27T01:15:46",
    "updatedAt": "2020-07-27T01:15:46"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 95,
    "itemID": 1409,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-07-27T01:22:28",
    "updatedAt": "2020-07-27T01:22:28"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 96,
    "itemID": 1580,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-08-21T05:57:03",
    "updatedAt": "2020-08-21T05:57:03"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 98,
    "itemID": 1582,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-08-21T06:06:07",
    "updatedAt": "2020-08-21T06:06:07"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 99,
    "itemID": 1583,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-08-21T06:08:29",
    "updatedAt": "2020-08-21T06:08:29"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 100,
    "itemID": 1584,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-08-21T06:09:00",
    "updatedAt": "2020-08-21T06:09:00"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 102,
    "itemID": 1586,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-08-21T06:20:55",
    "updatedAt": "2020-08-21T06:20:55"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 103,
    "itemID": 1587,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-08-21T06:21:11",
    "updatedAt": "2020-08-21T06:21:11"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 104,
    "itemID": 1677,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-08-24T23:34:49",
    "updatedAt": "2020-08-24T23:34:49"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 105,
    "itemID": 1793,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2020-10-02T11:19:35",
    "updatedAt": "2020-10-02T11:19:35"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 106,
    "itemID": 1794,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-10-02T11:22:51",
    "updatedAt": "2020-10-02T11:22:51"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 107,
    "itemID": 1884,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-11-12T02:45:46",
    "updatedAt": "2020-11-12T02:45:46"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 108,
    "itemID": 1954,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2020-11-24T01:11:29",
    "updatedAt": "2020-11-24T01:11:29"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 109,
    "itemID": 2143,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-01-11T05:21:34",
    "updatedAt": "2021-01-11T05:21:34"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 110,
    "itemID": 2254,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-02-23T09:40:22",
    "updatedAt": "2021-02-23T09:40:22"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 111,
    "itemID": 2255,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2021-02-23T09:45:38",
    "updatedAt": "2021-02-23T09:45:38"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 112,
    "itemID": 2613,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-05-14T17:49:35",
    "updatedAt": "2021-05-14T17:49:35"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 113,
    "itemID": 2614,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2021-05-14T17:53:43",
    "updatedAt": "2021-05-14T17:53:43"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 142,
    "itemID": 3342,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-08-30T09:13:40",
    "updatedAt": "2021-08-30T09:13:40"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 143,
    "itemID": 3343,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2021-08-30T09:13:54",
    "updatedAt": "2021-08-30T09:13:54"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 144,
    "itemID": 3344,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-08-30T09:14:06",
    "updatedAt": "2021-08-30T09:14:06"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 145,
    "itemID": 3345,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-08-30T09:14:21",
    "updatedAt": "2021-08-30T09:14:21"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 146,
    "itemID": 3346,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-08-30T09:14:30",
    "updatedAt": "2021-08-30T09:14:30"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 147,
    "itemID": 3347,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2021-08-30T09:14:39",
    "updatedAt": "2021-08-30T09:14:39"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 148,
    "itemID": 3348,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2021-08-30T09:14:50",
    "updatedAt": "2021-08-30T09:14:50"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 149,
    "itemID": 3349,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-08-30T09:15:00",
    "updatedAt": "2021-08-30T09:15:00"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 150,
    "itemID": 3350,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-08-30T09:15:11",
    "updatedAt": "2021-08-30T09:15:11"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 151,
    "itemID": 3351,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2021-08-30T09:15:20",
    "updatedAt": "2021-08-30T09:15:20"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 152,
    "itemID": 3352,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2021-08-30T09:15:40",
    "updatedAt": "2021-08-30T09:15:40"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 153,
    "itemID": 3353,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-08-30T09:15:50",
    "updatedAt": "2021-08-30T09:15:50"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 154,
    "itemID": 3354,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-08-30T09:16:06",
    "updatedAt": "2021-08-30T09:16:06"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 155,
    "itemID": 3355,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2021-08-30T09:16:19",
    "updatedAt": "2021-08-30T09:16:19"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 156,
    "itemID": 3356,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2021-08-30T09:16:30",
    "updatedAt": "2021-08-30T09:16:30"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 157,
    "itemID": 3357,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-08-30T09:16:42",
    "updatedAt": "2021-08-30T09:16:42"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 158,
    "itemID": 3358,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2021-08-30T09:16:55",
    "updatedAt": "2021-08-30T09:16:55"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 159,
    "itemID": 3359,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-08-30T09:17:07",
    "updatedAt": "2021-08-30T09:17:07"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 160,
    "itemID": 3360,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-08-30T09:17:18",
    "updatedAt": "2021-08-30T09:17:18"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 163,
    "itemID": 3425,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-09-01T03:45:37",
    "updatedAt": "2021-09-01T03:45:37"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 164,
    "itemID": 3426,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-09-01T03:45:52",
    "updatedAt": "2021-09-01T03:45:52"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 165,
    "itemID": 3427,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-09-01T03:46:12",
    "updatedAt": "2021-09-01T03:46:12"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 167,
    "itemID": 3448,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-09-01T05:52:37",
    "updatedAt": "2021-09-01T05:52:37"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 168,
    "itemID": 3449,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-09-01T05:52:44",
    "updatedAt": "2021-09-01T05:52:44"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 169,
    "itemID": 3456,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-09-01T06:20:12",
    "updatedAt": "2021-09-01T06:20:12"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 170,
    "itemID": 3457,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-09-01T06:22:06",
    "updatedAt": "2021-09-01T06:22:06"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 173,
    "itemID": 3608,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-09-21T00:23:17",
    "updatedAt": "2021-09-21T00:23:17"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 177,
    "itemID": 3612,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-09-21T00:32:05",
    "updatedAt": "2021-09-21T00:32:05"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 179,
    "itemID": 4173,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-10-23T04:58:02",
    "updatedAt": "2021-10-23T04:58:02"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 181,
    "itemID": 4196,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2021-10-24T00:09:40",
    "updatedAt": "2021-10-24T00:09:40"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 182,
    "itemID": 4197,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2021-10-24T00:11:03",
    "updatedAt": "2021-10-24T00:11:03"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 183,
    "itemID": 4198,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2021-10-24T00:11:18",
    "updatedAt": "2021-10-24T00:11:18"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 189,
    "itemID": 4379,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2021-11-03T23:20:26",
    "updatedAt": "2021-11-03T23:20:26"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 190,
    "itemID": 4380,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2021-11-03T23:20:52",
    "updatedAt": "2021-11-03T23:20:52"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 191,
    "itemID": 4381,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2021-11-03T23:21:19",
    "updatedAt": "2021-11-03T23:21:19"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 192,
    "itemID": 4382,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2021-11-03T23:21:40",
    "updatedAt": "2021-11-03T23:21:40"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 193,
    "itemID": 4386,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-11-04T04:27:32",
    "updatedAt": "2021-11-04T04:27:32"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 195,
    "itemID": 4388,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-11-04T04:29:29",
    "updatedAt": "2021-11-04T04:29:29"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 196,
    "itemID": 4389,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-11-04T04:29:37",
    "updatedAt": "2021-11-04T04:29:37"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 198,
    "itemID": 4501,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-11-04T08:55:27",
    "updatedAt": "2021-11-04T08:55:27"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 199,
    "itemID": 4502,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-11-04T08:55:38",
    "updatedAt": "2021-11-04T08:55:38"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 201,
    "itemID": 4504,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-11-04T08:57:43",
    "updatedAt": "2021-11-04T08:57:43"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 202,
    "itemID": 4505,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-11-04T08:57:51",
    "updatedAt": "2021-11-04T08:57:51"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 203,
    "itemID": 4506,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2021-11-04T08:59:17",
    "updatedAt": "2021-11-04T08:59:17"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 204,
    "itemID": 4523,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-11-04T21:05:05",
    "updatedAt": "2021-11-04T21:05:05"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 206,
    "itemID": 4605,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-11-04T23:50:30",
    "updatedAt": "2021-11-04T23:50:30"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 207,
    "itemID": 4606,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-11-04T23:51:42",
    "updatedAt": "2021-11-04T23:51:42"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 208,
    "itemID": 4607,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-11-04T23:51:51",
    "updatedAt": "2021-11-04T23:51:51"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 209,
    "itemID": 4627,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2021-11-05T06:47:07",
    "updatedAt": "2021-11-05T06:47:07"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 210,
    "itemID": 4639,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2021-11-05T07:00:51",
    "updatedAt": "2021-11-05T07:00:51"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 211,
    "itemID": 4764,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2021-11-11T02:24:00",
    "updatedAt": "2021-11-11T02:24:00"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 212,
    "itemID": 4839,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2021-11-30T03:25:21",
    "updatedAt": "2021-11-30T03:25:21"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 213,
    "itemID": 5044,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2022-02-07T03:10:27",
    "updatedAt": "2022-02-07T03:10:27"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 215,
    "itemID": 5046,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2022-02-07T03:14:48",
    "updatedAt": "2022-02-07T03:14:48"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 219,
    "itemID": 5059,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2022-02-14T04:55:51",
    "updatedAt": "2022-02-14T04:55:51"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 220,
    "itemID": 5239,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2022-04-05T21:36:48",
    "updatedAt": "2022-04-05T21:36:48"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 222,
    "itemID": 5250,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2022-04-06T23:23:49",
    "updatedAt": "2022-04-06T23:23:49"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 224,
    "itemID": 5294,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2022-04-13T00:59:22",
    "updatedAt": "2022-04-13T00:59:22"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 244,
    "itemID": 5397,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2022-05-22T12:05:06",
    "updatedAt": "2022-05-22T12:05:06"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 245,
    "itemID": 5434,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2022-05-26T00:16:52",
    "updatedAt": "2022-05-26T00:16:52"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 246,
    "itemID": 5555,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2022-07-08T12:58:59",
    "updatedAt": "2022-07-08T12:58:59"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 248,
    "itemID": 5762,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2022-07-29T05:58:33",
    "updatedAt": "2022-07-29T05:58:33"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 249,
    "itemID": 5763,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2022-07-29T06:00:52",
    "updatedAt": "2022-07-29T06:00:52"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 250,
    "itemID": 5764,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2022-07-29T06:03:32",
    "updatedAt": "2022-07-29T06:03:32"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 253,
    "itemID": 6074,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2022-11-15T17:12:02",
    "updatedAt": "2022-11-15T17:12:02"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 254,
    "itemID": 6075,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2022-11-15T17:12:40",
    "updatedAt": "2022-11-15T17:12:40"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 255,
    "itemID": 6076,
    "isFundamental": true,
    "etchedType": "ARMOR",
    "createdAt": "2022-11-15T17:16:03",
    "updatedAt": "2022-11-15T17:16:03"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 256,
    "itemID": 6081,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2022-11-19T12:25:50",
    "updatedAt": "2022-11-19T12:25:50"
} as const satisfies ItemrunesTableRowConstraints,
{
    "table": "itemrunes",
    "id": 257,
    "itemID": 6355,
    "isFundamental": true,
    "etchedType": "WEAPON",
    "createdAt": "2023-01-18T18:31:12",
    "updatedAt": "2023-01-18T18:31:12"
} as const satisfies ItemrunesTableRowConstraints,
 ] as const;

export const itemrunes = hookupTableLookup(_itemrunes);