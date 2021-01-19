"use strict";

// Решить у = -2,4x2+5x-3 В диапазоне от -2 до 2 с шагом 0,5

function y(x){
    return -2.4*x**2+5*x-3;
}

const x_1=-2;
const x_2 = 2;
const step=0.5

for(let i=x_1;i<=x_2;i+=step){
    console.log(`i=${i}, y=${y(i)}`);
}