const neighbours = ["India", "China", "Iran"];
neighbours.push("Utopia");
neighbours.pop();

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("India")] = "Republic of India";
console.log(neighbours);
