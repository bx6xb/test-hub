import styled from 'styled-components'
import { useGetChatsQuery } from '../api'
import { Chat } from './Chat'

export const Chats = () => {
  const { data } = useGetChatsQuery({})

  return <ChatsContainer>{data?.data.map(chat => <Chat key={chat.id} {...chat} />)}</ChatsContainer>
}

const ChatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
  margin-bottom: 16px;
  overflow-y: auto;
`
