// Phase 5 Start 
// Order Shoes for Amazon 
let Amazon = new Promise(function(ordered,cancelled){
    console.log('Order is Pending...');
    let order = false
    setTimeout(function(){
      if(order){
        console.log('Order is Pacaked');
        ordered()
      }else{
        console.log('Order not Accepted');
        cancelled()
      }
    },4000)
})
Amazon.then(function(){
    console.log('Order is Deliverd');
})
.catch(function(){
    console.log('Order is Cancelled');
})
.finally(function(){
    console.log('Ordering Process End');
})

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