
import React, { useState } from "react";
import NewTask from "./NewTask";
import TasksList from "./TasksList";
import '../convertStyles.css';

export default function ConvertAppFunction() {
  const [newTask, setNewTask] = useState({});
  
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const [allTasks, setAllTasks] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };
  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter(
      (task) => task.id !== taskIdToRemove
    ));
  };

  return (
    <>
    <h1>Converted the above class to this function</h1>
    <main>
      <h1>My Tasks</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={allTasks} handleDelete={handleDelete} />
    </main>
    <p>*******************************************************</p>
    </>
  );
}

