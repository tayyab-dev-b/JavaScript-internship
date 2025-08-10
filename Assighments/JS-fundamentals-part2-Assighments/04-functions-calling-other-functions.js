function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
}

console.log(describePopulation("Pakistan", 241));
console.log(describePopulation("China", 1441));
console.log(describePopulation("USA", 332));
