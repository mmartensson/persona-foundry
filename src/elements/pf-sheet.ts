import { LitElement, html, css, svg, nothing, TemplateResult } from 'lit';
import { ref } from 'lit/directives/ref.js';
import { customElement } from 'lit/decorators.js';
import { calculateSheet } from '../calc';
import { CalculatedSheet } from '../calc/sheet';
import { currentAncestry, currentBackground, currentClass, currentHeritage, currentLevel, currentName, Rank, rankToValue } from '../state';
import { HasTableLookup, MinimalLookupTable, abilityNames, nameTableSortFn } from '../tables';
import { languages } from '../data/languages';
import { sensetypes } from '../data/sensetypes';
import { physicalfeatures } from '../data/physicalfeatures';
import { basicStyles } from '../styles/shared';

// Reasonable starting value; visible but two small generally
const initialFontSize = 20;

// Gets called almost immediately after the <text> gets added to the DOM; queuing up
// a task expected to be run when the text has been displayed for about a frame.
const fit = (w: number, h: number, el: SVGTextElement) => {
  // With the initial font size, how much space did we end up using?
  const bbox = el.getBBox();

  // Comparing to the width and height posted, how much do we want to 
  // resize the box to not exceed any of them?
  const multiplier = Math.min(w / bbox.width, h / bbox.height);

  // Multiply the initial font size with this, expecting roughly linear results
  const size = Math.floor(initialFontSize * multiplier);
  el.style.fontSize = size + 'px';
  
  // For small font sizes, the text gets really skinny; making the text a bit bold
  if (size <= 55) {
    el.style.fontWeight = '600';
  }
}

const text = (x: number, y: number, w: number, h: number, l: string, t: string|undefined|number|TemplateResult, debug=false) => {
  if (typeof t === 'undefined' || t == null) 
    return nothing;

  const svgText = typeof t === 'object' ? t : svg`
    <text x="50%" y="50%" style="font-size: ${initialFontSize}px" ${ref(el => queueMicrotask(() => fit(w, h, el as SVGTextElement)))}>${t}</text>
  `;

  return svg`
    <g aria-label=${l} ?data-debug=${debug} transform=${'translate(' + x + ', ' + y +')'}>
      <svg class="justified" width=${w} height=${h}>
        ${svgText}
        <rect x=0 y=0 width="100%" height="100%"/>
      <svg>
    </g>
`};

const randomInside = (x: number, y: number, w: number, h: number) => [
  x+Math.floor(Math.random() * w), 
  y+Math.floor(Math.random() * h)
];

const teml = (x: number, y: number, rank: Rank, l: string, h=40, debug=false) => {
  const w = 25;

  let num=0;
  switch (rank) {
    case 'T': num = 1; break;
    case 'E': num = 2; break;
    case 'M': num = 3; break;
    case 'L': num = 4; break;
    default: return;
  }

  const boxes: unknown[] = [];
  for (let i=0; i<num; i++) {
    const rx = x + i*30;

    // Clearly the most important part
    let [mx, my] = randomInside(rx, y, w, h);
    let path = 'M ' + mx + ',' + my;
    for (let l=0; l<10; l++) {
      let [cx, cy] = randomInside(rx, y, w, h);
      let [cx1, cy1] = randomInside(rx, y, w, h);
      let [cx2, cy2] = randomInside(rx, y, w, h);

      path += ' C ' + [cx1, cy1, cx2, cy2, cx, cy].join(', ');
    }
    boxes.push(svg`
    <rect x=${rx} y=${y} width=${w} height=${h}/>
    <path d="${path}z"/>
    `);
  }

  return svg`
    <g aria-label=${l} ?data-debug=${debug} class="teml">
      ${boxes}
    </g>
  `;
}

export const nameText = <T extends MinimalLookupTable, I extends T[number]['id']>(x: number, y: number, w: number, h: number, l: string, ids: I[], table: T & HasTableLookup<T>, debug=false) => {
  if (!table || !ids || ids.length === 0) return nothing;
  
  // TODO: row.description for tooltip maybe
  const names = ids
    .map(id => table.byId(id))
    .filter(r => r != null)
    .map(row => svg`<tspan>${row.name}</span>, `);

  const svgText = svg`
    <text x="50%" y="50%" style="font-size: ${initialFontSize}px" ${ref(el => queueMicrotask(() => fit(w, h, el as SVGTextElement)))}>${names}</text>
  `;

  return text(x, y, w, h, l, svgText, debug);
}

const rankToReadable = {
  U: 'Untrained',
  T: 'Trained',
  E: 'Expert',
  M: 'Master',
  L: 'Legendary'
} as const;

@customElement('pf-sheet')
export class PFSheet extends LitElement {
  #sheet!: CalculatedSheet;

  render() {
    this.#sheet = calculateSheet();

    return this.renderFirstPage();
  }

  renderFirstPage() {
    const s = this.#sheet;

    const scribbles: unknown[] = [
      text(520,  113, 600, 95, 'Character Name', currentName()),

      text(1227, 81,  650, 45, 'Ancestry and Heritage', currentAncestry()?.name + ' / ' + currentHeritage()?.name),
      text(1227, 148, 650, 45, 'Background', currentBackground()?.name),
      text(1227, 215, 650, 45, 'Class', currentClass()?.name),

      text(1227, 284, 100, 25, 'Size', 'Medium'),
      text(1340, 284, 160, 25, 'Alignment', 'Lawful Stupid'),
      
      text(1910, 120, 160, 85, 'Level', currentLevel())      
    ];

    const scoreToModifier = (score: number) => Math.floor((score-10)/2);

    const abilityHeight = 99; // as in total height including gap
    abilityNames.forEach((ability, index) => {
      const score = s.abilities[ability].value;
      const modifier = scoreToModifier(score);
      const y = index * abilityHeight + 430;
      scribbles.push(
        text(80, y, 100, 80, ability + ' Modifier', '+'+modifier),
        text(588, y, 100, 80, ability + ' Score', score),
      );
    });

    const availableProficiencies = s.proficiencies.list();

    const proficiencyHelper = (prof: string) => {
      const metadata = availableProficiencies.find(md => md.name === prof);
      if (!metadata) throw new Error(`Skill/Save ${prof} is unregistered registered`);
      const rank = s.proficiencies.adjustableRankOf(prof).value;

      const ability = metadata.ability;
      if (!ability) throw new Error(`Skill/Save ${prof} has no registered ability`);

      const abilityScore = s.abilities[ability].value;
      const abilityModifier = scoreToModifier(abilityScore);
      let proficiencyModifier = 0;

      if (rank !== 'U') {
        const levelModifier = currentLevel();
        const rankModifier = rankToValue(rank);
        proficiencyModifier = levelModifier + rankModifier;
      }
      const totalModifier = abilityModifier + proficiencyModifier;

      return { metadata, rank, ability, abilityScore, abilityModifier, proficiencyModifier, totalModifier};
    }
    
    const skillHeight = 78; // including gap and heading
    ['acrobatics', 'arcana', 'athletics', 'crafting',
     'deception', 'diplomacy', 'intimidation',
     'lore:1', 'lore:2', 'medicine', 'nature',
     'occultism', 'performance', 'religion', 'society',
     'stealth', 'survival', 'thievery'].forEach((skill,index) => {
      if (skill.startsWith('lore')) {
        // TODO: Deal with Lore/Knowledge
        return;
      }

      const { rank, ability, abilityModifier, proficiencyModifier, totalModifier} 
        = proficiencyHelper(skill);

      const y = index * skillHeight + 1235;

      scribbles.push(
        text(1580, y, 84, 50, `${ability} Modifier for ${skill} is ${abilityModifier}`, abilityModifier),
      );

      if (proficiencyModifier > 0) {
        scribbles.push(
          text(1675, y, 84, 50, `Proficiency Modifier for ${skill} is ${proficiencyModifier}`, proficiencyModifier),
        );
      }

      if (totalModifier > 0) {
        scribbles.push(
          text(1458, y-5, 80, 50, `Total Modifier for ${skill} is +${totalModifier}`, '+'+totalModifier),
        );
      }

      scribbles.push(
        teml(1770, y+10, rank, `Rank for ${skill} is ${rankToReadable[rank]}`)
      );
    });

    const saveDistance = 286;
    ['fortitude', 'reflex', 'will'].forEach((save,index) => {
      const { rank, ability, abilityModifier, proficiencyModifier, totalModifier} 
        = proficiencyHelper(save);

      // Top left inner corner of Fortitude
      const x = index * saveDistance + 770;
      const y = 800;

      scribbles.push(
        text(x+26, y+110, 84, 50, `${ability} Modifier for ${save} is ${abilityModifier}`, abilityModifier),
      );

      if (proficiencyModifier > 0) {
        scribbles.push(
          text(x+136, y+110, 84, 50, `Proficiency Modifier for ${save} is ${proficiencyModifier}`, proficiencyModifier),
        );
      }

      if (totalModifier > 0) {
        scribbles.push(
          text(x+82, y+14, 84, 50, `Total Modifier for ${save} is +${totalModifier}`, '+'+totalModifier),
        );
      }

      scribbles.push(
        teml(x+126, y+208, rank, `Rank for ${save} is ${rankToReadable[rank]}`)
      );
    });

    ['perception', 'class_dc'].forEach((other, index) => {
      const { rank, ability, abilityModifier, proficiencyModifier, totalModifier} 
        = proficiencyHelper(other);

      // Top left inner corner of KEY/WIS and, separately, position for total modifier
      const [x,y, tx, ty] = ([[310,1088,85,1080],[1706,970,1630,900]])[index];

      scribbles.push(
        text(x, y, 84, 50, `${ability} Modifier for ${other} is ${abilityModifier}`, abilityModifier),
      );

      if (proficiencyModifier > 0) {
        scribbles.push(
          text(x+92, y, 84, 50, `Proficiency Modifier for ${other} is ${proficiencyModifier}`, proficiencyModifier),
        );
      }

      if (totalModifier > 0) {
        scribbles.push(
          text(tx, ty, 95, 52, `Total Modifier for ${other} is +${totalModifier}`, '+'+totalModifier),
        );
      }

      scribbles.push(
        teml(x+180, y+6, rank, `Rank for ${other} is ${rankToReadable[rank]}`)
      );
    });

    const simpleWeaponRank = s.proficiencies.adjustableRankOf('simple_weapons').value;
    const martialWeaponRank = s.proficiencies.adjustableRankOf('martial_weapons').value;
    scribbles.push(
      teml(74, 2695, simpleWeaponRank, `Rank for Simple Weapons is ${rankToReadable[simpleWeaponRank]}`, 25),
      teml(210, 2695, martialWeaponRank, `Rank for Martial Weapons is ${rankToReadable[martialWeaponRank]}`, 25),
    );

    scribbles.push(
      nameText(1150, 2670, 920, 60, 'Languages', [...s.languages.value], languages),
      nameText(1700, 1060, 360, 70, 'Senses', [...s.senses.value], sensetypes),
    );


    scribbles.push(svg`
    <g transform="translate(200, 1600) rotate(8)">
      <svg version="1.0" viewBox="0 0 316.654 300" width="762" height="500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <linearGradient id="a">
            <stop offset="0" stop-color="#f7ec9a"></stop>
            <stop offset="0.1" stop-color="#f6ea8d"></stop>
            <stop offset="0.5" stop-color="#f5e98a"></stop>
            <stop offset="0.8" stop-color="#f8ed9d"></stop>
            <stop offset="1" stop-color="#f5e98a"></stop>
          </linearGradient>
          <linearGradient id="d" x1="461.2" x2="201" y1="363.7" y2="608.1" gradientTransform="matrix(1, 0, 0, 1, 217, -315)" gradientUnits="userSpaceOnUse" xlink:href="#a"></linearGradient>
          <filter id="b">
            <feGaussianBlur stdDeviation="5.5"></feGaussianBlur>
          </filter>
        </defs>
        <path fill="none" d="M30 33h336v314H30z" enable-background="accumulate" opacity=".4" overflow="visible" style="marker:none"></path>
        <g transform="matrix(1, 0, 0, 1, -405.345673, -38.200001)">
          <path d="M 406 43 L 697 42 L 703 326 C 703 326 474 322 397 325 C 404 255 406 43 406 43 Z" enable-background="accumulate" filter="url(#b)" opacity=".4" overflow="visible" style="marker:none"></path>
          <path fill="url(#d)" d="M 402 38 L 707 39 L 705 323 C 705 323 443 329 407 308 C 399 271 402 38 402 38 Z" enable-background="accumulate" overflow="visible" style="marker:none"></path>
        </g>
        <rect width="67.5" height="18.8" x="270" y="290" fill="none" enable-background="accumulate" opacity=".4" overflow="visible" ry="4.3" style="marker:none"></rect>
        <foreignObject x="20" y="20" width="160" height="160">
        ${
          [...s.physicalFeatures.value]
            .map(id => physicalfeatures.byId(id))
            .sort(nameTableSortFn)
            .map(row => html`<pf-text style="color: var(--pen-color)" .text=${row.description}></pf-text>`)
        }
        </foreignObject>
      </svg>
    </g>
    `);


    return html`
      <section class="first page">
        <svg viewBox="0 0 2160 2790" xmlns="http://www.w3.org/2000/svg">
          ${scribbles}
        </svg>
      </section>
    `;
  }

  static get styles() {
    return [
      basicStyles,
      css`
        :host {
          display: flex;
          --pen-color: #002b59;
        }

        .page svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        .page svg.justified text {
          font-family: Mynerve, system-ui;
          stroke: rgba(0,0,0,.2);
          fill: var(--pen-color);
          stroke-width: 0.1;
          dominant-baseline: middle;
          text-anchor: middle;
        }

        .page svg rect {
          fill: transparent;
        }
        .page svg [data-debug] rect {
          fill: rgba(255,0,0,.2);
        }

        .page svg g.teml path {
          stroke-width: 3;
          stroke: var(--pen-color);
        }

        .page {
          aspect-ratio: 216 / 279; // letter
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
          margin: 0;
          padding: 0;
          width: 80%;
          background-color: white;
          width: 80%;
        }

        @media print {
          .page {
            width: 100%;

            -webkit-print-color-adjust: exact !important;   /* Chrome, Safari 6 – 15.3, Edge */
            color-adjust: exact !important;                 /* Firefox 48 – 96 */
            print-color-adjust: exact !important;           /* Firefox 97+, Safari 15.4+ */      
  
            break-before: page;
            break-inside: avoid;
            break-after: page;
          }
        }

        .first.page {
          background-image: url('sheets/PZO2101-CharacterSheet-BW-1.svg') ;
        }
      `
    ];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pf-sheet': PFSheet;
  }
}
