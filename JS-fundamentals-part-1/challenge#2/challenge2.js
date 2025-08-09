// Coding Challenge #2:

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement

const markMass_1 = 78;
const markHeight_1 = 1.69;
const johnMass_1 = 92;
const johnHeight_1 = 1.95;

const bmiMark_1 = markMass_1 / markHeight_1 ** 2;
const bmiJohn_1 = johnMass_1 / (johnHeight_1 * johnHeight_1);

const markHigherBMI_1 = bmiMark_1 > bmiJohn_1;

console.log(bmiMark_1, bmiJohn_1, markHigherBMI_1);

if (bmiMark_1 > bmiJohn_1) {
  console.log(`Mark's BMI ${bmiMark_1} is higher than John' BMI ${bmiJohn_1}s!`);
} else {
  console.log(`John's BMI ${bmiJohn_1} is higher than Mark's BMI ${bmiMark_1}!`);
}
