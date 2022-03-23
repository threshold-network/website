import { FC } from "react"
import { graphql } from "gatsby"
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  StackDivider,
} from "@chakra-ui/react"
import { BodyLg, H1, H5, ImageProps, SplashCard } from "../components"
import useChakraBreakpoint from "../hooks/useChakraBreakpoint"

const HomePageTemplate: FC<any> = ({ data }) => {
  const { hero, summary } = data.markdownRemark.frontmatter
  const mediumBreakpoint = useChakraBreakpoint("md")

  return (
    <Container maxW="4xl" mt={20} paddingBottom={36}>
      <Box as="section">
        <H1
          color="white"
          fontWeight="700"
          fontSize={{ base: "44px", sm: "52px", lg: "60px" }}
          maxW="688px"
        >
          {hero.title}
        </H1>
        <H5
          color="brand.100"
          mt={6}
          dangerouslySetInnerHTML={{ __html: hero.body }}
        />
        <Stack
          mt={16}
          spacing={8}
          direction={mediumBreakpoint ? "column" : "row"}
        >
          {hero.ctaButtons.map(
            (_: { label: string; url: string }, index: number) => (
              // TODO: Replace with `ExternalButtonLink` component.
              <Button
                key={_.label}
                variant={index > 0 ? "outline" : undefined}
                height="auto"
                width="auto"
                fontSize="lg"
                px="40px"
                py="20px"
                isFullWidth
                onClick={() => {
                  window.open(_.url)
                }}
              >
                {_.label}
              </Button>
            )
          )}
        </Stack>
      </Box>
      <Box as="section">
        <H5 color="white" mt={32}>
          {summary.title}
        </H5>
        <BodyLg
          color="brand.100"
          mt={6}
          dangerouslySetInnerHTML={{ __html: summary.body }}
        />
        <Box position="relative">
          {/* Divider that spans all 3 cards on large screen sizes */}
          {!mediumBreakpoint && (
            <Divider
              position="absolute"
              top="88px"
              zIndex="1"
              direction="horizontal"
              borderColor="brand.300"
            />
          )}
          <Stack
            direction={{ base: "column", md: "row" }}
            mt={8}
            bg="blackAlpha.300"
            divider={<StackDivider borderColor="brand.300" />}
            border="1px solid"
            borderColor="brand.300"
          >
            {summary.cards.map(
              (
                card: {
                  title: string
                  body: string
                  icon: { alt: string; image: Omit<ImageProps, "alt"> }
                },
                i: number
              ) => (
                <SplashCard
                  key={card.title}
                  title={card.title}
                  body={card.body}
                  icon={{ ...card.icon.image, alt: card.icon.alt }}
                  borderTop={
                    mediumBreakpoint && i !== 0 ? "1px solid #9974FF" : 0
                  }
                  borderBottom={mediumBreakpoint ? "1px solid #9974FF" : 0}
                  borderLeft={mediumBreakpoint || i === 0 ? 0 : undefined}
                  borderRight={
                    mediumBreakpoint || i === summary.cards.length - 1
                      ? 0
                      : undefined
                  }
                  isCardColumn={mediumBreakpoint}
                />
              )
            )}
          </Stack>
        </Box>
      </Box>
    </Container>
  )
}

export const query = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        hero {
          title
          body
          ctaButtons {
            label
            url
          }
        }
        summary {
          title
          body
          cards {
            title
            body
            icon {
              image {
                id
                absolutePath
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
`

export default HomePageTemplate
