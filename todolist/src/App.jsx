import { useEffect, useState } from "react";
import "./App.css";
import TaskCreate from "./components/taskCreate";
import TaskLists from "./components/taskLists";

function App() {
  const [tasks, setTasks] = useState([]);

  function createTask(title, titleDesc) {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 99999),
        title,
        titleDesc,
      },
    ];

    setTasks(createdTasks);
  }

  function deleteTaskById(id) {
    const afterDeletingTasks = tasks.filter((item) => {
      return item.id !== id;
    });
    setTasks(afterDeletingTasks);
  }

  function editTaskById(id, updatedTitle, updatedTitleDesc) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, titleDesc: updatedTitleDesc };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskLists
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
