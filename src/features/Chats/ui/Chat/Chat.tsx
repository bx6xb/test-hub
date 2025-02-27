import styled from 'styled-components'
import { ChatType, useDeleteChatMutation } from '../../api'
import { useGetChatId } from '@/shared'

type Props = ChatType

export const Chat = ({ name, id }: Props) => {
  const { chatId, setChatId } = useGetChatId()

  const [deleteChat] = useDeleteChatMutation()

  const deleteChatHandler = () => deleteChat(id)

  const setSelectedChatIdHandler = () => setChatId(id)

  return (
    <ChatContainer $isSelected={chatId === id}>
      <ChatName onClick={setSelectedChatIdHandler}>
        <img src="/chat.svg" alt="chat icon" />
        {name}
      </ChatName>

      <img src="/trash.svg" alt="delete chat" onClick={deleteChatHandler} />
    </ChatContainer>
  )
}

const ChatContainer = styled.div<{ $isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-content: center;
  gap: 20px;

  opacity: ${({ $isSelected }) => ($isSelected ? 1 : 0.4)};

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
  flex: 1;
  cursor: pointer;
`
