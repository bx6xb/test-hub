import { useDeleteChatMutation, useGetChatId } from '@/shared'
import styled from 'styled-components'

type Props = {
  id: string
  chatName: string
  toggleEditMode(): void
}

export const ChatPreview = ({ chatName, id, toggleEditMode }: Props) => {
  const [deleteChat] = useDeleteChatMutation()

  const { chatId, setChatId } = useGetChatId()

  const deleteChatHandler = () => {
    deleteChat(id)

    if (chatId === id) {
      setChatId('')
    }
  }

  const setSelectedChatIdHandler = () => setChatId(id)

  return (
    <ChatContainer $isSelected={chatId === id}>
      <img src="/chat.svg" alt="chat icon" />

      <ChatName onClick={setSelectedChatIdHandler}>{chatName}</ChatName>

      <img src="/edit.svg" alt="edit chat name" width={18} height={18} onClick={toggleEditMode} />

      <img src="/trash.svg" alt="delete chat" onClick={deleteChatHandler} />
    </ChatContainer>
  )
}

const ChatContainer = styled.div<{ $isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  transition: 0.1s;

  opacity: ${({ $isSelected }) => ($isSelected ? 1 : 0.4)};

  &:hover {
    opacity: 1;
  }

  & > img {
    cursor: pointer;
  }
`
const ChatName = styled.div`
  font-size: 16px;
  font-weight: 500;
  flex: 1;
  cursor: pointer;
`
