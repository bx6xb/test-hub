import { Dropdown } from '@/shared'
import { useState } from 'react'
import styled from 'styled-components'

export const LangSwitcher = () => {
  const langs = ['RU', 'EN']

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [langIndex, setLangIndex] = useState(0)

  const onLangChangeHandler = (index: number) => {
    setLangIndex(index)
  }

  return (
    <Dropdown
      options={langs}
      top="30px"
      getModalState={setIsModalOpen}
      onOptionChange={onLangChangeHandler}
      indexOfSelected={langIndex}
    >
      <LangSwitcherContainer>
        <img src="/lang.svg" alt="language" />
        <CurrentLang>{langs[langIndex]}</CurrentLang>
        <Arrow src="/arrow-up.svg" alt="arrow" $isModalOpen={isModalOpen} />
      </LangSwitcherContainer>
    </Dropdown>
  )
}

const LangSwitcherContainer = styled.div`
  display: flex;
  gap: 6px;
  align-content: center;
  cursor: pointer;
  user-select: none;
`
const CurrentLang = styled.span`
  font-size: 16px;
  font-weight: 600;
`
const Arrow = styled.img<{ $isModalOpen: boolean }>`
  transition: 0.2s;
  transform: rotate(${({ $isModalOpen }) => ($isModalOpen ? '0deg' : '180deg')});
`
