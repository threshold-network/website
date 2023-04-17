import { FC } from "react"
import { graphql } from "gatsby"
import { Box } from "@chakra-ui/react"
import RolePageTemplate from "../RolePageTemplate"
import SectionTemplate from "../../home-page/SectionTemplate"
import { H4 } from "../../../components"
import { LPCardGroup } from "../../../components/LPCard"

const BTCPageTemplate: FC<any> = ({ data }) => {
  const { btcInfo, interestedPools } = data.markdownRemark.frontmatter

  return (
    <RolePageTemplate>
      <SectionTemplate {...btcInfo} preTitle={null} columnReverse isSmallSize />
      <Box mt={12}>
        <H4 color="gray.300">Pools you may be interested in</H4>
        <LPCardGroup cards={interestedPools} />
      </Box>
    </RolePageTemplate>
  )
}

export default BTCPageTemplate

export const query = graphql`
  query BtcRolePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        btcInfo {
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
            posthogLabel
          }
        }
        interestedPools {
          image1 {
            id
            relativePath
            internal {
              mediaType
            }
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
          image2 {
            id
            relativePath
            internal {
              mediaType
            }
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
          title
          subTitle
          buttonText
          buttonUrl
        }
      }
    }
  }
`
