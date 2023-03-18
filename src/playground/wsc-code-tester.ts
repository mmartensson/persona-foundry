// Yes, yes. Real testing framework eventually.

import { ancestries } from '../data/ancestries';
import { archetypes } from '../data/archetypes';
import { backgrounds } from '../data/backgrounds';
import { books } from '../data/books';
import { classabilities } from '../data/classabilities';
import { classes } from '../data/classes';
import { conditions } from '../data/conditions';
import { creatures } from '../data/creatures';
import { familiarabilities } from '../data/familiarabilities';
import { feats } from '../data/feats';
import { heritages } from '../data/heritages';
import { items } from '../data/items';
import { physicalfeatures } from '../data/physicalfeatures';
import { sheetstates } from '../data/sheetstates';
import { spells } from '../data/spells';
import { tags } from '../data/tags';
import { uniheritages } from '../data/uniheritages';
// @ts-ignore 7016
import { parse } from '../wsc/wsc-code';

const tables = [ 
    ancestries, archetypes, 
    backgrounds, books,
    classabilities, classes, conditions, creatures, 
    familiarabilities, feats, 
    heritages, 
    items, 
    physicalfeatures,
    sheetstates, spells, 
    tags,
    uniheritages
];

for (const table of tables) {
    for (const row of table) {
        if (!('code' in row)) continue;

        const block: any[] = [];

        for (const line of row.code) {
            try {
                const result = parse(line);
                block.push(result);
            } catch (e) {
                console.log(e);
            }
        }

        if (block.length !== 0) {
            console.log(JSON.stringify(block));
        }
    }
}