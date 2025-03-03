import { useAppSelector } from '@/shared';
import { AlertMessage } from './AlertMessage';
import { AlertContainer } from '../styles';
import { selectAlerts } from '@/entities';

export const Alert = () => {
  const alerts = useAppSelector(selectAlerts);

  return (
    <AlertContainer>
      {alerts.map(alert => (
        <AlertMessage key={alert.id} {...alert} />
      ))}
    </AlertContainer>
  );
};
