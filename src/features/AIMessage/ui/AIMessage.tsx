import { CopyText } from '@/shared'
import styled from 'styled-components'

export const AIMessage = () => {
  const aimodel = 'ChatGPT'
  const aiversion = 'gpt-3.5-turbo'
  const messageText = 'Привет! Чем я могу помочь?'
  const time = '9:30'

  return (
    <AIMessageContainer>
      <AIModel>
        {aimodel}
        <AIVersion>{aiversion}</AIVersion>
      </AIModel>

      <Message>
        <img src="/ChatGPT.svg" alt="chat gpt" width={40} height={40} />
        <MessageText>{messageText}</MessageText>
      </Message>

      <CopyAndTime>
        <Copy>
          -223 CAPS
          <CopyText text={messageText} />
        </Copy>

        {time}
      </CopyAndTime>
    </AIMessageContainer>
  )
}

const AIMessageContainer = styled.div`
  max-width: 65%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const AIModel = styled.div`
  width: 294px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 400;
`
const AIVersion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222b44;
  border-radius: 14px;
  padding: 4px 12px;
  font-size: 14px;
  font-weight: 50;
`
const Message = styled.div`
  display: flex;
  gap: 16px;
`
const MessageText = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-top: 8px;
`
const CopyAndTime = styled.div`
  width: 294px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 98px;
  font-size: 12px;
  font-weight: 400;
`
const Copy = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  color: #9ca3af;
  font-size: 16px;
  font-weight: 400;
`
