import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import type { ChartArea, ChartData } from "chart.js"
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js"
import numeral from "numeral"
import { Chart } from "react-chartjs-2"
import { Box, Button, HStack, Spinner } from "@chakra-ui/react"
import BigNumber from "bignumber.js"
import { formatEther } from "ethers/lib/utils"
import { H5 } from "../../../../components"
import useFetchStakedT from "../../../../hooks/useFetchTNetworkStakingStats"

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
)

type Filter = "Week" | "Month" | "Year"

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorStart = "#52545a"
  const colorEnd = "#1D2229"
  const gradient = ctx.createLinearGradient(0, area.top, 0, area.bottom)
  gradient.addColorStop(0, colorStart)
  gradient.addColorStop(1, colorEnd)
  return gradient
}

function TStakedChart() {
  const chartRef = useRef<ChartJS>(null)
  const [filter, setFilter] = useState<Filter>("Year")
  const [isLoading, setLoading] = useState(false)
  const [chartData, setChartData] = useState<ChartData<"bar">>({
    datasets: [],
  })
  const { fetchWeeklyData, fetchMonthlyData, fetchYearlyData } =
    useFetchStakedT()

  const options = useMemo(
    () => ({
      plugins: {
        legend: { display: false },
      },
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
            fontColor: "white",
            padding: 20,
            // @ts-ignore
            callback: function (val, index, tick) {
              // only show label for first and last of the data set
              if (index === 0 || index === tick.length - 1) {
                const dateOptions = {
                  year: filter === "Week" ? undefined : "numeric",
                  month: "short",
                  day: filter === "Week" ? "numeric" : undefined,
                }
                // @ts-ignore
                const date = this.getLabelForValue(val)

                return new Date(+date * 1000).toLocaleDateString(
                  "en-US",
                  // @ts-ignore
                  dateOptions
                )
              }

              return ""
            },
          },
        },
        y: {
          ticks: {
            fontColor: "white",
            maxTicksLimit: 5,
            padding: 20,
            callback: (value: string | number) => {
              return numeral(value).format("0.00a")
            },
          },
          grid: {
            borderDash: [18, 18],
            borderDashOffset: 18,
            color: function (context: any) {
              // removes the bottom horizontal line - may be needed if gradient cannot be transparent
              // if (context.index === 0) {
              //   return undefined
              // }
              return "#718096" //gray.500"
            },
          },
        },
      },
    }),
    [filter]
  )

  const fetchAndUpdateChartData = useCallback(async () => {
    const chart = chartRef.current

    if (!chart) {
      return
    }

    setLoading(true)

    const dataFetcher =
      filter === "Week"
        ? fetchWeeklyData
        : filter === "Month"
        ? fetchMonthlyData
        : fetchYearlyData

    const data = await dataFetcher()

    const scrubbedData = data?.map((datum) => {
      // @ts-ignore
      const { x: amountStaked, y: date } = datum || {}
      const amountBn = new BigNumber(amountStaked)

      // TODO: investigate if this conversion is correct
      const amountToken = Math.floor(+formatEther(amountStaked || "0") / 1000)

      // flat map wil skip over this element, as the data is not valid
      if (isNaN(amountBn.toNumber())) {
        return []
      }

      return {
        y: amountToken.toString(),
        // @ts-ignore
        x: date, // new Date(+date * 1000).toLocaleDateString("en-gb", dateOptions),
      }
    })

    const dataWithConfig = {
      labels: [],
      datasets: [
        {
          // TODO: figure out why the ctx is null
          // backgroundColor: createGradient(chart.ctx, chart.chartArea),
          borderColor: "#9974FF",
          pointRadius: 0,
          fill: true,
          lineTension: 0.5,
          data: scrubbedData,
        },
      ],
    }

    // @ts-ignore
    setChartData(dataWithConfig)
    setLoading(false)
  }, [chartRef, filter])

  const changeFilter = (filter: Filter) => {
    if (!isLoading) {
      setFilter(filter)
    }
  }

  useEffect(() => {
    fetchAndUpdateChartData()
  }, [filter])

  return (
    <Box mt={8}>
      <HStack justifyContent="space-between">
        <H5>Cumulative T Staked</H5>
        <HStack>
          {(["Week", "Month", "Year"] as Filter[]).map((btn) => (
            <Button
              key={btn}
              onClick={() => changeFilter(btn)}
              variant={btn === filter ? "outline" : "ghost"}
            >
              {btn}
            </Button>
          ))}
        </HStack>
      </HStack>
      <Box height="200px" mt={8}>
        {isLoading ? (
          <Spinner m="auto" display="flex" />
        ) : (
          <Chart
            ref={chartRef}
            type="line"
            data={chartData}
            options={options}
          />
        )}
      </Box>
    </Box>
  )
}

export default TStakedChart
