'use strict';

// Q1. make a string out of an array
{ 
    const fruits = ['apple', 'banana', 'orange']; 
    // const result = fruits.join();
    const result_string = fruits.join('|');
    console.log(result_string);

}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result_array = fruits.split(',');
    console.log(result_array);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result_reverse = array.reverse();
    console.log(result_reverse);
    console.log(array);
}

// Q4. make new array without the first two elenemts
const array = [1, 2, 3, 4, 5];
// const result = array.splice(2, 3); // array change
const result = array.slice(2, 5);
console.log(result);
console.log(array);


class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
]

// Q5. find a student with the score 90 
{
    // for(let i = 0; i < students.length; i++){
    //     if(students[i].score ===90){
    //         console.log(students[i].name, students[i].score);
    //     }
    // }

    const result_ninety = students.find((student) => student.score === 90);
    console.log(result_ninety);
}

// Q6. make an array of enrolled students
{
   const result_enrolleds = students.filter((student) => student.enrolled);
   console.log(result_enrolleds);
}