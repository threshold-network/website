import { FC } from "react"
import { graphql } from "gatsby"
import { Box, Stack, VStack } from "@chakra-ui/react"
import RolePageTemplate from "../RolePageTemplate"
import SectionTemplate from "../../home-page/SectionTemplate"
import { BodyLg, H4, H5 } from "../../../components"
import { LPCardGroup } from "../../../components/LPCard"
import { TBTCStats } from "./TBTCStats"
import { gql } from "graphql-request"
import { TBTC_SUBGRAPH_URL } from "../../../config/subgraph"
import useQuery from "../../../hooks/useQuery"
import { LatestMint, LatestMints } from "./LatestMints"
import ExternalButtonLink from "../../../components/Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import { TBTCPartners } from "../../../components/tBTCPartners"
import { PageSection } from "../../../components/PageSection"
import BlogPosts from "../../press-page/BlogPosts"
import { useTotalMints } from "../../../hooks/tBTC/useTotalMints"

const BTCPageTemplate: FC<any> = ({ data }) => {
  const { btcInfo } = data.markdownRemark.frontmatter

  const { totalMints } = useTotalMints()

  // TODO: The transactions don't contain the information about the user address,
  // that did a reveal.
  const {
    isFetching,
    data: tbtcTokenData,
    error,
  } = useQuery<{
    tbtctoken: { currentTokenHolders: string; totalSupply: string }
    transactions: LatestMint[]
  }>(
    TBTC_SUBGRAPH_URL,
    gql`
      query {
        tbtctoken(id: "TBTCToken") {
          currentTokenHolders
          totalSupply
        }
        transactions(
          where: { description: "Minting Finalized" }
          orderBy: timestamp
          orderDirection: desc
          first: 10
        ) {
          id
          timestamp
          deposits {
            actualAmountReceived
            user {
              id
            }
          }
        }
      }
    `
  )

  const { tbtctoken, transactions } = tbtcTokenData || {
    tbtctoken: { currentTokenHolders: "0", totalSupply: "0" },
    transactions: [],
  }
  const currentTokenHolders = !error ? tbtctoken.currentTokenHolders : "0"
  const totalSupply = !error ? tbtctoken.totalSupply : "0"

  return (
    <>
      <RolePageTemplate>
        <SectionTemplate {...btcInfo} preTitle={null} columnReverse size="sm" />
        <TBTCStats
          tbtcTvl={totalSupply}
          tbtcUniqueAddresses={currentTokenHolders}
          totalMints={totalMints?.toString() || "0"}
        />
        <LatestMints latestMints={transactions} mt={"6rem"} />
        <Box my={{ base: "3rem", xl: "10rem" }}>
          <Stack direction={{ base: "column", lg: "row" }}>
            <VStack
              alignItems={"flex-start"}
              justifyContent="center"
              pr={150}
              mb={"2rem"}
            >
              <H5>What is TBTC?</H5>
              <BodyLg py={"2rem"} color="gray.300">
                Check out the following tBTC intro video and subscribe to our
                Youtube channel for more.
              </BodyLg>
              <ExternalButtonLink
                href={ExternalLinkHref.THRESHOLD_YOUTUBE_SUBSCRIBE}
                variant="outline"
              >
                Subscribe
              </ExternalButtonLink>
            </VStack>
            <Box
              as="iframe"
              src="https://www.youtube.com/embed/dtLIfSy8TEE"
              width="100%"
              sx={{
                aspectRatio: "16/9",
              }}
            />
          </Stack>
        </Box>
      </RolePageTemplate>
      <PageSection backgroundColor={"#0A0C0F"} withSmallPadding>
        <TBTCPartners />
      </PageSection>
      <PageSection backgroundColor={"gray.900"} withSmallPadding>
        <Box>
          <BlogPosts
            title={"Learn more about tBTC"}
            subTitle={"These blogs highlight the latest news about tBTC."}
          />
        </Box>
      </PageSection>
    </>
  )
}

export default BTCPageTemplate

export const query = graphql`
  query BtcRolePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        btcInfo {
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
            posthogLabel
          }
        }
      }
    }
  }
`
