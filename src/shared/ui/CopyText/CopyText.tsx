import { addAlert } from '@/entities'
import { useAppDispatch } from '@/shared/hooks'
import styled from 'styled-components'

type Props = {
  text: string
}

export const CopyText = ({ text }: Props) => {
  const dispatch = useAppDispatch()

  const copyTextHandler = async () => {
    try {
      await navigator.clipboard.writeText(text)
      dispatch(addAlert({ message: 'Текст скопирован!', type: 'success' }))
    } catch (err) {
      dispatch(addAlert({ message: 'Ошибка копирования!', type: 'error' }))
    }
  }

  return <Image src="/images/copy.svg" alt="copy text" onClick={copyTextHandler} />
}

const Image = styled.img`
  cursor: pointer;
`
