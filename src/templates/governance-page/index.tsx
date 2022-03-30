import { FC } from "react"
import { graphql } from "gatsby"

const GovernancePageTemplate: FC<any> = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter

  return <>{title}</>
}

export default GovernancePageTemplate

export const query = graphql`
  query GovernancePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
    }
  }
`
