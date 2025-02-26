import '@fontsource/ibm-plex-sans'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import { GlobalStyles } from './shared'
import { Providers } from './app/Providers'

createRoot(document.getElementById('root')!).render(
  <Providers>
    <App />
    <GlobalStyles />
  </Providers>
)
