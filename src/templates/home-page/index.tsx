import React, { FC } from "react"
import { graphql } from "gatsby"
import Hero from "./Hero"
import StakerRole from "./UserRoles/StakerRole"
import LiquidityProviderRole from "./UserRoles/LiquidityProviderRole"
import BtcRole from "./UserRoles/BtcRole"
import TokenHolderRole from "./UserRoles/TokenHolderRole"
import RoleTemplate from "./UserRoles/RoleTemplate"
import TakeTheQuiz from "./UserRoles/TakeTheQuiz"
import MigrationInfoSection from "./MigrationInfoSection"
import HarnessThePower from "./HarnessThePower"

const SplashPageTemplate: FC<any> = ({ data }) => {
  const {
    hero,
    stakerRole,
    lpRole,
    btcRole,
    tokenHolderRole,
    migrationInfo,
    harnessThePower,
  } = data.markdownRemark.frontmatter

  return (
    <>
      {/*<Hero {...hero} />*/}

      {/*<StakerRole {...stakerRole} />*/}
      {/*<LiquidityProviderRole {...lpRole} />*/}
      {/*<BtcRole {...btcRole} />*/}
      {/*<TokenHolderRole {...tokenHolderRole} />*/}

      {/*<TakeTheQuiz*/}
      {/*  topBgColor={tokenHolderRole.bgColor}*/}
      {/*  bottomBgColor={migrationInfo.bgColor}*/}
      {/*/>*/}

      {/*<MigrationInfoSection {...migrationInfo} />*/}
      <HarnessThePower {...harnessThePower} />
      {/*<ActiveCommunitySection />*/}
      {/*<CurrentProposals />*/}
      {/*<JoinTheCommunity />*/}
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
      }
    }
  }
`

export default SplashPageTemplate
