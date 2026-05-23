// Question 1 — Data Types & Variables
let Name = "Manish";
let Age = 23;
let developer = true;

console.log(`My name is ${Name}`);
console.log(`My age is ${Age}`);
console.log(`I am a developer ${developer}`);


// Question 2 — Even or Odd
let num = 6;
(num % 2 == 0) ? console.log("Number is Even") : console.log("Number is Odd");

// Question 3 — Positive, Negative, or Zero
let N =+ prompt("Enter Number to check is it Positive, Negative, or Zero ");
if(N==0){
    console.log("Number is 0");
}
else if(N>0){
    console.log("Number is Positive");
}
else{
    console.log("Number is Negative");
}

// Question 4 — Largest Number
let a = 10;
let b = 50;
let c = 30;

if (a < b && c < b) {
    console.log("b is Largest Number");
}
else if (b < a && c < a) {
    console.log("a is Largest Number");
}
else {
    console.log("c is Largest Number");
}


// Question 5 — Print 1 to 100

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Question 6 — Print Even Numbers
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Question 7 — Multiplication Table

let Table_of = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`5 X ${i} = ${5 * i}`);
}

// Question 8 — Sum of Numbers

let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum += i;
}
console.log(sum);


// Question 9 — Function for Addition

function addition(a, b) {
    return a + b;
}

console.log(addition(10, 20));

// Question 10 — Function for Square

function square(n) {
    return n * n;
}

console.log(square(5));

// Question 11 — Grade System
let Marks = 90;

function grade(score) {
    if (score >= 90) {
        console.log("Grade A");
    }
    else if (score >= 75) {
        console.log("Grade B");
    }
    else if (score >= 50) {
        console.log("Grade C");
    }
    else {
        console.log("Fail");
    }
}

grade(Marks);



//  Question 12 — Calculator Function

function calculator(a, b, operator) {

    if (operator == "+") {
        console.log("sum is " + (a + b));
    }
    else if (operator == "-") {
        console.log("substraction is " + (a - b));
    }
    else if (operator == "*") {
        console.log("multipliction is " + (a * b));
    }
    else if (operator == "/") {
        console.log("division is " + (a / b));
    }

}

calculator(10, 5, "+")

// Question 13 — Reverse Numbers

for (let i = 20; i < 0; i--) {
    console.log(i);
}

// Question 14 — Divisible by 3 and 5

let no = 30;

if ((no % 3 == 0) && (no % 5 == 0)) {
    console.log("Number is divisible by 3 and 5");
}
else {
    console.log("Number is not divisible by 3 and 5");
}

// Question 15 — Login Validation
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login Successful");
}
else {
    console.log("Invalid Credentials");
}

// Bonus Challenge
// prime number check

var prime = numb => {
    if (numb <= 1) {
        return false;
    }

    for (let i = 2; i < numb; i++) {
        if (numb % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(prime(17));

