import { useAddChatMutation } from '@/shared'
import styled from 'styled-components'
import { Search } from './Search'

export const ChatButtons = () => {
  const [addChat] = useAddChatMutation()

  const addChatHandler = () => addChat({ name: 'New chat' })

  return (
    <ChatButtonsContainer>
      <AddChat onClick={addChatHandler}>
        <img src="/add-chat.svg" alt="add chat" />
      </AddChat>

      <Search />
    </ChatButtonsContainer>
  )
}

const ChatButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
  user-select: none;
`
const AddChat = styled.button`
  width: 38px;
  height: 38px;
  border: 1px solid var(--border-color);
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 8px;
`
