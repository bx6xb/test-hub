import { addAlert, selectIsMessageSent, setIsMessageSent } from '@/entities';
import { AIModelsValues, connectSSE, Nullable, useAppDispatch, useAppSelector } from '@/shared';
import { useEffect, useState } from 'react';
import { GptResponse, MidjourneyResponse } from '../model';

type Props = {
  chatId: string;
  messageText: Nullable<string>;
  aiId: AIModelsValues;
};

export const useAIMessage = ({ chatId, messageText, aiId }: Props) => {
  const isMessageSent = useAppSelector(selectIsMessageSent);
  const dispatch = useAppDispatch();
  const [sseMessageContent, setSseMessageContent] = useState<string | string[]>('');

  const getGptResponse = (data: GptResponse) => {
    const message = data.data.message.content;

    if (message) {
      setSseMessageContent(message);
    }
  };

  const getMidjourneyResponse = (data: MidjourneyResponse) => {
    console.log(data.data.message.images);
  };

  const onError = (message: string) => {
    dispatch(addAlert({ message, type: 'error' }));
  };

  const onAbort = () => dispatch(setIsMessageSent(false));

  const sse = <T extends {}>(getResponse: (data: T) => void) => {
    const abortSSE = connectSSE<T>({
      uri: `chat/${chatId}/stream`,
      getResponse,
      onError,
      onAbort,
    });

    return () => {
      onAbort();
      console.log('SSE closed');
      abortSSE();
    };
  };

  useEffect(() => {
    if (!messageText && isMessageSent) {
      if (aiId === 'gpt') {
        return sse<GptResponse>(getGptResponse);
      } else if (aiId === 'midjourney') {
        return sse<MidjourneyResponse>(getMidjourneyResponse);
      }
    }
  }, []);

  const content = messageText || sseMessageContent;

  return {
    content,
  };
};
