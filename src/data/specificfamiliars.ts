import { hookupTableLookup } from '../tables';

import { Alignment, ContentSrc } from './shared_types';

export interface SpecificfamiliarsTableRowConstraints {
  table: 'specificfamiliars';
  id: number;
  specificType: string;
  name: string;
  alignment?: Alignment;
  tagsJSON: readonly string[];
  description?: string;
  numAbils: number;
  abilsJSON: readonly string[];
  extraAbils?: readonly string[];
  isArchived: boolean;
  contentSrc: ContentSrc;
  homebrewID?: number;
  createdAt?: string;
  updatedAt?: string;
}

export type SpecificfamiliarsTable = typeof specificfamiliars;
export type SpecificfamiliarsTableRow = SpecificfamiliarsTable[number];
export type SpecificfamiliarID = SpecificfamiliarsTableRow['id'];

export const isSpecificfamiliarID = (id?: number): id is SpecificfamiliarID => !!id && !!specificfamiliars.byIdLax(id);
export const assertIsSpecificfamiliarID = (id?: number): asserts id is SpecificfamiliarID => { if (!isSpecificfamiliarID(id)) throw Error('Expected a SpecificfamiliarID; got ' + id); }

const _specificfamiliars = [
{
    "table": "specificfamiliars",
    "id": 1,
    "specificType": "FAERIE-DRAGON",
    "name": "Faerie Dragon",
    "tagsJSON": [
        "Dragon"
    ],
    "description": "These tiny, mischievous dragons make natural allies for benevolent or capricious characters.",
    "numAbils": 6,
    "abilsJSON": [
        "Amphibious",
        "Darkvision",
        "Flier",
        "Manual Dexterity",
        "Speech",
        "Touch Telepathy"
    ],
    "extraAbils": [
        "~ Breath Weapon: TWO-ACTIONS ((trait: arcane), (trait: evocation), (trait: poison)) **Frequency** once per hour; **Effect** The faerie dragon breathes euphoric gas in a 10-foot cone. Each creature in the area must attempt a Fortitude save against your class DC or spell DC, whichever is higher. A creature that fails its save is stupefied 2 and slowed 1 for 1d4 rounds; on a critical failure, the duration is 1 minute."
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-11-24T16:16:47",
    "updatedAt": "2020-11-24T16:16:47"
} as const satisfies SpecificfamiliarsTableRowConstraints,
{
    "table": "specificfamiliars",
    "id": 2,
    "specificType": "IMP",
    "name": "Imp",
    "alignment": "An imp must be lawful evil.",
    "tagsJSON": [
        "Devil",
        "Fiend"
    ],
    "description": "Imp familiars pretend to be subservient in order to trick their masters into losing their souls to Hell. Their resistance is in fire and poison and they\\\\'re skilled in Deception.",
    "numAbils": 8,
    "abilsJSON": [
        "Darkvision",
        "Flier",
        "Manual Dexterity",
        "Resistance",
        "Skilled",
        "Speech",
        "Touch Telepathy"
    ],
    "extraAbils": [
        "~ Imp Invisibility: Once per hour, your imp familiar can cast 2nd-level (spell: invisibility) on itself as a divine innate spell.",
        "~ Infernal Temptation: ONE-ACTION ((trait: concentrate), (trait: divine), (trait: enchantment), (trait: evil), (trait: fortune)) **Frequency** once per day; **Effect** The imp offers a non-fiend within 15 feet a bargain, granting a boon of good luck if the creature accepts. The boon lasts for 1 hour once accepted. If the creature dies while the boon is in place, its soul travels to Hell, where it is bound for eternity and unable to be raised or resurrected except by wish or similar magic. Once during the hour, the creature can roll an attack roll or saving throw twice and use the higher result."
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-11-24T16:16:47",
    "updatedAt": "2020-11-24T16:16:47"
} as const satisfies SpecificfamiliarsTableRowConstraints,
{
    "table": "specificfamiliars",
    "id": 3,
    "specificType": "SPELLSLIME",
    "name": "Spellslime",
    "tagsJSON": [
        "Ooze"
    ],
    "description": "These friendly, colorful oozes congeal from the essences left over from casting spells. They are extremely loyal to their masters. You can select a spellslime familiar only if you can cast spells using spell slots.",
    "numAbils": 4,
    "abilsJSON": [
        "Climber",
        "Darkvision",
        "Focused Rejuvenation",
        "Tough"
    ],
    "extraAbils": [
        "~ Magic Scent: Your spellslime familiar gains an imprecise sense with a range of 30 feet that enables it to smell magic of the same tradition as your own.",
        "~ Ooze Defense: Your spellslime familiar is easy to hit, but it lacks weak points. It is immune to critical hits and precision damage, but its AC is only 10 + your level (instead of an AC equal to yours).",
        "~ Slime Rejuvenation: Your spellslime familiar gains the focused rejuvenation ability, but it recovers 2 Hit Points per level when you (action: Refocus) instead of 1."
    ],
    "isArchived": true,
    "contentSrc": "ADV-PLAYER-GUIDE",
    "createdAt": "2020-11-24T16:16:47",
    "updatedAt": "2020-11-24T16:16:47"
} as const satisfies SpecificfamiliarsTableRowConstraints,
{
    "table": "specificfamiliars",
    "id": 4,
    "specificType": "AEON-WYRD",
    "name": "Aeon Wyrd",
    "tagsJSON": [
        "Construct"
    ],
    "description": "An aeon wyrd is a floating swarm of gemstones surrounding a larger stone. It grants the power of its internal aeon stone to its master.",
    "numAbils": 3,
    "abilsJSON": [
        "Flier"
    ],
    "extraAbils": [
        "~ Aeon Stone Reservoir: Your aeon wyrd can hold any aeon stone as a powerfully resonant nucleus that holds it together. You gain the aeon stone's benefits without needing to use one of your investiture slots for the day, and you also gain the aeon stone's resonant power, without interfering with any (item: wayfinder) you invest.",
        "~ Can't Walk: Your aeon wyrd has no land Speed.",
        "~ Constructed: Your aeon wyrd is immune to bleed, death effects, disease, doomed, drained, fatigued, healing, necromancy, nonlethal attacks, paralyzed, poison, sickened, and unconscious. It can recover Hit Points only via the (action: Repair) action and other methods that fix items, not from any form of Hit Point healing. It's destroyed at 0 HP.",
        "~ Crystalline: Your aeon wyrd's crystalline structure makes it vulnerable to sonic attacks. It gains weakness to sonic damage equal to your level."
    ],
    "isArchived": true,
    "contentSrc": "LOST-SOCIETY-GUIDE",
    "createdAt": "2020-11-24T16:16:47",
    "updatedAt": "2020-11-24T16:16:47"
} as const satisfies SpecificfamiliarsTableRowConstraints,
{
    "table": "specificfamiliars",
    "id": 5,
    "specificType": "CALLIGRAPHY-WYRM",
    "name": "Calligraphy Wyrm",
    "tagsJSON": [
        "Beast"
    ],
    "description": "Calligraphy wyrms are curious dragons constantly in search of new lore and writing. They make natural allies for Pathfinders. While knowledgeable, calligraphy wyrms can also be know-it-alls. Their chirpy, high-pitched voices make this attitude humorous to some and insufferable to others. They are Skilled in Arcana and Society.",
    "numAbils": 6,
    "abilsJSON": [
        "Darkvision",
        "Flier",
        "Manual Dexterity",
        "Scent",
        "Skilled",
        "Speech"
    ],
    "extraAbils": [
        "~ Ink Spray: ONE-ACTION ((trait: arcane), (trait: evocation)) **Frequency** once per 10 minutes; **Effect** The wyrm splatters ink in a 10-foot cone. Each creature in the area must succeed at a Reflex save (DC equal to your class DC or spell DC, whichever is higher) or become covered in ink. Ink spray has the effects of (spell: glitterdust) except the creature isn't dazzled, and it can remove its blindness by spending a single action, which has the (trait: manipulate) trait, to wipe off the ink from their face.",
        "~ Stylus Claws: Your calligraphy wyrm has stylus-shaped claws that it can fill with its natural ink, using its claw as a pen without having to purchase ink."
    ],
    "isArchived": true,
    "contentSrc": "LOST-SOCIETY-GUIDE",
    "createdAt": "2020-11-24T16:16:47",
    "updatedAt": "2020-11-24T16:16:47"
} as const satisfies SpecificfamiliarsTableRowConstraints,
{
    "table": "specificfamiliars",
    "id": 6,
    "specificType": "DWEOMERCAT-CUB",
    "name": "Dweomercat Cub",
    "tagsJSON": [
        "Beast"
    ],
    "description": "Pathfinder agent Arianrhod Thriceborn, an adherent of the Eldest Magdh, raised a litter of these intelligent mystical felines from the First World. Dweomercat cubs are curious and love exploring ley lines and traveling the world. At only 1 foot tall and weighing 15 pounds, dweomercat cubs are smaller than their egos and curiosity imply.",
    "numAbils": 4,
    "abilsJSON": [
        "Darkvision",
        "Scent",
        "Speech"
    ],
    "extraAbils": [
        "~ Alter Dweomer: ONE-ACTION ((trait: abjuration), (trait: arcane)) **Frequency** once per 10 minutes; **Requirements** The dweomercat cub was targeted by a spell or was within the area of a spell as it was cast since its last turn; **Effect** The dweomercat cub gains an effect related to the school of the triggering spell. Other than the damage, the effect lasts for 1d4 rounds or until the dweomercat cub (action: Dismisses | Dismiss) the effect, whichever comes first.\\n* Abjuration: The cub gains a +1 status bonus to AC.\\n* Conjuration: A cloud of fog appears in a 5-foot burst centered on a corner of the cub's space. Anything in the cloud is concealed.\\n* Divination: The cub gains a +1 status bonus to skill checks.\\n* Enchantment: The cub gains a +1 status bonus to saves.\\n* Evocation: Magical feedback deals 1d6 force damage for every 2 levels you have to the triggering spellcaster (basic Reflex save using your class DC or spell DC, whichever is higher).\\n* Illusion: The cub becomes invisible. This effect ends if the cub uses a hostile action, in addition to the normal end conditions.\\n* Necromancy: The cub gains temporary HP equal to your level.\\n* Transmutation: The cub gains a +1 status bonus to attack rolls.",
        "~ Detect Magic: Your dweomercat cub can cast 1st-level (spell: detect magic) as an arcane innate spell."
    ],
    "isArchived": true,
    "contentSrc": "LOST-SOCIETY-GUIDE",
    "createdAt": "2020-11-24T16:16:47",
    "updatedAt": "2020-11-24T16:16:47"
} as const satisfies SpecificfamiliarsTableRowConstraints,
{
    "table": "specificfamiliars",
    "id": 7,
    "specificType": "POPPET",
    "name": "Poppet",
    "tagsJSON": [
        "Construct"
    ],
    "description": "Endlessly modifiable, poppet familiars made of wicker and wood are among the most basic construct familiars available to Pathfinder agents across the globe.",
    "numAbils": 1,
    "abilsJSON": [],
    "extraAbils": [
        "~ Constructed: Your poppet is immune to bleed, death effects, disease, doomed, drained, fatigued, healing, necromancy, nonlethal attacks, paralyzed, poison, sickened, and unconscious. It can recover Hit Points only via the (action: Repair) action and other methods that fix items, not from any form of Hit Point healing. It's destroyed at 0 HP.",
        "~ Flammable: Your poppet's components make it particularly vulnerable to fire. It gains weakness to fire equal to your level. You can spend an additional familiar ability, either permanently or on a per-day basis, to reinforce the poppet's construction, removing this weakness."
    ],
    "isArchived": true,
    "contentSrc": "LOST-SOCIETY-GUIDE",
    "createdAt": "2020-11-24T16:16:47",
    "updatedAt": "2020-11-24T16:16:47"
} as const satisfies SpecificfamiliarsTableRowConstraints,
{
    "table": "specificfamiliars",
    "id": 8,
    "specificType": "SHADOW",
    "name": "Shadow",
    "tagsJSON": [
        "Shadow"
    ],
    "description": "~ Access: You’re a shadowcaster.\nSome spellcasters and ritualists don’t just summon and bind a familiar, but instead transform their own shadow into a familiar. These casters can be identified by their lack of a shadow regardless of the level of light in the area and by the strange muted appearance of any article of clothing or jewelry they wear. Occasionally mistaken for vampires or other undead by the cautious or superstitious, these spellcasters nonetheless find the trade worth it in exchange for the unique abilities their shadow familiar can possess.\nTheir shadow's resistance is in cold and negative.",
    "numAbils": 7,
    "abilsJSON": [
        "Darkvision",
        "Manual Dexterity",
        "Master's Form",
        "Resistance",
        "Shadow Step"
    ],
    "extraAbils": [
        "~ Become Shadow: ONE-ACTION ((trait: shadow), (trait: transmutation)) The shadow familiar transforms its body into barely tangible shadow. It gains resistance to all damage (except force) equal to half your level but can’t use any actions requiring a physical form. The familiar can also slip through gaps at least 2 inches wide, or 1 inch wide if it (action: Squeezes | Squeeze). It can use this action again to return to its normal form. This action has the trait matching your tradition of magic, or (trait: occult) if you aren’t a spellcaster.",
        "~ Slink in Shadows: The shadow familiar can (action: Hide) or end its (action: Sneak) in a creature’s or object’s shadow.",
        "~ Steal Shadow: ONE-ACTION ((trait: necromancy)) **Frequency** once per 10 minutes; **Effect** The shadow familiar makes a melee attack with an attack roll modifier equal to your spell attack roll modifier. If the (action: Strike) is successful, the target is enfeebled 1 and its shadow disappears. After 24 hours, the enfeebled condition ends, and they regain their shadow once more. Any effect that reduces or removes the enfeebled condition restores their shadow as well. This action has the trait matching your tradition of magic, or (trait: occult) if you aren’t a spellcaster."
    ],
    "isArchived": true,
    "contentSrc": "SECRETS-OF-MAGIC",
    "createdAt": "2020-11-24T16:16:47",
    "updatedAt": "2020-11-24T16:16:47"
} as const satisfies SpecificfamiliarsTableRowConstraints,
{
    "table": "specificfamiliars",
    "id": 9,
    "specificType": "CLOCKWORK",
    "name": "Clockwork",
    "tagsJSON": [
        "Clockwork",
        "Construct"
    ],
    "description": "A clockwork creature is typically composed entirely of turning gears and small bronze steam pipes.\nIf your clockwork familiar is destroyed, it can be brought back to life through any conventional means that would bring back a living familiar, such as through resurrection magic.",
    "numAbils": 3,
    "abilsJSON": [
        "Darkvision"
    ],
    "extraAbils": [
        "~ Clockwork: You need to keep your clockwork familiar wound, but the process isn’t particularly onerous or time consuming. If you spend 1 minute winding up your clockwork familiar with a unique key only you can use, it can remain active for 24 hours, after which time it becomes unaware of its surroundings and can’t act until it’s wound again.\\n:> Enemies can attempt to disable the clockwork familiar, with a standard DC for your level to (action: Disable a Device), to reduce the remaining operational time by 1 hour (or 2 hours on a critical success). Certain other abilities that adversely affect technology might also reduce the clockwork familiar’s remaining operational time.\\n:> Some abilities, like Steam Screen, require your clockwork familiar to spend some of its remaining operational time. It can’t spend more than it has and shuts down immediately once it has no time remaining.\\n:> You can wind your clockwork familiar for 1 minute at any time to return it to the maximum 24 hours of operational time.",
        "~ Constructed: Your clockwork familiar is made of metal rather than flesh and bone, although it is still delicate enough in certain places to be vulnerable to violence in the same manner as a living creature. It is immune to bleed, death effects, disease, doomed, drained, fatigued, healing, necromancy, nonlethal attacks, paralyzed, poison, sickened, and unconscious. It can recover Hit Points only via the (action: Repair) action and other methods that fix items, not from any form of Hit Point healing. It’s destroyed at 0 Hit Points.",
        "~ Electricity Vulnerability: The metal components of a clockwork familiar conduct electricity and are easily disrupted by an electric current. It gains weakness to electricity damage equal to your level.",
        "~ Steam Screen: ONE-ACTION **Frequency** once per minute; **Effect** Your clockwork familiar blows a billowing plume of steam into its square around itself. It gains a +1 circumstance bonus to its Intimidation checks, and any creature in the familiar’s square has concealment, though creatures in the square can’t use this concealment to (action: Hide) or (action: Sneak). The steam and its effects remain for 1 round. To use this ability, your clockwork familiar must spend 1 hour of operational time.",
        "~ Toggle Standby Mode: TWO-ACTIONS Your clockwork familiar enters standby mode. Its operational time doesn’t decrease in standby, but it can sense its surroundings (with a –2 penalty to Perception). It can’t act, with one exception: when you Command it to exit standby mode, it does so, by using this action again."
    ],
    "isArchived": true,
    "contentSrc": "LOST-GRAND-BAZAAR",
    "createdAt": "2020-11-24T16:16:47",
    "updatedAt": "2020-11-24T16:16:47"
} as const satisfies SpecificfamiliarsTableRowConstraints,
{
    "table": "specificfamiliars",
    "id": 10,
    "specificType": "ELEMENTAL-WISP",
    "name": "Elemental Wisp",
    "tagsJSON": [
        "Elemental"
    ],
    "description": "Wisps are tiny elemental beings that often act as familiars to spellcasters attuned to the elements. They each usually have different personalities: air wisps are playful and capricious, earth wisps are timid but loyal, fire wisps are carefree and boisterous, and water wisps are gentle and nurturing.",
    "numAbils": 3,
    "abilsJSON": [
        "Accompanist",
        "Speech"
    ],
    "extraAbils": [
        "~ Elemental: Choose (trait: air), (trait: earth), (trait: fire), or (trait: water). Your wisp is a wisp of that element and gains that trait. Your wisp gains a familiar ability depending on its element. Air wisps gain flight, earth wisps gain burrower, fire wisps gain greater resistance (fire), and water wisps gain amphibious.",
        "~ Resonance: ((trait: aura)) 30 feet. Your wisp vibrates at a frequency attuned to their element, resonating with and empowering all effects sharing that trait. Creatures in the area gain a +1 status bonus to damage rolls for effects with the same elemental trait as your wisp ((trait: air), (trait: earth), (trait: fire), or (trait: water))."
    ],
    "isArchived": true,
    "contentSrc": "LOST-GRAND-BAZAAR",
    "createdAt": "2020-11-24T16:16:47",
    "updatedAt": "2020-11-24T16:16:47"
} as const satisfies SpecificfamiliarsTableRowConstraints,
{
    "table": "specificfamiliars",
    "id": 11,
    "specificType": "NOSOI",
    "name": "Nosoi",
    "tagsJSON": [
        "Monitor",
        "Psychopomp"
    ],
    "description": "A nosoi's physical appearance is that of a bird—usually a crow, sparrow, or whippoorwill—though it wears a funerary mask that accentuates its beak. Nosois measure about 1 foot in length but are unusually heavy, weighing between 10 and 15 pounds.",
    "numAbils": 5,
    "abilsJSON": [
        "Darkvision",
        "Flier",
        "Manual Dexterity",
        "Speech"
    ],
    "extraAbils": [
        "~ Haunting Melody: TWO-ACTIONS ((trait: auditory), (trait: concentrate), (trait: divine), (trait: enchantment), (trait: incapacitation), (trait: mental)) **Frequency** once per hour; **Effect** The nosoi croons an entrancing song. Each living or undead creature within a 60-foot emanation must attempt a Will save against your class DC or spell DC, whichever is higher, or be fascinated for 1 round. A nosoi can use a 2-action activity, which has the (trait: auditory), (trait: concentrate), (trait: divine), (trait: enchantment), and (trait: mental) traits, to force affected creatures to attempt another Will save; on a failure, they are fascinated for an additional round. A creature that succeeds at any save or has its fascination broken is temporarily immune for 24 hours. Despite being a (trait: mental) effect, this ability affects mindless undead. Psychopomps are immune to this ability.",
        "~ Nosoi Resistance: A nosoi has resistance to negative and poison damage equal to half your level."
    ],
    "isArchived": true,
    "contentSrc": "LOST-GRAND-BAZAAR",
    "createdAt": "2020-11-24T16:16:47",
    "updatedAt": "2020-11-24T16:16:47"
} as const satisfies SpecificfamiliarsTableRowConstraints,
{
    "table": "specificfamiliars",
    "id": 12,
    "specificType": "PIPEFOX",
    "name": "Pipefox",
    "tagsJSON": [
        "Beast"
    ],
    "description": "A pipefox is a tiny magical fox with a thin, limbless body that is about a foot long. Pipefoxes are secretive, shy, evasive, and they love to acquire knowledge, using innate divination magic to learn facts and languages over time. They can bond with a person sharing their scholarly pursuits after a long period of observation and careful social interactions.",
    "numAbils": 5,
    "abilsJSON": [
        "Climber",
        "Darkvision",
        "Second Opinion",
        "Skilled",
        "Speech"
    ],
    "extraAbils": [
        "~ Divinatory Linguist: Thanks to its innate tendency for divinations, your pipefox speaks and understands all languages you know (instead of just one) as well as one common language you don't know."
    ],
    "isArchived": true,
    "contentSrc": "LOST-GRAND-BAZAAR",
    "createdAt": "2020-11-24T16:16:47",
    "updatedAt": "2020-11-24T16:16:47"
} as const satisfies SpecificfamiliarsTableRowConstraints,
{
    "table": "specificfamiliars",
    "id": 13,
    "specificType": "CRAWLING-HAND",
    "name": "Crawling Hand",
    "tagsJSON": [
        "Undead"
    ],
    "description": "Crawling hands make grisly but striking familiars, popular among necromancers with an eye for aesthetics. They also tend to be convenient, due to many available spare parts. Crawling hands can be skeletal or fleshy, like a zombie.",
    "numAbils": 5,
    "abilsJSON": [
        "Manual Dexterity",
        "Spell Delivery",
        "Valet"
    ],
    "extraAbils": [
        "~ Lend a Hand: The crawling hand assists an ally in the same space to attack a foe, crawling over the enemy and grabbing to distract them. Despite being a minion, it gains 1 reaction at the start of its turns, which it can use only to (action: Aid) an attack roll by an ally that shares the hand's space (it still has to prepare to help as normal for the (action: Aid) reaction). This attempt automatically succeeds. If the crawling hand has a similar ability, like partner in crime, it still gains only 1 reaction and can choose how to spend it.",
        "~ Undead: Your familiar is undead. It has negative healing and is immune to (trait: death) effects, (trait: disease), (trait: poison), and unconscious. It's destroyed at 0 HP."
    ],
    "isArchived": true,
    "contentSrc": "BOOK-OF-DEAD",
    "createdAt": "2020-11-24T16:16:47",
    "updatedAt": "2020-11-24T16:16:47"
} as const satisfies SpecificfamiliarsTableRowConstraints,
{
    "table": "specificfamiliars",
    "id": 14,
    "specificType": "OLD-FRIEND",
    "name": "Old Friend",
    "tagsJSON": [
        "Incorporeal",
        "Spirit",
        "Undead"
    ],
    "description": "Sometimes, the spirit of a cherished pet returns from the Boneyard to continue aiding its beloved owner. These tiny animal ghosts tend to be bound to anchors such as favorite toys, collars, or carved representations of who they were in life. An old friend is less likely to be evil than other undead familiars, as is its master.",
    "numAbils": 4,
    "abilsJSON": [
        "Flier"
    ],
    "extraAbils": [
        "~ Anchored Incorporeality: While most ghosts are bound to the site where they died or were buried, some instead find themselves bound to specific items, such as a particular piece of jewelry, article of clothing, pet's collar, or a stone from a building in which it dwelled. These items, known as anchors, were important to the ghost in life, or critical to the events of their death and haunting. A creature with anchored incorporeality has the (trait: incorporeal) trait, meaning it can move through physical creatures and such creatures can move through it. It can't attempt Strength-based checks (such as (action: Grapple)) against corporeal creatures and corporeal creatures can't attempt such checks against it. Though incorporeal, a creature with anchored incorporeality can travel no more than 60 feet from its anchor and must maintain line of effect to the anchor. This typically prevents it from moving through walls. Unlike many other incorporeal creatures, a creature with anchored incorporeality doesn't have resistance to all damage or immunity to precision damage. A character with an animal companion or familiar that has anchored incorporeality can transfer the anchor to a new item with a special ritual. This requires spending 1 week in concert with the companion to create a new anchor. A character who knows this technique might be able to adapt it to transfer a ghost's Site Bound ability (or similar restriction) to tie it to an anchor instead of a place.",
        "~ Undead: Your familiar is undead. It has negative healing and is immune to (trait: death) effects, (trait: disease), (trait: poison), and unconscious. It's destroyed at 0 HP.",
        "~ Invisibility: Once per hour, your familiar can cast 2nd-level (spell: invisibility) on itself as a divine innate spell."
    ],
    "isArchived": true,
    "contentSrc": "BOOK-OF-DEAD",
    "createdAt": "2020-11-24T16:16:47",
    "updatedAt": "2020-11-24T16:16:47"
} as const satisfies SpecificfamiliarsTableRowConstraints,
{
    "table": "specificfamiliars",
    "id": 15,
    "specificType": "POLONG",
    "name": "Polong",
    "tagsJSON": [
        "Incorporeal",
        "Undead"
    ],
    "description": "Polongs are wicked, invisible spirits created from the blood of murder victims, bound to glass bottles, and fed with the blood of their master. They're often used to possess and sicken their master's enemies. Polongs can't be found or acquired, only created, a process that can take up to two weeks. If a polong's bottle is ever destroyed, or if its master fails to provide its daily feeding of blood, the polong withers and dies. They are skilled in society.",
    "numAbils": 8,
    "abilsJSON": [
        "Flier",
        "Lifelink",
        "Skilled",
        "Speech",
        "Spellcasting"
    ],
    "extraAbils": [
        "~ Anchored Incorporeality: Anchor must be a bottle. While most ghosts are bound to the site where they died or were buried, some instead find themselves bound to specific items, such as a particular piece of jewelry, article of clothing, pet's collar, or a stone from a building in which it dwelled. These items, known as anchors, were important to the ghost in life, or critical to the events of their death and haunting. A creature with anchored incorporeality has the (trait: incorporeal) trait, meaning it can move through physical creatures and such creatures can move through it. It can't attempt Strength-based checks (such as (action: Grapple)) against corporeal creatures and corporeal creatures can't attempt such checks against it. Though incorporeal, a creature with anchored incorporeality can travel no more than 60 feet from its anchor and must maintain line of effect to the anchor. This typically prevents it from moving through walls. Unlike many other incorporeal creatures, a creature with anchored incorporeality doesn't have resistance to all damage or immunity to precision damage. A character with an animal companion or familiar that has anchored incorporeality can transfer the anchor to a new item with a special ritual. This requires spending 1 week in concert with the companion to create a new anchor. A character who knows this technique might be able to adapt it to transfer a ghost's Site Bound ability (or similar restriction) to tie it to an anchor instead of a place.",
        "~ Polong Possession: TWO-ACTIONS (((traits: incapacitation), (trait: mental), (trait: necromancy), (trait: occult), (trait: possession)) The polong attempts to possess an adjacent corporeal creature. The creature must attempt a Will save against your class DC or spell DC, whichever is higher. On a failure, the polong merges into the creature's body for 1 minute (24 hours on a critical failure). The polong can observe through the creature's senses but is unable to control the creature. The possessed creature is drained 1 while the possession lasts. While possessing a creature, a polong can ignore the distance and line of effect limitation from its anchored incorporeality ability; when the possession ends, it immediately returns to the bottle if it's beyond range.",
        "~ Undead: Your familiar is undead. It has negative healing and is immune to (trait: death) effects, (trait: disease), (trait: poison), and unconscious. It's destroyed at 0 HP."
    ],
    "isArchived": true,
    "contentSrc": "BOOK-OF-DEAD",
    "createdAt": "2020-11-24T16:16:47",
    "updatedAt": "2020-11-24T16:16:47"
} as const satisfies SpecificfamiliarsTableRowConstraints,
{
    "table": "specificfamiliars",
    "id": 16,
    "specificType": "TALKING-HEAD",
    "name": "Talking Head",
    "tagsJSON": [
        "Undead"
    ],
    "description": "Similar to beheaded, these disembodied, reanimated heads (with or without skin) retain some of their arcane wisdom, making for invaluable study partners. However, they also tend to be mouthy, opinionated, or downright obnoxious with their constant chattering, leading some annoyed masters to sew their mouths shut in punishment. They are skilled in your choice of arcana, occultism, or one kind of lore.",
    "numAbils": 3,
    "abilsJSON": [
        "Cantrip Connection",
        "Skilled",
        "Speech"
    ],
    "extraAbils": [
        "~ Heads Will Roll: Unless its master gives the talking head the flier ability, a talking head is able to move only by rolling along the ground, reducing its speed to 15 feet. Alternatively, a creature can, as a single action, kick or throw the head 30 feet. This can't be used as an attack; the head bounces harmlessly off anything it hits.",
        "~ Undead: Your familiar is undead. It has negative healing and is immune to (trait: death) effects, (trait: disease), (trait: poison), and unconscious. It's destroyed at 0 HP."
    ],
    "isArchived": true,
    "contentSrc": "BOOK-OF-DEAD",
    "createdAt": "2020-11-24T16:16:47",
    "updatedAt": "2020-11-24T16:16:47"
} as const satisfies SpecificfamiliarsTableRowConstraints,
{
    "table": "specificfamiliars",
    "id": 17,
    "specificType": "CERU",
    "name": "Ceru",
    "tagsJSON": [
        "Beast"
    ],
    "description": "Cerus are mortal-made creatures in the shape of tiny, blue elephants with spikes on their feet, tail, and ears. They're highly sought-after amongst circles of the affluent.",
    "numAbils": 4,
    "abilsJSON": [
        "Cantrip Connection",
        "Darkvision",
        "Touch Telepathy"
    ],
    "extraAbils": [
        "~ Created Magic: Your ceru familiar grants you the (spell: mage hand) and (spell: guidance) cantrips via the cantrip connection granted ability. If one or more of these cantrips isn't on your spell list, you can replace the cantrip or cantrips not on your spell list with a cantrip or cantrips from your spell list instead.",
        "~ Turn of Fate: TWO-ACTIONS ((trait: divination)) **Frequency** once per day; **Range** 30 feet; **Effect** Your ceru shifts the scales of fortune for one target's next attempt at an attack roll, saving throw, or skill check. If targeted with bad fortune, the target attempts a Will save against your class DC or spell DC, whichever is higher, with effects depending on the result of their save; this is a (trait: misfortune) effect. If targeted with good fortune, the target rolls twice and uses the better result; this is a (trait: fortune) effect. Regardless of outcome, targets are immune to Turn of Fate for one day."
    ],
    "isArchived": true,
    "contentSrc": "LOST-IMPOSSIBLE-LANDS",
    "createdAt": "2020-11-24T16:16:47",
    "updatedAt": "2020-11-24T16:16:47"
} as const satisfies SpecificfamiliarsTableRowConstraints,
 ] as const;

export const specificfamiliars = hookupTableLookup(_specificfamiliars);