"use strict";

/* 2. создать класс Stud который наследует класс User(name, surname) и имеет свойство year-год поступления в вуз. 
Реализовать getFullName() (наследуется от User)содержит еще метод getCourse() - вывод курса студента от 1 до 5 
и вычисляется как текущий год минус год поступления. Текущий год получить самостоятельно.

Подсчитать количество студентов (через static)*/

class User{
    #name;
    #surname;

    constructor(name="Default name",surname="Default surname"){
        this.#name=name.toString();
        this.#surname=surname.toString();
    }

    get name(){
        return this.#name;
    }

    get surname(){
        return this.#surname;
    }

    set name(value){
        this.#name=value.toString();
    }

    set surname(value){
        this.#surname=value.toString();
    }

    getFullName(){
        return `${this.#name} ${this.#surname}`;
    }
}

class Student extends User{
    #year;
    static #count=0;

    constructor(name,surname,year){
        super(name.toString(),surname.toString());
        this.#year=Number(year);
        if(isNaN(this.#year)){
            throw new TypeError("argument 'year' is NaN");
        }
        // we should not create a student if his course not belong [1,5]. In that case function this.getCourse() throw exception
        this.getCourse();
        Student.#count++;
    }

    get year(){
        return this.#year;
    }

    set year(value){
        if(isNaN(Number(year))){
            throw new TypeError("argument year is NaN");
        }
        this.#year=Number(value);
    }

    getCourse(){
        const course = new Date().getFullYear()-this.#year;
        if(course<1 || course >5){
            throw new RangeError("The course of student less than '1' or more than '5'.Check student prop year.");
        }
        return course;
    }

    static getCount(){
        return Student.#count;
    }
}

const peter = new Student("Peter","Ivanov",2019);
const sveta = new Student("Sveta","Sidorova",2020);

console.log(peter.getFullName());
console.log(peter.getCourse());
console.log(sveta.getFullName());
console.log(sveta.getCourse());
console.log(`Students count:${Student.getCount()}`);