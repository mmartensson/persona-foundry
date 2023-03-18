import type { Expression } from '../wsc/types';
import { hookupTableLookup } from '../tables';

export interface PhysicalfeaturesTableRowConstraints {
  table: 'physicalfeatures';
  wsci?: Readonly<Expression[]>;
  id: number;
  name?: string;
  description?: string;
  code?: readonly string[];
  itemWeaponID?: number;
  overrides?: number;
  createdAt?: string;
  updatedAt?: string;
}

export type PhysicalfeaturesTable = typeof physicalfeatures;
export type PhysicalfeaturesTableRow = PhysicalfeaturesTable[number];
export type PhysicalfeatureID = PhysicalfeaturesTableRow['id'];

export const isPhysicalfeatureID = (id?: number): id is PhysicalfeatureID => !!id && !!physicalfeatures.byIdLax(id);
export const assertIsPhysicalfeatureID = (id?: number): asserts id is PhysicalfeatureID => { if (!isPhysicalfeatureID(id)) throw Error('Expected a PhysicalfeatureID; got ' + id); }

const _physicalfeatures = [
{
    "table": "physicalfeatures",
    "id": 1,
    "name": "Claws",
    "description": "Your sharp claws offer an alternative to the fists other humanoids bring to a fight. You have a claw unarmed attack that deals 1d4 slashing damage and has the agile and finesse traits.",
    "itemWeaponID": 57
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 2,
    "name": "Razor Claws",
    "description": "Your sharp claws offer an alternative to the fists other humanoids bring to a fight. You have a claw unarmed attack that deals 1d6 slashing damage and has the agile, finesse and versatile (piercing) traits.",
    "itemWeaponID": 58,
    "overrides": 1
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 3,
    "name": "Sharp Fangs",
    "description": "Your teeth are formidable weapons. You gain a fangs unarmed attack that deals 1d8 piercing damage.",
    "itemWeaponID": 59
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 4,
    "name": "Tail Whip",
    "description": "Your tail is strong enough to make for a powerful melee weapon. You gain a tail unarmed attack that deals 1d6 bludgeoning damage and has the sweep trait.",
    "itemWeaponID": 60
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 5,
    "name": "Tusks",
    "description": "You have particularly long, jagged tusks perfect for tearing meat from bone. You gain a tusks unarmed attack that deals 1d6 piercing damage. Your tusks are in the brawling group and have the finesse and unarmed traits.",
    "itemWeaponID": 1459
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 6,
    "name": "Blunt Snout",
    "description": "Your small, blunt snout and labyrinthine sinus system make you resistant to phenomena that assail the nose. When you roll a saving throw against inhaled threats (such as inhaled poisons) and olfactory effects (such as xulgath stench), you get the outcome one degree of success better than the result of your roll.",
    "code": [
        "CONDITIONAL-SAVE_FORT=When you roll against inhaled threats and olfactory effects, you get the outcome one degree of success better than the result of your roll.",
        "CONDITIONAL-SAVE_WILL=When you roll against inhaled threats and olfactory effects, you get the outcome one degree of success better than the result of your roll.",
        "CONDITIONAL-SAVE_REFLEX=When you roll against inhaled threats and olfactory effects, you get the outcome one degree of success better than the result of your roll."
    ],
    "wsci": [
        ["adjustConditional","SAVE","fort","When you roll against inhaled threats and olfactory effects, you get the outcome one degree of success better than the result of your roll."],
        ["adjustConditional","SAVE","will","When you roll against inhaled threats and olfactory effects, you get the outcome one degree of success better than the result of your roll."],
        ["adjustConditional","SAVE","reflex","When you roll against inhaled threats and olfactory effects, you get the outcome one degree of success better than the result of your roll."]
    ] satisfies Expression[]
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 7,
    "name": "Aquatic Adaptation",
    "description": "Your biology allows you to hold your breath for a long time. You gain the Breath Control general feat as a bonus feat.",
    "code": [
        "GIVE-FEAT-NAME=Breath_Control"
    ],
    "wsci": [
        ["giveFeatName",["breath_control"]]
    ] satisfies Expression[]
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 8,
    "name": "Jaws",
    "description": "You have sharp teeth and powerful jaws. You gain a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group and have the finesse and unarmed traits.",
    "itemWeaponID": 85
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 9,
    "name": "Irongut Jaws",
    "description": "You have filed your teeth into jagged points and have an unusually powerful jaw, making your mouth a dangerous weapon. You gain a jaws unarmed attack that deals 1d4 piercing damage. Whenever you score a critical hit with your jaws unarmed attack, your tar",
    "itemWeaponID": 86
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 10,
    "name": "Razortooth Jaws",
    "description": "You have filed your teeth into jagged points and have an unusually powerful jaw, making your mouth a dangerous weapon. You gain a jaws unarmed attack that deals 1d8 piercing damage. Your jaws are in the brawling group. Whenever you score a critical hit wi",
    "itemWeaponID": 87,
    "overrides": 8
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 11,
    "name": "Hard Tail",
    "description": "Your tail is much stronger than most, and you can lash out with it with the strength of a whip. You gain a tail unarmed attack that deals 1d6 bludgeoning damage.",
    "itemWeaponID": 90
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 12,
    "name": "Boiling Spit",
    "description": "Your bodily fluids burn with surprising volatility, as if you ran on oil instead of blood. As long as you are taking persistent fire damage, you gain a boiling spit ranged unarmed attack with a range of 30 feet that deals 1d6 fire damage.",
    "itemWeaponID": 91
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 13,
    "name": "Plant Nourishment",
    "description": "You gain nourishment in the same way that the plants or fungi that match your body type normally do, through some combination of photosynthesis, absorbing minerals with your roots, or scavenging decaying matter. You typically do not need to pay for food. If you normally rely on photosynthesis and go without sunlight for 1 week, you begin to starve. You can derive nourishment from specially formulated bottles of sunlight instead of natural sunlight, but these bottles cost 10 times as much as standard rations (or 40 sp)."
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 14,
    "name": "Seedpod",
    "description": "Your body produces a nearly endless supply of hard seedpods. You gain a seedpod ranged unarmed attack that deals 1d4 bludgeoning damage; these Strikes have the manipulate trait. On a critical hit, a seedpod bursts, issuing forth a tangle of vegetation that imposes a –10-foot circumstance penalty on the target’s Speed for 1 round. Seedpods do not add critical specialization effects.",
    "itemWeaponID": 92
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 15,
    "name": "Powerful Fist",
    "description": "You know how to wield your fists as deadly weapons. The damage die for your fist increases to 1d6 instead of 1d4. Most people take a -2 circumstance penalty when making a lethal attack with nonlethal unarmed attacks, because they find it hard to use their fists with deadly force. You don’t take this penalty when making a lethal attack with your fist or any other unarmed attacks.",
    "itemWeaponID": 199,
    "overrides": 0
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 16,
    "name": "Fangs",
    "description": "Your incisors have grown into true fangs: long, sharp, and well-suited to drawing blood. You gain a fangs unarmed attack that deals 1d6 piercing damage. Your fangs are in the brawling group and have the grapple and unarmed traits.",
    "itemWeaponID": 1295
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 17,
    "name": "Bloodletting Fangs",
    "description": "Your incisors have grown into true fangs: long, sharp, and well-suited to drawing blood. You gain a fangs unarmed attack that deals 1d6 piercing damage. Your fangs are in the brawling group and have the grapple and unarmed traits. Your fangs Strikes deal an additional 1d4 persistent bleed damage on a critical hit. ",
    "itemWeaponID": 1296,
    "overrides": 16
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 18,
    "name": "Land on Your Feet",
    "description": "When you fall, you take only half the normal damage and don't land prone."
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 19,
    "name": "Amurrun Claws",
    "description": "Your family has particularly long, sharp claws capable of delivering bleeding wounds with a wicked swipe. You gain a claw unarmed attack that deals 1d6 slashing damage. Your claws are in the brawling group and have the agile, finesse, and unarmed traits.",
    "itemWeaponID": 1449
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 20,
    "name": "Hag Claws",
    "description": "When you came of age, your fingernails grew long and sharp. You gain a claw unarmed attack that deals 1d4 slashing damage. Your claws are in the brawling group and have the agile, finesse, and unarmed traits.",
    "itemWeaponID": 1450
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 21,
    "name": "Slag May Claws",
    "description": "Your mother was an annis hag, known for physical prowess, and you have one violet or steel-gray eye. You have thick, sturdy claws made of cold iron that grow naturally from your body. You gain a claw unarmed attack that deals 1d6 slashing damage. Your claws are in the brawling group, have the unarmed and grapple traits, and are cold iron.",
    "itemWeaponID": 1451
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 22,
    "name": "Fiend Claws",
    "description": "Part of your body has an obvious, fiendish appearance. Your hands end in razor-sharp claws. Claw 1d4 slashing (agile, finesse, unarmed, versatile piercing).",
    "itemWeaponID": 1452
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 23,
    "name": "Fiend Hooves",
    "description": "Part of your body has an obvious, fiendish appearance. You have hooves instead of feet. Hoof 1d6 bludgeoning (finesse, unarmed).",
    "itemWeaponID": 1453
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 24,
    "name": "Fiend Jaws",
    "description": "Part of your body has an obvious, fiendish appearance. Sharp teeth fill your mouth. Jaws 1d6 piercing (finesse, unarmed).",
    "itemWeaponID": 1454
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 25,
    "name": "Fiend Tail",
    "description": "Part of your body has an obvious, fiendish appearance. A whipping tail extends from your spine. Tail 1d4 bludgeoning (agile, finesse, unarmed).",
    "itemWeaponID": 1455
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 26,
    "name": "Sharp Beak",
    "description": "With your sharp beak, you are never without a weapon. You have a beak unarmed attack that deals 1d6 piercing damage. Your beak is in the brawling weapon group and has the finesse and unarmed traits.",
    "itemWeaponID": 1456
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 27,
    "name": "Tengu Talons",
    "description": "Your talons are every bit as sharp and strong as your beak. You gain a talons unarmed attack that deals 1d4 slashing damage. Your talons are in the brawling group and have the agile, finesse, unarmed, and versatile piercing traits.",
    "itemWeaponID": 1457
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 28,
    "name": "Draconic Exemplar",
    "description": "You draw minor powers from your draconic exemplar. Choose a type of chromatic or metallic dragon to be your exemplar. This determines your scale color and appearance, and dragons sometimes look more favorably upon those kobolds who resemble them, at the GM’s discretion. Your exemplar may also determine details of other kobold abilities you have.",
    "code": [
        "GIVE-FEAT-FROM=Choose a Dragon Type:Draconic Exemplar - Black,Draconic Exemplar - Blue,Draconic Exemplar - Brass,Draconic Exemplar - Bronze,Draconic Exemplar - Copper,Draconic Exemplar - Gold,Draconic Exemplar - Green,Draconic Exemplar - Red,Draconic Exemplar - Silver,Draconic Exemplar - White"
    ],
    "wsci": [
        ["giveFeatFrom","Choose a Dragon Type",["Draconic Exemplar - Black","Draconic Exemplar - Blue","Draconic Exemplar - Brass","Draconic Exemplar - Bronze","Draconic Exemplar - Copper","Draconic Exemplar - Gold","Draconic Exemplar - Green","Draconic Exemplar - Red","Draconic Exemplar - Silver","Draconic Exemplar - White"]]
    ] satisfies Expression[]
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 29,
    "name": "Iron Fists",
    "description": "Your fists have been forged by battle, your naturally tough skin and dense bone further hardened by conflict. Your fist unarmed attacks no longer have the nonlethal trait and gain the shove weapon trait.",
    "itemWeaponID": 1458,
    "overrides": 0
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 30,
    "name": "Living Hair",
    "description": "You can instantly grow or shrink your hair, eyebrows, beard, or mustache by up to several feet and manipulate your hair for use as a weapon, though your control isn’t fine enough for more dexterous tasks. You gain a hair unarmed attack that deals 1d4 bludgeoning damage; is in the brawling group; and has the agile, disarm, finesse, trip, and unarmed traits.",
    "itemWeaponID": 1460
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 31,
    "name": "Eldritch Nails",
    "description": "Your nails are supernaturally long and sharp. You gain a nails unarmed attack that deals 1d6 slashing damage. Your nails are in the brawling group and have the agile and unarmed traits. You can etch your nails with runes with the same cost and restrictions as for etching runes onto handwraps of mighty blows; runes etched onto your nails apply to nails unarmed attacks with both hands but not to other unarmed attacks.\nYou can deliver hexes through your nails. When you successfully cast a non-cantrip hex that requires 2 actions or more to cast and that doesn’t require a spell attack roll, if your target is within your reach, as part of the spellcasting activity you can make a nails Strike against the foe before applying any effects of the hex. If this Strike misses, the hex has no effect.",
    "itemWeaponID": 1461
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 32,
    "name": "Dragon Claws",
    "description": "Your fingernails grow into razor-sharp claws, and scales speckle your fingers, hands, and wrists. Your claws are agile, finesse unarmed attacks that deal 1d6 slashing damage and are in the brawling weapon group.",
    "itemWeaponID": 1462
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 33,
    "name": "Clay Fist",
    "description": "You have replaced one of your forearms with one made of clay and infused with cursed arcane magic. When you make an unarmed Strike with your clay fist and hit, your target takes a -2 status penalty to saving throws against curse effects for 1 hour. The damage die for your clay fist is 1d8, and it loses the agile and finesse traits of a typical fist.",
    "itemWeaponID": 1712,
    "overrides": 0
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 34,
    "name": "Arcane Fist",
    "description": "You value physical perfection as much as mental. The damage die for your fist changes to 1d6 instead of 1d4. Most people take a -2 circumstance penalty when making a lethal attack with nonlethal unarmed attacks because they find it hard to use their fists with deadly force. You don’t take this penalty when making a lethal attack with your fist or any other unarmed attacks.",
    "itemWeaponID": 1736,
    "overrides": 0
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 35,
    "name": "Pouch",
    "description": "The pouch on your stomach can contain an item of light Bulk. This still counts toward to total amount of Bulk you can carry."
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 36,
    "name": "Innate Swimmer",
    "description": "Your body is built for moving in aquatic environments. You gain a 20-foot swim Speed.",
    "code": [
        "GIVE-SPEED=Swim:20"
    ],
    "wsci": [
        ["giveSpeed","swim",20]
    ] satisfies Expression[]
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 37,
    "name": "Thick Fur",
    "description": "Your thick fur helps ward off chilling winds, but can leave you overheating in warm climates. You treat environmental cold effects as if they were one step less extreme and environmental heat effects as if they were one step more extreme (mild heat becomes severe, severe heat becomes extreme, and so on)."
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 38,
    "name": "Constructed - Synthetic",
    "description": "Your synthetic body resists ailments better than those of purely biological organisms. You gain a +1 circumstance bonus to saving throws against diseases, poisons, and radiation.",
    "code": [
        "CONDITIONAL-INCREASE-SAVE_FORT=1~circumstance bonus against diseases, poisons, and radiation",
        "CONDITIONAL-INCREASE-SAVE_REFLEX=1~circumstance bonus against diseases, poisons, and radiation",
        "CONDITIONAL-INCREASE-SAVE_WILL=1~circumstance bonus against diseases, poisons, and radiation"
    ],
    "wsci": [
        ["adjust","SAVE","fort",1,null,"circumstance bonus against diseases, poisons, and radiation"],
        ["adjust","SAVE","reflex",1,null,"circumstance bonus against diseases, poisons, and radiation"],
        ["adjust","SAVE","will",1,null,"circumstance bonus against diseases, poisons, and radiation"]
    ] satisfies Expression[]
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 39,
    "name": "Emotionally Unaware",
    "description": "You find it difficult to understand and express complex emotions. You take a -1 circumstance penalty to Diplomacy and Performance checks, and on Perception checks to Sense Motive.",
    "code": [
        "DECREASE-SKILL_Diplomacy=1-CIRCUM",
        "DECREASE-SKILL_Performance=1-CIRCUM",
        "CONDITIONAL-DECREASE-PERCEPTION=1~circumstance penalty to Sense Motive"
    ],
    "wsci": [
        ["adjust","SKILL","diplomacy",-1,"circumstance",null],
        ["adjust","SKILL","performance",-1,"circumstance",null],
        ["adjust","PERCEPTION",null,-1,null,"circumstance penalty to Sense Motive"]
    ] satisfies Expression[]
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 40,
    "name": "Toxic Spines",
    "description": "You have launchable toxic spines. You gain a spine ranged unarmed attack with the unarmed trait that deals 1d4 poison damage, has a range increment of 10 feet, and is in the dart weapon group.",
    "itemWeaponID": 2206
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 41,
    "name": "Swinging Tail",
    "description": "Your tail is strong enough to make for a powerful melee weapon. You gain a tail unarmed attack that deals 1d6 bludgeoning damage and has the backswing trait.",
    "itemWeaponID": 2207
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 42,
    "name": "Living Weapon",
    "description": "You've learned to use a part of your form as a weapon.  You gain a horns, jaws, or tusk unarmed attack that deals 1d6 piercing damage and has the versatile S trait.",
    "itemWeaponID": 2210
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 43,
    "name": "Unusual Anatomy",
    "description": "Your unorthodox body resists physical affiliations meant for other creatures. You gain a +1 circumstance bonus to saves against diseases and poisons.",
    "code": [
        "CONDITIONAL-INCREASE-SAVE_FORT=1~circumstance bonus against diseases and poisons",
        "CONDITIONAL-INCREASE-SAVE_REFLEX=1~circumstance bonus against diseases and poisons",
        "CONDITIONAL-INCREASE-SAVE_WILL=1~circumstance bonus against diseases and poisons"
    ],
    "wsci": [
        ["adjust","SAVE","fort",1,null,"circumstance bonus against diseases and poisons"],
        ["adjust","SAVE","reflex",1,null,"circumstance bonus against diseases and poisons"],
        ["adjust","SAVE","will",1,null,"circumstance bonus against diseases and poisons"]
    ] satisfies Expression[]
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 44,
    "name": "Change Shape - Kitsune",
    "description": "As a kitsune, you gain the Change Shape ability. Change Shape [one action] (concentrate, divine, kitsune, polymorph, transmutation) You transform into a specific alternate form determined by your heritage. If your heritage doesn’t list a form, your alternate form is a tailless form, which is a common Medium humanoid ancestry prevalent where you grew up (typically human). This form is the same age and body type as your true form and has roughly analogous physical traits, such as hair color. Using Change Shape counts as creating a disguise for the Impersonate use of Deception. You lose any unarmed Strikes you gained from a kitsune heritage or ancestry feat in this form. You can remain in your alternate form indefinitely, and you can shift back to your true kitsune form by using this action again.",
    "code": [
        "GIVE-FEAT-NAME=Change Shape - Kitsune"
    ],
    "wsci": [
        ["giveFeatName",["change shape - kitsune"]]
    ] satisfies Expression[]
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 45,
    "name": "Magical Strikes",
    "description": "Your inherent magic pervades your entire being. All your Strikes are magical, whether with unarmed attacks or weapons."
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 46,
    "name": "Wings",
    "description": "You possess powerful wings. While not all of your kind focus on honing their flying skills, a strong flap of your wings allows you to travel longer distances when jumping. When Leaping horizontally, you move an additional 5 feet. You don't automatically fail your checks to High Jump or Long Jump if you don't Stride at least 10 feet first. In addition, when you make a Long Jump, you can jump a distance up to 10 feet further than your Athletics check result, though still with the normal maximum of your Speed."
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 47,
    "name": "Talons",
    "description": "You have long and sharp talons. You gain a talon melee unarmed attack that deals 1d4 slashing damage. Your talon attack is in the brawling group and has the agile, finesse, and unarmed traits.",
    "itemWeaponID": 2211
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 48,
    "name": "Magma Spikes",
    "description": "You can focus the magma into your hand to attack your foes. You gain a magma spike unarmed attack, which requires a free hand to use. This is an agile, finesse, unarmed attack in the brawling weapon group that deals 1d4 piercing damage, as well as 1 additional fire damage. Instead of the normal critical specialization effect, the target takes 1d6 persistent fire damage; you gain a bonus on this persistent damage equal to your item bonus to attack rolls on unarmed attacks.",
    "itemWeaponID": 2213
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 49,
    "name": "Spines",
    "description": "Spines cover your body. You gain a spine unarmed attack that deals 1d6 piercing damage. Your spines are in the brawling group and have the finesse and unarmed traits.",
    "itemWeaponID": 2241
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 50,
    "name": "Hydration",
    "description": "While you are an amphibious being equally as capable on land as in the water, your body requires you to return to aquatic environments at least once in a 24-hour period. You must submerge in water in order to rehydrate your water-acclimated skin. If you fail to do this, your skin begins to crack and your gills become painful. After the first 24 hours outside of water, you take a -1 status penalty to Fortitude saves. After 48 hours, you struggle to breathe air and begin to suffocate until returned to water."
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 51,
    "name": "Swim Speed 30 ft",
    "description": "You gain a swim Speed of 30 feet.",
    "code": [
        "GIVE-SPEED=Swim:30"
    ],
    "wsci": [
        ["giveSpeed","swim",30]
    ] satisfies Expression[]
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 52,
    "name": "Feline Form",
    "description": "You gain the Feline Form ability. Feline Form [one action] (concentrate, polymorph, primal, transmutation) You transform into a feline form resembling a house cat, which has the statistics of 1st-level pest form. Your feline form has a consistent appearance with features that match your humanoid form, such as your eye or hair color. Using Feline Form counts as creating a disguise for the Impersonate use of Deception. You lose any unarmed Strikes you gained from a heritage or ancestry feat in this form. You can remain in your feline form indefinitely, and you can shift back to your true form by using this action again.",
    "code": [
        "GIVE-FEAT-NAME=Feline Form"
    ],
    "wsci": [
        ["giveFeatName",["feline form"]]
    ] satisfies Expression[]
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 53,
    "name": "Change Shape - Anadi",
    "description": "As an anadi, you gain the Change Shape ability. Change Shape [one action] (anadi, arcane, concentrate, polymorph, transmutation) You change into your human or spider shape. Each shape has a specific, persistent appearance. In your human shape, you can't use unarmed attacks granted by your ancestry. You aren't flat-footed when climbing in your spider shape. However, in your spider shape you can't use weapons, shields, or other held items of any sort, and you are limited in what actions you can take that have the manipulate trait. The only manipulate actions you can take are to Cast a Spell with somatic components, weave silk or webbing, or simple Interact actions such as opening an unlocked door. Your spider legs can't perform actions that require fingers or significant manual dexterity, including any action that would require a check to accomplish. The GM might determine other manipulate actions are appropriate for your spider legs.",
    "code": [
        "GIVE-FEAT-NAME=Change Shape - Anadi"
    ],
    "wsci": [
        ["giveFeatName",["change shape - anadi"]]
    ] satisfies Expression[]
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 54,
    "name": "Spider Fangs",
    "description": "You were born with a natural means for hunting and self-defense. You gain a fangs unarmed attack that deals 1d6 piercing damage. Your fangs are in the brawling group and have the finesse and unarmed traits.",
    "itemWeaponID": 2979
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 55,
    "name": "Sunlight Healing",
    "description": "You can enter a meditative, healing state as a 10-minute activity when exposed to direct sunlight, in which case you recover 1d8 Hit Points. At 3rd level, and every 2 levels thereafter, this healing increases by 1d8.\nOnce you have recovered Hit Points in this way, you are temporarily immune to further uses of Sunlight Healing for 1 day."
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 56,
    "name": "Bite",
    "description": "Your sharp teeth and powerful jaws are fearsome weapons. You have a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group.",
    "itemWeaponID": 2981
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 57,
    "name": "Eyes in Back",
    "description": "You have eyes that point in several different directions and instinctively notice movement in the peripheries of your vision. When you use the Seek basic action, you can look for creatures in two areas instead of one. If precision is necessary, you can select two 30-foot cones or 15-foot bursts within line of sight instead of one."
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 58,
    "name": "Vicious Claws",
    "description": "The chitin on your hands forms powerful claws that allow you to defend yourself. You gain a claw unarmed attack that deals 1d6 slashing damage. Your claws are in the brawling group and have the agile, finesse, and unarmed traits.",
    "itemWeaponID": 2986
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 59,
    "name": "Quills",
    "description": "The quills on your arms are particularly sharp and sturdy. You gain a quills unarmed attack that deals 1d6 piercing damage. Your quills are in the knife weapon group and have the finesse and unarmed traits.",
    "itemWeaponID": 2987
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 60,
    "name": "Automaton Core",
    "description": "Your body contains an automaton core infused with planar quintessence that grants you power to perform various tasks and houses your soul and life energy. This life energy flows through you much like the blood of humanoids. As a result, you are a living creature. You don’t have the typical construct immunities, can be affected by effects that target a living creature, and can recover Hit Points normally via positive energy. Additionally, you are not destroyed when reduced to 0 Hit Points. Instead, your life energy attempts to keep you active even in dire straits; you are knocked out and begin dying when reduced to 0 Hit Points (Core Rulebook 459)."
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 61,
    "name": "Constructed Body",
    "description": "Your physiological needs are different than those of living creatures. You don’t need to eat or drink. You don’t need to sleep, but you still need a daily period of rest. During this period of rest, you must enter a recuperating standby state for 2 hours, which is similar to sleeping except you are aware of your surroundings and don’t take penalties for being unconscious. Much like with sleeping, if you go too long without entering your standby state, you become fatigued and can’t recover until you enter standby for 2 hours.",
    "code": [
        "GIVE-CHAR-TRAIT-NAME=Construct"
    ],
    "wsci": [
        ["giveCharTraitName","Construct"]
    ] satisfies Expression[]
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 62,
    "name": "Energy Beam",
    "description": "You gain an energy beam ranged unarmed attack that deals 1d4 fire damage. The energy beam has a range increment of 20 feet. On a critical hit, the target takes persistent fire damage equal to the number of weapon damage dice. Your energy beam does not add critical specialization effects.",
    "itemWeaponID": 3631
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 63,
    "name": "Constructed",
    "description": "The materials of your body resist ailments that assail the flesh. You gain a +1 circumstance bonus to saving throws against death effects, disease, and poison as well as to saving throws against effects that would give you the drained, paralyzed, or sickened conditions. Your spark of life means that you’re a living creature, and you can be healed by positive energy and harmed by negative energy as normal.",
    "code": [
        "CONDITIONAL-INCREASE-SAVE_FORT=1~circumstance bonus against death effects, disease, and poison",
        "CONDITIONAL-INCREASE-SAVE_REFLEX=1~circumstance bonus against death effects, disease, and poison",
        "CONDITIONAL-INCREASE-SAVE_WILL=1~circumstance bonus against death effects, disease, and poison",
        "CONDITIONAL-INCREASE-SAVE_FORT=1~circumstance bonus against effects that give the drained, paralyzed, or sickened conditions",
        "CONDITIONAL-INCREASE-SAVE_REFLEX=1~circumstance bonus against effects that give the drained, paralyzed, or sickened conditions",
        "CONDITIONAL-INCREASE-SAVE_WILL=1~circumstance bonus against effects that give the drained, paralyzed, or sickened conditions",
        "GIVE-CHAR-TRAIT-NAME=Construct"
    ],
    "wsci": [
        ["adjust","SAVE","fort",1,null,"circumstance bonus against death effects, disease, and poison"],
        ["adjust","SAVE","reflex",1,null,"circumstance bonus against death effects, disease, and poison"],
        ["adjust","SAVE","will",1,null,"circumstance bonus against death effects, disease, and poison"],
        ["adjust","SAVE","fort",1,null,"circumstance bonus against effects that give the drained, paralyzed, or sickened conditions"],
        ["adjust","SAVE","reflex",1,null,"circumstance bonus against effects that give the drained, paralyzed, or sickened conditions"],
        ["adjust","SAVE","will",1,null,"circumstance bonus against effects that give the drained, paralyzed, or sickened conditions"],
        ["giveCharTraitName","Construct"]
    ] satisfies Expression[]
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 64,
    "name": "Flammable",
    "description": "You have weakness to fire damage equal to one-third your level (minimum 1)."
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 65,
    "name": "Undeath",
    "description": "You have basic undead benefits. For your undead hunger, you don't eat flesh like ghouls or drink blood like vampires, but you do collect bones you can use to help yourself mend.",
    "code": [
        "GIVE-FEAT-NAME=Basic Undead Benefits"
    ],
    "wsci": [
        ["giveFeatName",["basic undead benefits"]]
    ] satisfies Expression[]
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 66,
    "name": "Prehensile Tail",
    "description": "You can use your long, flexible tail to perform Interact actions requiring a free hand, even if both hands are otherwise occupied. Your tail can't perform actions that require fingers or significant manual dexterity, including any action that would require a check to accomplish, and you can't use it to hold items."
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 67,
    "name": "Innate Venom",
    "description": "Your blood carries toxins deadly to all but yourself. You gain the Envenom action, which can deliver minor vishkanyan venom. The save DC for your venom is equal to the higher of your class DC or spell DC. Envenom [one action] Frequency: once per day; Effect: Through use of either saliva or blood, you use your innate toxins to apply vishkanyan venom to your weapon or a piece of ammunition. To use your blood, you must be injured, or you can deal 1 slashing damage to yourself as part of the action. The vishkanyan venom remains potent until the end of your next turn, or until you expend it as normal for an injury poison by either hitting a target or critically failing an attack roll. Minor Vishkanyan Venom (injury, poison) Saving Throw Fortitude; Maximum Duration 6 rounds; Stage 1 1d4 poison damage (1 round); Stage 2 1d4 poison damage (1 round); Stage 3 1d4 poison damage (1 round)",
    "code": [
        "GIVE-FEAT-NAME=Envenom"
    ],
    "wsci": [
        ["giveFeatName",["envenom"]]
    ] satisfies Expression[]
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 68,
    "name": "Snake Fangs",
    "description": "Your mouth contains either rows of hooked, needle-sharp teeth or a pair of vicious serpent fangs. You gain a fangs unarmed attack that deals 1d6 piercing damage. Your fangs are in the brawling group and have the finesse and unarmed traits.",
    "itemWeaponID": 2979
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 69,
    "name": "Glowing Horn",
    "description": "Your horn reacts to psychic energy by softly glowing. The horn emanates dim light in a 10-foot emanation until the start of your next turn whenever you use an occult action you gained from an ancestry feat, cast an innate occult spell, or Cast a Spell that has the mental trait."
} as const satisfies PhysicalfeaturesTableRowConstraints,
{
    "table": "physicalfeatures",
    "id": 70,
    "name": "Empathic Sense",
    "description": "Kashrishi are able to get a vague sense of the current emotional state of others within 15 feet of them. This manifests as a general feeling of happiness, anger, or fear, without any specific details. For those with whom kashrishi have an emotional connection, physical touch can heighten this sense to greater degrees of detail and understanding, increasing with the strength of their bond. This also functions as an imprecise sense alerting you to the presence, but not the precise location, of non-mindless creatures within the area. You gain a +2 circumstance bonus on Perception checks to Sense Motive against non-mindless creatures within the area of your empathic sense.",
    "code": [
        "CONDITIONAL-INCREASE-PERCEPTION=2~circumstance bonus to Sense Motive against non-mindless creatures within the area of your empathic sense"
    ],
    "wsci": [
        ["adjust","PERCEPTION",null,2,null,"circumstance bonus to Sense Motive against non-mindless creatures within the area of your empathic sense"]
    ] satisfies Expression[]
} as const satisfies PhysicalfeaturesTableRowConstraints,
 ] as const;

export const physicalfeatures = hookupTableLookup(_physicalfeatures);