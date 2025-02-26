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

    width: 100vw;
    height: 100vh;
    padding: 16px;
    display: flex;
    gap: 16px;
  }

  button {
    cursor: pointer;
    color: white;
  }

  a {
    text-decoration: none;
  }
`
