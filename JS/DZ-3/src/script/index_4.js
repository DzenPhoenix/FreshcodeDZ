"use strict";

//4. Среднюю длину слова в предложении

function averageWordLen(str) {

    const wordsArray = str.split(" ");

    let wordLengthArray = [];
    for (let i = 0; i < wordsArray.length; ++i) {
        wordLengthArray.push(wordsArray[i].length);
    }

    const sumOfWords = wordLengthArray.reduce((sum, elem) => sum + elem);
    return sumOfWords / wordsArray.length;
}

const str = "first second third fourth bigggggggest";
console.log(str);
console.log(averageWordLen(str));
