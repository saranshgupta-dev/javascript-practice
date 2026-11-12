// Promise.allSettled -- sabhi promises ka result show hoga if promise is reject or resolve
// let p1 =  Promise.resolve('pass 1')
// let p2 =  Promise.reject('fail 2')
// let p3 =  Promise.resolve('pass 3')
// Promise.allSettled([p1,p2,p3])
// .then((result)=>{
//   console.log(result);  
// // output : (3) [{…}, {…}, {…}]
// // 0:{status: 'fulfilled', value: 'pass 1'}
// // 1 : {status: 'rejected', reason: 'fail 2'}
// // 2 :  {status: 'fulfilled', value: 'pass 3'}
// // length : 3 [[Prototype]] : Array(0)
// })

// Promise.race -- jo pehle settle ho jaye jiska setTimeout kam hoga vo winner hoga
// let promise1 = new Promise((resolve,rejects)=>{
//      setTimeout(()=>{
//       resolve('data from server 1')
//      },2000)
// })
// let promise2 =  new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     reject('server 2 failed  ')
//   },1000)
// });
// Promise.race([promise1,promise2])
// .then((result)=>{
//   console.log(result);
// })
// .catch((err)=>{
//   console.log(err);
// })

// function server1(){
// return new Promise((resolve)=>{
//   setTimeout(()=>{
//     resolve(' Data from Server A ')
//   },2000)
// })
// }
// function server2(){
//  return new Promise((resolve)=>{
//   setTimeout(()=>{
//     resolve('Data from Server B ')
//   },2000)
// })
// }
// Promise.race([server1(),server2()])
// .then((result)=>{
//   console.log(result);
// })
// .catch((err)=>{
//   console.log(err);
// })

// let promise1 = new Promise((resolve)=>{
//   setTimeout(()=>{
//     resolve('Promise 1 winner!')
//   },2000)
// })
// let promise2 = new Promise((resolve)=>{
//   setTimeout(()=>{
//     resolve('Promise 2 winner!')
//   },3000)
// })
// Promise.race([promise1,promise2])
// .then((result)=>{
//     console.log(result);
// })

// let fast =  new Promise((resolve)=>{ 
//   setTimeout(()=>{
//    resolve('Fast 🐁')
//   },1000)
// })
// let slow = new Promise((resolve)=>{
//   setTimeout(()=>{
//     resolve('slow 🐢')
//   },3000)
// })
// Promise.race([fast,slow])
// .then((winner)=>console.log(winner))

// Promise.all - mai ek bhi promise reject hone par only .catch chalega
// const s1 = Promise.resolve('saransh')
// const s2 = Promise.reject('samosa khatam!')
// const s3 = Promise.resolve('sakshi')

// Promise.all([s1,s2,s3])
// .then((result)=>{
//   console.log(result);
// })
// .catch((err)=>{
//   console.log(err);
// })

// Promise.all -- Sab Successful hone chahiye
// const p1 = Promise.resolve('chai')
// const p2 = Promise.resolve('samosa')
// const p3 = Promise.resolve('biscuit')

// Promise.all([p1,p2,p3])
// .then((result)=>{
//   console.log(result);
// })
// .catch((err)=>{
//   console.log('koi ek fail hua:',err);
// })

// new Promise((resolve)=>{
// })
// Promise.resolve(100)
// .then((result)=>{
//   console.log(result); // 100
//   throw new Error('Oops!')
// })
// .catch((Error)=>{
//     console.log(Error);
//     return 200
// })
// .then((result)=>{
//   console.log('Final',result);
// })

// new Promise((resolve,reject)=>{
//   // reject('Something went wrong')
// })
// // .catch(err => console.log(err))

// Promise.resolve(10)
// .then(result =>{
//   console.log(result);
//   throw new Error('Somehting went wrong')
// } )
// .catch(err => console.log(err.message))

// function add(num){
//   return new Promise((resolve)=>{
//    setTimeout(()=>{resolve(num + 10)},1000)
//   })
// }
// add(0)
// .then((result)=>{
//   console.log(result);
//   throw new Error('Beech mai error! ')
// })
// .then((result)=>{
//   console.log('ye nhi chalega',result);
// })
// .then((result)=>{
//   console.log('ye bhi nahi chalega',result);
// })
// .catch((error)=>{
//   console.log('Error pakda :',error.message);
// })

// Promise Chaining 
// function add(num){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{resolve(num + 10)},1000)
//   })
// }
// add(1)
// .then((result)=>{
//   console.log(result);
//   return add(result)
// })
// .then((result)=>{
//   console.log(result);
//   return add(result)
// })
// .then((result)=>{
//   console.log(result);
//   return add(result)
// })

// function dataLao(){
//   return new Promise((resolve,reject)=>{
//     console.log('Data laa Raha hoon..');

//     setTimeout(()=>{
//       let success = false

//       if(success){
//         resolve({id:1,naam:'aman'})
//       }else{
//         reject('Server down hai!')
//       }
//     },2000)
//   })
// }
// dataLao()
// .then(function(result){
//   console.log('success',result);
// })
// .catch(function(error){
//   console.log('Error',error);
// })
// // promise settle hone par hamesha chalta hai
// .finally(()=>{
//   console.log('kaam khatam ');
// })

// New Promise create karna 
// const myPromise = new Promise((resolve,reject)=>{
//   let kaamsafal = true

//   if(kaamsafal){
//     resolve('kaam ho gya ✅')
//   }else{
//     reject('kaam nhi hua ❌')
//   }
// })
// console.log(myPromise);

// function dataLao(callback){
//   setTimeout(()=>{
//     let error = null
//     let data = {id : 1, name : 'saransh'}
   
//     if(error){
//       callback(error,null)
//       return
//     }else{
//       callback(null,data)
//     }
//   },1000)
// }
// dataLao((err,result)=>{
//   if(err){
//     console.log('Error aya :',err);
//     return
//   }
//   console.log('Success :',result);
// })

// if Error is available 
// function getData(callback){
//   let error = 'Server not responding'
//   let data = null

//   callback(error,data)
// }
// getData(function(err,result){
//   if(err){
//     console.log('error',err);
//     return
//   }
//  console.log('Data',result);  
// })

// if data is available
// function getData(callback){
//   let error = null
//   let data = 'User data'

//   callback(error,data)
// }
// getData(function(err,result){
//   if(err){
//     console.log('Something went wrong');
//     return
//   }
//   console.log(result);
// })

// // callback patterns 
// function dataLao(callback){
//   console.log('Server se data la raha hoon...');

//   setTimeout(() =>{
//     let data = {id : 1, name : 'saransh'}
//     callback(data)
//   },2000)
// }
// dataLao((result)=>{    // yaha result ke andar data a jayega or callback ke through result call ho jayega 
//   console.log('Data mil gaya :',result);
// })

// let TimeID = setTimeout(() =>{
//   console.log('ye kabhi print nhi hoga');
// },3000)
// clearTimeout(TimeID) // setTimeout chalega hi nhi 

// setInterval OR clearInterval 
// Digital Clock 
// let IntervalID = setInterval(function(){
//   let date = new Date()
//   console.log(date.toLocaleTimeString());
// },1000)
// clearInterval(IntervalID)

// let num = 1
// let INID = setInterval(function(){
//   console.log(num);
//   num++

//   if(num === 5){
//     clearInterval(INID)
//   }
// },2000)
// console.log('javascript');

// let count = 1
// let IntervalID = setInterval(() => {
//   console.log('Count :',count);
//   count++

//   if(count > 5){
//     clearInterval(IntervalID)
//     console.log('Interval band ho gya');
//   }
// },1000)

// sync callback 
// [1,2,3].forEach(function(num){
//   console.log(num * 2); // 2 4 6
// })
// async callback 
// setTimeout(()=>{
//   console.log('2 second ho gye!');
// },2000)
// callback as a argument 
// function greet(name,city){
//   console.log(`I am ${name} from ${city} `);
// }
// setTimeout(greet,2000,'saransh','indore')

// console.log('A');
// setTimeout(function(){
//   console.log('B');
// },0)
// console.log('C');
// [1,2].forEach(function(arr){
//   console.log(arr);
// })
// console.log('D');

// synchronous callback : woh callback hote hai jo immediately execute hote hai
// Normal synchronous callback :  it is sync so it execute line by line 
// function greet(name){
//   console.log('hello',name);
// }
// function welcome(callback){
//   console.log('welcome function started');
//   callback('Rahul')
//   console.log('welcome function ended');
// }
// welcome(greet)

// forEach synchronous callback 
// let arr = [10,20,30]
// console.log('start');
// arr.forEach(function(num){
//   console.log(num);
// })
// console.log('end');

// Asynchronous callback : voo callback jo turant execute nhi hote 
// setTimeout callback 
// console.log('start');
// setTimeout(function(){     // setTimeout is async task
//   console.log('Hello Rahuul');
// },3000)
// console.log('end');

// Food Order Using Async callback 
// function orderFood(callback){
//    console.log('Food ordred');

//    setTimeout(function(){
//     console.log('food is ready');
//     callback() // eatfood() hoga 
//    },3000)
// }

// function eatFood(){
//   console.log('Eating food');
// }
// orderFood(eatFood)
// console.log('Watching YouTube');

// callback function 
// function namasteBolo(name){
//   console.log('namaste',name);
// }
// function welcome(callback){
//   let user = "Rahul"
//   callback(user)
// }
// welcome(namasteBolo) // namaste Rahul
// welcome(namasteBolo('saransh')) // namaste saransh

// Method:01 same behaviour with class name 
// class Person{
//   constructor(name){
//     this.name = name
//   }
//   greet(){
//     return 'hi '+ this.name
//   }
// }
// let p1 = new Person('saransh')
// console.log(p1.greet());

// Method: 02 same behaviour with constructor function  
// function Person(name){
//   this.name = name 
// }
// Person.prototype.greet = function(){
//    return 'hi ' + this.name
// }
// let p1 = new Person('sakshi')
// console.log(p1.greet());

// class Animal{
//   eat(){
//     console.log('eating');
//   }
// }
// let a1 = new Animal()
// console.log(a1.__proto__);
// console.log( Animal.prototype);
// console.log(a1.__proto__ === Animal.prototype);
// a1.eat = function(){
//   return 'Sleeping'
// }
// console.log(a1.eat()); // Sleeping
// console.log(Animal.prototype.eat()); // eating
// console.log(a1.hasOwnProperty('eat'));// true

// class Animal{
//   eat(){
//     console.log('eating');
//   }
// }
// let a1 = new Animal()
// console.log(a1.eat); //eat function because  class ki property object mai rehte hai
// console.log(a1.hasOwnProperty('eat')); // false because ye prototype mai stored hai
// console.log(Animal.prototype.hasOwnProperty('eat'));// true because Animal ke prototype ki OwnProperty hai  

// console.log(typeof Animal.prototype.eat); // eat is function
// console.log(typeof Animal.prototype); // class ka prototype object hota hai
// console.log(typeof Animal.eat); // undefined because Animal ke prototype mai eat function
// console.log(typeof Animal); // function

// class Person{
//   constructor(name){
//     this.name = name 
//   }
//   greet(){
//     return 'hi this is ' + this.name
//   }
// }
// let p1 = new Person('sarthak')
// console.log(p1.greet());
// console.log(typeof Person); // function
// console.log(typeof Person.prototype.greet); 
// console.log(Person.prototype.greet); // pura greet function aya 
// person class ki greet property ka typeof check kiya function

// PIN Secure karna using Private fields in ATM machine 
// class ATM{
//   #pin = 1234
//   #balance = 20000

//   checkBalance(enteredPIN){
//     if(enteredPIN === this.#pin){
//       console.log('Balance :',this.#balance);
//     }else{
//       console.log('Wrong PIN');
//     }
//   }
//   credit(enteredPIN,amount){
//     if(enteredPIN !== this.#pin){
//       console.log('Invalid PIN');
//       return
//     }
//     if(amount > this.#balance){
//       console.log('Insufficient balance');
//       return
//     }
//     this.#balance += amount

//     console.log('Creadit Successfully');
//     console.log('Remaining :',this.#balance);
//   }
//   withdraw(enteredPIN,amount){
//     if(enteredPIN !== this.#pin){
//       console.log('Invalid PIN');
//       return;
//     }
//     if(amount > this.#balance){
//       console.log('Insufficient balance');
//       return
//     }
   
//     this.#balance -= amount

//     console.log('Withdraw Successfully!');
//     console.log('Remaining :',this.#balance);
//     console.log(this.#pin) // easily access 
//   }
// }
// let user1 = new ATM()
// user1.checkBalance(1234)
// // console.log(user1.#pin); // error because of private fields  
// user1.withdraw(1234,2000)
// user1.credit(1234,4000)

// Private Fields(#)
// class Student{
//   #name = 'saransh'
//   showName(){
//     console.log(this.#name);
//   }
// }
// let s1 = new Student()
// s1.showName()
// // Error : Property '#name' is not accessible outside class 'Student' because it has a private identifier.
// // console.log(s1.#name);

// Normal Property 
// class Student {
//   constructor(name,age){
//     this.name = name
//     this.age = age
//   }
// }
// // Class ke bahar variables ko easily access kiya 
// let s1 = new Student('Rahul',45)
// let s2 = new Student('saransh',22)
// console.log(s1.name);
// console.log(s2.name);

// Phase 5 Start
// // Optional chaining 
// var obj = {
//   name : 'saransh',
//   company : 'sheryians',
//   age : 34
// }
// console.log(obj.company); // sheryians ayega
// console.log(obj.company?.name); // name exist nhi karta toh error ki jagah undefined ayega

// Destructuring 
// let arr = [10,20,30,40]
// let [a,b] = arr
// console.log();

// async function checkData() {
//   try{
//       let response = await fetch('https://dummyjson.com/products')
//        let data = await response.json()
//       //  console.log(data);
//        data.products.forEach(function(elem){
//         // console.log(elem);
//          console.log(elem.title);
//        })
//   }catch(error){
//    console.error('URL galat hai mere bhai');
//   }
// }
// checkData()

// Normal function 
// function hero(){
//   console.log('data a raha hai');
//   return ' always promise mai ayega'
// }
// console.log(hero());

// async function : always return promise
// async function hero(){
//   let response = await fetch('https://fakestoreapi.com/products/')
//   let data = await response.json()
//   // console.log(data); // specific data or list of data
//   data.forEach(function(elem){
//     console.log(elem); // sabhi objects show honge 
//     // console.log(elem.title);
//   })
// }
// hero() // through async function ese ayega data
// console.log(hero()) // Promise {<fulfilled>: undefined} 

// let response = fetch('https://fakestoreapi.com/products/1')
// response.then(function(data){
//   console.log('Data a gaya ✅');
//   // console.log(data);
//   return data.json()  // API se  promise return kiya 
// })
// .then(function(mydata){ // promise ka data return kiya
//   console.log(mydata);
// })
// .catch(function(){
//   console.error('Data nhi aya ❌');
// })

// let p1 = new Promise(function(resolve,reject){
//   console.log('promise is pending');
//   let value = true
//   setTimeout(function(){
//     if(value){
//       console.log('value is true');
//       resolve('sab sahi hai')
//     }else{
//       console.log('value is false');
//       reject()
//     }
//   },3000)
// })
// .then(function(a){  // resolve mai pas kiya tha yaha access kiya through a 
//    console.log(a);
// })
// p1.then(function(){
//     console.log('value completed');
     
//     return new Promise(function(res,rej){
//       let work = true
      
//       setTimeout(function(){
//         if(work){
//         console.log('this is work');
//         res()
//        }else{
//         console.log('this is not work');
//         rej()
//        }
//       },2000)

//     })
//   }).then(function(){
//     console.log('ok it working');

//     return new Promise(function(resolve,reject){
//       let status = true
//       setTimeout(function(){
//          if(status){
//           console.log('status done');
//           resolve()
//          }else{
//           console.log('Wrong status');
//           reject()
//          }
//       },4000)
//     })
//   })
//   // .then(function(){
//   //   console.log('Everything completed');
//   // })
//   .catch(function(){
//     console.log('value rejected');
//   })
//   .finally(function(){
//     console.log('Proccess END completely');
//   })

// Order food from zomato
// function OrderFood(){
//    let myOrder = new Promise(function(resolve,reject){
//     console.log('your order is coming... ');
//     let orderStatus = true
//     setTimeout(function(){
//       if(orderStatus){
//         console.log('Delivery wale bhaiya a gye hai 📦');
//         resolve()
//       }else{
//         console.log('Order Failed ❌');
//         reject()
//       }
//     },3000)
//    })

//  myOrder.then(function(){
//     console.log('Now make a payment 💵');
//     return new Promise(function(resolve,reject){
//       let paymentStatus = false
//       setTimeout(function(){
//          if(paymentStatus){
//         console.log('Payment Done ✅');
//          resolve()
//       }else{
//         console.log('payment failed ❌');
//         reject()
//       }
//       },3000)
//    })
//   })
//    .then(function(){
//     console.log('Food Eating... 🍽️');
//     console.log('Nacho Nacho');
//    })
//   .catch(function(){
//     console.log('Complain karo 😡');
//     console.log('patak ke le lenge tumhari');
//    })
//  }
//  OrderFood()

// Order Shoes for Amazon 

// let Amazon = new Promise(function(ordered,cancelled){
//     console.log('Order is Pending...');
//     let order = false
//     setTimeout(function(){
//       if(order){
//         console.log('Order is Pacaked');
//         ordered()
//       }else{
//         console.log('Order not Accepted');
//         cancelled()
//       }
//     },4000)
// })
// Amazon.then(function(){
//     console.log('Order is Deliverd');
// })
// .catch(function(){
//     console.log('Order is Cancelled');
// })
// .finally(function(){
//     console.log('Ordering Process End');
// })

// let p1 = new Promise(function(resolve,reject){
//     console.log('promise pending hai...');

//     let result = true
//     setTimeout(function(){
//        if(result){
//         console.log('value true');
//         resolve()
//        }else{
//         console.log('value false');
//         reject()
//        }
//     },2000)
// })
// p1.then(function(){
//     console.log('promise is fullfiled');
// })
// .catch(function(){
//     console.log('promise is rejected');
// })
// .finally(function(){
//     console.log('Promise END');
// })
// let p1 = new Promise(function(resolve,reject){
//     let val = false
//     if(val){
//         console.log('success');
//     }else{
//         console.log('failure');
//     }
// })
// console.log(p1);

// let p2 = new Promise(function(resolve,reject){
//     console.log('promise is pending...');

//     let result = false
//     setTimeout(function(){
//        if(result){
//         console.log('value true');
//         resolve()
//     }else{
//         console.log('value false');
//         reject()
//     }
//     },5000)
    
// })
// p2.then(function(){
//     console.log('promise was fullfiled');
// })
// .catch(function(){
//     console.log('promise was rejected');
// })
// .finally(function(){
//     console.log('promise was END');
// })

// async function dataLao() {
//     let response = await fetch('https://picsum.photos/v2/list')
//     let data = await response.json()
//     console.log(data);
// }
// dataLao()

// async function dataLao() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     let data = await response.json()
//     console.log(data);
// }
// dataLao()

// Callback function 
// const fs = require('fs');

// fs.readFile("test.txt", "utf8", function(err, data) {

//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }

// });

// function getData(callback){
//     let error = null    // error mai null hone se else chalega(data) 
//     let data = 'user data'
    
//     callback(error,data)
// }
// getData(function(error,data){
//     if(error){
//         console.log('Error',error);
//     }else{
//         console.log('Data',data);
//     }
// })

// Normal Named function : passed as argument called callback function
// function greet(){
//     console.log('hello');
// }
// function test(callback){
//     console.log('through me ');
//     callback()
// }
// test(greet)

// here Anonymous function : bina name ka 
// function ko callback ke roop mai pass kar sakte hain 
// function calculate(callback){ // calculate higher order function hai
//     console.log('calculation started');
//     callback() // callback  argument function ko call karta hai
// }
// calculate(function(){ // this is anomyous function
//    console.log('Calculation completed');
// })

// setTimeout(function(){
//     console.log('Timeout');
// },1000)
// let int = setInterval(function(){
//     console.log('Interval');
// },500)
// setTimeout(function(){
//     clearInterval(int)
// },5000)

// maine es API ko call kiya toh mujhe milega response 
// let response = fetch('https://jsonplaceholder.typicode.com/posts/1')
// console.log(response); // Promise {<pending>}

// console.log('start');
// setTimeout(function(){
//     console.log('timeout');
// },0)
// console.log('end');

// Way : 01 
// ye function 4 second ke bad chal jayega 
// setTimeout(function(){
//    console.log('hello guys, this is setimeout 2');
// },4000)

// // Way : 02
// // pehle ye function execute hoga within 2 second mai 
// function a(){
//      console.log('this is settimeout 1');
// }
// setTimeout(a,2000)

// console.log('start');
// function s(){
//     console.log('setimeout checking');
// }
// setTimeout(s,2000)
// console.log('end');

// setTimeout(function(){
//    console.log('1');
// },5000)
// setTimeout(function(){
//    console.log('2');
// },2000)
// setTimeout(function(){
//    console.log('3');
// },6000)

// window.alert('Hello window')// it's working because window mai sab kuch wrapped hai 