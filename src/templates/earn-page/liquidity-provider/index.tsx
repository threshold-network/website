import { FC } from "react"
import { graphql } from "gatsby"
import RolePageTemplate from "../RolePageTemplate"
import SectionTemplate from "../../home-page/SectionTemplate"
import { H4 } from "../../../components"
import { LPCardGroup } from "../../../components/LPCard"
import { Box } from "@chakra-ui/react"

const LiquidityProviderPageTemplate: FC<any> = ({ data }) => {
  const { lpInfo, interestedPools } = data.markdownRemark.frontmatter

  return (
    <RolePageTemplate>
      <SectionTemplate {...lpInfo} preTitle={null} columnReverse size="sm" />
      <Box>
        <H4 color="gray.300">Pools you may be interested in</H4>
        <LPCardGroup cards={interestedPools} />
      </Box>
    </RolePageTemplate>
  )
}

export default LiquidityProviderPageTemplate

export const query = graphql`
  query LiquidityProviderPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        lpInfo {
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
          title
          subTitle
          buttonText
          buttonUrl
        }
      }
    }
  }
`
