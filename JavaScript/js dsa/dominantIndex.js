// You are given an integer array nums where the largest integer is unique.

// Determine whether the largest element in the array is at least twice as much
// as every other number in the array.
// If it is, return the index of the largest element, or return -1 otherwise.


let nums = [3,6,1,0];
// let nums = [1,2,3,4];

let maxEle = -Infinity;
let maxInd = 0;
for(let i=0; i<nums.length; i++){
    if(maxEle<nums[i]){
        maxEle = nums[i];
        maxInd = i;
    }
    // maxEle = Math.max(maxEle, nums[i]);
}
// console.log(maxEle);

for(let i =0 ; i<nums.length; i++){
    if(maxEle !== nums[i]){
             
        if( maxEle < nums[i]*2 ){
       console.log(-1);
       return;
    }
    } 
}

console.log(maxInd);