import storeTasks from "./storeTasks";
import storeDatedTasks from "./storeDatedTasks";

function sortByDate() {

    let arr1 = storeTasks.map(obj => {
        return {...obj, dueDate: new Date(obj.dueDate)};
    });

    arr1.sort((a, b) => Number(a.dueDate) - Number(b.dueDate));

    for (const obj of arr1) {
        storeDatedTasks.push((obj));
    }
}

export default sortByDate;