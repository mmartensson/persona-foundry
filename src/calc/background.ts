import { AbilityChoice, currentBackground, currentlyMadeChoice } from "../state";
import { abilityNames, isAbility } from "../tables";
import { Expression } from "../wsc/types";
import { CalculatedSheet } from "./sheet";

export const calculateBackground = (sheet: CalculatedSheet) => {
  const background = currentBackground();
  if (!background) return;

  const options: AbilityChoice['options'] = [];
  const source = `backgrounds[${background.id}]`;

  // NOTE: Assuming that boostTwo will continue to be set to ALL, and
  //       that boostOne is never set to ALL for backgrounds where the
  //       respective property is set.

  // If boostOne is specified then we have one ability choice and one free
  if ('boostOne' in background) {
    const description = `Ability boost provided by ${background.name}`;
    const str = background.boostOne;
    const boostOneOptions = str.split(',').filter(isAbility);

    // Getting all choices
    const choices = currentlyMadeChoice(`ability-${source}-boost`);

    if (boostOneOptions.length == 1) {
      // Single value, so nothing to choose from
      const [abilityOne] = boostOneOptions;
      sheet.abilities[abilityOne].adjust(1, source, description);
    } else {
      // The boostOne needs a choice to be made
      options.push(boostOneOptions);
    }

    if (choices) {
      choices
        .filter(isAbility) // Skipping choices not yet made
        .forEach(ability => sheet.abilities[ability].adjust(1, source, description));
    }

    // The boostTwo will always need a choice
    options.push([...abilityNames]);

    // All possible choices, made or not 
    if (options.length > 0) {
      sheet.activeChoices.push({
        type: 'ability',
        ref: `ability-${source}-boost`,
        level: 1,
        label: description,
        options
      });
    }
  }

  if ('wsci' in background) {
    sheet.executeBlock(background.wsci as Expression[], `${source}-code`, `Background: ${background.name}`, 1);
  }
}