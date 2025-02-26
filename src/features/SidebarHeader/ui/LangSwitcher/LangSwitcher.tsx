import styled from 'styled-components'

export const LangSwitcher = () => {
  const lang = 'RU'

  return (
    <LangSwitcherContainer>
      <img src="/lang.svg" alt="language" />
      <CurrentLang>{lang}</CurrentLang>
      <img src="/arrow-down.svg" alt="arrow down" />
    </LangSwitcherContainer>
  )
}

const LangSwitcherContainer = styled.div`
  display: flex;
  gap: 6px;
  align-content: center;
`
const CurrentLang = styled.span`
  font-size: 16px;
  font-weight: 600;
`
