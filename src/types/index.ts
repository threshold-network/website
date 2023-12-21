import { CardButton, ImageProps } from "../components"

export interface SectionInfo {
  title: string
  description: string
  preTitle?: string
  highlightedWord?: string
  buttons?: CardButton[]
  icon?: ImageProps
  image?: ImageProps
  rowReversedw: boolean
}
