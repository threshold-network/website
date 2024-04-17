import { FC } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container, HStack, useDisclosure } from "@chakra-ui/react"
import ThresholdBrand from "../ThresholdBrand"
import SocialMediaLinks from "./SocialMediaLinks"
import HamburgerButton from "./HamburgerButton"
import { LinkInfo } from "./types"
import WhatsNextBanner from "./WhatsNextBanner"
import MobileDrawer from "./MobileNav/MobileDrawer"
import DesktopNavLinks from "./DesktopNav/DesktopNavLinks"
import { CardButton } from "../Card"
import NavCTAButtons from "./NavCTAButtons"

export const Navbar: FC = () => {
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawOpen,
    onClose: onDrawerClose,
  } = useDisclosure()

  const { isOpen: showBanner, onClose: closeBanner } = useDisclosure({
    defaultIsOpen: true,
  })
  const data = useStaticQuery(query)
  const socialLinks =
    data.allMarkdownRemark.edges[0].node.frontmatter.social_links
  const navLinks = data.allMarkdownRemark.edges[0].node.frontmatter
    .nav_items as LinkInfo[]
  const menuButtons = data.allMarkdownRemark.edges[0].node.frontmatter
    .menu_buttons as CardButton[]

  return (
    <>
      {showBanner && <WhatsNextBanner onClose={closeBanner} />}
      <HStack
        w="100%"
        bg="gray.900"
        h="90px"
        borderBottom="1px solid"
        borderColor="gray.700"
        as="header"
      >
        <Container
          h="100%"
          maxW="none"
          display="flex"
          justifyContent="space-between"
          pr={{ base: 0, xl: 8 }}
        >
          <ThresholdBrand />
          <MobileDrawer
            isOpen={isDrawerOpen}
            onClose={onDrawerClose}
            navLinks={navLinks}
            socialLinks={socialLinks}
            menuButtons={menuButtons}
          />
          <DesktopNavLinks navLinks={navLinks} menuButtons={menuButtons} />
          <SocialMediaLinks links={socialLinks} pl={8} />
          <HamburgerButton openDrawer={onDrawOpen} />
        </Container>
      </HStack>
    </>
  )
}

const query = graphql`
  query Navbar {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "nav-bar" } } }
    ) {
      edges {
        node {
          frontmatter {
            nav_items {
              label
              url
              isExternal
              subitems {
                url
                label
                isExternal
              }
            }
            menu_buttons {
              label
              url
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
