import styled from 'styled-components';

export const ChatContainer = styled.div<{ $isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  transition: 0.1s;

  opacity: ${({ $isSelected }) => ($isSelected ? 1 : 0.4)};

  &:hover {
    opacity: 1;
  }

  & > img {
    cursor: pointer;
  }
`;
export const ChatName = styled.div`
  font-size: 16px;
  font-weight: 500;
  flex: 1;
  cursor: pointer;
`;
