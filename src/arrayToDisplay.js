import storeTasks, { storeTasksToLocalStorage } from "./storeTasks";
import storeDatedTasks from "./storeDatedTasks";
import editIcon from './edit_icon.png';
import deleteIcon from './delete_icon.png'
import saveIcon from './save_icon.png'
import { format, isValid } from 'date-fns'

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
        const myEditIcon = new Image();
        myEditIcon.src = editIcon;
        editBtn.appendChild(myEditIcon);  

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteTaskBtn");
        const myDeleteIcon = new Image();
        myDeleteIcon.src = deleteIcon;
        deleteBtn.appendChild(myDeleteIcon);

        const mySaveIcon = new Image();
        mySaveIcon.src = saveIcon;
       
        taskDiv.setAttribute("data-index-number", index);

        deleteBtn.addEventListener("click", function() {
            if (confirm("This task will be permanently deleted.")) {
                document.getElementById("addedTaskContainer").removeChild(taskDiv);
                arr.splice(Number(taskDiv.dataset.indexNumber), 1);
                storeTasksToLocalStorage();
            }
        });
        
        editBtn.addEventListener("click", function(e) {   
            if (e.target.tagName === "BUTTON" || e.target.parentNode === editBtn) {
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
                    editBtn.appendChild(mySaveIcon);
                } else if(editBtn.textContent === "Save") {
                    task.title = taskTitle.textContent;
                    task.label = label.textContent;
                    task.priority = priority.textContent;
                    let formattedDate;
                    if (isValid(new Date(dueDate.textContent))) {
                        formattedDate = format(new Date(dueDate.textContent), 'yyyy/MM/dd');
                        task.dueDate = formattedDate;
                    } else if (dueDate.textContent === "") {
                        formattedDate = "";
                    } else {
                        console.log(formattedDate);
                        alert("Date invalid. Please use a valid date format.")
                        formattedDate = "";
                    }
                    dueDate.textContent = formattedDate;
                    arr.splice(Number(taskDiv.dataset.indexNumber), 1, task);
                    storeTasksToLocalStorage();
                    taskTitle.contentEditable = false;
                    label.contentEditable = false;
                    priority.contentEditable = false;
                    dueDate.contentEditable = false;
                    editBtn.textContent = "Edit";
                    editBtn.appendChild(myEditIcon);
                    editBtn.classList.remove("saveEditsBtn");
                }
            } 
        });

        taskDiv.appendChild(detailsDiv);
        taskDiv.appendChild(editBtn);
        taskDiv.appendChild(deleteBtn);
        document.getElementById("addedTaskContainer").prepend(taskDiv);

        storeTasksToLocalStorage();
    });
}

export default arrayToDisplay;