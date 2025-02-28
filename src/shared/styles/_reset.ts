import { css } from 'styled-components'

export const reset = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  button {
    all: unset;
    cursor: pointer;
    color: var(--white-color);
  }
`
