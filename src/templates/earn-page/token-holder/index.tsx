import { FC } from "react"
import { graphql } from "gatsby"
import RolePageTemplate from "../RolePageTemplate"
import SectionTemplate from "../../home-page/SectionTemplate"
import { PageSection, ResponsiveStack } from "../../../components/PageSection"
import SecondaryInfoColumn from "./SecondaryInfoColumn"
import { SimpleGrid } from "@chakra-ui/react"
import LPCard from "../../../components/LPCard"
import { H3 } from "../../../components"

const TokenHolderPageTemplate: FC<any> = ({ data }) => {
  const { tokenHolderInfo, secondaryInfo, interestedPools } =
    data.markdownRemark.frontmatter

  console.log(data.markdownRemark.frontmatter)

  return (
    <RolePageTemplate>
      <SectionTemplate
        {...tokenHolderInfo}
        preTitle={null}
        columnReverse
        isSmallSize
      />
      <ResponsiveStack spacing={12}>
        <SecondaryInfoColumn {...secondaryInfo.left} />
        <SecondaryInfoColumn {...secondaryInfo.right} />
      </ResponsiveStack>
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

export default TokenHolderPageTemplate

export const query = graphql`
  query TokenHolderRolePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        tokenHolderInfo {
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
        secondaryInfo {
          left {
            label
            title
            description
            buttons {
              label
              url
              variant
            }
          }
          right {
            label
            title
            description
            buttons {
              label
              url
              variant
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
