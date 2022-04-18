import { FC } from "react"
import { DAO } from "./types"
import { Button, HStack } from "@chakra-ui/react"

const DaoSelector: FC<{
  selectedDao: DAO
  setSelectedDao: (dao: DAO) => void
}> = ({ selectedDao, setSelectedDao }) => {
  return (
    <HStack bg="gray.800" borderRadius="md" p={4}>
      <Button
        onClick={() => setSelectedDao("STAKER")}
        variant={selectedDao === "STAKER" ? "outline" : "ghost"}
        width="full"
      >
        Staker DAO
      </Button>
      <Button
        onClick={() => setSelectedDao("TOKEN_HOLDER")}
        variant={selectedDao === "TOKEN_HOLDER" ? "outline" : "ghost"}
        width="full"
      >
        Token Holder DAO
      </Button>
    </HStack>
  )
}

export default DaoSelector
