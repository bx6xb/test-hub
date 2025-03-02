import { AIMessage, UserMessage } from '@/features';
import {
  AIModelsValues,
  getTimeFromIsoDate,
  Loader,
  useGetChatId,
  useLazyFetchMessagesQuery,
} from '@/shared';
import { useEffect, useRef } from 'react';
import { MessagesContainer } from '../styles';

export const Messages = () => {
  const { chatId } = useGetChatId();
  const [fetchMessages, { data: messages, isLoading }] = useLazyFetchMessagesQuery();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatId) {
      fetchMessages({ chatId });
    }
  }, [chatId]);

  useEffect(() => {
    const container = messagesEndRef.current?.parentElement;

    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  return (
    <MessagesContainer>
      {isLoading ? (
        <Loader loaderSize={25} />
      ) : (
        messages?.data
          .slice()
          .reverse()
          .map(({ role, content, created_at, id, model }) => {
            const time = getTimeFromIsoDate(created_at);
            const generalProps = {
              messageText: content,
              time,
            };

            if (role === 'assistant') {
              return (
                <AIMessage
                  key={id}
                  {...generalProps}
                  chatId={chatId}
                  aiId={model?.owned_by as AIModelsValues}
                  aiVersion={model?.id}
                />
              );
            } else {
              return <UserMessage key={id} {...generalProps} />;
            }
          })
      )}
      <div ref={messagesEndRef} />
    </MessagesContainer>
  );
};
