import { PulseLoader } from 'react-spinners';
import styled from 'styled-components';

type Props = {
  loaderSize?: number;
};

export const Loader = ({ loaderSize }: Props) => {
  return (
    <LoaderContainer>
      <PulseLoader color="var(--primary-color)" loading speedMultiplier={1.5} size={loaderSize} />
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
