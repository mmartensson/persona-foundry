import { hookupTableLookup } from '../tables';

export interface StoragesTableRowConstraints {
  table: 'storages';
  id: number;
  itemID?: number;
  maxBulkStorage?: string;
  bulkIgnored?: string;
  ignoreSelfBulkIfWearing?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export type StoragesTable = typeof storages;
export type StoragesTableRow = StoragesTable[number];
export type StorageID = StoragesTableRow['id'];

export const isStorageID = (id?: number): id is StorageID => !!id && !!storages.byIdLax(id);
export const assertIsStorageID = (id?: number): asserts id is StorageID => { if (!isStorageID(id)) throw Error('Expected a StorageID; got ' + id); }

const _storages = [
{
    "table": "storages",
    "id": 1,
    "itemID": 4,
    "maxBulkStorage": "4",
    "bulkIgnored": "2",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-01-20T22:51:09",
    "updatedAt": "2020-01-20T22:51:09"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 5,
    "itemID": 14,
    "maxBulkStorage": "8",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-01-20T22:53:41",
    "updatedAt": "2020-01-20T22:53:41"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 19,
    "itemID": 172,
    "maxBulkStorage": "3",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-07-06T17:36:38",
    "updatedAt": "2020-07-06T17:36:38"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 20,
    "itemID": 173,
    "maxBulkStorage": "1",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-07-06T17:36:49",
    "updatedAt": "2020-07-06T17:36:49"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 29,
    "itemID": 273,
    "maxBulkStorage": "8",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-07-09T09:19:11",
    "updatedAt": "2020-07-09T09:19:11"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 30,
    "itemID": 274,
    "maxBulkStorage": "6",
    "bulkIgnored": "2",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-07-09T09:25:38",
    "updatedAt": "2020-07-09T09:25:38"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 31,
    "itemID": 275,
    "maxBulkStorage": "2",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-07-09T09:29:13",
    "updatedAt": "2020-07-09T09:29:13"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 44,
    "itemID": 304,
    "maxBulkStorage": "0",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-07-09T11:18:06",
    "updatedAt": "2020-07-09T11:18:06"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 45,
    "itemID": 305,
    "maxBulkStorage": "0",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-07-09T11:18:22",
    "updatedAt": "2020-07-09T11:18:22"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 46,
    "itemID": 306,
    "maxBulkStorage": "0",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-07-09T11:18:42",
    "updatedAt": "2020-07-09T11:18:42"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 47,
    "itemID": 307,
    "maxBulkStorage": "0",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-07-09T11:19:08",
    "updatedAt": "2020-07-09T11:19:08"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 48,
    "itemID": 308,
    "maxBulkStorage": "0",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-07-09T11:19:30",
    "updatedAt": "2020-07-09T11:19:30"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 49,
    "itemID": 309,
    "maxBulkStorage": "0",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-07-09T11:19:55",
    "updatedAt": "2020-07-09T11:19:55"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 51,
    "itemID": 566,
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-07-11T02:26:40",
    "updatedAt": "2020-07-11T02:26:40"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 52,
    "itemID": 567,
    "maxBulkStorage": "0",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-07-11T02:27:49",
    "updatedAt": "2020-07-11T02:27:49"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 53,
    "itemID": 568,
    "maxBulkStorage": "5",
    "bulkIgnored": "5",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-07-11T02:28:50",
    "updatedAt": "2020-07-11T02:28:50"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 54,
    "itemID": 569,
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-07-11T02:29:04",
    "updatedAt": "2020-07-11T02:29:04"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 59,
    "itemID": 787,
    "maxBulkStorage": "1",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-07-13T02:30:57",
    "updatedAt": "2020-07-13T02:30:57"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 61,
    "itemID": 931,
    "maxBulkStorage": "1",
    "bulkIgnored": "1",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-07-14T05:37:25",
    "updatedAt": "2020-07-14T05:37:25"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 63,
    "itemID": 954,
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-07-14T07:02:46",
    "updatedAt": "2020-07-14T07:02:46"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 64,
    "itemID": 955,
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-07-14T07:03:09",
    "updatedAt": "2020-07-14T07:03:09"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 66,
    "itemID": 1002,
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-07-14T22:36:56",
    "updatedAt": "2020-07-14T22:36:56"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 71,
    "itemID": 1293,
    "maxBulkStorage": "1",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-07-20T07:29:54",
    "updatedAt": "2020-07-20T07:29:54"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 73,
    "itemID": 1468,
    "maxBulkStorage": "1",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-08-20T02:58:33",
    "updatedAt": "2020-08-20T02:58:33"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 74,
    "itemID": 1555,
    "maxBulkStorage": "2",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-08-21T02:12:29",
    "updatedAt": "2020-08-21T02:12:29"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 75,
    "itemID": 1556,
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-08-21T02:20:50",
    "updatedAt": "2020-08-21T02:20:50"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 76,
    "itemID": 1557,
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-08-21T02:22:22",
    "updatedAt": "2020-08-21T02:22:22"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 81,
    "itemID": 1697,
    "maxBulkStorage": "0",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-08-25T03:14:27",
    "updatedAt": "2020-08-25T03:14:27"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 82,
    "itemID": 1698,
    "maxBulkStorage": "5",
    "bulkIgnored": "5",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-08-25T03:16:05",
    "updatedAt": "2020-08-25T03:16:05"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 83,
    "itemID": 1699,
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-08-25T03:16:20",
    "updatedAt": "2020-08-25T03:16:20"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 84,
    "itemID": 1700,
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-08-25T03:16:45",
    "updatedAt": "2020-08-25T03:16:45"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 85,
    "itemID": 1702,
    "maxBulkStorage": "1",
    "bulkIgnored": "1",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-08-25T03:28:01",
    "updatedAt": "2020-08-25T03:28:01"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 88,
    "itemID": 1781,
    "maxBulkStorage": "1",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-10-02T10:48:12",
    "updatedAt": "2020-10-02T10:48:12"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 89,
    "itemID": 1782,
    "maxBulkStorage": "1",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-10-02T10:49:04",
    "updatedAt": "2020-10-02T10:49:04"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 90,
    "itemID": 1783,
    "maxBulkStorage": "1",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-10-02T10:49:47",
    "updatedAt": "2020-10-02T10:49:47"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 91,
    "itemID": 1784,
    "maxBulkStorage": "1",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-10-02T10:50:02",
    "updatedAt": "2020-10-02T10:50:02"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 94,
    "itemID": 1962,
    "maxBulkStorage": "1",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-11-24T01:39:48",
    "updatedAt": "2020-11-24T01:39:48"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 95,
    "itemID": 1963,
    "maxBulkStorage": "0",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-11-24T01:47:02",
    "updatedAt": "2020-11-24T01:47:02"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 96,
    "itemID": 1981,
    "maxBulkStorage": "1",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-11-24T02:51:53",
    "updatedAt": "2020-11-24T02:51:53"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 97,
    "itemID": 1982,
    "maxBulkStorage": "1",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-11-24T02:52:33",
    "updatedAt": "2020-11-24T02:52:33"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 98,
    "itemID": 1983,
    "maxBulkStorage": "1",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-11-24T02:53:19",
    "updatedAt": "2020-11-24T02:53:19"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 99,
    "itemID": 1984,
    "maxBulkStorage": "1",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-11-24T02:54:06",
    "updatedAt": "2020-11-24T02:54:06"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 100,
    "itemID": 1990,
    "maxBulkStorage": "4",
    "bulkIgnored": "2",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-11-24T03:20:24",
    "updatedAt": "2020-11-24T03:20:24"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 101,
    "itemID": 2000,
    "maxBulkStorage": "0",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2020-11-24T03:50:05",
    "updatedAt": "2020-11-24T03:50:05"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 106,
    "itemID": 2158,
    "maxBulkStorage": "6",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2021-01-19T22:07:19",
    "updatedAt": "2021-01-19T22:07:19"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 107,
    "itemID": 2296,
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2021-03-10T00:14:35",
    "updatedAt": "2021-03-10T00:14:35"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 110,
    "itemID": 2324,
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2021-04-08T09:06:31",
    "updatedAt": "2021-04-08T09:06:31"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 111,
    "itemID": 2330,
    "maxBulkStorage": "1",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2021-04-08T09:36:47",
    "updatedAt": "2021-04-08T09:36:47"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 135,
    "itemID": 2711,
    "maxBulkStorage": "0",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2021-06-03T18:12:41",
    "updatedAt": "2021-06-03T18:12:41"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 137,
    "itemID": 3078,
    "maxBulkStorage": "4",
    "bulkIgnored": "2",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2021-07-17T06:21:39",
    "updatedAt": "2021-07-17T06:21:39"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 138,
    "itemID": 3079,
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2021-07-17T06:23:51",
    "updatedAt": "2021-07-17T06:23:51"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 140,
    "itemID": 3081,
    "maxBulkStorage": "0",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2021-07-17T06:41:15",
    "updatedAt": "2021-07-17T06:41:15"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 145,
    "itemID": 4978,
    "maxBulkStorage": "2",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-01-24T00:44:45",
    "updatedAt": "2022-01-24T00:44:45"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 150,
    "itemID": 4989,
    "maxBulkStorage": "4",
    "bulkIgnored": "2",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-02-01T21:13:10",
    "updatedAt": "2022-02-01T21:13:10"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 152,
    "itemID": 4991,
    "maxBulkStorage": "4",
    "bulkIgnored": "2",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-02-01T21:21:27",
    "updatedAt": "2022-02-01T21:21:27"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 153,
    "itemID": 4992,
    "maxBulkStorage": "4",
    "bulkIgnored": "2",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-02-01T21:25:00",
    "updatedAt": "2022-02-01T21:25:00"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 155,
    "itemID": 4994,
    "maxBulkStorage": "4",
    "bulkIgnored": "2",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-02-01T21:36:39",
    "updatedAt": "2022-02-01T21:36:39"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 156,
    "itemID": 4995,
    "maxBulkStorage": "4",
    "bulkIgnored": "2",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-02-01T21:39:42",
    "updatedAt": "2022-02-01T21:39:42"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 157,
    "itemID": 4996,
    "maxBulkStorage": "4",
    "bulkIgnored": "2",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-02-01T21:43:26",
    "updatedAt": "2022-02-01T21:43:26"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 159,
    "itemID": 4998,
    "maxBulkStorage": "4",
    "bulkIgnored": "2",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-02-01T21:49:40",
    "updatedAt": "2022-02-01T21:49:40"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 160,
    "itemID": 4999,
    "maxBulkStorage": "4",
    "bulkIgnored": "2",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-02-01T21:51:19",
    "updatedAt": "2022-02-01T21:51:19"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 161,
    "itemID": 5000,
    "maxBulkStorage": "4",
    "bulkIgnored": "2",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-02-01T21:53:55",
    "updatedAt": "2022-02-01T21:53:55"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 162,
    "itemID": 5001,
    "maxBulkStorage": "4",
    "bulkIgnored": "2",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-02-01T21:54:21",
    "updatedAt": "2022-02-01T21:54:21"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 163,
    "itemID": 5002,
    "maxBulkStorage": "4",
    "bulkIgnored": "2",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-02-01T21:56:53",
    "updatedAt": "2022-02-01T21:56:53"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 164,
    "itemID": 5003,
    "maxBulkStorage": "4",
    "bulkIgnored": "2",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-02-01T21:57:41",
    "updatedAt": "2022-02-01T21:57:41"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 165,
    "itemID": 5005,
    "maxBulkStorage": "4",
    "bulkIgnored": "2",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-02-01T22:08:19",
    "updatedAt": "2022-02-01T22:08:19"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 166,
    "itemID": 5006,
    "maxBulkStorage": "4",
    "bulkIgnored": "2",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-02-01T22:11:39",
    "updatedAt": "2022-02-01T22:11:39"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 167,
    "itemID": 5007,
    "maxBulkStorage": "4",
    "bulkIgnored": "2",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-02-01T22:15:07",
    "updatedAt": "2022-02-01T22:15:07"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 168,
    "itemID": 5008,
    "maxBulkStorage": "4",
    "bulkIgnored": "2",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-02-01T22:20:07",
    "updatedAt": "2022-02-01T22:20:07"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 169,
    "itemID": 5009,
    "maxBulkStorage": "4",
    "bulkIgnored": "2",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-02-01T22:20:21",
    "updatedAt": "2022-02-01T22:20:21"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 172,
    "itemID": 5302,
    "maxBulkStorage": "0",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-04-17T08:42:03",
    "updatedAt": "2022-04-17T08:42:03"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 177,
    "itemID": 5367,
    "maxBulkStorage": "0",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-05-11T00:40:07",
    "updatedAt": "2022-05-11T00:40:07"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 178,
    "itemID": 5368,
    "maxBulkStorage": "0",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-05-11T00:40:24",
    "updatedAt": "2022-05-11T00:40:24"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 179,
    "itemID": 5369,
    "maxBulkStorage": "0",
    "bulkIgnored": "0",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-05-11T00:41:00",
    "updatedAt": "2022-05-11T00:41:00"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 180,
    "itemID": 5432,
    "maxBulkStorage": "8",
    "bulkIgnored": "8",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-05-23T06:50:11",
    "updatedAt": "2022-05-23T06:50:11"
} as const satisfies StoragesTableRowConstraints,
{
    "table": "storages",
    "id": 181,
    "itemID": 6314,
    "maxBulkStorage": "00000",
    "bulkIgnored": "00000",
    "ignoreSelfBulkIfWearing": true,
    "createdAt": "2022-12-30T22:42:15",
    "updatedAt": "2022-12-30T22:42:15"
} as const satisfies StoragesTableRowConstraints,
 ] as const;

export const storages = hookupTableLookup(_storages);