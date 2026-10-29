// this keyword present obj ko print karva raha hai 
let obj = {
    firstName : 'saransh',
    lastName : 'gupta',
    age : 23,

    
}

// let obj1 = {
//     firstName : 'Sarthak',
//     lastName : 'Sharma',
//     age : 33,
//     getIntro : function(){
//         console.log(this);
//     }
// }
// let obj2 = {
//     firstName : 'Balram',
//     lastName : 'Gupta',
//     age : 23,
//     getIntro : function(){
//         console.log(this);
//     }
// }
// obj2.getIntro() // function call karne se hame pure obj mil raha hai 
// obj1.getIntro() // function call karne se hame pure obj mil raha hai 

// 'use strict'   // use strict o/p : undefined 
// function abc(){
//     console.log(this);
// }
// abc() // window object 

// console.log(this); // globaly window rehte hai

// 'use strict'
// a = 10
// // b=20    // reference Error de raha hai 
// console.log(a);

// var a = 10 // window mai a= 10 mil raha hai
//  a = 10 // window mai a= 10 mil raha hai
// // let a = 10    // using let window mai a = 10 nhi mila
// console.log(window); 
 
// Createing Array 
// let arr = new Array(5)
// console.log(arr);
// // RangeError 
// let arr2 = new Array(-1) // invalid array length

// ReferenceError 
// function abc(){
//     var a = 10 // var was function scoped
// }
// console.log(a); // Reference Error 

// let a = 10
// console.log(a)
// console.log(b); // reference error ayege or eske bad code execute nhi hoga
// console.log(10+20);

// TypeError 
// let a = 10
// a() // a is a not a function

// let user = null
// console.log(user.name); // cannot read properties of null 

// const b = 20
// b = 30  // Reassign the value using const is a TypeError 

// let num = 123
// num.push(4) // num.push is not a function


// SyntaxError 
// cinst b = 30 // yaha SyntaxError : or esne pure code ko nhi chalaya 

// "this" keyword  only
// 'use strict'
// function abc(){
//     console.log(this);
// }
// abc() // o/p : undefined 

// function abc(){
//     console.log(this);
// }
// abc() // o/p : window object without 'strict mode'

// var obj = {
//     firstName : 'saransh',
//     lastName : 'Gupta',
//     age : 22,
//     sayHi : function(){
//          console.log(this);
//     }
// }
// obj.sayHi() // o/p : pura obj milega

// var obj = {
//     firstName : 'saransh',
//     lastName : 'Gupta',
//     age : 22,
//     sayHi : ()=>{           // using arrow function 
//          console.log(this);
//     }
// }
// obj.sayHi() // o/p : again window object milega

// console.log(this); // o/p : window object 