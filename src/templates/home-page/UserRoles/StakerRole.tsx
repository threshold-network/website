import React, { FC } from "react"
import RoleTemplate, { FooterButton } from "./RoleTemplate"
import { ImageProps } from "../../../components"

interface StakerRoleProps {
  title: string
  description: string
  image: ImageProps
  buttons: FooterButton[]
}

const StakerRole: FC<StakerRoleProps> = ({
  title,
  description,
  image,
  buttons,
}) => {
  return (
    <RoleTemplate
      bgColor="gray.900"
      title={title}
      description={description}
      footerButtons={buttons}
      image={image}
    />
  )
}

export default StakerRole
