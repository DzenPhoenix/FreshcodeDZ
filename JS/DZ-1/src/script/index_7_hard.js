// попросить пользователя решить пример “1+1=?” (или любой другой пример на ваш вкус). 
//высвечивать (повторять) пример до тех пор пока пользователь не решит его 

"use strict";

const QUESTION="10+1=?";
const RIGHT_ANSWER = "11";

const CORRECT_MSG ="Вы правы!";
const INCORRECT_MSG="Вы ошиблись (. Попробуйте еще раз )";

let answer="";

while(true){
    answer = prompt(QUESTION);
    if(answer==RIGHT_ANSWER){
        alert(CORRECT_MSG);
        break;
    }
    else{
        alert(INCORRECT_MSG);
    }
}