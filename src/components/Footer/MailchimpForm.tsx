import React, { FC, FormEvent, useState } from "react"
import MailchimpSubscribe, {
  EmailFormFields,
  FormHooks,
} from "react-mailchimp-subscribe"
import {
  Button,
  Box,
  Input,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react"
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
      <Box
        as="form"
        // @ts-ignore
        onSubmit={handleSubmit}
        w="full"
        maxW={{ base: "100%", md: "320px", lg: "512px" }}
      >
        <FormControl>
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
            <FormHelperText
              color="red.500"
              // slice first 4 chars to scrub the mailchimp error
              // example mailchimp error: "0 - Invalid Email"
              dangerouslySetInnerHTML={{ __html: (message as string).slice(4) }}
            />
          )}

          {status === "success" && (
            <FormHelperText color="green.500">
              Please check your email to verify and join the newsletter.
            </FormHelperText>
          )}
        </FormControl>
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
