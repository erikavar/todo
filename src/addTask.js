import storeTasks from "./storeTasks";

function addTask(task) {
    storeTasks.push(task);
    return storeTasks;
}

export default addTask;