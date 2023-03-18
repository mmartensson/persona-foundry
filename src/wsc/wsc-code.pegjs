{ 
  // Testing at https://peggyjs.org/online.html

  // Not using https://www.npmjs.com/package/ts-pegjs since it produced a parser that did not
  // fully support Peggy 3.0.0 syntax.

  // npx peggy --format es src/wsc/wsc-code.pegjs -o src/wsc/wsc-code.js

  const camelize = function camelize(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  }

  const c = (f, ...rest) => [camelize(f), ...rest];
  const s = (f, ...rest) => [camelize(f), ...rest];
}

Start
  = Expression

Expression
  = IfElse
  / IfSheet
  / Statement
  
IfElse 
  = "IF" _ conditionals:Conditionals _ consequent:BracketedStatement _ elsealternate:("ELSE" _ @BracketedStatement)? { 
          return elsealternate
                ? { conditionals, consequent, alternate: elsealternate }
                : { conditionals, consequent } }

IfSheet
  = "IF-SHEET" _ conditionals:Conditionals _ 
      consequent:BracketedStatement                             { return { conditionals, consequent, sheet: true }}

Conditionals
  = "(" conditionals:Conditional|1..,_ "&&" _| ")"              { return conditionals }

Conditional
  = NumericalConditional
  / ProficiencyConditional
  / NameConditional
  / ToggledConditional
  / BooleanConditional

NumericalConditional
  = f:"HAS-LEVEL"           op:AnyOp num:Integer                { return c(f, op, num) }
  / f:"HAS-FOCUS-POINTS"    op:AnyOp num:Integer                { return c(f, op, num) }

ProficiencyConditional
  = f:"HAS-PROF"            op:AnyOp name:Proficiency 
      ":" rank:Rank                                             { return c(f, op, name, rank) }

NameConditional
  = f:"HAS-VISION"          op:EqOp name:Name                   { return c(f, op, name) }
  / f:"HAS-FEAT"            op:EqOp name:Name                   { return c(f, op, name) }
  / f:"HAS-CLASS-ABILITY"   op:EqOp name:Name                   { return c(f, op, name) }
  / f:"HAS-ENABLED-SOURCE"  op:EqOp name:Name                   { return c(f, op, name) }
  / f:"HAS-HERITAGE"        op:EqOp name:Name                   { return c(f, op, name) }

ToggledConditional
  = f:"IS-TOGGLED"          op:EqOp toggle:Name                 { return c(f, op, toggle) }

BooleanConditional
  = f:"IS-UNARMORED"                                            { return c(f) }

AnyOp
  = EqOp
  / RelOp

EqOp
  = "=="
  / "!="

RelOp
  = ">="
  / "<="

BracketedStatement
  = "{" _ statement:Statement _ "}"                             { return statement }

Statement
  = BoostsStmt
  / FeatStmt
  / LanguageStmt
  / ProficienciesStmt
  / SkillStmt
  / LoreStmt
  / SpellStmt
  / ResistWeakStmt
  / SpecializationStmt
  / FamiliarStmt
  / MiscellaneousStmt
  / SheetStmt
  / UniversalStmt
  // UnimplementedStmt

SheetStmt
  = ConditionStmt
  / ItemDefaultStmt
  / StatAdjustmentStmt
  / MiscSheetStmt

BoostsStmt
  = f:"GIVE-ABILITY-BOOST-SINGLE" "=ALL"                        { return s(f, ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'] ) } 
  / f:"GIVE-ABILITY-BOOST-SINGLE" "=" 
      abilities:Ability|1.., ","|                               { return s(f, abilities ) }
  / f:"GIVE-ABILITY-BOOST-MULTIPLE" "=" num:Integer             { return s(f, num ) }

FeatStmt
  = f:"GIVE-FEAT-NAME"i "=" feat:Feat                           { return s(f.toUpperCase(), feat) }
  / f:"GIVE-FEAT-FROM" "=" text:Text ":" 
      choices:FromChoice|1..,","|                               { return s(f, text, choices ) }
  / f:"GIVE-FEAT" "=" level:Level traits:Choices?               { return s(f, level, traits ? traits : [] ) }
  / f:"GIVE-GENERAL-FEAT"   "=" level:Level traits:Choices?     { return s(f, level, traits ? traits : [] ) }
  / f:"GIVE-SKILL-FEAT"     "=" level:Level traits:Choices?     { return s(f, level, traits ? traits : [] ) }
  / f:"GIVE-ANCESTRY-FEAT"  "=" level:Level traits:Choices?     { return s(f, level, traits ? traits : [] ) }
  / f:"GIVE-CLASS-FEAT"     "=" level:Level traits:Choices?     { return s(f, level, traits ? traits : [] ) }
  / f:"GIVE-ARCHETYPE-FEAT" "=" level:Level traits:Choices?     { return s(f, level, traits ? traits : [] ) }
  / f:"SET-IMPROVISED-WEAPON-NO-PENALTY"                        { return s(f) }

LanguageStmt
  = f:"GIVE-LANG-NAME" "=" language:Name                        { return s(f, language) }
  / f:"GIVE-LANG-BONUS-ONLY"                                    { return s(f) }
  / f:"GIVE-LANG"                                               { return s(f) }

ProficienciesStmt
  = f:"GIVE-PROF-IN" "=" proficiency:Proficiency ":" rank:Rank  { return s(f, proficiency, rank) }
  / f:"GIVE-PROF-INCREASE-IN" "=" proficiency:Proficiency       { return s(f, proficiency) }

SkillStmt
  = f:"GIVE-SKILL-INCREASE"                                     { return s(f) }
  / f:"GIVE-SKILL"i "=" rank:Rank choices:Choices?              { return s(f.toUpperCase(), rank, choices ? choices : [] ) }

LoreStmt
  = f:"GIVE-LORE" "=" lore:Text                                 { return s(f, lore) }
  / f:"GIVE-LORE-CHOOSE-INCREASING"                             { return s(f) }
  / f:"GIVE-LORE-CHOOSE"                                        { return s(f) }

SpellStmt
  = f:"SET-SPELL-CASTING-TYPE" "=" src:Name ":" type:Name       { return s(f,src,type) }
  / f:"SET-SPELL-TRADITION" "=" src:Name ":" tradition:Name     { return s(f,src,tradition) }
  / f:"SET-SPELL-KEY-ABILITY" "=" src:Name ":" ability:Ability  { return s(f,src,ability) }
  / f:"SET-SPELL-SLOTS" "=" src:Name ":" algo:Name              { return s(f,src,algo) }
  / f:"GIVE-SPELL-SLOT" "=" src:Name ":" spellLevel:SpellLevel  { return s(f,src,spellLevel) }
  / f:"ADD-SPELL-TO-LIST" "=" src:Name ":" 
      spell:Name spellLevel:(":" @SpellLevel)?                  { return s(f,src,spell,spellLevel) }
  / f:"GIVE-FOCUS-SPELL" "=" src:Name ":" spell:Name            { return s(f,src,spell) }
  / f:"GIVE-FOCUS-POINT"                                        { return s(f) }
  / f:"GIVE-INNATE-SPELL-NAME" "=" spell:Name ":" 
      spellLevel:SpellLevel ":" tradition:Name ":" 
      perDay:Integer                                            { return s(f,spell,spellLevel,tradition,perDay) }
  / f:"GIVE-INNATE-SPELL" "=" spellLevel:SpellLevel ":" 
      tradition:Name ":" perDay:Integer                         { return s(f,spellLevel,tradition,perDay) }

ResistWeakStmt
  // While some apparently like the more prose-like "GIVE-RESISTANCE=Acid, Electricity, or Sonic:Half_Level",
  // we are sticking with the documented interface.
  = f:"GIVE-RESISTANCE" "=" resistance:Name ":" level:Level     { return s(f,resistance,level) }
  / f:"GIVE-WEAKNESS" "=" weakness:Name ":" level:Level         { return s(f,weakness,level) }

SpecializationStmt
  = f:"GIVE-WEAPON-SPECIALIZATION"                              { return s(f) }
  / f:"GIVE-GREATER-WEAPON-SPECIALIZATION"                      { return s(f) }
  / f:"GIVE-ARMOR-SPECIALIZATION" "=" proficiency:Proficiency   { return s(f, proficiency) }
  / f:"GIVE-WEAPON-CRITICAL-SPECIALIZATION" "=" 
      proficiency:Proficiency                                   { return s(f, proficiency) }

FamiliarStmt
  = f:"FAMILIAR-GIVE-SPEED" "=" type:SpeedType ":"? _ speed:Integer  { return s(f, type, speed) }
  / f:"FAMILIAR-GIVE-SENSE" "=" sense:Name
      imprecise:("(imprecise " @Integer " " ("ft"/"feet") ")")? { return s(f, sense.trim(), imprecise) }

MiscellaneousStmt
  = f:"GIVE-CLASS-FEATURE-NAME" "=" feature:Name 
      nocode:"[NO-CODE]"?                                       { return s(f, feature, !!nocode) }
  / f:"GIVE-CHAR-TRAIT-NAME" "=" charTrait:Text                 { return s(f, charTrait ) }
  / f:"GIVE-CHAR-TRAIT-COMMON"                                  { return s(f) }
  / f:"GIVE-CHAR-TRAIT"                                         { return s(f) }
  / f:"GIVE-DOMAIN-ADVANCEMENT" "=" src:Name                    { return s(f, src) }
  / f:"GIVE-DOMAIN" "=" src:Name                                { return s(f, src) }
  / f:"GIVE-PHYSICAL-FEATURE-NAME" "=" feature:Name             { return s(f, feature) }
  / f:"GIVE-SENSE-NAME" "=" sense:Name
      imprecise:("(imprecise " @Integer " " ("ft"/"feet") ")")? { return s(f, sense.trim(), imprecise) }
  / f:"GIVE-SPEED" "=" type:SpeedType ":" speed:Integer         { return s(f, type, speed) }
  / f:"GIVE-SPEED" "=" type:SpeedType ":LAND_SPEED"             { return s(f, type, 'land_speed') }
  / f:"GIVE-HERITAGE-EFFECTS-ANCESTRY" "=" ancestry:Name        { return s(f, ancestry) }
  / f:"GIVE-HERITAGE-EFFECTS-NAME" "=" heritage:Name            { return s(f, heritage) }
  / f:"GIVE-SCFS" "=" clab:Name ":" func:Name                   { return s(f, clab, func) }

ConditionStmt
  = f:"GIVE-CONDITION" "=" condition:Name value:(":" @Integer)? { return s(f, condition, value ?? null) }
  / f:"REMOVE-CONDITION" "=" condition:Name                     { return s(f, condition) }

ItemDefaultStmt
  = f:"DEFAULT-WEAPON-RUNE" "=" adjust:SignedInt? _ rune:Text   { return s(f, adjust, rune) }
  / f:"DEFAULT-ARMOR-RUNE"  "=" adjust:SignedInt? _ rune:Text   { return s(f, adjust, rune) }

StatAdjustmentStmt
  = "CONDITIONAL-"? op:("INCREASE" / "DECREASE") "-" 
      primary:PrimaryStat secondary:("_" @Name)? "=" adjust:Integer 
      type:("-" @StatAdjustType)? conditional:("~" @Text)?      { return s(
            'ADJUST', primary, secondary||null,
            op == 'DECREASE' ? -adjust : adjust, 
            type, conditional||null) }
  / "CONDITIONAL" "-" primary:PrimaryStat secondary:("_" @Name)?
      "=" text:WscText                                          { return s('ADJUST-CONDITIONAL', primary, secondary, text) }
  / f:"OVERRIDE-TEMP_HEALTH" "=" math:"LEVEL+CON_MOD"           { return s(f,math) } // Only example in DB dump
  / f:("OVERRIDE-ARMOR_CHECK_PENALTY" / "ARMOR_SPEED_PENALTY") 
      "=" adjust:Integer "-BASE"                                { return s(f,adjust) }

MiscSheetStmt
  = f:"SHEET-CONCEAL-FEAT-NAME" "=" feat:Name                   { return s(f, feat) }
  / f:"SET-APEX-ABILITY-SCORE" "=" ability:Ability              { return s(f, ability) }
  / f:"SET-SIZE" "=" size:("TINY" / "SMALL" / "MEDIUM" 
      / "LARGE" / "HUGE" / "GARGANTUAN")                        { return s(f, size.toLowerCase()) }
  / f:"GIVE-WEAPON-FAMILIARITY" "=" name:Name                   { return s(f, name) }
  / f:"SET-MAP" "=Tier_" tier:Integer                           { return s(f, tier) }
  / f:"DISPLAY-COMPANION-TAB"                                   { return s(f) }
  / f:"SET-FINESSE-MELEE-USE-DEX-DAMAGE"                        { return s(f) }
  / f:"SET-ADD-LEVEL-TO-UNTRAINED-WEAPONS"                      { return s(f) }

PrimaryStat
  = ("SKILL" / "SAVE" / "SCORE" / "AC" / "PERCEPTION"i / "SPEED"
  / "BULK_LIMIT" / "INVEST_LIMIT" / "DEX_CAP"
  / "MAX_HEALTH_BONUS_PER_LEVEL" / "MAX_HEALTH"
  / "ATTACKS" 
  / "MELEE_ATTACKS" / "MELEE_ATTACKS_DMG_BONUS" / "AGILE_MELEE_ATTACKS_DMG_BONUS")
  / "ARCANE_SPELL_DC" / "ARCANE_SPELL_ATTACK" 
  / "OCCULT_SPELL_DC" / "OCCULT_SPELL_ATTACK" 
  / "DIVINE_SPELL_DC" / "DIVINE_SPELL_ATTACK" 
  / "PRIMAL_SPELL_DC" / "PRIMAL_SPELL_ATTACK"                   { return text().toUpperCase(); }

  // TODO: MAX_HEALTH and SCORE come with some math:      
  //        CONDITION_VALUE_TIMES_TWO-STATUS
  //        CONDITION_VALUE*LEVEL

UniversalStmt
  = f:"ADD-TEXT" "=" text:WscText                               { return s(f, text) }
  / f:"GIVE-NOTES-FIELD" "=" text:Text                          { return s(f, text) }
  / f:"CLEAR-DATA-FROM-CODE-BLOCK"                              { return s(f) }              // NOTE: Clears any stored data that has a source originating from this code block"; so need to keep references (table+id will do).
  / f:"DEFINE-VARIABLE" "=" name:Name ":" 
      type:(Name ("(" Name ")")? { return text().toLowerCase() }) { return s(f, name, type) }
  / f:"SET-VARIABLE" "=" name:Name 
      mutator:(".SET_" [A-Z0-9_]+ { return text() })?
      ":" value:(Array/Text)?                                   { return s(f, name, mutator, value) }
  / f:"HIDE-FEAT-NAME" "=" name:Name                            { return s(f, name) }
  / f:"OVERRIDE-FEAT-LEVEL" "=" feat:Name ":" level:Integer     { return s(f, feat, level) }
  / f:"SET-KEY-ABILITY" "=" abilities:Ability|1.., ","|         { return s(f, abilities) }

UnimplementedStmt
  = f:$[A-Z\-]+                                                 { error(`Unimplemented ${f} found in ${input}`) }

// Intentionally unimplemented as the database dump makes no use of it:
// "DEFAULT-ADD-ITEM-TO-BAG", "DEFAULT-ADJUST-RANGE", "DEFAULT-ADJUST-RELOAD", "DEFAULT-ADD-TRAIT",
// "DEFAULT-ON-HIT-DAMAGE", "DEFAULT-ON-CRIT-DAMAGE", "DEFAULT-ON-HIT-OTHER", "DEFAULT-ON-CRIT-OTHER",
// "DEFAULT-ON-HIT-CONDITIONAL", "DEFAULT-ON-CRIT-CONDITIONAL"

// Intentionally unimplemented as there are very few occurances and little initial impact:
// "MELEE_ATTACKS_DMG_DICE=1d6", (very lonely)
// "IVE-PROF-INCREASE-IN=ARCANE_SPELL_ATTACK" (bug)
// "GIVE-FEAT-NAME=One Shot, One Kill" (No other mention of feat; not worth expanding token regexp)
// "GIVE-SPEED-Burrow:15", "GIVE-SPEED-Swim:15" (bad syntax)
// "INCREASE-HIT_POINTS=100" (assuming badly spelled MAX_HEALTH)
// "IF (HAS-CLASS-ABILITY==Greater Field Discovery) {When you stoke ..." (missing ADD-TEXT)
// "GIVE-LORE=Esoteric:CHA" (charisma what know? - no other abilities mentioned this way)
// "GIVE-FOCUS-SPELL=Witch:Clinging Ice+" - The "+" is undocumented and weird
// "GIVE-FEAT-NAME:Gravity Punch" (bug)

// Names are intended for lookups, avoiding duplicates. To introduce text visible to the user, go with Text/WscText.

Name
  = _ [0-9A-Za-z\-!_\'’\ ]+                                     { return text().toLowerCase() }

Ability "ability"
  = ("STR"i / "DEX"i / "CON"i / "INT"i / "WIS"i / "CHA"i)       { return text().toUpperCase() }

SpeedType "speed type"
  = ("burrow"i / "climb"i / "fly"i / "land"i / "swim"i)         { return text().toLowerCase() }

StatAdjustType
  = ("status"i / "class"i / "heritage"i / "life-mystery"i)      { return text().toLowerCase() }
  / "circum"i "stance"i?                                        { return 'circumstance' }
  / "item_hide"i                                                { return 'item-hide' }

Proficiency
  = QualifiedProficiency
  / FixedProfName

QualifiedProficiency
  = prof:FixedProfName "~" qualifier:FixedProfName              { return text() }   // Keeping the parts together for now

// Fixing some inconsistencies
FixedProfName
  = trad:SpellTradition "spelldcs"i                             { return `${trad}_spell_dc` }
  / trad:SpellTradition "spellattacks"i                         { return `${trad}_spell_attacks` }
  / [A-Za-z_ ]+                                                 { return text().toLowerCase().replace(/\s+/g,'_') }

SpellTradition
  = ("arcane"i / "divine"i / "occult"i / "primal"i)             { return text().toLowerCase(); }

FromChoice
  = "{" variable:Variable "}"                                   { return '$'+variable } // Need variable magic; filtered by available books, selected classabilities/feats
  / [0-9A-Za-z-!\.\' ]+                                         { return text() }
  
/* {INVENTOR_WEAPON_INITIAL_MODS} in classabilities refers to 
   "DEFINE-VARIABLE=INVENTOR_WEAPON_INITIAL_MODS:LIST",
   "SET-VARIABLE=INVENTOR_WEAPON_INITIAL_MODS:[\"Modification - Blunt Shot\",\"Modification - Complex Simplicity\",\"Modification - Dynamic Weighting\",\"Modification - Entangling Form\", \"Modification - Hampering Spikes\", \"Modification - Hefty Composition\", \"Modification - Modular Head\", \"Modification - Pacification Tools\", \"Modification - Razor Prongs\", \"Modification - Segmented Frame\"]",
*/
Variable
  = [A-Z_]+ { return text() }

Level
  = "Level"                                                     { return [ 'current', null ]}
  / "Half_Level" rel:("+" @Integer)?                            { return [ 'half', rel ?? null ]}
  / ability:Ability rel:("+" @Integer)?                         { return [ ability, rel ?? null ]}
  / abs:Integer                                                 { return [ 'absolute', abs ]}

SpellLevel
  = level:Integer blue:":blue"?                                 { return level; } // "blue" is possibly linked to description; ignoring for now

Feat
  = name:Name traits:Choices?                                   { return traits ? [ name, ...traits ] : [ name ]}

Choices
  = "[" choices:Name|1..,","| ","? "]"                          { return choices }

// Limited text; TODO: Attempt to limit further
Text
  = _ [0-9A-Za-z\-_\.,\'’\[\]\(\)\ ]+                          { return text() }
  
// Cover most of text marked up with WSC
WscText
  = _ [0-9A-Za-z\-_\.,\|:/;~+\'’‘\[\]\(\)\*\ ]+                 { return text() }

Array
  = "[" Quoted|1..,","| "]"                                     { return JSON.parse(text()) }

Quoted
  = _ "\"" [^"]+ "\""                                           { return text() }

Rank "rank"
  = [UTEML]                                                     { return text() }

SignedInt
  = [+-][0-9]+                                                  { return text() }

Integer "integer"
  = _ [0-9]+                                                    { return parseInt(text(), 10) }

_ "whitespace"
  = [ \t\n\r]*
