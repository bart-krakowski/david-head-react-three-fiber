import { createGlobalStyle } from "styled-components";

export const NormalizeStyle = createGlobalStyle`
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  *::selection {
    background: #e2e5ef;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2em;
  }

  table {
    width: 100%;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-size: 1em;
    font-family: monospace;
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ol,
  ul,
  figure,
  p,
  pre {
    margin: 0;
  }

  a {
    text-decoration: none;
    background-color: transparent;
  }

  abbr[title] {
    text-decoration: underline;
    text-decoration: underline dotted;
    border-bottom: none;
  }

  b,
  strong {
    font-weight: 900;
  }

  code,
  kbd,
  samp {
    font-size: 1em;
    font-family: monospace;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    font-style: italic;
    border-style: none;
  }

  svg {
    fill: currentColor;
  }

  iframe {
    border: 0;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    font-size: 100%;
    font-family: inherit;
    line-height: 1.15;
  }

  button {
    padding: 0;
    background-color: transparent;
    border: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: 0;
  }

  legend {
    display: table;
    box-sizing: border-box;
    max-width: 100%;
    padding: 0;
    color: inherit;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    outline-offset: -2px;
    appearance: textfield;
  }

  [type="search"]::-webkit-search-decoration {
    appearance: none;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    appearance: button;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
`;
