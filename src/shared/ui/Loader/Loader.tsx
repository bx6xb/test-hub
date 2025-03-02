import { PulseLoader } from 'react-spinners';
import { LoaderContainer } from './styles';

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
