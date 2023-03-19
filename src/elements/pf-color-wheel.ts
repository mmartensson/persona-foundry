import { LitElement, html, css, svg, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { currentMasterHex, updateMasterColor, rgbColors} from '../styles/dynamic';

@customElement('pf-color-wheel')
export class PFColorWheel extends LitElement {
  render() {
    const handler = (e: InputEvent) => {
      const newHex = (e.target as HTMLInputElement)?.value;
      if (!newHex) return;
  
      updateMasterColor(newHex);
    };

    return html`
        <input id="color-picker" type="color" value=${currentMasterHex()} @input=${handler}>

        <label for="color-picker">
          ${this.renderSvg()}
        </label>
    `;
  }

  renderSvg() {
    const radius = 30;

    const renderArc = (offset: number, desc: string) => {
      const rs = (Math.PI as number) / 180 * (offset-14);
      const re = (Math.PI as number) / 180 * (offset+15);

      const fromX = radius * Math.sin(rs);
      const fromY = -radius * Math.cos(rs);

      const toX = radius * Math.sin(re);
      const toY = -radius * Math.cos(re);

      return svg`
        <path id="arc-${offset}" d="M ${fromX.toFixed(3)},${fromY.toFixed(3)} A ${radius},${radius} 0,0,1 ${toX.toFixed(3)},${toY.toFixed(3)}">
            <title>${desc}</title>
        </path>
      `;
    }

    const renderDot = (offset: number) => {
      const r = (Math.PI as number) / 180 * offset;
      const cx = radius * Math.sin(r);
      const cy = -radius * Math.cos(r);

      return svg`
      <circle id="dot-${offset}" cx=${cx} cy=${cy} r="2">
      `;
    }

    const renderRect = (name: string, index: number, total: number) => {
      const width = 200/total;
      const height = 20;
      const x = index*width;
      const y = 190;

      return svg`
      <rect id="rect-${name}" x=${x} y=${y} width=${width} height=${height}>
        <title>${name[0].toUpperCase()}${name.substring(1)}</title>
      </rect>
      `;
    }

    const renderStyles = (offset: number) => unsafeCSS(`
      #arc-${offset} { stroke: var(--wheel-${offset}-arc) }
      #dot-${offset} { fill: var(--wheel-${offset}-dot)   } 
    `);
    const renderNamedColorStyles = (name: string) => unsafeCSS(`
      #rect-${name}  { fill: var(--named-${name}-bg)    }
    `);

    const tuples = [
      [  0,  'Base'             ],
      [  30, 'Analogous'        ],
      [  60, 'Analogous'        ],
      [  90, 'Triadic'          ],
      [ 120, 'Triadic'          ],
      [ 150, 'Split Complement' ],
      [ 180, 'Complement'       ],
      [ 210, 'Split Complement' ],
      [ 240, 'Triadic'          ],
      [ 270, 'Tetradic'         ],
      [ 300, 'Analogous'        ],
      [ 330, 'Analogous'        ],
    ] as const;

    return svg`
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="-10 -10 220 220">
        <style>
          ${tuples.map(([offset,_]) => renderStyles(offset))}
          ${rgbColors.map(name => renderNamedColorStyles(name))}
        </style>

        <g fill="none" stroke-width="${radius * 2}" transform="translate(100,100) rotate(180) scale(1.5)">
          ${tuples.map(([offset,desc]) => renderArc(offset,desc))}
          ${tuples.map(([offset,_]) => renderDot(offset))}
        </g>
        <g>
          ${rgbColors.map((name,index) => renderRect(name, index, rgbColors.length))}
        </g>
      </svg>
    `;
  }

  static styles = [css`
    label {
      display: flex;
      position: relative;
      top: 0px;
      left: 0px;
      height: 160px;
      width: 160px;
    }
    input {
      position: relative;
      top: 160px;
      left: 0;
      height: 1px;
      width: 1px;
      opacity: 0;
    }
  `];
}
   
declare global {
  interface HTMLElementRarityNameMap {
    'pf-color-wheel': PFColorWheel
  }
}