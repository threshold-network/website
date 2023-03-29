import { FC } from "react"
import { graphql } from "gatsby"
import { Box } from "@chakra-ui/react"
import RolePageTemplate from "../RolePageTemplate"
import SectionTemplate from "../../home-page/SectionTemplate"
import { H4 } from "../../../components"
import { LPCardGroup } from "../../../components/LPCard"
import { TBTCStats } from "./TBTCStats"
import { gql } from "graphql-request"
import { TBTC_SUBGRAPH_URL } from "../../../config/subgraph"
import useQuery from "../../../hooks/useQuery"
import { LatestMint, LatestMints } from "./LatestMints"

const BTCPageTemplate: FC<any> = ({ data }) => {
  const { btcInfo, interestedPools } = data.markdownRemark.frontmatter

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
          first: 10
          orderBy: timestamp
          orderDirection: desc
        ) {
          amount
          txHash
          to
          from
          timestamp
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

  console.log("transactions: ", transactions)

  return (
    <RolePageTemplate>
      <SectionTemplate {...btcInfo} preTitle={null} columnReverse isSmallSize />
      <TBTCStats
        tbtcTvl={totalSupply}
        tbtcUniqueAddresses={currentTokenHolders}
        totalMints={"100"}
      />
      <LatestMints latestMints={transactions} mt={"6rem"} />
      <Box mt={12}>
        <H4 color="gray.300">Pools you may be interested in</H4>
        <LPCardGroup cards={interestedPools} />
      </Box>
    </RolePageTemplate>
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
          }
        }
        interestedPools {
          image1 {
            id
            relativePath
            internal {
              mediaType
            }
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
          image2 {
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
          subTitle
          buttonText
          buttonUrl
        }
      }
    }
  }
`
