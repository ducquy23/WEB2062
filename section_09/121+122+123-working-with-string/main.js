'use strict';
// Split and join
const airline = 'TAP Air Portugal';

console.log('a+very+nice+string'.split('+'));
console.log('jonas Schmedtmann'.split(' '));

const [firstName, Lastname] = 'jonas Schmedtmann'.split(' ');
console.log(firstName,Lastname); 

const newName = ['Mr.',firstName, Lastname.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name) {
    const names = name.split(' ');
    const namesUpper = [];
    for(const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0],n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
};

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function(number) {
    const str = number + '';    
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(21387129312));
console.log(maskCreditCard(423438578394579345));
console.log(maskCreditCard('384782937498237598235')); 

// Repeat 
const message2 = 'Bad weather... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInline = function(n) {
    console.log(`There are ${n} planes in line ${'Great!'.repeat(n)}`);
}
planesInline(5);
planesInline(3);
planesInline(12);

// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');

/*
    Working With String - Part 2
=============================================
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Conparing email 
const email = 'hello@jonas.io';
const loginEmail = '  Hello@jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = loginEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceGB = '288,97E';
const priceUS = priceGB.replace('E','$').replace(',','.');
console.log(priceUS);   

const announcement = 'All passengers come to boarding door 23, Boarding door 23!';
console.log(announcement.replace('door','gate'));
console.log(announcement.replaceAll('door','gate'));
console.log(announcement.replaceAll(/door/g,'gate'));

// Booleans 
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));


if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the NEW ARibus family');
}
// Practice exercise
const checkBaggage = function(items) {
    const baggage = items.toLowerCase();
    if(baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board');
    } else {
        console.log('Welcome aboard!');
    }

}
checkBaggage('I have a laptop, some Food and pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/
/*

/*   Working With Strings - Part 1 
================================================
*/
/*
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B37'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));


console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') {
        console.log('You Got the middle seat');
    }else {
        console.log('You Got lucky');
    }
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));
*/