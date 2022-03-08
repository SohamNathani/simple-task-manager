import "./Card.css";

const Card = (props) => {

  const task = props.task;

  const changeStatusHandler = () => {
    props.onChangeStatusHandler(props.id);
  }

  const completed = task.completed===true? "completed" : ""; 
  const status  = task.completed===true? "status" : "";

  return (
    <div className={"card-container "+completed}>
      <span>{props.children}</span>
      <span>
        <button onClick={changeStatusHandler} className={status}>Change Status</button>
      </span>
    </div>
  );
};

export default Card;
