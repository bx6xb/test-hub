import styled from 'styled-components'

type Props = {
  isArrowUp: boolean
}

export const Arrow = ({ isArrowUp }: Props) => {
  return <ArrowContainer src="/arrow-up.svg" alt="arrow" $isArrowUp={isArrowUp} />
}

const ArrowContainer = styled.img<{ $isArrowUp: boolean }>`
  transition: 0.2s;
  transform: rotate(${({ $isArrowUp }) => ($isArrowUp ? '0deg' : '180deg')});
`
