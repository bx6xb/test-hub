import styled from 'styled-components';

export const ArrowContainer = styled.img<{ $isArrowUp: boolean }>`
  transition: 0.2s;
  transform: rotate(${({ $isArrowUp }) => ($isArrowUp ? '0deg' : '180deg')});
`;
