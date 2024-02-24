import { useState } from "react";


function ToDoList(){

    const [tasks, setTasks] = useState(["Eat Breakfast", "Wash Dishes", "Buy Groceries"]);

    function handleAddTask(){
        const newTask =document.getElementById("input-field").value;

        if (newTask !== ""){
            setTasks([...tasks,newTask]);
            document.getElementById("input-field").value = "";
        }
    }

    function handleRemoveTask(index){
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function moveTaskUp(index){
        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if (index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }
    

    return(
        <div className="to-do-list">
            <h1>To Do List</h1>
            <input id="input-field" type="text" placeholder="Enter a task..."/>
            <button onClick={handleAddTask}>Add</button>
            <ol>
                {tasks.map((task,index) => <li key = {index}>
                    {task}
                    <button onClick={() => handleRemoveTask(index)}>Delete</button>
                    <button onClick={() => moveTaskUp(index)}>👆🏻</button>
                    <button onClick={() => moveTaskDown(index)}>👇🏻</button>
                </li>)}
            </ol>
        </div>
    );
}

export default ToDoList;