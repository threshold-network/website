import { FC } from "react"
import { graphql } from "gatsby"
import SectionTemplate from "../home-page/SectionTemplate"
import { Box } from "@chakra-ui/react"
import { IntegrationsCardGroup } from "../../components/IntegrationCard"
import ProgramsAndEvents from "./ProgramsAndEvents"
import ProjectsAndTools from "./ProjectsAndTools"
import ResourcesSection from "./ResourcesSection"
import CommunitySection from "./CommunitySection"

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
    communityInfo,
    community,
  } = data.markdownRemark.frontmatter

  return (
    <Box bgColor="gray.900">
      <SectionTemplate
        {...ecosystemInfo}
        image={{
          ...ecosystemInfo.image,
          right: 0,
          mr: "32rem",
          mt: "-3rem",
          w: "52rem",
        }}
        preTitle={null}
        columnReverse
        size="sm"
        isImageBackground
      />
      <IntegrationsCardGroup cards={integrations} />
      <SectionTemplate {...programsAndEventsInfo} size="md">
        <ProgramsAndEvents cards={programsAndEvents} />
      </SectionTemplate>
      <SectionTemplate {...projectsAndToolsInfo} size="md" bgColor="#161A1F">
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
        size="md"
        isImageBackground
      >
        <ResourcesSection cards={resources} />
      </SectionTemplate>
      <SectionTemplate {...communityInfo} preTitle="" size="sm" isCentered>
        <CommunitySection cards={community} />
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
          date
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
        communityInfo {
          rowReverse
          title
          description
        }
        community {
          leftIcon {
            id
            relativePath
            internal {
              mediaType
            }
            svg {
              name
              attributes {
                key
                value
              }
              children {
                name
                type
                value
                attributes {
                  key
                  value
                }
              }
            }
          }
          rightIcon {
            id
            relativePath
            internal {
              mediaType
            }
            svg {
              name
              attributes {
                key
                value
              }
              children {
                name
                type
                value
                attributes {
                  key
                  value
                }
              }
            }
          }
          title
          description
          url
        }
      }
    }
  }
`
