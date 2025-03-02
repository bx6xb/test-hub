import { addAlert } from '@/entities';
import { useAppDispatch } from '@/shared';
import { useTranslation } from 'react-i18next';
import { Image } from './styles';

type Props = {
  text: string;
};

export const CopyText = ({ text }: Props) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

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
