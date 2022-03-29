import React, { FC } from "react"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import RoleTemplate, { RoleTemplateProps } from "./RoleTemplate"
import btcRole from "../../../static/images/btc-role.png"

const BtcRole: FC<RoleTemplateProps> = ({
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

export default BtcRole
