import storeTasks from "./storeTasks";
import storeDatedTasks from "./storeDatedTasks";
import { format, isValid } from 'date-fns'

function sortByDate() {

    storeDatedTasks.length = 0;

    let arr1 = storeTasks.map(obj => {
        let formattedDate;
        if(isValid(new Date(obj.dueDate))) {
            formattedDate = format(new Date(obj.dueDate), 'yyyy/MM/dd');
        } else {
            formattedDate = format(new Date("9999/12/31"), 'yyyy/MM/dd');
        }
        return {...obj, dueDate: formattedDate};
    });

    arr1.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    for (const obj of arr1) {
        if(obj.dueDate === "9999/12/31") {
            obj.dueDate = "";
        }
        storeDatedTasks.push(obj);
    }

    // so that task deletion is registered in home view array too:
    
    document.addEventListener("click", function(e) {
        const target = e.target.closest(".deleteTaskBtn");
        if(target) {

            let arr2 = storeTasks.filter(({ title }) => storeDatedTasks.some((e) => e.title === title));

            storeTasks.length = 0;
    
            for (const obj of arr2) {
                storeTasks.push(obj);
            };
        }
    });

    // so that edits are registered in home view array too:

    document.addEventListener("click", function(e) {
        const target = e.target.closest(".editBtn");
        if(target) {
            if(target.textContent === "Edit") {

                let arr2 = storeDatedTasks;                
                arr2.sort((a, b) => a.homePosition - b.homePosition);

                storeTasks.length = 0;
        
                for (const obj of arr2) {
                    storeTasks.push(obj);
                };
            }
        }
    });

}

export default sortByDate;