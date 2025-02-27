import { API_URL, baseApi } from '@/shared'
import {
  FetchMessagesData,
  FetchMessagesResponse,
  GetChatStreamParams,
  SendMessageBody,
  SendMessageResponse,
} from './types'

export const messageApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    fetchMessages: builder.query<FetchMessagesResponse, FetchMessagesData>({
      query: ({ chatId, page }) => ({
        url: `chat/${chatId}/messages`,
        params: {
          page,
        },
      }),
      providesTags: result => {
        console.log('Message data loaded:', result)
        return ['message']
      },
    }),
    sendMessage: builder.mutation<SendMessageResponse, SendMessageBody>({
      query: body => ({
        url: 'message/send',
        body,
        method: 'POST',
      }),
      invalidatesTags: result => {
        console.log('Message data loaded:', result)
        return ['message']
      },
    }),
    getChatStream: builder.query<string[], GetChatStreamParams>({
      query: ({ chatId }) => `chat/${chatId}/stream`,
      async onCacheEntryAdded(
        { chatId },
        { updateCachedData, cacheEntryRemoved, cacheDataLoaded }
      ) {
        const eventSource = new EventSource(`${API_URL}chat/${chatId}/stream`)

        try {
          await cacheDataLoaded

          eventSource.onmessage = event => {
            const message = event.data.trim()

            console.log('stream message', message)

            updateCachedData(draft => {
              draft.push(message)
            })
          }
        } catch (error) {
          console.error('SSE error:', error)
        }

        await cacheEntryRemoved
        eventSource.close()
      },
      // providesTags: ['message'],
    }),
  }),
})

export const { useLazyFetchMessagesQuery, useSendMessageMutation, useGetChatStreamQuery } =
  messageApi
