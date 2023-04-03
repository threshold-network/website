import { FC } from "react"
import { graphql } from "gatsby"
import { PageSection } from "../../components/PageSection"
import { H2, H3, H5, ImageProps } from "../../components"
import FeaturedPress from "./FeaturedPress"
import FeaturedIn from "./FeaturedIn"
import BlogPosts from "./BlogPosts"

const PressPageTemplate: FC<any> = ({ data }) => {
  const {
    title,
    subTitle,
    featuredPress: { pressArticles, featuredIn },
  } = data.markdownRemark.frontmatter

  console.log("data", data)

  return (
    <PageSection bg="gray.900">
      <H2>{title}</H2>
      <H5
        mt={8}
        color="gray.300"
        dangerouslySetInnerHTML={{ __html: subTitle }}
      />
      <H3 fontWeight={600} mt={16} color="gray.50">
        Featured Press
      </H3>
      <FeaturedPress pressArticles={pressArticles} />
      <FeaturedIn
        pressImages={featuredIn.map(
          ({ image }: { image: ImageProps }) => image
        )}
      />
      <BlogPosts
        title={"Blog Highlights"}
        subTitle={"Hand Selected posts by the Threshold team."}
      />
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
            date
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
