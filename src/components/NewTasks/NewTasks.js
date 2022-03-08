import { useState } from "react";
import TaskForm from "./TaskForm";
import "./NewTasks.css";

const NewTasks = (props) => {
  const [addTask, setAddTask] = useState(false);

  const addTaskHandler = (task) => {
    props.onHandleData(task);
    setAddTask(false);
  };

  return (
    <div className="form_container">
      {!addTask && (
        
          <button
            onClick={() => {
              setAddTask(true);
            }}
          >
            Add Task
          </button>
    
      )}
      {addTask && <TaskForm onAddTask={addTaskHandler} />}
      {addTask && (
        <button
          onClick={() => {
            setAddTask(false);
          }}
        >
          Cancel
        </button>
      )}
    </div>
  );
};
export default NewTasks;
