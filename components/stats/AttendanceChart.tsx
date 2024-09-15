import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart"

const chartData = [
  { month: "January", attendees: 186 },
  { month: "February", attendees: 305 },
  { month: "March", attendees: 237 },
  { month: "April", attendees: 73 },
  { month: "May", attendees: 209 },
  { month: "June", attendees: 214 },
]

const chartConfig = {
  attendees: {
    label: "Attendees",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const AttendanceChart = () => {
  // get url query

  return (
    <Card className="xl:col-span-2">
      <CardHeader>
        <CardTitle>Attendance</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="attendees" fill="var(--color-attendees)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total attendees for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

export default AttendanceChart;