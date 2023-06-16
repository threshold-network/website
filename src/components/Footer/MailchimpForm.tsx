import React, { FC, FormEvent, useState } from "react"
import MailchimpSubscribe, {
  EmailFormFields,
  FormHooks,
} from "react-mailchimp-subscribe"
import { Box } from "@chakra-ui/react"
import { ResponsiveStack, SectionTextContainer } from "../PageSection"
import { BodyLg, H5 } from "../Typography"
import { MAILCHIMP_POST_URL } from "../../config/newsletterConfig"

const CustomForm: FC<FormHooks<EmailFormFields>> = ({
  status,
  message,
  subscribe,
}) => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    subscribe({
      EMAIL: email,
    })
  }

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
        ></iframe>
      </Box>
    </ResponsiveStack>
  )
}

const MailchimpForm = () => {
  return (
    <MailchimpSubscribe
      url={MAILCHIMP_POST_URL}
      render={(mailChimpProps) => <CustomForm {...mailChimpProps} />}
    />
  )
}

export default MailchimpForm
