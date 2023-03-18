import { hookupTableLookup } from '../tables';

export interface SensetypesTableRowConstraints {
  table: 'sensetypes';
  id: number;
  name?: string;
  description?: string;
  isVisionType?: boolean;
  visionPrecedence?: number;
  createdAt?: string;
  updatedAt?: string;
}

export type SensetypesTable = typeof sensetypes;
export type SensetypesTableRow = SensetypesTable[number];
export type SensetypeID = SensetypesTableRow['id'];

export const isSensetypeID = (id?: number): id is SensetypeID => !!id && !!sensetypes.byIdLax(id);
export const assertIsSensetypeID = (id?: number): asserts id is SensetypeID => { if (!isSensetypeID(id)) throw Error('Expected a SensetypeID; got ' + id); }

const _sensetypes = [
{
    "table": "sensetypes",
    "id": 1,
    "name": "Normal Vision",
    "description": "A creature with normal vision can see well in normal or bright light but struggles to see in dim light and cannot see in areas of darkness.",
    "isVisionType": true,
    "visionPrecedence": 0,
    "createdAt": "2019-12-13T00:12:28",
    "updatedAt": "2019-12-13T00:12:28"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 2,
    "name": "Low-Light Vision",
    "description": "A creature with low-light vision can see in dim light as though it were bright light, so it ignores the concealed condition due to dim light.",
    "isVisionType": true,
    "visionPrecedence": 1,
    "createdAt": "2019-12-13T00:13:16",
    "updatedAt": "2019-12-13T00:13:16"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 3,
    "name": "Darkvision",
    "description": "A creature with darkvision can see perfectly well in areas of darkness and dim light, though such vision is in black and white only. However, some forms of magical darkness, such as a 4th-level darkness spell, block normal darkvision.",
    "isVisionType": true,
    "visionPrecedence": 2,
    "createdAt": "2019-12-13T00:15:26",
    "updatedAt": "2019-12-13T00:15:26"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 4,
    "name": "Greater Darkvision",
    "description": "A creature with greater darkvision can see perfectly well in areas of darkness and dim light, though such vision is in black and white only. Some forms of magical darkness, such as a 4th-level darkness spell, block normal darkvision. A creature with greater darkvision, however, can see through even these forms of magical darkness.",
    "isVisionType": true,
    "visionPrecedence": 3,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 5,
    "name": "Keen Eyes",
    "description": "A creature with keen eyes has a sharper vision than most. They can make out small details about concealed or even invisible creatures that others might miss. They gain a +2 circumstance bonus when using the Seek action to find hidden or undetected creatures within 30 feet of them. When they target an opponent that is concealed from them or hidden from them, reduce the DC of the flat check to 3 for a concealed target or 9 for a hidden one.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 6,
    "name": "Scent (imprecise 30 ft)",
    "description": "Scent involves sensing creatures or objects by smell. It functions only if the creature or object being detected emits an aroma. If a creature emits a heavy aroma or is upwind, the GM can double or even triple your scent range increment, and the GM can reduce the range if a creature is downwind. You can usually sense a creature automatically with an imprecise sense, but it has the hidden condition instead of the observed condition. For more details on imprecise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 7,
    "name": "Lifesense (imprecise 10 ft)",
    "description": "Lifesense allows you to sense the life force within living creatures and its counterforce that animates the undead, though you can't distinguish between the two. You can usually sense a creature automatically with an imprecise sense, but it has the hidden condition instead of the observed condition. For more details on imprecise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 8,
    "name": "Spiritsense (imprecise 60 ft)",
    "description": "Spiritsense enables you to sense the spirits of creatures, including living creatures, most non-mindless undead, and haunts within 60 feet. As with your hearing and other imprecise senses, you still need to Seek to locate an undetected creature. As spiritsense detects spiritual essence, not physical bodies, it can detect spirits projected by spells such as project image or possessing otherwise soulless objects. It can’t detect soulless bodies, constructs, or objects, and like most senses, it doesn’t penetrate through solid objects. For more details on imprecise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 9,
    "name": "Tremorsense (imprecise 5 ft)",
    "description": "Tremorsense allows a creature to feel the vibrations through a solid surface caused by movement. Tremorsense functions only if the detecting creature is on the same surface as the subject, and only if the subject is moving along (or burrowing through) the surface. You can usually sense a creature automatically with an imprecise sense, but it has the hidden condition instead of the observed condition. For more details on imprecise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 10,
    "name": "Tremorsense (precise 60 ft)",
    "description": "Tremorsense allows a creature to feel the vibrations through a solid surface caused by movement. Tremorsense functions only if the detecting creature is on the same surface as the subject, and only if the subject is moving along (or burrowing through) the surface. You can usually detect a creature automatically with a precise sense unless that creature is hiding or obscured by the environment, in which case you can use the Seek basic action to better detect the creature. For more details on precise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 11,
    "name": "Scent (precise 30 ft)",
    "description": "Scent involves sensing creatures or objects by smell. It functions only if the creature or object being detected emits an aroma. If a creature emits a heavy aroma or is upwind, the GM can double or even triple your scent range increment, and the GM can reduce the range if a creature is downwind. You can usually detect a creature automatically with a precise sense unless that creature is hiding or obscured by the environment, in which case you can use the Seek basic action to better detect the creature. For more details on precise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 12,
    "name": "Scent (imprecise 10 ft)",
    "description": "Scent involves sensing creatures or objects by smell. It functions only if the creature or object being detected emits an aroma. If a creature emits a heavy aroma or is upwind, the GM can double or even triple your scent range increment, and the GM can reduce the range if a creature is downwind. You can usually sense a creature automatically with an imprecise sense, but it has the hidden condition instead of the observed condition. For more details on imprecise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 13,
    "name": "Scent (imprecise 20 ft)",
    "description": "Scent involves sensing creatures or objects by smell. It functions only if the creature or object being detected emits an aroma. If a creature emits a heavy aroma or is upwind, the GM can double or even triple your scent range increment, and the GM can reduce the range if a creature is downwind. You can usually sense a creature automatically with an imprecise sense, but it has the hidden condition instead of the observed condition. For more details on imprecise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 14,
    "name": "Scent (imprecise 40 ft)",
    "description": "Scent involves sensing creatures or objects by smell. It functions only if the creature or object being detected emits an aroma. If a creature emits a heavy aroma or is upwind, the GM can double or even triple your scent range increment, and the GM can reduce the range if a creature is downwind. You can usually sense a creature automatically with an imprecise sense, but it has the hidden condition instead of the observed condition. For more details on imprecise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 15,
    "name": "Scent (imprecise 50 ft)",
    "description": "Scent involves sensing creatures or objects by smell. It functions only if the creature or object being detected emits an aroma. If a creature emits a heavy aroma or is upwind, the GM can double or even triple your scent range increment, and the GM can reduce the range if a creature is downwind. You can usually sense a creature automatically with an imprecise sense, but it has the hidden condition instead of the observed condition. For more details on imprecise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 16,
    "name": "Scent (imprecise 60 ft)",
    "description": "Scent involves sensing creatures or objects by smell. It functions only if the creature or object being detected emits an aroma. If a creature emits a heavy aroma or is upwind, the GM can double or even triple your scent range increment, and the GM can reduce the range if a creature is downwind. You can usually sense a creature automatically with an imprecise sense, but it has the hidden condition instead of the observed condition. For more details on imprecise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 17,
    "name": "Scent (precise 10 ft)",
    "description": "Scent involves sensing creatures or objects by smell. It functions only if the creature or object being detected emits an aroma. If a creature emits a heavy aroma or is upwind, the GM can double or even triple your scent range increment, and the GM can reduce the range if a creature is downwind. You can usually detect a creature automatically with a precise sense unless that creature is hiding or obscured by the environment, in which case you can use the Seek basic action to better detect the creature. For more details on precise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 18,
    "name": "Scent (precise 20 ft)",
    "description": "Scent involves sensing creatures or objects by smell. It functions only if the creature or object being detected emits an aroma. If a creature emits a heavy aroma or is upwind, the GM can double or even triple your scent range increment, and the GM can reduce the range if a creature is downwind. You can usually detect a creature automatically with a precise sense unless that creature is hiding or obscured by the environment, in which case you can use the Seek basic action to better detect the creature. For more details on precise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 19,
    "name": "Scent (precise 40 ft)",
    "description": "Scent involves sensing creatures or objects by smell. It functions only if the creature or object being detected emits an aroma. If a creature emits a heavy aroma or is upwind, the GM can double or even triple your scent range increment, and the GM can reduce the range if a creature is downwind. You can usually detect a creature automatically with a precise sense unless that creature is hiding or obscured by the environment, in which case you can use the Seek basic action to better detect the creature. For more details on precise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 20,
    "name": "Scent (precise 50 ft)",
    "description": "Scent involves sensing creatures or objects by smell. It functions only if the creature or object being detected emits an aroma. If a creature emits a heavy aroma or is upwind, the GM can double or even triple your scent range increment, and the GM can reduce the range if a creature is downwind. You can usually detect a creature automatically with a precise sense unless that creature is hiding or obscured by the environment, in which case you can use the Seek basic action to better detect the creature. For more details on precise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 21,
    "name": "Scent (precise 60 ft)",
    "description": "Scent involves sensing creatures or objects by smell. It functions only if the creature or object being detected emits an aroma. If a creature emits a heavy aroma or is upwind, the GM can double or even triple your scent range increment, and the GM can reduce the range if a creature is downwind. You can usually detect a creature automatically with a precise sense unless that creature is hiding or obscured by the environment, in which case you can use the Seek basic action to better detect the creature. For more details on precise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 22,
    "name": "Tremorsense (imprecise 10 ft)",
    "description": "Tremorsense allows a creature to feel the vibrations through a solid surface caused by movement. Tremorsense functions only if the detecting creature is on the same surface as the subject, and only if the subject is moving along (or burrowing through) the surface. You can usually sense a creature automatically with an imprecise sense, but it has the hidden condition instead of the observed condition. For more details on imprecise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 23,
    "name": "Tremorsense (imprecise 20 ft)",
    "description": "Tremorsense allows a creature to feel the vibrations through a solid surface caused by movement. Tremorsense functions only if the detecting creature is on the same surface as the subject, and only if the subject is moving along (or burrowing through) the surface. You can usually sense a creature automatically with an imprecise sense, but it has the hidden condition instead of the observed condition. For more details on imprecise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 24,
    "name": "Tremorsense (imprecise 30 ft)",
    "description": "Tremorsense allows a creature to feel the vibrations through a solid surface caused by movement. Tremorsense functions only if the detecting creature is on the same surface as the subject, and only if the subject is moving along (or burrowing through) the surface. You can usually sense a creature automatically with an imprecise sense, but it has the hidden condition instead of the observed condition. For more details on imprecise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 25,
    "name": "Tremorsense (imprecise 40 ft)",
    "description": "Tremorsense allows a creature to feel the vibrations through a solid surface caused by movement. Tremorsense functions only if the detecting creature is on the same surface as the subject, and only if the subject is moving along (or burrowing through) the surface. You can usually sense a creature automatically with an imprecise sense, but it has the hidden condition instead of the observed condition. For more details on imprecise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 26,
    "name": "Tremorsense (imprecise 50 ft)",
    "description": "Tremorsense allows a creature to feel the vibrations through a solid surface caused by movement. Tremorsense functions only if the detecting creature is on the same surface as the subject, and only if the subject is moving along (or burrowing through) the surface. You can usually sense a creature automatically with an imprecise sense, but it has the hidden condition instead of the observed condition. For more details on imprecise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 27,
    "name": "Tremorsense (imprecise 60 ft)",
    "description": "Tremorsense allows a creature to feel the vibrations through a solid surface caused by movement. Tremorsense functions only if the detecting creature is on the same surface as the subject, and only if the subject is moving along (or burrowing through) the surface. You can usually sense a creature automatically with an imprecise sense, but it has the hidden condition instead of the observed condition. For more details on imprecise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 28,
    "name": "Tremorsense (precise 10 ft)",
    "description": "Tremorsense allows a creature to feel the vibrations through a solid surface caused by movement. Tremorsense functions only if the detecting creature is on the same surface as the subject, and only if the subject is moving along (or burrowing through) the surface. You can usually detect a creature automatically with a precise sense unless that creature is hiding or obscured by the environment, in which case you can use the Seek basic action to better detect the creature. For more details on precise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 29,
    "name": "Tremorsense (precise 20 ft)",
    "description": "Tremorsense allows a creature to feel the vibrations through a solid surface caused by movement. Tremorsense functions only if the detecting creature is on the same surface as the subject, and only if the subject is moving along (or burrowing through) the surface. You can usually detect a creature automatically with a precise sense unless that creature is hiding or obscured by the environment, in which case you can use the Seek basic action to better detect the creature. For more details on precise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 30,
    "name": "Tremorsense (precise 30 ft)",
    "description": "Tremorsense allows a creature to feel the vibrations through a solid surface caused by movement. Tremorsense functions only if the detecting creature is on the same surface as the subject, and only if the subject is moving along (or burrowing through) the surface. You can usually detect a creature automatically with a precise sense unless that creature is hiding or obscured by the environment, in which case you can use the Seek basic action to better detect the creature. For more details on precise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 31,
    "name": "Tremorsense (precise 40 ft)",
    "description": "Tremorsense allows a creature to feel the vibrations through a solid surface caused by movement. Tremorsense functions only if the detecting creature is on the same surface as the subject, and only if the subject is moving along (or burrowing through) the surface. You can usually detect a creature automatically with a precise sense unless that creature is hiding or obscured by the environment, in which case you can use the Seek basic action to better detect the creature. For more details on precise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 32,
    "name": "Tremorsense (precise 50 ft)",
    "description": "Tremorsense allows a creature to feel the vibrations through a solid surface caused by movement. Tremorsense functions only if the detecting creature is on the same surface as the subject, and only if the subject is moving along (or burrowing through) the surface. You can usually detect a creature automatically with a precise sense unless that creature is hiding or obscured by the environment, in which case you can use the Seek basic action to better detect the creature. For more details on precise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 33,
    "name": "Tremorsense (precise 5 ft)",
    "description": "Tremorsense allows a creature to feel the vibrations through a solid surface caused by movement. Tremorsense functions only if the detecting creature is on the same surface as the subject, and only if the subject is moving along (or burrowing through) the surface. You can usually detect a creature automatically with a precise sense unless that creature is hiding or obscured by the environment, in which case you can use the Seek basic action to better detect the creature. For more details on precise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 34,
    "name": "Wavesense (imprecise 30 ft)",
    "description": "Wavesense allows a creature to feel vibrations caused by movement through a liquid. This sense functions only if the creature and the subject are in the same body of liquid, and only if the subject is moving through the liquid. You can usually sense a creature automatically with an imprecise sense, but it has the hidden condition instead of the observed condition. For more details on imprecise senses, see CRB pg. 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 35,
    "name": "Motion Sense (imprecise 30 ft)",
    "description": "Motion sense allows you to detect nearby motion through vibration and air movement. You can usually sense a creature automatically with an imprecise sense, but it has the hidden condition instead of the observed condition. For more details on imprecise senses, see CRB pg. 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 36,
    "name": "Echolocation (imprecise 30 ft)",
    "description": "Echolocation allows a creature to use hearing as an imprecise sense at the listed range. You can usually sense a creature automatically with an imprecise sense, but it has the hidden condition instead of the observed condition. For more details on imprecise senses, see CRB pg. 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 37,
    "name": "Echolocation (precise 30 ft)",
    "description": "Echolocation allows a creature to use hearing as a precise sense at the listed range. You can usually detect a creature automatically with a precise sense unless that creature is hiding or obscured by the environment, in which case you can use the Seek basic action to better detect the creature. For more details on precise senses, see CRB pg. 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 38,
    "name": "Tremorsense (imprecise 15 ft)",
    "description": "Tremorsense allows a creature to feel the vibrations through a solid surface caused by movement. Tremorsense functions only if the detecting creature is on the same surface as the subject, and only if the subject is moving along (or burrowing through) the surface. You can usually sense a creature automatically with an imprecise sense, but it has the hidden condition instead of the observed condition. For more details on imprecise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
{
    "table": "sensetypes",
    "id": 39,
    "name": "Lifesense (imprecise 30 ft)",
    "description": "Lifesense allows you to sense the life force within living creatures and its counterforce that animates the undead, though you can't distinguish between the two. You can usually sense a creature automatically with an imprecise sense, but it has the hidden condition instead of the observed condition. For more details on imprecise senses, see page 464.",
    "isVisionType": true,
    "createdAt": "2019-12-13T00:19:42",
    "updatedAt": "2019-12-13T00:19:42"
} as const satisfies SensetypesTableRowConstraints,
 ] as const;

export const sensetypes = hookupTableLookup(_sensetypes);