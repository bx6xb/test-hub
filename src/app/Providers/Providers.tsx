import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { I18nextProvider } from 'react-i18next';
import { GlobalStyles, i18n } from '@/shared';
import { BrowserRouter } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          {children}
          <GlobalStyles />
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  );
};
