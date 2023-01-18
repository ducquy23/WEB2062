'use strict';
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23,Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        }
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your deslicious pasta with
        ${ing1},${ing2} and ${ing3}`);
    }
};
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 3, 4, 5, 6, 7);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

/*
 Sự khác biệt lớn nhất là toán tử spread sẽ lấy tất cả các phần tử
 từ mảng và nó cũng không tạo ra các biến mới và do đó, chúng ta chỉ có thể sử  
 dụng nó ở những nơi mà nếu không chúng ta sẽ viết các giá trị phân tách bằng
 dấu phẩy. 
*/

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays 
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT object
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
console.log('j', 'o');
// console.log(`${...str} Schmedtmann`);

//Real-word example
// const ingredients = [
//     prompt("Let's make pasta! Ingredient 1 ?"),
//     prompt("Let's make pasta! Ingredient 2 ?"),
//     prompt("Let's make pasta! Ingredient 3 ?")
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects

const newRestaurant = {foundedIn: 1998,...restaurant,founder: 'Guiseppe'}
console.log(newRestaurant);

const restaurantCory = {...restaurant};
restaurantCory.name = 'Ristorante Roma';
console.log(restaurantCory.name);
console.log(restaurant.name);
