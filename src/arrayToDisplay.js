import storeTasks from "./storeTasks";

function arrayToDisplay() {

    document.getElementById("addedTaskContainer").textContent = "";

    storeTasks.forEach(function(task, index) {

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("taskDetails");

        const check = document.createElement("div");
        check.classList.add("checkOffTaskBtn");
        check.textContent = "☐";
        check.addEventListener("click", task.checkOffTask.bind(task));
        detailsDiv.appendChild(check);

        let deets = Object.keys(task);

        deets.forEach((property) => {
            const div = document.createElement("div");
            if (property !== "done") {
                div.textContent = (`${task[property]}`);
                div.classList.add("taskText");
                detailsDiv.appendChild(div);
            }
        });

        if (task.done === "done") {
            check.classList.add("completedTask");
            detailsDiv.classList.add("completedTask");
        } 

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteTaskBtn")

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
       
        taskDiv.setAttribute("data-index-number", index);
        deleteBtn.addEventListener("click", function() {
            document.getElementById("addedTaskContainer").removeChild(taskDiv);
            storeTasks.splice(Number(taskDiv.dataset.indexNumber), 1);
        });

        taskDiv.appendChild(detailsDiv);
        taskDiv.appendChild(deleteBtn);
        taskDiv.appendChild(editBtn);
        document.getElementById("addedTaskContainer").appendChild(taskDiv);
    });
}

export default arrayToDisplay