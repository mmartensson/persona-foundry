import { LitElement, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import tippy from 'tippy.js';
import tippyCss from 'tippy.js/dist/tippy.css?inline';

// Helpful for generating id on reference element used with `for`
export const uniqueId = (() => {
  let counter = 1000;
  return () => 'ref-'+((counter++).toString(20));
})();

@customElement('pf-tip')
export class PFTip extends LitElement {
  @property({ attribute: 'for', type: String }) target!: string | Element;

  connectedCallback() {
    super.connectedCallback();

    if (!this.target) {
      console.log('No target specified; tooltip disabled', this);
    }

    const element = typeof this.target === 'string' 
      ? this.parentElement?.querySelector('#' + this.target)
      : this.target;

    if (!element) {
      console.warn('Unable to find target element', this.target, '; tooltip disabled', this);
      return;
    }

    let content = this.innerHTML;
    if (content.startsWith('<template')) {
      content = content.replace(/<\/?template>/g,'');
    }

    tippy(element, {
      content,
      allowHTML: true,
      arrow: true,
      animation: 'fade',
      trigger: 'mouseenter',
      interactive: true,
      // FIXME: Even with zIndex maxed out, tippy will be rendered below components
      //        rendered after `element` in the DOM.
      zIndex: Number.MAX_SAFE_INTEGER,
      appendTo: this.shadowRoot as unknown as Element
    });
  }

  static get styles() {
    return [
      unsafeCSS(tippyCss),
      css`
        :host {
          display: inline-block;
        }
      `
    ];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pf-tip': PFTip;
  }
}
