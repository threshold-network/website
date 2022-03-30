import { FC } from "react"
import { graphql } from "gatsby"

const EarnPageTemplate: FC<any> = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter

  return <>{title}</>
}

export default EarnPageTemplate

export const query = graphql`
  query EarnPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
    }
  }
`
