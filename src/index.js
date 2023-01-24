import generateNavbar from './navbar';
import generateSidebar from './sidebar';
import generateTaskList from './taskList';
import addTaskToArray from './addTask';
import loadCalView from './loadCalView';
import loadHomeView from './loadHomeView';
import loadProjView from './loadProjView'
import { retrieveTasksFromLocalStorage } from './storeTasks';
import './style.css';

generateNavbar();
generateSidebar();
generateTaskList();
retrieveTasksFromLocalStorage();
loadHomeView();
document.querySelector(".addTaskBtn").addEventListener("click", addTaskToArray);
document.getElementById("calViewBtn").addEventListener("click", loadCalView);
document.getElementById("homeViewBtn").addEventListener("click", loadHomeView);
document.getElementById("projViewBtn").addEventListener("click", loadProjView);


document.querySelector(".addTaskBtn").addEventListener("click", selectViewToLoad);
function selectViewToLoad(event) {
    let element = event.target;
    if (element.classList.contains("addInHomeView")) {
        loadHomeView();
    } else if (element.classList.contains("addInCalView")) {
        loadCalView();
    } else if (element.classList.contains("addInProjView")) {
        loadProjView();
    }
}
