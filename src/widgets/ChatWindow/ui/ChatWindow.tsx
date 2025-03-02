import { AIModelSelect, ChatInput, Messages } from '@/features';
import { useGetChatId } from '@/shared';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ChatWelcomeMessage,
  ChatWindowContainer,
  ContentContainer,
  SelectAndInput,
  WelcomeMessage,
} from '../styles';

export const ChatWindow = () => {
  const { chatId } = useGetChatId();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = 'Chat';
  }, []);

  return (
    <ChatWindowContainer>
      <ContentContainer>
        {chatId ? (
          <>
            <Messages />

            <SelectAndInput>
              <AIModelSelect />
              <ChatInput />
            </SelectAndInput>
          </>
        ) : (
          <ChatWelcomeMessage>
            <WelcomeMessage>{t('ChatWindow_welcome_message')}</WelcomeMessage>
          </ChatWelcomeMessage>
        )}
      </ContentContainer>
    </ChatWindowContainer>
  );
};
