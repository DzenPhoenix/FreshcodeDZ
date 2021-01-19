//вывести таблицу значений для функции y = -3x2 + 5x - 2 для значения х от -2 до 2 с шагом 0.5

"use strict";

const FROM=-2;
const TO=2;
const STEP=0.5;

const A=-3;
const B=5;
const C=-2;

for(let i=FROM;i<=TO;i+=0.5){
    let y = A*i*i+B*i+C;
    console.log(`i=${i} : y=${y}`);
}