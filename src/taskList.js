function generateTaskList() {
    const task = document.createElement("div");
    task.classList.add("task");
    task.textContent = "New task"
    document.getElementById("taskContainer").appendChild(task);
}

export default generateTaskList;