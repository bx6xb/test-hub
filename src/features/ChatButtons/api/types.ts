export type AddChatResponse = {
  id: string
  group_id: string
  user_id: string
  name: string
  total_caps: number
  highlight: string
  model_id: string
  created_at: string
}

export type AddChatBody = {
  modelId?: string
  groupId?: string
  name: string
  highlight?: string
}
