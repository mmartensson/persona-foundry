import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { extractColors } from 'extract-colors'

import Color from 'color';
import themeCss from './theme.css?inline';

const themeSheet = new CSSStyleSheet();
themeSheet.replaceSync(themeCss);

const dynamicSheet = new CSSStyleSheet();

// Reasonable base colors:

// * Blue:
//    Dark
//  - #171a21 "Eerie Black" hsl(222deg,18%,11%)
//  = #192229 "Dark Gunmetal" hsl(206deg,24%,13%)
//    Light
//  - #93b9ec "Jordy Blue" hsl(214deg,70%,75%)
//  - #b5c7d3 "Baby Blue (Pantone)" hsl(205deg,25%,77%)
//  = #e1e3de "Mystic Blue (Pantone)" hsl(84deg,8%,88%)

// * Green-ish:
//    Dark
//  - #101918 "Chinese Black" hsl(173deg,22%,8%)
//  = #19454b "Deep Teal (Pantone)" hsl(187deg,50%,20%)
//    Light
//  - bfe6c8 "Tea Green" hsl(134deg,44%,83%)

// * Purple/Pink-ish:
//    Dark
//  = #363031 "Espresso (Pantone)" hsl(350deg,6%,20%)
//    Light
//  = #afa4ce "Lavender (Pantone)" hsl(256deg,30%,73%)

// * Yellow/Brown-ish:
//    Dark
//  = #5f4e2e "Van Dyke Brown" hsl(39deg,35%,28%)
//    Light
//  = #edc273 "Cornsilk (Pantone)" hsl(39deg,77%,69%)

//let currentMasterColor = new Color("hsl(206deg,24%,13%)");
//let currentMasterColor = new Color("hsl(256deg,30%,73%)"); // hue becomes 257... rounding errors?
let currentMasterColor = new Color("#192229");
let backgroundImage: string;

export const updateMasterColor = (color: Color | string) => {
  if (typeof color === 'string') {
    try {
        currentMasterColor = new Color(color);
    } catch (error) {
        console.log('Failed parsing color', color);
        return;
    }
  } else {
    currentMasterColor = color;
  }
  updateDynamicCssVariables();

  themeSheet.replaceSync(`
  :root {
    --main-bg-image: url(${backgroundImage});
    --main-bg-color: ${currentMasterHex() + 'b0'};
  }
  `+themeCss);
}

export const currentMasterHex = () => currentMasterColor.hex();

export const updateBackgroundImage = (imageUrl: string) => {
  backgroundImage = imageUrl;
  extractColors(imageUrl, { distance: 1, crossOrigin: 'anonymous' }).then(list => {
    updateMasterColor(list[0].hex);
  }).catch(console.error);
}

// NOTE: Art class color wheel is based around R/Y/B primaries, but we are
// software developers and not painters, so R/G/B are our primary colors.
// Mix two primaries and get a secondary. Mix a primary and a secondary and
// get a tertiary color.

// Hue increments of thirty, each color getting offset-14 to offset+15
export const rgbColors = [
  'red',            // P
  'orange',         // T
  'yellow',         // S
  'chartreuse',     // T
  'green',          // P
  'aquamarine',     // T
  'cyan',           // S
  'azure',          // T
  'blue',           // P
  'violet',         // T
  'magenta',        // S
  'rose',           // T
];

// Other terminology (HSL):
// Tint   +L (more white)
// Shade  -L (more black)
// Tone   -S (more gray)

// Naive implementation of finding a 30° increment inspired by the given color,
// keeping lightness and saturation and adjusting by the same distance that the
// provided color is from its own closest 30° increments.
const findCloseMatch = (color: Color, offset: number) => {
  const [h, s, l] = color.hsl().array();
  let ah =  + h%30;
  if (ah > 15) ah = 15-ah;
  return new Color({h: ah + offset, s, l});
}

const white = new Color('white');
const black = new Color('black');

// FIXME: Better name (and possibly return values); answers 
// "if this was a background, what would be a good text color (black or white)"
type Recommendation = 'use-black' | 'use-white' | 'use-caution';
const recommendations = (color: Color): Recommendation => {
  const vsW = color.contrast(white);
  const vsB = color.contrast(black);
  
  if (vsW < 4.5 && vsB < 4.5)
    return 'use-caution';

  return vsW > vsB ? 'use-white' : 'use-black';
}

const updateDynamicCssVariables = () => {
  const [mh, ms, ml] = currentMasterColor.hsl().array();

  const targetContrast = 4.5;

  // Ratio is basically the progress towards valid contrast.
  // A ratio of .2 means we are 20% there; so we will take 80%
  // of the distance between current and target, multiplying by 
  // 1.2 because math, and adding that to the current. Checking
  // if we've reached the target - give or take a % - in which
  // case we flag that we've given up.
  const adjustPercentTowardsTarget = (ratio: number, current: number, target: number): [number, boolean] => {
    if (current === target)
      return [target, true];
    
    if (current < target) {
      // Moving in the direction of 100
      const updated = (1-ratio) * 1.2 * (target-current) + current;
      // console.log('-- adjust >', ratio, current, target, updated, '|', updated >= target);
      return updated >= target-1 ? [target, true] : [updated, false];
    } else {
      // Moving in the direction of 0
      const updated = current - (1-ratio) * 1.2 * (current-target);
      // console.log('adjust <', ratio, current, target, updated, '|', updated <= target);
      return updated <= target+1 ? [target, true] : [updated, false];
    }
  }

  const adjustSaturationLightnessTowardsOkContrast = (reference: Color, adjustable: Color, targetS: number, targetL: number) => {
    let [h, s, l] = adjustable.hsl().array();

    // console.log('Adjusting', reference.string(3), adjustable.string(3), targetS, targetL);

    let adjusted = adjustable;

    let contrast: number;
    let [atTargetS, atTargetL] = [false, false];
    let attempts = 1;
    while (++attempts<10 && (contrast = reference.contrast(adjusted)) < targetContrast) {
      // Target saturation of lightness reached, but still not enough contrast 
      if (atTargetS && atTargetL)
        return adjusted;

      // Shooting for just a little higher than necessary contrast
      const ratio = contrast / targetContrast;

      [s, atTargetS] = adjustPercentTowardsTarget(ratio, s, targetS);
      [l, atTargetL] = adjustPercentTowardsTarget(ratio, l, targetL);

      adjusted = new Color({h,s,l});

      // console.log('Adjusted', attempts, ratio.toFixed(2), adjusted.string(2), s.toFixed(2), targetS.toFixed(2), atTargetS, l.toFixed(2), targetL.toFixed(2), atTargetL);
    }

    return adjusted;
  }

  const rules: string[] = [];

  const adjustedIdealFgByBg = (bg: Color, fgRotationAlternatives: number[], targetS: number, targetL: number) => {
    let [bh] = bg.hsl().array();

    const fgRotationData = fgRotationAlternatives.map(fgRotation => {
      const color = new Color({h: (bh + fgRotation), s: ms, l: ml});
      const contrast = bg.contrast(color);

      return { contrast, color };
    });

    // Declare winner by highest contrast
    const winner = fgRotationData.sort((a,b) => b.contrast-a.contrast)[0].color;

    // console.log(`For background with hue ${bh}, declared winner ${winner.string(3)}`, fgRotationData);

    // Adjust winner further to ensure good contrast with background
    return adjustSaturationLightnessTowardsOkContrast(bg, winner, targetS, targetL);
  }

  const adjustedColorPair = (bgRotation: number, fgRotationAlternatives: number[], targetAbsoluteS: number, targetMarginL: number) => {
    let bg = new Color({h: (mh + bgRotation) % 360, s: ms, l: ml});
    const bgIsDark = recommendations(bg) === 'use-white';
    // console.log(`Our background ${bg.string(2)} is considered ${bgIsDark?'dark':'light'}`); 
    const targetAbsoluteL = bgIsDark ? 100 - targetMarginL : targetMarginL;

    let fg = adjustedIdealFgByBg(bg, fgRotationAlternatives, targetAbsoluteS, targetAbsoluteL);     

    for (let attempt=0; attempt<10; attempt++) {
      const contrast = bg.contrast(fg);

      if (contrast >= targetContrast) {
        return [bg,fg];
      }
  
      // Adjusting background lightness by 5% each attempt
      let al: number;
      if (bgIsDark) {
        al = Math.max(0, ml - attempt * 5);
      } else {
        al = Math.min(100, ml + attempt * 5);
      }
      bg = new Color({h: (mh + bgRotation) % 360, s: ms, l: al});
      fg = adjustSaturationLightnessTowardsOkContrast(bg, fg, targetAbsoluteS, targetAbsoluteL);
    }
    throw Error('This should be black vs white at this point; no way the contrast is not enough');
  }

  // How many degrees of rotation relative to master hue should be used for canvas per level?
  const canvasBgRotationOrder = [
    0,          // Master color (possibly a tint/shade)
    30,         // Analogous with master
    180,        // Complement to master
    300,        // Analogous-ish with master
    330         // Analogous with master
  ];
  
  // Five levels means we can easily base selectors on the rightmost number
  for (let level=0; level<5; level++) {
    const canvasBgRotation = canvasBgRotationOrder[level];

    const [canvasBg, canvasFg] = adjustedColorPair(canvasBgRotation, [180], 50, 20);
    const canvasIsDark = recommendations(canvasBg) === 'use-white';

    if (canvasBg.contrast(canvasFg) < targetContrast) {
      // console.error('Should not be seeing low contrast at this point', canvasBg.contrast(canvasFg).toFixed(2));
    }

    // Currently not constrast checking these
    const canvasBgGray = canvasBg.desaturate(0.9);
    const canvasFgGray = canvasFg.desaturate(0.9);

    const canvasBgExtreme = canvasIsDark ? black : white;
    const canvasFgExtreme = canvasIsDark ? white : black;

    // The idea is that accent fg/bg should work together, but also with canvas bg/fg respectively
    const accentBgRotation = canvasBgRotation - 90;
    const [accentBg, accentFg] = adjustedColorPair(accentBgRotation, [180], 100, 20);
    const adjustedAccentBg = adjustSaturationLightnessTowardsOkContrast(canvasBg, accentBg, 100, 20);
    const adjustedAccentFg = adjustSaturationLightnessTowardsOkContrast(canvasBg, accentFg, 100, 20);

    const buttonBgRotation = canvasBgRotation - 30;
    const [buttonBg, buttonFg] = adjustedColorPair(buttonBgRotation, [180-60, 180+60], 30, 25);
    const buttonBorder = recommendations(buttonBg) === 'use-white' ? buttonBg.lighten(0.1) : buttonBg.darken(0.1);

    const fieldBgRotation = canvasBgRotation + 30;
    const [fieldBg, fieldFg] = adjustedColorPair(fieldBgRotation, [180-30, 180+30], 40, 15);
    const fieldFgGray = fieldFg.desaturate(0.9);

    const linkFg = adjustSaturationLightnessTowardsOkContrast(canvasBg, canvasBg.lighten(0.3), 60, 90);
    const linkActiveFg = adjustedIdealFgByBg(canvasBg, [-30,30], 80, 90);
    const linkVisitedFg = adjustedIdealFgByBg(canvasBg, [-30,30], 40, 85);

    const vars: [string,Color][] = [
      ['canvas-bg', canvasBg],
      ['canvas-bg-gray', canvasBgGray],
      ['canvas-bg-extreme', canvasBgExtreme],
      ['canvas-fg', canvasFg],
      ['canvas-fg-gray',canvasFgGray],
      ['canvas-fg-extreme', canvasFgExtreme],

      ['accent-bg', adjustedAccentBg],
      ['accent-fg', adjustedAccentFg],

      ['button-bg', buttonBg],
      ['button-fg', buttonFg],
      ['button-border', buttonBorder],

      ['field-bg', fieldBg],
      ['field-fg', fieldFg],
      ['field-fg-gray',fieldFgGray],

      ['link-fg', linkFg],
      ['link-active-fg', linkActiveFg],
      ['link-visited-fg', linkVisitedFg],
    ];

    rgbColors.forEach((name, rotate30) => {
      const bg = findCloseMatch(canvasBg, rotate30 * 30);
      const bgAdjusted = adjustSaturationLightnessTowardsOkContrast(canvasFgExtreme, bg, 100, 10);
      const fg = findCloseMatch(canvasFg, rotate30 * 30);
      const fgAdjusted = adjustSaturationLightnessTowardsOkContrast(canvasBgExtreme, fg, 100, 10);
      vars.push(
        [`named-${name}-bg`, bgAdjusted],
        [`named-${name}-fg`, fgAdjusted],
      );
    });

    const varCss = vars.map(([v,c]) => {
      const str = c.string(3);
      return `
      --${v}: ${str};
      --${v}-hsl: ${str.slice(4,-1)};
    `}).join('\n');

    rules.push(
      `[level$="${level}"], [level$="${level+5}"] {
        color-scheme:     ${canvasIsDark ? 'dark' : 'light'};
        ${varCss}
      }
      `);
      
      // For accent-fg/accent-bg determine if those are to be paired with eachother 
      // or the canvas. For selected-item, highlight, mark, button, and field the answer
      // is that their fg/bg are paired with eachother without considering the canvas.
  }

  // FIXME: Now that I'm going with even 30's, we only need to name the
  //        last two between analogous and tetradic... and then find out
  //        which of the "triadic-a" style names best match "red" style
  //        names. Also naming the code.
  
  // For the pf-color-wheel
  const wheelVars: string[] = [];
  for (let offset=0; offset < 360; offset += 30) {
    const color = new Color({h: (mh + offset) % 360, s: ms, l: ml});
    const dot = (recommendations(color) === 'use-white') ? 'white' : 'black';
    wheelVars.push(`
      --wheel-${offset}-arc: ${color.hex()};
      --wheel-${offset}-dot: ${dot};
    `);
  }

  const dynamicCss = ':root {\n  ' + wheelVars.join('\n  ') + '\n}\n' + rules.join("\n");
  dynamicSheet.replaceSync(dynamicCss);
  // console.log(dynamicCss);

  // Set our master color as the offical theme-color, possibly making
  // som phone style their browser chrome accordingly.
  const meta = document.querySelector('meta[name="theme-color"]')
  meta?.setAttribute('content', currentMasterColor.hex());
}
updateDynamicCssVariables();

document.adoptedStyleSheets = [...document.adoptedStyleSheets, themeSheet, dynamicSheet];

export class DynamicLitElement extends LitElement {
  @property({attribute: 'level', type: Number}) colorHierachyLevel: number = 0;

  connectedCallback() {
    super.connectedCallback();

    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [
        ...this.shadowRoot.adoptedStyleSheets, dynamicSheet
      ];
    }
  }
}