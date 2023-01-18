import storeTasks from "./storeTasks";
import arrayToDisplay from "./arrayToDisplay";
import checkOffTasks from "./checkOffTasks";

function loadHomeView() {

    // getting rid of proj view
    const projectContainer = document.querySelectorAll(".label-container")
    projectContainer.forEach((proj) => {
        proj.textContent = "";
    });
    
    const tasksToUnhide = document.querySelectorAll(".task")
    tasksToUnhide.forEach((item) => {
        item.classList.remove("hidden");
    });

    document.getElementById("homeViewBtn").classList.add("selectedBtn");
    document.getElementById("calViewBtn").classList.remove("selectedBtn");
    document.getElementById("projViewBtn").classList.remove("selectedBtn");

    document.querySelector(".addTaskBtn").classList.add("addInHomeView");
    document.querySelector(".addTaskBtn").classList.remove("addInCalView");
    
    arrayToDisplay(storeTasks);
    checkOffTasks(storeTasks);
}

export default loadHomeView;