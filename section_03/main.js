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