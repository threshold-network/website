import { FC } from "react"
import { graphql } from "gatsby"

const LiquidityProviderPageTemplate: FC<any> = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter

  return <>{title}</>
}

export default LiquidityProviderPageTemplate

export const query = graphql`
  query LiquidityProviderPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
    }
  }
`
