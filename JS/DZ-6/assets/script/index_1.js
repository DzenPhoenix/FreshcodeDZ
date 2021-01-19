"use strict";

//создать класс который выводит массив используя Symbol.iterator


class SimpleArrayIterator {
    #array;
    #currentIndex;

    constructor(array) {
        if( !(array instanceof SimpleArray) ){
            throw new TypeError("SimpleArrayIterator use only with SimpleArray type");
        }
        this.#array = array;
        this.#currentIndex = 0;
    }

    next() {
        if (this.#currentIndex == this.#array.length) {
            return {
                value: undefined,
                done: true
            }
        }
        else {
            return {
                value: this.#array[this.#currentIndex++],
                done: false
            }
        }
    }
}

class SimpleArray {
    #length;

    constructor() {
        this.#length = 0;
    }

    get length() {
        return this.#length;
    }

    push() {
        for (const elem of arguments) {
            this[this.#length++] = elem;
        }
        return this.#length;
    }

    pop() {
        if (this.#length<=0){
            throw new RangeError("Empty array");
        }
        else{
            const toDelete = this[--this.#length];
            delete this[this.#length];
            return toDelete;
        }    
    }

    toString() {
        return Object.values(this).toString();
    }

    [Symbol.iterator] = function () {
        return new SimpleArrayIterator(this);
    }

}

const arr = new SimpleArray();
arr.push(10);
arr.push("asdasd");
arr.push({ name: "denis", age: 30 });


for (const s of arr) {
    console.log(s);
}