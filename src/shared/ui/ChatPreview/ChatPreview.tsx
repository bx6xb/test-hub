import { useDeleteChatMutation, useGetChatId } from '@/shared';
import { ChatContainer, ChatName } from './styles';

type Props = {
  id: string;
  chatName: string;
  toggleEditMode(): void;
};

export const ChatPreview = ({ chatName, id, toggleEditMode }: Props) => {
  const [deleteChat] = useDeleteChatMutation();
  const { chatId, setChatId } = useGetChatId();

  const deleteChatHandler = () => {
    deleteChat(id);

    if (chatId === id) {
      setChatId('');
    }
  };

  const setSelectedChatIdHandler = () => setChatId(id);

  return (
    <ChatContainer $isSelected={chatId === id}>
      <img src="/images/chat.svg" alt="chat icon" />

      <ChatName onClick={setSelectedChatIdHandler}>{chatName}</ChatName>

      <img
        src="/images/edit.svg"
        alt="edit chat name"
        width={18}
        height={18}
        onClick={toggleEditMode}
      />

      <img src="/images/trash.svg" alt="delete chat" onClick={deleteChatHandler} />
    </ChatContainer>
  );
};
