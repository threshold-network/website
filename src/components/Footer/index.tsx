import React, { FC } from "react"
import { Box, HStack, Stack, Icon, Link } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import NewsletterSubscribe from "./NewsletterSubscribe"
import { PageSection } from "../PageSection"
import ThresholdBrand from "../ThresholdBrand"
import SocialMediaLinks from "../../components/Navbar/SocialMediaLinks"
import { BodySm, LabelMd } from "../Typography"
import { FiArrowUpRight } from "react-icons/all"
import { graphql, useStaticQuery } from "gatsby"
import { ImageProps } from "../Image"
import useChakraBreakpoint from "../../hooks/useChakraBreakpoint"

const FooterContent: FC<{
  columns: {
    links: {
      label: string
      url: string
      isExternal: boolean
    }[]
    title: string
  }[]
  socialLinks: {
    icon: {
      alt: string
      image: ImageProps
    }
    label: string
    url: string
  }[]
}> = ({ columns, socialLinks }) => {
  const smScreen = useChakraBreakpoint("md")
  return (
    <PageSection bg="gray.900">
      <Stack
        direction="row"
        justifyContent={{ base: "center", md: "space-between" }}
        spacing={{ base: 12, lg: 24 }}
        w="full"
      >
        <Box>
          <ThresholdBrand display={{ base: "none", md: "block" }} p={0} />
          <Stack mt={{ base: 0, md: 28 }} spacing={{ base: 12, md: 6 }}>
            <SocialMediaLinks
              links={socialLinks}
              isMobileDrawerFooter={smScreen}
            />
            <ThresholdBrand
              display={{ base: "block", md: "none" }}
              justifyContent="center"
              p={0}
            />
            <Stack>
              <BodySm
                textAlign={{ base: "center", md: "left" }}
                color="gray.300"
              >
                ©2021 | A Thesis Build
              </BodySm>
              <BodySm
                textAlign={{ base: "center", md: "left" }}
                color="gray.300"
              >
                All Rights Reserved
              </BodySm>
            </Stack>
          </Stack>
        </Box>
        <HStack
          spacing={4}
          justifyContent="space-between"
          w="full"
          display={{ base: "none", md: "flex" }}
        >
          {columns.map((column) => {
            return (
              <Stack alignSelf="baseline" spacing={2} key={column.title}>
                <LabelMd textTransform="uppercase">{column.title}</LabelMd>
                {column.links.map((_) => (
                  <Link
                    key={_.label}
                    display="flex"
                    as={_.isExternal ? Link : GatsbyLink}
                    to={_.url}
                    href={_.url}
                    target={_.isExternal ? "_blank" : undefined}
                  >
                    <BodySm color="gray.300">{_.label}</BodySm>
                    {_.isExternal && (
                      <Icon ml={1} color="gray.300" as={FiArrowUpRight} />
                    )}
                  </Link>
                ))}
              </Stack>
            )
          })}
        </HStack>
      </Stack>
    </PageSection>
  )
}

const query = graphql`
  query Footer {
    allMarkdownRemark(filter: { frontmatter: { template: { eq: "footer" } } }) {
      edges {
        node {
          frontmatter {
            columns {
              links {
                isExternal
                label
                url
              }
              title
            }
            social_links {
              label
              url
              icon {
                image {
                  id
                  relativePath
                  internal {
                    mediaType
                  }
                  svg {
                    name
                    attributes {
                      key
                      value
                    }
                    children {
                      name
                      type
                      value
                      attributes {
                        key
                        value
                      }
                    }
                  }
                }
                alt
              }
            }
          }
        }
      }
    }
  }
`

const Footer = () => {
  const data = useStaticQuery(query)
  const { columns, social_links: socialLinks } =
    data.allMarkdownRemark.edges[0].node.frontmatter

  return (
    <Box>
      {/*<NewsletterSubscribe />*/}
      <FooterContent columns={columns} socialLinks={socialLinks} />
    </Box>
  )
}

export default Footer
