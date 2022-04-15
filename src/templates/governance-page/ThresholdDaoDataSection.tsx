import { Box, Button, HStack, Icon, Stack } from "@chakra-ui/react"
import { IoDocument } from "react-icons/all"
import Card from "../../components/Card"
import { PageSection } from "../../components/PageSection"
import { H2, H3, LabelMd } from "../../components"
import ExternalButtonLink from "../../components/Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "../../components/Navbar/types"
import { StatBoxGroup } from "../../components/StatBox"

const ThresholdDaoDataSection = () => {
  const totalTreasuryHoldings = "$50,000,000"

  const stats = [
    {
      amount: "50,000,000",
      label: "Delegated",
    },
    {
      amount: "20,000",
      label: "Staker DAO Addresses",
    },
    {
      amount: "30,000",
      label: "Token Holder DAO Addresses",
    },
  ]

  return (
    <PageSection bg="gray.900" pt={{ base: 0, md: 16 }}>
      <H3>Threshold DAO</H3>
      <Card mt={8} p={12} boxShadow="rgba(159, 162, 166, 0.1) 0px 0px 96px;">
        <HStack justifyContent="space-between" mb={16}>
          <Stack spacing={6}>
            <LabelMd color="gray.500">Total Treasury Holdings</LabelMd>
            <H2>{totalTreasuryHoldings}</H2>
          </Stack>
          <ExternalButtonLink
            variant="outline"
            leftIcon={<Icon as={IoDocument} />}
            href={"" as ExternalLinkHref}
          >
            Parts of the DAO
          </ExternalButtonLink>
        </HStack>
        <StatBoxGroup stats={stats} />
      </Card>
    </PageSection>
  )
}

export default ThresholdDaoDataSection
