import { FC } from "react"
import { graphql } from "gatsby"

const TokenHolderPageTemplate: FC<any> = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter

  return <>{title}</>
}

export default TokenHolderPageTemplate

export const query = graphql`
  query TokenHolderPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
    }
  }
`
