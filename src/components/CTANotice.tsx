import React from "react"
import { Box, Link, Text } from "@chakra-ui/react"
import Card from "./Card"

interface CTANoticeProps {
  label: string
  url: string
  description: string
}

const CTANotice: React.FC<CTANoticeProps> = ({ label, url, description }) => {
  return (
    <Card
      display="flex"
      alignItems="center"
      gap="12px"
      borderRadius="28px"
      w="fit-content"
      py="7px"
      px="15px"
      _hover={{
        cursor: "pointer",
        bg: "blackAlpha.400",
        textDecoration: "none",
      }}
      as={Link}
      href={url}
      target="_blank"
    >
      <Box
        fontSize="15px"
        px="12px"
        py="1px"
        borderRadius="28px"
        background="linear-gradient(to bottom left, #BD30FF 0%, #7D00FF 100%)"
      >
        {label}
      </Box>
      <Text fontSize="15px" lineHeight="20px">
        {description}
      </Text>
    </Card>
  )
}

export default CTANotice
