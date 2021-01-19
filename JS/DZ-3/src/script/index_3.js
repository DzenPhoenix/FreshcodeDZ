"use strict";
//3. Самое длинное слово в предложении и его индекс 

function longestWord(str){
    const wordsArray = str.split(" ");

    let wordLengthArray =[];
    for(let i=0;i<wordsArray.length;++i){
        wordLengthArray.push(wordsArray[i].length);
    }

    const maxLength = wordLengthArray.reduce( (max,elem)=>(elem>max)? elem:max );
    const maxWordIndex =  wordLengthArray.indexOf(maxLength);
    
    const maxWord = wordsArray[maxWordIndex];

    console.log(`Max word is: ${maxWord } and it index: ${maxWordIndex}`);
}

const str = "first second third fourth bigggggggest";
console.log(str)
longestWord(str);