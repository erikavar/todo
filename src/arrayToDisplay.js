import storeTasks from "./storeTasks";

function arrayToDisplay() {

    document.getElementById("addedTaskContainer").textContent = "";

    storeTasks.forEach(function(task, index) {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const check = document.createElement("div");
        check.classList.add("newTaskBtn");
        check.textContent = "☐";
        check.addEventListener("click", task.checkOffTask.bind(task));
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
        } else if(task.done == "not done") {
            taskDiv.classList.remove("completedTask");
        }

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        taskDiv.appendChild(deleteBtn);

        taskDiv.setAttribute("data-index-number", index);
        deleteBtn.addEventListener("click", function() {
            document.getElementById("addedTaskContainer").removeChild(taskDiv);
            storeTasks.splice(Number(taskDiv.dataset.indexNumber), 1);
        });

        document.getElementById("addedTaskContainer").appendChild(taskDiv);
    });
}

export default arrayToDisplay