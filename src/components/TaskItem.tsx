import type { TaskItemProps } from "../types/task";

const TaskItem = ({ task, onDelete, onStatusChange }: TaskItemProps) => {
  return (
    <div>
      <p>{task.title}</p>
      <p>{task.status}</p>

      <button onClick={() => onDelete(task.id)}>Excluir</button>
      <button onClick={() => onStatusChange(task.id, "progress")}>Excluir</button>
    </div>
  );
};

export default TaskItem;
