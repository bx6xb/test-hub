import styled from 'styled-components'

type Props = {
  text: string
}

export const CopyText = ({ text }: Props) => {
  const copyTextHandler = async () => {
    try {
      await navigator.clipboard.writeText(text)
      alert('Текст скопирован!')
    } catch (err) {
      alert('Ошибка копирования!')
    }
  }

  return <Image src="/copy.svg" alt="copy text" onClick={copyTextHandler} />
}

const Image = styled.img`
  cursor: pointer;
`
