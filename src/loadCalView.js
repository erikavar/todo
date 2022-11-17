import storeTasks from "./storeTasks";

function loadCalView() {

    document.getElementById("addedTaskContainer").textContent = "";

    const arr1 = storeTasks.map(obj => {
        return {...obj, dueDate: new Date(obj.dueDate)};
    });

    const sortedByDate = arr1.sort((a, b) => Number(a.dueDate) - Number(b.dueDate));
    console.table(sortedByDate);
}

export default loadCalView