"use strict";

// 2. Вывести индексы нулевых элементов массива, а потом удалить нули

function clearZero(array) {
    let idx = 0;
    while(true){
        idx = array.indexOf(0);
        if(idx>=0){
            console.log(idx);
            delete array[idx];
        }
        else{break;}
    }   
}

const arr = [0, 1, 2, 4, 5, -4, 0, 1, 0, 4, 4, 5];
console.log(arr);
clearZero(arr);
console.log(arr);