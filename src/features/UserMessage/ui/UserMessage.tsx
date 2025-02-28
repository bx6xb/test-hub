import { CopyText } from '@/shared'
import styled from 'styled-components'

type Props = {
  messageText: string
  time: string
}

export const UserMessage = ({ messageText, time }: Props) => {
  return (
    <UserMessageContainer>
      <CopyText text={messageText} />

      <Message>
        <Time>{time}</Time>
        <MessageText>{messageText}</MessageText>
      </Message>

      <img src="/images/user.svg" alt="user avatar" />
    </UserMessageContainer>
  )
}

const UserMessageContainer = styled.div`
  max-width: 65%;
  display: flex;
  gap: 10px;
  align-items: flex-end;
  align-self: flex-end;
`
const Message = styled.div`
  display: flex;
  gap: 4px;
  align-items: flex-end;
  border-radius: 10px;
  border-bottom-right-radius: 0;
  background-color: rgba(from #4785ff r g b / 50%);
  padding: 14px 53px 14px 16px;
  font-weight: 400;
  position: relative;

  ::selection {
    color: #4785ff;
    background-color: var(--white-color);
  }
`
const MessageText = styled.p`
  font-size: 18px;
  font-weight: 400;
`
const Time = styled.span`
  font-size: 12px;
  position: absolute;
  bottom: 7px;
  right: 8px;
`
