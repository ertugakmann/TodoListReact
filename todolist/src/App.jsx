import { useEffect, useState } from "react";
import "./App.css";
import TaskCreate from "./components/taskCreate";
import TaskLists from "./components/taskLists";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  async function createTask(title, titleDesc) {
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      titleDesc,
    });
    console.log(response);
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

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  async function deleteTaskById(id) {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDeletingTasks = tasks.filter((item) => {
      return item.id !== id;
    });
    setTasks(afterDeletingTasks);
  }

  async function editTaskById(id, updatedTitle, updatedTitleDesc) {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: updatedTitle,
      titleDesc: updatedTitleDesc,
    });
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
