import { hookupTableLookup } from '../tables';

export interface HomebackgroundsTableRowConstraints {
  table: 'homebackgrounds';
  id: number;
  name?: string;
  artworkURL?: string;
  artistPage?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type HomebackgroundsTable = typeof homebackgrounds;
export type HomebackgroundsTableRow = HomebackgroundsTable[number];
export type HomebackgroundID = HomebackgroundsTableRow['id'];

export const isHomebackgroundID = (id?: number): id is HomebackgroundID => !!id && !!homebackgrounds.byIdLax(id);
export const assertIsHomebackgroundID = (id?: number): asserts id is HomebackgroundID => { if (!isHomebackgroundID(id)) throw Error('Expected a HomebackgroundID; got ' + id); }

const _homebackgrounds = [
{
    "table": "homebackgrounds",
    "id": 1,
    "name": "Unknown",
    "artworkURL": "https://cdn.wallpapersafari.com/77/55/1zXRxC.jpg",
    "createdAt": "2019-11-08T13:26:00",
    "updatedAt": "2019-11-08T13:26:00"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 2,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/022/314/706/large/andreas-rocha-magickingdom01.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2019-11-08T13:26:35",
    "updatedAt": "2019-11-08T13:26:35"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 3,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/025/823/127/large/andreas-rocha-outofthewoods01.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2019-11-08T13:26:49",
    "updatedAt": "2019-11-08T13:26:49"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 4,
    "name": "Unknown",
    "artworkURL": "https://www.pixelstalk.net/wp-content/uploads/2016/11/Pictures-Fantasy-Art.png",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 5,
    "name": "Unknown",
    "artworkURL": "https://www.pixelstalk.net/wp-content/uploads/2016/11/Fantasy-landscapes-art.jpg",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 6,
    "name": "Oliver Ryan",
    "artworkURL": "https://i.imgur.com/qZsfvgQ.png",
    "artistPage": "https://www.artstation.com/oliverryan",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 7,
    "name": "Oliver Ryan",
    "artworkURL": "https://i.imgur.com/XW3VnwQ.png",
    "artistPage": "https://www.artstation.com/oliverryan",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 8,
    "name": "Oliver Ryan",
    "artworkURL": "https://i.imgur.com/XunQq5e.png",
    "artistPage": "https://www.artstation.com/oliverryan",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 9,
    "name": "Oliver Ryan",
    "artworkURL": "https://i.imgur.com/PsGa4xa.jpg",
    "artistPage": "https://www.artstation.com/oliverryan",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 10,
    "name": "Oliver Ryan",
    "artworkURL": "https://i.imgur.com/g3gMyAT.png",
    "artistPage": "https://www.artstation.com/oliverryan",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 11,
    "name": "Oliver Ryan",
    "artworkURL": "https://i.imgur.com/ApNTXu8.jpg",
    "artistPage": "https://www.artstation.com/oliverryan",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 12,
    "name": "Ferdinand Ladera",
    "artworkURL": "https://i.imgur.com/MMpj0bn.jpg",
    "artistPage": "https://www.artstation.com/ferdinandladera",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 13,
    "name": "Ferdinand Ladera",
    "artworkURL": "https://i.imgur.com/BsKl3C0.jpg",
    "artistPage": "https://www.artstation.com/ferdinandladera",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 14,
    "name": "Ferdinand Ladera",
    "artworkURL": "https://i.imgur.com/45rNFKr.jpg",
    "artistPage": "https://www.artstation.com/ferdinandladera",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 15,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/022/336/244/large/andreas-rocha-hiddenwatefall02.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 16,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/017/984/106/large/andreas-rocha-abandoned01.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 17,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/017/216/894/large/andreas-rocha-wizardstoweriii01.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 18,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/023/453/030/large/andreas-rocha-wizardstower01.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 19,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/015/607/475/large/andreas-rocha-atthegate02.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 20,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/016/145/351/large/andreas-rocha-toweringshadows01.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 21,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/014/064/941/large/andreas-rocha-goodfriendsii02.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 22,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/010/838/594/large/andreas-rocha-forbiddenkingdom03.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 23,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/010/064/003/large/andreas-rocha-tower01.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 24,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/008/684/307/large/andreas-rocha-wefoundthisamazingplace.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 25,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/007/134/335/large/andreas-rocha-lightforest02.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 26,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/005/804/891/large/andreas-rocha-darktimes01.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 27,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/006/910/983/large/andreas-rocha-atthewall03.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 28,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/005/886/812/large/andreas-rocha-ceruleanbreeze02.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 29,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/004/997/079/large/andreas-rocha-magichour01.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 30,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/000/085/732/large/MorningArrival.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 31,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/004/239/228/large/andreas-rocha-themasterreturns02.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 32,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/001/796/342/large/andreas-rocha-oldforestb02.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 33,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/001/369/531/large/andreas-rocha-patreona01.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 34,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/001/197/566/large/andreas-rocha-homesweethome03.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 35,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/000/320/963/large/andreas-rocha-dangerousroads.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 36,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/000/310/933/large/andreas-rocha-deepintheforest08.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 37,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/000/093/621/large/andreas-rocha-deepshadows.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 38,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/019/809/689/large/andreas-rocha-grimhollow-artstation.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 39,
    "name": "Jorge Jacinto",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/025/102/490/large/jorge-jacinto-wisp-red.jpg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 40,
    "name": "Jorge Jacinto",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/024/508/142/large/jorge-jacinto-peaks-red.jpg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 41,
    "name": "Jorge Jacinto",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/021/007/428/large/jorge-jacinto-crater-final.jpg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 42,
    "name": "Jorge Jacinto",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/016/984/818/large/jorge-jacinto-seascape-1-red.jpg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 43,
    "name": "Jorge Jacinto",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/015/690/554/large/jorge-jacinto-asset.jpg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 44,
    "name": "Jorge Jacinto",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/013/214/810/large/jorge-jacinto-forgotten-kingdom-iii.jpg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 45,
    "name": "Jorge Jacinto",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/009/939/357/large/jorge-jacinto-coastal-fortress-red.jpg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 46,
    "name": "Jorge Jacinto",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/017/372/945/large/jorge-jacinto-bones.jpg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 47,
    "name": "Jorge Jacinto",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/019/132/507/large/jorge-jacinto-the-twilight-grove-final.jpg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 48,
    "name": "Jorge Jacinto",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/000/122/598/large/jorge-jacinto-the-creature-byjorgejacinto.jpg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 49,
    "name": "Jorge Jacinto",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/000/122/597/large/jorge-jacinto-swamp-wasteland-by-jorgejacinto.jpg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 50,
    "name": "Jorge Jacinto",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/019/388/838/large/jorge-jacinto-feralas-red.jpg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 51,
    "name": "Jorge Jacinto",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/000/122/570/large/jorge-jacinto-darkmist-jorgejacinto.jpg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 52,
    "name": "Jorge Jacinto",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/025/960/475/large/jorge-jacinto-red-city-red.jpg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 53,
    "name": "Jorge Jacinto",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/013/214/810/large/jorge-jacinto-forgotten-kingdom-iii.jpg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 54,
    "name": "Jordan Grimmer",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/001/085/669/large/jordan-grimmer-gizamaluke3456789mid-sig.jpg",
    "artistPage": "https://www.jordangrimmer.co.uk/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 55,
    "name": "Jordan Grimmer",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/001/148/634/large/jordan-grimmer-lunchspeedy72-4-5t23-copy.jpg",
    "artistPage": "https://www.jordangrimmer.co.uk/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 56,
    "name": "Jordan Grimmer",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/001/308/553/large/jordan-grimmer-l444unchspeedy15-1-3-f.jpg",
    "artistPage": "https://www.jordangrimmer.co.uk/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 57,
    "name": "Jordan Grimmer",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/001/507/731/large/jordan-grimmer-tron41-vboat2-2.jpg",
    "artistPage": "https://www.jordangrimmer.co.uk/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 58,
    "name": "Jordan Grimmer",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/001/672/560/large/jordan-grimmer-lunchspeedy34edit.jpg",
    "artistPage": "https://www.jordangrimmer.co.uk/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 59,
    "name": "Jordan Grimmer",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/002/115/777/large/jordan-grimmer-sketch1.jpg",
    "artistPage": "https://www.jordangrimmer.co.uk/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 60,
    "name": "Jordan Grimmer",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/001/383/689/large/jordan-grimmer-lunchspeedy18-2-24.jpg",
    "artistPage": "https://www.jordangrimmer.co.uk/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 61,
    "name": "Eric VanAllen",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/001/067/998/large/eric-vanallen-pnw-winter-wilderness.jpg",
    "artistPage": "https://www.artstation.com/vanallen",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 62,
    "name": "Klaus Pillon",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/000/176/054/large/klaus-pillon-nodian-wasteland-concept03.jpg",
    "artistPage": "https://klauspillon.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 63,
    "name": "Klaus Pillon",
    "artworkURL": "https://carbonmade-media.accelerator.net/32933891;1920x1080.jpeg",
    "artistPage": "https://klauspillon.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 64,
    "name": "Klaus Pillon",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/000/467/789/large/klaus-pillon-city-backdrops-veturoth-final.jpg",
    "artistPage": "https://klauspillon.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 65,
    "name": "Klaus Pillon",
    "artworkURL": "https://carbonmade-media.accelerator.net/33092260;1918x1080.jpeg",
    "artistPage": "https://klauspillon.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 66,
    "name": "Ling Xiang",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/026/015/033/large/ling-xiang-xiao-4.jpg",
    "artistPage": "https://www.artstation.com/anubis1982918",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 67,
    "name": "Ling Xiang",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/010/004/850/large/ling-xiang-xiao.jpg",
    "artistPage": "https://www.artstation.com/anubis1982918",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 68,
    "name": "Ling Xiang",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/004/947/848/large/ling-xiang-7.jpg",
    "artistPage": "https://www.artstation.com/anubis1982918",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 69,
    "name": "Ling Xiang",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/004/921/917/large/ling-xiang-xiao.jpg",
    "artistPage": "https://www.artstation.com/anubis1982918",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 70,
    "name": "Ling Xiang",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/004/167/586/large/ling-xiang-xiao4.jpg",
    "artistPage": "https://www.artstation.com/anubis1982918",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 71,
    "name": "Ling Xiang",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/003/126/017/large/ling-xiang-17.jpg",
    "artistPage": "https://www.artstation.com/anubis1982918",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 72,
    "name": "Ling Xiang",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/003/126/019/large/ling-xiang-16.jpg",
    "artistPage": "https://www.artstation.com/anubis1982918",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 73,
    "name": "Lok Du",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/000/980/525/large/lok-du-3.jpg",
    "artistPage": "https://www.artstation.com/lokdu",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 74,
    "name": "Lok Du",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/000/980/503/large/lok-du-3.jpg",
    "artistPage": "https://www.artstation.com/lokdu",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 75,
    "name": "Lok Du",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/000/980/509/large/lok-du-14.jpg",
    "artistPage": "https://www.artstation.com/lokdu",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 76,
    "name": "Lok Du",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/003/190/265/large/lok-du-14.jpg",
    "artistPage": "https://www.artstation.com/lokdu",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 77,
    "name": "Lok Du",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/003/190/259/large/lok-du-28.jpg",
    "artistPage": "https://www.artstation.com/lokdu",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 78,
    "name": "Lok Du",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/009/184/575/large/lok-du-1111.jpg",
    "artistPage": "https://www.artstation.com/lokdu",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 79,
    "name": "Lok Du",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/012/450/258/large/lok-du-19.jpg",
    "artistPage": "https://www.artstation.com/lokdu",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 80,
    "name": "Lok Du",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/003/190/216/large/lok-du-17za.jpg",
    "artistPage": "https://www.artstation.com/lokdu",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 81,
    "name": "Guillem H. P.",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/011/352/208/large/guillem-h-pongiluppi-skulls-in-the-stars-v2-the-dex-of-ezra-rgb.jpg",
    "artistPage": "https://www.artstation.com/guillemhp",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 82,
    "name": "Guillem H. P.",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/011/687/245/large/guillem-h-pongiluppi-castle-of-the-devil-act1-1.jpg",
    "artistPage": "https://www.artstation.com/guillemhp",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 83,
    "name": "Guillem H. P.",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/011/325/765/large/guillem-h-pongiluppi-2-france.jpg",
    "artistPage": "https://www.artstation.com/guillemhp",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 84,
    "name": "Guillem H. P.",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/011/338/047/large/guillem-h-pongiluppi-4-african-mountains.jpg",
    "artistPage": "https://www.artstation.com/guillemhp",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 85,
    "name": "Guillem H. P.",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/011/336/185/large/guillem-h-pongiluppi-3-black-forest.jpg",
    "artistPage": "https://www.artstation.com/guillemhp",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 86,
    "name": "Guillem H. P.",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/011/151/140/large/guillem-h-pongiluppi-solomon-kane-jungle.jpg",
    "artistPage": "https://www.artstation.com/guillemhp",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 87,
    "name": "Guillem H. P.",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/011/317/081/large/guillem-h-pongiluppi-1-england.jpg",
    "artistPage": "https://www.artstation.com/guillemhp",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 88,
    "name": "Oleg Markelov",
    "artworkURL": "https://cdna.artstation.com/p/assets/images/images/001/949/076/large/oleg-markelov-sky-02-01.jpg",
    "artistPage": "https://www.artstation.com/user-1925",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 89,
    "name": "Andreas Rocha",
    "artworkURL": "https://cdnb.artstation.com/p/assets/images/images/036/420/139/large/andreas-rocha-sunsetspires.jpg",
    "artistPage": "https://www.artstation.com/andreasrocha",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 90,
    "name": "Jorge Jacinto",
    "artworkURL": "https://images.squarespace-cdn.com/content/v1/52c69a98e4b0fbf19ff9af07/1582822298354-8QVE5NBOH5K1GPCOOXZ0/image-asset.jpeg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 91,
    "name": "Jorge Jacinto",
    "artworkURL": "https://images.squarespace-cdn.com/content/v1/52c69a98e4b0fbf19ff9af07/1606911277257-YFNSTQU00PMIUDJ9AMBO/image-asset.jpeg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 92,
    "name": "Jorge Jacinto",
    "artworkURL": "https://images.squarespace-cdn.com/content/v1/52c69a98e4b0fbf19ff9af07/1467738137431-XDDD58YGIK7UV8EWYV3M/The+Great+Old+One_jjcanvas.jpg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 93,
    "name": "Jorge Jacinto",
    "artworkURL": "https://images.squarespace-cdn.com/content/v1/52c69a98e4b0fbf19ff9af07/1461776560344-74VF5LHBSJTKDRT2DKJC/the+goblin+emperor.jpg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 94,
    "name": "Jorge Jacinto",
    "artworkURL": "https://images.squarespace-cdn.com/content/v1/52c69a98e4b0fbf19ff9af07/1479735386510-13HQGO1YADTI6HFX5H7S/Origins.jpg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 95,
    "name": "Jorge Jacinto",
    "artworkURL": "https://images.squarespace-cdn.com/content/v1/52c69a98e4b0fbf19ff9af07/1546869582966-WJPYNSTRNU1B4SVUIUYG/tree_of_life.jpg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 96,
    "name": "Jorge Jacinto",
    "artworkURL": "https://images.squarespace-cdn.com/content/v1/52c69a98e4b0fbf19ff9af07/1546869262677-X5L1M070JTJXRJCPBYSB/forgotten_kingdom_II.jpg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 97,
    "name": "Jorge Jacinto",
    "artworkURL": "https://images.squarespace-cdn.com/content/v1/52c69a98e4b0fbf19ff9af07/1606911472576-OI0KN7VIA6LRFHO0UPSK/image-asset.jpeg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 98,
    "name": "Jorge Jacinto",
    "artworkURL": "https://images.squarespace-cdn.com/content/v1/52c69a98e4b0fbf19ff9af07/1407239333414-A3WAM32UK32I0DSRIH0Y/image-asset.jpeg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
{
    "table": "homebackgrounds",
    "id": 99,
    "name": "Jorge Jacinto",
    "artworkURL": "https://images.squarespace-cdn.com/content/v1/52c69a98e4b0fbf19ff9af07/1582823663743-35LGTJVIOL7Y5TUTQXKW/image-asset.jpeg",
    "artistPage": "https://www.jorgejacinto.com/",
    "createdAt": "2020-02-01T22:07:02",
    "updatedAt": "2020-02-01T22:07:02"
} as const satisfies HomebackgroundsTableRowConstraints,
 ] as const;

export const homebackgrounds = hookupTableLookup(_homebackgrounds);