import { gql, request } from "graphql-request"
import { T_NETWORK_SUBGRAPH_URL } from "../config/subgraph"

// const minStakeQuery = gql`
//   query MinStake {
//     minStakeAmounts(orderDirection: desc, orderBy: updatedAt, first: 1) {
//       amount
//     }
//   }
// `

const ONE_SEC_IN_MILISECONDS = 1000
const ONE_DAY_IN_SECONDS = 86400
const ONE_WEEK_IN_SECONDS = 7 * ONE_DAY_IN_SECONDS
const ONE_MONTH_IN_SECONDS = 30 * ONE_DAY_IN_SECONDS
const ONE_YEAR_IN_SECONDS = 365 * ONE_DAY_IN_SECONDS

enum TStatsPeriods {
  Week,
  Month,
  Year,
}

const statsPeriodsMap: Record<
  TStatsPeriods,
  { period: number; pointPerPeriod: number }
> = {
  [TStatsPeriods.Week]: {
    period: ONE_WEEK_IN_SECONDS,
    pointPerPeriod: ONE_DAY_IN_SECONDS,
  },
  [TStatsPeriods.Month]: {
    period: ONE_MONTH_IN_SECONDS,
    pointPerPeriod: 3 * ONE_DAY_IN_SECONDS,
  },
  [TStatsPeriods.Year]: {
    period: ONE_YEAR_IN_SECONDS,
    pointPerPeriod: ONE_MONTH_IN_SECONDS,
  },
}

const buildStatsQuery = (alias: string, startDate: string, endDate: string) => {
  return `${alias}: epoches(
    orderBy: startTime
    orderDirection: desc
    first: 1
    where: { startTime_gte: "${startDate}", startTime_lt: "${endDate}" }
  ) {
    x: totalStaked
    y: startTime
    duration
  }`
}

const dateToUnixTimestamp = (date: Date = new Date()) => {
  return Math.floor(date.getTime() / ONE_SEC_IN_MILISECONDS)
}

const fetchTNetworkStats = async (period: TStatsPeriods) => {
  const currentDateTimestamp = dateToUnixTimestamp()
  let startDate = currentDateTimestamp - statsPeriodsMap[period].period
  const queries: string[] = []

  while (startDate < currentDateTimestamp) {
    const endDate = startDate + statsPeriodsMap[period].pointPerPeriod
    queries.push(
      buildStatsQuery(
        `index${startDate}`,
        startDate.toString(),
        endDate.toString()
      )
    )
    startDate = endDate
  }
  try {
    const query = gql`query StakingStats {
      ${queries.reduce(
        (reducer, query) => `
      ${reducer}
      ${query}
      `,
        ""
      )}
    }`

    const data = await request(T_NETWORK_SUBGRAPH_URL, query)
    return Object.values(data).flat(1)
  } catch (error) {
    console.error("Could not get data from the T network subgraph", error)
  }
}

const useFetchTNetworkStats = () => {
  const fetchWeeklyData = async () => {
    return await fetchTNetworkStats(TStatsPeriods.Week)
  }
  const fetchMonthlyData = async () => {
    return await fetchTNetworkStats(TStatsPeriods.Month)
  }
  const fetchYearlyData = async () => {
    return await fetchTNetworkStats(TStatsPeriods.Year)
  }

  return {
    fetchWeeklyData,
    fetchMonthlyData,
    fetchYearlyData,
  }
}

export default useFetchTNetworkStats
