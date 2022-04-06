import React from "react"
import { Input, Button } from "@chakra-ui/react"
import {
  PageSection,
  ResponsiveStack,
  SectionTextContainer,
} from "../PageSection"
import DigitalPatternBox from "../DigitalPatternBox"
import { BodyLg, H5 } from "../Typography"

const NewsletterSubscribe = () => {
  //
  // TODO: The input needs a controlled state and an onSubmit handler.
  // Need to spike out how/where to post the email
  //

  return (
    <DigitalPatternBox variant="dark">
      <PageSection py={16}>
        <ResponsiveStack columnReverse spacing={12}>
          <SectionTextContainer>
            <H5 color="white">Subscribe</H5>
            <BodyLg color="gray.300">
              Receive the latest news about Threshold
            </BodyLg>
          </SectionTextContainer>
          <ResponsiveStack
            w="full"
            maxW={{ base: "100%", md: "320px", lg: "512px" }}
            columnReverse
          >
            <Input bg="white" placeholder="Enter an email address" />
            <Button px={6}>Submit</Button>
          </ResponsiveStack>
        </ResponsiveStack>
      </PageSection>
    </DigitalPatternBox>
  )
}

export default NewsletterSubscribe
