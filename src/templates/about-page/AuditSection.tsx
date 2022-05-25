import React, { FC } from "react"
import { Box, Button, HStack, Stack } from "@chakra-ui/react"
import { FiArrowUpRight } from "react-icons/all"
import { BodyLg, H3, Image, ImageProps, LabelSm } from "../../components"
import Card from "../../components/Card"
import { PageSection } from "../../components/PageSection"

interface Props {
  audits: {
    title: string
    url: string
    date: string
    auditImage: ImageProps
  }[]
}

const AuditSection: FC<Props> = ({ audits }) => {
  return (
    <PageSection bg="gray.800" withSmallPadding id="audits">
      <H3 mb={8}>Audits</H3>
      {audits.map((audit) => (
        <Card maxW="512px" p={4}>
          <HStack>
            <Box>
              <BodyLg>{audit.title}</BodyLg>
              <LabelSm color="gray.500" textDecoration="uppercase" mt={2}>
                {audit.date}
              </LabelSm>
              <Button
                mt={8}
                as="a"
                href={audit.url}
                target="_blank"
                variant="link"
                rightIcon={<FiArrowUpRight />}
              >
                Read
              </Button>
            </Box>
            <Image maxH="164px" {...audit.auditImage} />
          </HStack>
        </Card>
      ))}
    </PageSection>
  )
}

export default AuditSection
