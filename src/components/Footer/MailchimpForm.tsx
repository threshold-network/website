import React, { FC, FormEvent, useState } from "react"
import MailchimpSubscribe, {
  EmailFormFields,
  FormHooks,
} from "react-mailchimp-subscribe"
import { Button, Box, Input } from "@chakra-ui/react"
import { ResponsiveStack, SectionTextContainer } from "../PageSection"
import { BodyLg, BodyMd, H5 } from "../Typography"

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
      <Box
        as="form"
        // @ts-ignore
        onSubmit={handleSubmit}
        w="full"
        maxW={{ base: "100%", md: "320px", lg: "512px" }}
      >
        <ResponsiveStack columnReverse>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            bg="white"
            placeholder="Enter an email address"
          />
          <Button px={6} type="submit" isLoading={status === "sending"}>
            Submit
          </Button>
        </ResponsiveStack>

        {status === "error" && (
          <BodyMd
            color="red.500"
            dangerouslySetInnerHTML={{ __html: (message as string).slice(3) }}
          />
        )}

        {status === "success" && (
          <BodyMd color="green.500">
            Please check your email to verify and join the newsletter.
          </BodyMd>
        )}
      </Box>
    </ResponsiveStack>
  )
}

const MAILCHIMP_U = "91424e686e0fd39bbbe65dd6d"
const MAILCHIMP_ID = "b61f1ff979"

const MailchimpForm = () => {
  const url = `https://network.us3.list-manage.com/subscribe/post?u=${MAILCHIMP_U}&amp;id=${MAILCHIMP_ID}`

  return (
    <MailchimpSubscribe
      url={url}
      render={(mailChimpProps) => <CustomForm {...mailChimpProps} />}
    />
  )
}

export default MailchimpForm
