// Object's

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