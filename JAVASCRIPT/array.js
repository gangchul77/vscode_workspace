'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
// console.log(fruits[2]);  undefined
console.log(fruits[fruits.length - 1]);
console.clear();
// 3. Looping over an array
//  print all fruits
// for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(`fruits items: index[${i}] ${fruits[i]}`);
}

// for of loop
for (let fruit of fruits) {
    console.log(fruit);
}

console.clear();
// forEach loop
fruits.forEach((fruits) => console.log(fruits));