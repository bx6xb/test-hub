import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { inputSchema, useAppSelector, useGetChatId, useSendMessageMutation } from '@/shared';
import { useTranslation } from 'react-i18next';
import { ChatInputContainer, Input, SendMessage } from '../styles';

type Inputs = z.infer<typeof inputSchema>;

export const ChatInput = () => {
  const isChatDisabled = useAppSelector(state => state.appSlice.isChatDisabled);
  const { chatId } = useGetChatId();
  const { t } = useTranslation();
  const [sendMessage] = useSendMessageMutation();

  const { register, handleSubmit, reset } = useForm<Inputs>({
    resolver: zodResolver(inputSchema),
    defaultValues: {
      string: '',
    },
    disabled: isChatDisabled,
  });

  const onFormSubmit: SubmitHandler<Inputs> = async ({ string }) => {
    reset();

    await sendMessage({
      message: string,
      chatId,
    });
  };

  return (
    <ChatInputContainer onSubmit={handleSubmit(onFormSubmit)} $isFormDisabled={isChatDisabled}>
      <Input type="text" placeholder={t('ChatInput_input_placeholder')} {...register('string')} />
      <SendMessage type="submit">
        <img src="/images/send.svg" alt="send message" />
      </SendMessage>
    </ChatInputContainer>
  );
};
