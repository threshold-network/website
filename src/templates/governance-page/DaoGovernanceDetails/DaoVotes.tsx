import { FC, useEffect, useState } from "react"
import { gql, request } from "graphql-request"
import BN from "bignumber.js"
import dayjs from "dayjs"
import { PageSection, ResponsiveStack } from "../../../components/PageSection"
import { H4 } from "../../../components"
import VoteResultsCard from "./VoteResultsCard"
import { Proposal, SNAPSHOT_URL, SnapshotProposal } from "./types"

const DaoVotes: FC = () => {
  const [proposals, setProposals] = useState<Proposal[]>([])

  const getProposals = async () => {
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
      const dateRange = `${dayjs(proposal.start * 1000).format(
        "MMM D YYYY"
      )} - ${dayjs(proposal.end * 1000).format("MMM D YYYY")}`

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
        dateRange: dateRange,
        yesPercent,
        noPercent,
        abstainPercent: 0,
        proposalUrl: proposal.link,
      }
    })

    setProposals(scrubbedProposals)
  }

  useEffect(() => {
    getProposals()
  }, [])

  return (
    <PageSection bg="gray.900" withSmallPadding>
      <H4>Votes</H4>
      <ResponsiveStack spacing={12} mt={12}>
        {proposals.map((p) => (
          <VoteResultsCard {...p} />
        ))}
      </ResponsiveStack>
    </PageSection>
  )
}

export default DaoVotes
