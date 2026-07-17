import { useState } from "react";
import type { Task, TaskFilter, TaskStatus } from "./types/task";
import Statistics from "./components/Statistics";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<TaskFilter>("all");
  const [input, setInput] = useState("");

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
    setTasks((prevTask) =>
      prevTask.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            status,
          };
        }
        return task;
      }),
    );
  };

  const initTask = tasks.filter((tasks) => tasks.status === "init");
  const progressTask = tasks.filter((tasks) => tasks.status === "progress");
  const completedTask = tasks.filter((tasks) => tasks.status === "completed");

  const visibleTasks =
    selectedFilter === "all"
      ? tasks
      : tasks.filter((task) => task.status === selectedFilter);

  const searchedTasks = visibleTasks.filter((task) => {
    return task.title.toLowerCase().trim().includes(input);
  });
  return (
    <>
      <div>
        <p>olá</p>
        <div>
          <input
            type="text"
            className="border mr-1"
            onChange={({ target }) => setInput(target.value)}
          />
          <button onClick={() => createTask("title")}>criar tarefa</button>
        </div>

        <div className="flex gap-2">
          <button onClick={() => setSelectedFilter("all")}>all</button>
          <button onClick={() => setSelectedFilter("init")}>init</button>
          <button onClick={() => setSelectedFilter("progress")}>
            progress
          </button>
          <button onClick={() => setSelectedFilter("completed")}>
            completed
          </button>
        </div>

        {tasks.length === 0
          ? "Nenhuma tarefa encontrada"
          : visibleTasks.length === 0
            ? "Nenhuma tarefa encontrada nesse filtro"
            : searchedTasks.length === 0
              ? "Nenhuma tarefa encontrada na busca"
              : searchedTasks.map(({ id, title, status }) => (
                  <div key={id} className="flex gap-2">
                    <p>{id}</p>
                    <p>{title}</p>
                    <p>{status}</p>
                    <button onClick={() => deleteTask(id)}>delete</button>
                    <button onClick={() => changeStatus(id, "progress")}>
                      status
                    </button>
                  </div>
                ))}
      </div>

      <Statistics
        initCount={initTask.length}
        progressCount={progressTask.length}
        completedCount={completedTask.length}
      />
    </>
  );
};

export default App;
