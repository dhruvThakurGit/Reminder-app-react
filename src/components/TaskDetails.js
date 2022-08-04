import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const addr = "http://localhost:5000/tasks/" + id;
      const res = await fetch(addr);

      const Json = await res.json();
      setTask(Json);
      setLoading(false);
    };

    fetchTask();
  }, [id]);

  return loading ? (
    <h3>Loading ...</h3>
  ) : (
    <div>
      <hr /> <br />
      <h3>{task.text}</h3>
      <h4>{task.day}</h4>
      <br />
      <Button
        color={"BLACK"}
        text={"Go Back"}
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
};

export default TaskDetails;
