import { ArrowContainer } from './styles';

type Props = {
  isArrowUp: boolean;
};

export const Arrow = ({ isArrowUp }: Props) => {
  return <ArrowContainer src="/images/arrow-up.svg" alt="arrow" $isArrowUp={isArrowUp} />;
};
