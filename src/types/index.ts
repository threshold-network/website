import { CardButton, ImageProps } from "../components"

export interface SectionInfo {
  title: string
  description: string
  preTitle?: string
  highlightedWord?: string
  buttons?: CardButton[]
  icon?: ImageProps
  image?: ImageProps
  rowReverse?: boolean
}

export type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property]
}
