import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, userDataSchema } from '@/shared';
import { login } from '@/entities';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Button, Error, Form, FormContainer, FormHeader, Input, Label } from '../styles';

type Inputs = z.infer<typeof userDataSchema>;

export const LoginPage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(userDataSchema),
  });

  useEffect(() => {
    document.title = 'Login';
  }, []);

  const onSubmitHandler: SubmitHandler<Inputs> = data => {
    dispatch(login(data));
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <FormHeader>{t('LoginPage_login')}</FormHeader>

        <Label>
          E-Mail
          <Input
            type="email"
            placeholder={t('LoginPage_email_placeholder')}
            {...register('email')}
          />
        </Label>
        {!!errors.email && <Error>{t('LoginPage_incorrect_email_error')}</Error>}

        <Label>
          {t('LoginPage_password')}
          <Input
            type="password"
            placeholder={t('LoginPage_password_placeholder')}
            {...register('password')}
          />
        </Label>
        {!!errors.password && <Error>{t('LoginPage_password_length_error')}</Error>}

        <Button>{t('LoginPage_submit')}</Button>
      </Form>
    </FormContainer>
  );
};
