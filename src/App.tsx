import { useState } from "react";
import type { Task, TaskStatus } from "./types/task";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = (title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      status: "init",
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  const changeStatus = (id: string, status: TaskStatus): void => {
    const mapped = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status,
        };
      }
      return task;
    });

    setTasks(mapped);
  };

  return (
    <>
      <div>
        <p>olá</p>
        {tasks &&
          tasks.length > 0 &&
          tasks.map(({ id, title }) => (
            <div key={id}>
              <p>{title}</p>
              <button onClick={() => deleteTask(id)}>delete</button>
              <button onClick={() => changeStatus(id, "progress")}>
                Status
              </button>
            </div>
          ))}
        <button onClick={() => createTask("title")}>click</button>
      </div>
    </>
  );
};

export default App;
