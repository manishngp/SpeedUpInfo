
// function facto(n){
//     if(n==1) return 1;

//     return facto(n-1)*n

// }

// let n = 5;
// console.log(facto(n));

function fibbo(k){
    if(k==0) return 0;
    if(k==1) return 1;

    return fibbo( k- 1) + fibbo(k - 2)
}

console.log(fibbo(6));

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));


