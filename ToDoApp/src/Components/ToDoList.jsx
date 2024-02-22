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

    return(
        <div className="to-do-list">
            <h1>To Do List</h1>
            <ol>
                {tasks.map((task,index) => <li key = {index}>
                    {task}
                    <button onClick={() => handleRemoveTask(index)}>Delete</button>
                </li>)}
            </ol>
            <input id="input-field" type="text" placeholder="Enter a task..."/>
            <button onClick={handleAddTask}>Add</button>
        </div>
    );
}

export default ToDoList;