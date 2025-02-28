import { addAlert } from '@/entities';
import { useAppDispatch } from '@/shared/hooks';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

type Props = {
  text: string;
};

export const CopyText = ({ text }: Props) => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const copyTextHandler = async () => {
    try {
      await navigator.clipboard.writeText(text);
      dispatch(addAlert({ message: t('CopyText_text_successfully_copied'), type: 'success' }));
    } catch (err) {
      dispatch(addAlert({ message: t('CopyText_copy_error'), type: 'error' }));
    }
  };

  return <Image src="/images/copy.svg" alt="copy text" onClick={copyTextHandler} />;
};

const Image = styled.img`
  cursor: pointer;
`;
