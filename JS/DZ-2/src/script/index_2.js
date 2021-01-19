"use strict";

//2.  Напишите функцию, которая возвращает общий массив из двух заданных

function UnionOfArrays(first, second) {
  let res = [],
    k = 0;

  //2.1 Самый простой вариант, легко читается

  /*for (let i = 0; i < first.length; ++i) {
        res[k] = first[i];
        k++;
      }
    
      for (let j = 0; j < second.length; ++j) {
        res[k] = second[j];
        k++;
      }*/

  //2.2 Тоже слаживает два массива, но вдругом прядке. Запись изящнее,но читается жуже.Поэтому мне нравится больше первый вариант, хоть и копипаст

  /*for(let i=0,j=0;i<first.length,j<second.length;++i,++j){
            res[k]=first[i];k++;
            res[k]=second[j];k++;
        }*/

  //2.3 Думаю, лучший вариант(без использования стандартных функций), поскольку обобщенный на все аргументы.
  //Но не знаю, может это "против правил" :) использовать то, что мы на уроке не проходили...

  for (let i = 0; i < arguments.length; ++i) {
    for (let j = 0; j < arguments[i].length; ++j) {
      res[k] = arguments[i][j];
      k++;
    }
  }

  return res;
}

let first = [1, 2, 3, 4, 5];
let second = ["one", "two", "three"];

console.log(
  `2.Task. Union of two arrays, first=[${first}] and second = [${second}] is [${UnionOfArrays(
    first,
    second
  )}]`
);
