import { FC } from "react"
import { graphql } from "gatsby"

const AuditsPageTemplate: FC<any> = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter

  return <>{title}</>
}

export default AuditsPageTemplate

export const query = graphql`
  query AuditsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
    }
  }
`
