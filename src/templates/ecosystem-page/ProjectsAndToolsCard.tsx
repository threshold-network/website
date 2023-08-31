import { FC, useRef, useState } from "react"
import { Box, Button, SimpleGrid, Stack, Flex } from "@chakra-ui/react"
import Card from "../../components/Card"
import ExternalButtonLink from "../../components/Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "../../components/Navbar/types"
import { Image, ImageProps } from "../../components"

export enum Categories {
  ALL = "all",
  PROJECT = "project",
  TOOL = "tool",
  INFRASTRUCTURE = "infrastructure",
  INTEGRATION = "integration",
}

export interface CardButton {
  label: string
  url: string
  variant: string
}

export interface CardCategory {
  label: string
}

export interface ProjectsAndToolsCardProps {
  image: ImageProps
  title: string
  description: string
  categories: CardCategory[]
  timestamp: number
  buttons: CardButton[]
}

export const ProjectsAndToolsCard: FC<ProjectsAndToolsCardProps> = ({
  image,
  title,
  description,
  buttons,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)

  return (
    <Stack spacing={6}>
      <Box
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        boxShadow={"0px 0px 90px 4px rgba(153, 116, 255, 0.04)"}
        rounded="2xl"
        p="3px" // Adjust padding to your needs
        bgGradient={
          isHovered
            ? "linear-gradient(120.19deg, #BD30FF 3.32%, #7D00FF 95.02%)"
            : "none"
        }
      >
        <Card
          m="auto"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          w="100%"
          borderColor={isHovered ? "transparent" : "gray.700"}
        >
          <Stack spacing={7}>
            <Stack direction="row" alignItems="center" gap={4}>
              <Image h="60px" w="60px" {...image} />
              <Card.Title noOfLines={2} maxWidth="120px" fontWeight="medium">
                {title}
              </Card.Title>
            </Stack>
            <Card.Body
              as="div"
              color="gray.400"
              lineHeight="24px"
              noOfLines={3}
            >
              {description}
            </Card.Body>
            <SimpleGrid columns={2} spacing={4} mt={12}>
              {buttons.map((button: CardButton, i) => {
                switch (button.variant) {
                  case "EXTERNAL_OUTLINE":
                    return (
                      <ExternalButtonLink
                        key={i}
                        href={button.url as ExternalLinkHref}
                        variant="outline"
                        size="sm"
                        width="100%"
                        py="17px"
                        _hover={{
                          bgColor: "white",
                          color: "black",
                        }}
                      >
                        {button.label}
                      </ExternalButtonLink>
                    )
                  case "EXTERNAL_SOLID":
                    return (
                      <ExternalButtonLink
                        key={i}
                        href={button.url as ExternalLinkHref}
                        variant="solid"
                        border="1px solid"
                        bgColor="white"
                        color="black"
                        size="sm"
                        width="100%"
                        py="17px"
                        _hover={{
                          borderColor: "white",
                          bgColor: "transparent",
                          color: "white",
                        }}
                      >
                        {button.label}
                      </ExternalButtonLink>
                    )
                  default:
                    return <Button h="auto" px={6} py={3} {...button} />
                }
              })}
            </SimpleGrid>
          </Stack>
        </Card>
      </Box>
    </Stack>
  )
}
