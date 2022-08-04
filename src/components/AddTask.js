import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  // What happens when you press the submit button
  const onPress = (task) => {
    if (!text) {
      alert("Enter task Description pls");
      return;
    }

    // Do what you want to do with the form values
    addTask({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);

    toast("Task Added");
  };

  return (
    <form
      className="add-form"
      onSubmit={(e) => {
        e.preventDefault();
        onPress({ text, day, reminder });
      }}
    >
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Time</label>
        <input
          type="text"
          placeholder="Add Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
