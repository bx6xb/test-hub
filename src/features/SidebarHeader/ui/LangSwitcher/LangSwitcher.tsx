import { Arrow, Dropdown } from '@/shared';
import { useEffect, useState } from 'react';
import { LANGS } from '../../model';
import { useTranslation } from 'react-i18next';
import { CurrentLang, LangSwitcherContainer } from '../../styles';

export const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(selectedLang);
  }, [selectedLang]);

  const onLangChangeHandler = (id: string) => {
    setSelectedLang(id);
  };

  return (
    <Dropdown
      options={LANGS}
      top="30px"
      getModalState={setIsModalOpen}
      onOptionChange={onLangChangeHandler}
      selected={selectedLang}
    >
      <LangSwitcherContainer>
        <img src="/images/lang.svg" alt="language" />
        <CurrentLang>{selectedLang.toUpperCase()}</CurrentLang>
        <Arrow isArrowUp={isModalOpen} />
      </LangSwitcherContainer>
    </Dropdown>
  );
};
