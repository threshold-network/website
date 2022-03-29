import React, { FC } from "react"
import RoleTemplate, { RoleTemplateProps } from "./RoleTemplate"

const StakerRole: FC<RoleTemplateProps> = ({
  title,
  description,
  image,
  buttons,
  rowReverse,
  bgColor,
}) => {
  return (
    <RoleTemplate
      bgColor={bgColor}
      title={title}
      description={description}
      buttons={buttons}
      image={image}
      rowReverse={rowReverse}
    />
  )
}

export default StakerRole
