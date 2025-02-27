import { baseApi } from '@/shared'
import { AddChatBody, FetchChatsQueryParams, FetchChatsResponse, PartialChat } from './types'

export const chatApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    fetchChats: builder.query<FetchChatsResponse, FetchChatsQueryParams>({
      query: params => ({
        url: 'chat/list',
        params,
      }),
      providesTags: ['chat'],
    }),
    addChat: builder.mutation<PartialChat, AddChatBody>({
      query: body => ({
        url: `chat`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['chat'],
    }),
    deleteChat: builder.mutation<PartialChat, string>({
      query: id => ({
        url: `chat/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['chat'],
    }),
  }),
})

export const { useFetchChatsQuery, useAddChatMutation, useDeleteChatMutation } = chatApi
