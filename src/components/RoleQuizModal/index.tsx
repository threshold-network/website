import React, { FC, useMemo, useState } from "react"
import QuizStage from "./QuizStage"
import { GoBack, GoForward, QuizStageData, Role } from "./types"
import QuizResult from "./QuizResult"
import { graphql, useStaticQuery } from "gatsby"
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"
import { useQuizModal } from "../../contexts/QuizModalContext"

interface Props {
  stages: {
    questionPage: QuizStageData
    resultPage: {
      title: string
    }
  }[]
}

const RoleQuizModalTemplate: FC<Props> = ({ stages }) => {
  const [currentStageIdx, setCurrentStageIdx] = useState(0)
  const currentStage = useMemo(() => stages[currentStageIdx], [currentStageIdx])

  const [result, setResult] = useState<Role | undefined>()

  const goForward: GoForward = (result) => {
    if (result === "NEXT") {
      setCurrentStageIdx(currentStageIdx + 1)
    } else if (currentStageIdx !== stages.length - 1) {
      setResult(result)
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
    <QuizStage
      displayBackButton={currentStageIdx > 0}
      stage={currentStage.questionPage}
      goForward={goForward}
      goBack={goBack}
    />
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
              questionPage {
                title
                options {
                  label
                  result
                }
              }
              resultPage {
                title
              }
            }
          }
        }
      }
    }
  }
`

const RoleQuiz = () => {
  const data = useStaticQuery(query)

  const { stages } = data.allMarkdownRemark.edges[0].node.frontmatter
  console.log(stages)
  const { setIsOpen, isOpen } = useQuizModal()

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="3xl">
      <ModalOverlay />
      <ModalContent bg="gray.900" minH="500px">
        <ModalHeader>Quiz</ModalHeader>
        <ModalCloseButton />
        <ModalBody p={20}>
          <RoleQuizModalTemplate stages={stages} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default RoleQuiz
