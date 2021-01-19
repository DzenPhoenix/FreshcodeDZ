"use strict";

//1. Сумма квадратов массива

function sumOfSqElements(array) {
    return array.reduce((sum, elem) => sum + elem * elem);
}

const arr = [1, 2, 3, 4, 5];

console.log(arr);
console.log(sumOfSqElements(arr));

