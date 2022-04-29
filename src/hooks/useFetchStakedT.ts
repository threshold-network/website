import { DUMMY_DATA } from "../templates/earn-page/staker/NetworkDistribution/dummyData"

const setTimeoutPromise = (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

const useFetchStakedT = () => {
  const fetchWeeklyData = async () => {
    await setTimeoutPromise(1000)
    return DUMMY_DATA
  }
  const fetchMonthlyData = async () => {
    await setTimeoutPromise(1000)
    return DUMMY_DATA
  }
  const fetchYearlyData = async () => {
    await setTimeoutPromise(1000)
    return DUMMY_DATA
  }

  return {
    fetchWeeklyData,
    fetchMonthlyData,
    fetchYearlyData,
  }
}

export default useFetchStakedT
