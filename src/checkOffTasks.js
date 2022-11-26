import arrayToDisplay from "./arrayToDisplay";

function checkOffTasks(x) {
    let check = document.querySelector(".checkOffTaskBtn");
    check.addEventListener("click", () => setInterval(function() {
        arrayToDisplay(x);
    }, 100));
}

export default checkOffTasks;