'use strict';

// JavaScript is synchronous.
// Execute the code block by order after hoisting
// hoisting: var, function declaration


// hoisting
// // synchronous callback
// function printImmediately(print) {
//     print();
// }

// // Asnchronous callback
// function printWithDelay(print,timeout) {
//     setTimeout(print, timeout);
// }

console.log('1');
setTimeout(() => console.log('2'), 1500);
console.log('3');

// synchronous callback
function printImmediately(print) {
    print();
}
printImmediately( () => console.log('sync collback') );

// Asnchronous callback
function printWithDelay(print,timeout) {
    setTimeout(print, timeout);
}
printWithDelay( () => console.log('Async collback'), 2000);


// callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                ( id === 'steel' && password === 'lee' )||
                ( id === 'coder' && password === 'academy')
                
            ) {
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'steel') {
                onSuccess({name: 'steel', role: 'admin'});
            }else{
                onError(new Error('no acccess'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password, 
    (user) => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error)
            }
        );
    },
    (error) => { console.log(error)}    
);
