let student1 = {
    firstName : 'Saransh',
    lastName : 'gupta',
    getIntro : function(city,state){
   console.log(`${this.firstName} ${this.lastName} ${city} (${state})`);
    }
}
let student2 = {
    firstName : 'Sarthak',
    lastName : 'Sharma'
}
let student3 = {
    firstName : 'Aman',
    lastName : 'Kohli'
}
let student4 = {
    firstName : 'Harshita',
    lastName : 'Gupta'
}
// student1.getIntro('Katni','MP')
//method : 01 Function Sharing Using call 
// student1.getIntro.call(student2,'Bhopal','MP') // arguments aise pas karte hai
// student1.getIntro.call(student3,'Patna','Bihar') 
// method : 02 Function Sharing Using apply 
// student1.getIntro.apply(student3,['Patna','Bihar']) 
// student1.getIntro.apply(student2,['Bhopal','MP'])
// method : 03 function Sharing Using bind : ek variable mai store karke call karna
// Way : 01 
let bd = student1.getIntro.bind(student4,'Mandala','MP')
bd()
// Way : 02
student1.getIntro.bind(student3,'Patna','Bihar')() 

// let student1 = {
//     firstName : 'Sarthak',
//     lastName: 'Sharma',
//     Maths : 45,
//     computer : 76,
//     english : 96
// }
// let student2 = {
//     firstName : 'Saransh',
//     lastName : 'gupta',
//     Maths : 87,
//     computer : 56,
//     english : 53
// }
// let student3 = {
//     firstName : 'Salman',
//     lastName : 'khan',
//     Maths : 65,
//     computer : 97,
//     english : 94
// }
// let tellResult = function(){
//     console.log(`${this.firstName} ${this.lastName}, you got ${Math.floor((this.Maths+this.computer+this.english)/3)}% marks`);
// }
// // let getIntro = function(){
// //         console.log('I am ',this.firstName,this.lastName);
// //     }

// // tellResult()
// tellResult.call(student1)
// tellResult.call(student2)
// tellResult.call(student3)

// student1.getIntro() // Sarthak Sharma
// student1.getIntro.call(student2) // Saransh gupta function share kiya student1 se
// student1.getIntro.call(student3) // Salman khan  function share kiya student1 se

// var obj = {
//     name : 'saransh',
//     age : 20,
//     getCompany :function() {
//         // console.log(this.name); // saransh
//         const companyName = {
//         name : 'Sheryians',
//         isGood : true,
//         greet:()=>{
//             console.log(this.name); // saransh
//         }
//         // greet:function(){
//         //     console.log(this.name); // Sheryians 
//         // }
//     }
//     companyName.greet() 
//     // console.log(companyName); // companyName ka object a jayega 
//     }
// }
// // obj.company.greet() // sheryians
// obj.getCompany()


// let btn = document.querySelector('button')
// let btn = document.querySelector('h1')
// btn.addEventListener('click', function(){
//     // console.log('hello');
//     console.log(this); // <button>click here</button>
//     console.log(this.tagName); // BUTTON 
// })

// let obj = {
//     firstName : 'Saransh',
//     lastName : 'Gupta',
//     getIntro:function(){
//         const sayName = function(){
//          console.log(this);  // default window object lega not parent ka 'this'
//         }
//         sayName()
//     }
// }
//  obj.getIntro()

// function getThis(){
//     return this
// }
// const obj1 = {name:'object1'}
// const obj2 = {name:'object2'}

// obj1.getThis = getThis
// obj2.getThis = getThis

// console.log(obj1.getThis());
// console.log(obj2.getThis());

// let obj = {
//     firstName : 'Saransh',
//     lastName : 'Gupta',
//     getIntro:function(){
//         const sayName = ()=>{
//          console.log(this);   // parent se lega 'this' keyword or current obj return karega
//         }
//         sayName()
//     }
// }
// obj.getIntro()
// console.log(this); // browser mai hai window object milega

// 'use strict'  // undefined output in stricct mode
// function abc(){
//     console.log(this); // this = undefined so window object return karega
// }
// abc()

// var obj = {
//     firstName : 'Saransh',
//     lastName : 'Gupta',
//     age : 33,
//     // getIntro:function(){
//     //     this.firstName = 'Harsh'
//     //     //  console.log(this.firstName, this.lastName);
//     //     // console.log(this);
//     // }
//     // getIntro: ()=>{
//     //     console.log(this); // window object 
//     // }
// }
// obj.getIntro()

// this keyword present obj ko print karva raha hai 
// const user = {
//     name : 'saransh',
//     greet(){
//         console.log(this.name);
//     }
// }
// user.greet()   // user object 

// Arrow function do not have their own 'this' 
// const user = {
//     name : "Rahul",
//     greet: ()=>{
//         console.log(this.name);
//     }
// }
// user.greet() // o/p : undefined

// let obj = {
//     firstName : 'saransh',
//     lastName : 'gupta',
//     age : 23,

//     greet(){
//         // console.log(this); // o/p :  obj object 
//         console.log(this.firstName);  // o/p : saransh
//     }
// }
// obj.greet()

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