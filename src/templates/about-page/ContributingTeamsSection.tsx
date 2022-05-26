import { Stack, Box } from "@chakra-ui/react"
import React, { FC } from "react"
import { BodyLg, H3, ImageProps, Image } from "../../components"
import { PageSection, ResponsiveStack } from "../../components/PageSection"
import {
  ButtonType,
  CmsButtonLink,
} from "../../components/Buttons/CmsButtonLink"
import { FooterButton } from "../home-page/SectionTemplate"

interface ContributingTeamsSectionProps {
  image: ImageProps
  description: string
  buttons: {
    label: string
    url: string
    variant: ButtonType
  }[]
}

interface ContributingTeamsProps {
  title: string
  left: ContributingTeamsSectionProps
  right: ContributingTeamsSectionProps
}

const ContributingTeamsSection: FC<ContributingTeamsSectionProps> = ({
  image,
  description,
  buttons,
}) => {
  return (
    <Box w="100%">
      <Image maxH="60px" {...image} />
      <BodyLg color="gray.300" mt={8}>
        {description}
      </BodyLg>
      <Stack mt={8} direction={{ base: "column", md: "row" }} spacing={8}>
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
    </Box>
  )
}

const ContributingTeams: FC<ContributingTeamsProps> = ({
  left,
  right,
  title,
}) => {
  return (
    <PageSection bg="gray.900" withSmallPadding id="contributors">
      <H3>{title}</H3>
      <ResponsiveStack spacing={16} mt={20}>
        <ContributingTeamsSection {...left} />
        <ContributingTeamsSection {...right} />
      </ResponsiveStack>
    </PageSection>
  )
}

export default ContributingTeams
