import React, {useState} from "react";

function ToDoList(){
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    function change(e){
        setNewTask(e.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ''){
            setTasks(t => [...t, newTask])
            setNewTask('')
        }

    }
    function handleKeyPress(event){
        if(event.key==='Enter'){
            addTask()
        }
    }
    
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }
    
    function moveUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    

    
    function moveDown(index){
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    return(
        <div>
            <h1 className="heading">To-do-List</h1>
            <div className="input-button">
                <input type="text" className="input" placeholder="Enter a new event" value={newTask} onChange={change} onKeyDown={handleKeyPress} />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol className="ordered-list">
                {tasks.map((task, index) => 
                <li className="list" key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>❌</button>
                    <button className="up-button" onClick={() => moveUp(index)}>⬆️</button>
                    <button className="down-button" onClick={() => moveDown(index)}>⬇️</button>

                </li>)}
            </ol>
    
        </div>
    )
}

export default ToDoList