import { baseApi } from '@/shared'
import { FetchMessagesData, FetchMessagesResponse } from './types'

export const messagesApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    fetchMessages: builder.query<FetchMessagesResponse, FetchMessagesData>({
      query: ({ id, page }) => ({
        url: `chat/${id}/messages`,
        params: {
          page,
        },
      }),
      providesTags: ['messages'],
    }),
  }),
})

export const { useLazyFetchMessagesQuery } = messagesApi
