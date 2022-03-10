import { FC } from "react"
import { Container } from "@chakra-ui/react"

const QuizContainer: FC = ({ children }) => {
  return (
    <Container
      maxW="1040px"
      bg="blackAlpha.50"
      border="1px solid"
      borderColor="gray.50"
      borderRadius="12px"
    >
      {children}
    </Container>
  )
}

export default QuizContainer
