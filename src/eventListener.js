function eventListener() {
    document.querySelector(".taskNameSpace").onclick = function(e) {
        this.contentEditable = true;
        if (this.textContent === "Click here to add task") {
            this.textContent = "";
        }
        this.focus();
        this.classList.add("editedTitle");
    }
}

export default eventListener;