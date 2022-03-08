import classes from "./TaskList.module.css";
import Card from "../UI/Card";

const TaskList = (props) => {
  const taskList = props.tasks;

  const changeStatus =(index) => {
    props.onChangeStatus(index);
  }

  return (
    <div className={classes["list_container"]}>
      <ul>
        {taskList?.map((curtask) => {
          return <Card key={curtask.id} id={curtask.id} task={curtask} onChangeStatusHandler={changeStatus}>{curtask.task}</Card>;
        })}
      </ul>
    </div>
  );
};

export default TaskList;
