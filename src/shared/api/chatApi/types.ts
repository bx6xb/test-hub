// chat types
export type PartialChat = {
  id: string;
  name: string;
  group_id: string;
  model_id: string;
  created_at: string;
  user_id: string;
  highlight: string;
  total_caps: number;
};
export type ChatType = {
  model_function_id: null;
  initial: boolean;
  platform: string;
  order: number;
  deleted: boolean;
} & PartialChat;

// add chat
export type AddChatBody = {
  name: string;
  modelId?: string;
  groupId?: string;
  highlight?: string;
};

// fetch chats
export type FetchChatsResponse = {
  data: ChatType[];
  pages: number;
};
export type FetchChatsQueryParams = {
  page?: number;
  groupId?: string;
  search?: string;
};

// set chat name or model
export type SetChatNameOrModelParams = {
  chatId: string;
  name?: string;
  highlight?: string;
  modelId?: string;
  modelFunctionId?: string;
  initial?: boolean;
  groupId?: string;
};
