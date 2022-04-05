import { FC } from "react"
import TakeTheQuizBanner from "../../components/TakeTheQuizBanner"
import RolesNav from "./RolesNav"
import { PageSection } from "../../components/PageSection"
import { useQuizModal } from "../../contexts/QuizModalContext"

const RolePageTemplate: FC = ({ children }) => {
  return (
    <PageSection bg="gray.900" pt={{ base: 0, md: 16 }}>
      <TakeTheQuizBanner />
      <RolesNav mt={8} />
      {children}
    </PageSection>
  )
}

export default RolePageTemplate
