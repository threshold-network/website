import { FC } from "react"
import { graphql } from "gatsby"
import RolePageTemplate from "../RolePageTemplate"
import SectionTemplate from "../../home-page/SectionTemplate"
import { PageSection } from "../../../components/PageSection"
import { H3 } from "../../../components"
import { SimpleGrid } from "@chakra-ui/react"
import LPCard from "../../../components/LPCard"

const LiquidityProviderPageTemplate: FC<any> = ({ data }) => {
  const { lpInfo, interestedPools } = data.markdownRemark.frontmatter

  return (
    <RolePageTemplate>
      <SectionTemplate {...lpInfo} preTitle={null} columnReverse isSmallSize />
      <PageSection withSmallPadding>
        <H3 color="gray.300">Pools you may be interested in</H3>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={6}>
          {interestedPools.map((pool: any, i) => (
            <LPCard key={i} {...pool} />
          ))}
        </SimpleGrid>
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
