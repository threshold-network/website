import { FC } from "react"
import { graphql } from "gatsby"
import SectionTemplate from "../home-page/SectionTemplate"
import { Box } from "@chakra-ui/react"
import { IntegrationsCardGroup } from "../../components/IntegrationCard"
import ProgramsAndEvents from "./ProgramsAndEvents"
import ProjectsAndTools from "./ProjectsAndTools"
import Resources from "./Resources"

const EcosystemPageTemplate: FC = ({ data }: any) => {
  const {
    ecosystemInfo,
    integrations,
    programsAndEventsInfo,
    programsAndEvents,
    projectsAndToolsInfo,
    projectsAndTools,
    resourcesInfo,
    resources,
  } = data.markdownRemark.frontmatter

  return (
    <Box bgColor="gray.900">
      <SectionTemplate
        {...ecosystemInfo}
        image={{ ...ecosystemInfo.image, mr: "28rem", mt: "-3rem", w: "52rem" }}
        preTitle={null}
        columnReverse
        isSmallSize
        isImageBackground
      />
      <IntegrationsCardGroup cards={integrations} />
      <SectionTemplate {...programsAndEventsInfo} isMediumSize>
        <ProgramsAndEvents cards={programsAndEvents} />
      </SectionTemplate>
      <SectionTemplate {...projectsAndToolsInfo} isMediumSize bgColor="#161A1F">
        <ProjectsAndTools cards={projectsAndTools} />
      </SectionTemplate>
      <SectionTemplate
        {...resourcesInfo}
        image={{
          ...ecosystemInfo.image,
          left: 0,
          ml: "4rem",
          mt: "-6rem",
          w: "52rem",
        }}
        isMediumSize
        isImageBackground
      >
        <Resources cards={resources} />
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
        resourcesInfo {
          rowReverse
          preTitle
          title
          description
        }
        resources {
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
          isBigSize
          title
          description
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
