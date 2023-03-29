import { Box, BoxProps } from "@chakra-ui/react"
import { FC } from "react"
import { H5, ImageProps, ImageRows } from "../../../components"

export interface TBTCPartnerImage {
  name: string
  image: ImageProps
}

interface TBTCPartnersProps {
  minters: TBTCPartnerImage[]
  guardians: TBTCPartnerImage[]
}

export const TBTCPartners: FC<TBTCPartnersProps & BoxProps> = ({
  minters,
  guardians,
  ...restProps
}) => {
  const data = [
    {
      title: "MINTERS",
      images: minters,
    },
    {
      title: "GUARDIANS",
      images: guardians,
    },
  ]
  return (
    <Box {...restProps}>
      <H5 mb={"2rem"}>tBTC is backed by the following partners.</H5>
      <ImageRows data={data} />
    </Box>
  )
}
