'use strict'

// async & await
// clear style of using promise :)

// 1. async
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         // do network request in 10 secs....
//         // return 'steel';
//         resolve('steel');
//     });
// }

async function fetchUser() {

    // do network request in 10 secs....
    return 'steel';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

console.clear();

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2500);
    // throw 'error';
    return '🍎';
}

async function getBanana() {
    await delay(1500);
    return '🍌';
}

/** 
Ver.1
function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}
ver.2
async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

ver.3
async function pickFruits() {

    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

*/

// 3. useful Promise APIs ( Promise.all() , Promise.race())

function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);