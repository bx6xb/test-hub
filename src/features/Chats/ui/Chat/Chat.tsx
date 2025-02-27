import styled from 'styled-components'
import { ChatType, useDeleteChatMutation } from '../../api'
import { useAppDispatch, useAppSelector } from '@/shared'
import { setSelectedChatId } from '@/entities'

type Props = ChatType

export const Chat = ({ name, id }: Props) => {
  const selectedChatId = useAppSelector(state => state.appSlice.selectedChatId)
  const dispatch = useAppDispatch()

  const [deleteChat] = useDeleteChatMutation()

  const deleteChatHandler = () => deleteChat(id)

  const setSelectedChatIdHandler = () => dispatch(setSelectedChatId(id))

  return (
    <ChatContainer $isSelected={selectedChatId === id}>
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
