import {
  AI_MODELS,
  AIModelsValues,
  connectSSE,
  CopyText,
  Nullable,
  useAppDispatch,
} from '@/shared';
import { marked } from 'marked';
import { useEffect, useState } from 'react';
import { GptResponse, MidjourneyResponse } from '../model';
import { addAlert, setIsChatDisabled } from '@/entities';
import {
  AIAvatar,
  AIMessageContainer,
  AIModel,
  AIVersion,
  CopyAndTime,
  Images,
  MessageContent,
  MessageText,
} from '../styles';

type Props = {
  messageText: Nullable<string>;
  time: string;
  chatId: string;
  aiVersion?: string;
  aiId?: AIModelsValues;
};

export const AIMessage = ({
  messageText,
  time,
  chatId,
  aiId = 'gpt',
  aiVersion = 'gpt-4-1106-preview',
}: Props) => {
  const [sseMessageContent, setSseMessageContent] = useState<string | string[]>('');
  const dispatch = useAppDispatch();

  const getGptResponse = (data: GptResponse) => {
    const message = data.data.message.content;

    if (message) {
      setSseMessageContent(message);
    }
  };

  const getMidjourneyResponse = (data: MidjourneyResponse) => {
    console.log(data.data.message.images);
  };

  const onMidjourneyError = (message: string) => {
    dispatch(addAlert({ message, type: 'error' }));
  };

  const onAbort = () => dispatch(setIsChatDisabled(false));

  useEffect(() => {
    if (!messageText) {
      if (aiId === 'gpt') {
        dispatch(setIsChatDisabled(true));
        const abortSSE = connectSSE<GptResponse>({
          uri: `chat/${chatId}/stream`,
          getResponse: getGptResponse,
          onAbort,
        });

        return () => {
          onAbort();
          console.log('SSE closed');
          abortSSE();
        };
      } else if (aiId === 'midjourney') {
        dispatch(setIsChatDisabled(true));
        const abortSSE = connectSSE<MidjourneyResponse>({
          uri: `chat/${chatId}/stream`,
          getResponse: getMidjourneyResponse,
          onError: onMidjourneyError,
          onAbort,
        });

        return () => {
          onAbort();
          console.log('SSE closed');
          abortSSE();
        };
      }
    }
  }, []);

  const content = messageText || sseMessageContent;

  return (
    <AIMessageContainer>
      <AIAvatar src={`/images/${aiId}.svg`} alt={`${aiId} logo`} />

      <MessageContent>
        <AIModel>
          {AI_MODELS[aiId]}
          <AIVersion>{aiVersion}</AIVersion>
        </AIModel>

        {aiId === 'gpt' && (
          <MessageText dangerouslySetInnerHTML={{ __html: marked(content as string) }} />
        )}
        {aiId === 'midjourney' && (
          <Images>
            {((sseMessageContent || []) as string[]).map(url => (
              <img src={url} alt="midjorney image" />
            ))}
          </Images>
        )}

        <CopyAndTime>
          {aiId === 'gpt' && <CopyText text={content as string} />}

          {time}
        </CopyAndTime>
      </MessageContent>
    </AIMessageContainer>
  );
};
