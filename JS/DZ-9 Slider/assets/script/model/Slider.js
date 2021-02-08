"use strict";

export class Slider{
    #slides=[];
    #currentIndex=0;
    constructor(slides,currentIndex=0){
        this.#slides=slides;
        this.#currentIndex=currentIndex;
    }

    get slides(){
        return this.#slides;
    }

    get getLeftEndIndex(){
        return (this.#currentIndex-2+this.slides.length)%this.slides.length;
    }

    get getPrevIndex(){
        return (this.#currentIndex-1+this.slides.length)%this.slides.length;
    }

    get getCurrentIndex(){
        return this.#currentIndex;
    }

    get getNextIndex(){
        return (this.#currentIndex+1)%this.slides.length;
    }

    get getRightEndIndex(){
        return (this.#currentIndex+2)%this.slides.length;
    }
    
    set setCurrentIndex(value){
        this.#currentIndex=value;
    }

    nextSlide=function(){
        this.#currentIndex= this.getNextIndex;
    }

    prevSlide = function(){
        this.#currentIndex= this.getPrevIndex;
    }
}