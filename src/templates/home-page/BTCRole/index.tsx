import { FC } from "react"
import { Divider, SimpleGrid } from "@chakra-ui/react"
import SectionTemplate, { RoleTemplateProps } from "../SectionTemplate"
import { renderPartners, TBTCPartner } from "../../../components/tBTCPartners"
import { H4 } from "../../../components"

interface BTCRoleProps {
  partners: TBTCPartner[]
}

export const BTCRole: FC<RoleTemplateProps & BTCRoleProps> = ({
  partners,
  ...props
}) => (
  <>
    <SectionTemplate {...props}>
      <Divider my="5.5rem" />
      <H4 color="gray.300">tBTC is backed by the following partners.</H4>
      <SimpleGrid
        mt="4.5rem"
        columns={{ base: 2, md: 4, lg: 6 }}
        spacingY="5.5rem"
        justifyItems="center"
      >
        {partners.map(renderPartners)}
      </SimpleGrid>
    </SectionTemplate>
  </>
)
