import { AI_MODELS, AIModelsValues, CopyText, Loader, Nullable } from '@/shared';
import { marked } from 'marked';
import {
  AIAvatar,
  AIMessageContainer,
  AIModel,
  AIVersion,
  Content,
  CopyAndTime,
  Images,
  MessageContent,
  MessageText,
} from '../styles';
import { useAIMessage } from '../hooks';

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
  const { content } = useAIMessage({ chatId, messageText, aiId });

  return (
    <AIMessageContainer>
      <AIAvatar src={`/images/${aiId}.svg`} alt={`${aiId} logo`} />

      <MessageContent>
        <AIModel>
          {AI_MODELS[aiId]}
          <AIVersion>{aiVersion}</AIVersion>
        </AIModel>

        {aiId === 'gpt' && content ? (
          <MessageText>
            <Content dangerouslySetInnerHTML={{ __html: marked(content as string) }} />
          </MessageText>
        ) : (
          <Loader />
        )}
        {aiId === 'midjourney' && (
          <Images>
            {((content || []) as string[]).map(url => (
              <img src={url} alt="generated image" />
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
