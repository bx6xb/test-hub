import { CopyText, Nullable } from '@/shared';
import { Message, MessageText, Time, UserAvatar, UserMessageContainer } from '../styles';

type Props = {
  messageText: Nullable<string>;
  time: string;
};

export const UserMessage = ({ messageText, time }: Props) => {
  const text = messageText || '';

  return (
    <UserMessageContainer>
      <CopyText text={text} />

      <Message>
        <Time>{time}</Time>
        <MessageText>{text}</MessageText>
      </Message>

      <UserAvatar src="/images/user.svg" alt="user avatar" />
    </UserMessageContainer>
  );
};
