import { useQuery } from "@tanstack/react-query";
import { Task, tasks } from "../data/tasks";

const fetchTasks = async (): Promise<Task[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(tasks), 500);
  });
};

export function useTasks() {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
}
