import { currentAncestry, currentHeritage, currentlyMadeChoice } from "../state";
import { CalculatedSheet } from "./sheet";
import { feats, FeatsTableRow, FeatID } from '../data/feats';
import { isTagID } from '../data/tags';

export const addAncestryFeatChoice = (sheet: CalculatedSheet, level: number) => {
  const ancestry = currentAncestry();
  if (!ancestry) return;

  const heritage = currentHeritage();
  if (!heritage) return;

  // FIXME: Handle 'prerequisites'

  const viaGeneric: FeatsTableRow[] = feats
    .filter(row => 'genericType' in row && row.genericType === 'ANCESTRY-FEAT')
    .filter(row => 'genTypeName' in row && (row.genTypeName === ancestry.name || row.genTypeName == heritage.name));

  const viaTagID: FeatsTableRow[] = feats
    .filter(row => 'tagID' in ancestry && isTagID(ancestry.tagID) && [...row.tagIDs].includes(ancestry.tagID))
    .filter(row => !('level' in row) || row.level <= level);

  // Not deduping right now; expecting viaGeneric and viaTagID to be mutually exclusive
  const options: FeatID[] = [...viaGeneric, ...viaTagID]
     .filter(row => !('level' in row) || row.level <= level)
     .filter(row => 'canSelectMultiple' in row || !sheet.feats.value.has(row.id))
     .map(row => row.id);
 
  const source = `ancestries[${ancestry.id}]@${level}`;
  const description = 'Class Feat';

  addFeatChoice(sheet, options, source, description, level);
}

export const addFeatChoice = (sheet: CalculatedSheet, options: FeatID[], source: string, description: string, level: number) => {
  const choice = currentlyMadeChoice(`feat-${source}`);
  if (choice) {
    const row = feats.byId(choice);
    if (row) {
      sheet.feats.adjust({id: choice}, source, description);

      // Now, each feat added potentially has additional code of its own that needs to be run
      if ('wsci' in row) {
        sheet.executeBlock(row.wsci, `feats[${row.id}]`, row.name, level);
      }
    } else {
      console.warn(`Illegal feat id ${choice} made its way into the feat-${source} choice`);
    }
  }

  sheet.activeChoices.push({
    type: 'feat',
    ref: `feat-${source}`,
    level: level,
    label: description,
    options,
  });
}