import { LitElement, css, nothing, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { html, unsafeStatic } from 'lit/static-html.js';
import { basicStyles } from '../styles/shared';

import { uniqueId } from './pf-tip';

import { tags } from '../data/tags';
import { feats } from '../data/feats';

// @ts-ignore 7016
import { parse } from '../wsc/wsc-text';

type Index           = 'action' | 'feat' | 'item' | 'language' | 'spell' | 'trait'; 
type ListVariant     = 'bullet' | 'non_bullet' | 'success_level';
type TypographyStyle = 'underline' | 'big_bold' | 'bold' | 'strikethrough' | 'superscript';
type Color           = 'blue' | 'green' | 'cyan' | 'red' | 'yellow';
type TooltipStyle    = 'normal' | Color | `${Color}_underline`;
type TableAlignment  = 'left' | 'center' | 'right';

type Document = Section[];
type Section = Table | List | Line;
type Line = Part[];
type Part = Icon | Indexed | Book | External | Tooltip | Indented | Typography | ThematicBreak | Asterisk | string;
type Icon            = { type: 'icon', name: string }
type Indexed         = { type: 'indexed', index: Index, name: string, displayName: string }
type Book            = { type: 'book', codeName: string, page: number, text: string }
type External        = { type: 'external', url: string }
type List            = { type: 'list', variant: ListVariant, items: ListItem[] }
type ListItem        = { type: 'item', heading: string, content: Part[] } | Part[];
type Table           = { type: 'table', headings: string[], alignments: TableAlignment[], rows: TableRow[] }
type TableRow        = TableCell[];
type TableCell       = Part[];
type Tooltip         = { type: 'tooltip', inline: string, tip: string, style: TooltipStyle }
type Indented        = { type: 'indented', content: Part[] }
type Typography      = { type: 'typography', style: TypographyStyle, body: string }
type ThematicBreak   = { type: 'break' }
type Asterisk        = { type: 'asterisk' }

@customElement('pf-text')
export class PFText extends LitElement {
  @property({attribute: 'text'}) text!: string;

  render() {
    let result: typeof nothing | TemplateResult[] = nothing;

    const timeLogMsg = '⏱ WSC Text Parsing/Rendering';    
    console.time(timeLogMsg);
    console.group('🧑‍💻 Parsing/Rendering WSC Text');
  
    // FIXME: Should really track down a single textnode and pick
    // that up; with innerHTML we may also get <!--?lit etc.
    const text = this.text ?? this.innerHTML;

    try {
      const document = parse(text + '\n') as Document;
      result = document.map(section => this.renderSection(section));
    } catch (err) {
      console.error(err, text);
    }
  
    console.groupEnd();
    console.timeEnd(timeLogMsg);
  
    return result;
  }

  renderSection(section: Section) {
    console.log('renderSection', section);
    if (Array.isArray(section)) {
      return html`<p>${section.map(part => this.renderPart(part))}</p>`;
    }

    switch (section.type) {
      case 'table': return this.renderTable(section);
      case 'list':  return this.renderList(section);
    }
  }
  
  renderTable(table: Table) {
    console.log('renderTable', table);

    // Might want a reusable table based on a similar type
    type Column = {
      alignment: TableAlignment;
      heading: string;
      values: (TemplateResult|unknown)[];
    }

    // NOTE: Currently assumes that headings and alignments have the same number of entries, a number
    //       which is also the number of cells in each row.

    const columns: Column[] = [];
    table.headings.forEach((heading, index) => {
      columns.push({
        heading,
        alignment: table.alignments[index],
        values: []
      });
    });
    table.rows.forEach(row => {
      row.forEach((cell, index) => columns[index].values.push(this.renderTableCell(cell)));
    });

    const renderColumn = (column: Column) => html`
      <div class="column align-${column.alignment}">
        <div class="heading">${column.heading}</div>
        ${column.values.map(value => html`<div class="cell">${value}</div>`)}
      </div>
    `;

    return html`
      <article class="table">
        <div class="columns">
          ${columns.map(column => renderColumn(column))}
        </div>
      </article>
    `;
  }

  renderTableCell(cell: TableCell) {
    return cell.map(part => this.renderPart(part));
  }

  renderList(list: List) {
    console.log('renderList', list);

    const renderItem = (item: ListItem) => Array.isArray(item)
    ? html`<li>${item.map(part => this.renderPart(part))}</li>`
    : html`<li><strong>${item.heading}</strong> ${item.content.map(part => this.renderPart(part))}`;

    return html`
    <ul class="list ${list.variant}">
      ${list.items.map(item => renderItem(item))}
    <ul>
    `;
  }

  renderPart(part: Part) {
    if (typeof part === 'string') {
       return html`<span class="body">${part}</span>`;
    }

    switch (part.type) {
      case 'icon': return this.renderIcon(part);
      case 'indexed': return this.renderIndexed(part);
      case 'book': return html`TODO: book ${part.codeName}, ${part.page}, ${part.text}`;
      case 'external': return html`TODO: external ${part.url}`;
      case 'tooltip': return html`TODO: tooltip ${part.inline}, ${part.tip}, ${part.style}`;
      case 'break': return html`<hr>`;
      case 'asterisk': return html`<span class="asterisk"></span>`;
      case `typography`: return html`<span class="typography ${part.style}">${part.body}</span> `;

      default: return html`TODO: Implement ${part.type}`;
    }
  }

  renderIcon(icon: Icon) {
    // TODO: Use the paizo font w/ ligagture magic or come up with another solution for action icons etc
    return html`TODO: icon ${icon.name}`;
  }

  renderIndexed(indexed: Indexed) {
    // traits from tags etc... will need something bigger than a regular tooltip to show the WSC contents
    console.log('renderIndexed', indexed);

    let description: string | undefined;
    switch (indexed.index) {
      case 'trait':
        description = tags.byNameUnique(indexed.name)?.description;
        break;
      case 'feat':
        description = feats.byNameUnique(indexed.name)?.description;
        break;
    }

    if (description) {
      const id = uniqueId();
      const tmpl = unsafeStatic(`<template><pf-text>${description}</pf-text></template>`);

      return html`
        <span id=${id} class="indexed ${indexed.index} has-tip">${indexed.displayName}</span>
        <pf-tip for=${id}>${tmpl}</pf-tip>
      `;
    }
    return html`<span class="indexed ${indexed.index}">${indexed.displayName}</span>`;
  }

  static styles = [
    basicStyles,
    css`
      :host {
        color: var(--canvas-fg);
      }
      .table {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .table .columns {
        display: flex;
        flex-direction: row;
        box-shadow: var(--shadow);
        padding: 0.5em;
        margin: 0.5em;
      }
      .table .heading {
        color: var(--accent-fg);
      }
      .typography.bold {
        font-weight: bold;
      }
      .typography.big_bold {
        color: var(--accent-fg);
        font-weight: bolder;
        font-size: 1.2em;
      }
      .asterisk {
        position: relative;
      }
      .asterisk::before {
        content: '*';
        position: absolute;
        top: 0;
        left: -0.1em;
        color: red;
        font-size: 0.7em;
      }
      .indexed {
        color: var(--link-active-fg);
      }
      .has-tip {
        text-decoration: underline dotted var(--link-active-fg);
      }
      ul.bullet {
        list-style-type: '👉';
      }
      ul.non_bullet {
        list-style-type: none;
      }
    `
  ];
}

declare global {
  interface HTMLElementRarityNameMap {
    'pf-text': PFText
  }
}
