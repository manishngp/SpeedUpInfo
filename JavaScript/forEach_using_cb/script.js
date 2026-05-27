function for_each(arr, callback){
    for(let i =0; i<arr.length; i++){
        callback(arr[i], i, arr)
    }

}

function printNum(num){
    console.log(num);
}

for_each([1, 2, 3, 4, 5], printNum)