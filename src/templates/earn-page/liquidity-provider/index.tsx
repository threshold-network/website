import { FC } from "react"
import { graphql } from "gatsby"
import RolePageTemplate from "../RolePageTemplate"
import SectionTemplate from "../../home-page/SectionTemplate"
import { PageSection } from "../../../components/PageSection"
import { H3 } from "../../../components"
import { LPCardGroup } from "../../../components/LPCard"

const LiquidityProviderPageTemplate: FC<any> = ({ data }) => {
  const { lpInfo, interestedPools } = data.markdownRemark.frontmatter

  return (
    <RolePageTemplate>
      <SectionTemplate {...lpInfo} preTitle={null} columnReverse isSmallSize />
      <PageSection withSmallPadding>
        <H3 color="gray.300">Pools you may be interested in</H3>
        <LPCardGroup cards={interestedPools} />
      </PageSection>
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
