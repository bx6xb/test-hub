import { AIMessage, AIModelSelect, ChatInput, UserMessage } from '@/features'
import styled from 'styled-components'

export const ChatWindow = () => {
  return (
    <ChatWindowContainer>
      <ContentContainer>
        <Messages>
          <UserMessage messageText="ChatWindow" time="9:30" />
          <AIMessage />
        </Messages>

        <SelectAndInput>
          <AIModelSelect />
          <ChatInput />
        </SelectAndInput>
      </ContentContainer>
    </ChatWindowContainer>
  )
}

const ChatWindowContainer = styled.div`
  background-color: #121825;
  border-radius: 18px;
  flex-grow: 1;
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
const Messages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  overflow-y: auto;
`
const SelectAndInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`
