// Template Literals : multiline print karne ke liye bhi use karsakte hai 
// let name = 'saransh'
// let age = 23
// console.log(`mera naam ${name} hai or mai ${age} saal ka hoon
//     Line 2 : this is 
//     Line 3 : this is `);

// let fruit = ['mango','kela','angur','mosanbi']
// let newfruit = [...fruit,'apple','tulsi ke nipple/brest ']
// console.log(newfruit); // expand karke new array me daal diya hai 
// console.log(fruit);

// it is spread 
// let arr = [10,20,30,40,50]
// console.log(...arr) // 
// console.log(arr);

// Destructuring in Rest Operator
// const [head,...tail] = [1,2,3,4,5]
// console.log(head); 
// console.log(tail);

// kuch properties nikaal kar baki ekatha kar diya 
// const {passwor, ...safeUser} = {
//     name : 'saransh',
//     email : 'example@gmail.com',
//     passwor : 'secret1234'
// } 
// console.log(passwor);
// console.log(safeUser); 

// Rest with Normal 
// function data(first,...team){
//     console.log('Person 1 :',first);
//     console.log('Teams',team);
// }
// data('priya','shweta','nikita','harshita')

// Rest : function parameter 
// function sum(...numbers){
//     return numbers.reduce((total,n)=> total + n)
// }
// console.log(sum(1,2,3,4));// 10
// console.log(sum(10,20,30,40)); // 100

// Rest Operator in JS 
// function data(...numbers){
//     console.log(numbers);
// }
// data(1,2,3,4,4,5,5,5)
// data(name = 'saransh',age = 24) // array bana diya
// Destrucuturing in Rest 
// let arr = [10,20,30,40,50]
// let [a,b,...rest] = arr
// console.log(a,b); console.log(rest); // remaining rest mai a gye 

// spread : string ko Array banaya
// console.log([...'bhola']) // string ko array bana diya

// Spread : function Argument 
// const nums = [1,9,3,45,2,34,4]
// console.log(Math.max(...nums)); // 45 is max in ...nums mai pura array pass ho gya ek bar mai 
// console.log(Math.min(...nums)); // 1 is min

// purana data copy karke value/state update karna
// let oldstate = {loggedIn:false,user: 'saransh',location:'mumbai'}
// let newstate = {...oldstate,loggedIn : true}
// console.log(newstate); console.log(oldstate);

// Spread Operator in Array 
// let arr1 = [1,2,3]
// let arr2  = [5,6,7]
// let merged = [...arr1 , ...arr2]
// console.log(merged);
// const copy = [...arr1] // arr1 ki copy banai yaha par
// console.log(copy);
// const items = [0,...arr1,4,...arr2]
// console.log(items); // two array merge kiya with extra values add kar ke

// Spread Operator in Objects 
// let base = {
//     name : 'saransh',
//     money : '50cr'
// }
// let copyObj = {...base,work : 'Business'} // object copy kiya or new value add ki
// console.log(copyObj);
// let update = {...base,name:'sourabh'} // pehle obj copy then value update kiya
// console.log(update);

// two array merge kiya 
// let arr = [10,20,30]
// let arr2 = [...arr,40,50] // arr ke elem or 40,50 or add kar dia
// console.log(arr2);

// Spread se object copy kiya 
// let obj = {
//     name : 'saransh',
//     age : 23
// }
// let copy = {...obj,age:43, city:'jabalpur'}
// console.log(copy);


// Kuch values chodna hai 
// let arr = [1,2,3,4,5]
// let [first, ,third, ,fifth] = arr // yaha variable name dena hai without using string
// console.log(first,third, fifth);

// Swaping variable without using temp 
// let p =1, q=2
// let swap = [p,q] = [q,p]
// console.log(swap);

// function greet({name,age}){
//     console.log(`Hello ${name} age ${age}`)
// }
// greet({name:'sakshi',age : 27})
// greet({name:'sourabh',age:25})

// function greetnew({name,age=18}){
//     console.log(`hii my naam is ${name} and my age is ${age}`);
// }
// greetnew({name:'saransh'})

// function parameter mai Destructuring
// let obj = {
//     name : 'saransh',
//     age : 23
// }
// function data({name,age,home='bhainswahi'}){
//     console.log(name);
//     console.log(age);
//     console.log(home);
// }
// data(obj)

// Nested Array Destructuring 
// let arr = ['red',['yellow','pink pussy']]
// let [love,[soul,sex]] = arr
// console.log(love); // red
// console.log(sex);
// console.log(soul);

// Nested Destructuring 
// const strudent = {
//     id : 1,
//     info : {
//         name : 'priya',
//         address : {
//             city : 'Bhopal',
//             pin : 462001
//         }
//     }
// }
// const {id,info:{name,address:{city,pin}}} = strudent
// console.log(pin); // destructuring se direct access kar sakte hai objects kitne bhi nested ho

// Renaming + default value 
// const {theme : userTheme = 'dark', color = 'blue'} = {}
// console.log(userTheme);

// Renameing or keys 
// const user = {name:'saransh',age:23}
// let {name : userName,age:userAge} = user
// console.log(userName); // saransh
// console.log(name); // blank 

// Destructuring : array or object mai values nikal kar alag -alag variable mai store karna
// const [x=1,y=2,z=3] = [10,20,undefined]
// //     default value  =  actual value
// console.log(x,y,z);

// agar value = undefined ho toh default values use ho jati hai 
// const {name = 'Guest',role = 'user'} = {name :'Riya', role: 'developer'}
// let obj = {
//     // name : undefined, // undefined mai default value
//     name : null, // null,0,'' is a value 
//     role : 'user'
// }
// let {name = 'saransh',role} = obj
// console.log(name) // output : Riya
// console.log(role) // developer 

// Rest Operator in Destructuring 
// let user = {
//     name:'saransh',
//     age : 23,
//     city : 'Indore',
//     Role : 'Developer'
// }
// let {name, ...userDetails} = user
// console.log(name)
// console.log(userDetails); // remaining data Rest operator mai a jayega 

// Nested Destructuring in objects 
// let user = {
//     name : 'saransh',
//     age : 23,
//     address : {
//         city : 'KATNI',
//         village : 'Bhainswahi'
//     }
// }
// let {name,age,address:{city,village}} = user
// console.log(city);
// console.log(village);

// let arr = [10,20,30,40]
// let [a,b,c] = arr
// console.log(a); console.log(b);console.log(c)

// let obj = {
//     name : 'saransh',
//     age : 34,
//     city : 'indore'
// }
// let {name ,age, city } = obj
// console.log(name); console.log(age); console.log(city);

// Destructuring  function using obj
// let obj = {
//     name : 'saransh',
//     age : 23,
//     // city : 'indore'
// }
// function getData({name,age,city = 'bhopal'}){ // destructuring mai basically variables declare kar rahe hai 
//     console.log(name); // obj mai variable name = property name same hona chahiye
//     console.log(age);
//     console.log(city);
// }
// getData(obj)

// Destructuring function using array
// let arr = [10,20]
// function arrayData([a,b,c=50]){ // here c=50 default parameter diya
//     console.log(a+b+c); // sum kiya 
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// arrayData(arr)

//  function p1() {
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Promise 1 is pass')
//     },1000)
// })    
// }
//  function p2() {
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject('promise 2 is fail')
//     },2000)
// }) 
// }
//  function p3() {
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('promise 3 is pass')
//     },1000)
// }) 
// }
// async function getData() { // if any one is fail output will be fail only
//     let result =  await Promise.all([p1(),p2(),p3()])
//     console.log(result);
// }
// getData()
// async function getData() { // sabke output milenge if fail or pass anything
//     let result =  await Promise.allSettled([p1(),p2(),p3()])
//     console.log(result);
// }
// getData()

// ek object banao 
// let obj = {
//     name : 'saransh',
//     age : 23,
//     greet : function(){ console.log('ignore it!')},
//     home : 'indore'
// }
// let str = JSON.stringify(obj) // JSON text
// let real = JSON.parse(str) // convert to real obj with remove function
// console.log(typeof real);
// console.log(real);
// console.log(typeof str);
// console.log(str);

// async function dataLao() {
//     try{
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//         let data = await response.json()
//         console.log(data);
//         console.log(data.title);
//     }
//     catch(error){
//         console.log('Error',error);
//     }
// }
// dataLao()

// async/await callback hell 
//  function loginUser(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({id:101,message:'User Login Successful'})
//         },1000)
//     })
// }
// function getUserProfile(userID){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({userID:userID,name:'saransh'})
//         },1000)
//     })
// }
//  function getUserPosts(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(['Post 1','Post 2'])
//         },1000)
//     })
// }
// async function userData() {
//     try{
//         let user = await loginUser()
//         console.log(user.message);

//         let profile = await getUserProfile(user.id)
//         console.log('Profile',profile);

//         let posts = await getUserPosts()
//         console.log('Post :', posts);
//     }
//     catch(error){
//         console.log('Error',error);
//     }
// }
// userData()


// function loginUser(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({id:101,message:'User Login Successful'})
//         },1000)
//     })
// }
// function getUserProfile(userID){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({userID:userID,name:'saransh'})
//         },1000)
//     })
// }
// function getUserPosts(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(['Post 1','Post 2'])
//         },1000)
//     })
// }
// // Promise chaining 
// loginUser()
// .then((user)=>{
//     console.log(user.message);
//     return getUserProfile(user.id)
// })
// .then((profile)=>{
//     console.log('Profile',profile);
//     return getUserPosts(profile.userID)
// })
// .then((post)=>{
//     console.log('Post: ',post);
// })
// .catch((error)=>{
//     console.log('Error',error);
// })

// callback hell : minimum 3 level mai 
// function loginUser(username,callback){
//     setTimeout(()=>{
//         console.log('User login Successful');
//         callback({id:101})
//     },1000)
// }
// function getUserProfile(userID,callback){
//     setTimeout(()=>{
//         console.log('User Profile Fetched');
//         callback({userID:userID, name:'Rahul'})
//     },1000)
// }
// function getUserPosts(userID,callback){
//     setTimeout(()=>{
//         console.log('User Post Fetched');
//         callback(['callback 1','callback 2'])
//     },1000)
// }
// callback hell 
// loginUser('Saransh',function(user){
//     getUserProfile(user.userID,function(profile){
//         getUserPosts(profile.userID,function(posts){
//             console.log('Username:',profile.name);
//             console.log('Posts :',posts);
//         })
//     })
// })


// 5 to 0 tak print kiya using setTimeout
// let count = 5
// function countdown(){ // basically yaha function repeately call ho raha hai 
//    console.log(count);
//    if(count > 0){
//      count--
//      setTimeout(countdown,1000)
//    }
// }
// countdown()

// 5 to 0 tak print kiya using setInterval 
// let count = 5
// let ID = setInterval(()=>{
//     console.log(count);
//     count--
//     if(count < 0){
//         clearInterval(ID)
//     }
// },1000)

// const original = {
//     naam : 'saransh',
//    address : { city : 'indore'}
// }
// const copy = JSON.parse(JSON.stringify(original))
// // value update kiya yaha 
// copy.address.city = 'Bhopal'
// console.log(copy); 
// console.log(original.address.city); // indore
// console.log(copy.address.city); // bhopal

// const obj = {
//     name : 'saransh',
//     age : 23,
//     greet : function(){console.log('skip')},
//     home : undefined
// }
// let text1 = JSON.parse(JSON.stringify(obj)) // obj ki copy create kar sakte hai 
// console.log(text1);

// let original = {a:2,b:[2,4]}
// let toJson = JSON.stringify(original) // original object se JSON text mai convert kiya
// let toParse = JSON.parse(toJson) // JSON text se object mai convert kiya
// console.log(toParse);
// console.log(toJson);

// let str = '{"name":"saransh","age":22, "skills": ["jS","React"]}'
// try{
//     let obj = JSON.parse(str) // variable mai store karna must hai 
//     console.log(obj);
// }
// catch(error){
//     console.log('Invalid JSON',error.message);
// }

// yaha hum JSON string ko object mai convert kar rahe hai , not normal string
// const string = '{"name" : "saransh", "age" : 22, "skills" : ["javascript","React"]}'
// let obj = JSON.parse(string)
// console.log(obj);

// const user = {
//     name : 'saransh',
//     age : undefined,  // undefined or function ko skip kar deta hai JSON.stringify()
//     greet:function(){console.log('skip');}
// }
// let string = JSON.stringify(user)
// console.log(string); // {"name":"saransh"}

// JSON.stringify()  convert object/array into a JSON format like text(string)
// const user = {
//     name :'saransh',
//     age : 45,
//     skills : ['JavaScript','react']
// }
// let jsonstring = JSON.stringify(user) // it's convert in form of 
// console.log(jsonstring);
// console.log(typeof jsonstring);
// console.log(JSON.stringify(user,null,2));

// Post request : data bhejna 
// async function  userBanao() {
//     try{
//       const response = await fetch('https://jsonplaceholder.typicode.com/users',{
//           method : 'POST', // request type
//           headers : {
//             'Content-Type': 'application/json', // bata rahe hain ki JSON bhej rahe
//           },
//           body : JSON.stringify({ // JS object ko JSON string mai convert karna
//             name : 'Rahul',
//             email : 'rahul@example.com'
//           }),
//       })
//       // check karo request successfull thi ya nhi 
//       if(!response.ok){
//         throw new Error(`HTTP error! Status : ${response.status}`)
//        }
//       const data = await response.json() // server ka response variable mai store hota hai
//       console.log('Ban gaya Data',data);
//     }
//     catch(error){
//        console.log('Error:',error.message);
//     }
// }
// userBanao()

// async/await : using 
// async function userLao() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    
    // // check karo request successfull thi ya nhi 
    //   if(!response.ok){
    //     throw new Error(`HTTP error! Status : ${response.status}`)
    //    }
//       const data = await response.json()
//       console.log('User mill gaya: ',data);
//     }catch(error){
//       console.log('kuch galat hua hai :',error.message);
//       }
// }
// userLao()

// here hum .then() se bhi kisi api ka data fetch kar sakte hai 
// let response = fetch('https://jsonplaceholder.typicode.com/users/1')
// .then((response)=> response.json())
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))

// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end"); // ye await ke baad — microtask ban jaata hai
// }
// async function async2() {
//   console.log("async2");
// }
// console.log("script start");
// async1();
// console.log("script end");

// console.log('start');
// setTimeout(()=>{
//     console.log('Timeout 1');
// },0)
// Promise.resolve().then(()=>{
//     console.log('Promise 1');
//     setTimeout(()=>{
//         console.log('Timeout 2'); // sabhi timeout execute hone ke bad execute hoga
//     },0)
// })
// setTimeout(()=>{
//     console.log('Timeout 3');
// },0)
// console.log('END');

// console.log('start');
// setTimeout(()=>{
//     console.log('Timer');
// },2000)
// Promise.resolve().then(()=>console.log('promise high priority than setTimeout'))
// console.log('End');

// Promise without setTimeout
// let promise = new Promise((resolve,reject)=>{
//     resolve('hello')
// })
// promise.then((result)=>{
//     console.log(result);
// })

// Sequential Execution 
// function task1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('task 1 complete')
//         },2000)
//     })
// }
// function task2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('task 2 complete')
//         },3000)
//     })
// }
// async function sahi(items) {
//     for(const item of items){
//      let result = await item()
//      console.log(result);
//     }
//     console.log('Done');
// }
// sahi([task1,task2])

// function dataLao(){
//     return new Promise((resolve,reject)=>{ // Promise mai dono parameter dene honge
//         setTimeout(()=>{
//             reject('Error')
//         },1000)
//     })
// }
// // async function galat() {
// //     let info = await dataLao()
// //     console.error(info);
// // }
// // galat()
// async function sahi() {
//     try{
//         let info = await dataLao()
//         console.log(info)
//     }catch(e){
//        console.log('Handle kiya',e);
//     }
// }
// sahi()

// Sequential  Practice with Notes 
// function kaam(name,time){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(`${name} done`)
//         },time)
//     })
// }
// async function work() { 
//     console.time('sequential');
//     let a = await kaam('saransh',2000)
//     let b = await kaam('sourabh',3000)
//     let c = await kaam('harshita',3000)
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.timeEnd('sequential')
// }
// work()

// Parallel Practice with Notes 
// function kaam(naam, time) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`${naam} done`);
//         }, time);
//     });
// }
// async function parallel() {
//     console.time('parallel');
//     let a = kaam('saransh', 2000);
//     let b = kaam('sakshi', 2000);
//     let c = kaam('sourabh', 2000);
//     [a, b, c] = await Promise.all([a, b, c]);
//     // let result = await Promise.all([a,b,c])
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     // console.log(result); // output : array ke form mai dega
//     console.timeEnd('parallel');
// }
// parallel();

// Parallel + Sequential Execution 
// function getUser(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve({
//                 id : 101,
//                 name : 'sarthak'
//             })
//         },2000)
//     })
// }
// function getProducts(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve([
//              {product : 'Mobile'},
//              {product : 'Laptop'}   
//             ])
//         },3000)
//     })
// }
// function getOrders(userID){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//           resolve([
//             {orderID : 1, product : 'Mobile',userID : userID },
//             {orderID : 2, product:'Laptop',userID : userID}
//           ])
//         },3000)
//     })
// }
// async function parallel() {
//     let user = await getUser()
//     let [products,order] = await Promise.all([
//     getProducts(),
//     getOrders(user.id)
// ])
// console.log(user);
// console.log(products);
// console.log(order);
// }
// parallel()

// Parallel Execution 
// function getUser(){
//    return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve({
//         id : 101,
//         name : 'saransh'
//       })
//     },2000)
//    })
// }
// function getProducts(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve([
//              { product : 'laptop'},
//              { product : 'Mobiles'}
//             ])
//         },2000)
//     })
// }
// function getOrders(userID){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve([
//              { orderID : 1,product : 'laptop',userID : userID},
//              { orderID : 2,product : 'Mobiles', userID : userID}
//             ])
//         },3000)
//     })
// }
// async function Parallel() {
//     let [user,products,order] = await Promise.all([
//         getUser(),
//         getProducts() ,
//         getOrders()
//     ])
//     console.log(user);
//     console.log(products);
//     console.log(order);
// }
// Parallel()

// // Sequential Execution 
// function getUser(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//           resolve({id:101, name:'saransh'})
//         },2000)
//     })
// }
// function getOrders(userID){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//           resolve([
//             {orderID : 1, product : 'laptop',userID : userID},
//             {orderID : 2, product : 'Mobile',userID : userID}
//           ],2000)
//         })
//     })
// }
// async function  getUserDetails() {
//     console.log('Fetching User....');
//     let user = await getUser()
//     console.log('User',user);

//     console.log('Fetching Orders....');
//     let order = await getOrders(user.id)
//     // console.log(user.id); // 101
//     console.log('Orders',order);
// }
// getUserDetails()

// E-commerce Website 
// async function loadWebsite() {
//     let[user,products,categories] = await Promise.all([
//           fetch('https://fakestoreapi.com/users/1'),
//           fetch('https://fakestoreapi.com/products'),
//           fetch('https://fakestoreapi.com/products/categories')
//     ])
//     // check HTTP errors
//     if(!user.ok || !products.ok || !categories.ok){
//         throw new Error("API request failed!")
//     }
//  // convert Response into json()
//     [user,products,categories] = await Promise.all([
//         user.json(),
//         products.json(),
//         categories.json()
//     ])
//     console.log('User:',user);
//     console.log('Products:',products);
//     console.log("Categories:",categories);
// } 
// loadWebsite().catch(error => console.log(error.message))

// function task1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('Task 1 completed');
//             resolve()
//         },2000)
//     })
// }
// function task2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('Task 2 completed');
//             resolve()
//         },1000)
//     })
// }
// function task3(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('Task 3 completed');
//             resolve()
//         },4000)
//     })
// }
// Sequential Execution 
// async function execute() {
//     await task1() // task1 execute in 2second
//     await task2() // task2 execute in 3second
//     await task3() // task3 execute in 4second
// }
// Parallel Execution
// async function execute() {
// // yaha par apne setTimeout ke according execute honge sabhi task
//    await Promise.all([task1(),task2(),task3()])
// }
// execute() // when execute() is call all task started executing  


// function dataLao(){
//     return new Promise((reject)=>{
//         setTimeout(()=>{
//             reject('data fail ho gya ❌')
//         },1000)
//     })
// }
// Mehtod : 01 using .then(), .catch(), .finally()
// dataLao()
// .then((result)=>console.log(result))
// .catch((Error)=>console.log(Error))
// .finally(()=>console.log('cleanup ho gya'));
// Mehtod : 02 async/await 
// async function checkData() {
//    try{
//        let result = await dataLao()
//        console.log(result);
//    }
//    catch(error){
//        console.log('Error',error);
//    }
//    finally{
//     console.log('cleanup ho gya');
//    }
// }
// checkData()

// function dataLao(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('data lao re land ke ')
//         },2000)
//     })
// }
// same output with .then() resolve function
// dataLao()
// .then((data)=>{
//     console.log('start');
//     console.log(data)
//     console.log('End');
// })
// same output with async/await  
// async function main() {
//     console.log('start');
//     let data = await dataLao()
//     console.log(data);
//     console.log('End');
// }
// main()

// Promise mai eror handling ke liye .then() or .catch() lagata  
// function getData(){
//   return Promise.reject('Server Down hai !')
// }
// Method : 01 using .catch()
// getData()
// .then((result)=>console.log(result))
// .catch((err)=>console.log('Error',err))
// Method : 02 using try/catch
// async function read() {
//     try{
//         let result = await getData()
//         console.log(result);
//     }
//     catch(error){
//        console.log('Error: ',error)
//     }
// }
// read()

// function orderFood(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//            resolve('Pizza is Ready')
//         },2000)
//     })
// }
// async function eatFood() {
//     console.log('Order placed');
//     let result = await orderFood()
//     console.log(result);
//     console.log('Eating food');
// }
// eatFood()

// function workData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//           resolve('Aman')
//         },2000)
//     })
// }
// async function read() {
//     // let result =  workData() // Yahan result mein Promise object milega.
//    let result = await workData() // result mein resolved value milegi.
//     console.log(result); // result dega resolve ho ya reject 
// }
// read()

// async function always returns Promises 
// async function add() {
//     return 10 + 20
// }
// // .then resolve milne ke bad chalta hai  so async function ne Promise.resolve return kiya 
// add()
// .then((result)=>console.log(result))

// async function Normal() { // async function : always return Promises 
//     return ' Hello Sransh'
// }
// console.log(Normal()); // Promise {<fulfilled>: ' Hello Sransh'}

// function work(){ // normal function 
//       return Promise.resolve('Hello Honey')
// }
// console.log(work()); // Promise {<fulfilled>: 'Hello Honey'}

// yaha Async task bhi synchronousely chal rahe hai : through async/await
// function getData(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//            resolve(100)
//         },2000)
//     })
// }
// // sirf es async function ko pause karta hai await 
// async function showData() {
//     console.log('start');
//     let result = await getData()
//     console.log(result);
//     console.log('End');
// }
// function hello(){
//     console.log('its execute perfectely before complete execution of async function because async is currentely in pause state');
// }
// showData() // start -> hello() -> 100 -> End 
// hello()

// Promise chaining : 
// function getData(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('Data Recived')
//         },2000)
//     })
// }
// getData()
// .then((result)=>console.log(result))

// Same work with async/await 
// function getData(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('Data Accessed Successfully')
//         },2000)
//     })
// }
// async function showData() {
//     let result = await getData()
//     console.log(result);
// }
// showData()

// Promise.any -- only resolve result show karta hai rejections ko ignore karta hai 
// agar sare reject ho jaayein tab AggregateError deta hai .  
// let p1 = Promise.reject('error 1')
// let p2 = new Promise((resolve)=>{
//      setTimeout(()=>{
//       resolve('pass 2 ')
//      },2000)
// })
// let p3 = Promise.reject('error 3')
// Promise.any([p1,p2,p3])
// .then((result)=>console.log(result)) // p2 is winner only resolve result show hoga else Aggregate Error
// .catch((err)=>console.log(err))

// let p1 = Promise.reject('Error 1')
// let p2 = Promise.reject('Error 2')
// let p3 = Promise.reject('Error 3')
// Promise.any([p1,p2,p3])
// .catch((error)=>{
//     console.log(error) // AggregateError: All promises were rejected
// console.log(error.errors);})  // (3) ['Error 1', 'Error 2', 'Error 3']

// function serverA(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=> reject('Server A is Fail'))
//     },1000)
// }
// function serverB(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>resolve('Server B is Pass'),2000)
//     })
// }
// function serverC(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>resolve('Server C is Pass'),1000)
//     })
// }
// Promise.any([serverA(),serverB(),serverC()])
// .then((result)=>console.log('Data Recived:',result))
// .catch((error)=>console.log('All servers failed',error))

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject('Promise 1 Fail')
//     },1000)
// })
// let p2 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('Promise 2 PASS')
//     },2000)
// })
// let p3 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('Promise 3 pass')
//     },1000)
// })
// Promise.any([p1,p2,p3])
// .then((result)=>console.log(result))
// .catch((err)=>console.log(err))

// if age = 0 is a falsy value then 43 was myage
// let age = 0
// let obj = {
//     name : 'saransh',
//     myage : age || 43 
//     // myage : age ?? 43  // age = 0 = myage,  age = null  myage =43
//     // left value null or undefined hone par right side value chalayega
// }
// console.log(obj);

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