//вывести первых 10 значений степени 2


"use strict";
const FROM=0;
const TO=10; //not include
const BASE=2;

for(let i=FROM;i<TO;++i){
    console.log(`${BASE} pow ${i} = ${BASE**i}`);
}