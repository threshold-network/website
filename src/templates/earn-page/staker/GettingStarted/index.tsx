import { Box, StackDivider, Stack } from "@chakra-ui/react"
import { FC } from "react"
import ExpandedButtonLink, {
  GettingStartedButtonLink,
} from "./ExpandedButtonLink"
import { BodyLg, H3, H5 } from "../../../../components"
import { ResponsiveStack } from "../../../../components/PageSection"

interface GettingStartedSectionProps {
  title: string
  description: string
  links: GettingStartedButtonLink[]
}

interface GettingStartedProps {
  title: string
  left: GettingStartedSectionProps
  right: GettingStartedSectionProps
}

const GettingStartedSection: FC<GettingStartedSectionProps> = ({
  title,
  description,
  links,
}) => {
  return (
    <Box>
      <H5 color="gray.300">{title}</H5>
      <BodyLg color="gray.300" mt={4}>
        {description}
      </BodyLg>
      <Stack spacing={6} mt={8}>
        {links.map((link) => (
          <ExpandedButtonLink key={link.label} {...link} />
        ))}
      </Stack>
    </Box>
  )
}

const GettingStarted: FC<GettingStartedProps> = ({ left, right, title }) => {
  return (
    <Box>
      <H3>{title}</H3>
      <ResponsiveStack divider={<StackDivider />} spacing={16} mt={20}>
        <GettingStartedSection {...left} />
        <GettingStartedSection {...right} />
      </ResponsiveStack>
    </Box>
  )
}

export default GettingStarted
