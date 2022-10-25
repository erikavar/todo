function generateTaskList() {
    const task = document.createElement("div");
    task.classList.add("task");
    document.getElementById("taskContainer").appendChild(task);

    const newTaskBtn = document.createElement("div");
    newTaskBtn.textContent = "+";
    newTaskBtn.classList.add("newTaskBtn");
    document.querySelector(".task").appendChild(newTaskBtn);

    const taskNameSpace = document.createElement("div");
    taskNameSpace.textContent = "Click here to add task";
    taskNameSpace.classList.add("taskNameSpace");
    document.querySelector(".task").appendChild(taskNameSpace);
}

export default generateTaskList;