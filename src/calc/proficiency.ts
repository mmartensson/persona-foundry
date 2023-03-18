import { currentlyMadeChoice } from "../state";
import { CalculatedSheet } from "./sheet";
import { skills } from '../data/skills';

export const addProficiencyIncreaseChoice = (sheet: CalculatedSheet, source: string, description: string, level: number, options?: string[]) => {
  const choice = currentlyMadeChoice(`prof-${source}`);
  if (choice) {
    sheet.proficiencies.adjustRank(choice, 'increase', source, description);
  }

  if (!options) {
    // You can typically just choose to train in skills, not perception and such
    options = skills.map(skill => skill.name.toLowerCase());
  }

  options = options.map(opt => opt.toLowerCase());

  sheet.activeChoices.push({
    type: 'prof',
    ref: `prof-${source}`,
    level: level,
    label: description,
    options,
  });
}

export const proficiencyDisplayName = (name: string) => {
  if (!name) return name;

  const upped = name
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/(?:^|\s+)(.)/g, (_, chr) => ' ' + chr.toUpperCase())
    .trim();

  const massaged = upped.endsWith('Dc') ? upped.slice(0,-2) + 'DC' : upped;

  return massaged;
}