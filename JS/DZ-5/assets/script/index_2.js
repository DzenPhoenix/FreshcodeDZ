"use strict";

//На парах мне показалось,что Вы хотите видеть здесь наследование, но по моему мнению здесь наследование логически неприменимо.
//Поскольку Художник не является частным случаем Картины или Картина не является частным случаем Художника,
//в противовес к: Кот является частным случаем Животного. 

class Painter {

    #name = "";
    #pictures = [];
    static #paintersCount = 0;

    constructor(name) {
        this.#name = name;
        Painter.#paintersCount++;
    }

    get name() {
        return this.#name;
    }

    set name(_name) {
        this.#name = _name;
    }

    get pictures() {
        return this.#pictures;
    }

    static getCount() {
        return Painter.#paintersCount;
    }


    createPicture(pictureName) {
        return new Picture(pictureName, this);
    }

    static showAllPictures(painter) {
        if(!Painter.isPainter(painter)){throw new Error("argument not a Painter type");}
        for (let i = 0; i < painter.#pictures.length; ++i) {
            console.log("\t" + painter.#pictures[i].name);
        }
    }

    static isPainter(painter) {
        return painter instanceof Painter;
    }
}

class Picture {

    #name = "";
    #painter;
    static #picturesCount = 0;

    constructor(name, painter) {
        if(!Painter.isPainter(painter)){throw new Error("argument not a Painter type");}
        this.#name = name;
        this.#painter = painter;
        this.#painter.pictures.push(this);
        Picture.#picturesCount++;

    }

    get name() {
        return this.#name;
    }

    set name(_name) {
        this.#name = _name;
    }

    get painter() {
        return this.#painter;
    }

    set painter(_painter) {
        if(!Painter.isPainter(_painter)){throw new Error("argument not a Painter type");}
        this.#painter = painter;
    }

    static getCount() {
        return Picture.#picturesCount;
    }
}


function main() {
    const malevich = new Painter("Малевич");
    const rembrandt = new Painter("Рембрандт");

    const blackSquare = new Picture("Черный квадрат", malevich);
    const susanna = new Picture("Сусанна", rembrandt);

    const vangog = new Painter("Ван-Вог");
    const starNight = vangog.createPicture("Звездная ночь");
    const iris = new Picture("Ирисы", vangog);

    console.log(`Всего художников: ${Painter.getCount()}`);
    console.log(`Всего картин: ${Picture.getCount()}`);

    console.log(`Картины Малевича:`); Painter.showAllPictures(malevich);
    console.log(`Картины Рембрандта:`); Painter.showAllPictures(rembrandt);
    console.log(`Картины Ван-Гога:`); Painter.showAllPictures(vangog);
}

try {
    main();
}
catch (e) {
    console.log(e.name, e.message);
}
