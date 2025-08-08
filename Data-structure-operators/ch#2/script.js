const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

game.scored.forEach((player, i) => {
  console.log(`Goal ${i + 1}: ${player}`);
});

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;

console.log(`Average odd: ${average.toFixed(2)}`);

for (const [key, value] of Object.entries(game.odds)) {
  const teamStr = key === "x" ? "draw" : `victory ${game[key]}`;
  console.log(`Odd of ${teamStr}: ${value}`);
}

const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);
