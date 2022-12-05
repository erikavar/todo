import arrayToDisplay from "./arrayToDisplay";
import storeDatedTasks from "./storeDatedTasks";
import storeTasks from "./storeTasks";

function checkOffTasks(x) {
    document.addEventListener("click", function(e) {
        const target = e.target.closest(".checkOffTaskBtn");
        if(target){
            if(x===storeDatedTasks) {
                // loop through storeDatedTasks and storeTasks
                // find objects with common title but not common done property value
                
                let arr1 = storeTasks.filter(o => storeDatedTasks.some(({title, done}) => o.title === title && o.done !== done));
                console.table(arr1);

                //replace storeTasks done value with storeDatedTasks done value
                // 1) find where storeTasks title === arr1 title
                // 2) storeTasks[index].done === done ? not done : done
                for (let i=0; i<arr1.length; i++) {
                    let index = storeTasks.map(e => e.title).indexOf(arr1[i].title);
                    for (let j=0; j<storeTasks.length; j++) {
                        if (j===index) {
                            storeTasks[j].done === "not done" ? storeTasks[j].done = "done" : storeTasks[j].done = "not done"; 
                            console.log(storeTasks[j].done);
                        }
                    }
                }
                
            }
            arrayToDisplay(x);
        }
    });
}

export default checkOffTasks;