export type ChatType = {
  id: string
  name: string
  group_id: null
  model_id: string
  model_function_id: null
  created_at: string
  user_id: string
  highlight: null
  initial: boolean
  platform: string
  total_caps: number
  order: number
  deleted: boolean
}

export type GetChatsQueryParams = {
  page?: number
  groupId?: string
  search?: string
}

export type GetChatsResponse = {
  data: ChatType[]
  pages: number
}

export type DeleteChatResponse = {
  id: string
  group_id: string
  user_id: string
  name: string
  total_caps: number
  highlight: string
  model_id: string
  created_at: string
}
