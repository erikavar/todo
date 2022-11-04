import storeTasks from "./storeTasks";

function arrayToDisplay() {

    document.getElementById("addedTaskContainer").textContent = "";

    storeTasks.forEach(function(task) {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const check = document.createElement("div");
        check.classList.add("newTaskBtn");
        check.textContent = "☐";
        check.addEventListener("click", function() {
            task.done === "not done" ? task.done = "done" : task.done = "done";
        });
        taskDiv.appendChild(check);

        const taskTitle = document.createElement("div");
        taskTitle.textContent = task.title;
        taskTitle.classList.add("taskText");
        taskDiv.appendChild(taskTitle);

        const taskLabel = document.createElement("div");
        taskLabel.textContent = task.label;
        taskLabel.classList.add("taskText");
        taskDiv.appendChild(taskLabel);

        if (task.done === "done") {
            taskDiv.classList.add("completedTask");
            check.textContent = "☑";
        }

        document.getElementById("addedTaskContainer").appendChild(taskDiv);
    });
}

export default arrayToDisplay