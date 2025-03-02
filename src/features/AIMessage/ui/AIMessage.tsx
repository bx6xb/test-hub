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
import styled from 'styled-components';
import { GptResponse, MidjourneyResponse } from '../model';
import { addAlert, setIsChatDisabled } from '@/entities';

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

const AIMessageContainer = styled.div`
  max-width: 80%;
  display: flex;
  gap: 16px;
`;
const AIAvatar = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 34px;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;
const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const AIModel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 400;
`;
const AIVersion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--accent-bg);
  border-radius: 14px;
  padding: 4px 12px;
  font-size: 14px;
  font-weight: 500;
`;
const MessageText = styled.p`
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const Images = styled.div`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  > img {
    width: 100%;
    height: 100%;
  }
`;
const CopyAndTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
`;
