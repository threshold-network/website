import { FC } from "react"
import { graphql } from "gatsby"

const StakerPageTemplate: FC<any> = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter

  return <>{title}</>
}

export default StakerPageTemplate

export const query = graphql`
  query StakerPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
    }
  }
`
