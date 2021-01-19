"use strict";

//2h + верните массив общий без повторов
  
function SetOfArrays(first, second) {
    let res = [],
      k = 0;
  
    for (let i = 0; i < arguments.length; ++i) {
      for (let j = 0; j < arguments[i].length; ++j) {
        //прежде чем добавлять элемент в массив res, проверим, а есть ли такой уже в массиве?
        let isExist = false;
        for (let s = 0; s < res.length; ++s) {
          if (res[s] == arguments[i][j]) {
            isExist = true;
            break;
          }
        }
        //а теперь добавляем элемент,если его еще нет в массиве res
        if (!isExist) {
          res[k] = arguments[i][j];
          k++;
        }
      }
    }
  
    return res;
  }
  
  let first = ["one", 2, 3, 4, 5];
  let second = ["one", "two", "three"];
  

  console.log("2h. Task. Sum of arrays with distinct elements:");
  console.log(`first array = [${first}], second array=[${second}],result array = [${SetOfArrays(first,second)}] `);
