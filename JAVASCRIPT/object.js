// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }
'use strict';
// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}
const steel = { name: 'steel', age: 42 };
print(steel);

steel.hasJob = true;
console.log(steel.hasJob);

delete steel.hasJob;
console.log(steel.hasJob);

// 2. Computed properties
// key should be always
console.log(steel.name);
console.log(steel['name']);
steel['hasJob'] = true;
console.log(steel.hasJob);

function printValue (obj, key) {
    // console.log(obj.key);  undefined
    console.log(obj[key]);
}
printValue(steel, 'name');
printValue(steel, 'age');

// 3. Property value shorthand
const person1  = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = {name: 'dave', age: 4 };
// const person4 = namePerson('steel', 43);
const person4 = new Person('steel', 44);
console.log(person4);
// function makePerson(name, age) {
//     return {
//         // name: name,
//         // age = age,
//         name,
//         age,
//     }
// }

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: propertiy existence check ( key in obj)
console.log('name' in steel);
console.log('age' in steel);
console.log('random' in steel);

// 6. for.. in vs for..of
//  for ( key in obj)
console.clear();
for (key in steel) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }
for ( value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'steel', age: '20'}
const user2 = user;
// user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);