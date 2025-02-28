import { Nullable } from '@/shared/types';

// general type
export type GeneralMessageResponse = {
  id: string;
  role: 'user' | 'assistant';
  status: string;
  tokens: number;
  action_type: Nullable<string>;
  user_id: string;
  chat_id: string;
  additional_content: Nullable<string>;
  disabled: boolean;
  content: Nullable<string>;
  request_id: Nullable<string>;
  transaction_id: Nullable<string>;
  model_id: Nullable<string>;
  created_at: string;
};

// message types
export type UserMessage = {
  choiced: boolean;
  version: number;
  set_id: null;
  previous_version_id: null;
  next_version_id: null;
  video_id: null;
  model_version: null;
  full_content: string;
  reasoning_content: null;
  reasoning_time_ms: null;
  search_status: null;
  search_results: null;
  isEncrypted: boolean;
  voice_id: null;
  job_id: null;
  mj_mode: null;
  platform: string;
  model: null;
  transaction: null;
  set: null;
  images: string[];
  buttons: string[];
  all_buttons: string[];
  attachments: string[];
  voice: null;
  video: null;
  job: null;
} & GeneralMessageResponse;
export type AssistantMessage = {
  choiced: boolean;
  version: number;
  set_id: null;
  previous_version_id: null;
  next_version_id: null;
  video_id: null;
  model_version: null;
  full_content: null;
  reasoning_content: string;
  reasoning_time_ms: null;
  search_status: null;
  search_results: null;
  isEncrypted: boolean;
  voice_id: null;
  job_id: string;
  mj_mode: null;
  platform: null;
  model: {
    id: string;
    label: string;
    description: null;
    icon_id: null;
    pricing: {
      input: number;
      output: number;
      discount: number;
      input_image: number;
    };
    auto_update_pricing: boolean;
    prefix: string;
    context_length: number;
    max_tokens: number;
    features: string[];
    provider_id: string;
    child_provider_id: null;
    owned_by: string;
    parent_id: string;
    message_color: string;
    disabled: boolean;
    disabledWeb: boolean;
    disabledTelegram: boolean;
    order: number;
    used_count: number;
    custom: boolean;
    deleted: boolean;
    created_at: string;
    icon: null;
    parent: {
      id: string;
      label: string;
      description: null;
      icon_id: null;
      pricing: null;
      auto_update_pricing: boolean;
      prefix: string;
      context_length: number;
      max_tokens: number;
      features: string[];
      provider_id: null;
      child_provider_id: null;
      owned_by: string;
      parent_id: null;
      message_color: string;
      disabled: boolean;
      disabledWeb: boolean;
      disabledTelegram: boolean;
      order: number;
      used_count: number;
      custom: boolean;
      deleted: boolean;
      created_at: string;
      icon: null;
    };
  };
  transaction: {
    id: string;
    provider: string;
    amount: number;
    currency: string;
    meta: null;
    status: string;
    type: string;
    plan_id: null;
    user_id: string;
    from_user_id: null;
    referral_id: null;
    created_at: string;
    external_id: null;
    enterprise_id: null;
    deleted: boolean;
  };
  set: null;
  images: string[];
  buttons: string[];
  all_buttons: string[];
  attachments: string[];
  voice: null;
  video: null;
  job: {
    id: string;
    name: string;
    status: string;
    is_stop_allowed: boolean;
    timeout: number;
    progress: number;
    error: null;
    error_code: null;
    chat_id: string;
    user_message_id: null;
    mj_native_message_id: null;
    mj_remaining_timeout: null;
    created_at: string;
  };
} & GeneralMessageResponse;

// fetch messages
export type FetchMessagesResponse = {
  data: (UserMessage | AssistantMessage)[];
  pages: number;
};
export type FetchMessagesData = {
  chatId: string;
  page?: number;
};

// get chat stream
export type GetChatStreamParams = {
  chatId: string;
};

// send message
export type SendMessageResponse = {
  type: string;
  tg_bot_message_id: string;
} & GeneralMessageResponse;
export type SendMessageBody = {
  chatId: string;
  message: string;
  tgBotMessageId?: string;
};
