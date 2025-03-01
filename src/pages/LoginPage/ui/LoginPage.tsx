import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, userDataSchema } from '@/shared';
import { login } from '@/entities';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

type Inputs = z.infer<typeof userDataSchema>;

export const LoginPage = () => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

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

const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  max-width: 459px;
  width: 100%;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  background-color: var(--accent-bg);
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  margin: 0 10px;
`;
const FormHeader = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 4px;
`;
const Label = styled.label`
  color: var(--white-color);
  font-size: 16px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Input = styled.input`
  color: var(--white-color);
  background-color: var(--secondary-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 16px;

  &::placeholder {
    color: var(--input-placeholder-color);
  }
`;
const Error = styled.span`
  color: red;
  font-size: 14px;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  border-radius: 8px;
  border: none;
  background-color: var(--primary-color);
  box-shadow: 0 1px 1px 0 rgba(255, 255, 255, 40%);
`;
