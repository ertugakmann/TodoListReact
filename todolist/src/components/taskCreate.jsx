import { useState } from "react";

function TaskCreate({ onCreate, task, taskFormUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [titleDesc, setTitleDesc] = useState(task ? task.titleDesc : "");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTaskDesc = (e) => {
    setTitleDesc(e.target.value);
  };

  function handleSubmit(e) {
    if (taskFormUpdate) {
      onUpdate(task.id, title, titleDesc);
    } else {
      onCreate(title, titleDesc);
    }
    e.preventDefault();
    setTitle("");
    setTitleDesc("");
  }

  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          <h3> Change Title</h3>
          <form className="task-form">
            <label className="task-label"> Change Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Change Description</label>
            <textarea
              value={titleDesc}
              onChange={handleTaskDesc}
              className="task-input"
              rows={5}
            />
            <button
              onClick={handleSubmit}
              className="task-button update-button"
            >
              Create
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Please Add A Task!</h3>
          <form className="task-form">
            <label className="task-label">Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Enter A Task!</label>
            <textarea
              value={titleDesc}
              onChange={handleTaskDesc}
              className="task-input"
              rows={5}
            />
            <button onClick={handleSubmit} className="task-button">
              Create
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
