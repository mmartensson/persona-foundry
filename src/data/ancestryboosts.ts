import { hookupTableLookup } from '../tables';

export type BoostedAbility = "Anything" | "Dexterity" | "Charisma" | "Constitution" | "Wisdom" | "Strength" | "Intelligence";

export interface AncestryboostsTableRowConstraints {
  table: 'ancestryboosts';
  id: number;
  ancestryID?: number;
  boostedAbility?: BoostedAbility;
  homebrewID?: number;
  createdAt?: string;
  updatedAt?: string;
}

export type AncestryboostsTable = typeof ancestryboosts;
export type AncestryboostsTableRow = AncestryboostsTable[number];
export type AncestryboostID = AncestryboostsTableRow['id'];

export const isAncestryboostID = (id?: number): id is AncestryboostID => !!id && !!ancestryboosts.byIdLax(id);
export const assertIsAncestryboostID = (id?: number): asserts id is AncestryboostID => { if (!isAncestryboostID(id)) throw Error('Expected a AncestryboostID; got ' + id); }

const _ancestryboosts = [
{
    "table": "ancestryboosts",
    "id": 395,
    "ancestryID": 155,
    "boostedAbility": "Anything",
    "createdAt": "2020-07-20T05:43:29",
    "updatedAt": "2020-07-20T05:43:29"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 396,
    "ancestryID": 155,
    "boostedAbility": "Dexterity",
    "createdAt": "2020-07-20T05:43:29",
    "updatedAt": "2020-07-20T05:43:29"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 397,
    "ancestryID": 155,
    "boostedAbility": "Charisma",
    "createdAt": "2020-07-20T05:43:29",
    "updatedAt": "2020-07-20T05:43:29"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 398,
    "ancestryID": 156,
    "boostedAbility": "Anything",
    "createdAt": "2020-07-20T05:43:54",
    "updatedAt": "2020-07-20T05:43:54"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 399,
    "ancestryID": 156,
    "boostedAbility": "Constitution",
    "createdAt": "2020-07-20T05:43:54",
    "updatedAt": "2020-07-20T05:43:54"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 400,
    "ancestryID": 156,
    "boostedAbility": "Wisdom",
    "createdAt": "2020-07-20T05:43:54",
    "updatedAt": "2020-07-20T05:43:54"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 401,
    "ancestryID": 157,
    "boostedAbility": "Anything",
    "createdAt": "2020-07-20T05:44:08",
    "updatedAt": "2020-07-20T05:44:08"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 402,
    "ancestryID": 157,
    "boostedAbility": "Wisdom",
    "createdAt": "2020-07-20T05:44:08",
    "updatedAt": "2020-07-20T05:44:08"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 403,
    "ancestryID": 157,
    "boostedAbility": "Strength",
    "createdAt": "2020-07-20T05:44:08",
    "updatedAt": "2020-07-20T05:44:08"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 417,
    "ancestryID": 163,
    "boostedAbility": "Constitution",
    "createdAt": "2020-07-26T04:07:20",
    "updatedAt": "2020-07-26T04:07:20"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 418,
    "ancestryID": 163,
    "boostedAbility": "Intelligence",
    "createdAt": "2020-07-26T04:07:20",
    "updatedAt": "2020-07-26T04:07:20"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 419,
    "ancestryID": 163,
    "boostedAbility": "Anything",
    "createdAt": "2020-07-26T04:07:20",
    "updatedAt": "2020-07-26T04:07:20"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 423,
    "ancestryID": 165,
    "boostedAbility": "Anything",
    "createdAt": "2020-08-06T00:37:19",
    "updatedAt": "2020-08-06T00:37:19"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 424,
    "ancestryID": 165,
    "boostedAbility": "Dexterity",
    "createdAt": "2020-08-06T00:37:19",
    "updatedAt": "2020-08-06T00:37:19"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 425,
    "ancestryID": 165,
    "boostedAbility": "Charisma",
    "createdAt": "2020-08-06T00:37:19",
    "updatedAt": "2020-08-06T00:37:19"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 428,
    "ancestryID": 167,
    "boostedAbility": "Anything",
    "createdAt": "2020-08-07T04:34:29",
    "updatedAt": "2020-08-07T04:34:29"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 429,
    "ancestryID": 167,
    "boostedAbility": "Dexterity",
    "createdAt": "2020-08-07T04:34:29",
    "updatedAt": "2020-08-07T04:34:29"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 440,
    "ancestryID": 172,
    "boostedAbility": "Anything",
    "createdAt": "2020-08-07T07:27:43",
    "updatedAt": "2020-08-07T07:27:43"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 441,
    "ancestryID": 172,
    "boostedAbility": "Strength",
    "createdAt": "2020-08-07T07:27:43",
    "updatedAt": "2020-08-07T07:27:43"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 445,
    "ancestryID": 174,
    "boostedAbility": "Anything",
    "createdAt": "2020-08-07T08:14:29",
    "updatedAt": "2020-08-07T08:14:29"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 446,
    "ancestryID": 174,
    "boostedAbility": "Dexterity",
    "createdAt": "2020-08-07T08:14:29",
    "updatedAt": "2020-08-07T08:14:29"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 447,
    "ancestryID": 174,
    "boostedAbility": "Intelligence",
    "createdAt": "2020-08-07T08:14:29",
    "updatedAt": "2020-08-07T08:14:29"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 448,
    "ancestryID": 175,
    "boostedAbility": "Dexterity",
    "createdAt": "2020-08-14T22:51:34",
    "updatedAt": "2020-08-14T22:51:34"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 449,
    "ancestryID": 175,
    "boostedAbility": "Charisma",
    "createdAt": "2020-08-14T22:51:34",
    "updatedAt": "2020-08-14T22:51:34"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 450,
    "ancestryID": 175,
    "boostedAbility": "Anything",
    "createdAt": "2020-08-14T22:51:34",
    "updatedAt": "2020-08-14T22:51:34"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 451,
    "ancestryID": 176,
    "boostedAbility": "Anything",
    "createdAt": "2020-08-23T22:16:27",
    "updatedAt": "2020-08-23T22:16:27"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 452,
    "ancestryID": 176,
    "boostedAbility": "Anything",
    "createdAt": "2020-08-23T22:16:27",
    "updatedAt": "2020-08-23T22:16:27"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 453,
    "ancestryID": 177,
    "boostedAbility": "Anything",
    "createdAt": "2020-08-23T22:44:48",
    "updatedAt": "2020-08-23T22:44:48"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 454,
    "ancestryID": 177,
    "boostedAbility": "Wisdom",
    "createdAt": "2020-08-23T22:44:48",
    "updatedAt": "2020-08-23T22:44:48"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 455,
    "ancestryID": 177,
    "boostedAbility": "Constitution",
    "createdAt": "2020-08-23T22:44:48",
    "updatedAt": "2020-08-23T22:44:48"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 456,
    "ancestryID": 178,
    "boostedAbility": "Anything",
    "createdAt": "2020-08-23T23:07:31",
    "updatedAt": "2020-08-23T23:07:31"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 457,
    "ancestryID": 178,
    "boostedAbility": "Dexterity",
    "createdAt": "2020-08-23T23:07:31",
    "updatedAt": "2020-08-23T23:07:31"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 458,
    "ancestryID": 178,
    "boostedAbility": "Intelligence",
    "createdAt": "2020-08-23T23:07:31",
    "updatedAt": "2020-08-23T23:07:31"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 459,
    "ancestryID": 179,
    "boostedAbility": "Anything",
    "createdAt": "2020-08-24T00:16:38",
    "updatedAt": "2020-08-24T00:16:38"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 460,
    "ancestryID": 179,
    "boostedAbility": "Constitution",
    "createdAt": "2020-08-24T00:16:38",
    "updatedAt": "2020-08-24T00:16:38"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 461,
    "ancestryID": 179,
    "boostedAbility": "Charisma",
    "createdAt": "2020-08-24T00:16:38",
    "updatedAt": "2020-08-24T00:16:38"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 462,
    "ancestryID": 180,
    "boostedAbility": "Anything",
    "createdAt": "2020-08-24T00:46:45",
    "updatedAt": "2020-08-24T00:46:45"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 463,
    "ancestryID": 180,
    "boostedAbility": "Charisma",
    "createdAt": "2020-08-24T00:46:45",
    "updatedAt": "2020-08-24T00:46:45"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 464,
    "ancestryID": 180,
    "boostedAbility": "Dexterity",
    "createdAt": "2020-08-24T00:46:45",
    "updatedAt": "2020-08-24T00:46:45"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 465,
    "ancestryID": 181,
    "boostedAbility": "Anything",
    "createdAt": "2020-08-24T01:21:54",
    "updatedAt": "2020-08-24T01:21:54"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 466,
    "ancestryID": 181,
    "boostedAbility": "Wisdom",
    "createdAt": "2020-08-24T01:21:54",
    "updatedAt": "2020-08-24T01:21:54"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 467,
    "ancestryID": 181,
    "boostedAbility": "Dexterity",
    "createdAt": "2020-08-24T01:21:54",
    "updatedAt": "2020-08-24T01:21:54"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 502,
    "ancestryID": 195,
    "boostedAbility": "Anything",
    "homebrewID": 79,
    "createdAt": "2020-11-22T13:39:04",
    "updatedAt": "2020-11-22T13:39:04"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 503,
    "ancestryID": 195,
    "boostedAbility": "Strength",
    "homebrewID": 79,
    "createdAt": "2020-11-22T13:39:04",
    "updatedAt": "2020-11-22T13:39:04"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 504,
    "ancestryID": 195,
    "boostedAbility": "Charisma",
    "homebrewID": 79,
    "createdAt": "2020-11-22T13:39:04",
    "updatedAt": "2020-11-22T13:39:04"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 511,
    "ancestryID": 199,
    "boostedAbility": "Anything",
    "homebrewID": 80,
    "createdAt": "2020-11-22T20:13:34",
    "updatedAt": "2020-11-22T20:13:34"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 512,
    "ancestryID": 199,
    "boostedAbility": "Dexterity",
    "homebrewID": 80,
    "createdAt": "2020-11-22T20:13:34",
    "updatedAt": "2020-11-22T20:13:34"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 513,
    "ancestryID": 199,
    "boostedAbility": "Charisma",
    "homebrewID": 80,
    "createdAt": "2020-11-22T20:13:34",
    "updatedAt": "2020-11-22T20:13:34"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 526,
    "ancestryID": 206,
    "boostedAbility": "Anything",
    "homebrewID": 83,
    "createdAt": "2020-11-24T02:32:09",
    "updatedAt": "2020-11-24T02:32:09"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 527,
    "ancestryID": 206,
    "boostedAbility": "Dexterity",
    "homebrewID": 83,
    "createdAt": "2020-11-24T02:32:09",
    "updatedAt": "2020-11-24T02:32:09"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 528,
    "ancestryID": 206,
    "boostedAbility": "Constitution",
    "homebrewID": 83,
    "createdAt": "2020-11-24T02:32:09",
    "updatedAt": "2020-11-24T02:32:09"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 529,
    "ancestryID": 207,
    "boostedAbility": "Anything",
    "homebrewID": 69,
    "createdAt": "2020-11-25T22:16:58",
    "updatedAt": "2020-11-25T22:16:58"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 530,
    "ancestryID": 207,
    "boostedAbility": "Dexterity",
    "homebrewID": 69,
    "createdAt": "2020-11-25T22:16:58",
    "updatedAt": "2020-11-25T22:16:58"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 531,
    "ancestryID": 207,
    "boostedAbility": "Wisdom",
    "homebrewID": 69,
    "createdAt": "2020-11-25T22:16:58",
    "updatedAt": "2020-11-25T22:16:58"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 532,
    "ancestryID": 208,
    "boostedAbility": "Anything",
    "homebrewID": 92,
    "createdAt": "2020-11-30T17:37:50",
    "updatedAt": "2020-11-30T17:37:50"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 533,
    "ancestryID": 208,
    "boostedAbility": "Strength",
    "homebrewID": 92,
    "createdAt": "2020-11-30T17:37:50",
    "updatedAt": "2020-11-30T17:37:50"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 534,
    "ancestryID": 208,
    "boostedAbility": "Constitution",
    "homebrewID": 92,
    "createdAt": "2020-11-30T17:37:50",
    "updatedAt": "2020-11-30T17:37:50"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 538,
    "ancestryID": 210,
    "boostedAbility": "Anything",
    "homebrewID": 101,
    "createdAt": "2020-12-22T21:35:31",
    "updatedAt": "2020-12-22T21:35:31"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 539,
    "ancestryID": 210,
    "boostedAbility": "Constitution",
    "homebrewID": 101,
    "createdAt": "2020-12-22T21:35:31",
    "updatedAt": "2020-12-22T21:35:31"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 540,
    "ancestryID": 210,
    "boostedAbility": "Intelligence",
    "homebrewID": 101,
    "createdAt": "2020-12-22T21:35:31",
    "updatedAt": "2020-12-22T21:35:31"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 605,
    "ancestryID": 219,
    "boostedAbility": "Anything",
    "homebrewID": 106,
    "createdAt": "2021-01-04T21:31:04",
    "updatedAt": "2021-01-04T21:31:04"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 606,
    "ancestryID": 219,
    "boostedAbility": "Strength",
    "homebrewID": 106,
    "createdAt": "2021-01-04T21:31:04",
    "updatedAt": "2021-01-04T21:31:04"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 607,
    "ancestryID": 219,
    "boostedAbility": "Constitution",
    "homebrewID": 106,
    "createdAt": "2021-01-04T21:31:04",
    "updatedAt": "2021-01-04T21:31:04"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 608,
    "ancestryID": 219,
    "boostedAbility": "Anything",
    "homebrewID": 106,
    "createdAt": "2021-01-04T21:31:04",
    "updatedAt": "2021-01-04T21:31:04"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 609,
    "ancestryID": 219,
    "boostedAbility": "Dexterity",
    "homebrewID": 106,
    "createdAt": "2021-01-04T21:31:04",
    "updatedAt": "2021-01-04T21:31:04"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 610,
    "ancestryID": 219,
    "boostedAbility": "Intelligence",
    "homebrewID": 106,
    "createdAt": "2021-01-04T21:31:04",
    "updatedAt": "2021-01-04T21:31:04"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 611,
    "ancestryID": 219,
    "boostedAbility": "Wisdom",
    "homebrewID": 106,
    "createdAt": "2021-01-04T21:31:04",
    "updatedAt": "2021-01-04T21:31:04"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 612,
    "ancestryID": 219,
    "boostedAbility": "Charisma",
    "homebrewID": 106,
    "createdAt": "2021-01-04T21:31:04",
    "updatedAt": "2021-01-04T21:31:04"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 618,
    "ancestryID": 223,
    "boostedAbility": "Dexterity",
    "homebrewID": 121,
    "createdAt": "2021-01-17T03:18:59",
    "updatedAt": "2021-01-17T03:18:59"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 619,
    "ancestryID": 223,
    "boostedAbility": "Wisdom",
    "homebrewID": 121,
    "createdAt": "2021-01-17T03:18:59",
    "updatedAt": "2021-01-17T03:18:59"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 620,
    "ancestryID": 223,
    "boostedAbility": "Anything",
    "homebrewID": 121,
    "createdAt": "2021-01-17T03:18:59",
    "updatedAt": "2021-01-17T03:18:59"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 637,
    "ancestryID": 226,
    "boostedAbility": "Anything",
    "homebrewID": 125,
    "createdAt": "2021-01-29T15:18:42",
    "updatedAt": "2021-01-29T15:18:42"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 638,
    "ancestryID": 226,
    "boostedAbility": "Dexterity",
    "homebrewID": 125,
    "createdAt": "2021-01-29T15:18:42",
    "updatedAt": "2021-01-29T15:18:42"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 639,
    "ancestryID": 226,
    "boostedAbility": "Constitution",
    "homebrewID": 125,
    "createdAt": "2021-01-29T15:18:42",
    "updatedAt": "2021-01-29T15:18:42"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 640,
    "ancestryID": 226,
    "boostedAbility": "Strength",
    "homebrewID": 125,
    "createdAt": "2021-01-29T15:18:42",
    "updatedAt": "2021-01-29T15:18:42"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 641,
    "ancestryID": 226,
    "boostedAbility": "Anything",
    "homebrewID": 125,
    "createdAt": "2021-01-29T15:18:42",
    "updatedAt": "2021-01-29T15:18:42"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 642,
    "ancestryID": 226,
    "boostedAbility": "Intelligence",
    "homebrewID": 125,
    "createdAt": "2021-01-29T15:18:42",
    "updatedAt": "2021-01-29T15:18:42"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 643,
    "ancestryID": 226,
    "boostedAbility": "Wisdom",
    "homebrewID": 125,
    "createdAt": "2021-01-29T15:18:42",
    "updatedAt": "2021-01-29T15:18:42"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 644,
    "ancestryID": 226,
    "boostedAbility": "Charisma",
    "homebrewID": 125,
    "createdAt": "2021-01-29T15:18:42",
    "updatedAt": "2021-01-29T15:18:42"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 655,
    "ancestryID": 231,
    "boostedAbility": "Anything",
    "homebrewID": 139,
    "createdAt": "2021-02-02T03:56:37",
    "updatedAt": "2021-02-02T03:56:37"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 659,
    "ancestryID": 233,
    "boostedAbility": "Anything",
    "homebrewID": 111,
    "createdAt": "2021-02-03T18:54:30",
    "updatedAt": "2021-02-03T18:54:30"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 660,
    "ancestryID": 233,
    "boostedAbility": "Strength",
    "homebrewID": 111,
    "createdAt": "2021-02-03T18:54:30",
    "updatedAt": "2021-02-03T18:54:30"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 661,
    "ancestryID": 233,
    "boostedAbility": "Constitution",
    "homebrewID": 111,
    "createdAt": "2021-02-03T18:54:30",
    "updatedAt": "2021-02-03T18:54:30"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 662,
    "ancestryID": 233,
    "boostedAbility": "Dexterity",
    "homebrewID": 111,
    "createdAt": "2021-02-03T18:54:30",
    "updatedAt": "2021-02-03T18:54:30"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 663,
    "ancestryID": 233,
    "boostedAbility": "Anything",
    "homebrewID": 111,
    "createdAt": "2021-02-03T18:54:30",
    "updatedAt": "2021-02-03T18:54:30"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 664,
    "ancestryID": 233,
    "boostedAbility": "Intelligence",
    "homebrewID": 111,
    "createdAt": "2021-02-03T18:54:30",
    "updatedAt": "2021-02-03T18:54:30"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 665,
    "ancestryID": 233,
    "boostedAbility": "Wisdom",
    "homebrewID": 111,
    "createdAt": "2021-02-03T18:54:30",
    "updatedAt": "2021-02-03T18:54:30"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 666,
    "ancestryID": 233,
    "boostedAbility": "Charisma",
    "homebrewID": 111,
    "createdAt": "2021-02-03T18:54:30",
    "updatedAt": "2021-02-03T18:54:30"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 697,
    "ancestryID": 244,
    "boostedAbility": "Anything",
    "homebrewID": 144,
    "createdAt": "2021-02-11T07:21:04",
    "updatedAt": "2021-02-11T07:21:04"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 698,
    "ancestryID": 244,
    "boostedAbility": "Charisma",
    "homebrewID": 144,
    "createdAt": "2021-02-11T07:21:04",
    "updatedAt": "2021-02-11T07:21:04"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 720,
    "ancestryID": 255,
    "boostedAbility": "Anything",
    "homebrewID": 144,
    "createdAt": "2021-02-17T06:09:35",
    "updatedAt": "2021-02-17T06:09:35"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 721,
    "ancestryID": 255,
    "boostedAbility": "Strength",
    "homebrewID": 144,
    "createdAt": "2021-02-17T06:09:35",
    "updatedAt": "2021-02-17T06:09:35"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 722,
    "ancestryID": 255,
    "boostedAbility": "Intelligence",
    "homebrewID": 144,
    "createdAt": "2021-02-17T06:09:35",
    "updatedAt": "2021-02-17T06:09:35"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 723,
    "ancestryID": 256,
    "boostedAbility": "Anything",
    "homebrewID": 144,
    "createdAt": "2021-02-17T16:36:17",
    "updatedAt": "2021-02-17T16:36:17"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 724,
    "ancestryID": 256,
    "boostedAbility": "Constitution",
    "homebrewID": 144,
    "createdAt": "2021-02-17T16:36:17",
    "updatedAt": "2021-02-17T16:36:17"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 758,
    "ancestryID": 269,
    "boostedAbility": "Anything",
    "createdAt": "2021-02-21T20:34:46",
    "updatedAt": "2021-02-21T20:34:46"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 759,
    "ancestryID": 269,
    "boostedAbility": "Intelligence",
    "createdAt": "2021-02-21T20:34:46",
    "updatedAt": "2021-02-21T20:34:46"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 760,
    "ancestryID": 269,
    "boostedAbility": "Dexterity",
    "createdAt": "2021-02-21T20:34:46",
    "updatedAt": "2021-02-21T20:34:46"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 767,
    "ancestryID": 274,
    "boostedAbility": "Anything",
    "createdAt": "2021-02-22T21:53:17",
    "updatedAt": "2021-02-22T21:53:17"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 768,
    "ancestryID": 274,
    "boostedAbility": "Dexterity",
    "createdAt": "2021-02-22T21:53:17",
    "updatedAt": "2021-02-22T21:53:17"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 769,
    "ancestryID": 275,
    "boostedAbility": "Anything",
    "createdAt": "2021-02-22T22:09:04",
    "updatedAt": "2021-02-22T22:09:04"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 770,
    "ancestryID": 275,
    "boostedAbility": "Constitution",
    "createdAt": "2021-02-22T22:09:04",
    "updatedAt": "2021-02-22T22:09:04"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 771,
    "ancestryID": 276,
    "boostedAbility": "Charisma",
    "createdAt": "2021-02-22T22:29:25",
    "updatedAt": "2021-02-22T22:29:25"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 772,
    "ancestryID": 276,
    "boostedAbility": "Anything",
    "createdAt": "2021-02-22T22:29:25",
    "updatedAt": "2021-02-22T22:29:25"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 773,
    "ancestryID": 277,
    "boostedAbility": "Anything",
    "createdAt": "2021-02-22T23:07:31",
    "updatedAt": "2021-02-22T23:07:31"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 774,
    "ancestryID": 277,
    "boostedAbility": "Intelligence",
    "createdAt": "2021-02-22T23:07:31",
    "updatedAt": "2021-02-22T23:07:31"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 775,
    "ancestryID": 277,
    "boostedAbility": "Dexterity",
    "createdAt": "2021-02-22T23:07:31",
    "updatedAt": "2021-02-22T23:07:31"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 776,
    "ancestryID": 278,
    "boostedAbility": "Dexterity",
    "createdAt": "2021-02-22T23:22:08",
    "updatedAt": "2021-02-22T23:22:08"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 777,
    "ancestryID": 278,
    "boostedAbility": "Anything",
    "createdAt": "2021-02-22T23:22:08",
    "updatedAt": "2021-02-22T23:22:08"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 781,
    "ancestryID": 280,
    "boostedAbility": "Charisma",
    "createdAt": "2021-02-24T19:23:05",
    "updatedAt": "2021-02-24T19:23:05"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 782,
    "ancestryID": 280,
    "boostedAbility": "Anything",
    "createdAt": "2021-02-24T19:23:05",
    "updatedAt": "2021-02-24T19:23:05"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 783,
    "ancestryID": 280,
    "boostedAbility": "Constitution",
    "createdAt": "2021-02-24T19:23:05",
    "updatedAt": "2021-02-24T19:23:05"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 786,
    "ancestryID": 282,
    "boostedAbility": "Constitution",
    "homebrewID": 160,
    "createdAt": "2021-03-01T22:44:00",
    "updatedAt": "2021-03-01T22:44:00"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 787,
    "ancestryID": 282,
    "boostedAbility": "Anything",
    "homebrewID": 160,
    "createdAt": "2021-03-01T22:44:00",
    "updatedAt": "2021-03-01T22:44:00"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 803,
    "ancestryID": 288,
    "boostedAbility": "Anything",
    "homebrewID": 174,
    "createdAt": "2021-03-28T04:05:31",
    "updatedAt": "2021-03-28T04:05:31"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 804,
    "ancestryID": 288,
    "boostedAbility": "Charisma",
    "homebrewID": 174,
    "createdAt": "2021-03-28T04:05:31",
    "updatedAt": "2021-03-28T04:05:31"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 805,
    "ancestryID": 288,
    "boostedAbility": "Dexterity",
    "homebrewID": 174,
    "createdAt": "2021-03-28T04:05:31",
    "updatedAt": "2021-03-28T04:05:31"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 840,
    "ancestryID": 305,
    "boostedAbility": "Strength",
    "homebrewID": 191,
    "createdAt": "2021-04-17T09:08:46",
    "updatedAt": "2021-04-17T09:08:46"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 841,
    "ancestryID": 305,
    "boostedAbility": "Constitution",
    "homebrewID": 191,
    "createdAt": "2021-04-17T09:08:46",
    "updatedAt": "2021-04-17T09:08:46"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 842,
    "ancestryID": 305,
    "boostedAbility": "Anything",
    "homebrewID": 191,
    "createdAt": "2021-04-17T09:08:46",
    "updatedAt": "2021-04-17T09:08:46"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 847,
    "ancestryID": 308,
    "boostedAbility": "Anything",
    "homebrewID": 181,
    "createdAt": "2021-04-21T18:01:07",
    "updatedAt": "2021-04-21T18:01:07"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 848,
    "ancestryID": 308,
    "boostedAbility": "Dexterity",
    "homebrewID": 181,
    "createdAt": "2021-04-21T18:01:07",
    "updatedAt": "2021-04-21T18:01:07"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 849,
    "ancestryID": 308,
    "boostedAbility": "Intelligence",
    "homebrewID": 181,
    "createdAt": "2021-04-21T18:01:07",
    "updatedAt": "2021-04-21T18:01:07"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 918,
    "ancestryID": 336,
    "boostedAbility": "Dexterity",
    "homebrewID": 238,
    "createdAt": "2021-05-02T11:55:46",
    "updatedAt": "2021-05-02T11:55:46"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 919,
    "ancestryID": 336,
    "boostedAbility": "Intelligence",
    "homebrewID": 238,
    "createdAt": "2021-05-02T11:55:46",
    "updatedAt": "2021-05-02T11:55:46"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 920,
    "ancestryID": 336,
    "boostedAbility": "Anything",
    "homebrewID": 238,
    "createdAt": "2021-05-02T11:55:46",
    "updatedAt": "2021-05-02T11:55:46"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 921,
    "ancestryID": 337,
    "boostedAbility": "Dexterity",
    "homebrewID": 238,
    "createdAt": "2021-05-02T11:56:45",
    "updatedAt": "2021-05-02T11:56:45"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 922,
    "ancestryID": 337,
    "boostedAbility": "Anything",
    "homebrewID": 238,
    "createdAt": "2021-05-02T11:56:45",
    "updatedAt": "2021-05-02T11:56:45"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 929,
    "ancestryID": 341,
    "boostedAbility": "Charisma",
    "homebrewID": 205,
    "createdAt": "2021-05-04T20:06:01",
    "updatedAt": "2021-05-04T20:06:01"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 930,
    "ancestryID": 341,
    "boostedAbility": "Anything",
    "homebrewID": 205,
    "createdAt": "2021-05-04T20:06:01",
    "updatedAt": "2021-05-04T20:06:01"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 989,
    "ancestryID": 363,
    "boostedAbility": "Constitution",
    "homebrewID": 259,
    "createdAt": "2021-05-13T02:51:52",
    "updatedAt": "2021-05-13T02:51:52"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 990,
    "ancestryID": 363,
    "boostedAbility": "Strength",
    "homebrewID": 259,
    "createdAt": "2021-05-13T02:51:52",
    "updatedAt": "2021-05-13T02:51:52"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1007,
    "ancestryID": 374,
    "boostedAbility": "Strength",
    "homebrewID": 138,
    "createdAt": "2021-05-28T19:31:08",
    "updatedAt": "2021-05-28T19:31:08"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1008,
    "ancestryID": 374,
    "boostedAbility": "Wisdom",
    "homebrewID": 138,
    "createdAt": "2021-05-28T19:31:08",
    "updatedAt": "2021-05-28T19:31:08"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1009,
    "ancestryID": 374,
    "boostedAbility": "Anything",
    "homebrewID": 138,
    "createdAt": "2021-05-28T19:31:08",
    "updatedAt": "2021-05-28T19:31:08"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1010,
    "ancestryID": 375,
    "boostedAbility": "Anything",
    "homebrewID": 138,
    "createdAt": "2021-05-28T19:31:40",
    "updatedAt": "2021-05-28T19:31:40"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1011,
    "ancestryID": 375,
    "boostedAbility": "Strength",
    "homebrewID": 138,
    "createdAt": "2021-05-28T19:31:40",
    "updatedAt": "2021-05-28T19:31:40"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1012,
    "ancestryID": 375,
    "boostedAbility": "Wisdom",
    "homebrewID": 138,
    "createdAt": "2021-05-28T19:31:40",
    "updatedAt": "2021-05-28T19:31:40"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1037,
    "ancestryID": 388,
    "boostedAbility": "Constitution",
    "homebrewID": 276,
    "createdAt": "2021-06-01T21:30:14",
    "updatedAt": "2021-06-01T21:30:14"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1038,
    "ancestryID": 388,
    "boostedAbility": "Strength",
    "homebrewID": 276,
    "createdAt": "2021-06-01T21:30:14",
    "updatedAt": "2021-06-01T21:30:14"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1039,
    "ancestryID": 389,
    "boostedAbility": "Strength",
    "homebrewID": 281,
    "createdAt": "2021-06-13T15:43:01",
    "updatedAt": "2021-06-13T15:43:01"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1040,
    "ancestryID": 389,
    "boostedAbility": "Anything",
    "homebrewID": 281,
    "createdAt": "2021-06-13T15:43:01",
    "updatedAt": "2021-06-13T15:43:01"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1044,
    "ancestryID": 391,
    "boostedAbility": "Intelligence",
    "homebrewID": 291,
    "createdAt": "2021-06-15T06:09:35",
    "updatedAt": "2021-06-15T06:09:35"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1045,
    "ancestryID": 391,
    "boostedAbility": "Charisma",
    "homebrewID": 291,
    "createdAt": "2021-06-15T06:09:35",
    "updatedAt": "2021-06-15T06:09:35"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1046,
    "ancestryID": 391,
    "boostedAbility": "Dexterity",
    "homebrewID": 291,
    "createdAt": "2021-06-15T06:09:35",
    "updatedAt": "2021-06-15T06:09:35"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1047,
    "ancestryID": 392,
    "boostedAbility": "Anything",
    "homebrewID": 291,
    "createdAt": "2021-06-15T21:42:04",
    "updatedAt": "2021-06-15T21:42:04"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1048,
    "ancestryID": 392,
    "boostedAbility": "Dexterity",
    "homebrewID": 291,
    "createdAt": "2021-06-15T21:42:04",
    "updatedAt": "2021-06-15T21:42:04"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1049,
    "ancestryID": 392,
    "boostedAbility": "Charisma",
    "homebrewID": 291,
    "createdAt": "2021-06-15T21:42:04",
    "updatedAt": "2021-06-15T21:42:04"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1103,
    "ancestryID": 421,
    "boostedAbility": "Anything",
    "createdAt": "2021-07-02T02:15:50",
    "updatedAt": "2021-07-02T02:15:50"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1104,
    "ancestryID": 421,
    "boostedAbility": "Constitution",
    "createdAt": "2021-07-02T02:15:50",
    "updatedAt": "2021-07-02T02:15:50"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1105,
    "ancestryID": 421,
    "boostedAbility": "Wisdom",
    "createdAt": "2021-07-02T02:15:50",
    "updatedAt": "2021-07-02T02:15:50"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1122,
    "ancestryID": 428,
    "boostedAbility": "Anything",
    "createdAt": "2021-07-02T04:26:35",
    "updatedAt": "2021-07-02T04:26:35"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1123,
    "ancestryID": 428,
    "boostedAbility": "Wisdom",
    "createdAt": "2021-07-02T04:26:35",
    "updatedAt": "2021-07-02T04:26:35"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1124,
    "ancestryID": 429,
    "boostedAbility": "Strength",
    "createdAt": "2021-07-02T04:47:24",
    "updatedAt": "2021-07-02T04:47:24"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1125,
    "ancestryID": 429,
    "boostedAbility": "Intelligence",
    "createdAt": "2021-07-02T04:47:24",
    "updatedAt": "2021-07-02T04:47:24"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1126,
    "ancestryID": 429,
    "boostedAbility": "Anything",
    "createdAt": "2021-07-02T04:47:24",
    "updatedAt": "2021-07-02T04:47:24"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1132,
    "ancestryID": 432,
    "boostedAbility": "Wisdom",
    "createdAt": "2021-07-02T04:59:17",
    "updatedAt": "2021-07-02T04:59:17"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1133,
    "ancestryID": 432,
    "boostedAbility": "Dexterity",
    "createdAt": "2021-07-02T04:59:17",
    "updatedAt": "2021-07-02T04:59:17"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1134,
    "ancestryID": 432,
    "boostedAbility": "Anything",
    "createdAt": "2021-07-02T04:59:17",
    "updatedAt": "2021-07-02T04:59:17"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1135,
    "ancestryID": 433,
    "boostedAbility": "Intelligence",
    "createdAt": "2021-07-02T05:24:42",
    "updatedAt": "2021-07-02T05:24:42"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1136,
    "ancestryID": 433,
    "boostedAbility": "Anything",
    "createdAt": "2021-07-02T05:24:42",
    "updatedAt": "2021-07-02T05:24:42"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1137,
    "ancestryID": 434,
    "boostedAbility": "Anything",
    "createdAt": "2021-07-02T05:27:38",
    "updatedAt": "2021-07-02T05:27:38"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1138,
    "ancestryID": 434,
    "boostedAbility": "Dexterity",
    "createdAt": "2021-07-02T05:27:38",
    "updatedAt": "2021-07-02T05:27:38"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1139,
    "ancestryID": 434,
    "boostedAbility": "Wisdom",
    "createdAt": "2021-07-02T05:27:38",
    "updatedAt": "2021-07-02T05:27:38"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1142,
    "ancestryID": 436,
    "boostedAbility": "Dexterity",
    "homebrewID": 319,
    "createdAt": "2021-07-03T03:23:18",
    "updatedAt": "2021-07-03T03:23:18"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1143,
    "ancestryID": 436,
    "boostedAbility": "Anything",
    "homebrewID": 319,
    "createdAt": "2021-07-03T03:23:18",
    "updatedAt": "2021-07-03T03:23:18"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1181,
    "ancestryID": 451,
    "boostedAbility": "Constitution",
    "homebrewID": 337,
    "createdAt": "2021-07-18T23:04:28",
    "updatedAt": "2021-07-18T23:04:28"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1182,
    "ancestryID": 451,
    "boostedAbility": "Anything",
    "homebrewID": 337,
    "createdAt": "2021-07-18T23:04:28",
    "updatedAt": "2021-07-18T23:04:28"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1183,
    "ancestryID": 451,
    "boostedAbility": "Strength",
    "homebrewID": 337,
    "createdAt": "2021-07-18T23:04:28",
    "updatedAt": "2021-07-18T23:04:28"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1184,
    "ancestryID": 452,
    "boostedAbility": "Strength",
    "homebrewID": 339,
    "createdAt": "2021-07-22T04:51:54",
    "updatedAt": "2021-07-22T04:51:54"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1185,
    "ancestryID": 452,
    "boostedAbility": "Wisdom",
    "homebrewID": 339,
    "createdAt": "2021-07-22T04:51:54",
    "updatedAt": "2021-07-22T04:51:54"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1186,
    "ancestryID": 452,
    "boostedAbility": "Dexterity",
    "homebrewID": 339,
    "createdAt": "2021-07-22T04:51:54",
    "updatedAt": "2021-07-22T04:51:54"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1245,
    "ancestryID": 475,
    "boostedAbility": "Anything",
    "homebrewID": 248,
    "createdAt": "2021-08-04T00:34:13",
    "updatedAt": "2021-08-04T00:34:13"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1249,
    "ancestryID": 477,
    "boostedAbility": "Anything",
    "homebrewID": 351,
    "createdAt": "2021-08-11T20:30:10",
    "updatedAt": "2021-08-11T20:30:10"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1250,
    "ancestryID": 477,
    "boostedAbility": "Strength",
    "homebrewID": 351,
    "createdAt": "2021-08-11T20:30:10",
    "updatedAt": "2021-08-11T20:30:10"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1251,
    "ancestryID": 477,
    "boostedAbility": "Wisdom",
    "homebrewID": 351,
    "createdAt": "2021-08-11T20:30:10",
    "updatedAt": "2021-08-11T20:30:10"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1262,
    "ancestryID": 483,
    "boostedAbility": "Anything",
    "homebrewID": 271,
    "createdAt": "2021-08-14T19:43:38",
    "updatedAt": "2021-08-14T19:43:38"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1263,
    "ancestryID": 483,
    "boostedAbility": "Wisdom",
    "homebrewID": 271,
    "createdAt": "2021-08-14T19:43:38",
    "updatedAt": "2021-08-14T19:43:38"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1277,
    "ancestryID": 490,
    "boostedAbility": "Wisdom",
    "homebrewID": 357,
    "createdAt": "2021-08-17T21:47:47",
    "updatedAt": "2021-08-17T21:47:47"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1278,
    "ancestryID": 490,
    "boostedAbility": "Anything",
    "homebrewID": 357,
    "createdAt": "2021-08-17T21:47:47",
    "updatedAt": "2021-08-17T21:47:47"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1315,
    "ancestryID": 513,
    "boostedAbility": "Anything",
    "homebrewID": 346,
    "createdAt": "2021-08-20T03:30:40",
    "updatedAt": "2021-08-20T03:30:40"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1316,
    "ancestryID": 513,
    "boostedAbility": "Dexterity",
    "homebrewID": 346,
    "createdAt": "2021-08-20T03:30:40",
    "updatedAt": "2021-08-20T03:30:40"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1317,
    "ancestryID": 513,
    "boostedAbility": "Charisma",
    "homebrewID": 346,
    "createdAt": "2021-08-20T03:30:40",
    "updatedAt": "2021-08-20T03:30:40"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1328,
    "ancestryID": 520,
    "boostedAbility": "Anything",
    "homebrewID": 369,
    "createdAt": "2021-08-21T08:39:05",
    "updatedAt": "2021-08-21T08:39:05"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1329,
    "ancestryID": 520,
    "boostedAbility": "Anything",
    "homebrewID": 369,
    "createdAt": "2021-08-21T08:39:05",
    "updatedAt": "2021-08-21T08:39:05"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1330,
    "ancestryID": 520,
    "boostedAbility": "Strength",
    "homebrewID": 369,
    "createdAt": "2021-08-21T08:39:05",
    "updatedAt": "2021-08-21T08:39:05"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1339,
    "ancestryID": 528,
    "boostedAbility": "Intelligence",
    "homebrewID": 368,
    "createdAt": "2021-08-22T23:21:36",
    "updatedAt": "2021-08-22T23:21:36"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1340,
    "ancestryID": 528,
    "boostedAbility": "Wisdom",
    "homebrewID": 368,
    "createdAt": "2021-08-22T23:21:36",
    "updatedAt": "2021-08-22T23:21:36"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1341,
    "ancestryID": 529,
    "boostedAbility": "Wisdom",
    "homebrewID": 351,
    "createdAt": "2021-08-23T04:03:00",
    "updatedAt": "2021-08-23T04:03:00"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1342,
    "ancestryID": 529,
    "boostedAbility": "Strength",
    "homebrewID": 351,
    "createdAt": "2021-08-23T04:03:00",
    "updatedAt": "2021-08-23T04:03:00"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1343,
    "ancestryID": 529,
    "boostedAbility": "Anything",
    "homebrewID": 351,
    "createdAt": "2021-08-23T04:03:00",
    "updatedAt": "2021-08-23T04:03:00"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1374,
    "ancestryID": 549,
    "boostedAbility": "Anything",
    "homebrewID": 386,
    "createdAt": "2021-09-13T16:10:31",
    "updatedAt": "2021-09-13T16:10:31"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1375,
    "ancestryID": 549,
    "boostedAbility": "Anything",
    "homebrewID": 386,
    "createdAt": "2021-09-13T16:10:31",
    "updatedAt": "2021-09-13T16:10:31"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1406,
    "ancestryID": 560,
    "boostedAbility": "Strength",
    "homebrewID": 393,
    "createdAt": "2021-09-18T03:50:52",
    "updatedAt": "2021-09-18T03:50:52"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1407,
    "ancestryID": 560,
    "boostedAbility": "Wisdom",
    "homebrewID": 393,
    "createdAt": "2021-09-18T03:50:52",
    "updatedAt": "2021-09-18T03:50:52"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1408,
    "ancestryID": 560,
    "boostedAbility": "Anything",
    "homebrewID": 393,
    "createdAt": "2021-09-18T03:50:52",
    "updatedAt": "2021-09-18T03:50:52"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1420,
    "ancestryID": 566,
    "boostedAbility": "Anything",
    "homebrewID": 296,
    "createdAt": "2021-09-27T20:09:08",
    "updatedAt": "2021-09-27T20:09:08"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1421,
    "ancestryID": 566,
    "boostedAbility": "Strength",
    "homebrewID": 296,
    "createdAt": "2021-09-27T20:09:08",
    "updatedAt": "2021-09-27T20:09:08"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1422,
    "ancestryID": 566,
    "boostedAbility": "Wisdom",
    "homebrewID": 296,
    "createdAt": "2021-09-27T20:09:08",
    "updatedAt": "2021-09-27T20:09:08"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1439,
    "ancestryID": 575,
    "boostedAbility": "Strength",
    "createdAt": "2021-10-05T02:09:01",
    "updatedAt": "2021-10-05T02:09:01"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1440,
    "ancestryID": 575,
    "boostedAbility": "Anything",
    "createdAt": "2021-10-05T02:09:01",
    "updatedAt": "2021-10-05T02:09:01"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1465,
    "ancestryID": 584,
    "boostedAbility": "Dexterity",
    "homebrewID": 407,
    "createdAt": "2021-10-05T15:54:30",
    "updatedAt": "2021-10-05T15:54:30"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1466,
    "ancestryID": 584,
    "boostedAbility": "Strength",
    "homebrewID": 407,
    "createdAt": "2021-10-05T15:54:30",
    "updatedAt": "2021-10-05T15:54:30"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1467,
    "ancestryID": 584,
    "boostedAbility": "Anything",
    "homebrewID": 407,
    "createdAt": "2021-10-05T15:54:30",
    "updatedAt": "2021-10-05T15:54:30"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1476,
    "ancestryID": 589,
    "boostedAbility": "Anything",
    "homebrewID": 404,
    "createdAt": "2021-10-12T17:08:41",
    "updatedAt": "2021-10-12T17:08:41"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1477,
    "ancestryID": 589,
    "boostedAbility": "Strength",
    "homebrewID": 404,
    "createdAt": "2021-10-12T17:08:41",
    "updatedAt": "2021-10-12T17:08:41"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1493,
    "ancestryID": 595,
    "boostedAbility": "Anything",
    "createdAt": "2021-10-17T00:53:43",
    "updatedAt": "2021-10-17T00:53:43"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1494,
    "ancestryID": 595,
    "boostedAbility": "Constitution",
    "createdAt": "2021-10-17T00:53:43",
    "updatedAt": "2021-10-17T00:53:43"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1495,
    "ancestryID": 595,
    "boostedAbility": "Charisma",
    "createdAt": "2021-10-17T00:53:43",
    "updatedAt": "2021-10-17T00:53:43"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1499,
    "ancestryID": 597,
    "boostedAbility": "Anything",
    "homebrewID": 391,
    "createdAt": "2021-10-20T15:33:55",
    "updatedAt": "2021-10-20T15:33:55"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1500,
    "ancestryID": 597,
    "boostedAbility": "Strength",
    "homebrewID": 391,
    "createdAt": "2021-10-20T15:33:55",
    "updatedAt": "2021-10-20T15:33:55"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1501,
    "ancestryID": 597,
    "boostedAbility": "Charisma",
    "homebrewID": 391,
    "createdAt": "2021-10-20T15:33:55",
    "updatedAt": "2021-10-20T15:33:55"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1578,
    "ancestryID": 627,
    "boostedAbility": "Anything",
    "homebrewID": 427,
    "createdAt": "2021-11-01T22:44:24",
    "updatedAt": "2021-11-01T22:44:24"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1579,
    "ancestryID": 627,
    "boostedAbility": "Dexterity",
    "homebrewID": 427,
    "createdAt": "2021-11-01T22:44:24",
    "updatedAt": "2021-11-01T22:44:24"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1580,
    "ancestryID": 627,
    "boostedAbility": "Charisma",
    "homebrewID": 427,
    "createdAt": "2021-11-01T22:44:24",
    "updatedAt": "2021-11-01T22:44:24"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1581,
    "ancestryID": 628,
    "boostedAbility": "Charisma",
    "homebrewID": 427,
    "createdAt": "2021-11-01T22:44:54",
    "updatedAt": "2021-11-01T22:44:54"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1582,
    "ancestryID": 628,
    "boostedAbility": "Constitution",
    "homebrewID": 427,
    "createdAt": "2021-11-01T22:44:54",
    "updatedAt": "2021-11-01T22:44:54"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1583,
    "ancestryID": 628,
    "boostedAbility": "Anything",
    "homebrewID": 427,
    "createdAt": "2021-11-01T22:44:54",
    "updatedAt": "2021-11-01T22:44:54"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1584,
    "ancestryID": 629,
    "boostedAbility": "Dexterity",
    "homebrewID": 427,
    "createdAt": "2021-11-01T22:45:19",
    "updatedAt": "2021-11-01T22:45:19"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1585,
    "ancestryID": 629,
    "boostedAbility": "Intelligence",
    "homebrewID": 427,
    "createdAt": "2021-11-01T22:45:19",
    "updatedAt": "2021-11-01T22:45:19"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1586,
    "ancestryID": 629,
    "boostedAbility": "Anything",
    "homebrewID": 427,
    "createdAt": "2021-11-01T22:45:19",
    "updatedAt": "2021-11-01T22:45:19"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1587,
    "ancestryID": 630,
    "boostedAbility": "Intelligence",
    "homebrewID": 427,
    "createdAt": "2021-11-01T22:45:47",
    "updatedAt": "2021-11-01T22:45:47"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1588,
    "ancestryID": 630,
    "boostedAbility": "Anything",
    "homebrewID": 427,
    "createdAt": "2021-11-01T22:45:47",
    "updatedAt": "2021-11-01T22:45:47"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1589,
    "ancestryID": 630,
    "boostedAbility": "Strength",
    "homebrewID": 427,
    "createdAt": "2021-11-01T22:45:47",
    "updatedAt": "2021-11-01T22:45:47"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1633,
    "ancestryID": 651,
    "boostedAbility": "Intelligence",
    "homebrewID": 448,
    "createdAt": "2021-11-20T19:50:51",
    "updatedAt": "2021-11-20T19:50:51"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1634,
    "ancestryID": 651,
    "boostedAbility": "Anything",
    "homebrewID": 448,
    "createdAt": "2021-11-20T19:50:51",
    "updatedAt": "2021-11-20T19:50:51"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1635,
    "ancestryID": 651,
    "boostedAbility": "Anything",
    "homebrewID": 448,
    "createdAt": "2021-11-20T19:50:51",
    "updatedAt": "2021-11-20T19:50:51"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1636,
    "ancestryID": 651,
    "boostedAbility": "Wisdom",
    "homebrewID": 448,
    "createdAt": "2021-11-20T19:50:51",
    "updatedAt": "2021-11-20T19:50:51"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1643,
    "ancestryID": 654,
    "boostedAbility": "Anything",
    "homebrewID": 474,
    "createdAt": "2021-12-20T03:53:19",
    "updatedAt": "2021-12-20T03:53:19"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1644,
    "ancestryID": 654,
    "boostedAbility": "Wisdom",
    "homebrewID": 474,
    "createdAt": "2021-12-20T03:53:19",
    "updatedAt": "2021-12-20T03:53:19"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1654,
    "ancestryID": 658,
    "boostedAbility": "Anything",
    "homebrewID": 391,
    "createdAt": "2021-12-23T23:28:54",
    "updatedAt": "2021-12-23T23:28:54"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1655,
    "ancestryID": 658,
    "boostedAbility": "Constitution",
    "homebrewID": 391,
    "createdAt": "2021-12-23T23:28:54",
    "updatedAt": "2021-12-23T23:28:54"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1656,
    "ancestryID": 658,
    "boostedAbility": "Strength",
    "homebrewID": 391,
    "createdAt": "2021-12-23T23:28:54",
    "updatedAt": "2021-12-23T23:28:54"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1657,
    "ancestryID": 659,
    "boostedAbility": "Anything",
    "homebrewID": 391,
    "createdAt": "2021-12-24T03:32:46",
    "updatedAt": "2021-12-24T03:32:46"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1658,
    "ancestryID": 659,
    "boostedAbility": "Constitution",
    "homebrewID": 391,
    "createdAt": "2021-12-24T03:32:46",
    "updatedAt": "2021-12-24T03:32:46"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1659,
    "ancestryID": 659,
    "boostedAbility": "Charisma",
    "homebrewID": 391,
    "createdAt": "2021-12-24T03:32:46",
    "updatedAt": "2021-12-24T03:32:46"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1660,
    "ancestryID": 660,
    "boostedAbility": "Anything",
    "homebrewID": 391,
    "createdAt": "2021-12-24T05:42:23",
    "updatedAt": "2021-12-24T05:42:23"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1661,
    "ancestryID": 660,
    "boostedAbility": "Dexterity",
    "homebrewID": 391,
    "createdAt": "2021-12-24T05:42:23",
    "updatedAt": "2021-12-24T05:42:23"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1662,
    "ancestryID": 660,
    "boostedAbility": "Wisdom",
    "homebrewID": 391,
    "createdAt": "2021-12-24T05:42:23",
    "updatedAt": "2021-12-24T05:42:23"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1667,
    "ancestryID": 663,
    "boostedAbility": "Constitution",
    "homebrewID": 427,
    "createdAt": "2021-12-28T00:23:55",
    "updatedAt": "2021-12-28T00:23:55"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1668,
    "ancestryID": 663,
    "boostedAbility": "Anything",
    "homebrewID": 427,
    "createdAt": "2021-12-28T00:23:55",
    "updatedAt": "2021-12-28T00:23:55"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1669,
    "ancestryID": 663,
    "boostedAbility": "Wisdom",
    "homebrewID": 427,
    "createdAt": "2021-12-28T00:23:55",
    "updatedAt": "2021-12-28T00:23:55"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1670,
    "ancestryID": 664,
    "boostedAbility": "Strength",
    "homebrewID": 427,
    "createdAt": "2021-12-28T00:31:08",
    "updatedAt": "2021-12-28T00:31:08"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1671,
    "ancestryID": 664,
    "boostedAbility": "Wisdom",
    "homebrewID": 427,
    "createdAt": "2021-12-28T00:31:08",
    "updatedAt": "2021-12-28T00:31:08"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1672,
    "ancestryID": 664,
    "boostedAbility": "Anything",
    "homebrewID": 427,
    "createdAt": "2021-12-28T00:31:08",
    "updatedAt": "2021-12-28T00:31:08"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1682,
    "ancestryID": 668,
    "boostedAbility": "Intelligence",
    "homebrewID": 487,
    "createdAt": "2022-01-07T09:26:26",
    "updatedAt": "2022-01-07T09:26:26"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1695,
    "ancestryID": 677,
    "boostedAbility": "Charisma",
    "homebrewID": 478,
    "createdAt": "2022-01-07T21:55:35",
    "updatedAt": "2022-01-07T21:55:35"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1696,
    "ancestryID": 677,
    "boostedAbility": "Anything",
    "homebrewID": 478,
    "createdAt": "2022-01-07T21:55:35",
    "updatedAt": "2022-01-07T21:55:35"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1707,
    "ancestryID": 683,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T15:43:00",
    "updatedAt": "2022-01-12T15:43:00"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1708,
    "ancestryID": 683,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T15:43:00",
    "updatedAt": "2022-01-12T15:43:00"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1709,
    "ancestryID": 684,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T15:51:48",
    "updatedAt": "2022-01-12T15:51:48"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1710,
    "ancestryID": 684,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T15:51:48",
    "updatedAt": "2022-01-12T15:51:48"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1711,
    "ancestryID": 685,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T15:52:39",
    "updatedAt": "2022-01-12T15:52:39"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1712,
    "ancestryID": 685,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T15:52:39",
    "updatedAt": "2022-01-12T15:52:39"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1717,
    "ancestryID": 688,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:40:56",
    "updatedAt": "2022-01-12T16:40:56"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1718,
    "ancestryID": 688,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:40:56",
    "updatedAt": "2022-01-12T16:40:56"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1719,
    "ancestryID": 689,
    "boostedAbility": "Constitution",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:41:52",
    "updatedAt": "2022-01-12T16:41:52"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1720,
    "ancestryID": 689,
    "boostedAbility": "Wisdom",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:41:52",
    "updatedAt": "2022-01-12T16:41:52"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1721,
    "ancestryID": 689,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:41:52",
    "updatedAt": "2022-01-12T16:41:52"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1722,
    "ancestryID": 690,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:45:12",
    "updatedAt": "2022-01-12T16:45:12"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1723,
    "ancestryID": 690,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:45:12",
    "updatedAt": "2022-01-12T16:45:12"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1724,
    "ancestryID": 691,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:46:34",
    "updatedAt": "2022-01-12T16:46:34"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1725,
    "ancestryID": 691,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:46:34",
    "updatedAt": "2022-01-12T16:46:34"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1726,
    "ancestryID": 692,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:48:01",
    "updatedAt": "2022-01-12T16:48:01"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1727,
    "ancestryID": 692,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:48:01",
    "updatedAt": "2022-01-12T16:48:01"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1728,
    "ancestryID": 693,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:49:03",
    "updatedAt": "2022-01-12T16:49:03"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1729,
    "ancestryID": 693,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:49:03",
    "updatedAt": "2022-01-12T16:49:03"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1732,
    "ancestryID": 695,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:50:45",
    "updatedAt": "2022-01-12T16:50:45"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1733,
    "ancestryID": 695,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:50:45",
    "updatedAt": "2022-01-12T16:50:45"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1738,
    "ancestryID": 698,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:54:01",
    "updatedAt": "2022-01-12T16:54:01"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1739,
    "ancestryID": 698,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:54:01",
    "updatedAt": "2022-01-12T16:54:01"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1740,
    "ancestryID": 699,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:54:33",
    "updatedAt": "2022-01-12T16:54:33"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1741,
    "ancestryID": 699,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:54:33",
    "updatedAt": "2022-01-12T16:54:33"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1746,
    "ancestryID": 702,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:57:19",
    "updatedAt": "2022-01-12T16:57:19"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1747,
    "ancestryID": 702,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:57:19",
    "updatedAt": "2022-01-12T16:57:19"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1748,
    "ancestryID": 703,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:57:55",
    "updatedAt": "2022-01-12T16:57:55"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1749,
    "ancestryID": 703,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:57:55",
    "updatedAt": "2022-01-12T16:57:55"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1752,
    "ancestryID": 705,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:59:27",
    "updatedAt": "2022-01-12T16:59:27"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1753,
    "ancestryID": 705,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:59:27",
    "updatedAt": "2022-01-12T16:59:27"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1754,
    "ancestryID": 706,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T17:01:00",
    "updatedAt": "2022-01-12T17:01:00"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1755,
    "ancestryID": 706,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T17:01:00",
    "updatedAt": "2022-01-12T17:01:00"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1756,
    "ancestryID": 707,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T19:22:58",
    "updatedAt": "2022-01-12T19:22:58"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1757,
    "ancestryID": 707,
    "boostedAbility": "Anything",
    "homebrewID": 491,
    "createdAt": "2022-01-12T19:22:58",
    "updatedAt": "2022-01-12T19:22:58"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1759,
    "ancestryID": 709,
    "boostedAbility": "Anything",
    "homebrewID": 348,
    "createdAt": "2022-01-28T00:30:54",
    "updatedAt": "2022-01-28T00:30:54"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1772,
    "ancestryID": 715,
    "boostedAbility": "Charisma",
    "homebrewID": 512,
    "createdAt": "2022-01-31T00:49:58",
    "updatedAt": "2022-01-31T00:49:58"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1773,
    "ancestryID": 715,
    "boostedAbility": "Anything",
    "homebrewID": 512,
    "createdAt": "2022-01-31T00:49:58",
    "updatedAt": "2022-01-31T00:49:58"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1774,
    "ancestryID": 715,
    "boostedAbility": "Intelligence",
    "homebrewID": 512,
    "createdAt": "2022-01-31T00:49:58",
    "updatedAt": "2022-01-31T00:49:58"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1809,
    "ancestryID": 730,
    "boostedAbility": "Anything",
    "homebrewID": 506,
    "createdAt": "2022-02-06T17:27:20",
    "updatedAt": "2022-02-06T17:27:20"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1810,
    "ancestryID": 730,
    "boostedAbility": "Intelligence",
    "homebrewID": 506,
    "createdAt": "2022-02-06T17:27:20",
    "updatedAt": "2022-02-06T17:27:20"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1811,
    "ancestryID": 730,
    "boostedAbility": "Dexterity",
    "homebrewID": 506,
    "createdAt": "2022-02-06T17:27:20",
    "updatedAt": "2022-02-06T17:27:20"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1812,
    "ancestryID": 731,
    "boostedAbility": "Anything",
    "homebrewID": 506,
    "createdAt": "2022-02-06T18:07:56",
    "updatedAt": "2022-02-06T18:07:56"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1813,
    "ancestryID": 731,
    "boostedAbility": "Anything",
    "homebrewID": 506,
    "createdAt": "2022-02-06T18:07:56",
    "updatedAt": "2022-02-06T18:07:56"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1819,
    "ancestryID": 734,
    "boostedAbility": "Intelligence",
    "homebrewID": 521,
    "createdAt": "2022-02-07T02:57:30",
    "updatedAt": "2022-02-07T02:57:30"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1820,
    "ancestryID": 734,
    "boostedAbility": "Anything",
    "homebrewID": 521,
    "createdAt": "2022-02-07T02:57:30",
    "updatedAt": "2022-02-07T02:57:30"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1821,
    "ancestryID": 734,
    "boostedAbility": "Dexterity",
    "homebrewID": 521,
    "createdAt": "2022-02-07T02:57:30",
    "updatedAt": "2022-02-07T02:57:30"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1822,
    "ancestryID": 735,
    "boostedAbility": "Strength",
    "homebrewID": 506,
    "createdAt": "2022-02-07T06:33:17",
    "updatedAt": "2022-02-07T06:33:17"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1823,
    "ancestryID": 735,
    "boostedAbility": "Anything",
    "homebrewID": 506,
    "createdAt": "2022-02-07T06:33:17",
    "updatedAt": "2022-02-07T06:33:17"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1824,
    "ancestryID": 735,
    "boostedAbility": "Anything",
    "homebrewID": 506,
    "createdAt": "2022-02-07T06:33:17",
    "updatedAt": "2022-02-07T06:33:17"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1825,
    "ancestryID": 736,
    "boostedAbility": "Dexterity",
    "homebrewID": 516,
    "createdAt": "2022-02-08T18:03:56",
    "updatedAt": "2022-02-08T18:03:56"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1826,
    "ancestryID": 736,
    "boostedAbility": "Intelligence",
    "homebrewID": 516,
    "createdAt": "2022-02-08T18:03:56",
    "updatedAt": "2022-02-08T18:03:56"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1827,
    "ancestryID": 736,
    "boostedAbility": "Anything",
    "homebrewID": 516,
    "createdAt": "2022-02-08T18:03:56",
    "updatedAt": "2022-02-08T18:03:56"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1829,
    "ancestryID": 738,
    "boostedAbility": "Anything",
    "homebrewID": 326,
    "createdAt": "2022-02-17T05:21:30",
    "updatedAt": "2022-02-17T05:21:30"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1830,
    "ancestryID": 738,
    "boostedAbility": "Strength",
    "homebrewID": 326,
    "createdAt": "2022-02-17T05:21:30",
    "updatedAt": "2022-02-17T05:21:30"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1835,
    "ancestryID": 742,
    "boostedAbility": "Wisdom",
    "homebrewID": 326,
    "createdAt": "2022-02-20T22:55:32",
    "updatedAt": "2022-02-20T22:55:32"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1836,
    "ancestryID": 742,
    "boostedAbility": "Anything",
    "homebrewID": 326,
    "createdAt": "2022-02-20T22:55:32",
    "updatedAt": "2022-02-20T22:55:32"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1843,
    "ancestryID": 747,
    "boostedAbility": "Anything",
    "homebrewID": 326,
    "createdAt": "2022-02-21T00:46:59",
    "updatedAt": "2022-02-21T00:46:59"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1844,
    "ancestryID": 747,
    "boostedAbility": "Charisma",
    "homebrewID": 326,
    "createdAt": "2022-02-21T00:46:59",
    "updatedAt": "2022-02-21T00:46:59"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1862,
    "ancestryID": 757,
    "boostedAbility": "Intelligence",
    "homebrewID": 541,
    "createdAt": "2022-03-02T11:46:21",
    "updatedAt": "2022-03-02T11:46:21"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1863,
    "ancestryID": 757,
    "boostedAbility": "Anything",
    "homebrewID": 541,
    "createdAt": "2022-03-02T11:46:21",
    "updatedAt": "2022-03-02T11:46:21"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1864,
    "ancestryID": 757,
    "boostedAbility": "Anything",
    "homebrewID": 541,
    "createdAt": "2022-03-02T11:46:21",
    "updatedAt": "2022-03-02T11:46:21"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1897,
    "ancestryID": 768,
    "boostedAbility": "Charisma",
    "homebrewID": 541,
    "createdAt": "2022-03-04T02:51:17",
    "updatedAt": "2022-03-04T02:51:17"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1898,
    "ancestryID": 768,
    "boostedAbility": "Wisdom",
    "homebrewID": 541,
    "createdAt": "2022-03-04T02:51:17",
    "updatedAt": "2022-03-04T02:51:17"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1899,
    "ancestryID": 768,
    "boostedAbility": "Dexterity",
    "homebrewID": 541,
    "createdAt": "2022-03-04T02:51:17",
    "updatedAt": "2022-03-04T02:51:17"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1900,
    "ancestryID": 768,
    "boostedAbility": "Anything",
    "homebrewID": 541,
    "createdAt": "2022-03-04T02:51:17",
    "updatedAt": "2022-03-04T02:51:17"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1922,
    "ancestryID": 776,
    "boostedAbility": "Charisma",
    "homebrewID": 541,
    "createdAt": "2022-03-04T22:48:07",
    "updatedAt": "2022-03-04T22:48:07"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1923,
    "ancestryID": 776,
    "boostedAbility": "Wisdom",
    "homebrewID": 541,
    "createdAt": "2022-03-04T22:48:07",
    "updatedAt": "2022-03-04T22:48:07"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1924,
    "ancestryID": 776,
    "boostedAbility": "Anything",
    "homebrewID": 541,
    "createdAt": "2022-03-04T22:48:07",
    "updatedAt": "2022-03-04T22:48:07"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1931,
    "ancestryID": 779,
    "boostedAbility": "Strength",
    "homebrewID": 541,
    "createdAt": "2022-03-06T03:01:26",
    "updatedAt": "2022-03-06T03:01:26"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1932,
    "ancestryID": 779,
    "boostedAbility": "Anything",
    "homebrewID": 541,
    "createdAt": "2022-03-06T03:01:26",
    "updatedAt": "2022-03-06T03:01:26"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1933,
    "ancestryID": 779,
    "boostedAbility": "Anything",
    "homebrewID": 541,
    "createdAt": "2022-03-06T03:01:26",
    "updatedAt": "2022-03-06T03:01:26"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1957,
    "ancestryID": 790,
    "boostedAbility": "Anything",
    "homebrewID": 557,
    "createdAt": "2022-03-13T16:28:54",
    "updatedAt": "2022-03-13T16:28:54"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1958,
    "ancestryID": 790,
    "boostedAbility": "Anything",
    "homebrewID": 557,
    "createdAt": "2022-03-13T16:28:54",
    "updatedAt": "2022-03-13T16:28:54"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1977,
    "ancestryID": 799,
    "boostedAbility": "Anything",
    "homebrewID": 587,
    "createdAt": "2022-04-02T11:53:36",
    "updatedAt": "2022-04-02T11:53:36"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1978,
    "ancestryID": 799,
    "boostedAbility": "Dexterity",
    "homebrewID": 587,
    "createdAt": "2022-04-02T11:53:36",
    "updatedAt": "2022-04-02T11:53:36"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 1979,
    "ancestryID": 799,
    "boostedAbility": "Intelligence",
    "homebrewID": 587,
    "createdAt": "2022-04-02T11:53:36",
    "updatedAt": "2022-04-02T11:53:36"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2011,
    "ancestryID": 815,
    "boostedAbility": "Anything",
    "homebrewID": 553,
    "createdAt": "2022-04-15T22:19:26",
    "updatedAt": "2022-04-15T22:19:26"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2012,
    "ancestryID": 815,
    "boostedAbility": "Strength",
    "homebrewID": 553,
    "createdAt": "2022-04-15T22:19:26",
    "updatedAt": "2022-04-15T22:19:26"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2013,
    "ancestryID": 815,
    "boostedAbility": "Intelligence",
    "homebrewID": 553,
    "createdAt": "2022-04-15T22:19:26",
    "updatedAt": "2022-04-15T22:19:26"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2014,
    "ancestryID": 816,
    "boostedAbility": "Wisdom",
    "homebrewID": 553,
    "createdAt": "2022-04-15T22:49:35",
    "updatedAt": "2022-04-15T22:49:35"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2015,
    "ancestryID": 816,
    "boostedAbility": "Charisma",
    "homebrewID": 553,
    "createdAt": "2022-04-15T22:49:35",
    "updatedAt": "2022-04-15T22:49:35"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2016,
    "ancestryID": 816,
    "boostedAbility": "Anything",
    "homebrewID": 553,
    "createdAt": "2022-04-15T22:49:35",
    "updatedAt": "2022-04-15T22:49:35"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2071,
    "ancestryID": 835,
    "boostedAbility": "Constitution",
    "homebrewID": 602,
    "createdAt": "2022-04-19T19:45:08",
    "updatedAt": "2022-04-19T19:45:08"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2072,
    "ancestryID": 835,
    "boostedAbility": "Strength",
    "homebrewID": 602,
    "createdAt": "2022-04-19T19:45:08",
    "updatedAt": "2022-04-19T19:45:08"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2073,
    "ancestryID": 835,
    "boostedAbility": "Anything",
    "homebrewID": 602,
    "createdAt": "2022-04-19T19:45:08",
    "updatedAt": "2022-04-19T19:45:08"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2086,
    "ancestryID": 840,
    "boostedAbility": "Anything",
    "homebrewID": 599,
    "createdAt": "2022-04-19T21:47:07",
    "updatedAt": "2022-04-19T21:47:07"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2087,
    "ancestryID": 840,
    "boostedAbility": "Constitution",
    "homebrewID": 599,
    "createdAt": "2022-04-19T21:47:07",
    "updatedAt": "2022-04-19T21:47:07"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2088,
    "ancestryID": 840,
    "boostedAbility": "Wisdom",
    "homebrewID": 599,
    "createdAt": "2022-04-19T21:47:07",
    "updatedAt": "2022-04-19T21:47:07"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2101,
    "ancestryID": 847,
    "boostedAbility": "Dexterity",
    "createdAt": "2022-04-27T18:40:12",
    "updatedAt": "2022-04-27T18:40:12"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2102,
    "ancestryID": 847,
    "boostedAbility": "Charisma",
    "createdAt": "2022-04-27T18:40:12",
    "updatedAt": "2022-04-27T18:40:12"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2103,
    "ancestryID": 847,
    "boostedAbility": "Anything",
    "createdAt": "2022-04-27T18:40:12",
    "updatedAt": "2022-04-27T18:40:12"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2117,
    "ancestryID": 855,
    "boostedAbility": "Anything",
    "homebrewID": 435,
    "createdAt": "2022-05-03T08:33:20",
    "updatedAt": "2022-05-03T08:33:20"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2118,
    "ancestryID": 855,
    "boostedAbility": "Strength",
    "homebrewID": 435,
    "createdAt": "2022-05-03T08:33:20",
    "updatedAt": "2022-05-03T08:33:20"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2122,
    "ancestryID": 857,
    "boostedAbility": "Constitution",
    "homebrewID": 435,
    "createdAt": "2022-05-12T11:05:30",
    "updatedAt": "2022-05-12T11:05:30"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2123,
    "ancestryID": 857,
    "boostedAbility": "Anything",
    "homebrewID": 435,
    "createdAt": "2022-05-12T11:05:30",
    "updatedAt": "2022-05-12T11:05:30"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2127,
    "ancestryID": 859,
    "boostedAbility": "Anything",
    "homebrewID": 541,
    "createdAt": "2022-05-15T03:57:53",
    "updatedAt": "2022-05-15T03:57:53"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2128,
    "ancestryID": 859,
    "boostedAbility": "Anything",
    "homebrewID": 541,
    "createdAt": "2022-05-15T03:57:53",
    "updatedAt": "2022-05-15T03:57:53"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2129,
    "ancestryID": 859,
    "boostedAbility": "Constitution",
    "homebrewID": 541,
    "createdAt": "2022-05-15T03:57:53",
    "updatedAt": "2022-05-15T03:57:53"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2140,
    "ancestryID": 865,
    "boostedAbility": "Dexterity",
    "homebrewID": 618,
    "createdAt": "2022-05-16T19:41:15",
    "updatedAt": "2022-05-16T19:41:15"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2141,
    "ancestryID": 865,
    "boostedAbility": "Anything",
    "homebrewID": 618,
    "createdAt": "2022-05-16T19:41:15",
    "updatedAt": "2022-05-16T19:41:15"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2142,
    "ancestryID": 865,
    "boostedAbility": "Charisma",
    "homebrewID": 618,
    "createdAt": "2022-05-16T19:41:15",
    "updatedAt": "2022-05-16T19:41:15"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2161,
    "ancestryID": 872,
    "boostedAbility": "Constitution",
    "homebrewID": 526,
    "createdAt": "2022-05-20T02:52:12",
    "updatedAt": "2022-05-20T02:52:12"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2213,
    "ancestryID": 890,
    "boostedAbility": "Strength",
    "homebrewID": 541,
    "createdAt": "2022-05-25T11:40:44",
    "updatedAt": "2022-05-25T11:40:44"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2214,
    "ancestryID": 890,
    "boostedAbility": "Wisdom",
    "homebrewID": 541,
    "createdAt": "2022-05-25T11:40:44",
    "updatedAt": "2022-05-25T11:40:44"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2215,
    "ancestryID": 890,
    "boostedAbility": "Anything",
    "homebrewID": 541,
    "createdAt": "2022-05-25T11:40:44",
    "updatedAt": "2022-05-25T11:40:44"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2221,
    "ancestryID": 893,
    "boostedAbility": "Charisma",
    "homebrewID": 459,
    "createdAt": "2022-06-05T04:36:57",
    "updatedAt": "2022-06-05T04:36:57"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2222,
    "ancestryID": 893,
    "boostedAbility": "Anything",
    "homebrewID": 459,
    "createdAt": "2022-06-05T04:36:57",
    "updatedAt": "2022-06-05T04:36:57"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2223,
    "ancestryID": 893,
    "boostedAbility": "Dexterity",
    "homebrewID": 459,
    "createdAt": "2022-06-05T04:36:57",
    "updatedAt": "2022-06-05T04:36:57"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2252,
    "ancestryID": 904,
    "boostedAbility": "Wisdom",
    "homebrewID": 643,
    "createdAt": "2022-06-17T03:31:46",
    "updatedAt": "2022-06-17T03:31:46"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2253,
    "ancestryID": 904,
    "boostedAbility": "Anything",
    "homebrewID": 643,
    "createdAt": "2022-06-17T03:31:46",
    "updatedAt": "2022-06-17T03:31:46"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2257,
    "ancestryID": 906,
    "boostedAbility": "Constitution",
    "homebrewID": 541,
    "createdAt": "2022-06-20T16:54:07",
    "updatedAt": "2022-06-20T16:54:07"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2258,
    "ancestryID": 906,
    "boostedAbility": "Anything",
    "homebrewID": 541,
    "createdAt": "2022-06-20T16:54:07",
    "updatedAt": "2022-06-20T16:54:07"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2259,
    "ancestryID": 906,
    "boostedAbility": "Charisma",
    "homebrewID": 541,
    "createdAt": "2022-06-20T16:54:07",
    "updatedAt": "2022-06-20T16:54:07"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2272,
    "ancestryID": 911,
    "boostedAbility": "Charisma",
    "homebrewID": 651,
    "createdAt": "2022-06-27T15:24:51",
    "updatedAt": "2022-06-27T15:24:51"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2273,
    "ancestryID": 911,
    "boostedAbility": "Dexterity",
    "homebrewID": 651,
    "createdAt": "2022-06-27T15:24:51",
    "updatedAt": "2022-06-27T15:24:51"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2274,
    "ancestryID": 911,
    "boostedAbility": "Anything",
    "homebrewID": 651,
    "createdAt": "2022-06-27T15:24:51",
    "updatedAt": "2022-06-27T15:24:51"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2322,
    "ancestryID": 936,
    "boostedAbility": "Anything",
    "homebrewID": 655,
    "createdAt": "2022-07-05T19:39:17",
    "updatedAt": "2022-07-05T19:39:17"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2323,
    "ancestryID": 936,
    "boostedAbility": "Anything",
    "homebrewID": 655,
    "createdAt": "2022-07-05T19:39:17",
    "updatedAt": "2022-07-05T19:39:17"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2332,
    "ancestryID": 941,
    "boostedAbility": "Anything",
    "homebrewID": 657,
    "createdAt": "2022-07-05T23:45:49",
    "updatedAt": "2022-07-05T23:45:49"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2333,
    "ancestryID": 941,
    "boostedAbility": "Anything",
    "homebrewID": 657,
    "createdAt": "2022-07-05T23:45:49",
    "updatedAt": "2022-07-05T23:45:49"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2346,
    "ancestryID": 946,
    "boostedAbility": "Dexterity",
    "homebrewID": 227,
    "createdAt": "2022-07-07T22:33:38",
    "updatedAt": "2022-07-07T22:33:38"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2347,
    "ancestryID": 946,
    "boostedAbility": "Wisdom",
    "homebrewID": 227,
    "createdAt": "2022-07-07T22:33:38",
    "updatedAt": "2022-07-07T22:33:38"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2348,
    "ancestryID": 946,
    "boostedAbility": "Anything",
    "homebrewID": 227,
    "createdAt": "2022-07-07T22:33:38",
    "updatedAt": "2022-07-07T22:33:38"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2353,
    "ancestryID": 949,
    "boostedAbility": "Anything",
    "homebrewID": 526,
    "createdAt": "2022-07-15T00:41:49",
    "updatedAt": "2022-07-15T00:41:49"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2354,
    "ancestryID": 949,
    "boostedAbility": "Intelligence",
    "homebrewID": 526,
    "createdAt": "2022-07-15T00:41:49",
    "updatedAt": "2022-07-15T00:41:49"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2361,
    "ancestryID": 953,
    "boostedAbility": "Anything",
    "homebrewID": 416,
    "createdAt": "2022-07-28T04:20:14",
    "updatedAt": "2022-07-28T04:20:14"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2362,
    "ancestryID": 953,
    "boostedAbility": "Anything",
    "homebrewID": 416,
    "createdAt": "2022-07-28T04:20:14",
    "updatedAt": "2022-07-28T04:20:14"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2363,
    "ancestryID": 954,
    "boostedAbility": "Anything",
    "homebrewID": 526,
    "createdAt": "2022-08-08T03:00:45",
    "updatedAt": "2022-08-08T03:00:45"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2364,
    "ancestryID": 954,
    "boostedAbility": "Anything",
    "homebrewID": 526,
    "createdAt": "2022-08-08T03:00:45",
    "updatedAt": "2022-08-08T03:00:45"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2374,
    "ancestryID": 958,
    "boostedAbility": "Wisdom",
    "homebrewID": 680,
    "createdAt": "2022-08-08T23:43:48",
    "updatedAt": "2022-08-08T23:43:48"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2375,
    "ancestryID": 958,
    "boostedAbility": "Anything",
    "homebrewID": 680,
    "createdAt": "2022-08-08T23:43:48",
    "updatedAt": "2022-08-08T23:43:48"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2376,
    "ancestryID": 958,
    "boostedAbility": "Dexterity",
    "homebrewID": 680,
    "createdAt": "2022-08-08T23:43:48",
    "updatedAt": "2022-08-08T23:43:48"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2386,
    "ancestryID": 963,
    "boostedAbility": "Anything",
    "homebrewID": 690,
    "createdAt": "2022-08-23T05:17:02",
    "updatedAt": "2022-08-23T05:17:02"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2387,
    "ancestryID": 963,
    "boostedAbility": "Dexterity",
    "homebrewID": 690,
    "createdAt": "2022-08-23T05:17:02",
    "updatedAt": "2022-08-23T05:17:02"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2388,
    "ancestryID": 964,
    "boostedAbility": "Charisma",
    "homebrewID": 690,
    "createdAt": "2022-08-23T05:17:54",
    "updatedAt": "2022-08-23T05:17:54"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2389,
    "ancestryID": 964,
    "boostedAbility": "Strength",
    "homebrewID": 690,
    "createdAt": "2022-08-23T05:17:54",
    "updatedAt": "2022-08-23T05:17:54"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2390,
    "ancestryID": 964,
    "boostedAbility": "Anything",
    "homebrewID": 690,
    "createdAt": "2022-08-23T05:17:54",
    "updatedAt": "2022-08-23T05:17:54"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2391,
    "ancestryID": 965,
    "boostedAbility": "Anything",
    "homebrewID": 690,
    "createdAt": "2022-08-23T05:18:11",
    "updatedAt": "2022-08-23T05:18:11"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2392,
    "ancestryID": 965,
    "boostedAbility": "Dexterity",
    "homebrewID": 690,
    "createdAt": "2022-08-23T05:18:11",
    "updatedAt": "2022-08-23T05:18:11"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2393,
    "ancestryID": 966,
    "boostedAbility": "Constitution",
    "homebrewID": 690,
    "createdAt": "2022-08-23T05:20:09",
    "updatedAt": "2022-08-23T05:20:09"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2394,
    "ancestryID": 966,
    "boostedAbility": "Anything",
    "homebrewID": 690,
    "createdAt": "2022-08-23T05:20:09",
    "updatedAt": "2022-08-23T05:20:09"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2395,
    "ancestryID": 966,
    "boostedAbility": "Anything",
    "homebrewID": 690,
    "createdAt": "2022-08-23T05:20:09",
    "updatedAt": "2022-08-23T05:20:09"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2422,
    "ancestryID": 980,
    "boostedAbility": "Anything",
    "homebrewID": 699,
    "createdAt": "2022-08-30T23:21:21",
    "updatedAt": "2022-08-30T23:21:21"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2423,
    "ancestryID": 980,
    "boostedAbility": "Anything",
    "homebrewID": 699,
    "createdAt": "2022-08-30T23:21:21",
    "updatedAt": "2022-08-30T23:21:21"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2427,
    "ancestryID": 982,
    "boostedAbility": "Anything",
    "homebrewID": 699,
    "createdAt": "2022-08-31T01:47:36",
    "updatedAt": "2022-08-31T01:47:36"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2428,
    "ancestryID": 982,
    "boostedAbility": "Dexterity",
    "homebrewID": 699,
    "createdAt": "2022-08-31T01:47:36",
    "updatedAt": "2022-08-31T01:47:36"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2429,
    "ancestryID": 982,
    "boostedAbility": "Anything",
    "homebrewID": 699,
    "createdAt": "2022-08-31T01:47:36",
    "updatedAt": "2022-08-31T01:47:36"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2432,
    "ancestryID": 984,
    "boostedAbility": "Anything",
    "homebrewID": 699,
    "createdAt": "2022-09-03T16:14:34",
    "updatedAt": "2022-09-03T16:14:34"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2433,
    "ancestryID": 984,
    "boostedAbility": "Anything",
    "homebrewID": 699,
    "createdAt": "2022-09-03T16:14:34",
    "updatedAt": "2022-09-03T16:14:34"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2437,
    "ancestryID": 986,
    "boostedAbility": "Strength",
    "homebrewID": 722,
    "createdAt": "2022-09-15T23:51:15",
    "updatedAt": "2022-09-15T23:51:15"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2438,
    "ancestryID": 986,
    "boostedAbility": "Constitution",
    "homebrewID": 722,
    "createdAt": "2022-09-15T23:51:15",
    "updatedAt": "2022-09-15T23:51:15"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2439,
    "ancestryID": 986,
    "boostedAbility": "Anything",
    "homebrewID": 722,
    "createdAt": "2022-09-15T23:51:15",
    "updatedAt": "2022-09-15T23:51:15"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2452,
    "ancestryID": 991,
    "boostedAbility": "Anything",
    "homebrewID": 726,
    "createdAt": "2022-09-25T21:20:47",
    "updatedAt": "2022-09-25T21:20:47"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2453,
    "ancestryID": 991,
    "boostedAbility": "Wisdom",
    "homebrewID": 726,
    "createdAt": "2022-09-25T21:20:47",
    "updatedAt": "2022-09-25T21:20:47"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2454,
    "ancestryID": 991,
    "boostedAbility": "Dexterity",
    "homebrewID": 726,
    "createdAt": "2022-09-25T21:20:47",
    "updatedAt": "2022-09-25T21:20:47"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2457,
    "ancestryID": 993,
    "boostedAbility": "Anything",
    "homebrewID": 138,
    "createdAt": "2022-09-28T21:04:36",
    "updatedAt": "2022-09-28T21:04:36"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2458,
    "ancestryID": 993,
    "boostedAbility": "Dexterity",
    "homebrewID": 138,
    "createdAt": "2022-09-28T21:04:36",
    "updatedAt": "2022-09-28T21:04:36"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2459,
    "ancestryID": 994,
    "boostedAbility": "Anything",
    "homebrewID": 138,
    "createdAt": "2022-09-28T21:25:58",
    "updatedAt": "2022-09-28T21:25:58"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2460,
    "ancestryID": 994,
    "boostedAbility": "Anything",
    "homebrewID": 138,
    "createdAt": "2022-09-28T21:25:58",
    "updatedAt": "2022-09-28T21:25:58"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2484,
    "ancestryID": 1008,
    "boostedAbility": "Wisdom",
    "homebrewID": 735,
    "createdAt": "2022-10-04T19:10:43",
    "updatedAt": "2022-10-04T19:10:43"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2485,
    "ancestryID": 1008,
    "boostedAbility": "Strength",
    "homebrewID": 735,
    "createdAt": "2022-10-04T19:10:43",
    "updatedAt": "2022-10-04T19:10:43"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2486,
    "ancestryID": 1008,
    "boostedAbility": "Anything",
    "homebrewID": 735,
    "createdAt": "2022-10-04T19:10:43",
    "updatedAt": "2022-10-04T19:10:43"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2511,
    "ancestryID": 1019,
    "boostedAbility": "Anything",
    "homebrewID": 738,
    "createdAt": "2022-10-07T13:21:47",
    "updatedAt": "2022-10-07T13:21:47"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2512,
    "ancestryID": 1019,
    "boostedAbility": "Constitution",
    "homebrewID": 738,
    "createdAt": "2022-10-07T13:21:47",
    "updatedAt": "2022-10-07T13:21:47"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2513,
    "ancestryID": 1019,
    "boostedAbility": "Wisdom",
    "homebrewID": 738,
    "createdAt": "2022-10-07T13:21:47",
    "updatedAt": "2022-10-07T13:21:47"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2531,
    "ancestryID": 1028,
    "boostedAbility": "Dexterity",
    "homebrewID": 600,
    "createdAt": "2022-10-07T21:05:07",
    "updatedAt": "2022-10-07T21:05:07"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2532,
    "ancestryID": 1028,
    "boostedAbility": "Charisma",
    "homebrewID": 600,
    "createdAt": "2022-10-07T21:05:07",
    "updatedAt": "2022-10-07T21:05:07"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2533,
    "ancestryID": 1028,
    "boostedAbility": "Anything",
    "homebrewID": 600,
    "createdAt": "2022-10-07T21:05:07",
    "updatedAt": "2022-10-07T21:05:07"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2550,
    "ancestryID": 1037,
    "boostedAbility": "Anything",
    "homebrewID": 744,
    "createdAt": "2022-10-13T08:19:47",
    "updatedAt": "2022-10-13T08:19:47"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2551,
    "ancestryID": 1037,
    "boostedAbility": "Constitution",
    "homebrewID": 744,
    "createdAt": "2022-10-13T08:19:47",
    "updatedAt": "2022-10-13T08:19:47"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2593,
    "ancestryID": 1058,
    "boostedAbility": "Anything",
    "homebrewID": 734,
    "createdAt": "2022-10-14T07:30:14",
    "updatedAt": "2022-10-14T07:30:14"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2594,
    "ancestryID": 1058,
    "boostedAbility": "Intelligence",
    "homebrewID": 734,
    "createdAt": "2022-10-14T07:30:14",
    "updatedAt": "2022-10-14T07:30:14"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2595,
    "ancestryID": 1059,
    "boostedAbility": "Constitution",
    "homebrewID": 765,
    "createdAt": "2022-11-06T04:47:32",
    "updatedAt": "2022-11-06T04:47:32"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2596,
    "ancestryID": 1059,
    "boostedAbility": "Anything",
    "homebrewID": 765,
    "createdAt": "2022-11-06T04:47:32",
    "updatedAt": "2022-11-06T04:47:32"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2597,
    "ancestryID": 1059,
    "boostedAbility": "Wisdom",
    "homebrewID": 765,
    "createdAt": "2022-11-06T04:47:32",
    "updatedAt": "2022-11-06T04:47:32"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2610,
    "ancestryID": 1066,
    "boostedAbility": "Constitution",
    "createdAt": "2022-11-23T09:32:36",
    "updatedAt": "2022-11-23T09:32:36"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2611,
    "ancestryID": 1066,
    "boostedAbility": "Anything",
    "createdAt": "2022-11-23T09:32:36",
    "updatedAt": "2022-11-23T09:32:36"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2612,
    "ancestryID": 1067,
    "boostedAbility": "Constitution",
    "createdAt": "2022-11-23T09:47:48",
    "updatedAt": "2022-11-23T09:47:48"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2613,
    "ancestryID": 1067,
    "boostedAbility": "Anything",
    "createdAt": "2022-11-23T09:47:48",
    "updatedAt": "2022-11-23T09:47:48"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2614,
    "ancestryID": 1068,
    "boostedAbility": "Anything",
    "createdAt": "2022-11-23T10:05:06",
    "updatedAt": "2022-11-23T10:05:06"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2615,
    "ancestryID": 1068,
    "boostedAbility": "Strength",
    "createdAt": "2022-11-23T10:05:06",
    "updatedAt": "2022-11-23T10:05:06"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2616,
    "ancestryID": 1069,
    "boostedAbility": "Anything",
    "createdAt": "2022-11-23T10:09:55",
    "updatedAt": "2022-11-23T10:09:55"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2617,
    "ancestryID": 1069,
    "boostedAbility": "Dexterity",
    "createdAt": "2022-11-23T10:09:55",
    "updatedAt": "2022-11-23T10:09:55"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2620,
    "ancestryID": 1071,
    "boostedAbility": "Dexterity",
    "createdAt": "2022-11-23T11:27:33",
    "updatedAt": "2022-11-23T11:27:33"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2621,
    "ancestryID": 1071,
    "boostedAbility": "Anything",
    "createdAt": "2022-11-23T11:27:33",
    "updatedAt": "2022-11-23T11:27:33"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2622,
    "ancestryID": 1072,
    "boostedAbility": "Anything",
    "homebrewID": 781,
    "createdAt": "2022-12-01T15:05:01",
    "updatedAt": "2022-12-01T15:05:01"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2623,
    "ancestryID": 1072,
    "boostedAbility": "Anything",
    "homebrewID": 781,
    "createdAt": "2022-12-01T15:05:01",
    "updatedAt": "2022-12-01T15:05:01"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2625,
    "ancestryID": 1074,
    "boostedAbility": "Constitution",
    "homebrewID": 805,
    "createdAt": "2022-12-25T16:39:56",
    "updatedAt": "2022-12-25T16:39:56"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2646,
    "ancestryID": 1083,
    "boostedAbility": "Anything",
    "homebrewID": 824,
    "createdAt": "2023-01-06T05:48:59",
    "updatedAt": "2023-01-06T05:48:59"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2647,
    "ancestryID": 1083,
    "boostedAbility": "Dexterity",
    "homebrewID": 824,
    "createdAt": "2023-01-06T05:48:59",
    "updatedAt": "2023-01-06T05:48:59"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2654,
    "ancestryID": 1087,
    "boostedAbility": "Anything",
    "homebrewID": 833,
    "createdAt": "2023-01-11T15:19:09",
    "updatedAt": "2023-01-11T15:19:09"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2655,
    "ancestryID": 1087,
    "boostedAbility": "Strength",
    "homebrewID": 833,
    "createdAt": "2023-01-11T15:19:09",
    "updatedAt": "2023-01-11T15:19:09"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2656,
    "ancestryID": 1088,
    "boostedAbility": "Constitution",
    "homebrewID": 847,
    "createdAt": "2023-01-17T02:16:52",
    "updatedAt": "2023-01-17T02:16:52"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2657,
    "ancestryID": 1088,
    "boostedAbility": "Anything",
    "homebrewID": 847,
    "createdAt": "2023-01-17T02:16:52",
    "updatedAt": "2023-01-17T02:16:52"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2658,
    "ancestryID": 1088,
    "boostedAbility": "Strength",
    "homebrewID": 847,
    "createdAt": "2023-01-17T02:16:52",
    "updatedAt": "2023-01-17T02:16:52"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2664,
    "ancestryID": 1091,
    "boostedAbility": "Strength",
    "homebrewID": 851,
    "createdAt": "2023-01-17T23:48:55",
    "updatedAt": "2023-01-17T23:48:55"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2665,
    "ancestryID": 1091,
    "boostedAbility": "Constitution",
    "homebrewID": 851,
    "createdAt": "2023-01-17T23:48:55",
    "updatedAt": "2023-01-17T23:48:55"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2666,
    "ancestryID": 1091,
    "boostedAbility": "Anything",
    "homebrewID": 851,
    "createdAt": "2023-01-17T23:48:55",
    "updatedAt": "2023-01-17T23:48:55"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2670,
    "ancestryID": 1093,
    "boostedAbility": "Dexterity",
    "homebrewID": 852,
    "createdAt": "2023-01-18T16:55:18",
    "updatedAt": "2023-01-18T16:55:18"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2671,
    "ancestryID": 1093,
    "boostedAbility": "Wisdom",
    "homebrewID": 852,
    "createdAt": "2023-01-18T16:55:18",
    "updatedAt": "2023-01-18T16:55:18"
} as const satisfies AncestryboostsTableRowConstraints,
{
    "table": "ancestryboosts",
    "id": 2672,
    "ancestryID": 1093,
    "boostedAbility": "Anything",
    "homebrewID": 852,
    "createdAt": "2023-01-18T16:55:18",
    "updatedAt": "2023-01-18T16:55:18"
} as const satisfies AncestryboostsTableRowConstraints,
 ] as const;

export const ancestryboosts = hookupTableLookup(_ancestryboosts);