import { AIMessage, UserMessage } from '@/features'
import styled from 'styled-components'
import { useLazyFetchMessagesQuery } from '../api'
import { getTimeFromIsoDate, useGetChatId } from '@/shared'
import { useEffect } from 'react'

export const Messages = () => {
  const { chatId } = useGetChatId()

  const [fetchMessages, { data: messages }] = useLazyFetchMessagesQuery()

  useEffect(() => {
    if (chatId) {
      fetchMessages({ chatId })
    }
  }, [chatId])

  return (
    <MessagesContainer>
      {messages &&
        [...messages.data].reverse().map(({ role, content, created_at, id }) => {
          const Component = role === 'assistant' ? AIMessage : UserMessage

          return <Component key={id} messageText={content} time={getTimeFromIsoDate(created_at)} />
        })}
    </MessagesContainer>
  )
}

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  overflow-y: auto;
`
