import { AlertType, removeAlert } from '@/entities';
import { useAppDispatch } from '@/shared';
import { useEffect, useState } from 'react';
import { AlertMessageContainer, Close, Message } from '../../styles';

export const AlertMessage = ({ id, message, type }: AlertType) => {
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useAppDispatch();

  const removeAlertHandler = () => {
    setIsVisible(false);
    setTimeout(() => dispatch(removeAlert(id)), 500);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      removeAlertHandler();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
  );
};
