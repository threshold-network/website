import Card from "../../../../components/Card"
import React, { useEffect, useRef, useState } from "react"
import type { ChartArea, ChartData } from "chart.js"
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js"
import numeral from "numeral"
import { Chart } from "react-chartjs-2"
import { Box, Button, HStack } from "@chakra-ui/react"
import { H5 } from "../../../../components"

const realData = {
  first: [
    {
      x: "1056341907301545575042174553",
      y: "1650455994",
    },
  ],
  second: [
    {
      x: "1056795129252241744698724153",
      y: "1650533834",
    },
  ],
  third: [
    {
      x: "1056862107022716244698724153",
      y: "1650665362",
    },
  ],
  forth: [],
  fifth: [
    {
      x: "1057437177937445324200088365",
      y: "1650858444",
    },
  ],
  sixth: [
    {
      x: "1060188125097993225351056621",
      y: "1650935226",
    },
  ],
  seventh: [
    {
      x: "1065863002499738745782524254",
      y: "1651006819",
    },
  ],
}

const tDataWeek = [
  {
    x: "2022-1-13",
    y: 2100000,
  },
  {
    x: "2022-1-14",
    y: 2900000,
  },
  {
    x: "2022-1-15",
    y: 3600000,
  },
  {
    x: "2022-1-16",
    y: 5700000,
  },
  {
    x: "2022-1-17",
    y: 5900000,
  },
  {
    x: "2022-1-18",
    y: 5900000,
  },
  {
    x: "2022-1-19",
    y: 8000000,
  },
]

const tDataMonth = [
  {
    x: "2022-1-13",
    y: 1200000,
  },
  {
    x: "2022-1-14",
    y: 1900000,
  },
  {
    x: "2022-1-15",
    y: 2500000,
  },
  {
    x: "2022-1-16",
    y: 2900000,
  },
  {
    x: "2022-1-17",
    y: 3800000,
  },
  {
    x: "2022-1-18",
    y: 3900000,
  },
  {
    x: "2022-1-19",
    y: 5400000,
  },
]

const tDataYear = [
  {
    x: "2022-1-13",
    y: 5500000,
  },
  {
    x: "2022-1-14",
    y: 5200000,
  },
  {
    x: "2022-1-15",
    y: 4100000,
  },
  {
    x: "2022-1-16",
    y: 5700000,
  },
  {
    x: "2022-1-17",
    y: 6300000,
  },
  {
    x: "2022-1-18",
    y: 5900000,
  },
  {
    x: "2022-1-19",
    y: 8000000,
  },
]

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorStart = "#52545a"
  const colorEnd = "#1D2229"
  const gradient = ctx.createLinearGradient(0, area.top, 0, area.bottom)
  gradient.addColorStop(0, colorStart)
  gradient.addColorStop(1, colorEnd)
  return gradient
}

const options = {
  plugins: {
    legend: { display: false },
  },
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        fontColor: "white",
        padding: 20,
        callback: (value, index, tick) => {
          if (index === 0) {
            return "FIRST"
          }

          if (index === tick.length - 1) {
            return "LAST"
          }
        },
      },
    },
    y: {
      ticks: {
        fontColor: "white",
        maxTicksLimit: 5,
        padding: 20,
        callback: (value: number) => {
          return numeral(value).format("0a")
        },
      },
      grid: {
        borderDash: [18, 18],
        borderDashOffset: [18],
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
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
)

function NetworkDistribution() {
  const chartRef = useRef<ChartJS>(null)
  const [filter, setFilter] = useState("YEAR")
  const [chartData, setChartData] = useState<ChartData<"bar">>({
    datasets: [],
  })

  useEffect(() => {
    const chart = chartRef.current

    const filterData =
      filter === "YEAR"
        ? tDataYear
        : filter === "MONTH"
        ? tDataMonth
        : tDataWeek

    const data = {
      labels: [],
      datasets: [
        {
          lineTension: 0.5,
          data: filterData,
        },
      ],
    }

    if (!chart) {
      return
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        // backgroundColor: createGradient(chart.ctx, chart.chartArea),
        borderColor: "#9974FF",
        pointRadius: 0,
        fill: true,
      })),
    }

    // @ts-ignore
    setChartData(chartData)
  }, [filter])

  return (
    <Card mt={8}>
      <HStack justifyContent="space-between">
        <H5>Cumulative T Staked</H5>
        <HStack>
          <Button
            onClick={() => setFilter("WEEK")}
            variant={filter === "WEEK" ? "outline" : "ghost"}
          >
            Week
          </Button>
          <Button
            onClick={() => setFilter("MONTH")}
            variant={filter === "MONTH" ? "outline" : "ghost"}
          >
            Month
          </Button>
          <Button
            onClick={() => setFilter("YEAR")}
            variant={filter === "YEAR" ? "outline" : "ghost"}
          >
            Year
          </Button>
        </HStack>
      </HStack>
      <Box height="200px" mt={8}>
        <Chart ref={chartRef} type="line" data={chartData} options={options} />
      </Box>
    </Card>
  )
}

export default NetworkDistribution
