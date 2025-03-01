import { baseApi } from '@/shared';
import {
  FetchMessagesData,
  FetchMessagesResponse,
  SendMessageBody,
  SendMessageResponse,
} from './types';

export const messageApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    fetchMessages: builder.query<FetchMessagesResponse, FetchMessagesData>({
      query: ({ chatId, page }) => ({
        url: `chat/${chatId}/messages`,
        params: {
          page,
        },
      }),
      providesTags: ['message'],
    }),
    sendMessage: builder.mutation<SendMessageResponse, SendMessageBody>({
      query: body => ({
        url: 'message/send',
        body,
        method: 'POST',
      }),
      invalidatesTags: ['message'],
    }),
  }),
});

export const { useLazyFetchMessagesQuery, useSendMessageMutation } = messageApi;
