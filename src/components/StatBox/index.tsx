import { FC } from "react"
import { SimpleGrid, VStack } from "@chakra-ui/react"
import { BodyMd, H4 } from "../Typography"

interface Stat {
  amount: string
  label: string
}

const StatBox: FC<Stat> = ({ amount, label }) => {
  return (
    <VStack bg="gray.800" p={8} borderRadius="md">
      <H4>{amount}</H4>
      <BodyMd color="gray.500">{label}</BodyMd>
    </VStack>
  )
}

export const StatBoxGroup: FC<{ stats: Stat[] }> = ({ stats }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} mt={8} spacing={8}>
      {stats.map((stat) => (
        <StatBox {...stat} />
      ))}
    </SimpleGrid>
  )
}

export default StatBox
