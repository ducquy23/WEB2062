'use strict';
/*
    =========== 128. Default Parameters =============== 

const bookings = [];
const createBooking = function (
    flightNum,
    numPassenger = 1,
    price = 199 * numPassenger
) {
    // ES5
    // numPassenger = numPassenger || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassenger,
        price
    }
    console.log(booking);
    bookings.push(booking);
}
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000)
*/
/*
    ============ 129. How Passing Arguments Works: Value vs. Reference ==========
*/
/*
const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 123213213,
}
const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 123213213) {
        alert("Checked in");
    } else {
        alert("Wrong passport!");
    }
}
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);
// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
}
newPassport(jonas);
checkIn(flight,jonas);
*/
/* 
============ 131. Functions Accepting Callback Functions =============
*/
/*
const oneWord = function(str) {
    return str.replace(/ /g,' ').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first,... others] = str.split(' ');
    return [first.toUpperCase(),...others].join(' ');
}
// Higher-order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`transformed string: ${fn(str)}`);
    console.log(`Transformed by : ${fn.name}`);
}
transformer('JavaScript is the best!',upperFirstWord);
console.log("=========================");
transformer('JavaScript is the best!',oneWord);
// Js uses callbacks all the time
const high5 = function() {
    console.log('Hello');
}
document.body.addEventListener("click",high5);

['jonas', 'Martha', 'Adam'].forEach(high5);
*/
/*
    ====== 132.Functions returning Functions =======
*/
/*
// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// }
// Write arrow function
const greet = greeting => name => console.log(`${greeting} ${name}`);
const greeterHey = greet('Hey');
greeterHey("Jonas");
greeterHey("Steven");

greet("Hello")('jonas');
*/

/*
    ========= 133. The call and apply Methods ========
*/
/*
const lufthansa = {
    airLine: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airLine} flights ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    }
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(239, 'John Smith');
console.log(lufthansa.bookings);
const eurowings = {
    airLine: 'Eurowings',
    iataCode: 'EW',
    bookings: [],

};
const book = lufthansa.book;
// Does NOT work
// book(23, 'Sarah Williams')
// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: "Swiss Air Lines",
    iataCode: 'LX',
    bookings: [],
}
book.call(swiss, 321, 'Mary cooper');
console.log(swiss);

// Apply method

const flightData = [345, 'George Copper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

console.log(swiss);
// Bind method 
console.log("=================================================");
// book.call(eurowings, 23, 'Sarah Williams');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedmann');
bookEW23('Marth Cooper');

// With Event Listenners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
// lufthansa.buyPlane();

document.querySelector('button').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

// Partical application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/
/*
    ====== 135. Coding challenge =========
*/
// 1.
/*
const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        // Get answer
       const answer = Number(prompt(`${this.question} \n${(this.options).join('\n')} \n(write option number)`));
       // Register answer
       console.log(answer);
       typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
       this.displayResults()
       this.displayResults('string');
    },
    displayResults(type = 'array') {
        if(type === 'array') {
            console.log(this.answers);
        } else if(type === 'string' ) {
            // Poll result
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }   

    }
};
document.querySelector(".poll").addEventListener("click",poll.registerNewAnswer.bind(poll));
poll.displayResults.call({answers: [5, 2, 3] }, 'string');
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1] });
*/
/*
  ===== 136. Immediately Invoked Function Expressions (IIFE) =====
*/
// IIFE
/*
const runOnce = function () {
    console.log('This will never run again');
}
runOnce();

(function() {
    console.log('This will never run again');
    const isPrivate = 23;
})();
// console.log(isPrivate);
(() => console.log('This will Also never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
*/
/*
    ========= 137. Closures ===========
*/
/*
const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
};

const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);
*/
/*
    =========== 138. More Closure Examples
*/
/*
let f;
 
const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}
const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    }
}
g();
f();
// Re-assigning f function
h();
f();
console.dir(f)

// Example 2
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;
    setTimeout(function() {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups,each with ${perGroup} passengers`);
    },wait * 1000)

    console.log(`Will start boarding in ${wait} seconds`);
}
// const perGroup = 1000;
boardPassengers(180, 3);
*/
/*
    ========== 139. Coding Challege #2 ============
*/
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector("body").addEventListener("click",function() {
        header.style.color = 'blue';
    })
})();



