// 1. use strict
'use strict';

// symbol, create unique identifires for object
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
// console.log(`value: ${symbol1}, type: ${typeof symbol1}`); // error
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data sturucture
const gangchul = {name: 'gangchul', age: 42};
gangchul.age = 43;
console.log(`value: ${gangchul.age}, type: ${typeof gangchul}`);

// Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); //  string --> number 변환되여 Error
