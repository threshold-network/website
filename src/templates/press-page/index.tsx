import { FC } from "react"
import { graphql } from "gatsby"
import { PageSection } from "../../components/PageSection"
import { H2, H5, ImageProps } from "../../components"
import FeaturedPress from "./FeaturedPress"
import FeaturedIn from "./FeaturedIn"
import BlogPosts from "./BlogPosts"

const PressPageTemplate: FC<any> = ({ data }) => {
  const {
    title,
    subTitle,
    featuredPress: { pressArticles, featuredIn },
  } = data.markdownRemark.frontmatter

  return (
    <PageSection bg="gray.900">
      <H2>{title}</H2>
      <H5 color="gray.300">{subTitle}</H5>
      <FeaturedPress pressArticles={pressArticles} />
      <FeaturedIn
        pressImages={featuredIn.map(
          ({ image }: { image: ImageProps }) => image
        )}
      />
      <BlogPosts />
    </PageSection>
  )
}

export default PressPageTemplate

export const query = graphql`
  query PressPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        subTitle
        featuredPress {
          title
          pressArticles {
            title
            subTitle
            description
            url
            image {
              id
              relativePath
              internal {
                mediaType
              }
              childImageSharp {
                gatsbyImageData(width: 200)
              }
            }
          }
          featuredIn {
            image {
              id
              relativePath
              internal {
                mediaType
              }
              childImageSharp {
                gatsbyImageData(width: 200)
              }
            }
          }
        }
      }
    }
  }
`
