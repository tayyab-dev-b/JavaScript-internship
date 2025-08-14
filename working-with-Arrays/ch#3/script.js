// Arrow function with method chaining
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4)) //  Convert dog age to human age
    .filter(humanAge => humanAge >= 18)              //  Keep only adults
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0); // Step 3: Average

// Test data
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])); // Data 1
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); // Data 2
