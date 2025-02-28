import { useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Position, Props } from './types';

export const Dropdown = ({
  options,
  children,
  getModalState,
  onOptionChange,
  selected,
  ...position
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownModalRef = useRef<HTMLDivElement>(null);

  const toggleIsOpenHandler = () => {
    getModalState && getModalState(!isOpen);
    setIsOpen(!isOpen);
  };

  const onModalBlur = () => {
    if (isOpen) {
      toggleIsOpenHandler();
    }
  };

  const onChildrenClick = () => {
    if (!isOpen) {
      toggleIsOpenHandler();

      setTimeout(() => dropdownModalRef.current && dropdownModalRef.current.focus(), 0);
    }
  };

  return (
    <DropdownContainer>
      <div onMouseDown={onChildrenClick}>{children}</div>

      <DropdownWrapper $isOpen={isOpen} {...position}>
        {isOpen && (
          <DropdownModal ref={dropdownModalRef} onBlur={onModalBlur} tabIndex={-1}>
            {options.map(({ id, label }) => (
              <DropdownOption
                key={id}
                $isSelected={selected === id}
                onClick={() => onOptionChange(id)}
              >
                {label}
              </DropdownOption>
            ))}
          </DropdownModal>
        )}
      </DropdownWrapper>
    </DropdownContainer>
  );
};

// animations
const fadeIn = keyframes`
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
const DropdownContainer = styled.div`
  position: relative;
`;
const DropdownWrapper = styled.div<Position & { $isOpen: boolean }>`
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
const DropdownModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 8px;
  outline: none;
`;
const DropdownOption = styled.div<{ $isSelected: boolean }>`
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
