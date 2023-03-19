import { LitElement, css, html, TemplateResult, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ref } from 'lit/directives/ref.js';
import { Choice, AbilityChoice, ClabChoice, FeatChoice, LanguageChoice, ProficiencyChoice, 
         currentName, chooseName,
         currentlyMadeChoice, makeChoice,
         currentLevel, levelUp } from '../state';
import { classabilities, isClassabilityID } from '../data/classabilities';
import { feats, isFeatID } from '../data/feats';
import { languages, isLanguageID } from '../data/languages';
import { Ability, isAbility, HasTableLookup, MinimalLookupTable } from '../tables';
import { calculateSheet } from '../calc';
import { CalculatedSheet } from '../calc/sheet';
import { ProficiencyMetadata } from '../calc/adjustables';
import { basicStyles, cardStyles } from '../styles/shared';

@customElement('pf-choices')
export class PFChoices extends LitElement {
  #sheet!: CalculatedSheet;

  render() {
    this.#sheet = calculateSheet();

    const renderChoice = (choice: Choice): TemplateResult | unknown => {
      switch (choice.type) {
        case 'ability':
          return this.renderAbilityChoice(choice);
        case 'feat':
          return this.renderFeatChoice(choice);
        case 'language':
          return this.renderLanguageChoice(choice);
        case 'clab':
          return this.renderClabChoice(choice);
        case 'prof':
          return this.renderProficiencyChoice(choice);
      }
    }

    const activeLevels = [...new Set(this.#sheet.activeChoices.map(choice => choice.level))].sort((a,b) => a-b);
    const groupedChoices = activeLevels.map(level => {
      const subset = this.#sheet.activeChoices.filter(choice => choice.level === level);
      return {
        level,
        choices: subset
      }
    });

    return html`
    <section class="basics">
      <article class="identity card">
        <header>Identity</header>
        <label class="label">Name
          <input class="input" type="text" placeholder="Character name"
              value=${currentName()}
              @input=${(e: InputEvent) => chooseName((e.target as HTMLInputElement).value)}>
        </label>
      </article>
    </section>

    <section class="choices">
    ${groupedChoices.map(group => html`
      <article class="level card">
        <header>Level ${group.level}</header>

        ${group.choices.map(choice => html`
          <div class="choice" data-ref=${choice.ref}>
            <div class="name">${choice.label}</div>
            <div class="inputs">
              ${renderChoice(choice)}
            </div>
          </div>
        `)}
      </article>
    `)}
    </section>

    ${currentLevel() < 20 ? html`
      <button class="level" @click=${() => { levelUp(); this.requestUpdate(); }}>Add level ${currentLevel() +1 }</button>
      ` : nothing}
    `;
  }

  static styles = [
    basicStyles,
    cardStyles,
    css`
      :host {
        display: block;
        color: var(--canvas-fg);
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .choice {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
      }

      .inputs {
        display: flex;
        flex-direction: row;
      }

      input, select, button {
        color: var(--field-fg-gray);
        margin-top: 1rem;
        outline: none;
      }

      button.level {
        font-size: 2em;
        color: var(--button-fg-gray);
        background: var(--named-green-bg);
        border-radius: 0.5em;
        padding: 0.5em;
        box-shadow: var(--shadow);
      }
      button.level::before {
        content: '🎉';
      }
  
      /* Will eventually create a pf-dropdown or similar without the limitation
         of white background of popup, necessitating dark text etc */

      .select {
        --select-arrow: var(--field-fg);
        --select-border: var(--field-fg);
      
        display: inline-block;
        position: relative;
        box-shadow: var(--shadow);
        border: solid 1px var(--select-border);
      }
      .select:first-of-type, .select:first-of-type select {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
      .select:last-of-type, .select:last-of-type select {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
      .select select {
        width: auto;
        margin: 0;
        padding: 0.75em 1.5em;
        cursor: pointer;
        border-radius: 0;
        text-indent: 0.01px;
        text-overflow: "";
      }
      .select select::-ms-expand {
        display: none;
      }
      .select:before, .select:after {
        position: absolute;
        top: 50%;
        right: 1em;
        width: 0;
        height: 0;
        padding: 0;
        content: "";
        pointer-events: none;
      }
      .select:before {
        transform: translateY(-125%);
        border-left: 0.25em solid transparent;
        border-right: 0.25em solid transparent;
        border-bottom: 0.375em solid var(--select-arrow);
      }
      .select:after {
        /* Styling the down arrow */
        border-left: 0.25em solid transparent;
        border-right: 0.25em solid transparent;
        border-top: 0.375em solid var(--select-arrow);
      }
      
      @-moz-document url-prefix() {
        .select select {
          padding-right: 1.75em;
        }
      }
      @media screen and (-webkit-min-device-pixel-ratio: 0) {
        .select select {
          padding-right: 2em;
        }
      }
    `
  ];

  renderAbilityChoice(choice: AbilityChoice) {
    const selects: (Element|null)[] = choice.options.map(_ => null);

    const handler = () => {
      const value: (Ability|null)[] = [];

      for (const select of selects) {
        // Very unlikely that we will end up in this handler while the <select>
        // is undergoing DOM work. Checking anyway, to keep TS happy if nothing else.

        if (select === null || !('value' in select))
          return;
  
        const ab = select.value;
        if (isAbility(ab) && !value.includes(ab)) {
          value.push(ab);
        } else {
          select.value = '';
          value.push(null);
        }
      }

      // TODO: Disable/remove <option>s that are not valid due to aleady chosen abilities

      makeChoice(choice.ref, value);
      this.dispatchEvent(new CustomEvent('change'));
    };

    const current = currentlyMadeChoice(choice.ref) || [];

    return choice.options.map((opts, i) => html`
      <label class="select">
        <select ${ref(el => selects[i] = el||null)} @input=${handler}>
          <option></option>
          ${opts.map(value => html`<option ?selected=${current[i]===value}>${value}</option>`)}
        </select>
      </label>
    `);
  }

  renderIdLabelChoice<T extends MinimalLookupTable, I extends T[number]['id']>(choice: FeatChoice|LanguageChoice|ClabChoice, table: T & HasTableLookup<T>, groupByLevel = false) {
    let select: HTMLSelectElement|null = null;

    type Option = {
      id: I;
      name: string;
      level: number;
    }

    const opts = choice.options.map(oid => {
      const id = oid as I;
      const row = table.byId(id);
      const name: string = row.name || ''+id;
      const level: number = 'level' in row ? row.level as number : 0;
      return { id, name, level } satisfies Option;
    }).sort((a,b) => a.name.localeCompare(b.name));

    const levels = [...new Set(opts.map(opt => opt.level))].sort((a,b) => a-b);

    const handler = () => {
      if (select === null) return;

      const id = +select.value;

      // Making extra sure sure we are getting the expected type id, mostly for the benefit of Typescript
      if (choice.type === 'clab' && isClassabilityID(id)
       || choice.type === 'language' && isLanguageID(id)
       || choice.type === 'feat' && isFeatID(id)) {
        makeChoice(choice.ref, id);
        this.dispatchEvent(new CustomEvent('change'));
      }
    };

    const current = currentlyMadeChoice(choice.ref);

    const renderOption: (opt: Option)=>unknown = ({id, name}) => html`
        <option ?selected=${current===id} value=${id}>${name}</option>`;

    const options = groupByLevel
      ? levels.map(level => html`
        <optgroup label="Level ${level}">
          ${opts.filter(opt => opt.level === level).map(opt => renderOption(opt))}
        </optgroup>
        `)
      : opts.map(opt => renderOption(opt));

    return html`
      <div class="select">
        <select ${ref(el => select = el as HTMLSelectElement||null)} @input=${handler}>
          <option></option>
          ${options}
        </select>
      </div>
    `;
  }

  renderFeatChoice(choice: FeatChoice) {
    return this.renderIdLabelChoice(choice, feats, true);
  }

  renderLanguageChoice(choice: LanguageChoice) {
    return this.renderIdLabelChoice(choice, languages);
  }

  renderClabChoice(choice: ClabChoice) {
    return this.renderIdLabelChoice(choice, classabilities);
  }

  renderProficiencyChoice(choice: ProficiencyChoice) {
    let select: HTMLSelectElement|null = null;

    const metadata = this.#sheet.proficiencies.list();

    const opts = choice.options.map(name => {
      return metadata.find(md => md.name === name);
    }).filter(opt => typeof opt !== 'undefined') as ProficiencyMetadata[];

    opts.sort((a,b) => a.displayName.localeCompare(b.displayName));

    const handler = () => {
      if (select === null) return;

      const name = select.value;
      makeChoice(choice.ref, name);
      this.dispatchEvent(new CustomEvent('change'));
    };

    const current = currentlyMadeChoice(choice.ref);

    const renderOption: (opt: ProficiencyMetadata)=>unknown = ({name, displayName}) => html`
        <option ?selected=${current===name} value=${name}>${displayName}</option>`;

    return html`
      <div class="select">
        <select ${ref(el => select = el as HTMLSelectElement||null)} @input=${handler}>
          <option></option>
          ${opts.map(opt => renderOption(opt))}
        </select>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pf-choices': PFChoices;
  }
}