import { FC } from "react"
import { graphql } from "gatsby"
import RolePageTemplate from "../RolePageTemplate"
import SectionTemplate from "../../home-page/SectionTemplate"
import { H3 } from "../../../components"
import { SimpleGrid } from "@chakra-ui/react"
import LPCard from "../../../components/LPCard"
import { PageSection } from "../../../components/PageSection"

const BTCPageTemplate: FC<any> = ({ data }) => {
  const { btcInfo, interestedPools } = data.markdownRemark.frontmatter

  return (
    <RolePageTemplate>
      <SectionTemplate {...btcInfo} preTitle={null} columnReverse isSmallSize />
      <PageSection>
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
