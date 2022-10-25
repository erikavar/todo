import Task from './newTaskConstructor';

function getInput() {

    let newTask = new Task();

    if (document.querySelector(".editedTitle")) {
        let taskTitle = document.querySelector(".editedTitle");
        newTask.title = taskTitle.textContent;
        console.log("hi");
    }

}

export default getInput;