import { FC } from "react"
import { graphql } from "gatsby"

const FAQPageTemplate: FC<any> = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter

  return <>{title}</>
}

export default FAQPageTemplate

export const query = graphql`
  query FAQPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
    }
  }
`
