import React, { FC } from "react"
import { Box, Container, Stack } from "@chakra-ui/react"
import { H1, H5 } from "../../../components/Typography"
import heroGradientCurve from "../../../static/images/hero-gradient-swoosh.png"
import useChakraBreakpoint from "../../../hooks/useChakraBreakpoint"
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
  const isMobile = useChakraBreakpoint("md")

  return (
    <Box
      position="relative"
      minHeight={{ base: "740px", md: "800px" }}
      bg="gray.900"
    >
      <Box
        backgroundImage={heroGradientCurve}
        backgroundPosition={{ base: "center bottom", md: "center 250px" }}
        backgroundSize={{ base: "contain", md: "100% 100%" }}
        backgroundRepeat="no-repeat"
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        top={0}
      />
      <Container
        maxW={{
          base: "640px",
          md: "960px",
          lg: "1072px",
        }}
        paddingTop={{ base: "80px", md: "135px" }}
        px={{ base: "16px", lg: "88px" }}
      >
        <Stack spacing={8}>
          <H1 noOfLines={2} maxW="740px">
            {title}
          </H1>
          <H5 color="gray.300" noOfLines={2} maxW="540px">
            {body}
          </H5>
        </Stack>
        <Stack
          mt={{ base: 12, md: 20 }}
          direction={{ base: "column", md: "row" }}
          spacing={12}
        >
          {ctaButtons.map(
            (_: { label: string; url: string }, index: number) => {
              return (
                <ExternalButtonLink
                  key={_.label}
                  {...heroButtonProps}
                  variant={
                    index === 0 ? "special" : isMobile ? "outline" : "link"
                  }
                  href={_.url as ExternalLinkHref}
                >
                  {_.label}
                </ExternalButtonLink>
              )
            }
          )}
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero
