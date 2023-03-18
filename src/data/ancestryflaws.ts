import { hookupTableLookup } from '../tables';

export type FlawedAbility = "Constitution" | "Intelligence" | "Wisdom" | "Strength" | "Charisma" | "Dexterity";

export interface AncestryflawsTableRowConstraints {
  table: 'ancestryflaws';
  id: number;
  ancestryID?: number;
  flawedAbility?: FlawedAbility;
  homebrewID?: number;
  createdAt?: string;
  updatedAt?: string;
}

export type AncestryflawsTable = typeof ancestryflaws;
export type AncestryflawsTableRow = AncestryflawsTable[number];
export type AncestryflawID = AncestryflawsTableRow['id'];

export const isAncestryflawID = (id?: number): id is AncestryflawID => !!id && !!ancestryflaws.byIdLax(id);
export const assertIsAncestryflawID = (id?: number): asserts id is AncestryflawID => { if (!isAncestryflawID(id)) throw Error('Expected a AncestryflawID; got ' + id); }

const _ancestryflaws = [
{
    "table": "ancestryflaws",
    "id": 151,
    "ancestryID": 155,
    "flawedAbility": "Constitution",
    "createdAt": "2020-07-20T05:43:29",
    "updatedAt": "2020-07-20T05:43:29"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 152,
    "ancestryID": 156,
    "flawedAbility": "Intelligence",
    "createdAt": "2020-07-20T05:43:54",
    "updatedAt": "2020-07-20T05:43:54"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 153,
    "ancestryID": 157,
    "flawedAbility": "Intelligence",
    "createdAt": "2020-07-20T05:44:08",
    "updatedAt": "2020-07-20T05:44:08"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 157,
    "ancestryID": 163,
    "flawedAbility": "Wisdom",
    "createdAt": "2020-07-26T04:07:20",
    "updatedAt": "2020-07-26T04:07:20"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 159,
    "ancestryID": 165,
    "flawedAbility": "Wisdom",
    "createdAt": "2020-08-06T00:37:19",
    "updatedAt": "2020-08-06T00:37:19"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 163,
    "ancestryID": 174,
    "flawedAbility": "Strength",
    "createdAt": "2020-08-07T08:14:29",
    "updatedAt": "2020-08-07T08:14:29"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 164,
    "ancestryID": 175,
    "flawedAbility": "Constitution",
    "createdAt": "2020-08-14T22:51:34",
    "updatedAt": "2020-08-14T22:51:34"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 165,
    "ancestryID": 177,
    "flawedAbility": "Charisma",
    "createdAt": "2020-08-23T22:44:49",
    "updatedAt": "2020-08-23T22:44:49"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 166,
    "ancestryID": 178,
    "flawedAbility": "Constitution",
    "createdAt": "2020-08-23T23:07:31",
    "updatedAt": "2020-08-23T23:07:31"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 167,
    "ancestryID": 179,
    "flawedAbility": "Strength",
    "createdAt": "2020-08-24T00:16:38",
    "updatedAt": "2020-08-24T00:16:38"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 168,
    "ancestryID": 180,
    "flawedAbility": "Wisdom",
    "createdAt": "2020-08-24T00:46:45",
    "updatedAt": "2020-08-24T00:46:45"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 169,
    "ancestryID": 181,
    "flawedAbility": "Strength",
    "createdAt": "2020-08-24T01:21:54",
    "updatedAt": "2020-08-24T01:21:54"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 184,
    "ancestryID": 195,
    "flawedAbility": "Wisdom",
    "homebrewID": 79,
    "createdAt": "2020-11-22T13:39:04",
    "updatedAt": "2020-11-22T13:39:04"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 185,
    "ancestryID": 199,
    "flawedAbility": "Strength",
    "homebrewID": 80,
    "createdAt": "2020-11-22T20:13:34",
    "updatedAt": "2020-11-22T20:13:34"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 192,
    "ancestryID": 206,
    "flawedAbility": "Charisma",
    "homebrewID": 83,
    "createdAt": "2020-11-24T02:32:09",
    "updatedAt": "2020-11-24T02:32:09"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 193,
    "ancestryID": 207,
    "flawedAbility": "Strength",
    "homebrewID": 69,
    "createdAt": "2020-11-25T22:16:58",
    "updatedAt": "2020-11-25T22:16:58"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 194,
    "ancestryID": 208,
    "flawedAbility": "Wisdom",
    "homebrewID": 92,
    "createdAt": "2020-11-30T17:37:50",
    "updatedAt": "2020-11-30T17:37:50"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 196,
    "ancestryID": 210,
    "flawedAbility": "Charisma",
    "homebrewID": 101,
    "createdAt": "2020-12-22T21:35:31",
    "updatedAt": "2020-12-22T21:35:31"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 200,
    "ancestryID": 223,
    "flawedAbility": "Strength",
    "homebrewID": 121,
    "createdAt": "2021-01-17T03:18:59",
    "updatedAt": "2021-01-17T03:18:59"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 205,
    "ancestryID": 231,
    "flawedAbility": "Constitution",
    "homebrewID": 139,
    "createdAt": "2021-02-02T03:56:37",
    "updatedAt": "2021-02-02T03:56:37"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 220,
    "ancestryID": 255,
    "flawedAbility": "Strength",
    "homebrewID": 144,
    "createdAt": "2021-02-17T06:09:35",
    "updatedAt": "2021-02-17T06:09:35"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 230,
    "ancestryID": 269,
    "flawedAbility": "Charisma",
    "createdAt": "2021-02-21T20:34:46",
    "updatedAt": "2021-02-21T20:34:46"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 231,
    "ancestryID": 277,
    "flawedAbility": "Strength",
    "createdAt": "2021-02-22T23:07:32",
    "updatedAt": "2021-02-22T23:07:32"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 233,
    "ancestryID": 280,
    "flawedAbility": "Wisdom",
    "createdAt": "2021-02-24T19:23:05",
    "updatedAt": "2021-02-24T19:23:05"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 239,
    "ancestryID": 288,
    "flawedAbility": "Intelligence",
    "homebrewID": 174,
    "createdAt": "2021-03-28T04:05:32",
    "updatedAt": "2021-03-28T04:05:32"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 255,
    "ancestryID": 305,
    "flawedAbility": "Dexterity",
    "homebrewID": 191,
    "createdAt": "2021-04-17T09:08:46",
    "updatedAt": "2021-04-17T09:08:46"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 256,
    "ancestryID": 308,
    "flawedAbility": "Constitution",
    "homebrewID": 181,
    "createdAt": "2021-04-21T18:01:07",
    "updatedAt": "2021-04-21T18:01:07"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 273,
    "ancestryID": 336,
    "flawedAbility": "Strength",
    "homebrewID": 238,
    "createdAt": "2021-05-02T11:55:46",
    "updatedAt": "2021-05-02T11:55:46"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 278,
    "ancestryID": 363,
    "flawedAbility": "Intelligence",
    "homebrewID": 259,
    "createdAt": "2021-05-13T02:51:52",
    "updatedAt": "2021-05-13T02:51:52"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 287,
    "ancestryID": 374,
    "flawedAbility": "Charisma",
    "homebrewID": 138,
    "createdAt": "2021-05-28T19:31:08",
    "updatedAt": "2021-05-28T19:31:08"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 288,
    "ancestryID": 375,
    "flawedAbility": "Intelligence",
    "homebrewID": 138,
    "createdAt": "2021-05-28T19:31:40",
    "updatedAt": "2021-05-28T19:31:40"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 296,
    "ancestryID": 388,
    "flawedAbility": "Wisdom",
    "homebrewID": 276,
    "createdAt": "2021-06-01T21:30:14",
    "updatedAt": "2021-06-01T21:30:14"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 298,
    "ancestryID": 391,
    "flawedAbility": "Constitution",
    "homebrewID": 291,
    "createdAt": "2021-06-15T06:09:35",
    "updatedAt": "2021-06-15T06:09:35"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 299,
    "ancestryID": 392,
    "flawedAbility": "Wisdom",
    "homebrewID": 291,
    "createdAt": "2021-06-15T21:42:04",
    "updatedAt": "2021-06-15T21:42:04"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 310,
    "ancestryID": 421,
    "flawedAbility": "Charisma",
    "createdAt": "2021-07-02T02:15:50",
    "updatedAt": "2021-07-02T02:15:50"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 315,
    "ancestryID": 429,
    "flawedAbility": "Wisdom",
    "createdAt": "2021-07-02T04:47:24",
    "updatedAt": "2021-07-02T04:47:24"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 317,
    "ancestryID": 432,
    "flawedAbility": "Strength",
    "createdAt": "2021-07-02T04:59:17",
    "updatedAt": "2021-07-02T04:59:17"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 318,
    "ancestryID": 434,
    "flawedAbility": "Constitution",
    "createdAt": "2021-07-02T05:27:38",
    "updatedAt": "2021-07-02T05:27:38"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 334,
    "ancestryID": 451,
    "flawedAbility": "Charisma",
    "homebrewID": 337,
    "createdAt": "2021-07-18T23:04:28",
    "updatedAt": "2021-07-18T23:04:28"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 368,
    "ancestryID": 477,
    "flawedAbility": "Intelligence",
    "homebrewID": 351,
    "createdAt": "2021-08-11T20:30:10",
    "updatedAt": "2021-08-11T20:30:10"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 372,
    "ancestryID": 483,
    "flawedAbility": "Strength",
    "homebrewID": 271,
    "createdAt": "2021-08-14T19:43:38",
    "updatedAt": "2021-08-14T19:43:38"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 377,
    "ancestryID": 490,
    "flawedAbility": "Strength",
    "homebrewID": 357,
    "createdAt": "2021-08-17T21:47:47",
    "updatedAt": "2021-08-17T21:47:47"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 392,
    "ancestryID": 513,
    "flawedAbility": "Constitution",
    "homebrewID": 346,
    "createdAt": "2021-08-20T03:30:40",
    "updatedAt": "2021-08-20T03:30:40"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 396,
    "ancestryID": 520,
    "flawedAbility": "Wisdom",
    "homebrewID": 369,
    "createdAt": "2021-08-21T08:39:05",
    "updatedAt": "2021-08-21T08:39:05"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 398,
    "ancestryID": 528,
    "flawedAbility": "Charisma",
    "homebrewID": 368,
    "createdAt": "2021-08-22T23:21:36",
    "updatedAt": "2021-08-22T23:21:36"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 399,
    "ancestryID": 529,
    "flawedAbility": "Charisma",
    "homebrewID": 351,
    "createdAt": "2021-08-23T04:03:00",
    "updatedAt": "2021-08-23T04:03:00"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 414,
    "ancestryID": 560,
    "flawedAbility": "Charisma",
    "homebrewID": 393,
    "createdAt": "2021-09-18T03:50:52",
    "updatedAt": "2021-09-18T03:50:52"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 418,
    "ancestryID": 566,
    "flawedAbility": "Dexterity",
    "homebrewID": 296,
    "createdAt": "2021-09-27T20:09:08",
    "updatedAt": "2021-09-27T20:09:08"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 429,
    "ancestryID": 584,
    "flawedAbility": "Charisma",
    "homebrewID": 407,
    "createdAt": "2021-10-05T15:54:30",
    "updatedAt": "2021-10-05T15:54:30"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 435,
    "ancestryID": 595,
    "flawedAbility": "Dexterity",
    "createdAt": "2021-10-17T00:53:43",
    "updatedAt": "2021-10-17T00:53:43"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 437,
    "ancestryID": 597,
    "flawedAbility": "Dexterity",
    "homebrewID": 391,
    "createdAt": "2021-10-20T15:33:55",
    "updatedAt": "2021-10-20T15:33:55"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 458,
    "ancestryID": 627,
    "flawedAbility": "Strength",
    "homebrewID": 427,
    "createdAt": "2021-11-01T22:44:24",
    "updatedAt": "2021-11-01T22:44:24"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 459,
    "ancestryID": 628,
    "flawedAbility": "Dexterity",
    "homebrewID": 427,
    "createdAt": "2021-11-01T22:44:54",
    "updatedAt": "2021-11-01T22:44:54"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 460,
    "ancestryID": 629,
    "flawedAbility": "Constitution",
    "homebrewID": 427,
    "createdAt": "2021-11-01T22:45:19",
    "updatedAt": "2021-11-01T22:45:19"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 461,
    "ancestryID": 630,
    "flawedAbility": "Charisma",
    "homebrewID": 427,
    "createdAt": "2021-11-01T22:45:47",
    "updatedAt": "2021-11-01T22:45:47"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 471,
    "ancestryID": 651,
    "flawedAbility": "Strength",
    "homebrewID": 448,
    "createdAt": "2021-11-20T19:50:51",
    "updatedAt": "2021-11-20T19:50:51"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 477,
    "ancestryID": 658,
    "flawedAbility": "Intelligence",
    "homebrewID": 391,
    "createdAt": "2021-12-23T23:28:54",
    "updatedAt": "2021-12-23T23:28:54"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 478,
    "ancestryID": 659,
    "flawedAbility": "Dexterity",
    "homebrewID": 391,
    "createdAt": "2021-12-24T03:32:46",
    "updatedAt": "2021-12-24T03:32:46"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 479,
    "ancestryID": 660,
    "flawedAbility": "Constitution",
    "homebrewID": 391,
    "createdAt": "2021-12-24T05:42:24",
    "updatedAt": "2021-12-24T05:42:24"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 480,
    "ancestryID": 663,
    "flawedAbility": "Strength",
    "homebrewID": 427,
    "createdAt": "2021-12-28T00:23:55",
    "updatedAt": "2021-12-28T00:23:55"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 481,
    "ancestryID": 664,
    "flawedAbility": "Intelligence",
    "homebrewID": 427,
    "createdAt": "2021-12-28T00:31:08",
    "updatedAt": "2021-12-28T00:31:08"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 485,
    "ancestryID": 668,
    "flawedAbility": "Constitution",
    "homebrewID": 487,
    "createdAt": "2022-01-07T09:26:26",
    "updatedAt": "2022-01-07T09:26:26"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 486,
    "ancestryID": 689,
    "flawedAbility": "Charisma",
    "homebrewID": 491,
    "createdAt": "2022-01-12T16:41:52",
    "updatedAt": "2022-01-12T16:41:52"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 491,
    "ancestryID": 715,
    "flawedAbility": "Strength",
    "homebrewID": 512,
    "createdAt": "2022-01-31T00:49:58",
    "updatedAt": "2022-01-31T00:49:58"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 506,
    "ancestryID": 730,
    "flawedAbility": "Constitution",
    "homebrewID": 506,
    "createdAt": "2022-02-06T17:27:20",
    "updatedAt": "2022-02-06T17:27:20"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 509,
    "ancestryID": 734,
    "flawedAbility": "Wisdom",
    "homebrewID": 521,
    "createdAt": "2022-02-07T02:57:30",
    "updatedAt": "2022-02-07T02:57:30"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 510,
    "ancestryID": 735,
    "flawedAbility": "Dexterity",
    "homebrewID": 506,
    "createdAt": "2022-02-07T06:33:17",
    "updatedAt": "2022-02-07T06:33:17"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 511,
    "ancestryID": 736,
    "flawedAbility": "Strength",
    "homebrewID": 516,
    "createdAt": "2022-02-08T18:03:56",
    "updatedAt": "2022-02-08T18:03:56"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 518,
    "ancestryID": 757,
    "flawedAbility": "Charisma",
    "homebrewID": 541,
    "createdAt": "2022-03-02T11:46:21",
    "updatedAt": "2022-03-02T11:46:21"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 531,
    "ancestryID": 768,
    "flawedAbility": "Constitution",
    "homebrewID": 541,
    "createdAt": "2022-03-04T02:51:17",
    "updatedAt": "2022-03-04T02:51:17"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 532,
    "ancestryID": 768,
    "flawedAbility": "Strength",
    "homebrewID": 541,
    "createdAt": "2022-03-04T02:51:17",
    "updatedAt": "2022-03-04T02:51:17"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 540,
    "ancestryID": 776,
    "flawedAbility": "Strength",
    "homebrewID": 541,
    "createdAt": "2022-03-04T22:48:08",
    "updatedAt": "2022-03-04T22:48:08"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 543,
    "ancestryID": 779,
    "flawedAbility": "Dexterity",
    "homebrewID": 541,
    "createdAt": "2022-03-06T03:01:26",
    "updatedAt": "2022-03-06T03:01:26"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 553,
    "ancestryID": 790,
    "flawedAbility": "Constitution",
    "homebrewID": 557,
    "createdAt": "2022-03-13T16:28:54",
    "updatedAt": "2022-03-13T16:28:54"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 556,
    "ancestryID": 799,
    "flawedAbility": "Constitution",
    "homebrewID": 587,
    "createdAt": "2022-04-02T11:53:36",
    "updatedAt": "2022-04-02T11:53:36"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 559,
    "ancestryID": 815,
    "flawedAbility": "Charisma",
    "homebrewID": 553,
    "createdAt": "2022-04-15T22:19:26",
    "updatedAt": "2022-04-15T22:19:26"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 560,
    "ancestryID": 816,
    "flawedAbility": "Constitution",
    "homebrewID": 553,
    "createdAt": "2022-04-15T22:49:35",
    "updatedAt": "2022-04-15T22:49:35"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 579,
    "ancestryID": 835,
    "flawedAbility": "Dexterity",
    "homebrewID": 602,
    "createdAt": "2022-04-19T19:45:08",
    "updatedAt": "2022-04-19T19:45:08"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 584,
    "ancestryID": 840,
    "flawedAbility": "Dexterity",
    "homebrewID": 599,
    "createdAt": "2022-04-19T21:47:07",
    "updatedAt": "2022-04-19T21:47:07"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 585,
    "ancestryID": 847,
    "flawedAbility": "Intelligence",
    "createdAt": "2022-04-27T18:40:12",
    "updatedAt": "2022-04-27T18:40:12"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 588,
    "ancestryID": 859,
    "flawedAbility": "Dexterity",
    "homebrewID": 541,
    "createdAt": "2022-05-15T03:57:53",
    "updatedAt": "2022-05-15T03:57:53"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 594,
    "ancestryID": 865,
    "flawedAbility": "Constitution",
    "homebrewID": 618,
    "createdAt": "2022-05-16T19:41:15",
    "updatedAt": "2022-05-16T19:41:15"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 618,
    "ancestryID": 890,
    "flawedAbility": "Intelligence",
    "homebrewID": 541,
    "createdAt": "2022-05-25T11:40:44",
    "updatedAt": "2022-05-25T11:40:44"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 620,
    "ancestryID": 893,
    "flawedAbility": "Strength",
    "homebrewID": 459,
    "createdAt": "2022-06-05T04:36:57",
    "updatedAt": "2022-06-05T04:36:57"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 630,
    "ancestryID": 906,
    "flawedAbility": "Wisdom",
    "homebrewID": 541,
    "createdAt": "2022-06-20T16:54:07",
    "updatedAt": "2022-06-20T16:54:07"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 635,
    "ancestryID": 911,
    "flawedAbility": "Constitution",
    "homebrewID": 651,
    "createdAt": "2022-06-27T15:24:51",
    "updatedAt": "2022-06-27T15:24:51"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 640,
    "ancestryID": 946,
    "flawedAbility": "Strength",
    "homebrewID": 227,
    "createdAt": "2022-07-07T22:33:38",
    "updatedAt": "2022-07-07T22:33:38"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 644,
    "ancestryID": 958,
    "flawedAbility": "Intelligence",
    "homebrewID": 680,
    "createdAt": "2022-08-08T23:43:48",
    "updatedAt": "2022-08-08T23:43:48"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 646,
    "ancestryID": 964,
    "flawedAbility": "Dexterity",
    "homebrewID": 690,
    "createdAt": "2022-08-23T05:17:54",
    "updatedAt": "2022-08-23T05:17:54"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 647,
    "ancestryID": 966,
    "flawedAbility": "Intelligence",
    "homebrewID": 690,
    "createdAt": "2022-08-23T05:20:09",
    "updatedAt": "2022-08-23T05:20:09"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 653,
    "ancestryID": 982,
    "flawedAbility": "Constitution",
    "homebrewID": 699,
    "createdAt": "2022-08-31T01:47:36",
    "updatedAt": "2022-08-31T01:47:36"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 655,
    "ancestryID": 986,
    "flawedAbility": "Charisma",
    "homebrewID": 722,
    "createdAt": "2022-09-15T23:51:15",
    "updatedAt": "2022-09-15T23:51:15"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 660,
    "ancestryID": 991,
    "flawedAbility": "Constitution",
    "homebrewID": 726,
    "createdAt": "2022-09-25T21:20:47",
    "updatedAt": "2022-09-25T21:20:47"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 662,
    "ancestryID": 1008,
    "flawedAbility": "Intelligence",
    "homebrewID": 735,
    "createdAt": "2022-10-04T19:10:43",
    "updatedAt": "2022-10-04T19:10:43"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 667,
    "ancestryID": 1019,
    "flawedAbility": "Charisma",
    "homebrewID": 738,
    "createdAt": "2022-10-07T13:21:47",
    "updatedAt": "2022-10-07T13:21:47"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 669,
    "ancestryID": 1028,
    "flawedAbility": "Constitution",
    "homebrewID": 600,
    "createdAt": "2022-10-07T21:05:07",
    "updatedAt": "2022-10-07T21:05:07"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 671,
    "ancestryID": 1059,
    "flawedAbility": "Dexterity",
    "homebrewID": 765,
    "createdAt": "2022-11-06T04:47:32",
    "updatedAt": "2022-11-06T04:47:32"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 673,
    "ancestryID": 1074,
    "flawedAbility": "Dexterity",
    "homebrewID": 805,
    "createdAt": "2022-12-25T16:39:56",
    "updatedAt": "2022-12-25T16:39:56"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 682,
    "ancestryID": 1083,
    "flawedAbility": "Intelligence",
    "homebrewID": 824,
    "createdAt": "2023-01-06T05:48:59",
    "updatedAt": "2023-01-06T05:48:59"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 683,
    "ancestryID": 1088,
    "flawedAbility": "Intelligence",
    "homebrewID": 847,
    "createdAt": "2023-01-17T02:16:53",
    "updatedAt": "2023-01-17T02:16:53"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 685,
    "ancestryID": 1091,
    "flawedAbility": "Dexterity",
    "homebrewID": 851,
    "createdAt": "2023-01-17T23:48:55",
    "updatedAt": "2023-01-17T23:48:55"
} as const satisfies AncestryflawsTableRowConstraints,
{
    "table": "ancestryflaws",
    "id": 687,
    "ancestryID": 1093,
    "flawedAbility": "Constitution",
    "homebrewID": 852,
    "createdAt": "2023-01-18T16:55:18",
    "updatedAt": "2023-01-18T16:55:18"
} as const satisfies AncestryflawsTableRowConstraints,
 ] as const;

export const ancestryflaws = hookupTableLookup(_ancestryflaws);