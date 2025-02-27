import { useSearchParams } from 'react-router-dom'

export const useGetChatId = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const chatId = searchParams.get('chatId') || ''

  const setChatId = (chatId: string) => setSearchParams({ chatId })

  return { chatId, setChatId }
}
