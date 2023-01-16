/*
        *** Section 3: Javascript Fundamentals-Part 2
*/
/*
    32.Activating Strict Mode
*/
'use strict';
/*
 let hasDriversLicense = false;
 const passTest = true;
 if(passTest) hasDriversLicense = true;
 if(hasDriversLicense) console.log("I can drive :D");

 const interface = "Audio";
 const private = 2003;
 const if = 23;

/*
    33.Function
*/
/*
 function logger() {
     console.log("My name is Jonas");
 }
 calling / running /invoking function
 logger();
 logger();
 logger();

 function fruitProcessor(apple,oranges) {
     console.log(apple,oranges);
     const fuice = `Juice with ${apple} apples and ${oranges} oranges.`;
     return fuice;
 }
 const appleFuice =  fruitProcessor(3,4);
 console.log(appleFuice);
 console.log(fruitProcessor(5,0))
*/

/*
    33.Function Declarations vs. Expressions
*/
// ------Function Declarations-------
/* 
function calcAge1(birthYeah) {
    const age = 2037 - birthYeah;
    return age;
}
const age1 = calcAge1(1991);
------Function expresstion-------
const calcAge2 = function (birthYeah) {
    const age = 2037 - birthYeah;
    return age;
}
const age2 = calcAge2(1992);
console.log(age1,age2);
*/
/*
    33.Arrow Functions
*/
/*
// ------Arrow Function-------
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah,firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${birthYeah} years`;
}

console.log(yearsUntilRetirement(1991,"Jonas"));
console.log(yearsUntilRetirement(1980,"Bob"));  
*/

/*
    33.Function Calling Orther Functions
*/

/*
function cutFruitPieces(fruit) {
    return fruit * 3;   
}

function fruitProcessor(apples,oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const fuice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
    return fuice;
}
console.log(fruitProcessor(2,3));
*/

/*
    33.Reviewing Functions
*/

/*
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}
function calcRetirement(age) {
    return 65 - age;
}
const yearsUntilRetirement = function (birthYeah,firstName) {
    const age = calcAge(birthYeah);
    const retirement = calcRetirement(age);
    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired !`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1991,"Jonas"));
console.log(yearsUntilRetirement(1970,"Mike"));
*/

/*
    38.coding challenge.
*/

/*
const calcAverage = (score1,score2,score3) => {
    return score1 + score2 + score3 / 3;
}
const avgDolhins = calcAverage(44,33,71);
const avgKoalas = calcAverage(99,120,49);

const checkWinner = (avgDolhins,avgKoalas) => {
    if((avgDolhins) > (avgKoalas * 2)) {
        console.log(`Dolhins win ${avgDolhins} vs ${avgKoalas}`);
    }else if((avgKoalas) > (avgDolhins * 2)) {
        console.log(`Koalas win ${avgKoalas} vs ${avgDolhins}`);
    }else {
        console.log(`No team wins...`);
    }
}
console.log(avgDolhins,avgKoalas);
checkWinner(avgDolhins,avgKoalas);
*/

/*
    39.Introduction to Array.
*/

/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael","Steven","Peter"];
console.log(friends);

const year = new Array(1991,1992,1993,2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";

console.log(friends)
// friends = ["Bob","Alice"];

const firstName = "Jonas";
const jonas = [firstName,"Schmedtmann",2037 - 1991];
console.log(jonas);

// Exercise

const calcAge = function(birthYeah) {
    return 2037 - birthYeah;
}
const years = [1990,1967,2002,2010,2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1,age2,age3);
*/

/*
    40.Bacsic Array Operations (Method);
*/
/*
const friends = ["Michael","Steven","Peter"];
// Add elements
const newLength = friends.push("Jay");
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements

friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First

console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));
friends.push(23);
console.log(friends.includes("Steven"))
console.log(friends.includes("Bob"))
console.log(friends.includes("23"))

if(friends.includes("Steven")) {
    console.log("You have a friend called Peter");
}
*/

/*
    41. coding challenge
*/

/*
const calcTip = function(bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
}
const bills = [125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const total = [(bills[0] + tips[0]),bills[1] + tips[1],bills[2] + tips[2]];
console.log(`Bill is : ${bills}`);
console.log(`tip is :${tips}`);
console.log(`Total is : ${total}`);
*/

/*
    42.Introduction to Objects
*/
/*
const jonasArray = [
    "Jonas",
    "Schedtmann",
    2037 - 1991,
    "Teacher",
    ["Michael","Peter","Steven"]
]

const jonas = {
    firstName: "Jonas",
    lastName: "Schedmann", 
    age: 2037 - 1991,
    friends: ["Michael","Peter","Steven"]
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);
// console.log(jonas.'last' + nameKey)

// const interestedIn = prompt("What do you want to know about jonas ? Choose between firstName,Lastname,age,job,and friends.");
// console.log(jonas.interestedIn); // => undefined
// console.log(jonas[interestedIn]);

// if(jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log("Wrong request !");
// }

jonas.location = "Portugal";
jonas['twitter'] = "@jonasschmedtman";
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael";
console.log(`${jonas.firstName} has ${jonas.friends.length} and hist best friend is called ${jonas.friends[0]}`);
*/
