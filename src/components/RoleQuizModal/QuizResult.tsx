import React, { FC, useEffect } from "react"
import { Button, Stack } from "@chakra-ui/react"
import { BodyMd, H3 } from "../../components/Typography"
import {
  ResponsiveStack,
  SectionImage,
  SectionTextContainer,
} from "../PageSection"
import { ButtonType, CmsButtonLink } from "../Buttons/CmsButtonLink"
import { FooterButton } from "../../templates/home-page/SectionTemplate"
import { ImageProps } from "../Image"
import { useQuizModal } from "../../contexts/QuizModalContext"

export interface ResultPageProps {
  title: string
  description: string
  button: FooterButton
  image: ImageProps
}

const QuizResult: FC<ResultPageProps & { resetQuizState: () => void }> = ({
  title,
  description,
  button,
  image,
  resetQuizState,
}) => {
  const { closeModal } = useQuizModal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ResponsiveStack spacing={16}>
      <SectionTextContainer>
        <H3 color="gray.50" mt={3}>
          {title}
        </H3>
        <BodyMd mt={10} color="gray.300" maxW="330px">
          {description}
        </BodyMd>
        <Stack mt={10} direction={{ base: "column", md: "row" }} spacing={8}>
          <Button variant="outline" onClick={resetQuizState} size="lg">
            Retry Quiz
          </Button>
          <CmsButtonLink
            onClick={closeModal}
            key={button.label}
            cmsVariant={button.variant as ButtonType}
            url={button.url}
          >
            {button.label}
          </CmsButtonLink>
        </Stack>
      </SectionTextContainer>
      {image && <SectionImage {...image} />}
    </ResponsiveStack>
  )
}

export default QuizResult
