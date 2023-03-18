import { ancestries, AncestriesTable, AncestriesTableRow } from './ancestries';
import { ancestryboosts, AncestryboostsTable, AncestryboostsTableRow } from './ancestryboosts';
import { ancestryflaws, AncestryflawsTable, AncestryflawsTableRow } from './ancestryflaws';
import { archetypes, ArchetypesTable, ArchetypesTableRow } from './archetypes';
import { armors, ArmorsTable, ArmorsTableRow } from './armors';
import { backgrounds, BackgroundsTable, BackgroundsTableRow } from './backgrounds';
import { books, BooksTable, BooksTableRow } from './books';
import { classabilities, ClassabilitiesTable, ClassabilitiesTableRow } from './classabilities';
import { classarchetypes, ClassarchetypesTable, ClassarchetypesTableRow } from './classarchetypes';
import { classes, ClassesTable, ClassesTableRow } from './classes';
import { conditions, ConditionsTable, ConditionsTableRow } from './conditions';
import { creatures, CreaturesTable, CreaturesTableRow } from './creatures';
import { damagetypes, DamagetypesTable, DamagetypesTableRow } from './damagetypes';
import { domains, DomainsTable, DomainsTableRow } from './domains';
import { extras, ExtrasTable, ExtrasTableRow } from './extras';
import { familiarabilities, FamiliarabilitiesTable, FamiliarabilitiesTableRow } from './familiarabilities';
import { feats, FeatsTable, FeatsTableRow } from './feats';
import { heritages, HeritagesTable, HeritagesTableRow } from './heritages';
import { homebackgrounds, HomebackgroundsTable, HomebackgroundsTableRow } from './homebackgrounds';
import { itemrunes, ItemrunesTable, ItemrunesTableRow } from './itemrunes';
import { items, ItemsTable, ItemsTableRow } from './items';
import { languages, LanguagesTable, LanguagesTableRow } from './languages';
import { physicalfeatures, PhysicalfeaturesTable, PhysicalfeaturesTableRow } from './physicalfeatures';
import { sensetypes, SensetypesTable, SensetypesTableRow } from './sensetypes';
import { sheetstates, SheetstatesTable, SheetstatesTableRow } from './sheetstates';
import { shields, ShieldsTable, ShieldsTableRow } from './shields';
import { skills, SkillsTable, SkillsTableRow } from './skills';
import { specificfamiliars, SpecificfamiliarsTable, SpecificfamiliarsTableRow } from './specificfamiliars';
import { spells, SpellsTable, SpellsTableRow } from './spells';
import { storages, StoragesTable, StoragesTableRow } from './storages';
import { tags, TagsTable, TagsTableRow } from './tags';
import { uniheritages, UniheritagesTable, UniheritagesTableRow } from './uniheritages';
import { weapons, WeaponsTable, WeaponsTableRow } from './weapons';

export const tableNames = [
  'ancestries',
  'ancestryboosts',
  'ancestryflaws',
  'archetypes',
  'armors',
  'backgrounds',
  'books',
  'classabilities',
  'classarchetypes',
  'classes',
  'conditions',
  'creatures',
  'damagetypes',
  'domains',
  'extras',
  'familiarabilities',
  'feats',
  'heritages',
  'homebackgrounds',
  'itemrunes',
  'items',
  'languages',
  'physicalfeatures',
  'sensetypes',
  'sheetstates',
  'shields',
  'skills',
  'specificfamiliars',
  'spells',
  'storages',
  'tags',
  'uniheritages',
  'weapons'
] as const;

export type TableName = typeof tableNames[number];

export const tables = {
  'ancestries': ancestries,
  'ancestryboosts': ancestryboosts,
  'ancestryflaws': ancestryflaws,
  'archetypes': archetypes,
  'armors': armors,
  'backgrounds': backgrounds,
  'books': books,
  'classabilities': classabilities,
  'classarchetypes': classarchetypes,
  'classes': classes,
  'conditions': conditions,
  'creatures': creatures,
  'damagetypes': damagetypes,
  'domains': domains,
  'extras': extras,
  'familiarabilities': familiarabilities,
  'feats': feats,
  'heritages': heritages,
  'homebackgrounds': homebackgrounds,
  'itemrunes': itemrunes,
  'items': items,
  'languages': languages,
  'physicalfeatures': physicalfeatures,
  'sensetypes': sensetypes,
  'sheetstates': sheetstates,
  'shields': shields,
  'skills': skills,
  'specificfamiliars': specificfamiliars,
  'spells': spells,
  'storages': storages,
  'tags': tags,
  'uniheritages': uniheritages,
  'weapons': weapons,
} as const satisfies { [T in TableName]: any };

export type TableTypeMap = {
  'ancestries': AncestriesTable;
  'ancestryboosts': AncestryboostsTable;
  'ancestryflaws': AncestryflawsTable;
  'archetypes': ArchetypesTable;
  'armors': ArmorsTable;
  'backgrounds': BackgroundsTable;
  'books': BooksTable;
  'classabilities': ClassabilitiesTable;
  'classarchetypes': ClassarchetypesTable;
  'classes': ClassesTable;
  'conditions': ConditionsTable;
  'creatures': CreaturesTable;
  'damagetypes': DamagetypesTable;
  'domains': DomainsTable;
  'extras': ExtrasTable;
  'familiarabilities': FamiliarabilitiesTable;
  'feats': FeatsTable;
  'heritages': HeritagesTable;
  'homebackgrounds': HomebackgroundsTable;
  'itemrunes': ItemrunesTable;
  'items': ItemsTable;
  'languages': LanguagesTable;
  'physicalfeatures': PhysicalfeaturesTable;
  'sensetypes': SensetypesTable;
  'sheetstates': SheetstatesTable;
  'shields': ShieldsTable;
  'skills': SkillsTable;
  'specificfamiliars': SpecificfamiliarsTable;
  'spells': SpellsTable;
  'storages': StoragesTable;
  'tags': TagsTable;
  'uniheritages': UniheritagesTable;
  'weapons': WeaponsTable;
};

export type Table = TableTypeMap[TableName];

export type TableRowTypeMap = {
  'ancestries': AncestriesTableRow;
  'ancestryboosts': AncestryboostsTableRow;
  'ancestryflaws': AncestryflawsTableRow;
  'archetypes': ArchetypesTableRow;
  'armors': ArmorsTableRow;
  'backgrounds': BackgroundsTableRow;
  'books': BooksTableRow;
  'classabilities': ClassabilitiesTableRow;
  'classarchetypes': ClassarchetypesTableRow;
  'classes': ClassesTableRow;
  'conditions': ConditionsTableRow;
  'creatures': CreaturesTableRow;
  'damagetypes': DamagetypesTableRow;
  'domains': DomainsTableRow;
  'extras': ExtrasTableRow;
  'familiarabilities': FamiliarabilitiesTableRow;
  'feats': FeatsTableRow;
  'heritages': HeritagesTableRow;
  'homebackgrounds': HomebackgroundsTableRow;
  'itemrunes': ItemrunesTableRow;
  'items': ItemsTableRow;
  'languages': LanguagesTableRow;
  'physicalfeatures': PhysicalfeaturesTableRow;
  'sensetypes': SensetypesTableRow;
  'sheetstates': SheetstatesTableRow;
  'shields': ShieldsTableRow;
  'skills': SkillsTableRow;
  'specificfamiliars': SpecificfamiliarsTableRow;
  'spells': SpellsTableRow;
  'storages': StoragesTableRow;
  'tags': TagsTableRow;
  'uniheritages': UniheritagesTableRow;
  'weapons': WeaponsTableRow;
};

export type TableRow = TableRowTypeMap[TableName];
