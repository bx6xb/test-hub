import { LangSwitcher } from './LangSwitcher';
import { memo } from 'react';
import { LogoAndLang } from '../styles';

export const SidebarHeader = memo(() => {
  return (
    <LogoAndLang>
      <img src="/images/logo.svg" alt="logo" width={104} height={30} />

      <LangSwitcher />
    </LogoAndLang>
  );
});
