import { ChatWindow, Sidebar } from '@/widgets';
import { ChatPageContainer, ContentContainer } from '../styles';

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
