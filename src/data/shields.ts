import { hookupTableLookup } from '../tables';

export interface ShieldsTableRowConstraints {
  table: 'shields';
  id: number;
  itemID?: number;
  profName?: string;
  acBonus?: number;
  speedPenalty?: number;
  createdAt?: string;
  updatedAt?: string;
}

export type ShieldsTable = typeof shields;
export type ShieldsTableRow = ShieldsTable[number];
export type ShieldID = ShieldsTableRow['id'];

export const isShieldID = (id?: number): id is ShieldID => !!id && !!shields.byIdLax(id);
export const assertIsShieldID = (id?: number): asserts id is ShieldID => { if (!isShieldID(id)) throw Error('Expected a ShieldID; got ' + id); }

const _shields = [
{
    "table": "shields",
    "id": 3,
    "itemID": 703,
    "profName": "Buckler",
    "acBonus": 1,
    "speedPenalty": 0,
    "createdAt": "2020-07-12T07:22:04",
    "updatedAt": "2020-07-12T07:22:04"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 4,
    "itemID": 1156,
    "profName": "Wooden Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-07-15T21:18:44",
    "updatedAt": "2020-07-15T21:18:44"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 5,
    "itemID": 1157,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-07-15T21:21:00",
    "updatedAt": "2020-07-15T21:21:00"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 8,
    "itemID": 1338,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-07-23T02:26:59",
    "updatedAt": "2020-07-23T02:26:59"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 9,
    "itemID": 1339,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-07-23T02:27:55",
    "updatedAt": "2020-07-23T02:27:55"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 10,
    "itemID": 1340,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-07-23T02:28:53",
    "updatedAt": "2020-07-23T02:28:53"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 11,
    "itemID": 1341,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-07-23T02:29:59",
    "updatedAt": "2020-07-23T02:29:59"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 12,
    "itemID": 1342,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-07-23T02:31:04",
    "updatedAt": "2020-07-23T02:31:04"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 13,
    "itemID": 1343,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-07-23T02:31:20",
    "updatedAt": "2020-07-23T02:31:20"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 14,
    "itemID": 1344,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-07-23T02:39:19",
    "updatedAt": "2020-07-23T02:39:19"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 15,
    "itemID": 1345,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-07-23T02:46:59",
    "updatedAt": "2020-07-23T02:46:59"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 17,
    "itemID": 1347,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-07-23T02:55:35",
    "updatedAt": "2020-07-23T02:55:35"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 18,
    "itemID": 1348,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-07-23T03:14:00",
    "updatedAt": "2020-07-23T03:14:00"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 19,
    "itemID": 1349,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-07-23T03:18:25",
    "updatedAt": "2020-07-23T03:18:25"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 20,
    "itemID": 1350,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-07-23T03:23:45",
    "updatedAt": "2020-07-23T03:23:45"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 21,
    "itemID": 1351,
    "profName": "Wooden Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-07-23T03:28:27",
    "updatedAt": "2020-07-23T03:28:27"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 23,
    "itemID": 1353,
    "profName": "Buckler",
    "acBonus": 1,
    "speedPenalty": 0,
    "createdAt": "2020-07-23T03:35:59",
    "updatedAt": "2020-07-23T03:35:59"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 24,
    "itemID": 1354,
    "profName": "Buckler",
    "acBonus": 1,
    "speedPenalty": 0,
    "createdAt": "2020-07-23T03:36:09",
    "updatedAt": "2020-07-23T03:36:09"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 25,
    "itemID": 1355,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-07-23T03:45:49",
    "updatedAt": "2020-07-23T03:45:49"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 26,
    "itemID": 1356,
    "profName": "Buckler",
    "acBonus": 1,
    "speedPenalty": 0,
    "createdAt": "2020-07-23T03:51:45",
    "updatedAt": "2020-07-23T03:51:45"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 27,
    "itemID": 1410,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-07-27T01:26:14",
    "updatedAt": "2020-07-27T01:26:14"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 28,
    "itemID": 1423,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-07-27T06:23:00",
    "updatedAt": "2020-07-27T06:23:00"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 29,
    "itemID": 1537,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-08-20T22:27:32",
    "updatedAt": "2020-08-20T22:27:32"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 30,
    "itemID": 1538,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-08-20T22:30:50",
    "updatedAt": "2020-08-20T22:30:50"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 31,
    "itemID": 1610,
    "profName": "Buckler",
    "acBonus": 1,
    "speedPenalty": 0,
    "createdAt": "2020-08-21T09:06:07",
    "updatedAt": "2020-08-21T09:06:07"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 32,
    "itemID": 1611,
    "profName": "Wooden Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-08-21T09:14:05",
    "updatedAt": "2020-08-21T09:14:05"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 33,
    "itemID": 1709,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-08-25T04:32:26",
    "updatedAt": "2020-08-25T04:32:26"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 34,
    "itemID": 1759,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2020-09-24T23:53:44",
    "updatedAt": "2020-09-24T23:53:44"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 35,
    "itemID": 1760,
    "profName": "Buckler",
    "acBonus": 1,
    "speedPenalty": 0,
    "createdAt": "2020-09-25T00:05:21",
    "updatedAt": "2020-09-25T00:05:21"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 37,
    "itemID": 2487,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2021-05-08T04:23:07",
    "updatedAt": "2021-05-08T04:23:07"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 38,
    "itemID": 2505,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2021-05-09T03:53:08",
    "updatedAt": "2021-05-09T03:53:08"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 39,
    "itemID": 2581,
    "profName": "Solar Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2021-05-11T07:36:34",
    "updatedAt": "2021-05-11T07:36:34"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 40,
    "itemID": 2953,
    "profName": "Charge Blade-Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2021-06-27T22:22:30",
    "updatedAt": "2021-06-27T22:22:30"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 41,
    "itemID": 3428,
    "profName": "Wooden Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2021-09-01T03:59:23",
    "updatedAt": "2021-09-01T03:59:23"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 45,
    "itemID": 3489,
    "profName": "Wooden Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2021-09-01T08:05:13",
    "updatedAt": "2021-09-01T08:05:13"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 46,
    "itemID": 3490,
    "profName": "Wooden Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2021-09-01T08:05:15",
    "updatedAt": "2021-09-01T08:05:15"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 48,
    "itemID": 3492,
    "profName": "Wooden Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2021-09-01T08:05:57",
    "updatedAt": "2021-09-01T08:05:57"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 49,
    "itemID": 3513,
    "profName": "Wooden Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2021-09-01T11:49:54",
    "updatedAt": "2021-09-01T11:49:54"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 54,
    "itemID": 4393,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2021-11-04T04:38:52",
    "updatedAt": "2021-11-04T04:38:52"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 56,
    "itemID": 4512,
    "profName": "Wooden Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2021-11-04T09:26:18",
    "updatedAt": "2021-11-04T09:26:18"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 57,
    "itemID": 4513,
    "profName": "Wooden Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2021-11-04T09:26:53",
    "updatedAt": "2021-11-04T09:26:53"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 58,
    "itemID": 4514,
    "profName": "Wooden Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2021-11-04T09:27:28",
    "updatedAt": "2021-11-04T09:27:28"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 59,
    "itemID": 4515,
    "profName": "Wooden Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2021-11-04T09:28:03",
    "updatedAt": "2021-11-04T09:28:03"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 60,
    "itemID": 4516,
    "profName": "Wooden Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2021-11-04T09:28:40",
    "updatedAt": "2021-11-04T09:28:40"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 61,
    "itemID": 4517,
    "profName": "Wooden Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2021-11-04T09:28:59",
    "updatedAt": "2021-11-04T09:28:59"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 62,
    "itemID": 4651,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2021-11-05T07:17:42",
    "updatedAt": "2021-11-05T07:17:42"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 75,
    "itemID": 4798,
    "profName": "Frostward",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2021-11-14T02:27:25",
    "updatedAt": "2021-11-14T02:27:25"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 78,
    "itemID": 4900,
    "profName": "Klar",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2021-12-13T02:34:22",
    "updatedAt": "2021-12-13T02:34:22"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 81,
    "itemID": 5082,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2022-03-03T15:25:16",
    "updatedAt": "2022-03-03T15:25:16"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 82,
    "itemID": 5084,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2022-03-03T15:29:34",
    "updatedAt": "2022-03-03T15:29:34"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 83,
    "itemID": 5085,
    "profName": "Buckler",
    "acBonus": 1,
    "speedPenalty": 0,
    "createdAt": "2022-03-03T15:29:59",
    "updatedAt": "2022-03-03T15:29:59"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 84,
    "itemID": 5086,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2022-03-03T15:33:30",
    "updatedAt": "2022-03-03T15:33:30"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 85,
    "itemID": 5087,
    "profName": "Wooden Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2022-03-03T15:37:02",
    "updatedAt": "2022-03-03T15:37:02"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 86,
    "itemID": 5407,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2022-05-22T12:26:23",
    "updatedAt": "2022-05-22T12:26:23"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 87,
    "itemID": 5409,
    "profName": "Wooden Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2022-05-22T12:32:32",
    "updatedAt": "2022-05-22T12:32:32"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 90,
    "itemID": 5550,
    "profName": "Buckler",
    "acBonus": 1,
    "speedPenalty": 0,
    "createdAt": "2022-07-06T20:46:53",
    "updatedAt": "2022-07-06T20:46:53"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 91,
    "itemID": 5769,
    "profName": "Buckler",
    "acBonus": 1,
    "speedPenalty": 0,
    "createdAt": "2022-07-29T22:14:48",
    "updatedAt": "2022-07-29T22:14:48"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 93,
    "itemID": 5905,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2022-08-19T02:40:05",
    "updatedAt": "2022-08-19T02:40:05"
} as const satisfies ShieldsTableRowConstraints,
{
    "table": "shields",
    "id": 95,
    "itemID": 6070,
    "profName": "Steel Shield",
    "acBonus": 2,
    "speedPenalty": 0,
    "createdAt": "2022-10-31T01:54:12",
    "updatedAt": "2022-10-31T01:54:12"
} as const satisfies ShieldsTableRowConstraints,
 ] as const;

export const shields = hookupTableLookup(_shields);