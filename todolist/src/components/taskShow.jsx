import { useState } from "react";
import TaskCreate from "./taskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);

  function handleDeleteClick() {
    onDelete(task.id);
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, updatedTitle, updatedTitleDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTitleDesc);
  };

  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-title">Your Tasks</h3>
          <p>{task.title}</p>
          <h3 className="task-title">To Do's</h3>
          <p>{task.titleDesc}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              Delete
            </button>
            <button className="task-edit" onClick={handleEditClick}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
