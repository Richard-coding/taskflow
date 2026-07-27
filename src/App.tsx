import { useEffect, useState } from "react";
import type { Task, TaskFilter, TaskStatus } from "./types/task";
import Statistics from "./components/Statistics";
import FilterButtons from "./components/FilterButtons";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const data = localStorage.getItem("tasks");

      if (data === null) {
        return [];
      }

      return JSON.parse(data);
    } catch (error) {
      console.log("Erro ao ler as tarefas do LocalStorage:", error);
      return [];
    }
  });

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
  const statusChange = (id: string, status: TaskStatus): void => {
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
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
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
          <FilterButtons onFilterChange={setSelectedFilter} />
        </div>
        {tasks.length === 0
          ? "Nenhuma tarefa encontrada"
          : visibleTasks.length === 0
            ? "Nenhuma tarefa encontrada nesse filtro"
            : searchedTasks.length === 0
              ? "Nenhuma tarefa encontrada na busca"
              :  <TaskList tasks={searchedTasks} onDelete={deleteTask} onStatusChange={statusChange} />}
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
