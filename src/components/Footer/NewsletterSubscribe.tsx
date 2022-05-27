import React from "react"
import { PageSection } from "../PageSection"
import DigitalPatternBox from "../DigitalPatternBox"
import MailchimpForm from "./MailchimpForm"

const NewsletterSubscribe = () => {
  return (
    <DigitalPatternBox variant="light">
      <PageSection py={8}>
        <MailchimpForm />
      </PageSection>
    </DigitalPatternBox>
  )
}

export default NewsletterSubscribe
