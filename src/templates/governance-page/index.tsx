import { FC } from "react"
import { graphql } from "gatsby"
import SectionTemplate from "../home-page/SectionTemplate"
import { Box } from "@chakra-ui/react"
import ThresholdDaoDataSection from "./ThresholdDaoDataSection"
import DaoGovernanceDetails from "./DaoGovernanceDetails"
import GuildsSection from "./GuildsSection"
import MigrationInfoSection from "./MigrationInfoSection"

const GovernancePageTemplate: FC = ({ data }: any) => {
  const { governanceInfo, guildsInfo, migrationInfo } =
    data.markdownRemark.frontmatter
  const proposals = data.allProposals

  return (
    <Box>
      <SectionTemplate
        {...governanceInfo}
        preTitle={null}
        columnReverse
        bgColor="gray.900"
        isSmallSize
      />
      <ThresholdDaoDataSection />
      <DaoGovernanceDetails proposals={proposals} />
      <GuildsSection {...guildsInfo} />
      <MigrationInfoSection {...migrationInfo} />
    </Box>
  )
}

export default GovernancePageTemplate

export const query = graphql`
  query GovernancePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        governanceInfo {
          rowReverse
          title
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
          buttons {
            label
            url
            variant
          }
        }
        guildsInfo {
          heroSection {
            title
            description
            buttons {
              label
              url
              variant
            }
            guildStats {
              value
              label
            }
          }
          guildCards {
            title
            description
            memberAvatars {
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
              memberName
            }
            joinUrl
          }
        }
        migrationInfo {
          rowReverse
          title
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
          buttons {
            label
            url
            variant
          }
        }
      }
    }
    allProposals {
      id
      title
      content {
        raw
        html
      }
      createdBy
      createdAt
      url
    }
  }
`
