import { FC } from "react"
import {
  HStack,
  SimpleGrid,
  StackProps,
  useMultiStyleConfig,
  VStack,
  SimpleGridProps,
} from "@chakra-ui/react"
import { BodySm, BodyMd, H1, H4, H5, H6 } from "../Typography"

interface Stat {
  amount: string
  currency?: string
  label: string
  variant?: string
  size?: string
}

const StatBox: FC<Stat & StackProps> = ({
  amount,
  currency,
  label,
  variant,
  size,
  ...restProps
}) => {
  const styles = useMultiStyleConfig("StatBox", { variant })
  const MainTextElement = size === "lg" ? H1 : H4
  const SecondaryText = size === "lg" ? H5 : BodyMd
  const MainTextSubTextElement = size === "lg" ? H6 : BodySm

  return (
    <VStack sx={styles.stack} {...restProps}>
      <HStack alignItems="flex-end">
        <MainTextElement sx={styles.mainText}>{amount}</MainTextElement>
        <MainTextSubTextElement textTransform="uppercase">
          {currency}
        </MainTextSubTextElement>
      </HStack>

      <SecondaryText sx={styles.secondaryText}>{label}</SecondaryText>
    </VStack>
  )
}

export const StatBoxGroup: FC<{ stats: Stat[] } & SimpleGridProps> = ({
  stats,
  ...restProps
}) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} mt={8} spacing={8} {...restProps}>
      {stats.map((stat) => (
        <StatBox key={stat.label} {...stat} />
      ))}
    </SimpleGrid>
  )
}

export default StatBox
