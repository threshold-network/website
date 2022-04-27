import React, { FC } from "react"
import { Box, Button, Stack } from "@chakra-ui/react"
import { BodyLg, BodyMd, H3, Image, ImageProps } from "../../components"
import { PageSection } from "../../components/PageSection"
import Accordion from "../../components/Accordion"
import {
  ButtonType,
  CmsButtonLink,
} from "../../components/Buttons/CmsButtonLink"

interface Props {
  title: string
  faq: {
    question: string
    answer: string
    buttons: {
      label: string
      url: string
      rightIcon: { image: ImageProps }
      leftIcon: { image: ImageProps }
    }[]
  }[]
  additionalHelp: {
    button: {
      label: string
      url: string
      variant: ButtonType
      icon: { image: ImageProps }
    }
    text: string
  }
}

const FaqSection: FC<Props> = ({ title, faq, additionalHelp }) => {
  return (
    <PageSection bg="gray.900" withSmallPadding>
      <H3>{title}</H3>
      <Accordion
        items={faq.map((faq) => ({
          title: faq.question,
          body: (
            <Box key={faq.question} mb={6}>
              <BodyMd color="gray.300">{faq.answer}</BodyMd>
              {faq.buttons &&
                faq.buttons.map((button) => {
                  return (
                    <Button
                      key={button.label}
                      mt={8}
                      px={4}
                      py={6}
                      variant="outline"
                      borderColor="gray.700"
                      leftIcon={
                        <Image boxSize="20px" {...button.leftIcon.image} />
                      }
                      rightIcon={
                        <Image boxSize="20px" {...button.rightIcon.image} />
                      }
                    >
                      {button.label}
                    </Button>
                  )
                })}
            </Box>
          ),
        }))}
      />
      <Stack mt={20}>
        <BodyLg mb={8}>{additionalHelp.text}</BodyLg>
        <CmsButtonLink
          leftIcon={
            <Image fill="white" {...additionalHelp.button.icon.image} />
          }
          cmsVariant={additionalHelp.button.variant}
          url={additionalHelp.button.url}
        >
          {additionalHelp.button.label}
        </CmsButtonLink>
      </Stack>
    </PageSection>
  )
}

export default FaqSection
