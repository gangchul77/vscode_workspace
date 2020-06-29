'use strict';

// 1. String concatenation ( + )
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals:

''''
1 + 2 = ${ 1 + 2}`);

console.log( 'gangchul\'s book');


// 2. Numeric operators
console.log( 1 + 1 ); // add
console.log( 1 - 1 ); // substract
console.log( 1 / 1 ); // divide
console.log( 1 * 1 ); // multiply
console.log( 5 % 2 ); // remainder
console.log( 2 ** 3 ); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`postIncrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postIncrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment poerators
let x = 3;
let y = 6;
 x += y; // x = x + y;
 x -= y;
 x *= y;
 x /= y;

//  5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); // less than or equal
console.log(10 > 8); //greater than
console.log(10 >= 6); //greater than or equal

//  6. Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

//  ||(or) , finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// &&(and), finds the first falsy value
console.log(`and: ${value1 || value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if(nullableObject != null){
//     nullableObject.something;
// }
function check(){
    for (let i = 0; i < 10; i++){
        // wasting time
        console.log('');
    }
    return true;
}

// !(not), 
console.log(!value1);

// 7. Equlity
const stringFive = '5';
const numberFive = 5;

//  == loose equlity, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//  === strict equlity, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equlity by reference
const gangchul1 = { name: 'gangchul' };
const gangchul2 = { name: 'gangchul' };
const gangchul3 = gangchul1;
console.log(gangchul1 == gangchul2);
console.log(gangchul1 === gangchul2);
console.log(gangchul1 === gangchul3);

// let gangchul4 = { name: 'gangchul' };
// let gangchul5 = { name: 'gangchul' };
// let gangchul6 = gangchul1;
// console.log(gangchul1 == gangchul2);
// console.log(gangchul1 === gangchul2);
// console.log(gangchul1 === gangchul3);


// equlity - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);;

// 8. Conditional operators: if
// if, else if, else
// const name = 'gangchul';
// const name = 'coder';
const name = 'gangchullee';
if (name === 'gangchul'){
    console.log('Welcome, Gangchul!');
}else if(name === 'coder'){
    console.log('You are amazing coder');
}else{
    console.log('Unkwnon')
}

// 9 Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'gangchul' ? 'yes' : 'no');

// 10. Switch statment
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'Safari';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    // case 'Firefox':
    //     console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is turthy, body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--
}

// do while loop, body code is executed first, then check the condition.
do{
    console.log(`do while: ${i}`);
    i--;
}while(i > -3);

// for loop, for(begin; condition; step)
// begin start first, (codition, step)loop
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}
for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops ( cpu over)
for (let i = 2; i < 10; i++){
    for( let j = 1; j < 10; j++){
        console.log(` ${i} * ${j} = ${i*j}`);
    }
}

// break, continue
// Q1.  iterate from 0 to 10 and print only even numbers (use continue)

// for(let i = 0; i <= 10; i++){
//     if( i % 2 === 0){
//         console.log(`even number: ${i}`);
//     }
// }

for(let i = 0; i < 11 ; i++){
    if( i % 2 !== 0){
       continue;
    }
    console.log(`Q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i = 0; i <= 10; i++){
    if( i > 8 ){
        break;
    }
    console.log(`Q2. ${i}`);
}
