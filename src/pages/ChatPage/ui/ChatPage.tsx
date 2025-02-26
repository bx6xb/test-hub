import { ChatWindow, Sidebar } from '@/widgets'
import styled from 'styled-components'

export const ChatPage = () => {
  return (
    <ChatPageContainer>
      <Sidebar />
      <ChatWindow />
    </ChatPageContainer>
  )
}

const ChatPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 16px;
  display: flex;
  gap: 16px;
`
