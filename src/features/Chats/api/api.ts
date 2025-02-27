import { baseApi } from '@/shared'
import { DeleteChatResponse, GetChatsQueryParams, GetChatsResponse } from './types'

export const chatsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    fetchChats: builder.query<GetChatsResponse, GetChatsQueryParams>({
      query: params => ({
        url: 'chat/list',
        params,
      }),
      providesTags: ['chat'],
    }),
    deleteChat: builder.mutation<DeleteChatResponse, string>({
      query: id => ({
        url: `chat/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['chat'],
    }),
  }),
})

export const { useFetchChatsQuery, useDeleteChatMutation } = chatsApi
