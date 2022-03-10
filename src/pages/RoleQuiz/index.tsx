import React, { useMemo, useState } from "react"
import QuizStage from "./QuizStage"
import { GoBack, GoForward, QuizStageData, Role } from "./types"
import QuizResult from "./QuizResult"

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

const RoleQuiz = () => {
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

export default RoleQuiz
