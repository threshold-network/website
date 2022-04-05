export type QuizStageName = "BTC" | "STAKE" | "LIQUIDITY" | "TOKEN_HOLDER"
export type Role =
  | "BTC_ROLE"
  | "STAKER_ROLE"
  | "LIQUIDITY_PROVIDER_ROLE"
  | "TOKEN_HOLDER_ROLE"

export interface QuizOption {
  text: string
  deadEnd?: Role
}

export interface QuizStageData {
  stage: QuizStageName
  title: string
  options: QuizOption[]
}

export interface GoForward {
  (deadEndRole?: Role): void
}

export interface GoBack {
  (): void
}
