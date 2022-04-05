import React, { FC } from "react"
import { SectionTextContainer } from "../../../components/PageSection"
import { H2, H5, LabelMd } from "../../../components"
import { Stack } from "@chakra-ui/react"
import {
  ButtonType,
  CmsButtonLink,
} from "../../../components/Buttons/CmsButtonLink"
import { FooterButton } from "../../home-page/SectionTemplate"

interface Props {
  label: string
  title: string
  description: string
  buttons: {
    label: string
    url: string
    variant: ButtonType
  }[]
}

const SecondaryInfoColumn: FC<Props> = ({
  label,
  title,
  description,
  buttons,
}) => {
  return (
    <SectionTextContainer>
      <LabelMd textTransform="uppercase" color="gray.300">
        {label}
      </LabelMd>
      <H5 mt={1}>{title}</H5>
      <H5 mt={6} color="gray.300" maxW="420px">
        {description}
      </H5>
      <Stack mt={6} direction={{ base: "column", md: "row" }} spacing={8}>
        {buttons.map((_: FooterButton, i) => (
          <CmsButtonLink
            key={_.label}
            cmsVariant={_.variant as ButtonType}
            url={_.url}
          >
            {_.label}
          </CmsButtonLink>
        ))}
      </Stack>
    </SectionTextContainer>
  )
}

export default SecondaryInfoColumn
