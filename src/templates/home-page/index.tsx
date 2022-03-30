import React, { FC } from "react"
import { graphql } from "gatsby"
import Hero from "./Hero"
import SectionTemplate from "./SectionTemplate"
import TakeTheQuiz from "./TakeTheQuiz"
import MigrationInfoSection from "./MigrationInfoSection"
import HarnessThePower from "./HarnessThePower"
import CurrentProposals from "./CurrentProposals"
import JoinTheCommunity from "./JoinTheCommunity"

const SplashPageTemplate: FC<any> = ({ data }) => {
  const {
    hero,
    stakerRole,
    lpRole,
    btcRole,
    tokenHolderRole,
    migrationInfo,
    harnessThePower,
    activeCommunity,
    joinTheCommunity,
  } = data.markdownRemark.frontmatter

  return (
    <>
      <Hero {...hero} />
      <SectionTemplate {...stakerRole} />
      <SectionTemplate {...lpRole} />
      <SectionTemplate {...btcRole} />
      <SectionTemplate {...tokenHolderRole} />
      <TakeTheQuiz
        topBgColor={tokenHolderRole.bgColor}
        bottomBgColor={migrationInfo.bgColor}
      />
      <MigrationInfoSection {...migrationInfo} />
      <HarnessThePower {...harnessThePower} />
      <SectionTemplate {...activeCommunity} />
      <CurrentProposals />
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
        }
        stakerRole {
          rowReverse
          bgColor
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
          bgColor
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
          bgColor
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
          bgColor
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
          bgColor
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
            description
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
          bgColor
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
  }
`

export default SplashPageTemplate
