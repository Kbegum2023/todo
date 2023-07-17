import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');


  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const scrollToBottom = () => {
    taskListRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <h1 className="nav">Todo List</h1>
      <div className="add_task">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add_btn" onClick={() => {
          handleAddTask();
          scrollToBottom();
        }}>
          Add Task
        </button>
      </div>
      <div className="task_list">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <p>{task}</p>
              <button
                className="remove_btn"
                onClick={() => handleRemoveTask(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
