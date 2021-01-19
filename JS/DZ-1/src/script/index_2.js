//напишите программу перевода метров в сантиметры и дюймы
 
const CM_IN_INCH=2.54;

let inMetr = parseFloat(prompt("Enter size in metrs:"));
let inCm = inMetr*100, inInch =inCm/CM_IN_INCH;

console.log(`In ${inMetr} - metres, ${inCm} - Cm, ${inInch} - inchs`);