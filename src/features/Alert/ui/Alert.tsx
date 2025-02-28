import { useAppSelector } from '@/shared';
import styled from 'styled-components';
import { AlertMessage } from './AlertMessage';

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

const AlertContainer = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 20px;
`;
