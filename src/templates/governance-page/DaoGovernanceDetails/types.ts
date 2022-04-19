export type DAO = "STAKER" | "TOKEN_HOLDER"

export interface SnapshotProposal {
  end: number
  start: number
  id: string
  link: string
  scores: number[]
  state: string
  title: string
}

export interface Proposal {
  title: string
  dateRange: string
  yesPercent: number
  noPercent: number
  abstainPercent: number
  proposalUrl: string
}

export const SNAPSHOT_URL = "https://hub.snapshot.org/graphql"
