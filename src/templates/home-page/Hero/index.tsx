import { FC } from "react"
import { Box, Container, Stack } from "@chakra-ui/react"
import { ButtonLg, H1, H5 } from "../../../components/Typography"
import ExternalButtonLink from "../../../components/Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import { Image, ImageProps } from "../../../components/Image"
import { TrackComponent } from "../../../components/Posthog/TrackComponent"
import { Analytics } from "./Analytics"
import { gql } from "graphql-request"
import {
  TBTC_SUBGRAPH_URL,
  T_NETWORK_SUBGRAPH_URL,
} from "../../../config/subgraph"
import useQuery from "../../../hooks/useQuery"
import { exchangeAPI, formatUnits } from "../../../utils"
import { useTTokenPrice } from "../../../contexts/TokenPriceContext"
import CTANotice from "../../../components/CTANotice"

export interface CTANotice {
  label: string
  url: string
  description: string
}

const heroButtonProps = {
  h: "auto",
  w: "auto",
  py: "20px",
  px: "40px",
}

const Hero: FC<{
  title: string
  body: string
  ctaNotice: CTANotice
  ctaButtons: any
  image: ImageProps
}> = ({ title, body, ctaNotice, ctaButtons, image }) => {
  const {
    isFetching: isTotalStakedFetching,
    data: totalStakedData,
    error: totalStakedError,
  } = useQuery<{
    epoches: { totalStaked: string }[]
    minStakeAmounts: { amount: string }[]
  }>(
    T_NETWORK_SUBGRAPH_URL,
    gql`
      query {
        epoches(orderBy: startTime, orderDirection: desc, first: 1) {
          totalStaked
        }
      }
    `
  )

  const { isFetching, data, error } = useQuery<{
    tbtctoken: { currentTokenHolders: string; totalSupply: string }
  }>(
    TBTC_SUBGRAPH_URL,
    gql`
      query {
        tbtctoken(id: "TBTCToken") {
          currentTokenHolders
          totalSupply
        }
      }
    `
  )

  const { epoches } = totalStakedData || {
    epoches: [{ totalStaked: "0" }],
  }
  const totalStaked = !totalStakedError ? epoches[0].totalStaked : "0"
  const tPrice = useTTokenPrice()
  const totalValueStakedInUSD = exchangeAPI
    .toUsdBalance(formatUnits(totalStaked), tPrice)
    .toString()

  const { tbtctoken } = data || {
    tbtctoken: { currentTokenHolders: "0", totalSupply: "0" },
  }
  const currentTokenHolders = !error ? tbtctoken.currentTokenHolders : "0"
  const totalSupply = !error ? tbtctoken.totalSupply : "0"

  return (
    <Box minHeight={{ base: "740px", md: "800px" }} bg={"gray.900"}>
      <Container
        maxW={{
          base: "640px",
          md: "960px",
          lg: "1044px",
        }}
        paddingTop={{ base: "80px", md: "135px" }}
      >
        <Box display="flex" flexDirection={{ base: "column", lg: "row" }}>
          <Box>
            <Stack spacing={8}>
              <CTANotice {...ctaNotice} />
              <H1 maxW="720px" pr={20}>
                {title}
              </H1>
              <H5 color="gray.300" maxW="590px">
                {body}
              </H5>
            </Stack>

            <Stack
              mt={12}
              direction={{ base: "column", md: "row" }}
              spacing={12}
            >
              {ctaButtons.map(
                (
                  _: { label: string; url: string; posthogLabel: string },
                  index: number
                ) => {
                  return (
                    <TrackComponent posthogLabel={_.posthogLabel} key={_.label}>
                      <ExternalButtonLink
                        {...heroButtonProps}
                        variant={index === 0 ? "special" : "outline"}
                        href={_.url as ExternalLinkHref}
                      >
                        <ButtonLg>{_.label}</ButtonLg>
                      </ExternalButtonLink>
                    </TrackComponent>
                  )
                }
              )}
            </Stack>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="end"
            pb={7}
          >
            {image && (
              <Image
                m={0}
                mt={{ base: 8, lg: 0 }}
                maxW={{ base: "600px", lg: "350px" }}
                {...image}
              />
            )}
          </Box>
        </Box>
        <Analytics
          tbtcTtvl={totalSupply}
          tbtcUniqueAddresses={currentTokenHolders}
          stakingTvlInUSD={totalValueStakedInUSD}
          pt={{ base: "0", lg: "5rem" }}
          pb={"5rem"}
        />
      </Container>
    </Box>
  )
}

export default Hero
