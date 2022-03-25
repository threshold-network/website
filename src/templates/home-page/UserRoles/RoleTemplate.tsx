import React, { FC } from "react"
import { Box, BoxProps, ButtonProps, Stack } from "@chakra-ui/react"
import { Link } from "gatsby"
import {
  CmsButtonLink,
  ButtonType,
} from "../../../components/Buttons/CmsButtonLink"
import { H2, H5, LabelMd } from "../../../components/Typography"
import ExternalButtonLink from "../../../components/Buttons/ExternalButtonLink"
import {
  PageSection,
  ResponsiveStack,
  SectionImage,
  SectionTextContainer,
} from "../../../components/PageSection"
import { ImageProps } from "../../../components"
import { ExternalLinkHref } from "../../../components/Navbar/types"

export interface FooterButton {
  label: string
  url: string
  variant: string
}

interface Props extends BoxProps {
  bgColor: string
  title: string
  description: string
  footerButtons: FooterButton[]
  image: ImageProps
  rowReverse?: boolean
}

const RoleTemplate: FC<Props> = ({
  title,
  description,
  footerButtons,
  image,
  rowReverse,
  ...boxProps
}) => {
  return (
    <PageSection {...boxProps}>
      <ResponsiveStack rowReverse={rowReverse} spacing={16}>
        <SectionTextContainer>
          <LabelMd textTransform="uppercase" color="gray.500">
            Get Started
          </LabelMd>
          <H2 mt={3}>{title}</H2>
          <H5 mt={10}>{description}</H5>
          <Stack mt={10} direction={{ base: "column", md: "row" }} spacing={8}>
            {footerButtons.map((_: FooterButton, i) => {
              return (
                <CmsButtonLink
                  key={_.label}
                  cmsVariant={_.variant as ButtonType}
                  url={_.url}
                >
                  {_.label}
                </CmsButtonLink>
              )
              // if (i === 0) {
              //   return (
              //     <ExternalButtonLink
              //       key={_.label}
              //       href={_.url as ExternalLinkHref}
              //       variant={_.variant}
              //     >
              //       {_.label}
              //     </ExternalButtonLink>
              //   )
              // }
              //
              // return (
              //   <CmsButtonLink key={_.label} to={_.url} as={Link} variant={_.variant}>
              //     {_.label}
              //   </CmsButtonLink>
              // )
            })}
          </Stack>
        </SectionTextContainer>
        <SectionImage {...image} />
      </ResponsiveStack>
    </PageSection>
  )
}

export default RoleTemplate
