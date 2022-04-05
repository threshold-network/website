import React, { FC } from "react"
import { Button, Stack } from "@chakra-ui/react"
import { H2, H5 } from "../../components/Typography"
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
  const { setIsOpen } = useQuizModal()
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <ResponsiveStack spacing={16}>
      <SectionTextContainer>
        <H2 mt={3}>{title}</H2>
        <H5 mt={10} color="gray.300">
          {description}
        </H5>
        <Stack mt={10} direction={{ base: "column", md: "row" }} spacing={8}>
          <Button variant="outline" onClick={resetQuizState}>
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
