"use strict";

//Найти число (из трех заданых\введенных пользователем) с максимальной суммой цифр


function convertToNumArray(str) {
    let res = [];

    for (let elem of str) {
        res.push(parseInt(elem));
    }

    return res;
}

function sumOfDigits(numArray) {
    return numArray.reduce((sum, elem) => sum += elem);
}

function program() {

    const number_1 = prompt("Enter first number: ");
    const number_2 = prompt("Enter second number: ");
    const number_3 = prompt("Enter third number: ");

    const sumOfDigits_1=sumOfDigits(convertToNumArray(number_1));
    const sumOfDigits_2=sumOfDigits(convertToNumArray(number_2));
    const sumOfDigits_3=sumOfDigits(convertToNumArray(number_3));

    let max=sumOfDigits_1;

    let res=number_1;

    if(sumOfDigits_2>max){
        if(sumOfDigits_3>sumOfDigits_2){
            max=sumOfDigits_3;
            res=number_3;
        }
        else{
            max=sumOfDigits_2;
            res=number_2;
        }
    }
    console.log(res);
}

program();