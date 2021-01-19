//вычислить сумму нечетных чисел от 1 до 30

"use strict";

const FROM=1;
const TO=30;

let sum=0;

for(let i=FROM;i<TO;++i){
    if(i%2){
        sum+=i;
    }
}

console.log(`Sum of odd numbers from ${FROM} to ${TO} is ${sum}`);
