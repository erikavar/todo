import storeTasks from "./storeTasks";
import Task from "./newTaskConstructor";

function addTaskToArray() {

    let newTask = new Task();

    newTask.title = document.getElementById("taskTitle").value;
    newTask.label = document.getElementById("taskLabel").value;
    newTask.priority = document.getElementById("taskPriority").value;
    newTask.dueDate = document.getElementById("dueDate").value;

    if (newTask.title) {
        storeTasks.push(newTask);
    }

    document.querySelector("form").reset();

}

export default addTaskToArray;