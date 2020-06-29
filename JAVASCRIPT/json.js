'use strict';

// JSON  ( JavaScript Obejct Notation)


 /**
interface JSON {
    
     * Converts a JavaScript Object Notation (JSON) string into an object.
     * @param text A valid JSON string.
     * @param reviver A function that transforms the results. This function is called for each member of the object.
     * If a member contains nested objects, the nested objects are transformed before the parent object is.
    
    parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;
    
     * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer A function that transforms the results.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     
   
    stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
   
     * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer An array of strings and numbers that acts as a approved list for selecting the object properties that will be stringified.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
    
    stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
}
 */



// 1. Obejct to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

console.clear();
// (object -> json)
const rabbit = {
    name: 'tori',
    color: 'white',
    size: 'null',
    birthDate: new Date(),
    // symbol: Symbol('id'),
    jump: () => {
        console.log(`${name} can jump!`)
    },
};

// json_rabbit = JSON.stringify(rabbit);
// console.log(json_rabbit);

// json_rabbit = JSON.stringify(rabbit,['name', 'color']);
// console.log(json_rabbit);

const json_rabbit = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'steel' : value;
});
console.log(json_rabbit);

console.clear();
// 2. JSON to Object
// parse(json)
json_rabbit2 = JSON.stringify(rabbit);
console.log(json_rabbit2);
const obj_rabbit = JSON.parse(json_rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj_rabbit);
rabbit.jump();
// obj_rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj_rabbit.birthDate.getDate());
