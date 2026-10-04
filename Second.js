// function dada(){
//     console.log("I am dada ji");

//     function papa(){
//         console.log("I am papa ji");

//         function child(){
//         console.log("I am child");
//     }
//     return child
//     }
//   return papa
// }
// jitne bhi  multi inner function hai onko ese call karo 
// dada()()()


// here are inner function or Outer function 
// function Outer(){
//     console.log("This is outer function ");

//     function inner(){
//         console.log("this is inner function");
//         // return 40
//     }
    
//     // inner()
//     // return inner()
//     return inner
// }
// Outer()()
// // console.log(Outer());
// // Outer()
// // var ans = Outer()
// // ans()


// CallBack ka concept use kiya yaha 
// function main(cb){
//     console.log("this is main function ");
//     return cb
// }
// function welcome(){
//     console.log("This is side function");
// }
// main(welcome)()

// Using Both setInterval + setTimeout
// let id = setInterval(function(){
//     console.log("Only 5 Times Execute karo");
// },1000)
// setTimeout(function(){
//     clearInterval(id)
// },6000)

// setTimeout
// setTimeout(function(){
//     console.log("3 seconds passed");
// },3000)

// it is setInterval bar - bar print karega every 1 second mai 
// setInterval (function(){
//     console.log('I am saransh');
// },1000)

// function print(){
//     console.log('I am Saransh');
// }
// setInterval(print,1000)


// callback function 
// function  footPath(f){
//     console.log('I am Foot Path, My width is : ',f);
// }
// function mainRoad(width,fP){
//     console.log('This is Main Road, total width of Road is ',width);
//     fP(width/8)
// }
// mainRoad(80,footPath)

// Another Example of callback 
// function MainRoad(a){
//  console.log('this is main road');
// //  parameter call karna must hai warna callback kaise hoga
//  a()
// }
// MainRoad(()=>console.log('this is foot path'))

// Another Example of callback function 
// function processUser(name,callback){
//     console.log('Processing user : '+ name);
//     callback(name);
// }
// function welcome(work){
//  console.log(' Second function '+ work);
// }
// processUser('harsh',welcome)
// welcome('aman')

// CallBack Function 
// function hero(){
//     console.log('mai hero function');
//     return 50
// }
// function main(a){
//   console.log('mai main function');
// //   hero function with return value ke sath 
//   console.log(a());
//   // here hero function execute ho raha hai 
//   a()
// }
// main(hero)

// function hero(){
//     console.log('mai hun hero');
//     return 50
// }
// function main(a){
//     // hero function ki return value 'a' de raha hai 
//     console.log(a,'this is main function');  
//     console.log('this is main function');  
// }
// main(hero())

// function checkAge(age){
//     if(age < 0) return 'Invalid age';
//     if(age >= 18) return 'adult';
//    return 'minor';
    
// }
// console.log(checkAge(-5));
// console.log(checkAge(20));
// console.log(checkAge(10));

// function add(a, b){
//     return a + b
// }
//  because 12 + undefined = NaN
// console.log(add(12));
// here 9 will be completely ignore 
// console.log(add(5,8,9));

// function sum(...Numbers){
//     let total = 0
//     for( let n of Numbers){
//         total += n
//     }    
//     return total
// }
// console.log(sum(1,2,3));
// console.log(sum(1,2,3,4,5,6));

// single parameter -> parentheses optional
// var square = a=> a*a
// console.log(square(30));

// single expression -> implicit(no braces , no return keyword)
// const add = (a,b) => a + b
// console.log(add(20,30));

// No parameter -> Empty parentheses required
// const greet = () => console.log("One liner");
// greet()

// multi line body -> braces & explicit return keyword is required
// const plus = (a,b) =>{
// const sum = a + b
// return sum
// }
// console.log(plus(3,4));

// without using function we work like that 
// let length  = 5 , width = 7
// let area = length * width
// console.log(area);

// let length2 = 7, width2 = 9
// let area2 = length2 * width2
// console.log(area2);

// using function same task : ek function banakar multiple times operation perform kiya
// function multi(lengthf, widthf){
//     return lengthf * widthf
// }
// console.log(multi(5,8));
// console.log(multi(5,3));
// console.log(multi(5,6));

// function sayHi(u = 'mam'){
//  console.log('hello', u);
// }
// sayHi()
// sayHi('Harshita')

// function greet(user = 'sir', age = 20){
//     console.log('Welcome ',user,'Your age is ',age);
// }
// greet('sahil',35)
// greet('Rahul',65)
// console.log('default value undefined ( user = sir, age = 20) ');
// greet()
// // sirf second age bas print karwane ke liye 
// greet(undefined,99)
// greet( 'sir',67)


// function abc(...arr){
//     console.log(arr);
// }
// abc(10,20,30,40,50)

// function abc(a,b){
//     console.log("hello guys ",a ,b);
// }
// here b ki default value undefined print hoge
// abc(35)

// Pure VS Impure Function 
// Pure Function
// function add(a,b){
//     return a + b
// }
// console.log(add(34,36));

// function sqrt(a){
//     var b = 10
//     b++
//   return a*b
// }
// console.log(sqrt(5));
// console.log(sqrt(5));

// Impure function 

// here var was global variable 
// var a = 10
// function abc(){
//     a++
//     return a
// }
// console.log(abc()); 11 + 1
// console.log(abc()); 12 + 1
// console.log(abc()); 13 + 1
// console.log(abc()); 14 + 1

// var a = 10
// function abc(num){
//     a++
//     return a*num
// }
// console.log(abc(20));
// console.log(abc(20));
// console.log(abc(20));

// function a(){
//     // return 10
//     let x= 10
    
//     return x
// }
// var b = function(){
//     return 20
// }
// var c = () =>{ 
//     return 30
// }
// // one liner function  show's error in return keyword without {}
// var d = () => {return 40}
// // one liner function NO any Error  in console.log(object);
// var d2 = () => console.log(" in console proper working ")

// console.log(a());
// console.log(b());
// console.log(c());
// console.log(d());
// console.log(d2()); par undefined alag se show ho raha hai beacuse function mai return(value) define nhi hai
// d2()


// in function first wale return ke bad ka code execute nhi hoga  value = 10 hai only 
// function add(a,b){
//     console.log("hihihi");
//     return 10

//     var c = a + b
//     return c
// }
// console.log(add(10,20));
// console.log(add());

// function permission(gender){
//     if(gender == 'F'){
//         return "Welcome to Women's Party"
//     }else{
//         return "Welcome to Men's Party"
//     }
// }
// console.log(permission());
// console.log(permission('F'));

// function hero(){
//     var a = 10
//     var b = 20
//     var c = a + b
//     return c
// }
// console.log(hero());
// console.log(hero());
// console.log(hero());
// console.log(hero());