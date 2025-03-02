import { useAppSelector } from '@/shared';
import { AlertMessage } from './AlertMessage';
import { AlertContainer } from '../styles';

export const Alert = () => {
  const alerts = useAppSelector(state => state.appSlice.alerts);

  return (
    <AlertContainer>
      {alerts.map(alert => (
        <AlertMessage key={alert.id} {...alert} />
      ))}
    </AlertContainer>
  );
};
