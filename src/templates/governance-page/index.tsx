import { FC } from "react"
import { graphql } from "gatsby"
import SectionTemplate from "../home-page/SectionTemplate"
import { Box } from "@chakra-ui/react"
import ThresholdDaoDataSection from "./ThresholdDaoDataSection"

const GovernancePageTemplate: FC<any> = ({ data }) => {
  const { governanceInfo } = data.markdownRemark.frontmatter

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
  }
`
