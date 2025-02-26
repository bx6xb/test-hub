import { baseApi } from '@/shared'
import { AddChatBody, AddChatResponse } from './types'

export const chatsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    addChat: builder.mutation<AddChatResponse, AddChatBody>({
      query: body => ({
        url: `chat`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['chat'],
    }),
  }),
})

export const { useAddChatMutation } = chatsApi
