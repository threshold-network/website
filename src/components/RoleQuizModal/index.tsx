import React, { FC, useMemo, useState } from "react"
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
    console.log("going forward witht he result ", result)
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
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <RoleQuizModalTemplate stages={stages} />
        </ModalBody>
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
