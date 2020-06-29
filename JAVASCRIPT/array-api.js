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
    const result_ninety = students.find((student) => student.score === 90);
    console.log(result_ninety);
}

// Q6. make an array of enrolled students
{
   const result_enrolleds = students.filter((student) => student.enrolled);
   console.log(result_enrolleds);
}

// Q7. make an array of containing only the students' scores result should be: [45, 80, 90, 66, 88]
{
    const student_score = students.map((student) => student.score );
    const student_doubleScore = students.map((student) => student.score * 2 );
    console.log(student_score);
    console.log(student_doubleScore);
}

// Q8. check if there is a student with the score lower than 50
{   

    console.clear();
    const student_score_lowerFifty = students.some((student) => student.score < 50 );
    console.log(student_score_lowerFifty);

    
    const all_student_score_lowerFifty = students.every((student) => student.score < 50 );
    const all_student_score_lowerFifty2 = !students.every((student) => student.score >= 50 );
    console.log(all_student_score_lowerFifty);
    console.log(all_student_score_lowerFifty2);
    
}

// Q9. compute student's average score
{   
    console.clear();
    // const student_average_score2 = students.reduceRight((prev, curr) => {
    //     console.log('-------------------------------------------');
    //     console.log(prev);
    //     console.log(curr);
    //     return prev + curr.score;
    // }, 0);
    // console.log(student_average_score2);

    const student_average_score = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(student_average_score / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const student_score_order_string = students
    .map((student) => student.score)
    // .filter(score => score >= 50)
    .join();
    console.log(student_score_order_string);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    {
        const student_score_order_sorting = students
        .map((student) => student.score)
        // .sort((a,b) => a - b)
        // .sort()
        .sort((a, b) => b - a)
        .join();
        console.log(student_score_order_sorting);
    }
}