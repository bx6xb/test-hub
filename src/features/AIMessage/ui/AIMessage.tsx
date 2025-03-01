import { AI_MODELS, AIModelsValues, connectSSE, CopyText, Nullable } from '@/shared';
import { marked } from 'marked';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GptResponse } from '../model';

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
  const [sseMessageText, setSseMessageText] = useState('');

  const getResponse = (data: GptResponse) => {
    const message = data.data.message.content;

    if (message) {
      setSseMessageText(message);
    }
  };

  useEffect(() => {
    if (!messageText) {
      const abortSSE = connectSSE<GptResponse>(`chat/${chatId}/stream`, getResponse);

      return () => {
        console.log('SSE closed');
        abortSSE();
      };
    }
  }, []);

  const text = messageText || sseMessageText;

  return (
    <AIMessageContainer>
      <AIModel>
        {AI_MODELS[aiId]}
        <AIVersion>{aiVersion}</AIVersion>
      </AIModel>

      <Message>
        <AIAvatar src={`/images/${aiId}.svg`} alt={`${aiId} logo`} />
        <MessageText dangerouslySetInnerHTML={{ __html: marked(text) }} />
      </Message>

      <CopyAndTime>
        <Copy>
          -223 CAPS
          <CopyText text={text} />
        </Copy>

        {time}
      </CopyAndTime>
    </AIMessageContainer>
  );
};

const AIMessageContainer = styled.div`
  max-width: 65%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const AIModel = styled.div`
  width: 294px;
  display: flex;
  justify-content: center;
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
const Message = styled.div`
  display: flex;
  gap: 16px;
`;
const AIAvatar = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;
const MessageText = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-top: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const CopyAndTime = styled.div`
  width: 294px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 98px;
  font-size: 12px;
  font-weight: 400;
`;
const Copy = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  color: #9ca3af;
  font-size: 16px;
  font-weight: 400;
`;
