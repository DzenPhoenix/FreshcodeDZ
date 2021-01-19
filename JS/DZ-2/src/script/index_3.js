"use strict";

// 3. Напишите функцию перевода строки в верблюжий регистр

function ToCamelCase(str){
    let res="";
    for(let i=0;i<str.length;++i){

        if(str[i]==' '){continue;}

        if(i==0){res=res+str[i].toUpperCase();}  
        else{
            if(str[i-1]==' '){
                res=res+str[i].toUpperCase();
            }
            else{
                res=res+str[i];
            }
        }   
    }
    return res;
}
let str ="incoming message not a Camel case";

console.log(`Start string: "${str}", camelcase string: "${ToCamelCase(str)}"`);
