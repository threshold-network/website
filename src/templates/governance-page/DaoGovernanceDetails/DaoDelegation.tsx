import { DAO } from "./types"
import { FC } from "react"
import { HStack, Stack } from "@chakra-ui/react"
import { PageSection, ResponsiveStack } from "../../../components/PageSection"
import { BodyLg, BodyMd, BodySm, H3, H4, LabelMd } from "../../../components"
import ExternalButtonLink from "../../../components/Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "../../../components/Navbar/types"
import Card from "../../../components/Card"
import Progress from "../../../components/Progress"

const DaoDelegation: FC<{ selectedDao: DAO }> = ({ selectedDao }) => {
  const totalDelegated = "2,000,000 T"
  const maxDelegation = "100,000,000"
  const percentDelegated = 20

  return (
    <PageSection bg="gray.900">
      <H4>
        {selectedDao === "STAKER" ? "Staker" : "Token Holder"} DAO Delegation
      </H4>
      <ResponsiveStack spacing={12} mt={12}>
        <Card w="full">
          <BodyLg color="gray.100">
            Members of the Staker DAO are exclusively stakers. Get started below
            voting on staker proposals.
          </BodyLg>
          <ExternalButtonLink href={"NEED_URL" as ExternalLinkHref} mt={8}>
            Delegate your vote
          </ExternalButtonLink>
        </Card>
        <Stack w="full" spacing={4} justifyContent="center">
          <LabelMd color="gray.500">Total Delegated</LabelMd>
          <H3 color="gray.100">{totalDelegated}</H3>
          <HStack w="full">
            <Progress
              w="full"
              height="8px"
              value={percentDelegated}
              size="xs"
              variant="brand"
            />
            <BodySm color="gray.500">{percentDelegated}%</BodySm>
          </HStack>
          <BodyMd color="gray.500">Out of {maxDelegation}</BodyMd>
        </Stack>
      </ResponsiveStack>
    </PageSection>
  )
}

export default DaoDelegation
