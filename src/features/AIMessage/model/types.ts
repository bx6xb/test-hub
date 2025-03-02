import { Nullable, Role } from '@/shared';

export type ResponseNameValues = 'MESSAGE_UPDATE' | 'JOB_DONE' | 'JOB_ERROR';

type GeneralResponse<N extends ResponseNameValues, D extends 'message' | 'job', T> = {
  name: N;
  data: Record<D, T>;
};

export type GptResponse = GeneralResponse<
  'MESSAGE_UPDATE',
  'message',
  {
    id: string;
    content?: string;
    reasoning_content: string;
    reasoning_time_ms: Nullable<number>;
  }
>;

export type MidjourneyResponse = GeneralResponse<
  'MESSAGE_UPDATE',
  'message',
  {
    id: string;
    role: Role;
    choiced: boolean;
    version: number;
    set_id: Nullable<string>;
    previous_version_id: Nullable<string>;
    next_version_id: Nullable<string>;
    video_id: Nullable<string>;
    action_type: Nullable<string>;
    status: string;
    model_id: Nullable<string>;
    model_version: Nullable<string>;
    content: string;
    full_content: Nullable<string>;
    reasoning_content: Nullable<string>;
    reasoning_time_ms: Nullable<string>;
    search_status: Nullable<string>;
    search_results: Nullable<string>;
    isEncrypted: boolean;
    additional_content: Nullable<string>;
    chat_id: string;
    user_id: string;
    tokens: number;
    disabled: boolean;
    created_at: string;
    transaction_id: Nullable<string>;
    request_id: Nullable<string>;
    voice_id: Nullable<string>;
    job_id: Nullable<string>;
    mj_mode: Nullable<string>;
    platform: string;
    user: {
      id: string;
      email: string;
      emailVerified: boolean;
      tg_id: Nullable<string>;
      tg_id_before: Nullable<string>;
      name: Nullable<string>;
      password: string;
      avatar: Nullable<string>;
      anonymousDeviceFingerprint: Nullable<string>;
      inactive: boolean;
      disabled: boolean;
      encryptedDEK: Nullable<string>;
      useEncryption: boolean;
      kekSalt: Nullable<string>;
      receiveEmails: boolean;
      hadSubscriptedForEmails: boolean;
      created_at: string;
      role: string;
    };
    images: string[];
    attachments: string[];
    voice: Nullable<string>;
  }
>;

export type JobError = GeneralResponse<
  'JOB_ERROR',
  'job',
  {
    id: string;
    name: string;
    status: string;
    is_stop_allowed: boolean;
    timeout: number;
    progress: Nullable<string>;
    error: string;
    error_code: string;
    chat_id: string;
    user_message_id: string;
    mj_native_message_id: Nullable<string>;
    mj_remaining_timeout: Nullable<string>;
    created_at: string;
    chat: {
      id: string;
      name: string;
      group_id: Nullable<string>;
      model_id: string;
      model_function_id: string;
      created_at: string;
      user_id: string;
      highlight: Nullable<string>;
      initial: boolean;
      platform: string;
      total_caps: number;
      order: number;
      deleted: boolean;
      user: {
        id: string;
        email: string;
        emailVerified: boolean;
        tg_id: Nullable<string>;
        tg_id_before: Nullable<string>;
        name: Nullable<string>;
        password: string;
        avatar: Nullable<string>;
        anonymousDeviceFingerprint: Nullable<string>;
        inactive: boolean;
        disabled: boolean;
        encryptedDEK: Nullable<string>;
        useEncryption: boolean;
        kekSalt: Nullable<string>;
        receiveEmails: boolean;
        hadSubscriptedForEmails: boolean;
        created_at: string;
        role: string;
        employees: string[];
      };
      model: {
        id: string;
        label: string;
        description: Nullable<string>;
        icon_id: Nullable<string>;
        pricing: {
          discount: number;
          fast_mode: number;
          relax_mode: number;
          turbo_mode: number;
        };
        auto_update_pricing: boolean;
        prefix: string;
        context_length: number;
        max_tokens: number;
        features: string[];
        provider_id: Nullable<string>;
        child_provider_id: Nullable<string>;
        owned_by: string;
        parent_id: Nullable<string>;
        message_color: Nullable<string>;
        disabled: boolean;
        disabledWeb: boolean;
        disabledTelegram: boolean;
        order: number;
        used_count: number;
        custom: boolean;
        deleted: boolean;
        created_at: string;
      };
      model_function: {
        id: string;
        name: string;
        label: string;
        is_default: boolean;
        features: string[];
        order: number;
        model_id: string;
        created_at: string;
      };
      settings: {
        id: string;
        text_id: string;
        image_id: Nullable<string>;
        mj_id: string;
        speech_id: Nullable<string>;
        replicateImage_id: Nullable<string>;
        chat_id: string;
        created_at: string;
        image: Nullable<string>;
        mj: {
          id: string;
          aspect: string;
          chaos: number;
          no: string;
          quality: number;
          stop: number;
          style: Nullable<string>;
          stylize: number;
          tile: boolean;
          weird: number;
          mode: string;
          version: string;
          created_at: string;
        };
      };
    };
  }
>;
