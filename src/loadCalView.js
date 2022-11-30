//import storeTasks from "./storeTasks";
import arrayToDisplay from "./arrayToDisplay";
import checkOffTasks from "./checkOffTasks";
import sortByDate from "./sortByDate";
import storeDatedTasks from "./storeDatedTasks";

function loadCalView() {

    sortByDate();

    document.querySelector(".addTaskBtn").classList.add("addInCalView");
    document.querySelector(".addTaskBtn").classList.remove("addInHomeView");

    document.getElementById("addedTaskContainer").textContent = "";

    arrayToDisplay(storeDatedTasks);
    checkOffTasks(storeDatedTasks);
    
}

export default loadCalView;