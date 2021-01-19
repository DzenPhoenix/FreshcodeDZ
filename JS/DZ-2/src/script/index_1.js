"use strict";

//1. Напишите функцию, которая подсчитавает сумму четных элентов массива

function EvenElementsSum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      res = res + arr[i];
    }
  }
  return res;
}

let arr = [1, 2, 3, 4, 5];

console.log(
  `1.Task. Sum of even elements of array ${arr} is ${EvenElementsSum(arr)}`
);