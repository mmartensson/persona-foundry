{ 
  // Testing at https://peggyjs.org/online.html

  // Not using https://www.npmjs.com/package/ts-pegjs since it produced a parser that did not
  // fully support Peggy 3.0.0 syntax.

  // npx peggy --format es src/wsc/wsc-text.pegjs -o src/wsc/wsc-text.js

  const icon = name => typed('icon', { name });
  const indexed = (index, name, displayName) => typed('indexed', { index, name, displayName });
  const book = (codeName, page, text) => typed('book', { codeName, page, text });
  const external = url => typed('external', { url });
  const list = (variant, items) => typed('list', { variant, items });
  const item = (label, content) => typed('item', { label, content });
  const table = (headings, alignments, rows) => typed('table', { headings, alignments, rows });
  const tooltip = (inline, tip, style) => typed('tooltip', { inline, tip, style });
  const indented = content => typed('indented', { content });
  const typography = (style, body) => typed('typography', { style, body });
  const thematicBreak = () => typed('break', {});
  const asterisk = () => typed('asterisk', {});

  const typed = (type, data) => { return { type, ...data } };

  const attemptConcat = parts => parts.reduce((acc, curr) => {
    if (typeof curr === 'string' && acc.length > 0 && typeof acc[acc.length-1] === 'string') {
      acc[acc.length-1] += curr;
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
}

Document
 = Section|1..|

Section
 = MultiLine
 / EmptyLine
 / IndentedLine
 / ThematicBreak
 / RegularLine

// TODO: Consider having the lists here instead of doing the FirstPart logic
MultiLine
 = Table
 / List

IndentedLine
 = ":>" content:RegularLine                                                       { return indented(content) }

ThematicBreak
 = "----" Eol                                                                     { return thematicBreak() }

EmptyLine
 = _ Eol                                                                          { return [] }

RegularLine
 = parts:Part|1..| Eol?                                                           { return attemptConcat(parts) }

Table
 = headings:TableHeadings alignments:TableAlignments rows:TableRow+               { return table(headings, alignments, rows) }

TableHeadings
 = @TableHeading|2..,"|"| Eol

TableAlignments
 = @TableAlignment|2..,"|"| Eol

TableAlignment
 = ":--"                                                                          { return 'left'   }
 / (":-:" / "-:-")                                                                { return 'center' }
 / "--:"                                                                          { return 'right'  }

TableRow
 = @TableCell|2..,"|"| Eol

TableCell
 = Part+

List
 = BulletedList
 / NonBulletedList
 / SuccessLevelList

BulletedList
 = items:BulletedListItem|1..|                                                    { return list('bullet', items) }

NonBulletedList
 = items:NonBulletedListItem|1..|                                                 { return list('non_bullet', items) }

SuccessLevelList
 = items:SuccessLevelListItem|1..|                                                { return list('success_level', items) }

BulletedListItem
 = "* " _ heading:ListHeading? ":" content:RegularLine                            { return item(heading, content) }
 / "* " _ content:RegularLine /* Colon missing; indication of slippery fingers */ { return content }

NonBulletedListItem
 = "~ " _ heading:ListHeading? ":" content:RegularLine                            { return item(heading, content) }
 / "~ " _ content:RegularLine                                                     { return content }

SuccessLevelListItem
 = heading:SuccessLevel ":" content:RegularLine                                   { return item(heading, content) }

SuccessLevel
 = "Critical Success"
 / "Success"
 / "Failure"
 / "Critical Failure"

Part
 = _ @Icon
 / _ @Indexed
 / _ @Page
 / _ @External
 / _ @Tooltip
 / _ @Typography
 / Body

Icon
 = ("FREE-ACTION" / "REACTION" / "ONE-ACTION" / "TWO-ACTIONS" / "THREE-ACTIONS")  { return icon(text()) }
 
Indexed 
 = "(" index:Indexable ":" name:ContainedText displayName:("|" @ContainedText)? ")" 
                { return indexed(index, name.toLowerCase(), displayName || name) }

Indexable
 = ("action"i / "feat"i / "item"i / "language"i / "spell"i / "trait"i)            { return text().toLowerCase() }
 / "activity"i                                                                    { return 'action' }
 / ("itme"i / "iteem"i)      /* TYOP */                                           { return 'item' }

Page
 = "page"i num:Integer                                                            { return book('CRB', num, text()) }
 / "Bestiary pg."i num:Integer                                                    { return book('BEST-1', num, 'Bestiary '+num) }

External
 = "[" url:$("http" [-a-zA-Z0-9()@:%_\+.~#?&//=]+) "]"                            { return external(url) }

Tooltip
 = "{" style:(@Style ":")? inline:ContainedText "|" tip:ContainedText "}"         { return tooltip(inline, tip, style) }

Typography
 = "__"  body:$Body+ "__"                                                         { return typography('underline', body) }
 / "***" body:$Body+ "***"                                                        { return typography('big_bold', body) }
 / "**"  body:$Body+ "**"                                                         { return typography('bold', body) }
 / "~~"  body:$Body+ "~~"                                                         { return typography('strikethrough', body) }
 / "^^*^^"                                                                        { return asterisk() }
 / "^^"  body:$Body+ "^^"                                                         { return typography('superscript', body) }

Style
 = "normal"
 / "blue_underline" / "blue"
 / "green_underline" / "green"
 / "cyan_underline" / "cyan"
 / "red_underline" / "red"
 / "yellow_underline" / "yellow"

ListHeading
 = [^:\n\r]+                                                                      { return text().trim() }

TableHeading
 = [^|\n\r]+                                                                      { return text().trim() }

ContainedText
 = [^|{}()\n\r]+                                                                  { return text().trim() }

Body
 = _ [^|{} \t\n\r_*~^]+ _                                                         { return text() }

Integer "integer"
 = _ [0-9]+                                                                       { return parseInt(text(), 10) }
 
_ "whitespace"
 = [ \t]*

Eol "Eol"
 = _ [\r\n]+