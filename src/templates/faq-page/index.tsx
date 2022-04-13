import { FC } from "react"
import { graphql } from "gatsby"
import SectionTemplate from "../home-page/SectionTemplate"
import { Box } from "@chakra-ui/react"

const FAQPageTemplate: FC<any> = ({ data }) => {
  const { aboutInfo } = data.markdownRemark.frontmatter

  return (
    <Box>
      <SectionTemplate
        {...aboutInfo}
        preTitle={null}
        columnReverse
        bgColor="gray.900"
      />
    </Box>
  )
}

export default FAQPageTemplate

export const query = graphql`
  query FaqPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        aboutInfo {
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
