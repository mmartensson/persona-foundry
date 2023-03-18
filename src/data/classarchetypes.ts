import { hookupTableLookup } from '../tables';

import { ContentSrc } from './shared_types';

export interface ReplacementCodeJSON {
    initial: ReplacementCodeJSONInitial;
    changes: readonly ReplacementCodeJSONChange[];
}

export interface ReplacementCodeJSONChange {
    detectionCode:        string;
    extraText:            null | string;
    replacementStatement: null | string;
    extraCode:            null | string;
}

export interface ReplacementCodeJSONInitial {
    detectionCode:                     readonly string[];
    archetypeText:                     string;
    replacementStatement:              null | string;
    textChangeType:                    string;
    extraCode:                         null | string;
    clearDataAfterExtraCode?:          boolean;
    clearDataAfterExtraCodeForChange?: boolean;
}

export interface ClassarchetypesTableRowConstraints {
  table: 'classarchetypes';
  id: number;
  name?: string;
  description?: string;
  replacementCodeJSON?: ReplacementCodeJSON;
  dedicationFeatName?: string;
  contentSrc: ContentSrc;
  homebrewID?: number;
  createdAt?: string;
  updatedAt?: string;
}

export type ClassarchetypesTable = typeof classarchetypes;
export type ClassarchetypesTableRow = ClassarchetypesTable[number];
export type ClassarchetypeID = ClassarchetypesTableRow['id'];

export const isClassarchetypeID = (id?: number): id is ClassarchetypeID => !!id && !!classarchetypes.byIdLax(id);
export const assertIsClassarchetypeID = (id?: number): asserts id is ClassarchetypeID => { if (!isClassarchetypeID(id)) throw Error('Expected a ClassarchetypeID; got ' + id); }

const _classarchetypes = [
{
    "table": "classarchetypes",
    "id": 1,
    "name": "Elementalist",
    "description": "You revere the four elements—air, earth, fire, and water—as the building blocks of creation and the source of all life. You believe that by balancing, mixing, and rearranging these four elements, magic is made. This belief has led you to eschew traditional magical theories and divisions, and you instead focus on harnessing, manipulating, and shaping the four elements. You cast spells drawn from multiple traditions and can use the four elements to alter and empower your spells, making them manifest and mixing them in unique ways. Most elementalists embrace the four elements equally as a mystical quaternity, and they strengthen their connection to one of these elements each day to protect themselves from harm. Others, notably sorcerer and wizard elementalists, feel a stronger connection to a singular element that they hone to great heights, utilizing the other three elements to support and augment their favored element.",
    "replacementCodeJSON": {
        "initial": {
            "detectionCode": [
                ":Arcane $OR$ :Primal",
                "SpellAttacks:T $OR$ _SPELL_ATTACK:T"
            ],
            "archetypeText": "You’re a spellcaster that’s specialized in harnessing the four elements. Though you might feel a stronger kinship for one element over the others, you’re capable of shaping all of them. Due to your specialization in elemental magic, you have a smaller, more focused spell list than other spellcasters, though your magic is drawn from multiple traditions. If you choose this class archetype, you must select the (feat: Elementalist Dedication) as your 2nd-level class feat.\\n~ Prerequisites: You must have a spellcasting class feature that chooses spells from the arcane or primal spell list.\\n~ Elementalist Adjustments: Replace your spell list with the (feat: elemental spell list) (SoM pg. 203). Your actual magical tradition is unchanged, but you choose your spells from the elemental list instead.\\n~ Sorcerer Elementalist Adjustments: If you’re a sorcerer with the elemental bloodline, you can replace your initial bloodline spell with an initial elemental focus spell, and your advanced bloodline spell with an advanced elemental focus spell. The initial and advanced elemental focus spells you select must have the same trait as your elemental bloodline and come from the options starting on page 200.\\n~ Druid Elementalist Adjustments: If you’re a druid of the storm order, you can choose to replace your starting order spell, (spell: tempest surge), with (spell: updraft) (page 201).\\n~ Wizard Elementalist Adjustments: If you’re a wizard with an arcane school, instead of specializing in a school of magic, you specialize in one of the four elements: air, earth, fire, or water. Any benefits your arcane school would grant you that are associated with a selected spell school, you instead apply to your selected element. For example, if you select air as your element, you can prepare only spells that have the (trait: air) trait in your extra arcane school slots, you can prepare an extra (trait: air) cantrip, and you add an extra (trait: air) spell from the elemental spell list to your spellbook. Additionally, in place of your arcane school spell, you learn the initial elemental focus spell of your selected element from the elemental focus spells starting on SoM pg. 200. In all other ways, your arcane school functions as written in the Core Rulebook. If you later select the (feat: Advanced School Spell) wizard feat, instead of gaining the listed school spell, you gain the advanced elemental focus spell of your selected element from the advanced elemental focus spells starting on page 200.",
            "replacementStatement": null,
            "textChangeType": "ADD",
            "extraCode": null
        },
        "changes": [
            {
                "detectionCode": "GIVE-FOCUS-SPELL=Sorcerer:Elemental Toss",
                "extraText": "If you’re a sorcerer with the elemental bloodline, you can replace your initial bloodline spell with an initial elemental focus spell, and your advanced bloodline spell with an advanced elemental focus spell. The initial and advanced elemental focus spells you select must have the same trait as your elemental bloodline and come from the options starting on SoM pg. 200.",
                "replacementStatement": "",
                "extraCode": "GIVE-FEAT-FROM=Choose an Element:Sorcerer Elementalist - Air,Sorcerer Elementalist - Earth,Sorcerer Elementalist - Fire,Sorcerer Elementalist - Water,Sorcerer Elementalist - Don't Change"
            },
            {
                "detectionCode": "GIVE-FOCUS-SPELL=Sorcerer:Elemental Motion",
                "extraText": null,
                "replacementStatement": "",
                "extraCode": null
            },
            {
                "detectionCode": "GIVE-FOCUS-SPELL=Druid:Tempest Surge",
                "extraText": "If you’re a druid of the storm order, you can choose to replace your starting order spell, (spell: tempest surge), with (spell: updraft).",
                "replacementStatement": "",
                "extraCode": "GIVE-FEAT-FROM=Choose an Option:Druid Elementalist - Use Updraft,Druid Elementalist - Keep Tempest Surge"
            },
            {
                "detectionCode": "SET-SPELL-SLOTS=Wizard:Single-Set",
                "extraText": "If you’re a wizard with an arcane school, instead of specializing in a school of magic, you specialize in one of the four elements: air, earth, fire, or water. Any benefits your arcane school would grant you that are associated with a selected spell school, you instead apply to your selected element. For example, if you select air as your element, you can prepare only spells that have the (trait: air) trait in your extra arcane school slots, you can prepare an extra (trait: air) cantrip, and you add an extra (trait: air) spell from the elemental spell list to your spellbook. Additionally, in place of your arcane school spell, you learn the initial elemental focus spell of your selected element from the elemental focus spells starting on SoM pg. 200. In all other ways, your arcane school functions as written in the Core Rulebook. If you later select the (feat: Advanced School Spell) wizard feat, instead of gaining the listed school spell, you gain the advanced elemental focus spell of your selected element from the advanced elemental focus spells starting on page 200.",
                "replacementStatement": null,
                "extraCode": "GIVE-FEAT-FROM=Choose an Element:Wizard Elementalist - Air,Wizard Elementalist - Earth,Wizard Elementalist - Fire,Wizard Elementalist - Water"
            },
            {
                "detectionCode": "GIVE-FOCUS-SPELL=Wizard:",
                "extraText": null,
                "replacementStatement": "",
                "extraCode": null
            }
        ]
    },
    "dedicationFeatName": "Elementalist Dedication",
    "contentSrc": "SECRETS-OF-MAGIC"
} as const satisfies ClassarchetypesTableRowConstraints,
{
    "table": "classarchetypes",
    "id": 2,
    "name": "Flexible Spellcaster",
    "description": "You’ve learned how to cast spells flexibly, blending the best elements of spontaneous and prepared spellcasting at the cost of casting fewer spells each day.",
    "replacementCodeJSON": {
        "initial": {
            "detectionCode": [
                ":Three-Quarters",
                ":PREPARED-"
            ],
            "archetypeText": "This class feature alters your spellcasting class feature (such as Arcane Spellcasting for the wizard or Divine Spellcasting for the cleric). If you choose this class archetype, you must select (feat: Flexible Spellcaster Dedication) as your 2nd-level class feat.\\n~ Prerequisites: You must have a class, such as clerics, druids, witches, and wizards, that prepares spells in spell slots using the same number of prepared spells per day.\\n~ Flexible Spellcaster Adjustments: You learn spells as normal for your class (a wizard uses a spellbook, a witch teaches spells to their familiar, and so on), but change your spellcasting from your class as follows.\\n* : You can cast fewer spells each day. Your number of spell slots per day don’t advance from 2 to 3 spells at even levels (see Table 5—1 on SoM pg. 208).\\n* : Reduce the number of cantrips you gain from your class by 2. This archetype doesn’t change the way you prepare cantrips.\\n* : During your daily preparations, you prepare a spell collection rather than preparing spells into each spell slot individually. The number of spells in your spell collection each day equals the total number of spell slots you get each day from your class spells. Select these spells from the same source as normal, such as from a spellbook for a wizard.\\n* : You can cast any of the spells in your collection by using a spell slot of an appropriate level. For instance, if you were level 1 and had (spell: feather fall) and (spell: magic missile) in your spell collection, you could cast (spell: feather fall) twice that day, (spell: magic missile) twice, or each spell once.\\n* : Extra spell slots you gain that have additional restrictions, like the wizard’s specialist school spells or the cleric’s divine font spells, don’t change due to this archetype, nor do such spells count toward the number of spells you place in your spell collection. For more information on restricted spell slots, see SoM pg. 209.\\n**Heightening Spells**\\nOnce you gain 2nd-level spells, you can heighten any spell in your spell collection to any level you can cast, similar to a spontaneous spellcaster’s signature spells. The only restriction is that you must select at least one 1st-level spell for your collection each time you prepare, ensuring that you can use all your spell slots each day.\\n**Adjudicating Class Feats and Features**\\nSome of your class feats or features might rely on the fact that you prepare spells in spell slots. While some class feats might no longer work or be necessary with the flexible spellcaster archetype, in many cases you can make a simple replacement and continue using the class feat. The following class feats simply require replacing “a spell you have prepared” or “a prepared spell” for “a spell in your collection” or “a spell slot.” For example, in (feat: Counterspell), you’d replace “a spell you have prepared” in the trigger for “a spell in your collection” and “expend a prepared spell” for “expend a spell slot.” Similarly, in arcane bond, you’d replace “cast one spell you prepared today and already cast” with “cast one spell in your collection you’ve already cast today.”\\nThe (feat: Counterspell) and (feat: Leyline Conduit) feats in the Core Rulebook need these substitutions, as does (feat: Form Retention) from the Advanced Player’s Guide. (feat: Spell Mastery) provides additional restricted spells, like divine font or specialist spells; you can take it, but it doesn’t add to your collection and works like normal prepared spells.\\n**Disallowed Feats**\\nThe following feats from the Core Rulebook aren’t available for a flexible spellcaster: (feat: Call of the Wild), (feat: Clever Counterspell), (feat: Infinite Possibilities), (feat: Reprepare Spell), and (feat: Spell Combination). The disallowed feats from the Advanced Player’s Guide are as follows: (feat: Elemental Summons), (feat: Miraculous Possibility), (feat: Rites of Convocation), and (feat: Rites of Transfiguration).\\n**TABLE 5–1: FLEXIBLE SPELLCASTER SPELLS PER DAY**\\nYour Level|Cantrips|1st|2nd|3rd|4th|5th|6th|7th|8th|9th|10th|Collection\\n:--|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:\\n1|3|2|—|—|—|—|—|—|—|—|—|2\\n2|4|2|—|—|—|—|—|—|—|—|—|2\\n3|4|2|2|—|—|—|—|—|—|—|—|4\\n4|5|2|2|—|—|—|—|—|—|—|—|4\\n5|5|2|2|2|—|—|—|—|—|—|—|6\\n6|5|2|2|2|—|—|—|—|—|—|—|6\\n7|5|2|2|2|2|—|—|—|—|—|—|8\\n8|5|2|2|2|2|—|—|—|—|—|—|8\\n9|5|2|2|2|2|2|—|—|—|—|—|10\\n10|5|2|2|2|2|2|—|—|—|—|—|10\\n11|5|2|2|2|2|2|2|—|—|—|—|12\\n12|5|2|2|2|2|2|2|—|—|—|—|12\\n13|5|2|2|2|2|2|2|2|—|—|—|14\\n14|5|2|2|2|2|2|2|2|—|—|—|14\\n15|5|2|2|2|2|2|2|2|2|—|—|16\\n16|5|2|2|2|2|2|2|2|2|—|—|16\\n17|5|2|2|2|2|2|2|2|2|2|—|18\\n18|5|2|2|2|2|2|2|2|2|2|—|18\\n19|5|2|2|2|2|2|2|2|2|2|^^*^^|18\\n20|5|2|2|2|2|2|2|2|2|2|^^*^^|18\\n~ ^^*^^: __Your class most likely has a class feature that gives you a single 10th level spell slot that works a bit differently from other slots. If so, flexible spellcaster doesn’t change the way that spell works.__",
            "replacementStatement": "",
            "textChangeType": "ADD",
            "extraCode": "SET-SPELL-SLOTS={CLASS_NAME}:Reduced\\nSET-SPELL-CASTING-TYPE={CLASS_NAME}:Flexible-Collection",
            "clearDataAfterExtraCode": false
        },
        "changes": []
    },
    "dedicationFeatName": "Flexible Spellcaster Dedication",
    "contentSrc": "SECRETS-OF-MAGIC"
} as const satisfies ClassarchetypesTableRowConstraints,
{
    "table": "classarchetypes",
    "id": 3,
    "name": "Runelord",
    "description": "You’ve learned arcane magic following the path of the runelords. You unlock secrets of a chosen school of magic while forsaking lesser schools. You learn the secrets of runic magic, the building blocks of magic. But be warned: you might succumb to sin in your pursuit of power.\nYou also learn to use polearms, the signature weapons of the runelords, and can acquire the secrets of the mighty, ancient magic items called __aeon stones__, embedding them into your skin.",
    "replacementCodeJSON": {
        "initial": {
            "detectionCode": [
                "SET-SPELL-SLOTS=Wizard:Single-Set"
            ],
            "archetypeText": "You draw untold power from runes, sometimes called sin magic. You associate with one of the seven vices, also known as the seven rewards of rule: envy ((trait: abjuration)), gluttony ((trait: necromancy)), greed ((trait: transmutation)), lust ((trait: enchantment)), pride ((trait: illusion)), sloth ((trait: conjuration)), and wrath ((trait: evocation)). Studying these techniques often tempts you with the associated sin. While leaning into it could corrupt you, it might make you more powerful. If you choose this class archetype, you must select (feat: Runelord Dedication) as your 2nd-level class feat.\\n~ Prerequisites: You must be a wizard specializing in one of the seven schools other than divination.\\n~ Runelord Adjustments: In addition to the normal school spell for your chosen school of magic, you learn the initial rune spell associated with your school, with its school adjusted to your chosen school of magic if it wasn’t from that school already. The rune spells can be found on SoM pages 238–239. Your pool of Focus Points increases to 2 Focus Points. At 8th level, you also learn the advanced rune spell associated with your school, also adjusting its school to match your chosen school of magic if it wasn’t already, and your pool of Focus Points increases to 3 Focus Points.\\n :> You can (action: Refocus) by indulging in your school’s sin in lieu of studying your spellbook. As you become more powerful, your indulgence grows. At 12th level, if you indulge in your sin to (action: Refocus), if you have spent at least 2 Focus Points since the last time you (action: Refocused | Refocus), you recover 2 Focus Points when you (action: Refocus) instead of 1. At 18th level, if you indulge in your sin to (action: Refocus), if you have spent at least 3 Focus Points since the last time you (action: Refocused | Refocus), you recover 3 Focus Points when you (action: Refocus) instead of 1.\\n :> You are trained in martial polearms. At 11th level, if you gain weapon expertise, you become an expert in martial polearms.\\n :> Finally, you lose the ability to prepare or cast any spell from your school’s prohibited schools (SoM pages 238–239). You remove all spells of those schools from your spell list, meaning you can’t even activate scrolls or wands of such spells.",
            "replacementStatement": null,
            "textChangeType": "ADD",
            "extraCode": "ADD-TEXT=__Manually add your proficiency in martial polearms.__",
            "clearDataAfterExtraCodeForChange": false
        },
        "changes": [
            {
                "detectionCode": "GIVE-FOCUS-SPELL=Wizard:Protective Ward",
                "extraText": "Runelords of abjuration specialize in protective magic and in suppressing all other magic to glorify their own. **Prohibited Schools:** (trait: evocation), (trait: necromancy); **Rune Spells:** initial: (spell: blind ambition), advanced: (spell: competitive edge)",
                "replacementStatement": null,
                "extraCode": "GIVE-FOCUS-SPELL=Wizard:Blind Ambition\\nGIVE-FOCUS-POINT\\nIF (HAS-LEVEL>=8) {GIVE-FOCUS-SPELL=Wizard:Competitive Edge}\\nIF (HAS-LEVEL>=8) {GIVE-FOCUS-POINT}"
            },
            {
                "detectionCode": "GIVE-FOCUS-SPELL=Wizard:Augment Summoning",
                "extraText": "Runelords of conjuration use their magic to create what they need as they need it, and call forth servants to do their bidding. **Prohibited Schools:** (trait: evocation), (trait: illusion); **Rune Spells:** initial: (spell: efficient apport), advanced: (spell: swamp of sloth)",
                "replacementStatement": null,
                "extraCode": "GIVE-FOCUS-SPELL=Wizard:Efficient Apport\\nGIVE-FOCUS-POINT\\nIF (HAS-LEVEL>=8) {GIVE-FOCUS-SPELL=Wizard:Swamp of Sloth}\\nIF (HAS-LEVEL>=8) {GIVE-FOCUS-POINT}"
            },
            {
                "detectionCode": "GIVE-FOCUS-SPELL=Wizard:Charming Words",
                "extraText": "Runelords of enchantment specialize in magic that compels and controls the minds of others, often to fulfill their own needs and desires. **Prohibited Schools:** (trait: necromancy), (trait: transmutation); **Rune Spells:** initial: (spell: charming touch), advanced: (spell: captivating adoration)",
                "replacementStatement": null,
                "extraCode": "GIVE-FOCUS-SPELL=Wizard:Charming Touch\\nGIVE-FOCUS-POINT\\nIF (HAS-LEVEL>=8) {GIVE-FOCUS-SPELL=Wizard:Captivating Adoration}\\nIF (HAS-LEVEL>=8) {GIVE-FOCUS-POINT}"
            },
            {
                "detectionCode": "GIVE-FOCUS-SPELL=Wizard:Force Bolt",
                "extraText": "Runelords of evocation channel raw destructive energies and direct them toward all who would oppose their will. **Prohibited Schools:** (trait: abjuration), (trait: conjuration); **Rune Spells:** initial: (spell: weapon surge), advanced: (spell: zeal for battle)",
                "replacementStatement": null,
                "extraCode": "GIVE-FOCUS-SPELL=Wizard:Weapon Surge\\nGIVE-FOCUS-POINT\\nIF (HAS-LEVEL>=8) {GIVE-FOCUS-SPELL=Wizard:Zeal for Battle}\\nIF (HAS-LEVEL>=8) {GIVE-FOCUS-POINT}"
            },
            {
                "detectionCode": "GIVE-FOCUS-SPELL=Wizard:Warped Terrain",
                "extraText": "Runelords of illusion use magic to create the perfect appearance and fool others through trickery, deception, and misdirection. **Prohibited Schools:** (trait: conjuration), (trait: transmutation); **Rune Spells:** initial: (spell: veil of confidence), advanced: (spell: delusional pride)",
                "replacementStatement": null,
                "extraCode": "GIVE-FOCUS-SPELL=Wizard:Veil of Confidence\\nGIVE-FOCUS-POINT\\nIF (HAS-LEVEL>=8) {GIVE-FOCUS-SPELL=Wizard:Delusional Pride}\\nIF (HAS-LEVEL>=8) {GIVE-FOCUS-POINT}"
            },
            {
                "detectionCode": "GIVE-FOCUS-SPELL=Wizard:Call of the Grave",
                "extraText": "Runelords of necromancy tap into their constant hunger for more power and enhancing their longevity, potentially even unto undeath. **Prohibited Schools:** (trait: abjuration), (trait: enchantment); **Rune Spells:** initial: (spell: overstuff), advanced: (spell: take its course)",
                "replacementStatement": null,
                "extraCode": "GIVE-FOCUS-SPELL=Wizard:Overstuff\\nGIVE-FOCUS-POINT\\nIF (HAS-LEVEL>=8) {GIVE-FOCUS-SPELL=Wizard:Take Its Course}\\nIF (HAS-LEVEL>=8) {GIVE-FOCUS-POINT}"
            },
            {
                "detectionCode": "GIVE-FOCUS-SPELL=Wizard:Physical Boost",
                "extraText": "Runelords of transmutation not only transform objects to create value, but also transform and enhance their own power. **Prohibited Schools:** (trait: enchantment), (trait: illusion); **Rune Spells:** initial: (spell: appearance of wealth), advanced: (spell: precious metals)",
                "replacementStatement": null,
                "extraCode": "GIVE-FOCUS-SPELL=Wizard:Appearance of Wealth\\nGIVE-FOCUS-POINT\\nIF (HAS-LEVEL>=8) {GIVE-FOCUS-SPELL=Wizard:Precious Metals}\\nIF (HAS-LEVEL>=8) {GIVE-FOCUS-POINT}"
            }
        ]
    },
    "dedicationFeatName": "Runelord Dedication",
    "contentSrc": "SECRETS-OF-MAGIC"
} as const satisfies ClassarchetypesTableRowConstraints,
{
    "table": "classarchetypes",
    "id": 4,
    "name": "Wellspring Mage",
    "description": "The source of your magic buckles against your control, always pressing to be released.",
    "replacementCodeJSON": {
        "initial": {
            "detectionCode": [
                ":Spontaneous-Repertoire"
            ],
            "archetypeText": "You regain magic power quickly, but it can be difficult for you to control. You must select (feat: Wellspring Mage Dedication) as your 2nd-level class feat.\\n~ Prerequisites: You must have a class that casts spells with a spell repertoire.\\n~ Wellspring Mage Adjustments: You learn spells as normal for your class, but change your spontaneous spellcasting in the following ways.\\nYou can cast fewer spells each day unless you gain more spells thanks to your wellspring. Reduce your number of spell slots of each spell level by 1. Reduce the number of cantrips you gain from your class by 1.\\nA wellspring of magic fills you with power that’s not fully under your control. When you roll initiative for a non-trivial combat encounter, as well as in other high-stress situations of the GM’s choice, magic wells up within you. Attempt a DC 6 flat check.\\n~ Critical Success: You temporarily recover an expended spell slot of any level of your choice. The temporary spell slot lasts for 1 minute, and if you don’t use it by then, you experience an immediate wellspring surge (SoM pg. 250).\\n~ Success: As critical success, except you randomly determine the level of spell slot from among your top three spell levels (or all your levels of spell slots if you have fewer than three). The slot lasts 3 rounds instead of 1 minute.\\n~ Failure: You generate a wellspring surge, with a spell level chosen randomly among your top three levels of spell slots (or all your levels if you have fewer than three).\\nYou can gain a temporary spell slot no more than twice per day. If you would gain a temporary spell slot for a level that has no expended spell slots, there’s no effect. If you use a temporary slot to cast a spell with a duration, the spell ends whenever you would have lost the slot if its duration hasn’t yet elapsed. If you roll for wellspring magic while you currently have a temporary spell slot, you automatically fail the flat check.\\n***Wellspring Surges***\\nRoll 1d20 and use Table 5–2: Wellspring Surges below to determine the surge’s effect. If the effect calls for a damage type, the GM chooses the type based on the types of spells you know or your current location. The wellspring surge uses your spell DC. You have no control over the way your wellspring surge manifests. You are the point of origin for your wellspring surges, and you are not excluded from their effects. If you force a foe to generate a surge, they are the origin point of that surge instead.\\nIf your wellspring was granted by a being like a god or muse, the entity’s intentions might sometimes alter the results of wellspring surges, or move the point of origin for an area to any point within 30 feet if the GM determines this fits the situation. For example, instead of uncontrolled damage, the entity might choose to damage only creatures opposing its plan, even if they are your allies.\\nA wellspring surge always has the trait of your magical tradition, plus any traits that appear in parentheses at the end of the surge’s effects.\\n**TABLE 5–2: WELLSPRING SURGES**\\nd20|Effect\\n:--|:--\\n1|**Energy Unleashed** ((trait: evocation)) Raw energy deals 2d6 damage per spell level of the surge (basic Reflex save) in a 10-foot burst.\\n2|**Positive Energy Expulsion** ((trait: healing), (trait: necromancy), (trait: positive)) Positive energy explodes outward, healing living creatures for 1d8 Hit Points per spell level of the surge in a 20-foot burst. Undead creatures instead take the same amount of positive damage, with a basic Will save.\\n3|**Mass Siphon** ((trait: transmutation)) Creatures and objects within a 30-foot emanation become nearly weightless until the end of your next turn. Nearly weightless creatures can (action: Climb) at their land Speed and can (action: Leap) as far upward as they could normally (action: Leap) horizontally.\\n4|**Magical Nemesis** ((trait: conjuration), (trait: teleportation)) A random creature connected to your magic (or inimical to it) appears within 60 feet. The creature should be of a level approximately equal to the level of an animal summoned by (spell: summon animal) of the spell level, although it can be of any type. The GM determines the specific creature. The creature is unfriendly to you and friendly to your apparent enemies. After 1 minute, the creature can choose either to return where it came from or to remain. It is not (trait: summoned) or a (trait: minion).\\n5|**Monstrous Transformation** ((trait: mental), (trait: morph), (trait: transmutation)) Your head and arms transform into an exaggerated imitation of a creature connected to your magic for 1 minute. The GM determines the creature. You gain a status bonus to weapon and unarmed damage rolls equal to the spell level. At the start of each of your turns while you are transformed, you must succeed at a Will saving throw or be confused until the start of your next turn. On a critical success, you can choose to end the effect entirely, also losing the status bonus.\\n6|**Sudden Gale** ((trait: air), (trait: evocation)) Weather in a 40-foot emanation is disturbed. Strong winds blow in a random direction for 1 minute. Each creature that starts its turn in the area must succeed at a Fortitude save or fall prone (and be pushed 10 feet on a critical failure), and you must succeed at this save immediately after the surge. Any movement against the wind is difficult terrain, or greater difficult terrain while flying.\\n7|**Tremor** ((trait: earth), (trait: evocation)) The earth trembles in a 40-foot emanation. Each creature on a surface must immediately succeed at a Fortitude save or fall prone. The surface then becomes difficult terrain for 1 minute.\\n8|**Oppressive Voice** ((trait: divination), (trait: mental), (trait: nonlethal)) The voice of your muse, your deity, an ancestor, or another appropriate entity suddenly overwhelms your mind. You must attempt a Will saving throw. You take 1d4 mental damage per spell level with a basic Will save. On a failure, you’re also stunned 1 (stunned 2 on a critical failure).\\n9|**Trinket Squall** ((trait: illusion)) Visual illusions of objects related to your magic fall like rain throughout a 40-foot burst for 1 minute, giving concealment in the area. Creatures can attempt to disbelieve this illusion (CRB pg. 298).\\n10|**Antimagic Eruption** ((trait: abjuration)) The surge attempts to counteract a random spell active on you and on each creature within a 10-foot burst.\\n11|**Mental Broadcast** ((trait: detection), (trait: divination), (trait: mental)) For 1 minute, everyone within 30 feet of you can hear your surface thoughts.\\n12|**Verdant Clutch** ((trait: conjuration), (trait: plant)) Plants and vines grow from all surfaces within 20 feet, causing all creatures in the area to be immobilized unless they succeed at a Reflex save. The (action: Escape) DC is equal to the spell DC.\\n13|**Tinge of Terror** ((trait: emotion), (trait: enchantment), (trait: fear), (trait: mental)) All creatures within 20 feet are affected by powerful fright. They attempt a Will save, becoming frightened 1 on a failure or frightened 2 on a critical failure.\\n14|**Strike up the Band** ((trait: auditory), (trait: illusion)) For 1 minute, you are followed by orchestral theme music tied to the emotional content of the actions you’re performing. This grants you a +2 status bonus to Diplomacy, Intimidation, and Performance checks, a –2 status penalty to Deception checks, and makes certain uses of Stealth virtually impossible. It might have other effects as the GM sees fit.\\n15|**Life Sap** ((trait: necromancy)) The surge drains your life force and strength. You become drained 1 and doomed 1, and you are enfeebled 2 for 1 minute.\\n16|**Ablative Barrier** ((trait: abjuration)) Energy forms a protective barrier that ablates slowly as creatures in the area take damage. All creatures in a 40-foot burst gain resistance to all damage equal to double the surge’s spell level for up to 1 minute. Whenever a creature applies this resistance, the resistance for all affected creatures reduces by 1. The effect ends for all creatures when it reduces to 0.\\n17|**Luminous Pests** ((trait: illusion), (trait: visual)) Numerous tiny flying creatures formed of bright colorful light, such as bats or hummingbirds, emerge from you, flying in a 30-foot cone. You and all creatures in the cone must succeed at a Will save or be dazzled for 1 minute, or blinded for 1 round and then dazzled for 1 minute on a critical failure.\\n18|**Emotional Turmoil** ((trait: emotion), (trait: enchantment), (trait: mental)) A swirl of conflicting emotions overwhelm you from the surging magic. For 1 minute, attempt a DC 11 flat check at the start of each of your turns. On a success, you gain a +2 status bonus to all attack rolls, saving throws, and skill checks; on a failure, you take a –2 status penalty to them instead.\\n19|**Sudden Downpour** ((trait: evocation), (trait: water)) Water cascades from above, putting out non-magical fires in a 10-foot burst and attempting to counteract magical fires.\\n20|**Spell Surge** You immediately cast any spell in your repertoire of the surge’s spell level or lower (or from your prepared spells or innate spells if you don’t have a repertoire but have been forced to generate a wellspring surge). You must choose a spell that takes 3 or fewer actions to cast.\\n",
            "replacementStatement": null,
            "textChangeType": "ADD",
            "extraCode": null
        },
        "changes": [
            {
                "detectionCode": ":THREE-QUARTERS",
                "extraText": null,
                "replacementStatement": "SET-SPELL-SLOTS={CLASS_NAME}:THREE-QUARTERS:REDUCE-SLOTS-BY-ONE",
                "extraCode": null
            },
            {
                "detectionCode": ":FULL",
                "extraText": null,
                "replacementStatement": "SET-SPELL-SLOTS={CLASS_NAME}:FULL:REDUCE-SLOTS-BY-ONE",
                "extraCode": null
            },
            {
                "detectionCode": ":REDUCED",
                "extraText": null,
                "replacementStatement": "SET-SPELL-SLOTS={CLASS_NAME}:REDUCED:REDUCE-SLOTS-BY-ONE",
                "extraCode": null
            },
            {
                "detectionCode": ":PARTIAL",
                "extraText": null,
                "replacementStatement": "SET-SPELL-SLOTS={CLASS_NAME}:PARTIAL:REDUCE-SLOTS-BY-ONE",
                "extraCode": null
            }
        ]
    },
    "dedicationFeatName": "Wellspring Mage Dedication",
    "contentSrc": "SECRETS-OF-MAGIC"
} as const satisfies ClassarchetypesTableRowConstraints,
 ] as const;

export const classarchetypes = hookupTableLookup(_classarchetypes);