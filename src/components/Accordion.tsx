import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionProps,
} from "@chakra-ui/react"
import { BodyLg } from "./Typography"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import React, { FC } from "react"

interface Props extends AccordionProps {
  items: {
    title: string | JSX.Element
    body: string | JSX.Element
  }[]
}

const Accordion: FC<Props> = ({ items, ...accordionProps }) => {
  return (
    <ChakraAccordion allowMultiple mt={12} {...accordionProps}>
      {items.map((item, i) => {
        return (
          <AccordionItem key={i}>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionButton
                    display="flex"
                    justifyContent="space-between"
                    py={10}
                  >
                    <BodyLg>{item.title}</BodyLg>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                  <AccordionPanel pb={4}>{item.body}</AccordionPanel>
                </>
              )
            }}
          </AccordionItem>
        )
      })}
    </ChakraAccordion>
  )
}

export default Accordion
