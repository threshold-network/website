import React, { FC } from "react"
import { graphql } from "gatsby"
import Hero from "./Hero"
import StakerRole from "./UserRoles/StakerRole"

const SplashPageTemplate: FC<any> = ({ data }) => {
  const { hero, stakerRole } = data.markdownRemark.frontmatter

  return (
    <>
      <Hero {...hero} />
      <StakerRole {...stakerRole} />
      {/*<LiquidityProviderRole />*/}
      {/*<BtcRole />*/}
      {/*<TokenHolderRole />*/}
      {/*<TakeTheQuiz />*/}
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
          title
          description
          image {
            id
            absolutePath
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
