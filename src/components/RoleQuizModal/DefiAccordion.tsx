import { Box, Collapse, HStack, Icon, useDisclosure } from "@chakra-ui/react"
import { BodyMd } from "../Typography"
import { IoChevronDownSharp, IoChevronForwardSharp } from "react-icons/all"
import React from "react"

const DefiAccordion = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box mt={8} maxW="600px">
      <HStack onClick={onToggle} cursor="pointer">
        <BodyMd color="gray.300" userSelect="none">
          What is DeFi?
        </BodyMd>
        <Icon as={isOpen ? IoChevronDownSharp : IoChevronForwardSharp} />
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <BodyMd color="gray.300" mt="4">
          Short for decentralized finance, DeFi is an umbrella term for
          peer-to-peer financial services on public blockchains, primarily
          Ethereum.
        </BodyMd>
      </Collapse>
    </Box>
  )
}

export default DefiAccordion
