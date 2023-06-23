import React from "react"
import { PageSection } from "../PageSection"
import DigitalPatternBox from "../DigitalPatternBox"
import NewsletterSubscribeForm from "./NewsletterSubscribeForm"

const NewsletterSubscribe = () => {
  return (
    <DigitalPatternBox variant="light">
      <PageSection py={8}>
        <NewsletterSubscribeForm />
      </PageSection>
    </DigitalPatternBox>
  )
}

export default NewsletterSubscribe
