import React, { useState } from "react";

function Example() {

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    function addTask() {
        const new_Task = { task: newTask, };
        setTask(t => [...t, new_Task]);
        setNewTask("");
    }
    function removeTask(index) {
        setTask(t => t.filter((_, i) => i !== index));
    }
    function set_Task(event) {
        if (event.target.value === "") {
            alert("Enter a Task first");
        } else {
            setNewTask(event.target.value);
        }
    }

    return (<div className="toDoList">
        <h1>To-Do List</h1>
        <ul>{task.map((task, index) => <li key={index} className="list">
            {task.task} <button onClick={() => removeTask(index)}>❌</button>
        </li>)}</ul>
        <input type="text" value={newTask} placeholder="Enter a Task" onChange={set_Task} />
        <button onClick={addTask} className="addTask"> + </button>
    </div>);
}

export default Example