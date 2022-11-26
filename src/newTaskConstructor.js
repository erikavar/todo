import arrayToDisplay from "./arrayToDisplay";
import loadHomeView from "./loadHomeView";

function Task (title, label, priority, dueDate) {
    this.title = title,
    this.label = label,
    this.priority = priority,
    this.dueDate = dueDate,
    this.done = "not done"; 
    this.checkOffTask = function() {
        this.done === "not done" ? this.done = "done" : this.done = "not done";
    }   
}

/*Task.prototype.checkOffTask = function() {
    this.done === "not done" ? this.done = "done" : this.done = "not done";
    arrayToDisplay();
}*/

export default Task;