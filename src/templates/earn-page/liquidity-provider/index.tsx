import { FC } from "react"
import { graphql } from "gatsby"
import RolePageTemplate from "../RolePageTemplate"
import SectionTemplate from "../../home-page/SectionTemplate"

const LiquidityProviderPageTemplate: FC<any> = ({ data }) => {
  const { lpInfo } = data.markdownRemark.frontmatter

  console.log("lp info ", lpInfo)

  return (
    <RolePageTemplate>
      <SectionTemplate {...lpInfo} />
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
      }
    }
  }
`
