import { FC } from "react"
import { graphql } from "gatsby"
import { Footer } from "../components"

const HomePageTemplate: FC<any> = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { hero },
    },
  } = data
  return (
    <>
      <main>
        <h1>{hero.title}</h1>
        <p>{hero.body}</p>
      </main>
      <Footer />
    </>
  )
}

export const query = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        hero {
          title
          body
        }
      }
    }
  }
`

export default HomePageTemplate
