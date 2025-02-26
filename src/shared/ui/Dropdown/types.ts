import { ReactNode } from 'react'

export type Position = {
  top?: string
  right?: string
  bottom?: string
  left?: string
}

type Option = {
  id: string
  label: ReactNode
}

export type Props = {
  options: Option[]
  children: ReactNode
  selected: string
  getModalState?: (isOpen: boolean) => void
  onOptionChange(index: string): void
} & Position
