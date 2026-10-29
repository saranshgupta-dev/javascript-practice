// script.js = 871 , Third.js = 871 , Second.js = 311 => LOC , Fourth.js = 900
// console.log(x);
// var x = 10 

// foo()
// function foo(){
//     console.log("called");
// }

// for(let i = 0 ; i <3; i++){
//     setTimeout(() => console.log(i),0)
// }

// function make(){
//     let secret = "hidden"
//     return () => secret
// }
// const reveal = make()
// console.log(reveal());



// The classic Closure + Loop problem
// using var 
// for(var i = 0; i<3; i++){
//     setTimeout(function (){ // var is function-scoped, so there is only one shared i
//         console.log(i);
//     },1000)
// }  
// Output: 3 3 3   😱  (not 0 1 2)
// fix : 1 Using let 
// for(let i = 0; i<3; i++){
//     setTimeout(function (){ // using let so each loop iteration creates a new i
//         console.log(i);
//     },1000)
// }
// Output : 0,1,2
// fix : 2 IIFE (old-school-Way, before let)
// for(var i = 0 ; i<3; i++){
//     (function(j){
//         setTimeout(function(){
//             console.log(j);
//         },1000)
//     })(i)
// }

// function counter(){
//     let count = 0
//     return function(){
//         count++
//        return count
//     }
// }
// // yaha same function ko two diffrent variables mai call kiya 
// const c1 = counter()
// const c2 = counter()
// console.log(c1()); 
// console.log(c1());
// console.log(c2()); // c2 = independent count start hoga 
// console.log(c2());

// function outer(){
//     let x = 10
//     return function(){
//         return x
//     }
// }
// const fs = outer() // yaha outer() ho gya
// console.log(fs()); // fs ke through innerFunction() call kiya

// Currying : each function taken one argument 
// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log(add(5)(4)(3));

// function factories : a function that bulid and return function 
// function multiplier(factor){
//     return function(Number){
//         return Number * factor
//     }
// } 
// const double = multiplier(2) // factor = 2
// const triple = multiplier(3) // factor = 3
// console.log(double(5)); // number = 5 so 2*5 = 10
// console.log(triple(3)); // number = 3 so 3*3 = 9 

// Data privacy (private variables)
// function createBankAccount(){
//     let balance = 0
//     return {        // return object kiya
//        deposit(amount){         // 1. function name is deposit karna 
//         balance = balance + amount
//         return balance 
//        },
//        getBalance(){         // 2. function name is getBalance 
//         return balance
//        }
//     }
// }
// const acc = createBankAccount()
// acc.deposit(100)   
// console.log(acc.getBalance()); // balance = 0 se 100 hua hai
// console.log(acc.balance); // undefined : truly private (variable)

// Scope Chaining 
// let a = 10
// function outer(){
//     let b = 20
//     function inner(){
//         let c = 30
//         console.log(a,b,c); // o/p : 10 20 30
//     }
//     inner()
// }
// outer()
 
// Lexical Scope : inner outer ke scope ko yaad rakhta hai after outer is executed
// function outer(){
//     var name = 'sara'
//     function inner(){
//         console.log(name);
//     }
//     inner()
// }
// outer()
// outer()

// // Block Scope
// {
//     let a = 1
//     var b = 2
//     const c =3 
// }
// console.log(a); // ReferenceError : a is not define  because let ,const are block scoped
// console.log(b); // var b = 2 Working
// console.log(c); // ReferenceError : c is not define because let ,const are block scoped

// // function Scope 
// function test(){
//     // var secret = 42
//     // let secret = 42
// }
// console.log(secret); // Reference Error for all variable type var,let,const

// it is Global Variable so access anywhere easyli
// let appName = "Myapp" // Global
// function show(){
//     console.log(appName);  // accessible
// } 
// show()

// function declaration
// sayHi() /// koi Error nhi aye 
// function sayHi(){
//     console.log("hii");
// }

// function Expression 
// sayBye()  // typeError : sayBye is not a function
// // sayBye = undefined or calling undefined is a typeError because using var
// // if using let or const it is ReferenceError(TDZ) instead
// var sayBye = function (){
// console.log("bye");
// }

// console.log(window); // Browser ka Global object
// console.log(this);   // window object 
// console.log(this === window); // true

// function one(){
//     two()
//     console.log("one is done");
// }
// function two(){
//     three()
//     console.log("two is done");
// }
// function three(){
//     console.log("three is done");
// }
// one() // LIFO = one,two,three (execute => three,two,one)

// function grandParents(c){
//     return function(b){
//         return function(a){
//             console.log(a);
//             console.log(b);
//             console.log(c);
//         }
//     }
// }
// grandParents("ca")('ba')('aa')

// function users(){
//     var username = 'Harsh'
//     var obj = {
//         changeUser:function(a){
//             username = a
//         },
//         getUser: function(){
//           return username
//         }
//     }
//     return obj
// }
// let out = users()
// out.changeUser('Ritik shinghaniya') // a = username hai So getUser = Ritik shinghaniya
// console.log(out.getUser()); // o/p : 'Harsh'
// // console.log(out.changeUser()); // o/p : undefined

// function counter(){
//     count = 0
//     return function(){
//         count++
//         console.log(count);
//     }
// }
// var inc = counter()
// inc()
// inc()

// function parent(){
//     var user = 'Harsh'

//     function child(){
//         var childName = 'Aman'
//         console.log('parent -',user);
//         console.log('child -',childName);

//         function grandChild(){
//             var grandChild = 'soham'
//             console.log('--------');

//          console.log('parent -',user);
//          console.log('child -',childName);
//          console.log("grandChild -",grandChild);
//         }
//         return grandChild
//     }
//     // child()
//     return child  // code return kiya 
// }
// parent()()() // 1st = parent , 2nd = child, 3rd = grandChild
// console.log(parent()); 
// var output = parent()()
// output()

// Lexical scope : user ko dusre function mai access kar pa rahe hai 
// function outer(){
//     var name = 'saransh'

//     return function(){
//         console.log("username is",name);
//     }
// }
// let outsider = outer()
// // console.log(outsider);
// outsider() // this is lexical scope

// function outer(){
//     var name = 'saransh'

//     function inner(){
//         console.log("my name is",name);
//     }
//    inner()
// }
// outer()

// Scope 
// let a = 10  // because a or b global variable hai under GEC anyware access kar sakte h. 
// var b = 30 
// function gero(){
//     let age = 677
//     var gender = 'M'
//     console.log(age);
//     console.log(gender);
//     // console.log(a);
//     // console.log(b);
// }
// // console.log(gender); // error because Function scoped variables
// gero()
// user = {
//     name : a,
//     name2 : b,
// }
// console.log(user);

// {
//     let a = 20
//     var b = 30
// }
// // console.log(a);  //error : let is block scoped
// console.log(b);    // b is accessble

// Lexical Environment 
// var user = 'vaibhav'
// // yaha greet() ne sayHi return kiya then greet ko variable mai save kiya then variable  call karne mai sayHi() ka output mila
// function greet(){
//     var age = 20
// console.log(user);
//     function sayHi(){
//         console.log("your age is ",age); // Lexical Environment
//     }
//     sayHi()
//     // return sayHi
// } 
// greet()  // kuch nhi mila
// console.log(greet()); // sayHi function ka code mila
//  var out = greet()
//  console.log(out);    // sayHi function ka code mila
// out() // o/p : your age is 20

// Hoisting 
// var a = 10
// let b = 20
// console.log(a);
// console.log(b);
// console.log(c); // error:  acess before initialization
// const c = 50

// console.log(a);
// console.log(b);
// var a = 10
// let b = 20

// let user = 'saransh'
// let age = 33
// function greet(){
//     let gender = 'male'
//     function sayHi(){
//         console.log(`Good Morning ${user} sir`);

//     }
//     sayHi()
//     return 20 
// }
// console.log(greet());

// This code is Global Execution Context 
// let a = 10
// let b = 20
// function add(){      // function01 execution context : memory | code execution 
//     let c = a + b  
//     console.log(c);
// } 
// function sub(){     // function02 execution context : memory | code execution 
//     let e = b - a
//     console.log(e);
// }
// add()
// let d = a*b
// console.log(d);

// Practice Zone
// 01 : Create an object for a book (title, author, price)
// let book = {
//     Title : "JavaScript Basics",
//     Author : "Rahul Sharma",
//     Price : 499
// }
// // for(let keys in book){
// //     console.log(keys , book[keys]);  // for-in se access kiya
// // }
// // 02 : Access properties using both dot and bracket
// console.log(book.Author);
// console.log(book['Author']);

//03 : Write a nested object (user with address and location)
// let user = {
//     name : 'saransh',
//     age : 22,
//     address : {
//         city : 'Indore',
//         state : 'Madhya Pradesh',
//         location : {
//             area : 'vijay nagar',
//             pincode :452010
//         }
//     }
// }

// 04: Destructure name and age from a student object
// let student = {
//     name : 'saransh',
//     age : 22,
//     city : 'indore',
//     state : 'MP'
// }
// let {name,age,...city} = student
// console.log(name,age,city); // o/p : ek object mai {city,state} a jayega with their values

// 05 : Loop through keys and values of an object
// let student = {
//     name : 'saransh',
//     age : 22,
//     colleage : 'SAIT'
// }
// for(let key in student){
//     console.log(key , student[key]);
// }

// 06 : Convert object to array using Object.entries()
//  let student = {
//     name : 'saransh',
//     age : 22,
//     colleage : 'SAIT'
// }
// console.log(Object.entries(student));

// 07 : Copy an object using spread operator
// let student = {
//     name : 'saransh',
//     age : 22,
//     colleage : 'SAIT'
// }
// let newStudent = {...student} // Spread Operator = Shallow copy 
// console.log(newStudent);

// 08 : Create a deep copy of an object with nested structure
// let user = {
//     name : 'saransh',
//     age : 22,
//     address : {
//         city : 'Indore',
//         state : 'Madhya Pradesh',
//         location : {
//             area : 'vijay nagar',
//             pincode :452010
//         }
//     }
// }
// let copy = JSON.parse(JSON.stringify(user))
// // JSON.stringify() : string mai convert karega
// // JSON.parse() : string to Original form mai le jayega like : object,array,boolean
// copy.address.location.area = 'Marimata Square'
// console.log(copy);   // sirf copy mai changes hoga
// console.log(user);

// 09 : Use optional chaining to safely access deep values
// let user = {
//     name : 'saransh',
//     age : 22,
//     address : {
//         city : 'Indore',
//         state : 'Madhya Pradesh',
//         location : {
//             area : 'vijay nagar',
//             pincode :452010
//         }
//     }
// }
// console.log(user?.address?.state); // Madhya Pradesh
// console.log(user?.address?.location?.code); // undefined

// 10 : Use a variable as a key using computed properties
// let key = 'name'
// let obj = {
//     [key] : 'saransh' // yaha [key] use kiya
// }
// console.log(obj);

// for-in includes inherited keys (be cautious!)
// inherited ka matlab hai kisi doosre object se properties milna
// for-in : Own aur inherited enumerable keys print karta hai 
// let parent = {
//     city : 'Indore'
// }
// let student = Object.create(parent)
//     student.name = 'Rahul'

// for(let key in student){
//     console.log(key);     // keys : name , city
// }

// Computed Properties 
// let key = 'marks'  // yaha marks name ki key banai
// let report = {
//     [key] : 89     // yaha key mai value assign kiya
// }
// console.log(report); // object print kiya

// Optional Chaining 
// let user = {
//     name : 'saransh',
//     address : {
//      city : 'delhi'
//     }
// }
// // ?. JavaScript ko kehta hai: agar left side ki value null ya undefined hai, toh aage property access mat karo; result undefined de do.
// console.log(user?.address?.city); // o/p : delhi 
// console.log(user?.profile?.email); // o/p : undefined

// Shallow copy : object inside object par changes nhi karta 
// let student = {
//     name : 'Ravi',
//     age : 21,
//     isEnrolled : true,
//     colleage : {
//       name : 'LNCT',
//       student : 2000
//     }
// }
// let newOne = Object.assign({},student)
// newOne.name = 'Saransh'
// newOne.colleage.name = 'SAIT'
// console.log(newOne);
// console.log(student);

// for-in-loop 
// for (let keys in student){
//     console.log(keys,student[keys]);
// }
// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));

// Object addition 
// let obj = {
//     a : 10,
//     b : 20
// }
// console.log(obj.a + obj.b);

// for-in for Object used to print key and values in objects
// let obj = {
//     name : 'sarthak',
//     age : 23,
//     city : 'bhopal'
// }  
// for(let a in obj){
//     console.log(a);
//     console.log(obj[a]); // only  a = keys names , obj[a] = values mil jayenge 
// }

// Shallow copy : Spread operator ka use karke banta hai 
// let arr = [10,{name:'saransh',age:34},20,30]
// let arr2 = arr
// arr2[1].name = 'sourabh'
// // koi bhi inner ho same to same copy ho jate hai 
// console.log(arr2);
// console.log(arr);

// Deep Copy : it help's for make changes in inner object or Arrays Not both objects
// let arr = [10,20,30,40]
// let str = JSON.stringify(arr) // array ko string mai conversion
// let copyarr = JSON.parse(str)
// copyarr.push(101)  // only 'copyarr' mai add hoga 101
// arr.pop()  //  only 'arr' mai 40 Remove ho jayega
// console.log(arr);
// console.log(copyarr);

// let original = {
//     name : 'saransh',
//     age : 45,
//     city : 'Bhopal',
//     colleage : {
//        name : 'LNCT',
//        students : 20000
//     },
//     skills : ['HTML','CSS','JS']
// } 
// // original object ko string mai convert kiya using(JSON.stringify())
// let str = JSON.stringify(original)
// // 'copy' name ke object mai  string to original form mai lekar ayenge or copy kardenge using (JSON.parse())  
// let copy = JSON.parse(str)
// copy.colleage.name = 'SAIT' // only copy object par change hua Not in original object
// console.log(copy);
// console.log(original);

// let a = [100,200,300,400] 
// console.log(a);
// let b = JSON.stringify(a) // Array to String conversion
// console.log(b);
// let c = JSON.parse(b) // String to Array convert
// console.log(c);

// typeof conversion of Any Object , Array 
// let obj = {
//     name : 'Harsh',
//     age : 44,
//     marks : 65,
//     colleage : {
//         name : 'LNCT',
//         student : 20000
//     },
//     skills : ['HTML','CSS','JAVA','JS']
// }
// let Ano = JSON.stringify(obj) // esne pure object ko string bana diya
// let Ano2 = JSON.parse(Ano) // Again esne string ko Object mai convert kar dia
// console.log(Ano2);
// console.log(typeof(Ano2)); // string to object 
// console.log(Ano);
// console.log(typeof(Ano)); // object to string 

// let a = true
// let b = JSON.stringify(a)
// console.log(b);
// console.log(typeof(b));

// Shallow Copy with Spread Operator
// let obj = {
//     name : 'Harsh',
//     age : 44,
//     marks : 65,
//     colleage : {
//         name : 'LNCT',
//         student : 20000
//     },
//     skills : ['HTML','CSS','JAVA','JS']
// }
// let obj2 = {...obj}
// obj.colleage.city = 'Indore' //  ye new key dono ke inner objects mai copy ho jayege
// obj.skills.push('React') // both obj and obj2 ke inner array mai a jayege
// obj2.name = 'Sahil ' // only obj2 mai name = sahil ayega 
// obj.marks = 95      // only obj mai marks = 95 ayega
// obj.colleage.name = 'IIT' // obj And obj2 dono ke inner objects mai change hoga
// console.log(obj2);
// console.log(obj);

// Spread Operator 
// let obj = {
//   name : 'harsh',
//   age : 33,
//   marks : 45
// }
// let obj2 = {...obj}    // Using Spread Operator : {...objectName} object ke liye
// obj2.name = 'saransh'  
// obj.marks = 90     // only obj mai marks change  hue 45 = 90 
// console.log(obj2); // only obj2 mai change hua name = 'saransh'
// console.log(obj);   

// let obj = {
//   name : 'harsh',
//   age : 33,
//   marks : 45
// }
// let obj2 = obj    // Normal Way to copy : dono mai value change ho gye 'saransh' a gya
// obj2.name = 'saransh'  
// console.log(obj2);
// console.log(obj);

// let arr = [10,20,30,40]
// let arr2 = [...arr]  // Spread operator useing for copying arr 
// arr.push(90) // only arr2 & arr mai push hoga , sirf ek mai
// console.log(arr);
// console.log(arr2);

// let arr = [10,20,30,40]
// let arr2 = arr  // Normal Way for copying  
// arr.push(45)
// console.log(arr);
// console.log(arr2); // Result same because dono ka same Reference hai 

// Distructuring
// Distructuring in objects 
// let obj = {
//     name : 'saransh',
//     Age : 34,
//     batch : 'Cohort3',
//     city : 'Bhopal'
// }
// // let {a,b} = obj // a,b = undefined ayega because key name se access kar sakte hai
// let {Age,...x} = obj  // direct key name se access kar sakte (distructuring)
// console.log(Age);
// console.log(x); // x mai (...x)Rest Operator lagaya : remaining key values key liye 

// Distructuring in Array
// let arr = [11,22,33,44]
// // let [a,b,c,d] = arr
// // let [b,a] = arr // b=22  a= 11
// let [a,b,...c] = arr // here using Rest Operator for Accessing remaining element
// console.log(c); // Remaining elements : c = 33,44

// Object's
// const arr = [10,20,30]
// // Object.seal(arr)
// Object.freeze(arr) // values update bhi nhi honge
// // arr[3] = 99   // array is a object humne arr ko seal kar dia , new keys-values add nhi 
// // arr.pop()  // typeError a rahe hai element delete nhi hua
// arr[2] = 50  // values modify/Update ho jayege 30 = 50 
// // delete arr[0] // delete bhi nhi hoga
// console.log(arr);

// Object Seal karna 
// const obj = {
//     name : 'lucky',
//     age : 15,
//     city : 'mumbai'
// }
// // Object.seal(obj) // yaha obj ko seal kardia
// Object.freeze(obj) // object ruk jayega No any changes  
// obj.name = 'Bhola'
// // obj.isSingle = true // new key and value add nhi hoge (Sealed object mai)
// // obj.phone = 9343632135 // it's not add in object because object was sealed
// delete obj.name     // keys na add honge or na delete honge due to seal() 
// console.log(obj); // seal mai value modify kar sakte hai


// const user = {
//     name : 'ahsb',
//      age: 67
// }
// // user = 'hello' // typeError : assignment to constant variable
// user.name = 'saransh' // andar ki values change kar sakte hai 

// const groom = {
//     name : 'salman khan',
//     age : 60
// }
// const  bride = {
//     name : 'Katrina Kaif',
//     age : 42
// }
// groom.name = 'Vicky Kaushal'
// console.log(groom.name ,' weds ',bride.name);

// let user = {
//     name : 'saransh',
//     city : 'indore',
//     true : 'first'  , // isme value change ho ja rahi hai 'working'
//     age : 23
// }
// user[name] = 'sourabh' // name change nhi hua balki alag value a gye, '':'sourabh'
// user.name = 'sourabh' // name : 'sourabh' change ho gya 
// user['name'] = 'sakshi' // it's working
// user[true] = 'working' // 'first' = 'working' ho ja raha hai
// user.true = 'hello' // it's working
// user['true'] = 'hello2' // it's working
// user[age] = 33  // age is not defined bata raha
// user[city] = 'Bhopal' // city is not defined
// user['city'] = 'Bhopal'  // it is working
// user.city = 'Jabalpur'     // it's working
// console.log(user);

// Js mai Array ko objects ki tarah treat kiya jata hai 
// let arr = [10,20,30]
// arr['name'] = 40
// arr[-1] = 60
// arr[true] = 45
// arr.false = 78    // -1 = 60 ke bad false = 78 aya hai
// arr.name = 'saransh'
// console.log(arr);

// console.log(typeof([])); // objects

// let greet = ()=>{
//     return console.log('welcome');
// }
// let by = ()=>{
//     return console.log('bye bye');
// }
// let obj = {
//     name : 'saransh',
//     CG : 10 > 5 ? greet : by
// }
// console.log(obj);

// let myage = 20
// let myage = 40
// let obj = {
//     name : 'saransh',
//     age : myage > 25 ? myage : 33 
//     // 20 > 25 ? 20 : 33  => 33
//     // 40 > 25 ? 40 : 33 => 40
// }
// console.log(obj);

// console.log()  sirf print karta return value undefined rehte hai 
// console => is a Object 
// log() => ek method hai 
// console.log(typeof console);
// agar  aap console mai console.log(); likhne ka means hai 

// teeno same hai 
// 01 : console.log(console.log('hello')) // output : undefined 
// 02 : let a = console.log('hello');
// // object ke andar bana hua function hai jo kuch return nhi kar raha hai 
// console.log(a);

// 03 : let obj2 = {
//     greet: function(){
//         console.log('hello');
//     }
// }
// console.log(obj2.greet());  // output : hello  undefined(function kuch return nhi kar raha) 

// let maths = {
//     add:(a,b)=>{
        // return a + b
//     }
//     mul:(a,b) =>{
//         return a * b
//     },
//     square:(a) =>{
//         return a * a
//     },
//     cube : (a) =>{
//         return a * a * a
//     }
// }
// console.log(maths.add(16,4)); // 16 + 4 = 20 
// console.log(maths.mul(16,4)); // 16 * 4 = 64
// console.log(maths.square(16)); // 16 * 16 = 256
// console.log(maths.cube(16));  // 16 * 16 * 16 = 4096

// objects ke andar banne wale function ko kehte hai methods 
// methods ek function hai jo objects mai bante hai 
// let obj = {
//  greet:function(a){
//  console.log('good morning ',a);
// }
// }
// obj.greet('saransh')
// obj.greet('sourabh')
// obj.greet('balram')


// Object ke andar object,function And  array 
// let obj = {
//     name : 'chitthi',
//     ram : '20mb',
//     age : 1,
//     isWorking : false,
//     skills : ['fight','walk','dance'],
//     creater : {
//         name : 'vashi',
//         age : 40,
//         isIntelligent : true,
//     },
//     sayHi : function(){
//      console.log('Hello I am chitthi Robot.');
//      return "it's function"
//     }
// }
// console.log(obj.skills); 
// console.log(obj.creater); // two objects
// console.log(obj.sayHi()); // ese function call karenge 

// let stu = {
//     name : 'saransh gupta',
//     age : 22,
//     isHandsome : true,
//     skills : ['HTML','CSS','JAVASCRIPT'],
//     colleage : {
//         name : 'Sri. Aurobindo Institute of Technology',
//         totalStudents : 500,
//         courses : ['Web Dev','Data Science','CyberSecurity']
//     }
// }
// // 500 - 22 = 478 + 'CyberSecurity' chances for concatenation 
// console.log((stu.colleage.totalStudents - stu.age)+ stu.colleage.courses[2]); // 478CyberSecurity
// console.log(stu)    // first object
// console.log(stu.skills) // first object with first array
// console.log(stu.colleage) // first object with second object
// console.log(stu.colleage.courses) // first object with second object or second array

// Object with Object
// let user = {
//     name : 'Virat Kohli',
//     age : 36,
//     team : 'India',
//     isMarried : true,
//     skills : ['Batting','Dancing','Fielding'],
//     spouse:{
//       name:'Anushka Sharma',
//       profession : 'Acting',
//       age : 30
//     }
// }
// // console.log(user);
// console.log(user.spouse);
// console.log(user.spouse.name);
// console.log(user.spouse.profession);


// it is simply object ke andar Array store kiya skills mai 
// let user = {
//     name : 'Virat Kohli',
//     age : 36,
//     team : 'India',
//     isMarried : true,
//     skills : ['Batting','Dancing','Fielding']
// }
// console.log(user);
// console.log(user.skills)      // array(3) ['Batting','Dancing','Fielding']
// console.log(user.skills[0])    // o/p : Batting

// let users = [
//     {id : 1, name:'aman'},
//     {id : 2, name:'rahul'},
//     {id : 1, name:'aman sharma'},
//     {id : 3, name:'priya'},
//     {id : 2, name:'rahul verma'}
// ]
// let result = [];
// // some() : check karta hai ki Array mai kam se kam ek elements condition ko satisfy karta hai ya nhi   
// users.forEach(user => {
//     let exists = result.some(item => item.id === user.id)

//     if(!exists){
//         result.push(user)
//     }
// })
// console.log(result);


// let student = {
//     name: "Saransh",
//     age: 22,
//     city: "Indore"
// };
// console.log(student.name);
// console.log(student["age"]);


// let student2 = {
//     name: "Saransh",
//     age: 22
// };
// student2.college = "SAIT";
// console.log(student2);

// let student3 = {
//     name: "Saransh",
//     age: 22,
//     city: "Indore"
// };
// delete student3.city;
// console.log(student3);

// let user = {
//     name : 'Virat Kohli',
//     age : 37,
//     team : 'INDIA',
//     isMarried : true,
//     Array : [10,20,30]    // yes ek array store ho sakta hai object ke andar
// }
// console.log(user);


// let userName = prompt('Enter Your Name ')
// let age = Number(prompt('Enter your age'))
// let  city = prompt('Enter your city')

// let obj = {userName,age,city}
// console.log(obj);

// CRUD : create , read , update , delete 
// var user = {
//     name : 'Saransh',
//     age : 22,
    // marks : 83,
    // isSingle : true,
//     batch : 'Cohort 3.0'
// }
// var Phone = {
//     model : 'Samsung S26',
//     color : 'Dark Blue',
//     price : 80000
// }
// object ke andar ki entries dekh sakte hai 
// console.log(Object.entries(user));  // 5 entries
// console.log(Object.entries(Phone));  // 3 entries 
// user.city = 'Bhopal' // new value create kiya
// console.log(Object.keys(user));  // object ke sabhi keys print ho jayege
// console.log(Object.values(user)); // user objects ki sabhi values dega 
// console.log(Object.keys(Phone));
// console.log(Object.values(Phone));
// user.name = 'Pratyush' // value update kiya
// console.log(user);
// console.log(user.name); // key-value Read kiya
// user.marks = 95   // update kiya new value 
// user.city = 'Indore' // new key-value create kiya 
// user.isSingle = false  // value update kiya 
// console.log(user);
// delete user.marks   // value delete kiya
// console.log(user);
// delete user.batch    // value delete kiya
// console.log(user);

// var obj = {
//     model : 'iPhone 17 Pro',
//     color : 'White',
//     Price : 100000,
//     isGood : true
// }
// console.log(obj);

// var info = {
//     name : 'saransh',
//     age : 18,
//     city : 'Delhi'
// }
// console.log(info.name);