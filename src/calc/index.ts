import { calculateAncestry } from './ancestry';
import { calculateBackground } from './background';
import { calculateClass } from './class';
import { calculateHeritage } from './heritage';
import { CalculatedSheet } from './sheet';

export const calculateSheet = () => {
  const sheet = new CalculatedSheet();

  // FIXME: Figure out how to order execution, given that there are conditionals that depend
  //        on information being collected.

  const timeLogMsg = '⏱ Sheet calculation';    
  console.time(timeLogMsg);
  console.group('🧮 Calculating sheet');

  try {
    calculateAncestry(sheet);
    calculateHeritage(sheet);
    calculateBackground(sheet);
    calculateClass(sheet);
  } catch (error) {
    console.log('Problem while calculating sheet', error);
  }

  console.log('📜', sheet);
  console.groupEnd();
  console.timeEnd(timeLogMsg);

  return sheet;
}