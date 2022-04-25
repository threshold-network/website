import { FC } from "react"
import { graphql } from "gatsby"
import { SimpleGrid } from "@chakra-ui/react"
import { PageSection } from "../../components/PageSection"
import { H2, H5, ImageProps } from "../../components"
import PressCard from "./PressCard"
import FeaturedIn from "./FeaturedIn"

const PressPageTemplate: FC<any> = ({ data }) => {
  const { title, subTitle, featuredPress } = data.markdownRemark.frontmatter
  console.log(data.markdownRemark.frontmatter)

  return (
    <PageSection bg="gray.900">
      <H2>{title}</H2>
      <H5 color="gray.300">{subTitle}</H5>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={8}>
        {featuredPress.pressArticles.map((article: any) => (
          <PressCard {...article} />
        ))}
      </SimpleGrid>
      <FeaturedIn
        pressImages={featuredPress.featuredIn.map(
          ({ image }: { image: ImageProps }) => image
        )}
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
