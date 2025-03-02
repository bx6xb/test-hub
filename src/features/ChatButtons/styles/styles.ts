import styled, { css } from 'styled-components';

// ChatButtons
export const ChatButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
  user-select: none;
`;
export const AddChat = styled.button`
  width: 38px;
  height: 38px;
  border: 1px solid var(--border-color);
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 8px;
`;

// Search
export const SearchContainer = styled.div<{ $isSearching: boolean }>`
  width: 40px;
  height: 40px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  transition: 0.6s;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${({ $isSearching }) =>
    $isSearching &&
    css`
      flex: 1;
    `}
`;
export const SearchButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--border-color);
  font-weight: 600;
`;
export const Input = styled.input`
  all: unset;
  min-width: 0;
  flex: 1;
  margin-right: 11px;
`;
