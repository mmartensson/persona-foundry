import { ClassabilityID, classabilities } from "../data/classabilities";
import { ClassesTableRow, isClassID } from "../data/classes";
import { currentClass, currentLevel, currentlyMadeChoice } from "../state";
import { Expression } from "../wsc/types";
import { CalculatedSheet } from "./sheet";
import { addProficiencyIncreaseChoice } from './proficiency';
import { boostedAbilityNames, isAbility } from '../tables';

export const calculateClass = (sheet: CalculatedSheet) => {
  const cls = currentClass();
  if (!cls) return;

  if ('keyAbility' in cls) {
    const description = `Key Ability of ${cls.name}`;
    const source = `classes[${cls.id}]-key`;
    const key = cls.keyAbility;
        // ^?
    if (key === 'OTHER') {
      // Could be that some class ability will be handling this
    } else if (key.includes(' or ')) {
      const options = [key.split(' or ')
        .map(n => boostedAbilityNames[n])
        .filter(n => isAbility(n))];

      const choice = currentlyMadeChoice(`clab-${source}`);
      if (choice) {
        sheet.clabs.adjust({ id: choice }, source, description);
      }

      sheet.activeChoices.push({
        type: 'clab',
        ref: `clab-${source}`,
        level: 1,
        label: description,
        options
      });                                  
    } else {
      const ability = boostedAbilityNames[key];

      // One specific ability is boosted; no choice involved
      sheet.abilities[ability].adjust(1, source, description);
    }
  }

  const leveledClassAbilities = classabilities
    .filter(clab => isClassID(cls.id) && 'classID' in clab && clab.classID === cls.id)
    .filter(clab => ('level' in clab) && clab.level <= currentLevel());

  leveledClassAbilities.forEach(clab => {
    if (!('level' in clab)) return; // Impossible given filters above; needed for narrowing
    const level = clab.level;

    const source = `classabilities[${clab.id}]`;
    const description = `Level ${clab.level} ${cls.name}`;

    sheet.clabs.adjust({id: clab.id}, `${source}-leveled`, description);

    if ('wsci' in clab) {
      sheet.executeBlock(clab.wsci as Expression[], `${source}-code`, description, clab.level);
    }

    if (clab.selectType === 'SELECTOR') {
      const options: ClassabilityID[] = [];

      const viaSelectOption: ClassabilityID[] = classabilities
        .filter(opt => opt.selectType === 'SELECT_OPTION')
        .filter(opt => 'selectOptionFor' in opt && opt.selectOptionFor === clab.id)
        .map(opt => opt.id);
      options.push(...viaSelectOption);

      const viaIndivClass: ClassabilityID[] = classabilities
        .filter(opt => !('classID' in opt))
        .filter(opt => ('indivClassName' in opt) && opt.indivClassName === cls.name)
        .filter(opt => ('indivClassAbilName' in opt) && opt.indivClassAbilName === clab.name)
        .map(opt => opt.id);
      options.push(...viaIndivClass);

      const description = 'name' in clab ? `${cls.name}: ${clab.name}` : `${cls.name} option`;
      
      const choice = currentlyMadeChoice(`clab-${source}-option`);
      if (choice) {
        sheet.clabs.adjust({ id: choice }, source, description);
      }

      sheet.activeChoices.push({
        type: 'clab',
        ref: `clab-${source}-option`,
        level,
        label: description,
        options
      });                                  
    }
  });

  calculateClassBaseProficiencies(sheet, cls);
}

const calculateClassBaseProficiencies = (sheet: CalculatedSheet, cls: ClassesTableRow) => {
  const source = `classes[${cls.id}]-tprof`;
  const description = 'Class Defaults';
  const level = 1;

  const tSimpleProfProps = ['tPerception', 'tFortitude', 'tReflex', 'tWill', 'tClassDC'];

  tSimpleProfProps.forEach(prop => {
    if (!(prop in cls)) return;

    const prof = prop === 'tClassDC' ? 'class_dc' : prop.substring(1).toLowerCase();
    const rank = cls[prop] as Rank;
    sheet.proficiencies.adjustRank(prof, rank, source, description);
  });

  if ('tSkills' in cls) {
    const skills = cls.tSkills.split(',').map(skill => skill.trim().toLowerCase());
    skills.forEach(prof => sheet.proficiencies.adjustRank(prof, 'T', source, description));
  }

  if ('tSkillsMore' in cls && typeof cls.tSkillsMore === 'number') {
    for (let i=0; i<cls.tSkillsMore; i++) {
      addProficiencyIncreaseChoice(sheet, `${source}/${i}`, `${cls.name} Starting Skill`, level);
    }
  }

  const tEncodedProps = ['tWeapons','tArmor'];
  tEncodedProps.forEach(prop => {
    if (!(prop in cls)) return;

    cls[prop].split(',,,').forEach(part => {
      const [rank, prof] = part.trim().split(':::',2);
      sheet.proficiencies.adjustRank(prof.toLowerCase().replace(/\s+/g,'_'), rank, source, description);
    });
  });
}