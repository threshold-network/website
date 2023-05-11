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
        spacingY="5.5rem"
        justifyContent="space-between"
        templateColumns={{
          base: "repeat(2, 80px)",
          md: "repeat(4, 80px)",
          lg: "repeat(6, 80px)",
        }}
      >
        {partners.map(renderPartners)}
      </SimpleGrid>
    </SectionTemplate>
  </>
)
