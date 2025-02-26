import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'IBM Plex Sans Variable', sans-serif;
    color: white;
    background-color: #0E0C15;
  }

  button {
    all: unset;
    cursor: pointer;
    color: white;
  }

  a {
    text-decoration: none;
  }
`
