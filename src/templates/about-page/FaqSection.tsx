import React, { FC } from "react"
import { Box, Button, HStack, Stack, Wrap } from "@chakra-ui/react"
import { BodyLg, BodyMd, H3, Image, ImageProps } from "../../components"
import { PageSection } from "../../components/PageSection"
import Accordion from "../../components/Accordion"
import {
  ButtonType,
  CmsButtonLink,
} from "../../components/Buttons/CmsButtonLink"

interface Props {
  title: string
  faqs: {
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

const FaqSection: FC<Props> = ({ title, faqs, additionalHelp }) => {
  return (
    <PageSection bg="gray.900" withSmallPadding id="faq">
      <H3>{title}</H3>
      <Accordion
        items={faqs.map((faq) => ({
          title: faq.question,
          body: (
            <Box key={faq.question} mb={6}>
              <BodyMd textAlign="left" color="gray.300">
                {faq.answer}
              </BodyMd>
              <Wrap mt={8} spacing={6} flexWrap="wrap">
                {faq.buttons &&
                  faq.buttons.map((button) => {
                    return (
                      <Button
                        as="a"
                        href={button.url}
                        target="_blank"
                        key={button.label}
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
              </Wrap>
            </Box>
          ),
        }))}
      />
      <Stack mt={20}>
        <BodyLg color="gray.50" mb={4}>
          {additionalHelp.text}
        </BodyLg>
        <CmsButtonLink
          leftIcon={
            <Image boxSize="20px" {...additionalHelp.button.icon.image} />
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
