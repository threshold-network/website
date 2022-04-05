import React, { useMemo, useState } from "react"
import QuizStage from "./QuizStage"
import { GoBack, GoForward, QuizStageData, Role } from "./types"
import QuizResult from "./QuizResult"
import { graphql, useStaticQuery } from "gatsby"
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"
import { useQuizModal } from "../../contexts/QuizModalContext"

const quizStages: QuizStageData[] = [
  {
    stage: "BTC",
    title: "Do you own btc",
    options: [
      {
        text: "yes - btc",
        deadEnd: "BTC_ROLE",
      },
      {
        text: "no - btc",
      },
    ],
  },
  {
    stage: "STAKE",
    title: "are you comfortable staking",
    options: [
      {
        text: "yes run node myself",
        deadEnd: "STAKER_ROLE",
      },
      {
        text: "yes someone else runs node",
        deadEnd: "STAKER_ROLE",
      },
      {
        text: "no  i dont to stake",
      },
    ],
  },
  {
    stage: "LIQUIDITY",
    title: "is liquidity important",
    options: [
      {
        text: "yes i like liquidity",
        deadEnd: "LIQUIDITY_PROVIDER_ROLE",
      },
      {
        text: "no what else",
        deadEnd: "TOKEN_HOLDER_ROLE",
      },
    ],
  },
]

const RoleQuizModalTemplate = () => {
  const [currentStageIdx, setCurrentStageIdx] = useState(0)
  const currentStage = useMemo(
    () => quizStages[currentStageIdx],
    [currentStageIdx]
  )

  const [result, setResult] = useState<Role | undefined>()

  const goForward: GoForward = (deadEndRole) => {
    if (deadEndRole) {
      setResult(deadEndRole)
    } else if (currentStageIdx !== quizStages.length - 1) {
      setCurrentStageIdx(currentStageIdx + 1)
    }
  }

  const goBack: GoBack = () => {
    if (currentStageIdx > 0) {
      setCurrentStageIdx(currentStageIdx - 1)
    }
  }

  if (result) {
    return <QuizResult result={result} />
  }

  return (
    <QuizStage stage={currentStage} goForward={goForward} goBack={goBack} />
  )
}

const query = graphql`
  query RoleQuizModal {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "roleQuizModal" } } }
    ) {
      edges {
        node {
          frontmatter {
            stages {
              stageId
            }
          }
        }
      }
    }
  }
`

const RoleQuiz = () => {
  const data = useStaticQuery(query)
  // const { stages } = data.allMarkdownRemark.edges[0].node.frontmatter
  const { setIsOpen, isOpen } = useQuizModal()

  // console.log("stages", stages)
  console.log("isOpen", isOpen)
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{/*<RoleQuizModalTemplate />*/}</ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => setIsOpen(false)}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default RoleQuiz
