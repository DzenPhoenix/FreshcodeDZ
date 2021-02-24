"use strict";

class TaskView {

    static createTask = function (task) {
        const container = document.createElement("div");
        container.classList.add("taskContainer");

        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("name", "setDone");
        checkBox.classList.add("button");
        checkBox.classList.add("SetDone");
        container.append(checkBox);

        const paragraph = document.createElement("p");
        paragraph.setAttribute("data-tooltip", `${task.description}`);
        paragraph.innerText = task.title + ` (${task.timeCreating}) `;
        container.append(paragraph);

        const button = document.createElement("button");
        button.classList.add("button");
        button.classList.add("Delete");
        button.setAttribute("name", "deleteTask");
        button.setAttribute("task_id", `${task.id}`);
        container.append(button);

        const panelToDo = document.querySelector(".panelToDo");
        panelToDo.append(container);

        return container;
    }

    static deleteTask = function (e) {
        const divToDelete = e.target.parentNode;
        divToDelete.remove();
    }
}

export { TaskView };