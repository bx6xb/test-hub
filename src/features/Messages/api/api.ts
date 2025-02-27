import { baseApi } from '@/shared'
import { FetchMessagesData, FetchMessagesResponse } from './types'

export const messagesApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    fetchMessages: builder.query<FetchMessagesResponse, FetchMessagesData>({
      query: ({ chatId, page }) => ({
        url: `chat/${chatId}/messages`,
        params: {
          page,
        },
      }),
      providesTags: ['messages'],
    }),
  }),
})

export const { useLazyFetchMessagesQuery } = messagesApi
