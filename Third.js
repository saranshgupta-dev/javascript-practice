
// Arrays Starting 
// var arr = [20,30,40,5,60,59,93,56,202,47,93,40,62,97]
// var arr = [20,30,40,5,60]
// arr[-1] = 99
// arr[-2] = 98
// console.log(typeof(arr));
// console.log(arr);
// console.log(arr[-1]);
// console.log(arr.length);
// console.log(arr[arr.length-1]);

// ek variable mai multiple chej store kar sakte hai 
// var mix = [20,3.5,'working',false,null]
// console.log('array length is : ',mix.length);
// console.log(mix);

// var str = ['saransh','sourabh','sakshi']
// console.log(str);
// console.log(str[0]);
// here values update kiya array ki 
// str[0] = 'Super'
// console.log(str);
// var num = [10,20,30,40]
// console.log(num);
// console.log(num[1]);
// console.log(num[4]);

// Here The Difference Between Normal function & Arrow Function for "This" keyword
// yaha arrow function work nhi karega because arrow ka khud ka "This" nhi hota
// const person2 = {
//     name : 'sourabh',

//     workingFunction: function(){
//       console.log(this.name);
//     },

//     NonWorking: () => {
//         console.log(this.name);
//     }
// }
// person2.workingFunction()
// person2.NonWorking()

// yaha arrow ne this keyword lekar call kiya 
// const person = {
//  name : 'saransh',
//  normalFunction: function (){
//     console.log(this.name);
//  },
// //  yaha outer function se this keyword liya Arrow function ne 
//  greet : function (){ 
//    const arrow =  () => {
//     console.log(this.name);
//  }
//  arrow()
// }
// }
// person.normalFunction()
// person.greet()

// Closures & Lexical Scope
// function outer(){
//     let count = 0;
//     return function (){
//         count++;
//         console.log(count);
//     };
// }
// let counter = outer();
// counter();
// counter();
// counter();

// Hight Order Function 
// function createMultiplier(x){
//     return function(y){
//         return x * y
//     }
// }
// let total = createMultiplier(4)
// console.log(total(5));

// First Class Function 
// function shout(msg){
//     return msg.toUpperCase()
// }
// function processMessage(fn){
//   console.log(fn('hello'));
// }
// processMessage(shout)

// // It is Higher Order Function 
// function Footpath(w=10){
//     console.log("this is footpath , footpath width is : ", w ,'feet');
// }
// function MainRoad(wid,cb){
//     console.log("this is mainRoad , the width of road is : ",wid,'feet');
//     cb(wid/10)
//     cb()
// }
// MainRoad(80,Footpath)