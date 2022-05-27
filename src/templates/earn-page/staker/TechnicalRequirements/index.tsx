import { Box, SimpleGrid } from "@chakra-ui/react"
import { H5 } from "../../../../components"
import { FC } from "react"
import TechnicalRequirementStack, {
  TechnicalRequirementProps,
} from "./TechRequirementStack"
import {
  ButtonType,
  CmsButtonLink,
} from "../../../../components/Buttons/CmsButtonLink"

interface TechnicalRequirementsProps {
  title: string
  cta: {
    ctaTitle: string
    label: string
    url: string
    variant: ButtonType
  }
  requirements: TechnicalRequirementProps[]
}

const TechnicalRequirements: FC<TechnicalRequirementsProps> = ({
  title,
  cta,
  requirements,
}) => {
  return (
    <Box mt={20}>
      <H5 color="gray.300">{title}</H5>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10} mt={8}>
        {requirements.map((req) => (
          <TechnicalRequirementStack key={req.label} {...req} />
        ))}
      </SimpleGrid>
      <H5 mt={24} color="gray.300">
        {cta.ctaTitle}
      </H5>
      <CmsButtonLink mt={6} url={cta.url} cmsVariant={cta.variant}>
        {cta.label}
      </CmsButtonLink>
    </Box>
  )
}

export default TechnicalRequirements
