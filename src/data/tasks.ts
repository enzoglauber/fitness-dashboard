export type Task = {
  id: string;
  name: string;
  done: boolean;
};

export const tasks: Task[] = [
  {
    id: "1",
    name: "10,000 steps",
    done: true
  },
  {
    id: "2",
    name: "Drink 2L water",
    done: false
  },
  {
    id: "3",
    name: "Read for 30 minutes",
    done: true
  },
  {
    id: "4",
    name: "Meditate for 10 minutes",
    done: false
  },
];
