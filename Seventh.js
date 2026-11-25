let numbers = [1,2,3,2,4,2,5,1,1,1] // find the number which is come in highest times 
let count = {}
for(let i = 0;i<numbers.length;i++){
   let num = numbers[i] // start num = 1 ,2,3,2,4,2,5,1,1,1
// Object  Key = value 
if(count[num]){
   count[num] = count[num] + 1
}else{
    count[num] = 1 // num = 1 initialize kiya here 
}
}
console.log(count);
// let maxValue = -Infinity
// let maxKey = ''
// for(let key in count){
//     if(count[key]>maxValue){
//         maxValue = count[key]
//         maxKey = key
//     }
// }
// console.log(`Array Highest key is: ${maxKey} with MaxValue: ${maxValue} times Repeat`);

// same highest marks of student find kiya
// const marks = {
//     Rahul : 92,
//     Aman : 92,
//     Priya : 85,
//     Rohit : 65
// }
// let maxValue = -Infinity // sabse smallest possible value de 
// let maxKey = []       // sirf key store karna jinke marks highest ho or same ho
 
// for(let key in marks){
//     if(marks[key] > maxValue ){ //  92 > -Infinity  => yes 
//         maxValue = marks[key]     // maxValue = 92
//     } 
// }
// for(let key in marks){
//     if(marks[key] === maxValue){      // Rahul:92 === 92 or Aman:92 === 92
//        maxKey.push(`${key}:${maxValue}`)  // array['Rahul:92','Aman:92']
//     }
// }
// console.log(maxKey);

// let marks = [80,90,70,85,95]
// let total = marks.reduce((acc,currentValue)=>{
//     return acc+currentValue/marks.length // kuch bhi mat lagao
// },0) // accumulator ki starting value = 0 
// console.log(total);

// let marks = [70,80,90,85,95]
// let total = marks.reduce((acc,currentValue)=>{
//     return acc + currentValue
// },0)
// let avg = total / marks.length
// console.log(avg);

// let x = 10
// x() // Seventh.js:2 Uncaught TypeError: x is not a function

// console.table([{name:'saransh',id:101},{name:'sourabh',id:102}]) // yes it is working

// let price  = 100
// let quantity = 2 
// debugger          // Watch panel 100 * 2 = 200
// price = 200
// debugger         // Watch panel 200 * 2 = 400
// quantity = 3
// debugger         // Watch panel 200 * 3 = 600

// let cart = [
//     {name:'Lapto',Price:50000},
//     {name:'Mobile',Price:20000}
// ]
// let total = 0
// for(let items of cart){
//     total += items.Price
//     debugger
// }

// Testing Watch Panel 
// let user = {
//     name : 'saransh',
//     age : 23
// }
// let bonus = 5
// debugger
// user.age = 22
// debugger
// user.age = user.age + bonus
// debugger
// console.log(user.age);

// Javascript blocking main thread 
// console.log('Hello');
// alert('Click Ok button Faster Execution is waiting for your click')
// console.log('byy');

// Network panel 
// Suppose you are bulding a products listing page 
// async function getProducts() {
//     let response = await fetch("https://fakestoreapi.com/products")
//     let data = await response.json()
//     console.log(data);
// }
// getProducts()

// function first(){
//    second()
// }
// function second(){
//     third()
// }
// function third(){
//     debugger
// }
// first()

// function calculate(){
//     let a = 10
//     let b = 20
//     debugger
//     return a + b
// }
// calculate()

// function first(){
//     console.log('first coming');
//     second()
// }
// function second(){
//     console.log('second coming');
//     third()
// }
// function third(){
//     console.log('third coming');
// }
// first()

// let name = 'saransh'
// function greet(){
//     let age = 22
//     console.log(name);
//     console.log(age);
// }
// greet()
// console.log(age); // yaha par error ane se next line execute nhi hue 
// console.log(name);

// Pause code using debugger keyword on our code : like that 
// let a = 10
// let b = 20
// debugger
// let result = a + b
// console.log(result);

// here we Use Paused on breakpoints to pause the code on any specific line
// function add(a,b){
//     let result = a + b
//     return result
// }
// function calculate(){
//     let x = 10
//     let y = 20

//     let answer = add(x,y)
//     console.log(answer);
// }
// calculate()

// function greet(){
//     console.log('Hello world');
// }
// function welcome(){
//     console.log('welcome');
// }
// console.log('start');
// greet()
// welcome()
// console.log('end');

// let a = 10
// let b = 20
// let result = a + b
// console.log(result);

// async function getProducts() {
//     let response = await fetch( "https://fakestoreapi.com/products")
//     let data = await response.json()
//     // console.log(data);
//     console.table(data)
// }
// getProducts()
// console.log('this is debugger end');

// let user  = {
//     name : 'saransh',
//     id : 101,
//     email : 'Rahul@example.com',
//     address : {
//         city : 'Bhopal',
//         country : 'India'
//     }
// }
// console.group('API Response')
// console.log('User Name',user.name);
// console.log('User ID',user.id);
// console.log('User Email',user.email);

// console.group('Address')
// console.log('User City',user.address.city);
// console.log('User Country',user.address.country);
// console.groupEnd()

// console.groupEnd()

// console.groupCollapsed() are similar to console.group() but group are collapsed by default 
// groupCollapsed is feeling like object we need to open to see it's inside 
// console.groupCollapsed('Product Details')
// console.log('Product : Laptop');
// console.log('Price : ₹50,000');
// console.log('Brand : Dell');
// console.groupEnd()
// // the group was already opened to see it's inside 
// console.group('User Details')
// console.log('Name : Saransh');
// console.log('Age : 23');
// console.log('profession : Software Developer');
// console.groupEnd()

// Nested Using groups 
// console.group('Application')
// console.log('Application Started');
// console.group('Create Account')
// console.log('Name : Saransh Gupta');
// console.log('email : saranshgupta807@gmail.com');
// console.log('Phone No. : 9343632135');
// console.groupEnd()
// console.group('Add to Card')
// console.log('Macbook M5');
// console.log('Price : ₹400,000');
// console.log('Company : Apple');
// console.groupEnd()
// console.log('Application Ended');
// console.groupEnd()

// without grouping the message print separtely
// console.log('User Details');
// console.log('Name : Saransh');
// console.log('Age : 23');
// console.log('city : indore');
// // group multiple console meassage together into one expandable heading
// console.group('User Details') // under User Details having Name , Age, City
// console.log('Name : Rahul');
// console.log('Age : 23');
// console.log('City : Indore');
// console.groupEnd()

// console.group('Product Details') // Product Details it's under having Name ,Price
// console.log('Name : Laptop');
// console.log('Price : 50000');
// console.groupEnd()

// DevTools : developer use devtools to find error , inspect webpage and debug website 
// DevTool contains : console , elements, application : storage , memory, sources, network
// let user = {
//     name : 'saransh',
//     age : 23,
//     address : {
//         city : 'indore',
//         state : 'MP'
//     },
//     arr : [10,20,30,40]
// }
// // console.dir(user);
// // console.log(user);
// // inspecting DOM Element :  where it is actually usefull 
// const heading = document.querySelector('h1')
// console.log(heading); // <h1>Hello JavaScript</h1> : display the HTML / DOM element
// console.dir(heading) // dir : display javascript properties as object 
// console.dir(heading.textContent) // hello JavaScript
// console.dir(heading.children) // HTMLCollection(0)

// let arr = [10,20,30,40]
// console.log('name');
// console.error('this is error')
// console.warn('this is warn')
// console.clear() // Console was cleared
// console.dir(arr) // Array(4)
// console.log(arr); // (4) [10, 20, 30, 40]
// console.dir(user) // Object
// console.log(user); // {name: 'saransh', age: 23}
// console.group() // group : using to group the content


// BEST PRACTICE FOR WRITING CODE 
// Dont use Floating points 
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); // false
// console.log((0.1 + 0.2).toFixed(2)); // '0.30'

// Object / Array Reference se share hota hai - galti se modify mat karo
// Useing structuredClone() Deep copy here 
// const original = {
//     name : 'Rahul',
//     age : 24,
//     address : {
//         city : 'Bhopal',
//         state : 'MP'
//     }
// }
// let safecopy = structuredClone(original)
// safecopy.address.city = 'Indore'
// console.log(safecopy.address.city); // safecopy = Indore
// console.log(original.address.city); // original = Bhopal

// Spread Operator only allows Shallow copy  
// const original = {
//     name : 'saransh',
//     age : 23,
//     address : {
//         city : 'jaipur'
//     }
// }
// let safecopy = {...original}
// console.log(safecopy); 
// safecopy.address.city = 'Katni'
// console.log(safecopy.address.city); // Katni
// console.log(original.address.city); // Katni

// let original = { count : 1}
// let copy = original
// copy.count = 99
// console.log(original); // here copy === original ho gya 
// Safe way to copy hte Object 
// let safecopy = {...original}
// safecopy.count = 50
// // console.log(original); // count = 1
// console.log(safecopy);  // count = 50

// Camel case 
// ek function ka ek kaam 
// function validateUser(user){}
// function saveUser(user){}
// function sendWelcomeEmail(user){}
// acha naam se clear hai : constant use karo 
// const SECOND_IN_A_DAY = 86400
// if(timeDiff > SECOND_IN_A_DAY){}
//  nested with cleaness : early return , flat code 
// function getDiscount(user){
//    if(!user) return 0
//    if(!user.isPremium) return 0
//    if(user.years > 2) return 50
//    return 0
// }
// only Usefull comment is write when cheez is non-obsious 
// await delay(1000) // API rate limit avoid karne ke liye 1 sec wait
// Achhe Name Padte hi samjh a jate hai 
// const isLoggedIN = true
// const maxRetryCount = 3
// function calculateTotalPrice(items){}
// Loop ke andar async/await se bacho jab parallel chal sakta hai  
// await Promise.all(urls.map(url => fetch(url)))

// document.cookie = "username=Rahul; expire=Mon, 23 Nov 2026 21:00:00 GMT; path=/"
// console.log(document.cookie);

// theme save karna jab user toggle kare
// function setTheme(theme){
//     localStorage.setItem('theme',theme)
//     document.body.className = theme
// }
// //  page load par saved theme apply karna 
// function loadtheme(){
//     const saved = localStorage.getItem('theme') ?? 'dark'
//     document.body.className = saved
// }

// sessionStorage.setItem('tempData','ye tab band hote hi data gayab')
// let re = sessionStorage.getItem('tempData')
// console.log(re);

// 9. Practical Project: Theme Switcher Using localStorage
// Todo App – Save tasks using localStorage.
// Shopping Cart – Save products and quantities using localStorage.

// // load previousely saved theme 
// let theme = localStorage.getItem('theme') || 'light'
// // Apply theme  
// document.body.className = theme
// // change theme 
// function changetheme(){
//     theme = theme === 'light' ? 'dark' : 'light'
//     // save theme 
//     localStorage.setItem('theme',theme)
//     // apply theme 
//     document.body.className = 'theme'
// }

// let user = {name:'sam'}
// let str = JSON.stringify(user)
// console.log(typeof str);
// localStorage.setItem('user',user)
// console.log(localStorage.getItem('user')); //[object Object]

// does localStorage store the javascript objects directely 
// ans : NO not directely but using conversion definitely store objects into localStorage 
// let user = {
//     name : 'saransh',
//     age : 23
// }
// localStorage.setItem('user',JSON.stringify(user)) 
// let data = JSON.parse(localStorage.getItem('user'))
// console.log(data.name);


// const request = indexedDB.open('MyDatabase',1)
// request.onupgradeneeded = (event) =>{
//     const db = event.target.result;
//     db.createObjectStore('users',{
//         keyPath : 'id'
//     })
// }

// document.cookie = 'username=saransh'
// console.log(document.cookie);

// Registration form : temporary stores the data when user moves to steps 
// sessionStorage.setItem('name','saransh')
// sessionStorage.setItem('email','saranshgupta807@gmail.com')
// // retrive information 
// let name  = sessionStorage.getItem('name')
// let email = sessionStorage.getItem('email')
// console.log(name);
// console.log(email);

// Session Storage : untill this tab when we close the tab data was removed 
// sessionStorage.setItem('name','saransh')
// let user = sessionStorage.getItem('name')
// console.log(user);
// console.log(sessionStorage.getItem('name'));

// In any e-commerce website user add three produts to their cart 
// let cart = [
//     {id:1,name:'laptop',price:50000},
//     {id:2, name:'mobile',price:20000},
//     {id:3, name:'Headphones', price:2000}
// ]
// localStorage.setItem('cart',JSON.stringify(cart))
// // console.log(localStorage.getItem('cart')); // returns the complete array
// // to retrive the original array 
// let savedCart = JSON.parse(localStorage.getItem('cart'))
// console.log(savedCart[0]);
// console.log(savedCart[1]); // because cart is array so we access through index[]

// Storage : localStorage , sessionStorage 
// localStorage set and get items 
//  localStorage.setItem('name','Rahul')
//  let user = localStorage.getItem('name')
// console.log(user);
// localStorage.setItem('age',24)
// let user = localStorage.getItem('age')
// console.log(user);

// localStorage remove items 
// localStorage.setItem('name','saransh')
// localStorage.setItem('profession','developer')
// let user = localStorage.getItem('name')  
// let u2 = localStorage.getItem('profession')
// console.log(user,u2);
//  localStorage.removeItem('name') // null 
// console.log(localStorage.getItem('name')) // 

// localStorage clear all data : dono data ko delete kiya here
// localStorage.clear()
// console.log(localStorage.getItem('name')); 
// console.log(localStorage.getItem('profession'));

// localStorage : having data long time save even after refresh , close tab or shoutdown your PC
// 1. Saving the Data 
// localStorage.setItem('username','saransh')
// // 2. fetching the Data 
// const name = localStorage.getItem('username')
// console.log(name);
// // 3. deleting the data 
// localStorage.removeItem('username')
// localStorage.clear()
// console.log(name);

// let today = new Date('2026-11-22')
// let deadline =  new Date('2026-12-02')
// let difference = deadline.getTime() - today.getTime()
// let remainingDays  = difference / (1000*60*60*24)
// console.log(remainingDays); // 10days

// for formatting display 
// const d = new Date('2025-06-04T10:30:00')
// console.log(d.toLocaleDateString()); //04/06/2025(locale ke hisab se)
// console.log(d.toLocaleDateString('en-IN')); // 4/6/2025
// console.log(d.toLocaleTimeString('en-IN')); // 10:30:00 am
// console.log(d.toLocaleTimeString()); // 10:30:00
// console.log(d.toISOString()); // 2025-06-04T05:00:00.000Z

// let now = new Date()
// // const formatter = new Intl.DateTimeFormat('en-IN') // 22/11/2026
// const formatter = new Intl.DateTimeFormat('en-IN',{
//     weekday : 'long',
//     day : 'numeric',
//     month : 'long',
//     year : 'numeric'
// })
// // console.log(formatter.format(now));
// console.log(formatter.format(now));  // Sunday 22 November, 2026

// let today = new Date()
// let lastDay = new Date(2026,10,30) // here 10 means is November 
// today.setHours(0,0,0,0) // it reset the time to 00:00:00:00
// // console.log(today.getMilliseconds());
// const difference = lastDay.getTime() - today.getTime()
// const remain = difference /(1000*60*60*24)
// console.log(remain);

// let today = new Date()
// let deadline = new Date('2026-12-02')
// let difference = deadline.getTime() - today.getTime()
//  let remain = Math.floor(difference/(1000*60*60*24))
//  console.log(remain); // 10 days was remaining for submiting the assignment 

// let midnight  = new Date('2026-12-23T00:00:00')
// console.log(midnight.getHours()); // 0 => 12:00 AM
// let afterNoon = new Date('2026-12-26T12:00:00')
// console.log(afterNoon.getHours());// 12 => 12:00PM
// let evening = new Date('2026-11-13T18:00:00')
// console.log(evening.getHours()); // 18 => 06:00PM
// // this Program works all the  above like : midnight, afterNoon, evening 
// const formatted = new Intl.DateTimeFormat('en-In',{
//     hour : '2-digit',
//     minute:'2-digit',
//     hour12 : true
// }).format(evening)
// console.log(formatted);

// const d = new Date(2026,5,20) // June = 5
// // const d2 = new Date('2026-05-20') // 05 = May 
// // console.log(d2);
// console.log(d);

// const d = new Date('hellos sidjjs')
// console.log(d.getFullYear()); // NaN
// console.log(d); // Invalid Date

// Javascript provide Intl.DateTimeFormat 
// this for YYYY-MM-DD 
// let d = new Date(2026,10,21) // 
// let d = new Date('2026-12-21') // for December months
// const formatted = new Intl.DateTimeFormat('en-IN',{
//     day : 'numeric',
//     month : 'long',
//     year : 'numeric'
// }).format(d)
// console.log(formatted);

// Intl.DateTimeFormat : Hours-minutes-seconds , current time or minutes
// let d = new Date()
// const formatted = Intl.DateTimeFormat('en-In',{
//       hour : '2-digit',
//       minute : '2-digit',
//       hour12 : true
// }).format(d)
// console.log(formatted);

// UTC stands for coordinated universal Time 
// let d = new Date()
// console.log(d.getHours()); // 21
// console.log(d.getUTCHours()); // 15

// javascript getHours() returns 24Hours we convert  the 24Hours into a 12clock 
// basically we return the Current time 
// const d  = new Date()
// console.log(d); // 21 : 10 to convert 09 : 10
// let hours = d.getHours()
// console.log(hours); // 20
// const period = hours >= 12 ? 'PM' : 'AM'
// hours = hours%12 || 12  // 9 || 12 => 9 return the first truthy value
// console.log(`${hours}:${d.getMinutes()} ${period}`);

// Real-life Practical Example 
// calculate how many days remain for submission date of  my assignment 
//  const today = new Date()
// const lastDay = new Date('2026-11-30')
// const difference = lastDay.getTime() - today.getTime()
// const daysRemaining = difference / (1000*60*60*24)
// console.log(daysRemaining);

// 1. Calculate person Age : registration form where user enter date of birth 
// const birthDate = new Date('2005-03-04')
// const date = new Date('2027-03-04')
//       // 2026 - 2005 = 21
// let age = date.getFullYear() - birthDate.getFullYear()
// console.log(age);
//     // 11 - 3 = 8
// const monthdiffrence = date.getMonth() - birthDate.getMonth()
// if(monthdiffrence <0 || (monthdiffrence === 0 && date.getDate() < birthDate.getDate())
// ){
//     age--
// }
// console.log('Your Age is :',age); // i am 21 years oldtill Now

// 02 : User place order today but expected delivery is 7 days later 
// let orderDate = new Date()
// let deliveryDate = new Date(orderDate)
// // console.log(deliveryDate); // current date and time assign to deliveryDate
// deliveryDate.setDate(deliveryDate.getDate() + 7) // currentDate + 7 kiya
// console.log('Order Date is: ',orderDate);
// console.log('Delivery Date is :',deliveryDate);

// const d = new Date()
// // d.setTime(0) // the miliseconds set to 0
// console.log(d.getTime()); // milisecond always increaseing : 1795266045329

// const d = new Date(2026,0,1)
// d.setFullYear(2027)
// d.setMonth(1) // Febuary
// // d.setDate(31) // is not a valid day in feb month  : Sun Apr 04 2027 00:00:00 
// // d.setDate(35) // Sun Mar 07 2027 
// //  d.setDate(28) // in feb 28 days is valid unless it returns next month 
// d.setHours(18) 
// d.setMinutes(25)
// d.setSeconds(50)
// d.setMilliseconds(600)
// console.log(d.getMilliseconds()); // miliseconds : 600 
// console.log(d);

// const d = new Date()
// console.log(d.getTime()); // 1795258125513
// console.log(Date.now()); // it returns the miliseconds : 1795258125513

// const d =  new Date('2026-11-15T12:00:00')
// const d = new Date(2026,1,23,12,25,12,400)
// console.log(d.getMilliseconds()); // 400 miliseconds
// console.log(d.getSeconds()); // 12 second
// console.log(d.getMinutes()); // 25 minutes
// console.log(d.getHours()); // 12 Hours
// console.log(d.getDate()); // 23 is date
// console.log(d.getMonth()); // 1month
// console.log(d.getFullYear()); // year :2026
// console.log(d.getHours()); // 12baje = 0  , 23 = means almost 24 hours

// this represents the starting point of javascript timestemp system 
// const d = new Date(0) // it returns the start date of miliseconds
// console.log(d);

// Date set Karna through set() methods
// let d =  new Date()
// d.setFullYear(2030)
// d.setMonth(11) // if month is 12 then it's output was : Tue Jan 21 2031 15:27:05 GMT+0530 (India Standard Time)
// console.log(d);
// console.log(d.getFullYear()); // through get methods we fetch the data
// console.log(d.getMonth());

//  separate numeric  object format : (2020,01,18)  month start with 0(Jan)
// let da = new Date(2020,1,19) // 1 means in months are = Febuary
// console.log(da); 
// let d = new Date(2025,0,1,12,30,13)
// console.log(d); 
// console.log(d.getDay()); // wedneshDay = 3 in day of week
// console.log(d.getTime()); // it return milisecond 
// console.log(d.getSeconds()); // it returns the seconds of time 
// console.log(d.getMinutes()); // 30 minutes of specific time
// console.log(d.getHours()); // 12 clock of the day 
// console.log(d.getDate()); // 1 it returns day of month of the 1 to 31
// console.log(d.getMonth()); // 0 means January
// console.log(d.getFullYear()); // 2025 returns the Year 

// let separate = new Date(2026,11,12) // i am write here 11 means December 
// console.log(separate);  // Sat Dec 12 2026 00:00:00
// console.log(separate.getDay()); // saturday = 6 because starts with sunday -> 0
// console.log(separate.getDate()); // it is 12th of december month

// methods means is founctions so you need to call 
// const any = new Date('2026-12-31')
// console.log(any.getHours());
// console.log(any.getDate());
// console.log(any.getDay()); // thursday on 31 = 4 , week of the day

// const today = new Date()
// // console.log(today);
// console.log(today.getFullYear()); // 2026
// console.log(today.getMonth()); // 10
// console.log(today.getDay()); // 6(saturday)
// console.log(today.getTime()); // miliseconds : 1795245214084 it starts with 1 january 1970
// console.log(today.getHours()); // 12:00
// console.log(today.getMinutes()); // 00:43

// const time =  new Date('1970-01-01T00:00:00Z') // 0 here is starting point of
// const time =  new Date('1970-02-02T00:00:00Z')
// console.log(time);
// // console.log(time.getTime()); // 2678400000 in 1Day this is miliseconds
// console.log(time.getDay()); // sunday was starts with 0 in week count 

// Javascript built-in object is : Date which helping for date or time 
// const d = new Date('2026-01-26T12:20:00')
// const d = new Date('2005-03-04T23:20:00')
// console.log(d);
// console.log(d.getFullYear());
// we add 1 when we want normal month number 
// console.log(d.getMonth() + 1); // 0 => january // 2 => march
// console.log(d.getDate()); // 26 date 
// get day of week : like hafte ka kon sa din hai ye it also starts with 0
// console.log(d.getDay()); // 1 , friday = 5 
// it returns the 24 hours format  
// console.log(d.getHours()); // 12 hours 
// console.log(d.getMinutes()); // 20
// console.log(d.getTime()); // 1769410200000

// Date string 
// let str = new Date('2026-12-26') // 26 December 2026 dayName = Saturday
// console.log(str);
// console.log(str.getMonth()); // month 12 (December) = getmonth 11(December) return because it starts with 0(January)

// let getmonth = new Date(2025,0,26)
// console.log(getmonth.getMonth()); // it returns getmonth 0 = january in this box

// The Date Object 
// const now = new Date() // current time, date,second batata hai 
// console.log(now); // Sat Nov 21 2026 01:48:30 GMT+0530 (India Standard Time)
// const specific = new Date('2025-01-15')
// const specific2 = new Date('2025-01-16') // Thu Jan 16 2025 05:30:00 GMT+0530 (India Standard Time)
// console.log(specific); // kisi specific dates day name 
// console.log(specific2);
// let month = new Date(2025,0,1) // 0 => january, 
// let dec = new Date(2025,11,23) // 11 => December
// console.log(dec);
// // console.log(month);

// Field-Based Error Handling 
// multiple fields with single error custom class 
// this is where fields based error become a powerfull 
// you can use one reusable ValidationError error
// class ValidationError extends Error{
//     constructor(message,field){
//         super(message)
//         this.name = 'ValidationError'
//         this.field = field
//     }
// }
// function registerUser(user){
//     if(!user.username){
//         throw new ValidationError('username is required','username')
//     }
//     if(!user.email){
//         throw new ValidationError('email is required','email')
//     }
//     if(!user.password){
//         throw new ValidationError('Password is required','password')
//     }
//     return 'Registration Successfully'
// }
// try{  // please use error object
//     registerUser({username:'Saransh',email:'',password:' '})
// }
// catch(error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.field);
// }

// Field-Based Error Handling 
// let's create a custom error : single error single field
// class ValidationError extends Error{
//     constructor(message,field){
//         super(message)
//         this.name = 'ValidationError'
//         this.field = field
//     }
// } 
// try{
//     throw new ValidationError('Password is required','password')
// }
// catch(error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.field);
// }

// Field-Based Error Handling
// class ValidationError extends Error{
//     constructor(message,field){
//         super(message) // parent Error ka constructor call
//         this.name = 'ValidationError' // apna naam
//         this.field = field // extra custom info
//     }
// }
// class NotFoundError extends Error{
//     constructor(message){
//         super(message)
//         this.name = 'NotFoundError'
//     }
// }
// function registerUser(user){
//    if(!user.email){
//     throw new ValidationError('email is required','email')
//    }
//    if(!user.password){
//     throw new ValidationError('Password is required','password')
//    }
//    return 'User registerd Successfully'
// }
// try{
//     registerUser({email : 'a@x.com' ,password : '1234'})
// }
// catch(error){
//     if(error instanceof ValidationError){
//       console.log(`${error.field} field has problem:${error.message}`);
//     }else{
//         console.log('Unknown error :',error.message);
//     }
// }

// Mini Registration form mai apply karna
// class EmailError extends Error{
//     constructor(message){
//         super(message)
//         this.name = 'EmailError'
//     }
// }
// class PasswordError extends Error{
//     constructor(message){
//         super(message)
//         this.name = 'PasswordError'
//     }
// }
// class UsernameError extends Error{
//     constructor(message){
//         super(message)
//         this.name = 'UsernameError'
//     }
// }
// class ConfirmPasswordError extends Error{
//     constructor(message){
//         super(message)
//         this.name = 'ConfirmPasswordError'
//     }
// }
// function registerUser(email,password,username,confirmPassword){
//     // Email Validation 
//     if(!email){
//        throw new EmailError('Email is required')
//     }
//     if(!email.includes('@')){
//         throw new EmailError('Invalid email format')
//     }
//     // Password Validation 
//     if(!password){
//         throw new PasswordError('Password is required')
//     }
//     if(password.length < 8){
//         throw new PasswordError('Password must be at least 8 characters')
//     }
//     // UserName Validation 
//     if(!username.trim()){
//         throw new UsernameError('UserName is required')
//     }
//     if(username.trim().length < 3){
//         throw new UsernameError(' username atleast 3 characters')
//     }
//     // Confirm Password Validation
//     if(!confirmPassword){
//         throw new ConfirmPasswordError('Confirm Password is required')
//     }
//     if(password !== confirmPassword){
//         throw new ConfirmPasswordError(' it is not same as Password')
//     }
//     return 'User Register Successfully! '
// }
// try{
//     let result = registerUser('sar@123','saransh123','123','saransh456')
//     console.log(result);
// }
// catch(error){
//     if(error instanceof EmailError){
//         console.log('Email Error',error.message);
//     }else if(error instanceof PasswordError){
//         console.log('Password Error',error.message);
//     }else if(error instanceof UsernameError){
//         console.log('Username Error',error.message);
//     }else if(error instanceof ConfirmPasswordError){
//          console.log('Confirm Password Error :',error.message);
//     }else{
//         console.log('Unknown Error :', error.message);
//     }
// }
// finally{
//     console.log('Registration process completed');
// }

// class ValidationError extends Error{
//     constructor(messsage,field){
//         super(messsage)     // parent Error ka constructor call
//         this.name = 'ValidationError' // apna naam
//         this.field = field    // extra custom info
//     }
// }
// class NotFoundError extends Error{
//     constructor(messsage){
//         super(messsage)
//         this.name = 'NotFoundError'
//     }
// }
// function getUser(username){
//     if(!username){
//         throw new ValidationError('Username is required','username')
//     }
//     if(username !== 'saransh'){
//         throw new NotFoundError('User not Found')
//     }
//     return 'User found successfully!'
// }
// try{
//     // let result = getUser('saransh') // User found successfully!
//     // let result = getUser('')      // validation error
//     console.log(result);
// }
// catch(error){
//      if(error instanceof ValidationError){
//          console.log('Validation Error :',error.message);
//         console.log('Field :',error.field);
//      }else if(error instanceof NotFoundError){
//         console.log('User Not Found :',error.message);
//      }else{
//         console.log('Unknowm Error :',error.message);
//      }
// }

// suppose kisi website mai account create karne ke liye minimum age 18 hone chahiye 
// class InvalidAgeError extends Error{
//     constructor(message){
//         super(message)
//         this.name = 'InvalidAgeError'
//     }
// }
// function checkAge(age){
//     if(age <18){
//         throw new InvalidAgeError(' Age must be 18 or Above!')
//     }
//     console.log('Registration Successfull!');
// }
// try{
//     checkAge(18)
// }
// catch(error){
//     console.log(error.name);
//     console.log(error.message);
// }
// finally{
//     console.log('Ragistration Process Completed');
// }

// class InvalidPasswordError extends Error{
//      constructor(message){
//         super(message) // parent ki propertie access karne ke liye 
//             this.name = "InvalidPasswordError"
//      }
// }
// try{
//     throw new InvalidPasswordError("Password is incorrect")
// }catch(error){
//     console.log(error.name);
//     console.log(error.message);
// }

// Error type ke hisasb se alag Handling 
// try{
// }
// catch(err){
//     if(err instanceof TypeError){
//         console.log('Type ki problem hai');
//     }else if(err instanceof RangeError){
//         console.log('value Range ke bahar ');
//     }else{
//         console.log('Koi aur error',err.message);
//     }
// }

// Reference Error
// try{
//     console.log(notDefinedVariabl);
// }
// catch(error){
//     console.log(error.name); // Reference Error
// }

// TypeError 
// try{
//     let x = null
//     x.toUpperCase()
// }
// catch(e){
//     console.log(e.name); // TypeError
//     console.log(e.message); // Cannot read properties of null
// }

// let url = 'https://example.com/my page.html'
// let result = encodeURI(url)
// console.log(result);  // https://example.com/my%20page.html
// let decode = decodeURI('https://example.com/my page.html')
// console.log(decode); // https://example.com/my page.html

// Built in Errors 
// 1. Error : genral/base error 
// throw new Error('kuch galat hai')
// 2. TypeError : value ka type galat ho 
// console.log(null.toUpperCase());
// console.log('saransh'.toUpperCase());
// 3. ReferenceError : Variables exist hi na karte ho 
// console.log(xyz);
// 4. SyntaxError : code likhne mai galti 
// let result = JSON.parse("{mistakes}")
// 5. RangeError : value allowed range ke bahar 
// console.log(new Array(-1)); // invalid array length
// 6. URIError : URI function galat use kiya
// console.log(decodeURIComponent("%")); // URI malformed at decodeURIComponent

// URI Ko try catch se Handle karna 
// try{
//     let result = decodeURIComponent("%")
//     console.log(result); 
// }
// catch(error){
//     console.log(error.name);
//     console.log(error.message);
// }
// finally{
//     console.log('Process Completed');
// }

// URI in detail (Uniform Resource Identifer)
// console.log(decodeURIComponent('%2F')); // ('%2F') => / 
// console.log(decodeURIComponent('saransh%20gupta')); // saransh gupta
// console.log(decodeURIComponent('Saransh%40gmail.com')); // Saransh@gmail.com
// console.log(decodeURIComponent('Hello%2FWorld')); // Hello/World
// console.log(decodeURIComponent('45%2F78'));

// let str = ' Javascript Tutor '
// // %20Javascript%20Tutorial -> jaha spaces the waha %20 laga diya
// let encode = encodeURIComponent(str) 
// console.log(encode);
// let decode = decodeURIComponent(encode)
// console.log(decode);


// function division(a,b){
//     if(b === 0){
//         throw new Error(' Zero se divide nhi kar sakte')
//     }
//     return a/b
// }
//     try{
//           console.log(division(50,5));
//           console.log(division(50,0)); // zero se divide nhi kar sakte hai
//     }
//     catch(error){
//         console.log('Error',error);
//     }

// async /await with try/catch 
// async function loadData() {
//     try{
//         const res = await fetch('https://dummyjson.com/products')
//         const data = await res.json()
//         console.log(data.products);
//     }
//     catch(error){
//         console.log('Fetch Fail',error.message);
//     }
//     finally{
//         console.log('API request completed');
//     }
// }
// loadData()

// function getUserage(jsonString){
//   try{
//     const user = JSON.parse(jsonString)
//     return user
//   }
//   catch(error){
//     console.log('invalid data mila',error.message);
//     return null
//   }
//   }
// console.log(getUserage('{"age":25}'))
// console.log(getUserage('[10,20,30]'));

// try , catch , finally 
// try{
    // parse : Json text ko real mai convert kar deta hai excluded function , undefined values
    // const data = JSON.parse("{invalid json}")  // invalid JSON
//     const obj = {
//         name : 'saransh',
//         greet : function(){
//             console.log('saransh');
//         },
//         age1 : undefined,
//          age2 : 24
//     }
//     const objStr = JSON.stringify(obj)
//     console.log(objStr);
//     const data = JSON.parse(objStr) // ye valid JSON text to convert JS objcet
//     console.log(data);
// }
// catch(error){
//     console.log('Kuch galat hua',error.message);
// }
// finally{
//     console.log('Cleanup ho gaya');
// }