import { Bar, BarChart } from "recharts"

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

export function CardsStatsWeight() {
  return (
    <Card className="w-full md:h-[237px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-normal font-bebas-neue">Weight Lost</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">-2.3 kg</div>
        <p className="text-xs text-muted-foreground">
          +0.5kg compared to last month
        </p>
        <ChartContainer config={chartConfig} className="mt-2 h-[80px] w-full">
          <BarChart data={data}>
            <Bar
              dataKey="weightLost"
              fill="var(--color-weightLost)"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
