> 🛠 **Status: Early Development**
>
> This project is currently in development.

# Persona Foundry

A playground for learning about Pathfinder 2e ... and color theory.

## Background

The [OGL](https://en.wikipedia.org/wiki/Open_Game_License) debacle happened and I got a renewed interest in Pathfinder 2e. As someone with 200+ characters on DndBeyond I started looking around for good online character creators. I was happy with a few but wanted to start a fork of one myself, or maybe one from scratch.

Having found a few bugs in [Wanderer's Guide](https://wanderersguide.app/), I though to get it installed locally and submit some patches. Some time later, I was annoyed by how the backend communication was done and found myself staring at the small database dump sitting in the repo. Hardly bigger than the total size of images and ad banners on a typical news website, I decided to start from scratch with the database mapped directly into Typescript constants.

The direct access to all of the information, with the analysis provided by Typescript itself, I found it rather easy to learn the rules of PF2e. The rest is mostly a tale of distractions.

## Getting Persona Foundry up and running

* `yarn install`
* `yarn run dev`
* Direct your browser to http://localhost:5173/

## Why does it look so... uhm... colorful?

In addition to being a place to learn PF2e, this is alo a playground for Typescript magic but more noticeably it is where I attempt to create a fully dynamic theme based on a single starting color. A color which I am currently picking out of the background image being used (randomly selected from a curated set of images found in the database dump). The web design is meant to make it difficult to make a theme. Parts of the UI is typically always lagging behind as generations of the dynamic theme are being replaced.

If your screen is wide enough you should be seeing a color wheel in the top left. Click it for a color picker dialog to show up. Have fun.

## So... about the character sheet?

When deciding on a layout, I figured I would have a look at the official sheets from Paizo. Decided it would be fun to the write on top it, so I turned the sheets into SVG and used them as a background and wrote a silly amount of matching SVG generator code. Clearly it is very important to create individually randomized marks for the T/E/M/L boxes.

## Web frameworks

Other than a little bit of [lit](https://lit.dev), there are no frameworks involved. A couple of tiny libraries for color handling and tooltips account for the remainder of dependencies.

## Code generation

The `package.json` is severly lacking in the `"scripts"` department. Code generation is done manually and the results can be found comitted to the repo (so no tooling necessary to get started).

* `npx peggy --format es src/wsc/wsc-code.pegjs -o src/wsc/wsc-code.js` regenerates the [WSC](https://wanderersguide.app/wsc_docs/#usage) code parser.
* `npx peggy --format es src/wsc/wsc-text.pegjs -o src/wsc/wsc-text.js` regenerates the [WSC](https://wanderersguide.app/wsc_docs/#usage) text parser.
* From the `deno` directory, run `deno run --allow-read --allow-write --allow-env mysqldump-to-typescript.ts` to regenerate the `src/data` directory which contains all converted database tables. The WSC code parser is used here, whereas the WSC text parser is called at runtime.

The parsers are able to handle most, but not all typos and bugs in the database. Any valid code/text should pass fine. Most of the text is rendered properly and a reasonable subset of the code is fully wired up.

---

This website uses trademarks and/or copyrights owned by Paizo Inc., which are used under Paizo's Community Use Policy (<https://paizo.com/communityuse>). We are expressly prohibited from charging you to use or access this content. This website is not published, endorsed, or specifically approved by Paizo Inc. For more information about Paizo Inc. and Paizo products, visit paizo.com.