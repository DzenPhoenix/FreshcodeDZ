//напишите программу “угадай число”. для случайного числа используйте Math.random()

"use strict";

const LIMIT =100;

let hiddenNumber=Math.round(Math.random()*LIMIT);
//console.log(`hiddenNumber = ${hiddenNumber}`);

let isGuessed=false;

while(!isGuessed){
    let suggestion = parseInt(prompt("Enter your suggestion"));
    if( suggestion==hiddenNumber){
        isGuessed=true;
    }
    else{
        if(suggestion>hiddenNumber){
            alert("Less than...");
        }
        else{
            alert("More than...");
        }
    }
}

alert("Congrats you Win!");