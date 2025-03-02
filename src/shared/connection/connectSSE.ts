import { JobError } from '@/features';
import { API_KEY, API_URL } from '../variables';

type Args<T> = {
  uri: string;
  getResponse: (response: T) => void;
  onError?: (errorMessage: string) => void;
  onAbort?: () => void;
};

export function connectSSE<T>({ uri, getResponse, onError, onAbort }: Args<T>) {
  const controller = new AbortController();
  const { signal } = controller;

  (async () => {
    try {
      const response = await fetch(API_URL + uri, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: 'text/event-stream',
        },
        signal,
      });

      if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);

      const reader = response.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        let parts = buffer.split('\n\n');
        buffer = parts.pop() || '';

        for (const part of parts) {
          const cleanPart = part.replace(/^data:\s*/, '').trim();

          try {
            const data = JSON.parse(cleanPart);

            if (data.name === 'MESSAGE_UPDATE') {
              getResponse(data);
            } else if (data.name === 'JOB_DONE') {
              controller.abort();
              break;
            } else if (data.name === 'JOB_ERROR') {
              const typedData = data as JobError;
              onError && onError(typedData.data.job.error);

              controller.abort();
              break;
            }
          } catch (error) {
            console.error('JSON parse error:', error);
          }
        }
      }
    } catch (error) {
      if (signal.aborted) {
        onAbort && onAbort();
        console.log('SSE closed');
      } else {
        console.error('SSE error:', error);
      }
    }
  })();

  return () => controller.abort();
}
