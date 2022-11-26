import storeTasks from "./storeTasks";
import arrayToDisplay from "./arrayToDisplay";
import checkOffTasks from "./checkOffTasks";

function loadHomeView() {
    arrayToDisplay(storeTasks);
    checkOffTasks(storeTasks);
}

export default loadHomeView;