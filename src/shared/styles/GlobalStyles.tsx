import { createGlobalStyle } from 'styled-components'
import { fonts } from './_fonts'
import { variables } from './_variables'
import { reset } from './_reset'
import { scrollbar } from './_scrollbar'

export const GlobalStyles = createGlobalStyle`
  ${fonts}
  ${variables}
  ${reset}
  ${scrollbar}
  
  body {
    font-family: 'IBM Plex Sans', sans-serif;
    color: var(--white-color);
    background-color: #0E0C15;
  }  
`
