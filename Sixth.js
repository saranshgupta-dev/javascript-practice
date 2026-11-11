// Phase 5 Start
var obj = {
  name : 'saransh',
  company : 'sheryians',
  age : 34
}
console.log(obj.company); // sheryians ayega
// Optional chaining 
console.log(obj.company?.name); // name exist nhi karta toh error ki jagah undefined ayega

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