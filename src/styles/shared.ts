import { css } from 'lit';

export const basicStyles = css`
  :host {
    --shadow: 0 0.5em 1em -0.125em rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.02);
  }

  a {
    color: var(--link-fg);
  }
  a:active {
    color: var(--link-active-fg);
  }
  a:visited {
    color: var(--link-visited-fg);
  }

  input, select {
    appearance: none;   
    -webkit-appearance: none;
    border: none;
    width: auto;
    overflow: visible;
    font: inherit;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    background: var(--field-bg);
    color: var(--field-fg);
  }
  input::placeholder {
    color: var(--field-fg-gray);
    opacity: 0.8;
  }
  button {
    appearance: none;   
    -webkit-appearance: none;
    border: none;
    width: auto;
    overflow: visible;
    font: inherit;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    background: var(--button-bg);
    color: var(--button-fg);
  }

  .select:focus-within, input:focus {
    background-color: var(--named-blue-bg);
  }

  @media print {
    input, select, button, pf-tabs {
      display: none;
    }
  }
`;

// For the current implementation, "card" is a bit of a stretch but it
// should not look like a pill for long.

export const cardStyles = css`
  article.card > header {
    color: var(--accent-fg);
    font-weight: bolder;
  }

  @media screen {
    article.card {
      --card-background: hsla(var(--canvas-bg-hsl), 0.8);
      background: var(--card-background);
      padding: 2rem;
      border-radius: 32px;
      margin-bottom: 1rem;
      box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, 
                  rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
                  rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, 
                  rgba(0, 0, 0, 0.06) 0px 2px 1px, 
                  rgba(0, 0, 0, 0.09) 0px 4px 2px, 
                  rgba(0, 0, 0, 0.09) 0px 8px 4px, 
                  rgba(0, 0, 0, 0.09) 0px 16px 8px, 
                  rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
  }

  article.card {
    display: flex;
    flex-direction: column;
  }
`;