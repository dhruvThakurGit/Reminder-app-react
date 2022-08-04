import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import TaskDetails from "./components/TaskDetails";

function App() {
  const fetchJson = async (id = "") => {
    const addr = "http://localhost:5000/tasks/" + id;
    const db = await fetch(addr);
    const Json = await db.json();

    return Json;
  };

  // STATE Set of tasks and details
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     text: "Doctors Appointment",
  //     day: "Feb 5th at 2:30 PM",
  //     reminder: true,
  //   },
  //   {
  //     id: 2,
  //     text: "Meeting at School",
  //     day: "Feb 6th at 1:30 PM",
  //     reminder: false,
  //   },
  //   {
  //     id: 3,
  //     text: "Grocery Shopping",
  //     day: "Feb 5th at 2:30 PM",
  //     reminder: true,
  //   },
  // ]);
  const [tasks, setTasks] = useState([]);

  // STATE show addTask
  const [showTask, setShowTask] = useState(true);

  // FUNCTION Delete Task
  const deleteTask = async (id) => {
    console.log("Delete", id);

    const addr = "http://localhost:5000/tasks/" + id;
    await fetch(addr, { method: "DELETE" });
    const newTasks = await fetchJson();

    setTasks(newTasks);
  };

  // Function to add task, data took from form
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);
  };

  // Toggle reminder option in tasks
  const toggleReminder = async (id) => {
    console.log("Toggling " + id);

    const taskToToggle = await fetchJson(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const newTasks = await fetchJson();
    setTasks(newTasks);
  };

  // Conditional rendering inside the return statement
  let conditionalRendering;
  if (tasks.length > 0) {
    conditionalRendering = (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    );
  } else {
    conditionalRendering = "No Tasks";
  }

  useEffect(() => {
    const getTasks = async () => {
      const newTasks = await fetchJson();
      setTasks(newTasks);
    };

    getTasks();
  }, []);

  return (
    <BrowserRouter>
      <div className="container">
        <Header
          para1="Task Tracker"
          onAdd={() => setShowTask(!showTask)}
          showTask={showTask}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {showTask && <AddTask addTask={addTask} />}

                {conditionalRendering}
              </>
            }
          />

          <Route path="/about" element={<About />} />

          <Route path="/task/:id" element={<TaskDetails />} />
        </Routes>

        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
