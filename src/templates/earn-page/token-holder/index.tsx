import { FC } from "react"
import { graphql } from "gatsby"
import RolePageTemplate from "../RolePageTemplate"
import SectionTemplate from "../../home-page/SectionTemplate"

const TokenHolderPageTemplate: FC<any> = ({ data }) => {
  const { tokenHolderInfo } = data.markdownRemark.frontmatter

  return (
    <RolePageTemplate>
      <SectionTemplate {...tokenHolderInfo} preTitle={null} />
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
      }
    }
  }
`
