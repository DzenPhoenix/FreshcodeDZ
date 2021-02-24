"use strict";

class Task{

    static _id=0;

    constructor(title,description,isDone=false){
        this._title=title;
        this._description=description;
        this._isDone=isDone;
        this._timeCreating = new Date().toLocaleTimeString();
        this._id=++Task._id;
    }

    set title(value){
        this._title=value;
    }

    get title(){
        return this._title;
    }

    set description(value){
        this.description=value;
    }

    get description(){
        return this._description;
    }

    set isDone(value){
        this.isDone=value;
    }

    get isDone(){
        return this._isDone;
    }

    get timeCreating(){
        return this._timeCreating;
    }

    get id(){
        return this._id;
    }
}

export{Task};