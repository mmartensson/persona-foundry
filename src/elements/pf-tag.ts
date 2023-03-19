import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tags, TagID } from '../data/tags';
import { Rarity } from '../data/shared_types';
import { TableRow } from '../data/table_metadata';
import { rgbColors } from '../styles/dynamic';

export type TagColor = typeof rgbColors[number] | 'gray';

@customElement('pf-tag')
export class PFTag extends LitElement {
  @property({ attribute: 'rarity', type: String }) rarity?: Rarity;
  @property({ attribute: 'tag-id', type: Number }) tagID?: TagID;
  @property({ attribute: 'color', type: String, reflect: true }) color?: TagColor;
  @property({ attribute: 'text', type: String }) text?: string;
  @property({ attribute: 'tip', type: String }) tip?: string;

  render() {
    let { text, tip, rarity } = this;

    text ??= this.innerText;
    
    if (rarity) {
      text = rarity[0] + rarity.substring(1).toLowerCase();
      
      switch (rarity.toLowerCase()) {
        case 'common':
          this.color = 'gray';
          break;
        case 'uncommon':
          this.color = 'green';
          break;
        case 'rare':
          this.color = 'violet';
          break;
        case 'unique':
        case 'special':
          this.color = 'yellow';
          text = 'Special';
          break;
      }    
    }

    if (this.tagID) {
      const tag = tags.byId(this.tagID);
      text = tag.name;
      tip = tag.description;
    }

    if (tip) {
      return html`
        <pf-tip .target=${this}>${tip}</pf-tip>
        <span class="has-tip">${text}</span>
      `;
    } else {
      return html`<span>${text}</span>`;
    }
  }

  static get styles() {
    return [
      css`
        :host {
          display: inline-block;
          background: var(--canvas-bg-extreme);
          color: var(--canvas-fg-extreme);
          padding: 0.3rem 0.7rem;
        }

        .has-tip {
          text-decoration: 1px dotted underline var(--canvas-fg-gray);
        }

        :host([color='red'])        { background: var(--named-red-bg);         }
        :host([color='orange'])     { background: var(--named-orange-bg);      }
        :host([color='yellow'])     { background: var(--named-yellow-bg);      }
        :host([color='chartreuse']) { background: var(--named-chartreuse-bg);  }
        :host([color='green'])      { background: var(--named-green-bg);       }
        :host([color='aquamarine']) { background: var(--named-aquamarine-bg);  }
        :host([color='cyan'])       { background: var(--named-cyan-bg);        }
        :host([color='azure'])      { background: var(--named-azure-bg);       }
        :host([color='blue'])       { background: var(--named-blue-bg);        }
        :host([color='violet'])     { background: var(--named-violet-bg);      }
        :host([color='magenta'])    { background: var(--named-magenta-bg);     }
        :host([color='rose'])       { background: var(--named-rose-bg);        }
        :host([color='gray'])       { background: var(--canvas-bg-gray);       }

        :host(:first-of-type) {
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }
        :host(:last-of-type) {
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        }
      `
    ];
  }
}

// A little helper that finds most tags of any TableRow and renders
// matching pf-tag elements. 

export const renderTableRowTags = (row: TableRow): (TemplateResult | unknown)[] => {
  const output: (TemplateResult | unknown)[] = [];

  if (row.table === 'uniheritages') {
    output.push(html`<pf-tag text="Versatile" tip="Heritage that can be combined with any Ancestry"></pf-tag>`);
  }

  if ('rarity' in row) {
    output.push(html`<pf-tag rarity=${row.rarity}></pf-tag>`);
  }

  if ('tagID' in row) {
    output.push(html`<pf-tag tag-id=${row.tagID}></pf-tag>`);
  }

  if ('tagIDs' in row) {
    row.tagIDs.forEach((id: TagID) => {
      output.push(html`<pf-tag tag-id=${id}></pf-tag>`);
    });
  }

  return output;
}

declare global {
  interface HTMLElementTagNameMap {
    'pf-tag': PFTag;
  }
}
