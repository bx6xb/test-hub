import { Nullable } from '@/shared';

export type ResponseNameValues = 'MESSAGE_UPDATE' | 'JOB_DONE';

export type GptResponse = {
  name: ResponseNameValues;
  data: {
    message: {
      id: string;
      content?: string;
      reasoning_content: string;
      reasoning_time_ms: Nullable<number>;
    };
  };
};
