import { AlertType, removeAlert } from '@/entities'
import { useAppDispatch } from '@/shared'
import { useEffect } from 'react'
import styled from 'styled-components'

export const AlertMessage = ({ id, message, type }: AlertType) => {
  const dispatch = useAppDispatch()

  const removeAlertHandler = () => {
    dispatch(removeAlert(id))
  }

  useEffect(() => {
    const id = setTimeout(() => {
      removeAlertHandler()
    }, 3000)

    return () => clearTimeout(id)
  }, [])

  const isError = type === 'error'

  return (
    <AlertMessageContainer key={id} onClick={removeAlertHandler} $isError={isError}>
      {message}
    </AlertMessageContainer>
  )
}

const AlertMessageContainer = styled.div<{ $isError: boolean }>`
  min-height: 40px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid ${({ $isError }) => ($isError ? 'red' : 'green')};
  background-color: ${({ $isError }) => ($isError ? 'red' : 'green')};
`
