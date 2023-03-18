import { currentHeritage } from "../state";
import { Expression } from "../wsc/types";
import { CalculatedSheet } from "./sheet";
import { addAncestryFeatChoice } from './feat';

export const calculateHeritage = (sheet: CalculatedSheet) => {
  const heritage = currentHeritage();
  if (!heritage) return;

  const source = `heritages[${heritage.id}]`;

  if ('wsci' in heritage) {
    sheet.executeBlock(heritage.wsci as Expression[], `${source}-code`, `Heritage: ${heritage.name}`, 1);
  }

  // An ancestry feat representing "an ability your hero learned at an early age".
  // It is here and not in the ancestry.ts because addAncestryFeat depends on existing heritage.
  addAncestryFeatChoice(sheet, 1);
}