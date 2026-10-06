var arr = [10,20,30,40]
for(let a = 0; a<arr.length; a++){
   console.log(a);
}

// var arr = [55,88,22,99,11]
// arr.push(77)
// arr.unshift(66)
// arr.unshift(33)
// arr.push(88)
// arr.shift() // shift 33 ko ignore karega
// arr.reverse()
// arr.sort((a,b)=> a-b)
// arr.reverse()
// console.log(arr[1]);
// console.log(arr);

// var arr = [45,10,89,100,1000,225,30,9]
// var arr = ['sara','anil','becu','zaman','lamen']
// arr.sort()   // it treats like [A,B,C,D]
// arr.sort() // only first digit 1,2,3,4,5.... 45 = 4 dekhega
// Numbers ko ascending order me sort karta hai.
// arr.sort((a,b) => a-b)
// Numbers ko descending order me sort karta hai 
// arr.sort((a,b) => b-a)
// console.log(arr);

// var sort = [9,6,4,8,3,2,5,1]
// sort.sort()
// console.log(sort);

// var rev = [22,33,44,55,66,77]
// console.log(rev);
// rev.reverse()
// console.log(rev);

// Multi Dimensional Array 
// let arr = [
//    [11,22,33,44],
//    [21,31,41,51],
//    [32,42,52,62],
//    [4,8,23,56]
// ]
// console.log(arr[2][2]+ arr[0][3]+ arr.length);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[0][1]);

// let arr = [10,20.5,'hello',[2,3,4,5]]
// console.log(arr);
// console.log(arr[3]);
// console.log(arr[3][0]);

// arr = [10,20,30,40]
// arr[10] = 100
// console.log(arr.length);
// console.log(arr);

// var arr = new Array(5)
// console.log(arr);

// let empty = []
// console.log('empty array :',empty);

// var arr = ['aman','bijoy','chandu','dev','ekansh','farukh']
// arr.splice(3,2,'saransh','sourabh')
// console.log(arr[arr.length - 1]);
// console.log(arr[4]);
// console.log(arr[3]);
// console.log(arr.length);
// console.log(arr);

// let arr = [11,22,33,44,55]
// arr.splice(startIndex,deleteCount)
// arr.splice(1,1)
// arr.splice(2,2)
// arr.splice(0,3)
// console.log(arr);
// arr.splice(startIndex,deleteCount,newItems)
// arr.splice(3,0,45)
// arr.splice(3,1,45)
// arr.splice(2,0,25,27,30) // 2index: se add hoga 25,27,30
// arr.splice(2,1,25,27,30) // 33 remove = 25,27,30 add ho jayenge 
// console.log(arr);

// PracticeOf : Push(), Pop(), shift(), unshift()
// var arr = [15,45,78,90,78]
// arr.shift() //[45,78,90,78]
// arr.shift() // [78,90,78]
// arr.unshift(99) // [99,78,90,78]
// arr.pop() // [99,78,90]
// arr.pop() // [99,78]
// arr.push(89) // [99,78,89]
// arr.unshift(67)
// // [67,99,78,89]
// arr.push(89)
// // [67,99,78,89,89]
// arr.unshift(1)
// // [1,67,99,78,89,89]
// console.log(arr[3]);  Output : 78

// let arr = [10,20,30,40]
// console.log(arr);
// Unshift  : starting mai element add karega
// arr.unshift(100)
// arr.unshift(200)
// console.log(arr);
// shift : starting mai element Remove karega
// arr.shift()
// arr.shift()
// console.log(arr);

// a[0] = 45 update kiya first element ko 
// Element push(add) kiya 
// arr.push(90)
// arr.push(100)
// console.log(arr);
// Element pop(delete) kar diya 
// arr.pop()
// console.log(arr);

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

// Practice Zone of Function
// 1.  Write a BMI calculator function 
// function calculateBMI(width,height){
//    let bmi = width / (height * height)
//    return bmi
// }
// console.log(calculateBMI(70,1.75));
// output : 22.857142857142858

// 02 : Write greet function with default name 
// 2.1 Mera Tarika 
// function greet(name = 'saransh'){
//     return name
// }
// console.log(greet('salman'));
// 2.2 Another Way 
// function greet(name = 'Saransh'){
//     console.log('hello', name);
// }
// greet('Gupta ji')
// greet()

// 03 : Sum all  Numbers using Rest parameter 
// function sum(...Numbers){
//    let total = 0;
//    for(let num of Numbers){
//       total += num
//    }
//    return total
// }
// console.log(sum(45,67,89,23,46));

// 04 : Create a Closure counter function
// function createCounter(){
//   let count = 0;

//   return function(){
//    count++;
//    return count
//   }
// }
// const counter = createCounter()
// console.log(counter());
// console.log(counter());
// console.log(counter());

// 05 : Write a function that returns another function
// 5.1 My Method 
// function First(){
//    console.log('ek function');
   
//    function another(){
//       console.log('this is another function');
//    }
//    return another
// }
// First()()
// 5.2 Another Method 
// function outer(){
//    console.log('outer function can works');
//    return function inner(){
//       console.log("Hello JavaScript");
//    }
// }
// const result = outer()
// result()

// 06 : Use a function to log even numbers in array
// function logEvenNumbers(numbers){
//    for(let num of numbers){
//       if(num % 2 === 0){
//          console.log(num);
//       }
//    }
// }
// let numbers = [10,15,20,25,27,30,31,33,34,35]
// logEvenNumbers(numbers)

// 07 : Use a function t0 print odd numbers in Array
// function oddNumbers(numbers){
//    for(let num of numbers){
//       if(num % 2 !== 0){
//          console.log(num);
//       }
//    }
// }
// let numbers = [10,15,20,25,27,30,31,33,34,35]
// oddNumbers(numbers)

// 08 : Create a Pure function  to add tax 
// function addTax(price,taxRate){
//    return price + (price * taxRate / 100)
// }
// console.log(addTax(1000,18));

// 09 : Use IIFE to show Welcome Message 
// (function greet(){
//    console.log("Your Are Welcome");
// })()

// 10 : Write a discount calculator (HOF style)
// function discountCalculator(discount){
//    return function (price){
//      return  price - (price * discount / 100)
//    }
// }
// const tenPercent = discountCalculator(10)
// console.log('After Discount You Pay Only ',tenPercent(1000));

// 11 : Make a toUpperCase transformer using Hight Order Function
// function transform(fn){
//    return function(text){
//       return fn(text)      
//    }
// }
// function toUpperCase(text){
//    return text.toUpperCase()
// }
// const upper = transform(toUpperCase)
// console.log(upper('hello javascript developer'));

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