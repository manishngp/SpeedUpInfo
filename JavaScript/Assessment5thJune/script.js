// JavaScript Assessment 
// Section A: Output-Based Questions 
// 1. What will be the output?
let arr = [10, 20, 30];
console.log(arr[1]);
// outPut -> ​20


// 2. What will be the output?
let num = 15;
if (num > 10) {
    console.log("A");
} else {
    console.log("B");
}
// outPut ->  A


// 3. What will be the output?
for (let i = 1; i <= 3; i++) {
    console.log(i);
}
// outPut ->  1
//   2
//   3

// 4. What will be the output?
let obj = {
    name: "Pratik",
    age: 24
};
console.log(obj.name);
// outPut ->  Pratik

// 5. What will be the output?
function greet() {
    return "Hello";
}
console.log(greet());
// outPut -> ​ Hello


// 6. What will be the output?
let arr = [5, 10, 15];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// ​outPut -> 5 10 15


// 7. What will be the output?
let a = 10;
let b = 20;
if (a > b) {
    console.log("A");
} else {
    console.log("B");
}
// ​outPut -> B


// 8. What will be the output?
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));
// ​outPut ->  8


// 9. What will be the output?
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);
// ​outPut -> [1, 2, 3, 4]

// 10. What will be the output?
let student = {
    name: "John",
    marks: 80
};
student.marks = 90;
console.log(student.marks);
// ​outPut ->  90


// 11. What will be the output?
for(let i = 5; i >= 1; i--) {
    console.log(i);
}
// ​outPut ->  5 4 3 2 1


// 12. What will be the output?
function check(num) {
    if(num % 2 === 0){
        return "Even";
    }
    return "Odd";
}
console.log(check(7));
// ​outPut ->  Odd


// 13. What will be the output?
let fruits = ["Apple", "Banana"];
console.log(fruits.length);
// ​outPut ->  2

// 14. What will be the output?
let user = {
    name: "Rahul"
};
console.log(user.age);
// ​outPut ->  undefine

// 15. What will be the output?
let sum = 0;
for(let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum);
// ​outPut -> 15


// 1. What will be the output?
console.log(10 + 20);
// ​outPut -> 30

// 2. What will be the output?
console.log("10" + 20);
// ​outPut -> "1020"

// 3. What will be the output?
console.log("10" - 5);
// ​outPut -> 5

// 4. What will be the output?
console.log(10 + true);
// ​outPut ->  11


// 5. What will be the output?
console.log(10 + false);
// ​outPut ->  10

// 6. What will be the output?
console.log(typeof 100);
// ​outPut ->  "Number"

// 7. What will be the output?
console.log(typeof "Hello");
// ​outPut -> "string"

// 8. What will be the output?
console.log(typeof true);
// ​outPut ->  "boolen"

// 9. What will be the output?
console.log(typeof undefined);
// ​outPut -> "undefine"

// 10. What will be the output?
console.log(typeof null);
// ​outPut -> "object"

// 11. What will be the output?
console.log(10 == "10");
// ​outPut -> True

// 12. What will be the output?
console.log(10 === "10");
// ​outPut ->  False

// 13. What will be the output?
console.log(5 != "5");
// outPut -> ​False

// 14. What will be the output?
console.log(5 !== "5");
// ​outPut ->  True

// 15. What will be the output?
console.log(10 > 5 && 20 > 15);
// ​outPut ->  true

// 16. What will be the output?
console.log(10 > 15 || 20 > 15);
//outPut ->  ​true

// 17. What will be the output?
console.log(!(10 > 5));
// ​outPut -> False

// 18. What will be the output?
let x = 10;
console.log(x++);
console.log(x);
// ​outPut -> 10 11

// 19. What will be the output?
let x = 10;
console.log(++x);
console.log(x);
// ​outPut -> 11 11

// 20. What will be the output?
let a = 10;
a += 5;
console.log(a);
// ​outPut -> 15


// Arrays
// 21. What will be the output?
let arr = [10,20,30];
console.log(arr[1]);
// ​outPut ->  20

// 22. What will be the output?
let arr = [1,2,3];
arr.push(4);
console.log(arr);
// ​outPut -> [1,2,3,4]

// 23. What will be the output?
let arr = [1,2,3];
arr.pop();
console.log(arr);
// ​outPut -> [1,2]

// 24. What will be the output?
let arr = [10,20,30];
console.log(arr.length);
// ​outPut ->  3

// 25. What will be the output?
let arr = [5,10,15];
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
// ​outPut ->  5 10 15

// Objects
// 26. What will be the output?
let student = {
    name:"Rahul",
    age:24
};
console.log(student.name);
// ​ outPut ->  Rahul

// 27. What will be the output?
let user = {
    city:"Pune"
};
user.city = "Mumbai";
console.log(user.city);
// ​outPut -> Mumbai

// 28. What will be the output?
let emp = {
    name:"John"
};
console.log(emp.salary);
// ​outPut ->  Undefine

// 29. What will be the output?
let obj = {
    name:"Amit"
};
obj.age = 25;
console.log(obj);
// ​outPut -> obj = { name:"amit", age = 25};

// 30. What will be the output?
let product = {
    name:"Laptop",
    price:50000
};

delete product.price;

console.log(product);
// ​outPut ->  product ={ name : "Laptop"};

// Conditional Statements
// 31. What will be the output?
let age = 20;
if(age >= 18){
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}
// ​outPut ->  "Eligible"

// 32. What will be the output?
let num = 7;
if(num % 2 === 0){
    console.log("Even");
}
else{
    console.log("Odd");
}
// ​outPut -> Odd

// 33. What will be the output?
let marks = 85;
if(marks >= 90){
    console.log("A");
}
else if(marks >= 75){
    console.log("B");
}
else{
    console.log("C");
}
// ​outPut ->  "B"

// 34. What will be the output?
let value = "";
if(value){
    console.log("True");
}
else{
    console.log("False");
}
// ​outPut -> False

// 35. What will be the output?
let num = 0;
if(num){
    console.log("Yes");
}
else{
    console.log("No");
}
// ​outPut -> No

// Loops
// 36. What will be the output?
for(let i=1; i<=3; i++){
    console.log(i);
}
// ​outPut ->  1 2 3

// 37. What will be the output?
for(let i=3; i>=1; i--){
    console.log(i);
}
// ​outPut ->  3 2 1

// 38. What will be the output?
let sum = 0;
for(let i=1; i<=5; i++){
    sum += i;
}
console.log(sum);
// ​outPut -> 15

// 39. What will be the output?
let i = 1;
while(i <= 3){
    console.log(i);
    i++;
}
// ​outPut ->  1 2 3

// 40. What will be the output?
for(let i=1; i<=5; i++){
    if(i === 3){
        break;
    }
    console.log(i);
}
// ​outPut ->  1 2 


// Functions
// 41. What will be the output?
function greet(){
    return "Hello";
}
console.log(greet());
// ​ outPut ->  Hello


// 42. What will be the output?
function add(a,b){
    return a+b;
}
console.log(add(10,20));
// ​outPut ->  30


// 43. What will be the output?
function test(){
    console.log("JavaScript");
}

test();
// ​outPut ->  JavaScript

// 44. What will be the output?
function square(num){
    return num * num;
}

console.log(square(5));
// ​ outPut ->  25

// 45. What will be the output?
function check(num){
    if(num > 0){
        return "Positive";
    }
    return "Negative";
}
console.log(check(-10));
// ​outPut ->  Negative


// Mixed Interview Style
// 46. What will be the output?
console.log([] == false);
// ​outPut -> True

// 47. What will be the output?
console.log("5" * 2);
// ​outPut -> 10

// 48. What will be the output?
console.log("5" + 2);
// ​outPut -> "52"

// 49. What will be the output?
console.log(Boolean(" "));
// ​outPut ->  true 

// 50. What will be the output?
console.log(Boolean(""));
// ​outPut ->  False

// Section B: Coding Questions
// 16. Write a function to find the square of a number.
// Example:
square(5)
function square(n){
    console.log(n*n);
}
// Output:
// 25

// 17. Write a function to check whether a number is Even or Odd.
function check(Num){
    if(Num%2===0){
        console.log("Even");
    }
    else{
        console.log("odd");
    }
}

// 18. Write a program to print numbers from 1 to 50 using a loop.
for(let i =1; i<=50; i++){
    console.log(i);
}

// 19. Write a program to print numbers from 50 to 1 using a loop.
for(let i= 50; i>=1; i--){
    console.log(i);
}

// 20. Write a function that returns the largest of two numbers.
let a = 30;
let b =10;
if(a>b){
    console.log(a);
}
else{
    console.log(b);
}
// 21. Write a function that returns the largest of three numbers.
if(a>b && a>c){
    console.log(a);
}
else if(b>c &&b>a){
    console.log(b);
}
else{
    console.log(c);
}


// 22. Create an array of 5 student names and print all names using a loop.
let names = ['viakas', 'narayan', 'ujwal', 'prakash', 'samir'];
for(let i =0; i<names.length; i++){
    console.log(names[i]);
}


// 23. Find the sum of all elements in the following array:
let arr = [10, 20, 30, 40, 50];
let sum = 0;
for(let i =0; i<arr.length; i++){
    sum += arr[i];
}
console.log(sum);

// 24. Find the largest number from an array.
let arr = [45, 78, 12, 99, 34];
let largest = -Infinity;
for(let i =0; i<arr.length; i++){
    largest = Math.max(largest, arr[i]);
}
console.log(largest);

// 25. Find the smallest number from an array.
let arr = [45, 78, 12, 99, 34];
let smallest = Infinity;
for(let i=0; i<arr.length; i++){
    smallest = Math.max(smallest, arr[i])
}
console.log(smallest);

// 26. Count how many even numbers are present in the array.
let arr = [2, 5, 8, 11, 14, 17, 20];
let count = 0; 
for(let i =0; i< arr.length; i++){
    if(arr[i]%2 === 0){
        count++;
    }
}
console.log(count);

// 27. Create an object for a student containing:
// name
// age
// course
// city
// ​
// Print all values.
 const student = {
    name:"jayant",
    age = 34,
    course = "PhD",
    city = "Pune"
 }

// console.log(student.name, student.age,student.course, student.city);

// 28. Create an array of employee objects and print only employee names.
// Example:
const emp = [
    { name: "John", salary: 30000 },
    { name: "Rahul", salary: 40000 },
    { name: "Amit", salary: 50000 }
]

for (let i = 0; i < emp.length; i++) {
    console.log(emp[i].name);
}


// ​
// 29. Write a function to count vowels in a string.
// Example:
// countVowels("javascript")
// ​
// Output:
// 3
let str = "javascript"
let count = 0;
for(let i =0; i<str.length; i++){
    if(str[i] ==="a" || str[i] ==="e" || str[i] ==="i"|| str[i] ==="o"|| str[i] ==="u"){
        count++;
    }
}
console.log(count);

// 30. Mini Problem Statement
// Create an array of products:
const data = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Mouse", price: 500 }
]

// Perform the following:
// Print all product names.
for (let i = 0; i < data.length; i++) {
    console.log(data[i].name);
}

// Calculate total price.
let totalPrice = 0;
for (let i = 0; i < data.length; i++) {
    totalPrice += data[i].price;
}
console.log(totalPrice);

// Print products whose price is greater than ₹10,000.
for (let i = 0; i < data.length; i++) {
    if (data[i].price > 10000) {
        console.log(data[i].price);;
    }
}

// Bonus Challenge
// 31. Create a Student Result System
// Input:
let marks = [78, 85, 45, 90, 67];
// ​
// Requirements:
// Find Total Marks
let totalMarks = 0;
for (let i = 0; i < marks.length; i++) {
    totalMarks += marks[i];
}
console.log(totalMarks);
// Find Average Marks
let avgMarks = totalMarks / marks.length;
console.log(avgMarks);

// Count Passed Students (>=35)
let passCount = 0;
let FailCount = 0;
for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 35) {
        passCount++
    }
    else {
        failCount++;
    }
}
console.log(passCount);
// Count Failed Students (<35)
console.log(failCount);

// Find Highest Marks
let Higest = 0;
let lowest = 100;

for (let i = 0; i <= marks.length; i++) {
    Higest = Math.max(Higest, marks[i]);
    lowest = Math.min(lowest, marks[i])
}
console.log(Higest);
// Find Lowest Marks
console.log(lowest);


// 32. Employee Salary Analyzer
let employees = [
    { name: "John", salary: 25000 },
    { name: "Rahul", salary: 45000 },
    { name: "Amit", salary: 35000 },
    { name: "Priya", salary: 50000 }
];
// ​
// Requirements:
// Print all employee names
for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name);
}

// Find total salary expense
let totalSal = 0;
for (let i = 0; i < employees.length; i++) {
    totalSal += employees[i].salary
}
console.log(totalSal);

// Find highest paid employee
let HighPaidEmp = "";
let LowestPaidEmp = "";
let Highsal = 0;
for (let i = 0; i <= employees.length; i++) {

    if (Highsal < employees[i].salary) {
        HighPaidEmp = employees[i].name
    }
}
console.log(HighPaidEmp);
// Find lowest paid employee
let LowestPaidEmp = "";
let Lowsal = Infinity;
for (let i = 0; i <= employees.length; i++) {

    if (Highsal > employees[i].salary) {
        LowestPaidEmp = employees[i].name
    }
}
console.log(LowestPaidEmp);
// Count employees earning above ₹40,000
let aboveCount = 0;
for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > 40000) {
        aboveCount++;
    }
}
console.log(aboveCount);
