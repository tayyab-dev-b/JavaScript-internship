// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement
// �
// � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300

// bill_1
const bill_1 = 275;
const tip_1 = bill_1 <= 300 && bill_1 >= 50 ? bill_1 * 0.5 : bill_1 * 0.2;
console.log(
  `The bill was ${bill_1} , the tip was ${tip_1} and the total value is ${
    bill_1 + tip_1
  }`
);

// bill-2
const bill_2 = 40;
const tip_2 = bill_2 <= 300 && bill_2 >= 50 ? bill_2 * 0.5 : bill_2 * 0.2;
console.log(
  `The bill was ${bill_2} , the tip was ${tip_2} and the total value is ${
    bill_2 + tip_2
  }`
);

// bill_3
const bill_3 = 430;
const tip_3 = bill_3 <= 300 && bill_3 >= 50 ? bill_3 * 0.5 : bill_3 * 0.2;
console.log(
  `The bill was ${bill_3} , the tip was ${tip_3} and the total value is ${
    bill_3 + tip_3
  }`
);
