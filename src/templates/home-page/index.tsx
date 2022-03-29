import React, { FC } from "react"
import { graphql } from "gatsby"
import Hero from "./Hero"
import StakerRole from "./UserRoles/StakerRole"
import LiquidityProviderRole from "./UserRoles/LiquidityProviderRole"
import BtcRole from "./UserRoles/BtcRole"
import TokenHolderRole from "./UserRoles/TokenHolderRole"
import RoleTemplate from "./UserRoles/RoleTemplate"
import TakeTheQuiz from "./UserRoles/TakeTheQuiz"

const SplashPageTemplate: FC<any> = ({ data }) => {
  const { hero, stakerRole, lpRole, btcRole, tokenHolderRole } =
    data.markdownRemark.frontmatter

  return (
    <>
      <Hero {...hero} />

      <StakerRole {...stakerRole} footerButtons={stakerRole.buttons} />
      <LiquidityProviderRole {...lpRole} footerButtons={lpRole.buttons} />
      <BtcRole {...btcRole} footerButtons={btcRole.buttons} />
      <TokenHolderRole
        {...tokenHolderRole}
        footerButtons={tokenHolderRole.buttons}
      />

      <TakeTheQuiz topBgColor={tokenHolderRole.bgColor} />

      {/*<MigrationInfoSection />*/}
      {/*<HarnessThePower />*/}
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
      }
    }
  }
`

export default SplashPageTemplate
