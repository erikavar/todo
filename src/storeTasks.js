let storeTasks = retrieveTasksFromLocalStorage();

export function storeTasksToLocalStorage() {
    let storeTasksString = JSON.stringify(storeTasks);
    localStorage.setItem("storeTasks", storeTasksString);
}

export function retrieveTasksFromLocalStorage() {
    let storeTasksString = localStorage.getItem("storeTasks");
    let tasks = JSON.parse(storeTasksString);
    if(!tasks) return [];
    tasks.forEach(task => {
        task.checkOffTask = function() {
            this.done === "not done" ? this.done = "done" : this.done = "not done";
        }
    });
    return tasks;
}

export default storeTasks;