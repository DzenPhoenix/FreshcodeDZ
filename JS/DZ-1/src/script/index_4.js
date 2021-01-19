/*Задание 4
вычислить стоимость заказа пиццы. известно что данный вид пиццы за 100 грамм стоит M грн. скидка 3% предоставляется если сумма заказа превышает 500 грн или вес заказ больше 1 кг
*/

const COST_PER_KG = 780; // grn/kg
const DISCOUNT = 0.03; // 3%
const MORE_THAN_PRICE = 500; //grn
const MORE_THAN_WEIGHT = 1; //kg

let weight = parseFloat(prompt("Enter weight of pizza(in kg):"));
let totalPrice = weight*COST_PER_KG;

if(totalPrice>500 || weight>1){
    totalPrice*=(1-DISCOUNT);
}

console.log(`Total price of pizza= ${totalPrice}`);