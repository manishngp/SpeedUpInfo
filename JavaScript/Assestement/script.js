// JavaScript Assessment — Functions + Data Types
// 1. Which keyword is used to create a function in JavaScript?
// b) function

// 2. What is the output?
// function demo() {
//     console.log("Hello");
// }
// demo();
// b) Hello


// 3. What is called when we pass values into a function?
// a) Parameters

// 4. Which function type has no name?
// c) Anonymous Function

// 5. Which symbol is used in Arrow Functions?
// a) =>

 ​
// 6. What will this function return?
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(2,3));
// b) 5

// 7. What is the output?
// (function(){
//     console.log("IIFE");
// })();
// b) IIFE

​
// 8. A function passed inside another function is called:
// b) Callback Function

// 9. Which function can be stored inside a variable?
// a) Function Expression

// ​
// 10. What is the output?
// console.log(typeof []);
// a) array


// Section B
// 1.
// function greet(name){
//     console.log("Hello " + name);
// }
// greet("Pratik");
// op->  Hello Pratik


// 2.
// const add = (a,b) => a+b;
// console.log(add(10,20));
// op -> 30

// 3.
// function test(){
//     return "JavaScript";
// }
// console.log(test());
// ​op -> Javascript

// 4.
// function show(){
//     console.log("Frontend");
// }
// show();
// show();
// ​op -> Frontend
//       Frontend


// 5.
// console.log(typeof null);   --->Object
// console.log(typeof 100);    --->Number
// console.log(typeof true);   --->boolen


// Section C — Identify Data Types 
// Write the datatype of the following:
// 1.
// "Hello"
// ​op-> string

// 2.
// 100
// ​op -> Number

// 3.
// true
// ​ ​op -> boolen

// 4.
// undefined
// ​ ​op -> Undefine


// 5.
// [1,2,3]
// ​ ​op -> array

// 6.
// {
//    name:"Rahul"
// }
// ​ ​op -> object


// 7.
// null
// ​ ​op -> Object


// Section D — Write Functions 
// 1. Write a function to print:
// Welcome to JavaScript

function print(){
    console.log("Welcome to JavaScript");
}


// 2. Write a function to add two numbers.
// Example:
// add(10,20)
// Output: 30

function add(a,b){
    return a+b;
}
console.log(add(10,20));


// 3. Write a function to check whether a number is even or odd.
function check(num){
    if(num%2==0){
        console.log("Even Number");
    }
    else{
        console.log("Odd Number");
    }
}

// 4. Write an arrow function to multiply two numbers.
let multiply=(a, b)=>{
 console.log(a*b);
}
multiply(40,50)


// 5. Write a function to print table of any number.
// Example:
// table(5)
function table(no){
    for(let i =1; i<=10; i++){
        console.log(no*i);
    }
}
table(5)


// 6. Write a function to calculate square of a number.
function sqr(number){
    console.log(no**2);
}
sqr(5);

// 7. Write a callback function example.
function fun(name, callback){
    console.log("my name is " + name);
    callback();
}
function fun2(){
    console.log("my age is 23");
}
fun("vasant", fun2);

// Section E — Find Errors 
// 1.
// function demo {
//     console.log("Hello");
// }
// ​paranthesis missing after demo -->()

// Find the error and correct it.
// 2.
// const sum = (a,b)
//     return a+b;
// ​arrow is missing =>

// Find the error.
// 3.
// function test(a,b){
// console.log(a+b)
// ​closing } is missing

// Find the missing part.
// Section F — Practical Coding 
// 1. Employee Salary Calculator Function
// Create a function that:
// Takes salary and leaves
// Deducts ₹500 per leave
// Prints final salary

let salary =  58000;
function diduction(salary){
    salary = salary - 500
    console.log(salary);
}
diduction(salary);

// 2. Student Result Function
// Create a function that:
// Takes marks
// Prints Pass if marks > 35
// Otherwise Fail
let marks = 77;
function check_passorfail(mark){
    if(mark>35){
        console.log("Pass");
    }
    else{
        console.log("Fail");
    }

}

// 3. Mobile OTP Function
// Create a function that prints:
// Your OTP is: 4567
let digits = 4567
function otp(data){
    console.log(`Your OTP is: ${data}`);
}
otp(digits);


// 4. Function with Default Parameters
// Create a function:
// greet(name="Guest")
function myFun(name="guest"){
    console.log(`My name is ${name}`);
}
myFun();

// 5. Create an IIFE that prints:
// Application Started
(function immediateFun(){
    console.log("IIFE");
})();
