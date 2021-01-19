"use strict";

function AddZero(base,count){
    let res="";
    if(base<0){res="-";base=-base;}
    for(let i=0;i<count-1;++i){
        res+='0';
    }
    res+=base;
    return res;
}

console.log(AddZero(5,10));