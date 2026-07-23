import type { TaskListProps } from "../types/task";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onStatusChange }: TaskListProps) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        ></TaskItem>
      ))}
    </>
  );
};

export default TaskList;
