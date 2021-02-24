"use strict";

import {Task} from "../model/Task.js";
import {ToDoList} from "../model/ToDoList.js";
import {TaskView} from "../view/TaskView.js";

const toDoList = new ToDoList();

function deleteTask(e){
    const taskId = e.target.getAttribute("task_id");
    toDoList.deleteTask(taskId);
    TaskView.deleteTask(e);
}

function DeleteChecked(e){
    const toDelete=document.querySelectorAll(".checkBoxTrue");
    toDelete.forEach(elem=>elem.remove());
}

function changeStatus(e){

    const taskContainer = e.target.parentNode;
    const isDone = e.target.checked;

    if(isDone){
        taskContainer.classList.add("checkBoxTrue");
        console.log()
    }
    else{
        taskContainer.classList.remove("checkBoxTrue");
    }
}

function addTask(e){

    const textAreaTitle = document.querySelector("#title");
    const title = textAreaTitle.value;

    const textAreaDescription = document.querySelector("#description");
    const description = textAreaDescription.value;

    if(title!=="" && description!=="" ){
        const task = new Task(title,description);
        toDoList.addTask(task);
        const taskContainer = TaskView.createTask(task);
        const deleteButton = taskContainer.children[2];
        deleteButton.addEventListener("click",deleteTask);
    
        const checkBox = taskContainer.children[0];
        checkBox.addEventListener("click",changeStatus);
    
        textAreaTitle.value="";
        textAreaDescription.value="";
    }
    
}

const buttonAddTask = document.querySelector("[Name=addTask]");
buttonAddTask.addEventListener("click",addTask);

const buttonDeleteChecked = document.querySelector("[Name=deleteChecked]");
buttonDeleteChecked.addEventListener("click",DeleteChecked);