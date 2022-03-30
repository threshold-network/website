import { FC } from "react"
import { graphql } from "gatsby"

const BTCPageTemplate: FC<any> = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter

  return <>{title}</>
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
