// // // const arr = [1, 2, 3, 4, 5, 6, 7];

// // // arr.unshift(0);
// // // console.log(arr);








// function getData(greet){
//     greet(hello){
//         hello(sayHi){
//             sayHi(goodMorning){
//                 console.log("goodmorning");
//                 return 
//             }
//         }
//     }
// }
// var user = "nitin";



// let i=0;
// let j = user.length-1
// let flag = true;
// while(i<j){
//     if(user[i]===user[j]){
//         i++;
//         j--;
//     }
//     else{
//         flag = false;
//       break;

//     }


// }
// console.log(flag);
// if(flag){
//     console.log("It is a pelendrome");
// }else{
//     console.log("It is not a pelendrome");

// }
// let arr =[]
// let obj1 = {name:"sagdu"};
// arr.push(obj1)
// obj1 = null

// console.log(arr, obj1);
// console.log(process.version);
// console.log(process.platform);
// console.log(process.cwd());

// let name = process.argv[2];
// if(name){
//     console.log(`hello ${name},
// welcome to node js ` );
// }
// else{
//     console.log("please enter your name");
// }

// let n1 = process.argv[2];
// let n2 =process.argv[3];
// if(n1 === undefined || n2  === undefined){
//     console.log("Please provide two numbers.");
// }
// else{
// console.log(Number(n1)+Number(n2)); 
// }


// console.log(n1+n1);

// let name = process.argv[2]
// let age =process.argv[3]
// let skill = process.argv[4]


// const obj = {
//     name : name,
//     age : age,
//     skill : skill
// }
// console.log(obj);

const ver = process.version
const platform = process.platform
const dir= process.cwd()

const obj = {
    version : ver,
    platform : platform,
    directory : dir,
    argument : process.argv.length
}

console.log(obj);
