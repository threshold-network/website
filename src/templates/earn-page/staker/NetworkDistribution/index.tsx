import Card from "../../../../components/Card"

const tData = [
  {
    x: "2022-1-1",
    y: 0,
  },
  {
    x: "2022-1-2",
    y: 1000,
  },
  {
    x: "2022-1-3",
    y: 10000,
  },
  {
    x: "2022-1-4",
    y: 25000,
  },
  {
    x: "2022-1-5",
    y: 80000,
  },
  {
    x: "2022-1-6",
    y: 180000,
  },
  {
    x: "2022-1-7",
    y: 250000,
  },
  {
    x: "2022-1-8",
    y: 400000,
  },
  {
    x: "2022-1-9",
    y: 500000,
  },
  {
    x: "2022-1-10",
    y: 1200000,
  },
  {
    x: "2022-1-11",
    y: 1500000,
  },
  {
    x: "2022-1-12",
    y: 1800000,
  },
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

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorStart = "#52545a"
  const colorEnd = "#1D2229"
  const gradient = ctx.createLinearGradient(0, area.top, 0, area.bottom)
  gradient.addColorStop(0, colorStart)
  gradient.addColorStop(1, colorEnd)
  return gradient
}

const options = {
  scales: {
    y: {
      grid: {
        borderDash: [18, 18],
        borderDashOffset: [18],
        // color: "#718096", //gray.500
        color: function (context: any) {
          console.log("context ", context)
          if (context.index === 0) {
            return undefined
          }
          return "#718096" //gray.500"
        },
      },
    },
  },
}

import React, { useRef, useEffect, useState } from "react"
import type { ChartData, ChartArea } from "chart.js"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"
import { Chart } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
)

export const data = {
  labels: [],
  datasets: [
    {
      data: tData,
    },
  ],
}

function NetworkDistribution() {
  const chartRef = useRef<ChartJS>(null)
  const [chartData, setChartData] = useState<ChartData<"bar">>({
    datasets: [],
  })

  useEffect(() => {
    const chart = chartRef.current

    if (!chart) {
      return
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: createGradient(chart.ctx, chart.chartArea),
        borderColor: "#9974FF",
        pointRadius: 0,
        fill: true,
      })),
    }

    // @ts-ignore
    setChartData(chartData)
  }, [])

  return (
    <Card mt={8}>
      <Chart ref={chartRef} type="line" data={chartData} options={options} />
    </Card>
  )
}

export default NetworkDistribution
