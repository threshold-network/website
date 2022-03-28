import React, { FC } from "react"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import RoleTemplate, { RoleTemplateProps } from "./RoleTemplate"
import btcRole from "../../../static/images/btc-role.png"

const TokenHolderRole: FC<RoleTemplateProps> = ({
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

export default TokenHolderRole
