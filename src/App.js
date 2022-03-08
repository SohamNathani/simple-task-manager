import "./App.css";
import { Fragment } from "react";
import NewTasks from "./components/NewTasks/NewTasks";
import TaskList from "./components/Tasks/TaskList";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    { task: "My first task", completed: false, id: 1 },
  ]);

  const handleData = (task) => {
    setTasks((prevState) => {
      return [
        ...prevState,
        { task: task, completed: false, id: prevState.length + 1 },
      ];
    });
  };

  const changeStatus = (index) => {
    setTasks((prevState) => {
      
        return(
          prevState.map(el => el.id===index ?{...el, completed:!el.completed}:el)
        );
      }
    );
  };

  return (
    <Fragment>
      <header className="App-header">
        <h2>Task Manager</h2>
      </header>

      <main>
        <NewTasks onHandleData={handleData} />
        <TaskList tasks={tasks} onChangeStatus={changeStatus} />
      </main>
    </Fragment>
  );
};

export default App;
