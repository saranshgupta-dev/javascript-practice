

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