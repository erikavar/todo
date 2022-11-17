import generateNavbar from './navbar';
import generateSidebar from './sidebar';
import generateTaskList from './taskList';
//import Task from './newTaskConstructor';
//import taskArr from './storeTasks';
//import eventListener from './eventListener';
import addTaskToArray from './addTask';
import arrayToDisplay from './arrayToDisplay';
import loadCalView from './loadCalView';
import './style.css';

generateNavbar();
generateSidebar();
generateTaskList();
document.querySelector(".addTaskBtn").addEventListener("click", addTaskToArray);
document.querySelector(".addTaskBtn").addEventListener("click", arrayToDisplay);
document.getElementById("calViewBtn").addEventListener("click", loadCalView);
