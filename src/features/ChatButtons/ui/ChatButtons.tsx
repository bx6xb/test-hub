import { useAddChatMutation, useGetChatId } from '@/shared';
import styled from 'styled-components';
import { Search } from './Search';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

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

const ChatButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
  user-select: none;
`;
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
`;
