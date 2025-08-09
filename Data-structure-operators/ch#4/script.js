// Coding Challenge #4 
// Write a program that receives a list of variable names written in underscore_case 
// and convert them to camelCase. 
// The input will come from a textarea inserted into the DOM (see code below to 
// insert the elements), and conversion will happen when the button is pressed. 
// Test data (pasted to textarea, including spaces): 
// underscore_case 
// first_name 
// Some_Variable  
// calculate_AGE 
// delayed_departure 
// Should produce this output (5 separate console.log outputs): 
// underscoreCase      
// ✅ 
// firstName           
// ✅✅ 
// someVariable        
// ✅✅✅ 
// calculateAge        
// ✅✅✅✅ 
// delayedDeparture    
// ✅✅✅✅✅ 
// Hints: 
// § Remember which character defines a new line in the textarea 
// �
// � 
// § The solution only needs to work for a variable made out of 2 words, like a_b 
// § Start without worrying about the 
// name conversion working 
// ✅. Tackle that only after you have the variable 
// �
// � 
// § This challenge is difficult on purpose, so start watching the solution in case 
// you're stuck. Then pause and continue! 
// Afterwards, test with your own test data! 
// GOOD LUCK 
// �
// �
//  document.body.append(document.createElement('textarea')); 
// document.body.append(document.createElement('button')); 




const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
const output = document.querySelector(".output");

button.addEventListener("click", () => {
  const text = textarea.value;
  const rows = text.split("\n"); // Split by new lines
  output.innerHTML = ""; // Clear previous results

  rows.forEach((row, i) => {
    const lower = row.trim().toLowerCase();
    const [first, second] = lower.split("_");

    if (!second) return; // Skip if no underscore

    // Convert to camelCase
    const camelCase = first + second[0].toUpperCase() + second.slice(1);

    // Add check marks
    const result = `${camelCase.padEnd(20)} ${"✅".repeat(i + 1)}`;

    // Display in output box
    output.innerHTML += result + "<br>";
    console.log(result);
  });
});
