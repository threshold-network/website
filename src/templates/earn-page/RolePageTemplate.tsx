import { FC } from "react"
import TakeTheQuizBanner from "../../components/TakeTheQuizBanner"
import RolesNav from "./RolesNav"
import { PageSection } from "../../components/PageSection"

const RolePageTemplate: FC = ({ children }) => {
  return (
    <PageSection bg="gray.900" withSmallPadding>
      <TakeTheQuizBanner />
      <RolesNav />
      {children}
    </PageSection>
  )
}

export default RolePageTemplate
