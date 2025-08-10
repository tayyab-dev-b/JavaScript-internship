// Function Declaration
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percPak = percentageOfWorld1(241);
const percChina = percentageOfWorld1(1441);
const percUSA = percentageOfWorld1(332);
console.log(percPak, percChina, percUSA);

// Function Expression
const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
};

console.log(percentageOfWorld2(241), percentageOfWorld2(1441), percentageOfWorld2(332));
