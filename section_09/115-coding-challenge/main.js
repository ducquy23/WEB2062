'use strict';
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }
};
const arrScored = Object.entries(game.scored);
for (const [number, player] of arrScored) {
    console.log(`Goal ${Number(number) + 1}: ${player}`);
}
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
    average += odd;
    average /= odds.length;
}
console.log(average);

for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} : ${odd}`);
}
const scores = {};
for (const name of Object.values(game.scored)) {
    scores[name] = (scores[name] || 0) + 1;
}
console.log(scores);