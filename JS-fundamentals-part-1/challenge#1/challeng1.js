// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// Task1
const markMass_1 = 78;
const markHeight_1 = 1.69;
const johnMass_1 = 92;
const johnHeight_1 = 1.95;

// Task2
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const bmiMark_1 = markMass_1 / markHeight_1 ** 2;
const bmiJohn_1 = johnMass_1 / (johnHeight_1 * johnHeight_1);

const bmiMark = markMass / markHeight ** 2;
const bmiJohn = johnMass / (johnHeight * johnHeight);

const markHigherBMI_1 = bmiMark_1 > bmiJohn_1;
const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark_1, bmiJohn_1, markHigherBMI_1);
console.log(bmiMark, bmiJohn, markHigherBMI);
