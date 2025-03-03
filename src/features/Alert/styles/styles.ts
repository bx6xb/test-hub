import styled, { keyframes } from 'styled-components';

// Alert
export const AlertContainer = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 20px;
  z-index: 3;
`;

// AlertMessage

// animations
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
    max-height: 100px;
    margin-bottom: 10px;
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
    max-height: 0;
    margin-bottom: 0;
  }
`;

// styles
export const AlertMessageContainer = styled.div<{ $isError: boolean; $isVisible: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  min-height: 40px;
  padding: 20px 30px;
  border-radius: 40px;
  background-color: var(--secondary-color);
  border: 2px solid var(--primary-color);

  opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};
  margin-bottom: ${({ $isVisible }) => ($isVisible ? '10px' : '0')};

  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : fadeOut)} 0.4s ease-out;
  transition:
    max-height 0.4s ease-out,
    opacity 0.4s ease-out,
    margin-bottom 0.4s ease-out;
`;
export const Message = styled.span`
  flex: 1;
`;
export const Close = styled.button`
  font-weight: 600;
`;
