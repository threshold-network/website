import { useEffect, useState } from "react"
import { gql, request } from "graphql-request"
import BN from "bignumber.js"

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
  start: number
  end: number
  yesPercent: number
  noPercent: number
  abstainPercent: number
  proposalUrl: string
}

export const SNAPSHOT_URL = "https://hub.snapshot.org/graphql"

interface UseSnapshotProposals {
  fetchProposals: () => void
  proposals: Proposal[]
}

const useSnapshotProposals = (): UseSnapshotProposals => {
  const [proposals, setProposals] = useState<Proposal[]>([])

  const fetchProposals = async () => {
    const query = gql`
      {
        proposals(
          first: 2
          skip: 0
          where: { space_in: ["threshold.eth"] }
          orderBy: "created"
          orderDirection: desc
        ) {
          id
          author
          title
          link
          start
          end
          state
          choices
          scores
        }
      }
    `
    const result: { proposals: SnapshotProposal[] } = await request(
      SNAPSHOT_URL,
      query
    )

    const scrubbedProposals = result.proposals.map((proposal) => {
      const votes = proposal.scores.map((s) => new BN(s))
      const [yesVotes, noVotes] = votes
      const totalVotes = votes.reduce(
        (partialSum, a) => partialSum.plus(a),
        new BN(0)
      )

      const yesPercent = yesVotes
        .div(totalVotes)
        .multipliedBy(100)
        .precision(2)
        .toNumber()

      const noPercent = noVotes
        .div(totalVotes)
        .multipliedBy(100)
        .precision(2)
        .toNumber()

      return {
        title: proposal.title,
        start: proposal.start,
        end: proposal.end,
        yesPercent,
        noPercent,
        abstainPercent: 0,
        proposalUrl: proposal.link,
      }
    })

    setProposals(scrubbedProposals)
  }

  useEffect(() => {
    fetchProposals()
  }, [])

  return {
    fetchProposals,
    proposals,
  }
}
export default useSnapshotProposals
