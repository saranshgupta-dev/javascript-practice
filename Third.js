// Practice Zone 
// 01 : Create an array of student names and print each
// var arr = ['saransh','sourabh','rahul','rajul','neeraj']
// var ans = arr.forEach(function(elem){
//     // console.log(elem);
// })
// console.log(ans);

// 02 : Filter even numbers from an array
// var arr = [1,2,3,4,5,6]
// var ans = arr.filter(a => a%2===0)
// console.log(ans);

// 03 : Map prices to include GST (18%)
// var arr = [100,200,300,400]
// var ans = arr.map(a=> a*1.18) // every element mai 18% + ho jayega
// console.log(ans);

// 04 : Reduce salaries to calculate total payroll
// var salaries = [10000,20000,30000,45000]
// var payroll = salaries.reduce((acc,val)=> acc + val)
// console.log(payroll);

// 05 : Find the first student with grade A
// var student = [
//     { name : 'Rahul', Grade : 'B'},
//     { name : 'Sonam' ,Grade : 'C'},
//     { name : 'Saransh', Grade : 'A'},
//     { name : 'sakshi' ,Grade : 'A+'}
// ]
// var ans = student.find(a => a.Grade === 'A')
// console.log(ans);

// 06 : Write a function to reverse an array
// var arr = [23,45,67,89,98]
// var rev = arr.reverse(function(elem){
//     return elem
// })
// console.log(rev);
                  //Parameter
// function reverseArray(arr){
//     return arr.reverse()     // O/P : [70, 60, 50, 40, 30]
// }
// console.log(reverseArray([30,40,50,60,70])) // arr = [30,40,50,60,70]

// 07 : Sort array of ages in ascending order
// let ages = [34, 41, 27, 25, 87,12,21 ];
// let ans = ages.sort((a,b)=> a - b)
// console.log(ans);

// 08 : Destructure first two elements of an array
// var [first,second] = ['pehla element','dusra element']
// console.log(first);
// console.log(second);

// 09 : Use some() to check if any student failed
// var marks = [76,87,45,30,43]  // 30 == 34 kardia output : false 
// var result = marks.some(find => find<33) // 30 < 33 yes
// console.log(result);  // output : true 

// 10 : Use spread to copy and add new item
// var sp = [10,20,30,40]
// var result = [45,...sp,100] // first : 45 , last : 100 add kar dega
// // [...sp] is spread operator used to copy array and put it into new array
// console.log(result);   // output : [45, 10, 20, 30, 40, 100]

// Destructuring -->
// let [first, second,third] = ["aman", "bijoy", "komal"];
// console.log(first);
// console.log(second);
// console.log(third);
// Spread -->
// let nums = [1,2,3,4,5]
// let newArr = [23,...nums,101] // spread array copy & add elements 
// console.log(newArr);
// sort() -->
// var arr = [10,2,5,9]
// var ans = arr.sort() // wrong output dega without compareFn
// var ans = arr.sort((a,b)=> a - b) // Ascending order mai output
// var ans = arr.sort((a,b)=> b - a) // Descending order mai output
// console.log(ans);



// var arr = [1,2,3,4]
// var ans = arr.find(a => a>2) // 3,4 greater hai but single element return karega
// var ans = arr.every(a => a >0)  // true because sabhi greater hai
// var ans = arr.some(a => a>3).  // true because  4 > 3  ek element sirf hai 
// console.log(ans);

// const arr = [10,20,30] // const hone ke bad bhi ye operation perform ho rahe hai 
// arr[0] = 99
// arr.push(100)
// arr.push(23)
// arr.pop()
// console.log(arr); 

// var arr = [10,22,33,40,50]
// var ans = arr.find(a => a%2 == 0) // first element which is divisible by 2 hai 
// console.log(ans);
// var bns = arr.every(a => a%2 == 0) // Result false because 33 divsion mai 0 nhi ayega
// console.log(bns);

// Array Destructuring
// var arr = [10,20,30,40]
// var [a,,c] = arr    // b ki value skip kardia
// console.log(b);  // b is not defined
// console.log(a,c);
// var a = arr[0]
// var b = arr[1] // old way
// var c = arr[2]
// var [a,b,c] = arr  // new way destructuring
// var [a,b,...c] = arr // using[...]Rest operator sabhi elements fetch kiya 
// console.log(c); // remaining values c mai a gye 

// var arr = ['bijay','chandu','aman','prati'] // true because sabhi elements mai 'a' hai
// var arr = ['bijoy','chandu','aman','preeti']  // false because only 2elem = 'a' hai 
// var ans = arr.every(a => a.includes('a'))
// console.log(ans);

// Some() : Array ka kam se kam ek element condition satisfy karta hai ya nahi, ye check karta hai. Result true ya false hota hai.
// var arr = ['bijoy','ramu','lakhn','rohit','chindu']
// var ans = arr.some(a => a=='ramu')
// // var ans = arr.some(a => a.includes('a'))
// console.log(ans);

// findIndex() : Array mein condition match karne wale pehle element ka index (position) return karta hai.
// var arr = ['aman','bijoy','chandu','deep']
// var ans = arr.findIndex(a => a.includes('b'))
// console.log(ans);

// var arr = [3,20,55,44,110,140]
// var ans = arr.findIndex((e)=> e%10 == 0)    // basically element ka index batayega
// console.log(ans);

// Find() : Array mein condition match karne wala pehla element (value) return karta hai.
// var arr = [10,20,55,44,110,140]
// var ans = arr.find((e)=> e%10 == 0)    // only first value return karega
// console.log(ans);

// var arr = ['aman','bijoy','chandu','deep']
// var ans = arr.find(a => a.includes('a'))
// console.log(ans);

// var arr = ['virat','rahul','anushka','alia','golu','virat']
// var fin = arr.find(function(elem){
//     return elem == 'virat'
// })
// console.log(fin);

// Higher Order Function  : forEach(), map(), filter(), Reduce()
// Reduce() : array ko convert in single value 
// let nums = [1,2,3,4]
// let total = nums.reduce(function(acc,val){
//     console.log('acc =',acc);
//     console.log('val =',val);
//     console.log(acc + val);
//     return acc + val
// },0)
// console.log(total);

// var arr = [32,98,67,350,20,12]
// var brr = arr.reduce(function(acc,val){
// if(val>acc){
//     return val
// }
// return acc
// },0)
// console.log(brr)

// var arr = [10,20,30,40]
//  var brr = arr.reduce(function(acc,val){
//     // return acc + val
//     return acc * val    // because initial value = 0 hai 
// // },0)
// },1)
// console.log(brr);

// var arr = [10,20,30,40]
// var brr = arr.reduce(function(acc,val){
//    console.log(acc);
//    return acc + 2  // return value is acc ban jate hai
// },0)
// console.log(brr);

// var arr = [12,99,46,76,5]
// var brr = arr.reduce(function(acc,val){
//     // console.log(acc);  // accumulator = 12 
//     console.log(val);     // val = [12,99,46,76,5]
// },0 )      // acc = 0  

// var arr = ['apple','banana','apple','mango','banana','apple']
//  var abc = arr.reduce((acc,val)=>{
//     acc[val] = (acc[val] || 0) + 1;
//     return acc
// },{})
// console.log(abc);

// var arr = [1000,500,700,800,10000]
// var sum = arr.reduce(function(acc,val){
//     console.log("acc = ",acc);
//     console.log("val = ",val);

//     return acc + val
// },0)
// console.log('sum = ',sum);

// var arr = [1000,800,5000,10000]
// var sum = arr.reduce(function(acc,val){
//                          //   0 , 1000
//     console.log('Accumulator :',acc);
//     console.log('Current Value :',val);

//      return acc + val
// },0)
// console.log("Final sum:",sum);

// var arr = [1000,800,5000,10000]
// var max = arr.reduce(function(acc,val){
//     if(val>acc){
//         return val
//     }
//     return acc
// })
// console.log(max);
// var sum = arr.reduce(function(acc,val){
//     return acc + val
// })
// console.log(sum);


// Map() : ke li-ye code
// Arrow Function 
// let prices = [100,200,300]
// let taxed = prices.map(p => p * 1.18)
// console.log(taxed);
// Normal Function 
// let prices = [100,200,300]
// let taxed = prices.map(function(p){
//     return p * 1.18 // price ka 18% nikala
// })

// var arr = [56,78,45,68,33,87]
//   map mai:[T, T, F, T, F, T] <- Output
// filter mai:[56,78,68,87]     <- Output
// var arr2 = arr.map(function(elem){
//    return elem>50
// })
// console.log(arr2);

// var nam = ['aman','basundi','chintu','dev']
// var out1 = nam.map(function(elem){
//     return elem.toUpperCase()
// }) 
// console.log(out1);

// filter() : ke liye code
// let nums = [1,2,3,4]
// let even = nums.filter(function(n){
//     return n%2 === 0
// })
// console.log(even);

// var arr = ['aman','ajay','anshul','anju','rohit','kiran','akash']
//  var brr = arr.filter(function(elem){
//     return elem.startsWith('a')
// })
// console.log(brr);

// var arr2 = arr.filter(function(elem){
//    return elem>50
// })
// console.log(arr2);

// var out2 = nam.filter(function(elem){
//     // return elem.includes('a')
//     return elem.includes('i')
// })
// console.log(out2);

// Filter() : filter-at-ion ke li-ye
// var marks = [22,30,48,60,75,80,85]
// var finalMarks = marks.filter((elem)=>{
//  return elem >33
// })
// console.log(finalMarks);

// var arr = [24,31,53,-8,-3,-6,54,5,67]
// var arr2 = arr.filter(function(elem){
//     // return elem > 0 // [24, 31, 53, 54, 5, 67]
//     return elem < 0  // [-8, -3, -6]
// })
// console.log(arr2);

// map() : array ke Elements Transform kar-ega 
// var arr = [11,22,33,44,55]
// var arr2 = arr.map(function(elem){
//         if(elem % 2 == 0){
//             return elem      // 22, 44 => 2-Elements only
//         }else{
//             return elem + 1  // 11+1=12 , 33+1=34, 55+1=56  => 3-Elements
//         }
// })
// console.log(arr2);

// var arr = [10,20,30,40]
// var brr = arr.map(function(elem){
//     // console.log(elem); 
//     return 10.     // 10,10,.... array.length tak
// })
// console.log(brr);

// var users = ['Saransh','Sarthak', 'Shreya','Sahil','Harshita']
// var castUser = users.map(function(name){
//         // return name + ' Gupta '
//         //  return name.length   // length of name(count) 
//         // return name.substring(0,4) // it used to find substring of name
// })
// console.log(castUser);

// var arr  = [11,22,33,44]
//  var brr = arr.map(function(elem){
//     // return elem*elem    // Square of array  Elements 
//     return elem*elem*elem   // Cube of array Elements
// })
// console.log(brr);

// var arr = [10,20,30,40]
// function double(x){
//  return x*2
// }
// function triple(y){
//     return y*3
// }
// function Square(z){
//     return z*z
// }
// console.log(arr);
// var arr2 = arr.map(double)
// console.log(arr2);
// var arr3 = arr.map(triple)
// console.log(arr3);
// var arr4 = arr.map(Square)
// console.log(arr4);

// var arr = [10,20,30,40]
// var brr = arr.map(function(elem){
//     // return elem // complete array return kar-dia
//     // return elem * 2 // array ki value double kar-dia
//     return elem * elem // array ki elements ka Square ki-ya

// })
// console.log(arr);
// console.log('Square of Array : ',brr);

// forEach() : array iteration ke li-ye 
// let nums = [1,2,3,4]
// let ite  = nums.forEach(function(n){
//      console.log(n);
// })

// var arr = [10,20,30,40]
//  var arr2 = arr.forEach(function(){
//     return 10
// })
// console.log(arr2); // return value console par mil-te hai

// var arr = [10,20,30,40]
// var sum = 0
// arr.forEach(function(elem){
//     sum =  sum + elem
// })
// console.log('The Sum of Array Elements : ',sum);

// let brr = ['aj-ay','bit-tu','chh-otu','shay-am']
// brr.forEach(function(val){
//     console.log(val);
// })
// let arr = [10,20,30,40,50] // ji-tne Elements hai ot-ne bar forEach Ch-ale-ga
// arr.forEach(function(elem,index){
//                 // elem , index
//     console.log(elem,index);
// })
// Anonymous Function : jis-ka koi name nhi ho-ta  
// arr.forEach(function(){
//     console.log('hello');
// })

// ForEach Using Arrow Function 
// let run = ()=>{
//     console.log('hello');
// } 
// arr.forEach(run)

// iteration in Arrays 
// var arr = [10,20,30,40,50]
// for(i = 0; i < arr.length; i++){
//     console.log(i,arr[i]);
// }

// Extractors (Don't Modify original Array)
// let arr = [10,20,30,40,50]
// let newArr = arr.slice(1,3) // [20,30]
// arr.sort((a,b) => b - a) // (a,b) => a - b Ascending &  (a,b) => b - a Descending
// console.log(arr);
// console.log(newArr);

// let arr = [1,2,3,4]
// arr.push(5)
// arr.pop()

// arr.shift()     // 1 Removes
// arr.unshift(0)  // 0 Add ki-ya tha 

// arr.splice(1,2) // index 1 se 2 Elements (2,3)
// arr.reverse() // I think : [4,1] => Actual O/P : [4,0]
// console.log(arr);

// Reference Beh-av-io-ur of Array 
// var arr = [10,20,30,40]
// // var arr2 = [arr[0],arr[1],arr[2]]
// var arr2 = [...arr] // it is called Spread Operator
// arr2.push(76)
// console.log(arr2);
// console.log(arr);

// var arr = [10,20,30]
// // var arr2 = arr
// var arr2 = [...arr] // arr ki copy but new array object create karega arr2 ke liye 
// arr2.push(45)
// console.log(arr2); // output :  [10,20,30,45] because arr2 mai 45 push kiya tha 
// console.log(arr);  // it's Shocking , output :  [10,20,30,45] 

// Non-Mutating Methods in Array
// let str = 'Sheryians Coding School'
// let  arr = str.split(' ') 
// console.log(arr);        // ['Sheryians','Coding', 'School']
// var brr = arr[1].split('')
// console.log(brr);  // ['C','o','d','i','n','g']
// brr.reverse() 
// console.log(brr); // ['g','n','i','d','o','C']
// var str3 = brr.join('')
// console.log(str3);  // 'gnidoc'
// var str2 = arr.join(' ')    // join() array ko string mai convert kiya 'space' ke sath
// console.log(str2);  // Sheryians Coding School

// Join() + split() combine kiya 
// let str = 'Nice to meet you after long time'
// let a = str.split(' ')
// console.log(a);
// let b = a.join('-')
// console.log(b);

// join() : It is used to join array elements into a string based on a specified separator
// let strArray = ['saransh','gupta','ji']
// console.log(strArray.join('-'));  // output : saransh-gupta-ji
// console.log(strArray.join(''));    // output : saranshguptaji
// console.log(strArray.join(' '));   // output :  saransh gupta ji
// console.log(strArray.join('_'));  // output : saransh_gupta_ji


// split() : It is used to split a string into an array based on a space, character, or specific separator
// var str = 'Hello saransh gupta ji'
// // var arr = str.split(" ")
// var arr = str.split("")
// console.log(arr);

// // indexOf() : It is used to find the index of an element in an array.
// var arr = [5,10,15,20,25,30]
// // var a = arr.indexOf(15) // O/P : 2
// var a = arr.indexOf(99) // output : -1 -> because 99  is not exist in array  
// // var a = arr.indexOf(25) // O/P : 4
// console.log(a);

// includes() : Used to check whether a specific element exists in an array or not. It returns true or false
// var arr = [10,20,30,40,50]
//  var re = arr.includes(30)
//  var ree = arr.includes(60)
//  console.log(re);
//  console.log(ree);

// concat() : used for merge two arrays
// var arr = [1,2,3,4,5]
// var arr2 = [10,20,30,40,50]
//  var b = arr.concat(arr2)
//  console.log(b);
//  var c = arr2.concat(arr)
//  console.log(c);

// // slice()
// var arr = [10,20,30,40,50,60]
// //  var arr2 = arr.slice(2,4)
// var arr2 = arr.slice(4,5)
// console.log(arr2);

// fill() , copyWithin() Methods
// var arr = [10,20,30,40,50]
// arr.fill(0)
// console.log(arr);
// arr.fill(100,1,4)
// console.log(arr);

// var arr = [11,22,33,44,55,66]
// // arr.copyWithin(target,start)
//  0 -> jahan paste karna hai , 3 -> kahan se copy karna start karna hai
// arr.copyWithin(0,3)
// console.log(arr);

// var arr = [10,20,30,40,50] 
// 30,40,50 copy kiya -> 10,20,30 ke place par paste kiya 
// arr.copyWithin(0,2)
// 30,40,50 copy kiya -> Or 20 ke place par paste kiya then last elements[10,30,40,50,50]
// arr.copyWithin(1,2)
// console.log(arr);

// var arr = []
// for(let a = 0; a<100; a++){
//    if(a%2 == 0){
//       arr.push(a)
//    }
// }
// console.log('This is Even Numbers : ',arr);

// var arr = [10,20,30,40,56,67,78]
// for(let a = 0; a<arr.length; a++){
//    console.log(a,arr[a]);
// }

// var arr = [10,20,30,40,56,67,78]
// for(value of arr){
//    console.log(value);
// }

// var arr = [55,88,22,99,11]
// arr.push(77)
// arr.unshift(66)
// arr.unshift(33)
// arr.push(88)
// arr.shift() // shift 33 ko ignore karega
// arr.reverse()
// arr.sort((a,b)=> a-b)
// arr.reverse()
// console.log(arr[1]);
// console.log(arr);

// var arr = [45,10,89,100,1000,225,30,9]
// var arr = ['sara','anil','becu','zaman','lamen']
// arr.sort()   // it treats like [A,B,C,D]
// arr.sort() // only first digit 1,2,3,4,5.... 45 = 4 dekhega
// Numbers ko ascending order me sort karta hai.
// arr.sort((a,b) => a-b)
// Numbers ko descending order me sort karta hai 
// arr.sort((a,b) => b-a)
// console.log(arr);

// var sort = [9,6,4,8,3,2,5,1]
// sort.sort()
// console.log(sort);

// var rev = [22,33,44,55,66,77]
// console.log(rev);
// rev.reverse()
// console.log(rev);

// Multi Dimensional Array 
// let arr = [
//    [11,22,33,44],
//    [21,31,41,51],
//    [32,42,52,62],
//    [4,8,23,56]
// ]
// console.log(arr[2][2]+ arr[0][3]+ arr.length);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[0][1]);

// let arr = [10,20.5,'hello',[2,3,4,5]]
// console.log(arr);
// console.log(arr[3]);
// console.log(arr[3][0]);

// arr = [10,20,30,40]
// arr[10] = 100
// console.log(arr.length);
// console.log(arr);

// var arr = new Array(5)
// console.log(arr);

// let empty = []
// console.log('empty array :',empty);

// var arr = ['aman','bijoy','chandu','dev','ekansh','farukh']
// arr.splice(3,2,'saransh','sourabh')
// console.log(arr[arr.length - 1]);
// console.log(arr[4]);
// console.log(arr[3]);
// console.log(arr.length);
// console.log(arr);

// let arr = [11,22,33,44,55]
// arr.splice(startIndex,deleteCount)
// arr.splice(1,1)
// arr.splice(2,2)
// arr.splice(0,3)
// console.log(arr);
// arr.splice(startIndex,deleteCount,newItems)
// arr.splice(3,0,45)
// arr.splice(3,1,45)
// arr.splice(2,0,25,27,30) // 2index: se add hoga 25,27,30
// arr.splice(2,1,25,27,30) // 33 remove = 25,27,30 add ho jayenge 
// console.log(arr);

// PracticeOf : Push(), Pop(), shift(), unshift()
// var arr = [15,45,78,90,78]
// arr.shift() //[45,78,90,78]
// arr.shift() // [78,90,78]
// arr.unshift(99) // [99,78,90,78]
// arr.pop() // [99,78,90]
// arr.pop() // [99,78]
// arr.push(89) // [99,78,89]
// arr.unshift(67)
// // [67,99,78,89]
// arr.push(89)
// // [67,99,78,89,89]
// arr.unshift(1)
// // [1,67,99,78,89,89]
// console.log(arr[3]);  Output : 78

// let arr = [10,20,30,40]
// console.log(arr);
// Unshift  : starting mai element add karega
// arr.unshift(100)
// arr.unshift(200)
// console.log(arr);
// shift : starting mai element Remove karega
// arr.shift()
// arr.shift()
// console.log(arr);

// a[0] = 45 update kiya first element ko 
// Element push(add) kiya 
// arr.push(90)
// arr.push(100)
// console.log(arr);
// Element pop(delete) kar diya 
// arr.pop()
// console.log(arr);

// Arrays Starting 
// var arr = [20,30,40,5,60,59,93,56,202,47,93,40,62,97]
// var arr = [20,30,40,5,60]
// arr[-1] = 99
// arr[-2] = 98
// console.log(typeof(arr));
// console.log(arr);
// console.log(arr[-1]);
// console.log(arr.length);
// console.log(arr[arr.length-1]);

// ek variable mai multiple chej store kar sakte hai 
// var mix = [20,3.5,'working',false,null]
// console.log('array length is : ',mix.length);
// console.log(mix);

// var str = ['saransh','sourabh','sakshi']
// console.log(str);
// console.log(str[0]);
// here values update kiya array ki 
// str[0] = 'Super'
// console.log(str);
// var num = [10,20,30,40]
// console.log(num);
// console.log(num[1]);
// console.log(num[4]);

// Practice Zone of Function
// 1.  Write a BMI calculator function 
// function calculateBMI(width,height){
//    let bmi = width / (height * height)
//    return bmi
// }
// console.log(calculateBMI(70,1.75));
// output : 22.857142857142858

// 02 : Write greet function with default name 
// 2.1 Mera Tarika 
// function greet(name = 'saransh'){
//     return name
// }
// console.log(greet('salman'));
// 2.2 Another Way 
// function greet(name = 'Saransh'){
//     console.log('hello', name);
// }
// greet('Gupta ji')
// greet()

// 03 : Sum all  Numbers using Rest parameter 
// function sum(...Numbers){
//    let total = 0;
//    for(let num of Numbers){
//       total += num
//    }
//    return total
// }
// console.log(sum(45,67,89,23,46));

// 04 : Create a Closure counter function
// function createCounter(){
//   let count = 0;

//   return function(){
//    count++;
//    return count
//   }
// }
// const counter = createCounter()
// console.log(counter());
// console.log(counter());
// console.log(counter());

// 05 : Write a function that returns another function
// 5.1 My Method 
// function First(){
//    console.log('ek function');
   
//    function another(){
//       console.log('this is another function');
//    }
//    return another
// }
// First()()
// 5.2 Another Method 
// function outer(){
//    console.log('outer function can works');
//    return function inner(){
//       console.log("Hello JavaScript");
//    }
// }
// const result = outer()
// result()

// 06 : Use a function to log even numbers in array
// function logEvenNumbers(numbers){
//    for(let num of numbers){
//       if(num % 2 === 0){
//          console.log(num);
//       }
//    }
// }
// let numbers = [10,15,20,25,27,30,31,33,34,35]
// logEvenNumbers(numbers)

// 07 : Use a function t0 print odd numbers in Array
// function oddNumbers(numbers){
//    for(let num of numbers){
//       if(num % 2 !== 0){
//          console.log(num);
//       }
//    }
// }
// let numbers = [10,15,20,25,27,30,31,33,34,35]
// oddNumbers(numbers)

// 08 : Create a Pure function  to add tax 
// function addTax(price,taxRate){
//    return price + (price * taxRate / 100)
// }
// console.log(addTax(1000,18));

// 09 : Use IIFE to show Welcome Message 
// (function greet(){
//    console.log("Your Are Welcome");
// })()

// 10 : Write a discount calculator (HOF style)
// function discountCalculator(discount){
//    return function (price){
//      return  price - (price * discount / 100)
//    }
// }
// const tenPercent = discountCalculator(10)
// console.log('After Discount You Pay Only ',tenPercent(1000));

// 11 : Make a toUpperCase transformer using Hight Order Function
// function transform(fn){
//    return function(text){
//       return fn(text)      
//    }
// }
// function toUpperCase(text){
//    return text.toUpperCase()
// }
// const upper = transform(toUpperCase)
// console.log(upper('hello javascript developer'));

// Here The Difference Between Normal function & Arrow Function for "This" keyword
// yaha arrow function work nhi karega because arrow ka khud ka "This" nhi hota
// const person2 = {
//     name : 'sourabh',

//     workingFunction: function(){
//       console.log(this.name);
//     },

//     NonWorking: () => {
//         console.log(this.name);
//     }
// }
// person2.workingFunction()
// person2.NonWorking()

// yaha arrow ne this keyword lekar call kiya 
// const person = {
//  name : 'saransh',
//  normalFunction: function (){
//     console.log(this.name);
//  },
// //  yaha outer function se this keyword liya Arrow function ne 
//  greet : function (){ 
//    const arrow =  () => {
//     console.log(this.name);
//  }
//  arrow()
// }
// }
// person.normalFunction()
// person.greet()

// Closures & Lexical Scope
// function outer(){
//     let count = 0;
//     return function (){
//         count++;
//         console.log(count);
//     };
// }
// let counter = outer();
// counter();
// counter();
// counter();

// Hight Order Function 
// function createMultiplier(x){
//     return function(y){
//         return x * y
//     }
// }
// let total = createMultiplier(4)
// console.log(total(5));

// First Class Function 
// function shout(msg){
//     return msg.toUpperCase()
// }
// function processMessage(fn){
//   console.log(fn('hello'));
// }
// processMessage(shout)

// // It is Higher Order Function 
// function Footpath(w=10){
//     console.log("this is footpath , footpath width is : ", w ,'feet');
// }
// function MainRoad(wid,cb){
//     console.log("this is mainRoad , the width of road is : ",wid,'feet');
//     cb(wid/10)
//     cb()
// }
// MainRoad(80,Footpath)