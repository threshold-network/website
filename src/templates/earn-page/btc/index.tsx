import { FC } from "react"
import { graphql } from "gatsby"
import RolePageTemplate from "../RolePageTemplate"
import SectionTemplate from "../../home-page/SectionTemplate"

const BTCPageTemplate: FC<any> = ({ data }) => {
  const { btcInfo } = data.markdownRemark.frontmatter

  return (
    <RolePageTemplate>
      <SectionTemplate {...btcInfo} preTitle={null} />
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
      }
    }
  }
`
