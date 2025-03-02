import { useEffect, useState } from 'react';
import { Image, PreloaderContainer } from './styles';

export const Preloader = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsAppLoading(false);
    }, 1000);

    return () => clearTimeout(id);
  }, []);

  return (
    <PreloaderContainer $isHidden={!isAppLoading}>
      <Image src="/images/gpt.svg" alt="preloader" />
    </PreloaderContainer>
  );
};
