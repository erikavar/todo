import storeTasks from "./storeTasks";
import Task from "./newTaskConstructor";

function addTaskToArray() {

    let newTask = new Task();

    newTask.title = document.getElementById("taskTitle").value;
    newTask.label = document.getElementById("taskLabel").value;

    storeTasks.push(newTask);

    console.table(storeTasks);

    document.querySelector("form").reset();

}

export default addTaskToArray;