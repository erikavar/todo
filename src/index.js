import generateNavbar from './navbar';
import generateSidebar from './sidebar';
import generateTaskList from './taskList';
import addTaskToArray from './addTask';
import loadCalView from './loadCalView';
import loadHomeView from './loadHomeView';
import './style.css';

generateNavbar();
generateSidebar();
generateTaskList();
document.querySelector(".addTaskBtn").addEventListener("click", addTaskToArray);
//document.querySelector(".addTaskBtn").addEventListener("click", loadHomeView);
document.getElementById("calViewBtn").addEventListener("click", loadCalView);
document.getElementById("homeViewBtn").addEventListener("click", loadHomeView);

document.querySelector(".addTaskBtn").addEventListener("click", someListener);
function someListener(event) {
    let element = event.target;
    if (element.classList.contains("addInHomeView")) {
        console.log("Test")
        loadHomeView();
    } else if (element.classList.contains("addInCalView")) {
        loadCalView();
    }
}