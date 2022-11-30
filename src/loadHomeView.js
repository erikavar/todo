import storeTasks from "./storeTasks";
import arrayToDisplay from "./arrayToDisplay";
import checkOffTasks from "./checkOffTasks";
import sortByDate from "./sortByDate";

function loadHomeView() {
    document.querySelector(".addTaskBtn").classList.add("addInHomeView");
    arrayToDisplay(storeTasks);
    checkOffTasks(storeTasks);
}

export default loadHomeView;