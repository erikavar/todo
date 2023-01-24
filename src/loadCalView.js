//import storeTasks from "./storeTasks";
import arrayToDisplay from "./arrayToDisplay";
import checkOffTasks from "./checkOffTasks";
import sortByDate from "./sortByDate";
import storeDatedTasks from "./storeDatedTasks";

function loadCalView() {

    // getting rid of proj view
    const projectContainer = document.querySelectorAll("#projectContainer");
    projectContainer.forEach((proj) => {
        proj.textContent = "";
    });

    sortByDate();

    const tasksToUnhide = document.querySelectorAll(".task")
    tasksToUnhide.forEach((item) => {
        item.classList.remove("hidden");
    });

    document.getElementById("calViewBtn").classList.add("selectedBtn");
    document.getElementById("homeViewBtn").classList.remove("selectedBtn");
    document.getElementById("projViewBtn").classList.remove("selectedBtn");


    document.querySelector(".addTaskBtn").classList.add("addInCalView");
    document.querySelector(".addTaskBtn").classList.remove("addInHomeView");

    document.getElementById("addedTaskContainer").textContent = "";

    arrayToDisplay(storeDatedTasks);
    checkOffTasks(storeDatedTasks);
    
}

export default loadCalView;