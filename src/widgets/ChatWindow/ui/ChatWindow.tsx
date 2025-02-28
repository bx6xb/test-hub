import { AIModelSelect, ChatInput, Messages } from '@/features'
import { useGetChatId } from '@/shared'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

export const ChatWindow = () => {
  const { chatId } = useGetChatId()

  const { t } = useTranslation()

  useEffect(() => {
    document.title = 'Chat'
  }, [chatId])

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
  )
}

const ChatWindowContainer = styled.div`
  background-color: var(--secondary-color);
  border-radius: 18px;
  flex: 1;
  padding: 20px;
`
const ContentContainer = styled.div`
  max-width: 1250px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const SelectAndInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`
const ChatWelcomeMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const WelcomeMessage = styled.h3`
  text-align: center;
`
