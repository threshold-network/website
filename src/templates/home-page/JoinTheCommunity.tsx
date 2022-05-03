import React, { FC } from "react"
import { Box, StackDivider } from "@chakra-ui/react"
import { PageSection, ResponsiveStack } from "../../components/PageSection"
import { BodyLg, H5, LabelMd } from "../../components/Typography"
import useChakraBreakpoint from "../../hooks/useChakraBreakpoint"
import { Image, ImageProps } from "../../components"
import {
  ButtonType,
  CmsButtonLink,
} from "../../components/Buttons/CmsButtonLink"

interface ButtonInterface {
  label: string
  url: string
  variant: string
  icon: {
    image: ImageProps
    alt: string
  }
}

interface JoinTheCommunitySection {
  label: string
  title: string
  description: string
  buttons: ButtonInterface[]
}

interface JoinTheCommunityProps {
  left: JoinTheCommunitySection[]
  right: JoinTheCommunitySection[]
}

const Content: FC<{
  title: string
  subTitle: string
  body: string
  footerButtons: ButtonInterface[]
}> = ({ title, subTitle, body, footerButtons }) => (
  <Box maxW={{ base: "100%", md: "424px" }}>
    <LabelMd textTransform="uppercase" color="gray.300">
      {title}
    </LabelMd>
    <H5 mt={1} color="gray.50">
      {subTitle}
    </H5>
    <BodyLg mt={6} color="gray.300">
      {body}
    </BodyLg>
    <ResponsiveStack justifyContent="flex-start" mt={6}>
      {footerButtons.map((_) => (
        <CmsButtonLink
          leftIcon={<Image color="white" boxSize="20px" {..._.icon.image} />}
          key={_.label}
          cmsVariant={_.variant as ButtonType}
          url={_.url}
        >
          {_.label}
        </CmsButtonLink>
      ))}
    </ResponsiveStack>
  </Box>
)

const JoinTheCommunity: FC<JoinTheCommunityProps> = (props) => {
  const mdScreen = useChakraBreakpoint("md")

  const left = props.left[0]
  const right = props.right[0]

  return (
    <PageSection bg="gray.800">
      <ResponsiveStack
        divider={mdScreen ? <StackDivider bg="gray.700" /> : undefined}
        spacing={16}
      >
        <Content
          title={left.label}
          subTitle={left.title}
          body={left.description}
          footerButtons={left.buttons}
        />
        <Content
          title={right.label}
          subTitle={right.title}
          body={right.description}
          footerButtons={right.buttons}
        />
      </ResponsiveStack>
    </PageSection>
  )
}

export default JoinTheCommunity
