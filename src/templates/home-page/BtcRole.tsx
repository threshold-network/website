import React, { FC } from "react"
import SectionTemplate, { RoleTemplateProps } from "./SectionTemplate"

const BtcRole: FC<RoleTemplateProps> = ({
  title,
  description,
  image,
  buttons,
  rowReverse,
  bgColor,
}) => {
  return (
    <SectionTemplate
      bgColor={bgColor}
      title={title}
      description={description}
      buttons={buttons}
      image={image}
      rowReverse={rowReverse}
    />
  )
}

export default BtcRole
