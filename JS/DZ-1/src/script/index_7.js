//спросить у пользователя общеизвестный факт на ваш вкус и высветить ему сообщение правильно или нет. например, “как называется наша планета?” 


"use strict";

const QUESTION = "Сколько звезд в солнечной системе?";
const RIGHT_ANSWER = "1";

const CORRECT_MSG ="Вы правы!";
const INCORRECT_MSG="Вы ошиблись (";

let answer = prompt(QUESTION);

if(answer==RIGHT_ANSWER){
    alert(CORRECT_MSG);
}
else{
    alert(INCORRECT_MSG);
}