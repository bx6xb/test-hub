import { AIMessage, UserMessage } from '@/features';
import styled from 'styled-components';
import {
  getTimeFromIsoDate,
  Loader,
  useGetChatId,
  // useGetChatStreamQuery,
  useLazyFetchMessagesQuery,
} from '@/shared';
import { useEffect, useRef } from 'react';

export const Messages = () => {
  const { chatId } = useGetChatId();

  const [fetchMessages, { data: messages, isLoading }] = useLazyFetchMessagesQuery();
  // const { data: streamMessages = [] } = useGetChatStreamQuery({ chatId }, { pollingInterval: 0 })

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatId) {
      fetchMessages({ chatId });
    }
  }, [chatId]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // console.log(streamMessages)

  return (
    <MessagesContainer>
      {isLoading ? (
        <Loader loaderSize={25} />
      ) : (
        messages &&
        [...messages.data].reverse().map(({ role, content, created_at, id }) => {
          const Component = role === 'assistant' ? AIMessage : UserMessage;

          return (
            <Component key={id} messageText={content || ''} time={getTimeFromIsoDate(created_at)} />
          );
        })
      )}
      {/* {messages &&
        [...messages.data].reverse().map(({ role, content, created_at, id }) => {
          const Component = role === 'assistant' ? AIMessage : UserMessage

          return (
            <Component key={id} messageText={content || ''} time={getTimeFromIsoDate(created_at)} />
          )
        })} */}
      <div ref={messagesEndRef} />
    </MessagesContainer>
  );
};

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  overflow-y: auto;
`;
