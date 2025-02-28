import { AlertType, removeAlert } from '@/entities'
import { useAppDispatch } from '@/shared'
import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

export const AlertMessage = ({ id, message, type }: AlertType) => {
  const dispatch = useAppDispatch()
  const [isVisible, setIsVisible] = useState(true)

  const removeAlertHandler = () => {
    setIsVisible(false)
    setTimeout(() => dispatch(removeAlert(id)), 500)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      removeAlertHandler()
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AlertMessageContainer $isError={type === 'error'} $isVisible={isVisible}>
      <img
        src={`/images${type === 'error' ? '/cross.svg' : '/tick.svg'}`}
        alt={type === 'error' ? 'cross' : 'tick'}
        width={26}
        height={26}
      />

      <Message>{message}</Message>

      <Close type="button" onClick={removeAlertHandler}>
        X
      </Close>
    </AlertMessageContainer>
  )
}

// animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
    max-height: 100px;
    margin-bottom: 10px;
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
    max-height: 0;
    margin-bottom: 0;
  }
`

// styles
const AlertMessageContainer = styled.div<{ $isError: boolean; $isVisible: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  min-height: 40px;
  padding: 20px 30px;
  border-radius: 40px;
  background-color: var(--secondary-color);
  border: 2px solid var(--primary-color);

  opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};
  margin-bottom: ${({ $isVisible }) => ($isVisible ? '10px' : '0')};

  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : fadeOut)} 0.4s ease-out;
  transition:
    max-height 0.4s ease-out,
    opacity 0.4s ease-out,
    margin-bottom 0.4s ease-out;
`
const Message = styled.span`
  flex: 1;
`
const Close = styled.button`
  font-weight: 600;
`
