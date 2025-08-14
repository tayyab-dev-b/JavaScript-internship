function calcAverageHumanAge(ages) {
  const humanAges = ages.map(age =>
    age <= 2 ? 2 * age : 16 + age * 4
  );

  // Filter only adult dogs (>= 18 years)
  const adults = humanAges.filter(age => age >= 18);

  // 3. Calculate average age
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;


  console.log(`Human Ages: ${humanAges}`);
  console.log(`Adults: ${adults}`);
  console.log(`Average Human Age: ${average}`);

  return average;
}

// Test data
console.log("Data 1:");
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

console.log("Data 2:");
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
