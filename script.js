// Immidiately invoked function Expression
// (function(){
//   console.log("This is IIFE function");
// })()

// ye function bhi work kar raha hai 
// (()=>console.log("hello"))()

// function aa(){
//     console.log("hello");
//     return 10
// }
// function call karne par 'hello' dega 
// aa()
// jaise var a = 30  means a ki value 30 hai isliye 'return' function ki value return karega
// console.log(aa());

// function god(){
//     var a = 10
//     if(true){
//     let b = 20;
//     var c = 30
//     console.log(b);
//     }
//     console.log(c);
// console.log(b); it is shown Error
// }
// god()
//var bhi error dega kyoki function ke bahar access kar rahe ho
// console.log(c);   

// function sum(a,b){
//     return a + b
// }
// let total = sum(5,10)
// console.log(total);

// function minus(a,b){
//     return a - b;
// }
// let total2 = minus(10,5)
// console.log(total2);

// Immidiately Invoked function expression 
// (
//     function(){
//         console.log("This is IIFE");
//     }
// )()

// string ko char mai distribute kar de raha hai multiple lines mai
// for (let char of "sara nsh"){
//     console.log(char);
// }

//  Skip current iteration(3) and move to next like : 4,5
// for (i=1 ; i<=5; i++){
//     if(i === 3)continue
//     console.log(i);
// }

// array ko multiple lines mai la de raha hai 
// let nums = [10,20,30];
// nums.forEach((num) => {
//     console.log(num);
// })

// let user = { name : "saransh", age :26}
// for( let key in user){
//     console.log(user,user["name"]);
// }

// Practice Zone

// print 1 to 10 using for 
// for(i= 1 ; i <= 10; i++){
//     console.log(i);
// }

// print even numbers between 1 to 20
// for(i=1 ; i<=20; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// Reverse a string using loop
// function reverseString(str){
//     let reversed = "";

//     for(let i = str.length - 1; i>= 0; i--){
//         reversed += str[i];
//     }
//     return reversed
// }
// console.log(reverseString("JavaScript"));

// Sum of all  numbers in array
// let arr = [10,20,30,40,50] 
// let sum = 0;
// for (let i = 0; i < arr.length; i++ ){
//     sum = sum + arr[i];
// }
// console.log(sum);

// print all characters of a name using for-of
// let name = "saransh"
// for(let char of name){
//     console.log(char);
// }

// Print all object keys and values using for-in
// let user = {
//     name : "saransh",
//     age : 22,
//     city : "indore"
// };
// for (let key in user){
//     // loop ke andar 3 bar print hoga  sab kuch
//     console.log(user);
//     // console.log(user[key]);
//     // console.log(key,user[key]);
// }
// console.log(user);

// Use continue to skip a specific number
// my code : missing let, if {continue} hona,
// for(i = 1; i<10; i++){
//     if(i === 7)continue
//     if(i === 8)continue
//         console.log(i);
//     }
// chatgpt code 
// for(let i= 1; i<10; i++){
//     if(i === 5){
//         continue;
//     }
//     if(i === 8){
//         continue;
//     }
//     console.log(i);
// }

// Guess number game – use while to ask until correct
// let secretNumber = 7;
// let guess = Number(prompt("Guess the number:"))

// while(guess !== secretNumber){
//     guess = Number(prompt("Wrong! Try Again:"))
// }
// console.log("correct! You guessed the number.");

// Pattern: Print triangle using *
// for(let i= 1; i<=5; i++){
//     let row = ""

//     for(let j = 1; j <= i; j++){
//         row += "*";
//     }
//     console.log(row);
// }

// Sum of even numbers in an array using forEach
// let numbers = [10, 15, 20, 25, 30];
// let sum = 0;
// numbers.forEach(function(num) {
//     if (num % 2 === 0) {
//         sum += num;
//     }
// });
// console.log(sum);

// function isEmpty(value){
//     return value === null || value === undefined || value === ""
// }
// console.log(isEmpty(null));
// console.log(isEmpty(undefined));
// console.log(isEmpty(""));
// console.log(isEmpty(20));
// console.log(isEmpty("saransh"));

// let str = '42'
// let num = +str
// console.log(num);

// let age = 17
// let msg = age>= 18 ? "adult" : "minor"
// console.log(msg);

// build a calculator

//  mere method - 01 
// function calc(a,b,Operator){
//  console.log(a + b);
//  console.log(a * b);
//  console.log(a / b);
//  console.log(a - b);
// }
// calc(30,50)

// chatgpt method - 02
// function calc(a,b,Operator){
//     switch(Operator){
//         case "+":
//             return (a + b);

//         case "-":
//             return ( a - b);
            
//         case "*":
//             return (a * b);

//         case "/":
//             if(b === 0 ){
//                 return "Cannot divide by zero";
//             } 
//              return a / b;

//         default :
//         return "Invalid Operator";     
//     }
// }
// console.log(calc(40,50,'+'));
// console.log(calc(90,50,'-'));
// console.log(calc(8,8,'*'));
// console.log(calc(40, 5, '/'));
// console.log(calc(45, 0,'/'));
// console.log(calc(87,76,'%'));

// Score Logic
// let marks = prompt("Enter you marks ")
// console.log("My marks is : ", marks);

// if(marks >= 90){
//     console.log("Excellent");
// }else if(marks >= 80){
//     console.log(" Very Good");
// }else if(marks >= 40){
//  console.log("Good");
// }
// else if(marks <= 39){
//     console.log('Average');
// }else{
//     console.log("Fail");
// }

// let fruit = "apple";
// let fruit = "banana";

// switch(fruit){
//  case "banana":
//     console.log("Yellow");
//     break;
// case "apple":
//     console.log("Red");
//     break
// default :
// console.log("Unknown");
// }

// function checkAge(age){
//     if(age < 18) return "Denied";
//     return "Allowed";
// }
// console.log(checkAge(15));
// console.log(checkAge(28));

// Rock-paper-scissors
// function game(Player1,Player2){
//   if(Player1 === Player2){
//     return "Draw";
//   }

//   if((Player1 === "rock" && Player2 === "scissors")||
//      (Player1 === "paper" && Player2 === "rock")||
//      (Player1 === "scissors" && Player2 === "paper")
//   ){
//     return "Player 1  Wins";
//   }
//   return "Player 2 Wins "
// }
// console.log(game("rock","scissors"));
// console.log(game("scissors","rock"));
// console.log(game("paper", "rock"));
// console.log(game("rock","paper"));
// console.log(game("scissors","paper"));
// console.log(game("paper","scissors"));

// Login Message 

// if wala run hoga 
// let isLoggedIn = true
// let isAdmin = true

// else run hoga : agar first condition false hai toh
// let isLoggedIn = false
// let isAdmin = false
// Again
// let isLoggedIn = false
// let isAdmin = true

// else if condition run hoge 
// let isLoggedIn = true
// let isAdmin = false

// if(isLoggedIn && isAdmin){
//     console.log("Welcome Admin");
// }else if(isLoggedIn && !isAdmin){
//     console.log("Welcome user");
// }else{
//     console.log("Please Login");
// }


// hosting of functions

// declaration function 
// aa('possible hai ')
// before declaration function call is possible
// function aa(a){
//     console.log( "hosting is possible ", a);
// }

// expression function 
// bbb('Not possible')
// var bbb = function(a){
//     console.log('hosting not possible', a);
// }
// bbb('ye after declaration hai ')

// arrow function 
// hosting not possible
// var ccc = ()=>{
//     console.log('arrow function');
// }
// ccc()

// one linear arrow function 
//  hosting Not possible
// var ddd = (a,b,c) => console.log('one liner function',a,b,c);
// ddd(10,20,30)

// single parameter arrow function
// var eee = a => console.log('single parameter',a);
// eee(' single arguments pass')


// types of function 
// function a1(a){
//     console.log("this is function declaration : ",a);
// }
// var b1 = function(a){
//     console.log("this is function Expression : ",a);
// }
// var c1 = (a) =>{
//     console.log("this is Arrow function : ",a);
// }
// var d1 = (a) => console.log("this is one liner function : ", a);

// var d2 = a => console.log('only for single parameters : ', a);

// a1('harsh')
// b1('harshita')
// c1('rahul')
// d1('saransh')
// d2('single only')

// function greet(user,age){
//     console.log("Good Morning...", user, ", My age is : ",age);

//     if(age>=18){
//         console.log(" You are Welcome in Party");
//     }else{
//         console.log("I am  Not Allowed in Party");
//     }
// }
// greet('saransh',12)
// greet('sakshi', 26)
// greet('sourabh',24)

// function mai arthematic operation karna 
// function add(a,b){
//     console.log(a+b);
// }
// add()
// add(30,50)
// add('saransh','gupta')
// add(345678 , 987654)

// function mul(a,b){
//     console.log(a*b);
// }
// mul(25,6)

// in function parameters mai arguments(Values) pas karna
// function greet(a){
//     console.log("Good Afternoon...", a);
// }
// greet()
// greet(500)
// greet(60)
// greet("sir")

// Function
// function hero(){
//     console.log("this is first function and call");
// }
// hero()

// function walk(){
//     console.log("Walking...");
// }
// function dance(){
//     console.log("Dancing...");
// }
// function sing(){
//     console.log("Singing...");
// }
// walk(), dance(), sing()
// walk(), dance(), sing()


// for(var a = 1 ; a<=10; a++){
    
//     if(a%2 != 0){
//         continue;
//     }
//  console.log(a); 
// }

// var a = 1
// while(a <= 10){
//     console.log(a);
    
//     if(a==3){
//         break;
//     }
//     a++
// }

// break Statement
// for(a=1 ; a<=10; a++){
//     console.log(a);
//     if(a==5){
//         break
//     }
// }

// continue Statement
//  for(a=1 ; a<=10; a++){
   
//     if(a==5){
//         continue
//     }
//     if(a==8){
//         continue
//     }
//  console.log(a);
// }

// var name = "saransh gupta ji"
// var age = 20
//  var gender = "male"
//  console.log(" hero's name is ", name, ", his age is : ",age, " and his gender is a : ",gender);
//  console.log(` hero's name is ${name} 
//         his age is ${age} and his gender is a ${gender}`);

//    console.log(name.length);    
//    console.log(name.toUpperCase());
//    console.log(name.indexOf('n'));
//    console.log(name.includes('ji'));

//    console.log(name.slice(1,  -5));
//    console.log(name.slice(-5));

//    console.log(name.substring(-4));
//    console.log(name.replace('saransh', 'sourabh'));
//    console.log(name.split("a"));
//    console.log(name.split(''));
//    console.log("  space cut kiya    ".trim());
//    console.log("repeat ".repeat(5));
// console.log('sar ji'.startsWith('sar'));
// console.log('gupta ji'.endsWith('i'));

// console.log(name[4]);
// console.log(name.charAt(0));

// console.log(a);
// var a = 10
// a = 110

// console.log(b);
// let b = 20
// b = 120

// console.log(c);
// const c = 10

// for loop 

// for(var a = 10 ; a>0; a--){
//     console.log(a,"hihi");
// }

// var a = 0
// while(a<=5){
//     console.log(a,"I will practice daily");
//     a++
// }

// do while loop
// do{
//    var pass = prompt("Enter Password")
// }while(pass != "123")
//     console.log("Welcome")

// var a = 0
// do{
//     console.log(a,"without condition it can print");
//      a++
// }while( a<10){
//     // a++
// }

// ask  a user  any number and print  its table 
// var table = Number(prompt("Enter Number"))
//  var a = 1
//  while(a <= 10){
//     console.log(table +' X '+a+' = '+table*a );
//     a++
//  }

// var num = Number(prompt("Enter Number"))
// var a = 1
// while(a <= num){
//      console.log(a);
//          a++
// }

//  while loop for print Even Number 
// var num = Number(prompt("Enter Number"))
// var a = 1
// while( a <= num){
//     if( a%2 == 0){
//         console.log(a)
//     }
//     a++
// }

// while loop for print odd Numbers 
// var num = Number(prompt("Enter Number"))
// var a = 1
// while( a <= num){
//     if( a%2 != 0){
//         console.log(a)
//     }
//     a++
// }


// While Loop 

// infinite times chalega 
// while(10>1){
//     console.log("infinite loop");
// }

// var a = 1
// while(a <= 10){
//     console.log(a," positive hello");
//     a++
// }

// var a = 10
// while(a>0){
//     console.log(a, "Negative hello");
//     a--
// }


// Switch Statement 
// var marks = 89
// switch(true){
//     case (marks > 85) : console.log("A+");
//     break
//     case (marks > 75) : console.log("B+");
//     break
//     case (marks > 65) : console.log("C+");
//     break
//     default : console.log("Fail");
// }

// Ternary Operator 
//  var a = 10
//  var b = 20
//  a > b ? console.log("Badhiya hai") : console.log(" Not Badhiya ");

// console.log(10 > 5?  "Hello" : "Bye");
// console.log(10 > 15?  "Hello" : "Bye");

// console.log( 20 >= 18 ? 'adults': 'minor');
// console.log( 15 >= 18 ? 'adults': 'minor');

// Truthy : 
// Falsy : 
// if(){
//     console.log("True value");
// }else{
//     console.log("False value");
// }

// Only sister for 1500 month
// var gender = prompt("Enter Your Gender (M/F)")
// var age = Number(prompt("Enter your age"))

// console.log(" my gender is :", gender ,  "  My age is :", age);

// if( gender == 'F'){
//     if(age >= 18 && age <= 60){
//         console.log("You Get 1500 Per months");

//     }else{
//         console.log("You Are Not Elligible ");
//     }
// }else{
//     console.log("Your are Not Allowed");
// }

// var age = Number(prompt("Enter your age"))
// console.log("My Age is : ",age);

// if( age >= 18 && age <= 35){
//     console.log("You are Search Jobs ");
// }else if(age > 35 && age <= 54){
//     console.log("You Are Working Professional");

// }else if( age >= 55 && age <= 110) {
//     console.log("You are Eligible for Pension");
// }else{
//     console.log("Your are Child you only Study & Play Games");
// }

// var math = Number(prompt("Enter your Math Number"))
// var phy = Number(prompt("Enter you physics Number"))
// var chem = Number(prompt("Enter your Chemistry Number "))

// var marks = (math + phy + chem) / 3

// // var marks = Number(prompt("Enter Your Percentage "))
// console.log("My Percent is : " , marks,'% Only');

// if( marks >= 90){
//     console.log("A++ Grade ⭐️");
//     console.log("I am a topper");
// }else if( marks >= 85){
//     console.log("A Grade");
// }else if( marks >= 75){
//     console.log("B+ Grade");
// }else if( marks >= 65){
//     console.log("B Grade");
// }else if(marks >= 55 ){
//     console.log("C Grade");
//     console.log("Only Pass hue ho");
// }else if( marks >= 45 ) {
//     console.log("D Grade");
//     console.log("Your are in Boundry");
    
// }else{
//     console.log("Fail");
//     console.log("Fuck you");
// }


// var math = Number(prompt("Enter your Math Number"))
// var phy = Number(prompt("Enter you physics Number"))
// var chem = Number(prompt("Enter your Chemistry Number "))
 
//  Ye Mere  Method hai 
// var plus = math + phy + chem 
// console.log("My total Number in Physics chemistry Math :  ",plus);

// var total = plus / 3
// console.log("My Total Percentage :",total);

// Method 02 
// var avg = (math + phy + chem) / 3
// console.log("this is total  percentage : ",avg);

// if( avg >= 85){
    // console.log("Topper Hai Bro");
    // console.log("Scholar mileage");
    // console.log("Paisa hi Paisa");
// }else{
//     // console.log("koi Scholarship nhi mileage");
//     console.log(" Make More Effort ");
// }



// var std = Number(prompt("Enter your Percentage"))
// console.log("My percentage is : ",std)

// if(std >= 85){
//     console.log("Scholarship mileage");
        // console.log("WOW paisa he Paisa");
// }else{
//     console.log("nhi mileage scholarship")    
    
// }

// var god = Number(prompt("Enter you age"))
// console.log("My age is :",god);

// if(god >= 18){
//     console.log("I can  Vote Now");
// }else{
//     console.log("NO Voteing");
// }

// conditionals : if , if-else , if  if-else else
    // if(10>5){
    //     console.log("Eske GAND fad do please ");
    // }

    // if(10 == 100){
    //     console.log('sahi hai fir toh');
    // }else{
    //     console.log('Not good your condition is false');
    // }

    // if(10 > 5){
    //     console.log('I Love JS');
    // }else{
    //     console.log('I hate JS');
    // }
    // if(10 === '10'){
    //     console.log("this say value same hai");
    // }else{
    //     console.log("typeof alag hai dono ka");
    // }

// var a = 10
// var b = 20

// console.log(a > b && a < b);
// console.log(true && false);
// console.log(true || false);

// console.log(a !== b);

// console.log(0 == false);
// console.log(0 === false);

// console.log("" == false);
// console.log("" === false);

// console.log(null  == undefined);
// console.log(null  === undefined);

// console.log(a == b);
// console.log(a === b);

// a = a + 5
// a += 10

//  a = a + 1
// a = a - 1

// post increment & Decrement 
// a--
// a++
// console.log(a);
// Pre increment & Decrement 
// ++ a 
// -- a 
// console.log(a);

// console.log(a++);
// console.log(a--);
// console.log(a);
// console.log(++a);
// console.log(--a);


// var a = Number(prompt("Enter First No."))
// var b = Number(prompt("Enter Second No."))
// console.log("Addition of two Number : ",a + b);

// var a = prompt("Enter  1 no. ")
// var b = prompt("Enter  2 no. ")

// var a2 = Number(a)
// var b2 = Number(b)
// console.log(a2 + b2);

// var a = 12
// var a2 = String(a)

// console.log(a2);
// console.log(typeof(a2));

// var a = prompt("Enter Number")
// var a2 = Number(a)
// console.log(typeof(a) , a);
// // console.log(a);
// console.log(typeof(a2),   a2);
// console.log(a2);

// var a = '20'
// var a2 = Number(a)
// console.log(a2);
// console.log(typeof(a2));

// var st1 = '30'
// var st2 = 40
// console.log(st2 - st1);

// var Nam = prompt("Enter Number 1 ")
// var age = prompt("Enter number 2 ")
// console.log(Nam , age);
// console.log(Nam % age);

//  var a = 'sransh'
//  var b =  'gupta'
//  console.log(a%b);

// var nam = 'Saransh'
// var num = 15
// console.log(nam + num)

// alert('hey this is my message')
// confirm('Are you 18+ ?')
// confirm("this website is for man , Are you Man ?")
// var ans = confirm("Are you Man ?")
// var user = prompt('Enter Your Name')

// var age = prompt('Enter you Age ')
// console.log(age)
// console.log(typeof(age))

// var num1 = prompt(" enter Number ")
// console.log('Enter Number 1 :' ,num1);

// var num2 = 10
// console.log( 'Enter Number 2 : ',num2)

// var s1 = Symbol('hey')
// var s2 = Symbol('hello')
// console.log(s1===s2);
 
// because value alg alg hai 
// var v1 = 'good'
// var v2 = 'good'
// console.log(v1==v2);

// var b = 10n
// console.log(typeof(b));

// var a = null
// console.log(typeof(a));
// console.log(typeof(null));

// var a = 10
// var b = 20
// console.log(a,b);
// console.log("hello js king")
// console.warn("this is Warning");
// console.warn("this is Warning");
// console.error("this is error")

// console.table(['saransh' , 'sourabh', 'papa' ])