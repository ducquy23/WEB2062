const scoreDolphins = (120 + 108 + 89) / 3;
const scoreKoalas = (120 + 108 + 89) / 3;
console.log(scoreDolphins,scoreKoalas);
if(scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
    console.log("Team Dolphins is Win !");
}else if(scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {
    console.log("Team Koalas is Win !");
}else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Team Dolphins equal team Koalas");
}else {
    console.log("No team win");
}