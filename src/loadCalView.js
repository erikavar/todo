import storeTasks from "./storeTasks";
import arrayToDisplay from "./arrayToDisplay";
import checkOffTasks from "./checkOffTasks";

function loadCalView() {

    document.querySelector(".addTaskBtn").classList.add("addInCalView");
    document.querySelector(".addTaskBtn").classList.remove("addInHomeView");

    document.getElementById("addedTaskContainer").textContent = "";

    const arr1 = storeTasks.map(obj => {
        return {...obj, dueDate: new Date(obj.dueDate)};
    });

    const sortedByDate = arr1.sort((a, b) => Number(a.dueDate) - Number(b.dueDate));
    console.table(sortedByDate);

    arrayToDisplay(sortedByDate);
    checkOffTasks(sortedByDate);
    
}

export default loadCalView