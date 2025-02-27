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

  ::-webkit-scrollbar {
    width: 8px; 
  }

  ::-webkit-scrollbar-track {
    background: rgba(from white r g b / .5); 
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
