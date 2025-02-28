import { css } from 'styled-components';

export const reset = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: var(--primary-color);
  }

  button {
    all: unset;
    cursor: pointer;
    color: var(--white-color);
  }
`;
