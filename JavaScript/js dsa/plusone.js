

let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
// let n = arr.join("")
// let num =Number(n);

// num += 1;

// num = String(num)

// console.log(num.split("").map(Number));

if (digits.length === 1) {
    if (digits[digits.length - 1] === 9) {
        console.log(digits);
        return ;
    }
    else {
        digits[0]++;
        console.log(digits);
        return ;
    }
}
for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
        digits[i]++;
        console.log(digits);
        return ;
    }
    digits[i] = 0;

}

if (digits[0] === 0) {
    digits.unshift(1)
}
console.log(digits);