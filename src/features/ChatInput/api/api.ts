import { baseApi } from '@/shared'
import { SendMessageBody, SendMessageResponse } from './types'

export const messageApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    sendMessage: builder.mutation<SendMessageResponse, SendMessageBody>({
      query: body => ({
        url: 'message/send',
        body,
        method: 'POST',
      }),
      invalidatesTags: ['messages'],
    }),
  }),
})

export const { useSendMessageMutation } = messageApi
