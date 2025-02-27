import styled from 'styled-components'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { inputSchema } from '../model'
import { zodResolver } from '@hookform/resolvers/zod'
import { useGetChatId, useSendMessageMutation } from '@/shared'

type Inputs = z.infer<typeof inputSchema>

export const ChatInput = () => {
  const { chatId } = useGetChatId()

  const [sendMessage] = useSendMessageMutation()

  const { register, handleSubmit, reset } = useForm<Inputs>({
    resolver: zodResolver(inputSchema),
    defaultValues: {
      message: '',
    },
  })

  const onFormSubmit: SubmitHandler<Inputs> = async ({ message }) => {
    reset()

    await sendMessage({
      message,
      chatId,
    })
  }

  const isFormDisabled = !chatId

  return (
    <ChatInputContainer onSubmit={handleSubmit(onFormSubmit)}>
      <Input
        type="text"
        placeholder="Спроси о чем-нибудь..."
        disabled={isFormDisabled}
        {...register('message')}
      />
      <SendMessage type="submit" disabled={isFormDisabled}>
        <img src="/send.svg" alt="send message" />
      </SendMessage>
    </ChatInputContainer>
  )
}

const ChatInputContainer = styled.form`
  width: 100%;
  position: relative;
`
const Input = styled.input`
  width: 100%;
  height: 66px;
  border: 1px solid #313e62;
  border-radius: 10px;
  background-color: transparent;
  padding: 0 20px;
  color: white;

  &::placeholder {
    color: #616d8d;
  }
`
const SendMessage = styled.button`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1c64f2;
  border-radius: 8px;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`
