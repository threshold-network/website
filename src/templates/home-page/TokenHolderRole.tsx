import React, { FC } from "react"
import { ExternalLinkHref } from "../../components/Navbar/types"
import SectionTemplate, { RoleTemplateProps } from "./SectionTemplate"
import btcRole from "../../static/images/btc-role.png"

const TokenHolderRole: FC<RoleTemplateProps> = ({
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

export default TokenHolderRole
