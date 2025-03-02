import styled from 'styled-components';

export const ChatWindowContainer = styled.div`
  background-color: var(--secondary-color);
  border-radius: 18px;
  flex: 1;
  padding: 20px;
`;
export const ContentContainer = styled.div`
  max-width: 1250px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const SelectAndInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;
export const ChatWelcomeMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WelcomeMessage = styled.h3`
  text-align: center;
`;
