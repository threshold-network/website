import { FC } from "react"
import RolesNav from "./RolesNav"
import { PageSection } from "../../components/PageSection"

const RolePageTemplate: FC = ({ children }) => {
  return (
    <PageSection bg="gray.900" withSmallPadding>
      <RolesNav />
      {children}
    </PageSection>
  )
}

export default RolePageTemplate
