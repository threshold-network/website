import React, { FC } from "react"
import { BoxProps } from "@chakra-ui/react"
import { ImageProps } from "../../components"
import SectionTemplate from "./SectionTemplate"
import InfoColumnsStack from "../../components/InfoColumnsStack"

export interface SubItem {
  description: string
  image: ImageProps
  title: string
}

interface ButtonInfo {
  label: string
  url: string
  variant: string
}

interface InfoColumnsSectionProps extends BoxProps {
  buttons: ButtonInfo[]
  description: string
  subitems: SubItem[]
  title: string
  bgColor: string
  image?: ImageProps
}

const InfoColumnsSection: FC<InfoColumnsSectionProps> = ({
  title,
  description,
  subitems,
  buttons,
  image,
  bgColor,
  ...boxProps
}) => {
  return (
    <SectionTemplate
      title={title}
      description={description}
      image={image}
      buttons={buttons}
      bgColor={bgColor}
      {...boxProps}
    >
      <InfoColumnsStack subitems={subitems} />
    </SectionTemplate>
  )
}

export default InfoColumnsSection
