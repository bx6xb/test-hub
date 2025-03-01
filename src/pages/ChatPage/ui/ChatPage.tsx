import { ChatWindow, Sidebar } from '@/widgets';
import styled from 'styled-components';

export const ChatPage = () => {
  return (
    <ChatPageContainer>
      <ContentContainer>
        <Sidebar />
        <ChatWindow />
      </ContentContainer>
    </ChatPageContainer>
  );
};

const ChatPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 16px;
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 16px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    gap: 0;
  }
`;
