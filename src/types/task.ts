export type TaskStatus = "init" | "progress" | "completed";
export type TaskFilter = "all" | "init" | "progress" | "completed";

export type Task = {
  id: string;
  title: string;
  status: TaskStatus;
};

export type TaskListProps = {
  tasks: Task[];
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: TaskStatus) => void;
};

export type TaskItemProps = {
  task: Task;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: TaskStatus) => void;
};
export type StatisticsProps = {
  initCount: number;
  progressCount: number;
  completedCount: number;
};
export type filterButtonsProps = {
  onFilterChange: (filter: TaskFilter) => void;
};
