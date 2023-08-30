import { FC } from "react"
import { graphql } from "gatsby"
import SectionTemplate from "../home-page/SectionTemplate"
import { Box } from "@chakra-ui/react"
import { IntegrationsCardGroup } from "../../components/IntegrationCard"
import ProgramsAndEvents from "./ProgramsAndEvents"
import ProjectsAndTools from "./ProjectsAndTools"

const EcosystemPageTemplate: FC = ({ data }: any) => {
  const {
    ecosystemInfo,
    integrations,
    programsAndEventsInfo,
    programsAndEvents,
    projectsAndToolsInfo,
    projectsAndTools,
  } = data.markdownRemark.frontmatter

  return (
    <Box>
      <SectionTemplate
        {...ecosystemInfo}
        image={{ ...ecosystemInfo.image, mr: "28rem", mt: "-3rem", w: "52rem" }}
        preTitle={null}
        columnReverse
        bgColor="gray.900"
        isSmallSize
        isImageBackground
      />
      <IntegrationsCardGroup cards={integrations} />
      <SectionTemplate
        {...programsAndEventsInfo}
        isMediumSize
        bgColor="gray.900"
      >
        <ProgramsAndEvents cards={programsAndEvents} />
      </SectionTemplate>
      <SectionTemplate {...projectsAndToolsInfo} isMediumSize bgColor="#161A1F">
        <ProjectsAndTools cards={projectsAndTools} />
      </SectionTemplate>
    </Box>
  )
}

export default EcosystemPageTemplate

export const query = graphql`
  query EcosystemPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        ecosystemInfo {
          rowReverse
          title
          highlightedWord
          description
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
        integrations {
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
          title
        }
        programsAndEventsInfo {
          rowReverse
          preTitle
          title
          description
        }
        programsAndEvents {
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
          title
          description
          url
        }
        projectsAndToolsInfo {
          rowReverse
          preTitle
          title
          description
        }
        projectsAndTools {
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
          title
          description
          categories {
            label
          }
          timestamp
          buttons {
            label
            url
            variant
          }
        }
      }
    }
  }
`
