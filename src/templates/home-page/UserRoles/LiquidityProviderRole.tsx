import React, { FC } from "react"
import RoleTemplate, { RoleTemplateProps } from "./RoleTemplate"

const LiquidityProviderRole: FC<RoleTemplateProps> = ({
  title,
  description,
  image,
  footerButtons,
  rowReverse,
  bgColor,
}) => {
  return (
    <RoleTemplate
      bgColor={bgColor}
      title={title}
      description={description}
      footerButtons={footerButtons}
      image={image}
      rowReverse={rowReverse}
    />
  )
}

export default LiquidityProviderRole
