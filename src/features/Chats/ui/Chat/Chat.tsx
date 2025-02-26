import styled from 'styled-components'
import { ChatType, useDeleteChatMutation } from '../../api'

type Props = ChatType

export const Chat = ({ name, id }: Props) => {
  const [deleteChat] = useDeleteChatMutation()

  const deleteChatHandler = () => deleteChat(id)

  return (
    <ChatContainer>
      <ChatName>
        <img src="/chat.svg" alt="chat icon" />
        {name}
      </ChatName>

      <img src="/trash.svg" alt="delete chat" onClick={deleteChatHandler} />
    </ChatContainer>
  )
}

const ChatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;

  & > img {
    cursor: pointer;
  }
`
const ChatName = styled.div`
  display: flex;
  gap: 8px;
  align-content: center;
  font-size: 16px;
  font-weight: 500;
`
