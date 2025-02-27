import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'
import { renameSchema } from './renameSchema'
import { z } from 'zod'

type Inputs = z.infer<typeof renameSchema>

type Props = {
  name: string
  onSubmit(newName: string): void
}

export const ChatRenameInput = ({ name, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(renameSchema),
    defaultValues: {
      newName: name,
    },
  })

  const onSubmitHandler: SubmitHandler<Inputs> = ({ newName }) => {
    onSubmit(newName)
  }

  if (errors.newName) {
    alert(errors.newName.message)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <img src="/chat.svg" alt="chat icon" />

      <Input defaultValue={name} {...register('newName')} />

      <button type="submit">
        <img src="/edit.svg" alt="edit chat name" width={18} height={18} />
      </button>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
`
const Input = styled.input`
  flex: 1;
  border: 2px solid #1c64f2;
  padding: 2px;
  border-radius: 3px;
  color: white;
  background-color: transparent;
`
