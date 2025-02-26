export type SendMessageBody = {
  chatId: string
  message: string
  tgBotMessageId?: string
}
export type SendMessageResponse = {
  id: string
  role: string
  type: string
  status: string
  tokens: number
  action_type: string
  user_id: string
  chat_id: string
  additional_content: string
  tg_bot_message_id: string
  disabled: boolean
  content: string
  request_id: string
  transaction_id: string
  model_id: string
  created_at: string
}
