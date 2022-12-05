import storeTasks from "./storeTasks";
import storeDatedTasks from "./storeDatedTasks";

function sortByDate() {

    storeDatedTasks.length = 0;

    let arr1 = storeTasks.map(obj => {
        return {...obj, dueDate: new Date(obj.dueDate)};
    });

    arr1.sort((a, b) => Number(a.dueDate) - Number(b.dueDate));

    for (const obj of arr1) {
        storeDatedTasks.push(obj);
    }

    // so that task deletion is registered in home view array too:
    
    document.addEventListener("click", function(e) {
        const target = e.target.closest(".deleteTaskBtn");
        if(target){

            let arr2 = storeTasks.filter(({ title }) => storeDatedTasks.some((e) => e.title === title));

            storeTasks.length = 0;
    
            for (const obj of arr2) {
                storeTasks.push(obj);
            };
        }
    });

}

export default sortByDate;