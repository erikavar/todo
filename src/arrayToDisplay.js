import storeTasks from "./storeTasks";
import storeDatedTasks from "./storeDatedTasks";

function arrayToDisplay(arr) {

    document.getElementById("addedTaskContainer").textContent = "";

    arr.forEach(function(task, index) {

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("taskDetails");

        const check = document.createElement("div");
        check.classList.add("checkOffTaskBtn");
        if (arr === storeTasks) {
            check.classList.add("homeCheck");
            check.classList.remove("calCheck");
            task.homePosition = index + 1;
        } else if (arr === storeDatedTasks) {
            check.classList.add("calCheck");
            check.classList.remove("homeCheck");
        }
        check.textContent = "☐";
        check.addEventListener("click", task.checkOffTask.bind(task));
        detailsDiv.appendChild(check);

        let deets = Object.keys(task);

        deets.forEach((property) => {
            const div = document.createElement("div");
            if (property !== "done" && property !== "checkOffTask" && property!== "homePosition") {
                div.textContent = (`${task[property]}`);
                div.classList.add("taskText");
                div.classList.add(property);
                detailsDiv.appendChild(div);
            }
        });

        if (task.done === "done") {
            check.classList.add("completedTask");
            detailsDiv.classList.add("completedTask");
        } 

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("editBtn");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteTaskBtn")
       
        taskDiv.setAttribute("data-index-number", index);

        deleteBtn.addEventListener("click", function() {
            if (confirm("This task will be permanently deleted.")) {
                document.getElementById("addedTaskContainer").removeChild(taskDiv);
                arr.splice(Number(taskDiv.dataset.indexNumber), 1);
            }
        });
        
        editBtn.addEventListener("click", function(e) {   
            if (e.target.tagName === "BUTTON") {
                let taskTitle = taskDiv.querySelector(".title");
                let label = taskDiv.querySelector(".label");
                let priority = taskDiv.querySelector(".priority");
                let dueDate = taskDiv.querySelector(".dueDate");
                if(editBtn.textContent === "Edit") {
                    taskTitle.contentEditable = true;
                    label.contentEditable = true;
                    priority.contentEditable = true;
                    dueDate.contentEditable = true;
                    editBtn.textContent = "Save";
                    editBtn.classList.add("saveEditsBtn");
                } else if(editBtn.textContent === "Save") {
                    task.title = taskTitle.textContent;
                    task.label = label.textContent;
                    task.priority = priority.textContent;
                    task.dueDate = dueDate.textContent;
                    arr.splice(Number(taskDiv.dataset.indexNumber), 1, task);
                    taskTitle.contentEditable = false;
                    label.contentEditable = false;
                    priority.contentEditable = false;
                    dueDate.contentEditable = false;
                    editBtn.textContent = "Edit";
                    editBtn.classList.remove("saveEditsBtn");

                }
            } 
        });


        taskDiv.appendChild(detailsDiv);
        taskDiv.appendChild(deleteBtn);
        taskDiv.appendChild(editBtn);
        document.getElementById("addedTaskContainer").appendChild(taskDiv);
    });
}

export default arrayToDisplay;