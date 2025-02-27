import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-display: swap;
    font-weight: 400 500 600;
    src: url(@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-wght-normal.woff2) format('woff2-variations');
    unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
  }

  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-display: swap;
    font-weight: 400 500 600;
    src: url(@fontsource/ibm-plex-sans/files/ibm-plex-sans-cyrillic-wght-normal.woff2) format('woff2-variations');
    unicode-range: U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;
  }

  :root {
    --primary-color: #1C64F2;
    --secondary-color: #121825;
    --accent-bg: #222b44;
    --border-color: #313E62;
    --white-color: #fff;
    --input-placeholder-color: #616d8d;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'IBM Plex Sans', sans-serif;
    color: var(--white-color);
    background-color: #0E0C15;
  }

  button {
    all: unset;
    cursor: pointer;
    color: var(--white-color);
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 8px; 
  }

  ::-webkit-scrollbar-track {
    background: rgba(from var(--white-color) r g b / .5); 
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #2D4F92; 
    border-radius: 4px; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #357abd;
  }
`
