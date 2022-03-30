import { FC } from "react"
import { graphql } from "gatsby"

const AboutPageTemplate: FC<any> = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter
  return <>{title}</>
}

export default AboutPageTemplate

export const query = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
    }
  }
`
