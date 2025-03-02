import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useAppDispatch, inputSchema } from '@/shared';
import { addAlert } from '@/entities';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Input } from './styles';

type Inputs = z.infer<typeof inputSchema>;

type Props = {
  name: string;
  onSubmit(newName: string): void;
};

export const ChatRenameInput = ({ name, onSubmit }: Props) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(inputSchema),
    defaultValues: {
      string: name,
    },
  });

  useEffect(() => {
    if (errors.string) {
      dispatch(addAlert({ message: t('ChatRenameInput_min_length_error'), type: 'error' }));
    }
  }, [errors.string]);

  const onSubmitHandler: SubmitHandler<Inputs> = ({ string }) => {
    onSubmit(string);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <img src="/images/chat.svg" alt="chat icon" />

      <Input defaultValue={name} {...register('string')} autoFocus />

      <button type="submit">
        <img src="/images/edit.svg" alt="edit chat name" width={18} height={18} />
      </button>
    </Form>
  );
};
