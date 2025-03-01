import { ChatType, useFetchChatsQuery } from '../api';
import { AIModelsValues } from '../types';
import { AI_MODELS } from '../variables';
import { useGetChatId } from './useGetChatId';

export const useGetChatInfo = () => {
  const { data } = useFetchChatsQuery({});
  const { chatId } = useGetChatId();

  let currentChat: ChatType | undefined;

  if (data) {
    currentChat = data.data.find(chat => chat.id === chatId);
  }

  return currentChat
    ? {
        ...currentChat,
        aiName: AI_MODELS[currentChat.model_id as AIModelsValues],
      }
    : null;
};
