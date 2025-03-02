import { useAddChatMutation, useGetChatId } from '@/shared';
import { Search } from './Search';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { AddChat, ChatButtonsContainer } from '../styles';

export const ChatButtons = memo(() => {
  const [addChat] = useAddChatMutation();
  const { setChatId } = useGetChatId();
  const { t } = useTranslation();

  const addChatHandler = async () => {
    try {
      const { data } = await addChat({ name: t('ChatButtons_new_chat_name') });

      if (data) {
        const { id } = data;

        setChatId(id);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ChatButtonsContainer>
      <AddChat onClick={addChatHandler}>
        <img src="/images/add-chat.svg" alt="add chat" />
      </AddChat>

      <Search />
    </ChatButtonsContainer>
  );
});
