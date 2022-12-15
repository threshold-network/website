import React, { FC } from "react"
import { Box, Container, HStack, Image, Stack } from "@chakra-ui/react"
import { ButtonLg, H1, H5 } from "../../../components/Typography"
import heroGradientBg from "../../../static/images/hero-gradient-bg.png"
import tbtcProductDemo from "../../../static/images/tbtc-product-demo.png"
import ExternalButtonLink from "../../../components/Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "../../../components/Navbar/types"

const heroButtonProps = {
  h: "auto",
  w: "auto",
  py: "20px",
  px: "40px",
}

const Hero: FC<{ title: string; body: string; ctaButtons: any }> = ({
  title,
  body,
  ctaButtons,
}) => {
  return (
    <Box
      minHeight={{ base: "740px", md: "800px" }}
      backgroundImage={heroGradientBg}
      backgroundSize="100% 100%"
      backgroundRepeat="no-repeat"
    >
      <Container
        maxW={{
          base: "640px",
          md: "960px",
          lg: "1044px",
        }}
        paddingTop={{ base: "80px", md: "135px" }}
      >
        <Box display="flex">
          <Box>
            <Stack spacing={8}>
              <H1 maxW="740px">{title}</H1>
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
                (_: { label: string; url: string }, index: number) => {
                  return (
                    <ExternalButtonLink
                      key={_.label}
                      {...heroButtonProps}
                      variant={index === 0 ? "special" : "outline"}
                      href={_.url as ExternalLinkHref}
                    >
                      <ButtonLg>{_.label}</ButtonLg>
                    </ExternalButtonLink>
                  )
                }
              )}
            </Stack>
          </Box>
          <Box
            display={{ base: "none", lg: "flex" }}
            flexDirection="column"
            justifyContent="end"
            pb={7}
          >
            <Image m={0} maxW="350px" maxH="200px" src={tbtcProductDemo} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
