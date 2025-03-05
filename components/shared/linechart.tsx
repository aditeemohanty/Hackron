"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Updated dummy data for the chart
const chartData = [
  { month: "January", desktop: 120 },
  { month: "February", desktop: 125 },
  { month: "March", desktop: 100 },
  { month: "April", desktop: 250 },
  { month: "May", desktop: 170 },
  { month: "June", desktop: 200 },
]

const chartConfig = {
  desktop: {
    label: "Price Trend",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Chart() {
  return (
    <Card className="bg-amber-50">
      <CardHeader>
        <CardTitle className="text-amber-600">Price Trend</CardTitle>
        <CardDescription className="text-yellow-600">January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="">
        <ChartContainer config={chartConfig} className="h-52 min-w-full ">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
            className=""
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="green" // Changed stroke color to black
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing price trends for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}