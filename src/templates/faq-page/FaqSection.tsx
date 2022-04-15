import React, { FC } from "react"
import { Button } from "@chakra-ui/react"
import { BodyMd, H3, ImageProps, Image } from "../../components"
import { PageSection } from "../../components/PageSection"
import Accordion from "../../components/Accordion"

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
}

const FaqSection: FC<Props> = ({ title, faq }) => {
  return (
    <PageSection bg="gray.900" pt={{ base: 0, md: 16 }}>
      <H3>{title}</H3>
      <Accordion
        items={faq.map((faq) => ({
          title: faq.question,
          body: (
            <>
              <BodyMd color="gray.300">{faq.answer}</BodyMd>
              {faq.buttons &&
                faq.buttons.map((button) => {
                  return (
                    <Button
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
            </>
          ),
        }))}
      />
    </PageSection>
  )
}

export default FaqSection
