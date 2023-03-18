import { LitElement, css, html, nothing, TemplateResult } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { books } from '../data/books';
import { sensetypes } from '../data/sensetypes';
import { Table, TableName, TableRow, TableRowTypeMap } from '../data/table_metadata';

import { nameTableSortFn, nopTableFilterFn, TableFilterFn } from '../tables';
import { renderMisc, renderBook } from '../util/render-misc';
import { renderRarity } from '../util/render-tags';
import { renderText } from '../util/render-text';
import { renderTableRowTags } from './pf-tag';
import { basicStyles, cardStyles } from '../styles/shared';

type View = 'basics' | 'description';

const getScrollParent = (node: Node) => {
  // Should we ever introduce a scrollable area between the selections used and the document root,
  // then we should add some actual code here to determins which parent element to call scrollBy on.
  return document.scrollingElement || document.documentElement;
}

@customElement('pf-selection')
export class PFSelection extends LitElement {
  @property({attribute: false}) table?: (TableRow & { id: number, name: string })[];
  @property({attribute: false}) sortFn = nameTableSortFn;
  @property({attribute: false}) filterFn: TableFilterFn = nopTableFilterFn;
  @property({attribute: 'detailed', type: Boolean}) detailed = false;

  @state() nameFilter = '';

  render() {
    const { table, sortFn, filterFn, nameFilter, detailed } = this;
    if (!table) return nothing;

    const rows = table
       // skipping "name": "__ Template Class __",
      .filter(row => !row.name?.startsWith('__'))
      .filter(filterFn)
      .filter(row => !nameFilter || row.name.toLocaleLowerCase().includes(nameFilter))
      .sort(sortFn)
      .map((row: TableRow) => html`
          <pf-selection-card .row=${row} .detailed=${detailed} @chosen=${() => this.dispatchEvent(new CustomEvent('chosen', { detail: row.id }))}></pf-selection-card>`);

    return html`
      <form role="search">
        <input @input=${(e: InputEvent) => { this.nameFilter = (e.target as HTMLInputElement|null)?.value?.toLocaleLowerCase() || ''}} type="search" placeholder="Filter by name...">
      </form>

      <section class="selections">
        ${rows}
      </section>
    `;
  }

  static styles = [
    basicStyles,
    css`
      :host {
        display: block;
      }
      .selections {
        display: grid;
        grid-template-columns: repeat( auto-fill, minmax(400px, 1fr) );
      }
      form {
        display: flex;
        justify-content: center;
      }
      form > input[type=search] {
        margin-top: 1rem;
        outline: none;
        padding: 2px 1em;
        display: block;
        border-radius: 0.5rem;
      }
    `
  ];
}

@customElement('pf-selection-card')
export class PFSelectionCard extends LitElement {
  @property({attribute: false}) row!: TableRow;
  @property({attribute: false}) detailed = false;

  @state() view: View = 'basics';
  @query('div.card-content') contentEl?: HTMLDivElement;

  render() {
    const { row } = this;
    if (!row) return nothing;

    const extraButtons: TemplateResult[] = [];
    let content: TemplateResult | unknown;

    const retainPosition = () => {
      // A description will typically be the size of multiple cards of containing just the basics;
      // switching back to basics will then mean that we are looking at a card maybe five steps
      // down and we are lost. Scrolling to get the footer in the same location as before the switch.
      
      const { contentEl } = this;
      if (!contentEl) return;

      const oldHeight = contentEl.scrollHeight;

      this.updateComplete.then(() => {
        const newHeight = contentEl.scrollHeight;
        const scroller = getScrollParent(contentEl);
        console.log('scrolling', scroller, newHeight-oldHeight);

        scroller.scrollBy(0, newHeight-oldHeight);
      });
    }

    if (this.detailed && ('description' in this.row) && this.row.description) {
      if (this.view == 'description') {
        extraButtons.push(html`<button class="shrink" @click=${() => { this.view = 'basics'; retainPosition(); }}>Basics</button>`);
        content = this.renderDescription();
      } else {
        extraButtons.push(html`<button class="expand" @click=${() => this.view = 'description'}>Description</button>`);
        content = this.renderBasics();
      }
    } else {
      content = this.renderCombined();
    }

    const fallbackTitle = html`#<b>${row.id}</b>`;

    return html`
      <article class="card">
        <header>
            <span class="name">${('name' in row) && row.name ? row.name : fallbackTitle}</span>
            <span class="tags">${renderTableRowTags(this.row)}</span>
        </header>

        <div>
          ${content}
        </div>

        <footer>
          ${extraButtons}
          <button class="choose" @click=${() => this.dispatchEvent(new CustomEvent('chosen'))}>Choose</button>
        </footer>
      </article>
    `;
  }

  static styles = [
    basicStyles,
    cardStyles,
    css`
      :host {
        margin: 2rem;
        color: var(--canvas-fg);
        container-type: inline-size;

        --button-primary-fg: var(--button-fg);
        --button-primary-bg: hsla(var(--button-bg-hsl), .5);
        --button-primary-border: solid 2px hsla(var(--button-bg-hsl), .8);
        --button-secondary-fg: var(--field-fg);
        --button-secondary-bg: hsla(var(--field-bg-hsl), .5);
        --button-secondary-border: solid 2px hsla(var(--field-bg-hsl), .8);      
      }

      header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      @container (width < 25rem) {
        header { 
          flex-direction: column;
        }
        header .name {
          margin-bottom: 0.2rem;
        }
      }
      header .tags {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }

      article.card > div {
        padding-bottom: 1rem;
      }

      .top .stats {
        display: grid;
        grid-template-columns: repeat( auto-fill, minmax(12em, 1fr) );
        margin-top: 0.5rem;
      }

      footer {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      footer button {
        border: var(--button-secondary-border);
        color: var(--button-secondary-fg);
        background: var(--button-secondary-bg);

        flex-grow: 1;
        padding: 16px 0;

        margin-bottom: -2rem;
      }
      footer button.choose {
        border: var(--button-primary-border);
        color: var(--button-primary-fg);
        background: var(--button-primary-bg);
      }
      footer button:first-child {
        border-bottom-left-radius: 32px;
        margin-left: -2rem;
      }
      footer button:last-child {
        border-bottom-right-radius: 32px;
        margin-right: -2rem;
      }
    `
  ];

  renderCombined() {
    const { row } = this;
    return html`
      ${this.renderTop()}
      ${('description' in row) && row.description ? renderText(row.description) : nothing}
      ${this.renderRowProficiencies()}
    `;
  }

  renderBasics() {
    return html`
      ${this.renderTop()}
      ${this.renderRowProficiencies()}
    `;
  }

  renderDescription() {
    const { row } = this;

    // Should not get here unless there is a description, but checking mostly to keep Typescript happy
    return ('description' in row) && row.description ? renderText(row.description) : nothing
  }

  renderTop(): (TemplateResult | unknown) {
    const { row } = this;

    const lookup = <T extends TableName[], P extends keyof TableRowTypeMap[T[number]]>(tableNames: T, prop: P, cb?: (v: TableRowTypeMap[T[number]][P])=>unknown) => {
      if (tableNames.includes(row.table)) {
        const value = prop in row ? row[prop as keyof typeof row] : undefined;
        if (value) {
          const rendered = cb ? cb(value as Parameters<typeof cb>[0]) : value;
          return html`<span class="prop">${rendered}</span>`;
        }
      }
      return nothing;
    }

    return html`
      <div class="top">
          ${renderBook(row.contentSrc)}
          <div class="stats">
            ${lookup(['classes'], 'keyAbility', ka => html`<strong>Ability</strong>: ${ka}`)}
            ${lookup(['ancestries'], 'hitPoints', hp => html`<strong>HP</strong>: ${hp}`)}
            ${lookup(['classes'], 'hitPoints', hp => html`<strong>HP/level</strong>: ${hp}`)}
            <span class="prop">${this.renderRowSenses()}</span>
          </div>
      </div>
    `;
  }

  renderRowSenses(): TemplateResult[] | unknown {
    if (this.row.table === 'ancestries') {
      const label = html`<strong>Senses</strong>:`;
      if ('additionalSenseID' in this.row) {
        return [label, renderMisc([this.row.visionSenseID, this.row.additionalSenseID], sensetypes)];
      } else if ('visionSenseID' in this.row) {
        return [label, renderMisc([this.row.visionSenseID], sensetypes)];
      }
    }
    return nothing;
  }

  // If we want this information then we could
  // a) reroute currentlyMadeChoice calls via the sheet
  // b) calculate a sheet in which this selection has been made
  //    (intercepting currentlyMadeChoice and adding this).
  // c) find all refs starting with thetable[theid]
  // d) interpret the changes, or mostly just relay change value+description

  renderRowProficiencies(): TemplateResult | unknown {
    // NOTE: Originally intended to list results of GIVE-PROF-IN in WSC Code.
    return nothing;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pf-selection': PFSelection;
    'pf-selection-card': PFSelectionCard;
  }
}