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

  return <img src="/copy.svg" alt="copy text" onClick={copyTextHandler} />
}
