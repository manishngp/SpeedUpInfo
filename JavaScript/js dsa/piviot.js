
// let nums = [2, 3, -1, 8, 4];
// let nums = [1,-1,4];
let nums = [2,5];


let arrl = [];
let arrr = [];
let suml = 0
let sumr = 0


for (let i = 0; i < nums.length; i++) {
    suml += nums[i];
    sumr += nums[nums.length-1-i]
    arrl.push(suml);
    arrr.push(sumr);
}
 arrr.reverse();
for(let i=0; i<nums.length; i++){
    if(arrl[i]===arrr[i]){
       return console.log(i);
        
    }
 
}

return console.log(-1);


