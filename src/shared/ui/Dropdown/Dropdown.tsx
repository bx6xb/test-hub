import { ReactNode, useState } from 'react'
import styled, { keyframes } from 'styled-components'

type Position = {
  top?: string
  right?: string
  bottom?: string
  left?: string
}

type Props = {
  options: ReactNode[]
  children: ReactNode
  indexOfSelected?: number
  getModalState(isOpen: boolean): void
  onOptionChange?: (index: number) => void
} & Position

export const Dropdown = ({
  options,
  children,
  getModalState,
  onOptionChange,
  indexOfSelected = 0,
  ...position
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const setIsOpenHandler = () => {
    getModalState(!isOpen)
    setIsOpen(!isOpen)
  }

  return (
    <DropdownContainer>
      <div onClick={setIsOpenHandler}>{children}</div>

      <DropdownWrapper $isOpen={isOpen} {...position}>
        {isOpen && (
          <DropdownModal>
            {options.map((option, i) => (
              <DropdownOption
                key={i}
                $isSelected={indexOfSelected === i}
                onClick={() => onOptionChange && onOptionChange(i)}
              >
                {option}
              </DropdownOption>
            ))}
          </DropdownModal>
        )}
      </DropdownWrapper>
    </DropdownContainer>
  )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`
const DropdownContainer = styled.div`
  position: relative;
`
const DropdownWrapper = styled.div<Position & { $isOpen: boolean }>`
  position: absolute;
  top: ${({ top }) => top || 'auto'};
  right: ${({ right }) => right || 'auto'};
  bottom: ${({ bottom }) => bottom || 'auto'};
  left: ${({ left }) => left || 'auto'};
  z-index: 1;

  animation: ${({ $isOpen }) => ($isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
`
const DropdownModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #121825;
  border: 1px solid #313e62;
  border-radius: 8px;
  padding: 8px;
`
const DropdownOption = styled.div<{ $isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 12px;
  transition: 0.2s;
  cursor: pointer;

  ${({ $isSelected }) => $isSelected && 'background-color: #313e62;'}
`
