function generateSidebar() {
    const allTasksBtn = document.createElement("div");
    allTasksBtn.textContent = "all tasks";

    const calViewBtn = document.createElement("div");
    calViewBtn.textContent = "calendar view";

    const projViewBtn = document.createElement("div");
    projViewBtn.textContent = "project view";

    allTasksBtn.classList.add("sidebarBtn");
    calViewBtn.classList.add("sidebarBtn");
    projViewBtn.classList.add("sidebarBtn");

    document.getElementById("sidebar").appendChild(allTasksBtn);
    document.getElementById("sidebar").appendChild(calViewBtn);
    document.getElementById("sidebar").appendChild(projViewBtn);
}

export default generateSidebar;