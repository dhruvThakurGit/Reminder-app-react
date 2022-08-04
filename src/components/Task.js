import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Task = ({ task, onDelete, onToggle }) => {
  const FaStyle = {
    color: "red",
    cursor: "pointer",
  };

  let conditionalClassing = task.reminder ? "task reminder" : "task";

  return (
    <div
      className={conditionalClassing}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes style={FaStyle} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
      <p>
        <Link to={`/task/${task.id}`}>Details</Link>
      </p>
    </div>
  );
};

export default Task;
