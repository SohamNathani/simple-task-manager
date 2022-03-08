import { useRef } from "react";
import  "./TaskForm.css"

const TaskForm = (props) => {

    const taskRef = useRef();

    const formHandler = (event) => {
        event.preventDefault();
        const task = taskRef.current.value;
        props.onAddTask(task);
    }

    return <form onSubmit={formHandler}>
        <input id="taskName" ref={taskRef} required></input>
        <button type="submit">Submit</button>
    </form>
}

export default TaskForm;