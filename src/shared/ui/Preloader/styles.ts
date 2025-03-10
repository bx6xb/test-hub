import styled, { css, keyframes } from 'styled-components';

// animations
const bounce = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// styles
export const PreloaderContainer = styled.div<{ $isHidden: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  opacity: 1;
  transition: opacity 1s linear;

  ${({ $isHidden }) =>
    $isHidden &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
`;
export const Image = styled.img`
  width: 50px;
  height: 50px;
  animation: ${bounce} 1.5s ease-in-out infinite;
`;
