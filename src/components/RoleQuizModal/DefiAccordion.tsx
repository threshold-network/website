import {
  Box,
  Button,
  Collapse,
  HStack,
  Icon,
  useDisclosure,
} from "@chakra-ui/react"
import { BodyMd } from "../Typography"
import { IoChevronDownSharp, IoChevronForwardSharp } from "react-icons/all"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query DefiAccordion {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "roleQuizModal" } } }
    ) {
      edges {
        node {
          frontmatter {
            defiAccordion {
              buttonText
              accordionText
            }
          }
        }
      }
    }
  }
`

const DefiAccordion = () => {
  const data = useStaticQuery(query)
  const { buttonText, accordionText } =
    data.allMarkdownRemark.edges[0].node.frontmatter.defiAccordion
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box mt={8} maxW="600px">
      <Button
        variant="ghost"
        onClick={onToggle}
        rightIcon={
          <Icon as={isOpen ? IoChevronDownSharp : IoChevronForwardSharp} />
        }
      >
        {buttonText}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <BodyMd color="gray.300" mt="4">
          {accordionText}
        </BodyMd>
      </Collapse>
    </Box>
  )
}

export default DefiAccordion
