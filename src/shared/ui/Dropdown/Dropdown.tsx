import { useRef, useState } from 'react';
import { Props } from './types';
import { DropdownContainer, DropdownModal, DropdownOption, DropdownWrapper } from './styles';

export const Dropdown = ({
  options,
  children,
  selected,
  disabled,
  getModalState,
  onOptionChange,
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
    <DropdownContainer $disabled={disabled}>
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
