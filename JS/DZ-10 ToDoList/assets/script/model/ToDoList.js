"use strict";

class ToDoList{

    constructor(){
        this._taskCollection=[];
    }
    
    addTask=function(task){
        this._taskCollection.push(task);
    }

    deleteTask = function(taskId){
        const idx = this._taskCollection.findIndex(elem=>elem.id===parseInt(taskId));
        this._taskCollection.splice(idx,1);
    }
}

export {ToDoList};