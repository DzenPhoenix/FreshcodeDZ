"use strict";

export class Slide{
    #src="";
    #description="";
    constructor(src="#",description="Default slide"){
        this.#src=src;
        this.#description=description;
    }

    set src(value){
        this.#src=value;
    }

    get src(){
        return this.#src;
    }

    set description(value){
        this.#description=value;
    }

    get description(){
        return this.#description;
    }
}
