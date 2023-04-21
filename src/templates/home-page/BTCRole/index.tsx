import { FC } from "react"
import SectionTemplate, { RoleTemplateProps } from "../SectionTemplate"
import { TBTCPartnerImage, TBTCPartners } from "./tBTCPartners"

interface BTCRoleProps {
  minters: TBTCPartnerImage[]
  guardians: TBTCPartnerImage[]
}

export const BTCRole: FC<RoleTemplateProps & BTCRoleProps> = ({
  minters,
  guardians,
  ...props
}) => {
  return (
    <>
      <SectionTemplate {...props}>
        <TBTCPartners minters={minters} guardians={guardians} mt={"6rem"} />
      </SectionTemplate>
    </>
  )
}
