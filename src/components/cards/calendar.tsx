import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { addDays, differenceInDays } from "date-fns"

const start = new Date(2023, 5, 5)
const end = addDays(start, 8)

export function CardsCalendar() {
  const streakDays = differenceInDays(end, start)

  return (
    <Card className="lg:max-w-[300px]">
      <CardHeader>
        <CardTitle className="text-lg font-normal font-bebas-neue">Streak Days</CardTitle>
        <CardDescription>
          You're on a streak! You have stayed on track with your diet for <strong>{streakDays}</strong> days in a row. Keep it up!
        </CardDescription>
      </CardHeader>
      <CardContent className="p-1 flex justify-center">
        <Calendar
          numberOfMonths={1}
          mode="range"
          defaultMonth={start}
          selected={{
            from: start,
            to: addDays(start, 8),
          }}
        />
      </CardContent>
    </Card>
  )
}