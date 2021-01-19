"use strict";

//Дан массив. Вывести элементы после первого нуля 

function AfterZero(arr){
    if(!(arr instanceof Array)){
        throw new TypeError("argument must be of Array type");
    }
    const index = arr.indexOf(0);
    if(index===-1){
        return [];
    }
    else{
        return arr.slice(index+1);
    }
}

const arr = [1,2,3,5,7,2,0,5,1,2,3,-4,1];
const idx = AfterZero(arr);
console.log(idx);