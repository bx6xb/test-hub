import styled from 'styled-components';
import { Chat } from './Chat';
import { Loader, useAppSelector, useFetchChatsQuery } from '@/shared';

export const Chats = () => {
  const searchTerm = useAppSelector(state => state.appSlice.searchTerm);

  const { data, isLoading } = useFetchChatsQuery({});

  const filteredChats =
    data?.data.filter(chat => new RegExp(searchTerm, 'i').test(chat.name)) || [];

  return (
    <ChatsContainer>
      {isLoading ? <Loader /> : filteredChats.map(chat => <Chat key={chat.id} {...chat} />)}
    </ChatsContainer>
  );
};

const ChatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  margin-bottom: 16px;
  overflow-y: auto;
  padding: 1px 0;
`;
