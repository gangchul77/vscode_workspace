'use strict';

// callback Hell example
class UserStorage{
    loginUser(id, password){
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if(
                    ( id === 'steel' && password === 'lee' )||
                    ( id === 'coder' && password === 'academy')
                    
                ) {
                    resolve(id);
                }else{
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
       return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'steel') {
                    resolve({name: 'steel', role: 'admin'});
                }else{
                    reject(new Error('no acccess'));
                }
            }, 1000);
       });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);

/** 
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

*/