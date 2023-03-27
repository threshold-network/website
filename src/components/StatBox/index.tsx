import { FC } from "react"
import {
  SimpleGrid,
  StackProps,
  TextProps,
  useMultiStyleConfig,
  useStyleConfig,
  VStack,
} from "@chakra-ui/react"
import { BodyMd, H4 } from "../Typography"

interface Stat {
  amount: string
  label: string
  variant?: string
}

const StatBox: FC<Stat> = ({ amount, label, variant }) => {
  const styles = useMultiStyleConfig("StatBox", { variant })
  return (
    <VStack sx={styles.stack}>
      <H4 sx={styles.mainText}>{amount}</H4>
      <BodyMd sx={styles.secondaryText}>{label}</BodyMd>
    </VStack>
  )
}

export const StatBoxGroup: FC<{ stats: Stat[] }> = ({ stats }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} mt={8} spacing={8}>
      {stats.map((stat) => (
        <StatBox key={stat.label} {...stat} />
      ))}
    </SimpleGrid>
  )
}

export default StatBox
