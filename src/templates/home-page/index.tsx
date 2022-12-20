import { FC } from "react"
import { graphql } from "gatsby"
import Hero from "./Hero"
import SectionTemplate from "./SectionTemplate"
import TakeTheQuiz from "./TakeTheQuiz"
import MigrationInfoSection from "./MigrationInfoSection"
import HarnessThePower from "./HarnessThePower"
import JoinTheCommunity from "./JoinTheCommunity"
import ActiveCommunity from "./ActiveCommunity"
import WhatIsThreshold from "./WhaIsThreshold"

const SplashPageTemplate: FC<any> = ({ data }) => {
  const {
    hero,
    tbtc,
    whatIsThreshold,
    stakerRole,
    lpRole,
    btcRole,
    tokenHolderRole,
    migrationInfo,
    harnessThePower,
    activeCommunity,
    joinTheCommunity,
  } = data.markdownRemark.frontmatter
  const proposals = data.allProposals

  return (
    <>
      <Hero {...hero} />
      <WhatIsThreshold {...whatIsThreshold} bgColor="gray.900" />
      <SectionTemplate {...tbtc} bgColor="#181D22" />
      <SectionTemplate {...stakerRole} bgColor="gray.900" />
      <SectionTemplate {...lpRole} bgColor="#181D22" />
      <SectionTemplate {...btcRole} bgColor="#0A0C0F" />
      <SectionTemplate {...tokenHolderRole} bgColor="#161A1F" />
      <TakeTheQuiz topBgColor="#161A1F" bottomBgColor="#181D22" />
      <MigrationInfoSection {...migrationInfo} bgColor="#181D22" />
      <HarnessThePower {...harnessThePower} />
      <ActiveCommunity {...activeCommunity} proposals={proposals} />
      <JoinTheCommunity {...joinTheCommunity} />
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
          ctaButtons {
            label
            url
          }
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
        whatIsThreshold {
          title
          description
          youtubeID
          buttons {
            label
            url
            variant
          }
        }
        tbtc {
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
        stakerRole {
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
        lpRole {
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
        btcRole {
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
        tokenHolderRole {
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
        harnessThePower {
          title
          subitems {
            description(from: "description")
            title
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
          description
          buttons {
            label
            url
            variant
          }
        }
        activeCommunity {
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
        joinTheCommunity {
          left {
            label
            title
            description
            buttons {
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
                alt
              }
            }
          }
          right {
            label
            title
            description
            buttons {
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
                alt
              }
            }
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

export default SplashPageTemplate
