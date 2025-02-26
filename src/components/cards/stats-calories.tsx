import { Line, LineChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const data = [
  {
    caloriesBurned: 400,
    weightLost: 0.2,
  },
  {
    caloriesBurned: 500,
    weightLost: 0.3,
  },
  {
    caloriesBurned: 350,
    weightLost: 0.15,
  },
  {
    caloriesBurned: 320,
    weightLost: 0.12,
  },
  {
    caloriesBurned: 290,
    weightLost: 0.1,
  },
  {
    caloriesBurned: 400,
    weightLost: 0.18,
  },
  {
    caloriesBurned: 450,
    weightLost: 0.22,
  },
  {
    caloriesBurned: 600,
    weightLost: 0.3,
  },
]

const chartConfig = {
  caloriesBurned: {
    label: "Calories Burned",
    color: "hsl(var(--primary))",
  },
  weightLost: {
    label: "Weight Lost (kg)",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function CardsStatsCalories() {
  return (
    <Card className="w-full md:h-[237px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-normal font-bebas-neue">Calories Burned</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="text-2xl font-bold">1,500 kcal</div>
        <p className="text-xs text-muted-foreground mb-4">
          +15% compared to last week
        </p>
        <ChartContainer config={chartConfig} className="h-[80px] w-full">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <Line
              type="monotone"
              strokeWidth={2}
              dataKey="caloriesBurned"
              stroke="var(--color-caloriesBurned)"
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
