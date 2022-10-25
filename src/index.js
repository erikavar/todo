import generateNavbar from './navbar';
import generateSidebar from './sidebar';
import generateTaskList from './taskList';
import Task from './newTaskConstructor';
import taskArr from './storeTasks';
import eventListener from './eventListener';
import getInput from './inputGetter';
import './style.css';

generateNavbar();
generateSidebar();
generateTaskList();
eventListener();
getInput();

/*let newTask = new Task();
newTask.title = "Groceries";
newTask.label = "Chores";
console.table(newTask);

taskArr.push(newTask);
console.table(taskArr);*/