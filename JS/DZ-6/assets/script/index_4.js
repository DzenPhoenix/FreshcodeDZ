"use strict";

// добыть 1-цу из массива [7,7,7,1,7,7,7,7,7,7]

const arr = [7,7,7,1,7,7,7,7,7,7];
const [,,,elem,...rest]=arr;

console.log(elem);

/*[1,2,3,[4,5,[6,7,8,9],10,11,12],13,14,15]
добыть 5, 8
добыть [6,7,8,9]
добыть все кроме 1,2,3*/

const arr_1=[1,2,3,[4,5,[6,7,8,9],10,11,12],13,14,15];

//5

const [,,,[,elem_5,[,,,],,,],...rest_1]=arr_1;
console.log(elem_5);

// [6,7,8,9]

const [,,,[,,elem_6789,,,],...rest_2]=arr_1;

console.log(elem_6789);

//все кроме 1,2,3

const [,,,...rest_3]=arr_1;

console.log(rest_3);

window.name="hello!";