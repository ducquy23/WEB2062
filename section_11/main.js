'use strict';
/*
    ==========  142.Simple Array Method =============
*/
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
// SLIDE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1,-2));

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr.splice(1, 2));
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr,...arr2]);

// JOIN

console.log(letters.join(' - '));
*/

/*
    ======= 143. The new at Method ============
*/
/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log('jonas'.at(0));
console.log('jonas'.at(-1));
*/

/*
 ========== 144. Looping Arrays: forEach
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for(const movement of movements)
for(const [i ,movement] of movements.entries()) {
    if(movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
}
console.log('-------- FOREACH ----------');
movements.forEach(function(movement, i,array) {
    if(movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
});
// 0: function(200)
// 1: function(250)
// 2: function(400)
// ...
*/
/*
    145. forEach With Maps and Sets
*/
/*
// MAP
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
currencies.forEach(function(value, key, map) {
    console.log(`${key} : ${value}`);
})
// SET
const currenciesUnique = new Set([
    'USD','GBP','USD','EUR','EUR'
]);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value,key,map) {
    console.log(`${key}: ${value}`);
});
*/
/*
    146. PROJECT "BANKIST" APP 
*/
