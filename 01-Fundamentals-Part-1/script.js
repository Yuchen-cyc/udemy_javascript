// Code Challenge #1
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

// Code Challenges #2
if (markHigherBMI) {
  console.log (`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
  console.log (`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
}
