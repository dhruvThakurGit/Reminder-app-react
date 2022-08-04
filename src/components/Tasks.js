import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  function taskMapFunc(task) {
    return <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>;
  }

  return <>{tasks.map(taskMapFunc)}</>;
};

export default Tasks;
