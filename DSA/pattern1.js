// ----*
// ---**|*
// --***|**
// -****|***
// *****|****   
const n = 10

for(let i=0; i<n; i++){
let bag =""

for(let j =i+1; j<n; j++){
 bag +=" ";
}

for(let k=0; k<=i; k++){
     bag +="*";
}

for(let l =0; l<i; l++){
 bag +="*";
}




console.log(bag);

}

for(let i=0; i<n-1; i++){
let bag =""

for(let j=0; j<=i; j++){
    bag +=" "
}
for(let k=i; k<n-1; k++){
     bag +="*";
}

for(let l = i+1; l<n-1; l++){
     bag +="*";
}


console.log(bag);

}