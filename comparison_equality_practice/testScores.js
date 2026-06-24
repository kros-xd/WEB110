"use strict";

let test1 = 95;
let test2 = 56;

let compareTest1 = test1 > test2;
let compareTest2 = test1 < test2;

console.log("Is test 1 greater than test 2? " + compareTest1);
console.log("Is test 1 less than test 2? " + compareTest2);

// using template literals
console.log(`Is test 1 greater than test 2? ${compareTest1}`);
console.log(`Is test 1 less than test 2? ${compareTest2}`);

// Case Sensitivity
let done = "done";
let DONE = "DONE";
let caseSensitive = done == DONE;

console.log(`is "done" the same as "DONE"? ${caseSensitive}`);

console.log(`Is 5 strictly equal to "5"? ${5 === "5"}`);

let englishGrade = 87;
let scienceGrade = 76;

console.log(`
------ Grade Comparison ------

English Grade: ${englishGrade}
Science Grade: ${scienceGrade}

Is English greater than Science? ${englishGrade > scienceGrade}
Are the grades equal using == ? ${englishGrade == scienceGrade}
Are the grades strictly equal using === ? ${englishGrade === scienceGrade}
------------------------------
`);

let scoreA = 90;
let scoreB = "90";

console.log(`
    Are the scores equal using == ? ${scoreA == scoreB}
    Are the scores equal using === ? ${scoreA === scoreB} 
    Is scoreA greater than scoreB? ${scoreA > scoreB}
    `);

// Reflection Questions:
/*
1. What symbol is used to create template literals? 
    a: ${}
2. What does ${ } do inside a template literal?
    a: It allows for embedded expressions
3. What is the difference between == and === ?
    a: == is a loose equality that JS implicitly converts data types to be the same
    before they are compared. While === is a strict equality that compares if the two values
    are first the same data type, then the same value.
*/