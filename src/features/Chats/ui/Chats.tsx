import { Chat } from './Chat';
import { Loader, useAppSelector, useFetchChatsQuery } from '@/shared';
import { memo } from 'react';
import { ChatsContainer } from '../styles';

export const Chats = memo(() => {
  const searchTerm = useAppSelector(state => state.appSlice.searchTerm);

  const { data, isLoading } = useFetchChatsQuery({});

  const filteredChats =
    data?.data.filter(chat => new RegExp(searchTerm, 'i').test(chat.name)) || [];

  return (
    <ChatsContainer>
      {isLoading ? <Loader /> : filteredChats.map(chat => <Chat key={chat.id} {...chat} />)}
    </ChatsContainer>
  );
});
