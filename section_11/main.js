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
/*
    148. Coding Chanllege #1
*/
/*
const checkDogs = function(dogsJulia,dogsKate) {
    const dogJuliaCorrected = dogsJulia.slice();
    dogJuliaCorrected.splice(0, 1);
    dogJuliaCorrected.splice(-1);
    const dogs = [...dogJuliaCorrected,...dogsKate];
    console.log(dogs);
    dogs.forEach(function(dog, i) {
        const checkDogs = (dog > 3 ) ? ` is an adult, and is ${dog} years old` : ` is still a puppy`;
        console.log(`Dog number ${i + 1} ${checkDogs}`);
    })

}
checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);
*/
/*
    ========== 150. The Map Method ===============
*/
/*
const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const movementsUSD =  movements.map(function(mov) {
//     return mov * eurToUsd;
// });
const movementsUSD = movements.map(mov => mov * eurToUsd)
console.log(movements);
console.log(movementsUSD);
const movementsUSDfor = [];
for (const mov of movements) {
    movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i , arr) => 
    // if(mov > 0) {
    //     return `Movement ${i + 1}: You deposited ${mov}`;
    // } else {
    //     return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
    // }
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
)
console.log(movementsDescriptions);
*/
/*
    ======= 152. The Filter Method ========
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function(mov) {
    return mov > 0;
})
console.log(movements);
console.log(deposits);
const depositsFor = [];
for(const mov of movements) {
    if(mov > 0) {
        depositsFor.push(mov);
    }
}
console.log(depositsFor);
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/
/*
    ======= 153. The Reduce Method ========
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
// accumulator -> SNOWBALl
const balance = movements.reduce(function(acc,cur, i, arr) {
    console.log(`Interation ${i} : ${acc}`);
    return  acc + cur;
}, 0);
console.log(balance);
let balance2 = 0;
for(const mov of movements) {
    balance2 += mov;
}
console.log(balance);

// Maximum value 
const max = movements.reduce((acc, mov) => {
    if(acc > mov) {
        return acc;
    } else {
        return mov;
    }
}, movements[0]);
console.log(max);
*/
/*
    ====== 154. Coding Challege 2. ==========
*/
/*
const checkDogs = function(dogsJulia,dogsKate) {
    const dogJuliaCorrected = dogsJulia.slice();
    dogJuliaCorrected.splice(0, 1);
    dogJuliaCorrected.splice(-1);
    const dogs = [...dogJuliaCorrected,...dogsKate];
    // console.log(dogs);
    dogs.forEach(function(dog, i) {
        const checkDogs = (dog > 3 ) ? ` is an adult, and is ${dog} years old` : ` is still a puppy`;
        console.log(`Dog number ${i + 1} ${checkDogs}`);
    })

}
// checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);
const calcAverageHumanAge = function(ages) {
    const humanAges = ages.map(age => age <=2 ? 2 * age : 16 + age * 4);
    const adults = humanAges.filter(age => age >= 18);
    const average = adults.reduce((acc, age) => acc + age,0) / adults.length;
    return average;
}
const average1 = calcAverageHumanAge( [5, 2, 4, 1, 15, 8, 3]);
console.log(average1);
*/
/*
    ======= 155. The Magic Of Chaining Methods ======
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
// PIPELINE
const totalDepositsUSD = movements.filter(function (mov) {
    return mov > 0;
}).map(function(mov, i, arr) {
    // console.log(arr);
    return mov * eurToUsd;
}).reduce(function(acc, mov) {
    return acc + mov;
}, 0);
console.log(totalDepositsUSD);
*/

/*
    ====== 156. Coding Challege 3. ==========
*/
/*
const checkDogs = function(dogsJulia,dogsKate) {
    const dogJuliaCorrected = dogsJulia.slice();
    dogJuliaCorrected.splice(0, 1);
    dogJuliaCorrected.splice(-1);
    const dogs = [...dogJuliaCorrected,...dogsKate];
    // console.log(dogs);
    dogs.forEach(function(dog, i) {
        const checkDogs = (dog > 3 ) ? ` is an adult, and is ${dog} years old` : ` is still a puppy`;
        console.log(`Dog number ${i + 1} ${checkDogs}`);
    })

}
const calcAverageHumanAge = ages => ages.map(age => age <=2 ? 2 * age : 16 + age * 4).filter(age => age >= 18).
reduce((acc, age, i, arr) => acc + age / arr.length, 0);
const average1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(average1);
*/
/*
    ==== 157.The Find Method ========
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal =  movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);
console.log(accounts);
*/
/*
    ====== 162. Flat and FlatMap =========
*/
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];
const arr = [[1, 2, 3], [4, 5 , 6], 7, 8];
// console.log(arr.flat());
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// flat 
// const allMovements = accounts.map(mov => mov.movements);
// const flatAllMovements = allMovements.flat();
// const totalMovements = flatAllMovements.reduce((acc, mov) => acc + mov,0);
// console.log(totalMovements);
const overBalance = accounts.map(acc => acc.movements).flat().
reduce((acc, mov) => acc + mov,0);
console.log(overBalance);

// flatMap
const overBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overBalance2);

