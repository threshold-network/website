import { FC } from "react"
import { Box } from "@chakra-ui/react"
import { ResponsiveStack, SectionTextContainer } from "../PageSection"
import { BodyLg, H5 } from "../Typography"

const NewsletterSubscribeForm: FC = () => {
  return (
    <ResponsiveStack columnReverse spacing={12}>
      <SectionTextContainer>
        <H5 color="white">Subscribe</H5>
        <BodyLg color="gray.300">
          Receive the latest news about Threshold
        </BodyLg>
      </SectionTextContainer>
      <Box w="full" maxW={{ base: "100%", md: "320px", lg: "512px" }}>
        <iframe
          src="https://embeds.beehiiv.com/38f40972-ced2-4f8e-b92b-2030750a59d0?slim=true"
          data-test-id="beehiiv-embed"
          height="52"
          width="100%"
          frameBorder="0"
          scrolling="no"
          style={{
            margin: 0,
            borderRadius: "0",
            backgroundColor: "transparent",
          }}
        />
      </Box>
    </ResponsiveStack>
  )
}

export default NewsletterSubscribeForm
