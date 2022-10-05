import { FC } from "react"
import { graphql } from "gatsby"
import SectionTemplate from "../home-page/SectionTemplate"
import { Box } from "@chakra-ui/react"
import ContributingTeamsSection from "./ContributingTeamsSection"
import FaqSection from "./FaqSection"
import AuditSection from "./AuditSection"

const FAQPageTemplate: FC<any> = ({ data }) => {
  const { aboutInfo, teamsSection, faq, audits } =
    data.markdownRemark.frontmatter

  return (
    <Box>
      <SectionTemplate
        {...aboutInfo}
        preTitle={null}
        columnReverse
        bgColor="gray.900"
        isSmallSize
      />
      <ContributingTeamsSection {...teamsSection} />
      <FaqSection {...faq} />
      <AuditSection audits={audits} />
    </Box>
  )
}

export default FAQPageTemplate

export const query = graphql`
  query FaqPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        aboutInfo {
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
        teamsSection {
          title
          left {
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
            description
            buttons {
              label
              url
              variant
            }
          }
          right {
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
            description
            buttons {
              label
              url
              variant
            }
          }
        }
        faq {
          title
          faqs {
            question
            answer
            buttons {
              label
              url
              leftIcon {
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
              rightIcon {
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
          additionalHelp {
            text
            button {
              label
              url
              variant
              icon {
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
                alt
              }
            }
          }
        }
        audits {
          title
          url
          date
          auditImage {
            id
            relativePath
            internal {
              mediaType
            }
            childImageSharp {
              gatsbyImageData(width: 200, height: 164)
            }
          }
        }
      }
    }
  }
`
