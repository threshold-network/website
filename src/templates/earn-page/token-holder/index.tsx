import { FC } from "react"
import { graphql } from "gatsby"
import { Box } from "@chakra-ui/react"
import RolePageTemplate from "../RolePageTemplate"
import SectionTemplate from "../../home-page/SectionTemplate"
import { ResponsiveStack } from "../../../components/PageSection"
import SecondaryInfoColumn from "./SecondaryInfoColumn"
import { LPCardGroup } from "../../../components/LPCard"
import { H4 } from "../../../components"

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
        size="sm"
      />
      <ResponsiveStack spacing={12} mt={12}>
        <SecondaryInfoColumn {...secondaryInfo.left} />
        <SecondaryInfoColumn {...secondaryInfo.right} />
      </ResponsiveStack>
      <Box mt={20}>
        <H4 color="gray.300">Pools you may be interested in</H4>
        <LPCardGroup cards={interestedPools} />
      </Box>
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
          title
          buttonText
          buttonUrl
        }
      }
    }
  }
`
