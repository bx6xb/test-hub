import '@fontsource/ibm-plex-sans';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import { Providers } from './app';

createRoot(document.getElementById('root')!).render(
  <Providers>
    <App />
  </Providers>
);
