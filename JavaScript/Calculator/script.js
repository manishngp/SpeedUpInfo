
let op = document.getElementById("output");


function clearInp() {
    let inp_field = document.getElementById("inp");
    inp_field.value = ''
}


const one = () => {
    let inp_field = document.getElementById("inp");
    inp_field.value = inp_field.value + '1'
}

const two = () => {
    let inp_field = document.getElementById("inp");
    inp_field.value = inp_field.value + '2'
}
const three = () => {
    let inp_field = document.getElementById("inp");
    inp_field.value = inp_field.value + '3'
}
const four = () => {
    let inp_field = document.getElementById("inp");
    inp_field.value = inp_field.value + '4'
}
const five = () => {
    let inp_field = document.getElementById("inp");
    inp_field.value = inp_field.value + '5'
}
const six = () => {
    let inp_field = document.getElementById("inp");
    inp_field.value = inp_field.value + '6'
}
const seven = () => {
    let inp_field = document.getElementById("inp");
    inp_field.value = inp_field.value + '7'
}
const eight = () => {
    let inp_field = document.getElementById("inp");
    inp_field.value = inp_field.value + '8'
}
const nine = () => {
    let inp_field = document.getElementById("inp");
    inp_field.value = inp_field.value + '9'
}
const zero = () => {
    let inp_field = document.getElementById("inp");
    inp_field.value = inp_field.value + '0'
}

const dot = () => {
    let inp_field = document.getElementById("inp");
    inp_field.value = inp_field.value + '.'
}



const result = () => {
    let res = document.getElementById("inp").value;
    let final_ans = eval(res);
    console.log( final_ans);
    op.value = final_ans;
}

const backspace = () => {
    let inp_field = document.getElementById("inp");
    let splited = inp_field.value.split('');
    splited.pop();
    let joined = splited.join("")
    inp_field.value = joined;
    console.log(joined);
}

const mod = () => {
    let inp_field = document.getElementById("inp");
    inp_field.value = inp_field.value + '%'
}

const div = () => {
    let inp_field = document.getElementById("inp");
    inp_field.value = inp_field.value + '/'
}
const mul = () => {
    let inp_field = document.getElementById("inp");
    inp_field.value = inp_field.value + '*'
}
const sub = () => {
    let inp_field = document.getElementById("inp");
    inp_field.value = inp_field.value + '-'
}
const add = () => {
    let inp_field = document.getElementById("inp");
    inp_field.value = inp_field.value + '+'
}


