import { FC } from "react"
import { graphql } from "gatsby"
import SectionTemplate from "../home-page/SectionTemplate"
import { Box } from "@chakra-ui/react"

const EcosystemPageTemplate: FC = ({ data }: any) => {
  const { ecosystemInfo } = data.markdownRemark.frontmatter

  return (
    <Box>
      <SectionTemplate
        {...ecosystemInfo}
        preTitle={null}
        columnReverse
        bgColor="gray.900"
        isSmallSize
        isImageBackground
      />
    </Box>
  )
}

export default EcosystemPageTemplate

export const query = graphql`
  query EcosystemPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        ecosystemInfo {
          rowReverse
          title
          highlightedWord
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
        }
      }
    }
  }
`
