// Coding Challenge #1
let massMark, massJohn;
massMark = 78;
massJohn = 92;

let heightMark, heightJohn;
heightMark = 1.69;
heightJohn = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

const markHigherBMI = bmiMark > bmiJohn;

console.log (bmiMark, bmiJohn)
console.log (markHigherBMI)
