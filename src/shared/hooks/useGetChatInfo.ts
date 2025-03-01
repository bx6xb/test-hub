import { useMemo } from 'react';
import { ChatType, useFetchChatsQuery } from '../api';
import { AIModelsValues } from '../types';
import { AI_MODELS } from '../variables';
import { useGetChatId } from './useGetChatId';

export const useGetChatInfo = () => {
  const { data } = useFetchChatsQuery({});
  const { chatId } = useGetChatId();

  const currentChat = useMemo(() => {
    let chat: ChatType | undefined;

    if (data) {
      chat = data.data.find(chat => chat.id === chatId);
    }

    return chat;
  }, [chatId]);

  return currentChat
    ? {
        ...currentChat,
        aiName: AI_MODELS[currentChat.model_id as AIModelsValues],
      }
    : null;
};
