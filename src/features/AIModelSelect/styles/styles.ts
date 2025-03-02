import styled, { css } from 'styled-components';

export const Select = styled.div<{ $disabled: boolean }>`
  min-width: 147px;
  height: 40px;
  padding: 10px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  cursor: pointer;
  user-select: none;

  ${({ $disabled }) =>
    $disabled &&
    css`
      pointer-events: none;
      filter: brightness(0.7);
    `}
`;
export const Model = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 500;
`;
