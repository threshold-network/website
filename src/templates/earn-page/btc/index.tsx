import { FC } from "react"
import { graphql } from "gatsby"
import RolePageTemplate from "../RolePageTemplate"

const BTCPageTemplate: FC<any> = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter

  return <RolePageTemplate>{title}</RolePageTemplate>
}

export default BTCPageTemplate

export const query = graphql`
  query BTCPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
    }
  }
`
