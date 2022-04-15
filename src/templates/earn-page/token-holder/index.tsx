import { FC } from "react"
import { graphql } from "gatsby"
import RolePageTemplate from "../RolePageTemplate"
import SectionTemplate from "../../home-page/SectionTemplate"
import { ResponsiveStack } from "../../../components/PageSection"
import SecondaryInfoColumn from "./SecondaryInfoColumn"

const TokenHolderPageTemplate: FC<any> = ({ data }) => {
  const { tokenHolderInfo, secondaryInfo } = data.markdownRemark.frontmatter

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
      }
    }
  }
`
