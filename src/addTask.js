import storeTasks from "./storeTasks";
import Task from "./newTaskConstructor";

function addTaskToArray() {

    let newTask = new Task();

    newTask.title = document.getElementById("taskTitle").value;
    newTask.label = document.getElementById("taskLabel").value;
    newTask.priority = document.getElementById("taskPriority").value;

    //replace dashes with / to prevent new Date() in cal view from being 1 day off
    let formattedDate = (document.getElementById("dueDate").value).replace(/-/g, '\/').replace(/T.+/, '')
    newTask.dueDate = formattedDate;

    if (newTask.title) {
        storeTasks.push(newTask);
    } else {
        alert("Task title missing. Please enter a title for any task you would like to add.")
    }

    document.querySelector("form").reset();

}

export default addTaskToArray;