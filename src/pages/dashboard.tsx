import { CardsActivityGoal } from "@/components/cards/activity-goal";
import { CardsCalendar } from "@/components/cards/calendar";
import { CardsMetric } from "@/components/cards/metric";
import { CardsStatsCalories } from "@/components/cards/stats-calories";
import { CardsStatsWeight } from "@/components/cards/stats-weight";
import { CardsDataTable } from "@/components/cards/tasks/data-table";
import { AnimatedButton } from "@/components/ui/animated-button";

export function Dashboard() {
  return (
    <div className="container mx-auto py-4 px-4 md:px-4 lg:px-6">
      <div className="flex flex-wrap w-full max-w-screen-xl">
        <div className="flex flex-col justify-center self-start mb-4 w-full lg:w-1/3">
          <div className="flex gap-4 justify-center mt-1">
            <AnimatedButton size={"lg"} onClick={() => alert("Workout Started!")}>
              Start Workout
            </AnimatedButton>
            <AnimatedButton size={"lg"} onClick={() => alert("Viewing Progress!")}>
              View Progress
            </AnimatedButton>
          </div>

          <div className="flex gap-4 justify-center mt-6">
            <CardsCalendar />
          </div>
        </div>
        <div className="mb-4 w-full lg:w-2/3">
          <div className="grid grid-cols-3 gap-2 md:grid-cols-3 lg:grid-rows-2 lg:gap-4">
            <div className="col-span-3 md:col-span-1">
              <CardsStatsCalories />
            </div>
            <div className="col-span-3 md:col-span-1">
              <CardsStatsWeight />
            </div>
            <div className="col-span-3 md:col-span-1">
              <CardsActivityGoal />
            </div>

            <div className="col-span-3">
              <CardsMetric />
            </div>
          </div>

          <div className="mt-8">
            <CardsDataTable />
          </div>
        </div>
      </div>
    </div>
  );
}

// export function Dashboard() {
//   return (
//     <div className="container mx-auto py-4 px-4 md:px-4 lg:px-6">
//       <div className="grid grid-cols-1  gap-2 grid-rows-1 lg:gap-2 lg:grid-cols-3">
//         <div className="">profile</div>

//         <div className="col-span-2">
//           <div className="grid grid-cols-3 gap-2 md:grid-cols-3 lg:grid-rows-2 lg:gap-4">
//             <div className="col-span-3 md:col-span-1">card 1</div>
//             <div className="col-span-3 md:col-span-1">card 2</div>
//             <div className="col-span-3 md:col-span-1">card 3</div>
//             <div className="col-span-3">dash 4</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }