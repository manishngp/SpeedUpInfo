const user = {
  name: "Manish",

  show() {
//    console.log(this);
return this;
  },
};

console.log(user === user.show());


function show(){
    console.log(this);
}

console.log(this); // window Object

function thisKeyworde(){
    console.log(this);        // window object
}
thisKeyworde();

const fun = ()=>{
    console.log(this); // window object
}
fun()


// this in object 

function fun(){
    console.log(this.name);
}

const obj1 = {
    name:"manish",
   fun(){
    console.log(this);
   }
}

const obj2 = {
    name:"gopal telar",
    fun2: ()=>{
        console.log(this);
    }
}

obj1.fun();
obj2.fun2()

const user = {
    name: "Manish",
    // outerMethod() {
    //     // 'this' points to user
    //     console.log("Outer:", this.name); 

    //     const nestedObj = {
          obj:{
            call:9834195914,
              arrowFun: () => {
                // 'this' is inherited from outerMethod
                console.log("Nested Arrow:", this.name); 
            }
          }
    //     };

    //     nestedObj.arrowFun();
    // }
};

user.obj.arrowFun();
"use strict"
const user = {
  name: "Manish",

  show() {
    console.log(this.name);
  }
};

const fn = user.show;

fn();

const user = {
  name: "Manish",

  show: () => {
    console.log(this.name);
  }
};

user.show();

'use strict'
const d =()=>{
    console.log(this);
}
d()

function f(){
    console.log(this);
}
f();