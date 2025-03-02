import styled, { css, keyframes } from 'styled-components';
import { Position } from './types';

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

// styles
export const DropdownContainer = styled.div`
  position: relative;
`;
export const DropdownWrapper = styled.div<Position & { $isOpen: boolean }>`
  position: absolute;
  top: ${({ top }) => top || 'auto'};
  right: ${({ right }) => right || 'auto'};
  bottom: ${({ bottom }) => bottom || 'auto'};
  left: ${({ left }) => left || 'auto'};
  z-index: 1;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      animation: ${fadeIn} 0.3s ease-in-out;
    `}
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
`;
export const DropdownModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 8px;
  outline: none;
`;
export const DropdownOption = styled.div<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 12px;
  transition: 0.2s;
  cursor: pointer;

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      background-color: var(--border-color);
    `}
`;
