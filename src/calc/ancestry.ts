import { ancestryboosts } from "../data/ancestryboosts";
import { ancestryflaws } from "../data/ancestryflaws";
import { physicalfeatures, PhysicalfeatureID } from "../data/physicalfeatures";
import { sensetypes, SensetypeID } from "../data/sensetypes";
import { currentAncestry, currentlyMadeChoice } from "../state";
import { abilityNames, boostedAbilityNames, flawedAbilityNames } from "../tables";
import { CalculatedSheet } from "./sheet";
import { Expression } from '../wsc/types';

export const calculateAncestry = (sheet: CalculatedSheet) => {
  const ancestry = currentAncestry();
  if (!ancestry) return;

  const flaws = ancestryflaws
    .filter(flaw => flaw.ancestryID === ancestry.id);

  const ancestryBoosts = ancestryboosts
    .filter(boost => boost.ancestryID === ancestry.id);

  flaws.forEach(flaw => {
    if (!flaw.flawedAbility) return;

    const ability = flawedAbilityNames[flaw.flawedAbility];
    const source = `ancestryflaws[${flaw.id}]`;

    sheet.abilities[ability].adjustConditional(
        -2, source, `Flaw inherit in ${ancestry.name}`,
        () => {
          // FIXME: If we have the feature that negates flaws then return false
          // if (sheet.feats.somethingOrOther())...
          return true;
        });
  });

  ancestryBoosts.forEach(boost => {
    if (!boost.boostedAbility) return;

    const source = `ancestryboosts[${boost.id}]`;
    const description = `Boost provided by ${ancestry.name}`;

    const ability = boostedAbilityNames[boost.boostedAbility];

    // Can be anything, so we need to use or request a choice
    if (ability === 'ANY') {
      // Single Ability to be chosen by user
      sheet.activeChoices.push({
        type: 'ability',
        ref: `ability-${source}`,
        level: 1,
        label: description,
        options: [[...abilityNames]],
      });
      
      // Checking if we already have a choice
      const choices = currentlyMadeChoice(`ability-${source}`);
      if (choices && choices.length === 1 && choices[0] != null) {
        sheet.abilities[choices[0]].adjust(1, source, `${description} (picked)`);  
      }

      return;
    }

    // One specific ability is boosted; no choice involved
    sheet.abilities[ability].adjust(1, source, description);
  });

  if ('langIDs' in ancestry) {
    const source = `ancestry[${ancestry.id}]-langs`;
    const description = `Languages of the ${ancestry.name}`;
    ancestry.langIDs.forEach(id => sheet.languages.adjust({id}, source, description));
  }

  const physicalFeatureIDs: PhysicalfeatureID[] = [];
  if ('physicalFeatureOneID' in ancestry)
    physicalFeatureIDs.push(ancestry.physicalFeatureOneID);
  if ('physicalFeatureTwoID' in ancestry)
    physicalFeatureIDs.push(ancestry.physicalFeatureTwoID);

  physicalFeatureIDs.forEach(id => {
    const source = `ancestry[${ancestry.id}]-physical`;
    const description = `Physical Features of ${ancestry.name}`;

    const feature = physicalfeatures.byId(id);
    if (!feature) return;

    sheet.physicalFeatures.adjust({id}, source, description);

    if ('wsci' in feature) {
      sheet.executeBlock(feature.wsci as Expression[], `${source}-code`, `Physical Feature: ${feature.name}`, 1);
    }  
  });

  const sensetypeIDs: SensetypeID[] = [];
  if ('visionSenseID' in ancestry)
    sensetypeIDs.push(ancestry.visionSenseID);
  if ('additionalSenseID' in ancestry)
    sensetypeIDs.push(ancestry.additionalSenseID);

  sensetypeIDs.forEach(id => {
    const source = `ancestry[${ancestry.id}]-vision`;
    const description = `${ancestry.name} Vision`;

    const sense = sensetypes.byId(id);
    if (!sense) return;

    sheet.senses.adjust({id}, source, description);
  });
}