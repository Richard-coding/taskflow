export type TaskStatus = "init" | "progress" | "completed";
export type TaskFilter = "all" | "init" | "progress" | "completed";

export type Task = {
  id: string;
  title: string;
  status: TaskStatus;
};
