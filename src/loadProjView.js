import storeTasks from "./storeTasks";

function loadProjView() {
    document.getElementById("projViewBtn").classList.add("selectedBtn");
    document.getElementById("calViewBtn").classList.remove("selectedBtn");
    document.getElementById("homeViewBtn").classList.remove("selectedBtn");

    let projectContainer = document.createElement("div");
    projectContainer.setAttribute("id", "projectContainer");

    // hiding previous views
    const tasksToHide = document.querySelectorAll(".task");
    tasksToHide.forEach((item) => {
        item.classList.add("hidden");
    });

    // sorting        
    let sortedByLabel = storeTasks.reduce((acc, task) => {
        if(acc[task.label]) {
            acc[task.label].push(task);
        } else {
            acc[task.label] = [task];
        }
        return acc;
    }, {});

    // displaying

    if (Object.keys(sortedByLabel).length === 0 && projectContainer.textContent === "") {
        projectContainer.textContent = "No tasks yet. Go back to All tasks or Sort by date to add tasks and projects.";
    }

    for (let label in sortedByLabel) {
        let labelContainer = document.createElement("div");
        labelContainer.classList.add("label-container");

        let labelTitle = document.createElement("h2");
        if (label) {
            labelTitle.textContent = label;
        }
        else {
            labelTitle.textContent = "No assigned project";
        }
        labelContainer.appendChild(labelTitle);

        sortedByLabel[label].forEach(task => {
            let taskItem = document.createElement("div");
            taskItem.classList.add("task-item");

            let taskTitle = document.createElement("p");
            taskTitle.textContent = `Task: ${task.title}`;
            taskItem.appendChild(taskTitle);

            let taskPriority = document.createElement("p");
            if (task.priority) {
                taskPriority.textContent = `Priority: ${task.priority}`;
            }
            taskItem.appendChild(taskPriority);

            let taskDueDate = document.createElement("p");
            if (task.dueDate) {
                taskDueDate.textContent = `Due date: ${task.dueDate}`;
            }
            taskItem.appendChild(taskDueDate);

            let taskStatus = document.createElement("p");
            if (task.done === "done") {
                taskStatus.textContent = `Status: Completed`;
            }
            if (task.done === "not done") {
                taskStatus.textContent = `Status: In progress`;
            }
            taskItem.appendChild(taskStatus);

            labelContainer.appendChild(taskItem);
        });

        projectContainer.appendChild(labelContainer);
    }

    let biggerContainer = document.getElementById("taskContainer");

    biggerContainer.appendChild(projectContainer);
      
}

export default loadProjView;