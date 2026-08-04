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
var user = "nitin";



let i=0;
let j = user.length-1
let flag = true;
while(i<j){
    if(user[i]===user[j]){
        i++;
        j--;
    }
    else{
        flag = false;
      break;

    }


}
console.log(flag);
if(flag){
    console.log("It is a pelendrome");
}else{
    console.log("It is not a pelendrome");

}