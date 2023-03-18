import { PropertyValues, css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DynamicLitElement } from '../styles/dynamic';
import { basicStyles } from '../styles/shared';

export interface Tab<Names=string> {
  name: Names;
  title?: string;
  badgeCount?: () => number;
  enabled: ()=>boolean;
}

export type TabType = 'nav' | 'basic';

@customElement('pf-tabs')
export class PFTabs extends DynamicLitElement {
  @property({attribute: 'type', reflect: true}) type = 'basic';
  @property({attribute: 'tabs'}) tabs?: Tab[];
  @property({attribute: 'tab', reflect: true}) tab!: string;

  render() {
    let { tabs, tab } = this;

    if (!tabs || tabs.length === 0) return nothing;
    if (!tab) {
      tab = this.tab = tabs[0].name;
    }
    let def = tabs.find(x => x.name === tab);
    if (!def || !def.enabled()) {
      def = tabs[0];
      tab = def.name;
    }

    // TODO: aria-keyshortcuts="ArrowLeft ArrowRight Space Enter"

    const items = tabs.map(d => {
      const badgeCount = d.badgeCount ? d.badgeCount()||undefined : undefined;

      return html`
        <button role="tab" ?disabled=${!d.enabled()} @click=${() => this.tab = d.name}
          ?aria-selected=${this.tab === d.name}
          data-badge=${ifDefined(badgeCount)}>${d.title||d.name.toUpperCase()}
        </button>
    `;});

    return html`
      <div role="tablist">
        ${items}
      </div>
    `;
  }

  willUpdate(changedProperties: PropertyValues<this>) {
    // only need to check changed properties for an expensive computation.
    if (changedProperties.has('tab')) {
      this.dispatchEvent(new CustomEvent<string>('selected', { detail: this.tab }));
    }
  }
    
  static styles = [
    basicStyles,
    css`
      :host {
        display: block;
        --note-bg: hsl(60deg, 100%, 80%);
        --note-fg: rgb(30,30,60);

        --nav-arrow-color: #111;
        --nav-arrow-reverse-color: #ddd;
      }
      :host([type="general"]) button[aria-selected] {
        color: var(--link-active-fg);
        border-bottom: solid 3px var(--link-active-fg);
      }
      button {
        color: var(--link-fg);
      }
      button[disabled] {
        opacity: 0.5;
      }
      button:not([disabled]) {
        cursor: pointer;
      }
      
      :host([type="nav"]) button {
        position: relative;
        color: var(--nav-arrow-reverse-color);
        background: var(--nav-arrow-color);
        padding: calc(0.5rem - 1px) 0.5rem;
        margin-right: 1rem;
        border-radius: 2px;
      }
      :host([type="nav"]) button::after {
        content: "";
        position: absolute;
        top: 0;
        right: calc(-1rem + 1px);
        width: 0;
        height: 0;
        border: solid 1rem transparent;
        border-right: 0;
        border-left-color: var(--nav-arrow-color);
        margin-left: 1rem;
      }
      :host([type="nav"]) button[aria-selected] {
        color: var(--nav-arrow-color);
        text-shadow: #000 0 0 1px;
        background: var(--nav-arrow-reverse-color);
      }
      :host([type="nav"]) button[aria-selected]::after {
        border-left-color: var(--nav-arrow-reverse-color);
      }

      [data-badge] {
        position: relative;
        margin-right: 10px;
        text-shadow: none;
      }
      [data-badge]::before {
        position: absolute;
        display: inline-block;
        background-color: var(--note-bg);
        color: var(--note-fg);
        width: 20px;
        height: 20px;
        right: 0;
        bottom: 40%;
        font-size: 0.8rem;
        text-align: center;
        font-weight: bold;
        z-index: 1;
        content: attr(data-badge);
      }
      :nth-child(odd) > [data-badge]::before {
        transform: rotate(-10deg) translateX(8px);
        box-shadow: 4px 3px 6px rgba(0,0,0,0.5);
      }
      :nth-child(even) > [data-badge]::before {
        transform: rotate(15deg) translateX(8px);
        box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
      }
    `
  ];
}

declare global {
  interface HTMLElementRarityNameMap {
    'pf-tabs': PFTabs
  }
}
