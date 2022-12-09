//import storeTasks from "./storeTasks";
import arrayToDisplay from "./arrayToDisplay";
import checkOffTasks from "./checkOffTasks";
import sortByDate from "./sortByDate";
import storeDatedTasks from "./storeDatedTasks";

function loadCalView() {

    sortByDate();

    document.getElementById("calViewBtn").classList.add("selectedBtn");
    document.getElementById("homeViewBtn").classList.remove("selectedBtn");

    document.querySelector(".addTaskBtn").classList.add("addInCalView");
    document.querySelector(".addTaskBtn").classList.remove("addInHomeView");

    document.getElementById("addedTaskContainer").textContent = "";

    arrayToDisplay(storeDatedTasks);
    checkOffTasks(storeDatedTasks);
    
}

export default loadCalView;