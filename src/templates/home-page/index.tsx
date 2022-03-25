import React, { FC } from "react"
import { graphql } from "gatsby"
import Hero from "./Hero"

const SplashPageTemplate: FC<any> = ({ data }) => {
  const { hero } = data.markdownRemark.frontmatter
  return (
    <>
      <Hero title={hero.title} body={hero.body} ctaButtons={hero.ctaButtons} />
      {/*<StakerRole />*/}
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
      }
    }
  }
`

export default SplashPageTemplate
