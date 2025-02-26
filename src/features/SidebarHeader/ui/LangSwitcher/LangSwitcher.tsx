import { Arrow, Dropdown } from '@/shared'
import { useState } from 'react'
import styled from 'styled-components'
import { LANGS } from '../../model'

export const LangSwitcher = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [selected, setSelected] = useState('RU')

  const onLangChangeHandler = (id: string) => {
    setSelected(id)
  }

  return (
    <Dropdown
      options={LANGS}
      top="30px"
      getModalState={setIsModalOpen}
      onOptionChange={onLangChangeHandler}
      selected={selected}
    >
      <LangSwitcherContainer>
        <img src="/lang.svg" alt="language" />
        <CurrentLang>{selected}</CurrentLang>
        <Arrow isArrowUp={isModalOpen} />
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
