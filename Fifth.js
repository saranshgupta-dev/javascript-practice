function MakeStudent(fname,lname,contact,isVerified){
    this.fname = fname
    this.lname = lname
    this.contact = contact
    this.isVerified = isVerified 
    this.showProfile = function(){
     console.log('my name is ',this.fname,this.lname);
     console.log('my contact No. is ',this.contact);
     console.log('is i am verified user',this.isVerified);
    }
}
let student1 = new MakeStudent('saransh','gupta',9343632135,true)
let student2 = new MakeStudent('sakshi','Gupta',89882654,false)
let student3 = new MakeStudent('tulsi','mishra',73629282,false)
// student1.showProfile()
// student2.showProfile()
// student3.showProfile()
// console.log(student1);

// Using Constructor hamne ek object create kiya
// function CreateBook(bookName,authorName,pages){
//     this.bookName = bookName
//     this.authorName = authorName 
//     this.pages = pages
//     this.getFrontPage = function() {
//         console.log('bookName is',this.bookName);
//         console.log('authorName is',this.authorName);
//         console.log('pages is ',this.pages);
//     }
// }
// let book1 = new CreateBook('Sapiens','Yuvan Noah Harrari',500)
// let book2 = new CreateBook('Rich Dad Poor Dad','Robert Kiyosaki',440)
// let book3 = new CreateBook('HP-Prisoner of Azkaban','JK Rowling',760)
// console.log(book1)
// console.log(book2)
// console.log(book3);
// book1.getFrontPage()
// book2.getFrontPage()
// book3.getFrontPage()

// We Use Constructor function for making multiple songs 
// constructor function name should be pascal case Ex : CreateSong
// function CreateSong(){
//     this.songName = 'Cry for me ',
//     this.albumName = 'Hurry up tommorow',
//     this.singer = 'weekend',
//     this.duration = 3.5,
//     this.isLiked = true
// }
// let song1 = new CreateSong()
// console.log(song1);

// let song1 = {
//     songName : 'Cry for me ',
//     albumName : 'Hurry up tommorow',
//     singer : 'weekend',
//     duration : 3.5 ,
//     isLiked : true
// }
// let song2 = {
//     songName : 'Tum hi ho',
//     albumName : 'Ashique 2',
//     singer : 'Arigit singh',
//     duration: 4.4,
//     isLiked : false
// }

// This is the Example of Call , apply , bind 
// let obj = {
//     name : 'saransh',
//     age : 22
// }
// let obj2 = {
//     name : 'sourabh',
//     age :24
// }
// let obj3 = {
//     name : 'sakshi',
//     age : 28
// }
// function sharing(city){
// console.log(` My name is ${this.name} my  age ${this.age} `);
// console.log(`my city is ${city}`);
// }
// sharing.call(obj,'katni') // call use kiya
// sharing.apply(obj2,['indore']) // apply use kiya
// let result = sharing.bind(obj3,'jabalpur')
// result()

// let place = {
//     placeName : 'office',
//     behaviour : 'professional',
//     sayHello:function(){
//         // console.log(this); // outer normal function outer object ko return karega
//         const insidePlace = {
//             placeName : 'Meeting Room',
//             behaviour  : 'Roasting',
//           sayHiInFriends : function(){ 
//                 console.log(this); 
//             },
//             sayHiInClient : ()=>{     
//                 console.log(this); 
//             }
//         }
//         insidePlace.sayHiInFriends() // inner object : normal function
//         insidePlace.sayHiInClient()  // outer object : arrow function
//     }
// }
// place.sayHello() 

// let place = {
//     placeName : 'office',
//     behaviour : 'professional',
//     sayHello:function(){
//         // console.log(this); // outer normal function outer object ko return karega
//         const insidePlace ={
//             placeName : 'Meeting Room',
//             behaviour  : 'Roasting',
// // inner ko arrow function banaya to ye parent ka lexical context lega or outer object return dega
//             sayHi : ()=>{
//                 console.log(this); 
//             }
//         }
//         insidePlace.sayHi()
//     }
// }
// place.sayHello() 

// let place = {
//     placeName : 'office',
//     behaviour : 'professional',
//     sayHello:function(){
//         // console.log(this); // outer normal function outer object ko return karega
//         const insidePlace ={
//             placeName : 'Meeting Room',
//             behaviour  : 'Roasting',
//             sayHi : function(){
//                 console.log(this); // inner normal function inner object ko return karega
//             }
//         }
//         insidePlace.sayHi()
//     }
// }
// place.sayHello() 

// let place = {
//     placeName : 'office',
//     sayHello:()=>{
//         console.log(this);
//     }
// }
// place.sayHello() // using arrow function return window object

// let place = {
//     placeName : 'office',
//     sayHello:function(){
//         console.log(this);
//     }
// }
// place.sayHello() // using normal function return current objects

// let hero = {
//     lname : 'saransh',
//     fname : 'gupta',
//     age : 23,
//     // but yaha arrow function parent function ka lexical context lega jonki ek noram function hai  
//     hello : function(){
//     const getIntro = ()=>{
//         console.log(this); // arrow function window object return karega 
        
//     }
//     getIntro()
// }
// }
// hero.hello()

// let hero = {
//     lname : 'saransh',
//     fname : 'gupta',
//     age : 23,
//     // arrow function ko khud ka  lexical context nhi pata it return window object
//     getIntro :()=>{
//         console.log(this); // arrow function window object return karega 
//         console.log(this.lname,this.fname);
//     }
// }
// hero.getIntro()

// using Normal function 
// let hero = {
//     lname : 'saransh',
//     fname : 'gupta',
//     age : 23,
// normal function ko apna context pata hai ki mai kaha bana hun
//     getIntro : function(){
//         console.log(this); //current object ko return karega
//         console.log(this.lname,this.fname);
//     }
// }
// hero.getIntro()

// using strict mode 
// 'use strict'
// console.log(this);
// function hey(){
//     console.log(this); // default value = undefined using strict mode
// }
// hey()
// Normal mode 
// console.log(this); // window object 
// function hello(){
//     console.log(this); // window object 
// }
// hello()

// function Person(name){
//     this.name = name 
// }
// Person.prototype.age = 22
// let p1 = new Person('sourabh')
// let p2 = new Person('saransh')
// p1.age = 25
// console.log(p1.age); // age = 25 own property create hue 
// console.log(p1.hasOwnProperty('age')) // true 
// delete p1.age.  // own property delte hue hai prototype ki nhi 
// console.log(p1.age); // o/p : 22 (prototype se liya)
// console.log(p2.age); // age prototype se = 22 liya 
// console.log(p2.hasOwnProperty('age')) // false 

// function Person(name){ // constructor function
//     this.name = name
// }
// Person.prototype.sayHello = function(){
//     console.log('Hello!');
// }
// let p1 = new Person('saransh')
// console.log(p1);
// p1.sayHello() // person construstor ke pas function banaya or new object mai sab inherit ho gya 
// console.log(p1.__proto__ == Person.prototype); // true same object ko refer karte hai 
// console.log(p1.__proto__) // {sayHello : f}
// console.log(Object.getPrototypeOf(p1)); // {sayHello : f} <- use in industery


// function Student(name){
//   this.name = name
// }
// let s1 = new Student('Rahul')
// // Object References : s1 and s2 both refer to the same object in memory.
// let s2 = s1 // s1 object ke copy s2 mai a jayege 
// s2.name = 'Saransh' // s1 or s2 dono mai change ho raha hai 
// console.log(s1);
// console.log(s2);

// ek constructor function ki help se multiple objects create kar sakt hai
// function person(name,age){
//     this.name = name
//     this.age = age
// } 
// let p1 = new person('saransh',23)
// let p2 = new person('sakshi',27)
// let p3 = new person('sourabh',24)
// // console par object name nhi ata but constructor name a jata hai 
// console.log(p1);
// console.log(p2);
// console.log(p3);

// function person(name){
//     this.name = name 
// }
// let f2 = new person('Saransh')
// console.log(f2);
// let hello = {
//     name : 'sakshi'
// }
// console.log(hello);

// console.log(f2.__proto__ == person.prototype);
// console.log(f2.__proto__);
// console.log(person.prototype);



// const vehicle = {
//     start : function(){
//         console.log(this.name + 'start ho gyi');
//         // console.log(typeof this); // function andar bhi output object ayega 
//     }
// }
// const car = Object.create(vehicle) // car name ka ek {} object create kiya 
// car.name = 'swift ' // car {} object mai name : 'swift' create kiya
// console.log(car);
// car.start() // car object se oske prototype ke start function ko call kiya 

// const animal = {
//     eats : true,
//     walk : function(){
//         console.log('Animal chal raha hai ');
//     }
// }
// // Method : 01
// // const dog = Object.create(animal) // dog name ka {} object create kiya
// // Mehtod : 02
// let dog = {}
// dog.__proto__ = animal
// dog.walk() // Animal chal raha hai
// // console.log(animal); // object-methods proto
// // dog is empty object with animal prototype 
// console.log(dog); // {} dog ka prototype is animal object hai 

// function Student(username,password){ // Constructor function
//     this.username = username
//     this.password = password
//     this.spouse = {
//         name:'Harshi',
//         age:34
//     }
// }
// Student('sara',123)
// console.log(Student.prototype); // {} constructor

// let colleage = {
//     content : 'colleage',
//     name: 'IIT Bombay',
//     Rating : 'A+',
//     students : 5000,
//     hasClubs : true,
//     saySlogan: function(){
//         console.log('we are Best , we are IIT');
//     }
// }
// let branch = {
//     title : 'Branch',
//     name : 'CSE',
//     Rating : 'A++',
//     students : 500,
//     subjects : ['TOC','System Design','Compiler Design']
// }
// let user ={
//     name:'saransh',
//     age: 30,
//     marks: 95
// }
// user.__proto__ = branch
// branch.__proto__ = colleage
// console.log(user); // user ka proto branch or branch ka proto colleage 
// // console.log(user.subjects);
// console.log(user.hasClubs); // 
// console.log(user.students); // o/p : 500 
// user.saySlogan() // user inherit branch inherit colleage (that's why function running)

// Prototypes 
// let company ={
//     name : 'Sheryians',
//     foundingYear: 2022,
//     students : 'Very Good',
//     saySlogan: function(){
//         console.log('We tech , What Matters');
//     }
// }
// let user = {
//     name : 'Sarthak',
//     age : 33
// }
// // Don't do this 
// user.__proto__ = company
// console.log(user);   //user object ke  proto mai company object a gya 
// console.log(user.name); // Sarthak
// console.log(user.foundingYear); // 2022 (because company object oske proto mai hai)
// user.saySlogan() // company obj ka function run hua through user
// console.log(user.__proto__);
// console.log(company.__proto__);
// console.log(company.__proto__=== user.__proto__);


// Object -> Object -> null
// Array -> Array -> Object
// function -> function -> Object

// console.log(Array.prototype);
// console.log(Array.prototype.__proto__); // same as object proto
// console.log(Array.prototype.__proto__ === Object.prototype);  //true: array == object
// console.log(Object.prototype);
// console.log(Object.prototype.__proto__);
// console.log(Function.prototype);
// console.log(Function.prototype.__proto__ === Object.prototype); // true:function == objects

// let arr = [10,20,30,40]
// console.log(arr.__proto__); // array proto => array mai 
// console.log(arr.__proto__.__proto__); // array proto ka proto => objects mai 

// let obj = {
//     name : 'saransh',
//     age : 23
// }
// console.log(obj.__proto__); // object ka proto object 

// let hello = function(){
//     console.log('hey');
// }
// console.log(hello.__proto__); // ƒ () { [native code] }
// console.log(hello.__proto__.__proto__); // objects mila

// let student1 = {
//     firstName : 'Saransh',
//     lastName : 'gupta',
// }
// let student2 = {
//     firstName : 'Sarthak',
//     lastName : 'Sharma'
// }
//  let getIntro = function(city,state){
//    console.log(`${this.firstName} ${this.lastName} ${city} (${state})`);
//     }
// getIntro.call(student1,'katni','MP')
// getIntro.apply(student2,['Bhopal','MP'])
// let Re = getIntro.bind(student1,'Maihar','MP')
// Re()

// let student1 = {
//     firstName : 'Saransh',
//     lastName : 'gupta',
//     getIntro : function(city,state){
//    console.log(`${this.firstName} ${this.lastName} ${city} (${state})`);
//     }
// }
// let student2 = {
//     firstName : 'Sarthak',
//     lastName : 'Sharma'
// }
// let student3 = {
//     firstName : 'Aman',
//     lastName : 'Kohli'
// }
// let student4 = {
//     firstName : 'Harshita',
//     lastName : 'Gupta'
// }
// student1.getIntro('Katni','MP')
//method : 01 Function Sharing Using call 
// student1.getIntro.call(student2,'Bhopal','MP') // arguments aise pas karte hai
// student1.getIntro.call(student3,'Patna','Bihar') 
// method : 02 Function Sharing Using apply 
// student1.getIntro.apply(student3,['Patna','Bihar']) 
// student1.getIntro.apply(student2,['Bhopal','MP'])
// method : 03 function Sharing Using bind : ek variable mai store karke call karna
// Way : 01 
// let bd = student1.getIntro.bind(student4,'Mandala','MP')
// bd()
// // Way : 02
// student1.getIntro.bind(student3,'Patna','Bihar')() 

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