import { SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'
import { z } from 'zod'
import { loginSchema } from '../model'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppDispatch } from '@/shared'
import { setIsAuth } from '@/entities'

type Inputs = z.infer<typeof loginSchema>

export const Login = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmitHandler: SubmitHandler<Inputs> = data => {
    dispatch(setIsAuth(data))
  }

  const emailError = errors.email?.message
  const passwordError = errors.password?.message

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <FormHeader>Авторизация</FormHeader>

      <Label>
        E-Mail
        <Input type="email" placeholder="Ваш E-Mail" {...register('email')} />
      </Label>
      {!!emailError && <Error>{emailError}</Error>}

      <Label>
        Пароль
        <Input type="password" placeholder="Ваш пароль" {...register('password')} />
      </Label>
      {!!passwordError && <Error>{passwordError}</Error>}

      <Button>Войти</Button>
    </Form>
  )
}

const Form = styled.form`
  width: 459px;
  border-radius: 16px;
  border: 1px solid #313e62;
  background-color: #222b44;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
`
const FormHeader = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 4px;
`
const Label = styled.label`
  color: white;
  font-size: 16px;
  font-weight: 40;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const Input = styled.input`
  color: white;
  background-color: #121825;
  border: 1px solid #313e62;
  border-radius: 8px;
  padding: 16px;

  &::placeholder {
    color: #616d8d;
  }
`
const Error = styled.span`
  color: red;
  font-size: 12px;
`
const Button = styled.button`
  height: 52px;
  border-radius: 8px;
  border: none;
  background-color: #1c64f2;
  box-shadow: 0 1px 1px 0 rgba(255, 255, 255, 40%);
`
