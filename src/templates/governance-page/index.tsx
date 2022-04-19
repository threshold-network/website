import { FC } from "react"
import { graphql } from "gatsby"
import SectionTemplate from "../home-page/SectionTemplate"
import { Box } from "@chakra-ui/react"
import ThresholdDaoDataSection from "./ThresholdDaoDataSection"
import DaoGovernanceDetails from "./DaoGovernanceDetails"
import ProposalsSection from "./DaoGovernanceDetails/ProposalsSection"

const GovernancePageTemplate: FC<any> = ({ data }) => {
  const { governanceInfo } = data.markdownRemark.frontmatter
  const proposals = data.allProposals

  return (
    <Box>
      <SectionTemplate
        {...governanceInfo}
        preTitle={null}
        columnReverse
        bgColor="gray.900"
        isSmallSize
      />
      <ThresholdDaoDataSection />
      <DaoGovernanceDetails proposals={proposals} />
    </Box>
  )
}

export default GovernancePageTemplate

export const query = graphql`
  query GovernancePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        governanceInfo {
          rowReverse
          title
          description
          image {
            id
            relativePath
            internal {
              mediaType
            }
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
          buttons {
            label
            url
            variant
          }
        }
      }
    }
    allProposals {
      id
      title
      content {
        raw
        html
      }
      createdBy
      createdAt
      url
    }
  }
`
