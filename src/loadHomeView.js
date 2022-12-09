import storeTasks from "./storeTasks";
import arrayToDisplay from "./arrayToDisplay";
import checkOffTasks from "./checkOffTasks";
import sortByDate from "./sortByDate";

function loadHomeView() {
    document.getElementById("homeViewBtn").classList.add("selectedBtn");
    document.getElementById("calViewBtn").classList.remove("selectedBtn");

    document.querySelector(".addTaskBtn").classList.add("addInHomeView");
    document.querySelector(".addTaskBtn").classList.remove("addInCalView");
    
    arrayToDisplay(storeTasks);
    checkOffTasks(storeTasks);
}

export default loadHomeView;