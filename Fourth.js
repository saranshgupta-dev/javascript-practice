

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