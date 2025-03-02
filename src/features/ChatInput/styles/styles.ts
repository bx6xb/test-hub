import styled, { css } from 'styled-components';

// ChatButtons
export const ChatInputContainer = styled.form<{ $isFormDisabled: boolean }>`
  width: 100%;
  position: relative;

  ${({ $isFormDisabled }) =>
    $isFormDisabled &&
    css`
      pointer-events: none;
      filter: brightness(0.6);
    `}
`;
export const Input = styled.input`
  width: 100%;
  height: 66px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  background-color: transparent;
  padding: 0 70px 0 20px;
  color: var(--white-color);

  &::placeholder {
    color: var(--input-placeholder-color);
  }
`;
export const SendMessage = styled.button`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  border-radius: 8px;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;
