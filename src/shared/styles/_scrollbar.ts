import { css } from 'styled-components'

export const scrollbar = css`
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(from var(--white-color) r g b / 0.5);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #2d4f92;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #357abd;
  }
`
