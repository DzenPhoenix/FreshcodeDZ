//проверить является ли введенное число простым

"use strict";

let number = parseInt(prompt("Введите число: "));

let isSimple = true;

for(let i=2;i<number/2;++i){
    isSimple=isSimple && (number%i!=0);
    if(!isSimple){break;}
}

if(isSimple){
    console.log(`The number ${number} is simple`);
}
else{
    console.log(`The number ${number} is not simple`);
}
