import { API_KEY, API_URL } from '../variables';

export function connectSSE<T>(uri: string, getResponse: (response: T) => void) {
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
            }
          } catch (error) {
            console.error('JSON parse error:', error);
          }
        }
      }
    } catch (error) {
      if (signal.aborted) {
        console.log('SSE closed');
      } else {
        console.error('SSE error:', error);
      }
    }
  })();

  return () => controller.abort();
}
