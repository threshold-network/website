import { FC } from "react"
import { graphql } from "gatsby"
import SectionTemplate from "../home-page/SectionTemplate"
import { Box } from "@chakra-ui/react"
import ContributingTeamsSection from "./ContributingTeamsSection"

const FAQPageTemplate: FC<any> = ({ data }) => {
  const { aboutInfo, teamsSection } = data.markdownRemark.frontmatter
  console.log("tea ", teamsSection)

  return (
    <Box>
      <SectionTemplate
        {...aboutInfo}
        preTitle={null}
        columnReverse
        bgColor="gray.900"
      />
      <ContributingTeamsSection {...teamsSection} />
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
        teamsSection {
          title
          left {
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
            description
            buttons {
              label
              url
              variant
            }
          }
          right {
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
            description
            buttons {
              label
              url
              variant
            }
          }
        }
      }
    }
  }
`
