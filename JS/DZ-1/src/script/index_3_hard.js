/*Задание 3*
вывести полную таблицу умножения для всех чисел от 1 до 9*/

const startNum = 1;
const endNum = 9;

for (i = startNum; i <= endNum; ++i) {
    for (j = startNum; j <= endNum; ++j) {
        console.log(`${i}*${j}=${i * j}`);
    }
}
