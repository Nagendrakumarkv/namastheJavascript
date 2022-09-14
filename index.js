//HOSTING

// var x = 7;

// var getName = function () {
//   console.log("Namasthe javascript");
// };

// getName();
// console.log(x);
// console.log(getName);
// function getName(){
//     console.log("Namasthe javascript")
// }

// var getName=()=> {
//   console.log("Namasthe javascript");
// }

//--------------------------------------------------------------------------

//FUNCTIONS

// var x = 1;
// a();
// b();
// console.log(x);
// function a() {
//   var x = 10;
//   console.log(x);
// }
// function b() {
//   var x = 100;
//   console.log(x);
// }

//------------------------------------------------------------------------------------

// //SHORTEST JS PROGRAM

// var a=10;

// function b(){
//     var x=10;
// }
// console.log(window.a)
// console.log(a)

// console.log(this.a)
//-----------------------------------------------------------------

//undefined and not defined
// console.log(a)
// var a=10;
// console.log(a)
// a="naga"
// console.log(a)
// a=true
// console.log(a)
// a=undefined;
// console.log(a)

//SCOPE CHAIN

// function a() {
//   var b = 20;
//   c();
//   function c() {
//     console.log(b);
//   }
// }
// a();

//--------------------------------------------------------

//let and const

// console.log(b);

// console.log(x)

// let a = 10;
// console.log(a);
// var b = 100;

// console.log("hi all")
//  let a;
//  a=10
//  console.log(a)

// const a=100;

// a=200
// console.log(a)

//-------------------------------------------------

//BLOCKED SCOPE

// {
//Compound statement
//     const a=10;
//     console.log(a)
// }

// if (false) {
//   const a = 10;
//   console.log(a);
// }else{
//     const b=20;
//     console.log(b)
// }

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// var a=10;
// {
//  var a=20;
//  console.log(a)
// }
// console.log(a)

// let b=10;
// {
//     let b=20;
//     console.log(b)
// }
// console.log(b)

// const c = 10;
// {
//   const c = 20;
//   console.log(c);
// }
// console.log(c);

// var c=10;
// function x(){
//     var c=20;
//     console.log(c)
// }
// x();
// console.log(c)

// var a=10
// {
//     let a=20;
//     console.log(a)
// }
// console.log(a)

// const a=10
// {
//     const a=20
//     {
//         // const a=30
//         console.log(a)
//     }
// }

//--------------------------------------------------------------

//CLOSURE

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     var a=10;
//     return y;
// }
// let z=x();
// console.log(z)
// z();

// function z(){
//     var b=20
//     function x(){
//         var a=10;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();

//-----------------------------------------------------------

//setTimeOut()

// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);

//   console.log("namasthe javascript");
// }
// x();

// function x() {
//   for (let i = 1; i <= 5;i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("namasthe javascript");
// }
// x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i)
//   }
//   console.log("namasthe javascript");
// }
// x();

// function Counter() {
//   var count = 0;
//   this.incrementCounter = function () {
//     count++;
//     console.log(count);
//   };
//   this.decrementCounter = function () {
//     count--;
//     console.log(count);
//   };
// }
// var counter1 = new Counter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();

//-------------------------------------------------------------

//FUNCTIONS
// var x=function(){
//     console.log("hi all")
// }
// x();

// var x=()=>{
//     console.log("hi all")
// }
// x();

//Function statements and Function declaration
// function a(){
//     console.log("a is called")
// }
// a();

//function expression
// var b=function(){
//     console.log("b is called")
// }
// b();

//Ananymous function
// function(){
//    console.log("b is called")
// }

//Named function expression
// var b=function x(){
//     console.log("b is called")
// }
// b();
// x();

//Diffrence b/w parameters and arguments

// var a=function(param1,param2){
//     console.log(param1,param2
//         )
// }
// a(10,20);

//First class functions(OR first calss citizens)- (ability to use function as a value,
//passed function as argument to another function and return function from another function)

// var a=function(param1){
//     console.log(param1)
//     console.log("a is called")
// }
// a(function(){
//     console.log("function passed as arguments")
// })

// var a=function(param1){
//     console.log(param1)
//     console.log("a is called")
// }
// function x(){
//     console.log("x function")
// }
// a(x)

// var a=function(){
//     return function(){
//         console.log("return function")
//     }
// }
// console.log(a())

//Arrow functions

// var a=(param1,param2)=>{
//     console.log("a is called")
//     console.log(param1+param2)
// }
// a(10,20);

//-------------------------------------------------------------------

//CALLBACK FUNCTIONS

//what is callback function in javascript
//Javascript is synchronous and single threaded language

// setTimeout(function(){
//     console.log("timer")
// },4000)

// function a(param1){
//   param1();
//   console.log("a function")
// }
// a(function b(){
//     console.log("b function")
// })

//Blocking the main thread

//Power of callback

//Deep about event listeners

// function attachEventListeners() {
//   let count = 0;
//   document.getElementById("button").addEventListener("click", function a() {
//     console.log("clicked", ++count);
//   });
// }
// attachEventListeners();

//Closures demo with event listeners

//Scope demo with event listeners

//Garbage Collection and removeEventListeners

//-------------------------------------------------------------------

//EVENT LOOP

// console.log("start")
// setTimeout(function a(){
//     console.log("callback")
// },3000)
// console.log("end")

// console.log("start")
// document.getElementById('button').addEventListener("click",function a(){
//     console.log("callback")
// })
// console.log("end")

// console.log("start")
// setTimeout(function a(){
//     console.log("setTimeOut")
// },5000)
// fetch("https://jsonplaceholder.typicode.com/todos/1").then(function b(){
//     console.log("fetch")
// })
// console.log("end")

//--------------------------------------------------------------------------------------------

//JS engine

//--JIT compilation(just in time): combination of interpreter and compiler

//---------------------------------------------------------------------------------------------

//Trust issues with setTimeOut()

// function a(){
//     console.log("a function")
// }
// setTimeout(a,5000)

// console.log("start");
// setTimeout(function a() {
//   console.log("setTimeOut");
// }, 0);
// console.log("end");
// let startDate=new Date().getTime();
// let endDate=startDate;
// while(endDate<startDate+10000){
//  endDate=new Date().getTime();
// }
// console.log("while expires")

//----------------------------------------------------------------------------------

//Higher order function(Functional programming)
//Higher order function -> a function takes the function as argument and funtion return the function

// const radius=[2,3,4,5]
// function calculateRadius(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(Math.PI*radius[i]*radius[i])
//     }
//     return output;
// }
// console.log(calculateRadius(radius))
// function calculateCircumference(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(2*Math.PI*radius[i])
//     }
//     return output;
// }
// console.log(calculateCircumference(radius))
// function calculateDiameter(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(2*radius[i])
//     }
//     return output;
// }
// console.log(calculateDiameter(radius))

//CALLBACK FUNCTION-area(),circumference(),diameter()
//HIGHER ORDER FUNCTION-calculate()
// const radius = [2, 3, 4, 5];
// const area=function(number){
//     return Math.PI*number*number
// }
// const circumference=function(number){
//     return 2*Math.PI*number
// }
// const diameter=function(number){
//     return 2*number
// }
// // const calculate=function(arr,logic) {
// //   const output = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     output.push(logic(arr[i]));
// //   }
// //   return output;
// // }
// Array.prototype.calculate=function(logic) {
//     const output = [];
//     for (let i = 0; i < this.length; i++) {
//       output.push(logic(this[i]));
//     }
//     return output;
//   }

// console.log(radius.map(area))
// console.log(radius.calculate(area))
// console.log(calculate(radius,area))
// console.log(calculate(radius,circumference))
// console.log(calculate(radius,diameter))

//----------------------------------------------------------------------------------------

//MAP,FILTER,REDUCE(are Higher order functions)

//MAP

//example-1
// const arr=[2,3,4,5,6]
// function double(x){
//   return x*2
// }
// function tripple(x){
//   return x*3
// }
// function binary(x){
//   return x.toString(2);
// }
// const doubleOutput=arr.map(double)
// const trippleOutput=arr.map(tripple)
// const binaryOutput=arr.map(binary)
// console.log(doubleOutput)
// console.log(trippleOutput)
// console.log(binaryOutput)

//example-2
// const arr=[2,3,4,5,6]
// const binaryOutput=arr.map(function binary(x){
//   return x.toString(2);
// })
// console.log(binaryOutput)

//exapmle-3
// const arr=[2,3,4,5,6]
// const binaryOutput=arr.map((x)=>x.toString(2))
// console.log(binaryOutput)

//FILTER

//example-1
// const arr=[2,3,4,5,6]
// function isOdd(x){
//   return x%2;
// }
// const output=arr.filter(isOdd)
// console.log(output)

//example-2
// const arr=[2,3,4,5,6]
// const output=arr.filter(num=>num%2)
// console.log(output)

//REDUCE

//normal function for finding sum of array elemnts
// function findSum(arr){
//   let sum=0;
//   for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];
//   }
//   return sum;
// }
// const arr=[2,3,4,5,6];
// console.log(findSum(arr))

//reduce function -> accumulator(sum) and currentValue(arr[i])
//example-1
// function findMaximum(accumulator,currentValue){
//   accumulator=accumulator+currentValue;
//   return accumulator;
// }
// const output=arr.reduce(findMaximum,0)
// console.log(output)

//example-2
// const arr=[2,3,4,5,6]
// const output=arr.reduce(function(accumulator,currentValue){
//   accumulator=accumulator+currentValue;
//   return accumulator;
// },0)
// console.log(output)

//normal function for finding maximum element in array
// function findMaximum(arr){
// let max=0;
// for(let i=0;i<arr.length;i++){
//   if(arr[i]>max){
//     max=arr[i]
//   }
// }
// return max
// }
// const arr=[2,3,4,5,6]
// console.log(findMaximum(arr))

//reduce function
// const arr=[2,3,4,5,6]
// const output=arr.reduce(function(max,cur){
//  if(cur>max){
//   max=cur
//  }
//  return max
// },0)
// console.log(output)

//real world example map,filter,reduce
// const users=[
//   {firstName:"naga",lastName:"kumar",age:20},
//   {firstName:"appu",lastName:"kalor",age:34},
//   {firstName:"prajwal",lastName:"nagesh",age:20},
//   {firstName:"prasanth",lastName:"mukli",age:55},
// ]
// //map
// const addAgeWithExtraFiveYears=users.map((user)=>user.age+5)
// const fullName=users.map((user)=>user.firstName+" "+user.lastName)
// console.log("addAgeWithExtraFiveYears ",addAgeWithExtraFiveYears)
// console.log("fullName ",fullName)

// //filter
// const checkAgeAbove30=users.filter((user)=>user.age>30)

// //check the first name of age below 35
// const checkFirstNameAgeBelow35=users.filter((user)=>user.age<35).map((user)=>user.firstName)
// console.log("checkAgeAbove30 ",checkAgeAbove30)
// console.log("checkFirstNameAgeBelow35",checkFirstNameAgeBelow35)

// //reduce
// const sumOfAge=users.reduce((sum,cur)=>sum+cur.age,0)
// const maxAge=users.reduce(function(max,cur){
// if(cur.age>max){
//   max=cur.age
// }
// return max
// },0)

// //check the how uniqe ages count{20:2,34:1,55:1}
// const checkEachUserWithHowManySameAge=users.reduce(function(acc,cur){
//   if(acc[cur.age]){
//    acc[cur.age]=++acc[cur.age]
//   }else{
//     acc[cur.age]=1;
//   }
//   return acc;
// },{})

// //check the first name of age below 35
// const reduceCheckFirstNameAgeBelow35=users.reduce(function(acc,cur){
//  if(cur.age<35){
//   acc.push(cur.firstName)
//  }
//  return acc
// },[])

// console.log("sumOfAge ",sumOfAge)
// console.log("maxAge ",maxAge)
// console.log("checkEachUserWithHowManySameAge",checkEachUserWithHowManySameAge)
// console.log("reduceCheckFirstNameAgeBelow35",reduceCheckFirstNameAgeBelow35)

//-------------------------------------------------------------------------------------

//CALL,APPLY,BIND METHODS

//CALL
//example-1
// const name={
//   firstname:"naga",
//   lastname:"kumar",
//   printFullname:function(){
//     console.log(this.firstname+" "+this.lastname)
//   }
// }
// const name2={
//   firstname:"appu",
//   lastname:"kumar"
// }
// name.printFullname();
// //function barrowing
// name.printFullname.call(name2)

//example-2
// const name={
//   firstname:"naga",
//   lastname:"kumar",
// }
// let printFullname=function(){
//   console.log(this.firstname+" "+this.lastname)
// }
// const name2={
//   firstname:"appu",
//   lastname:"kumar"
// }
// //function barrowing
// printFullname.call(name)
// printFullname.call(name2)

//example-3
// const name={
//   firstname:"naga",
//   lastname:"kumar",
// }
// let printFullname=function(hometown,state){
//   console.log(this.firstname+" "+this.lastname+" from "+hometown+" of state "+state)
// }
// const name2={
//   firstname:"appu",
//   lastname:"kumar"
// }
// //function barrowing
// printFullname.call(name,"mysore","karnataka")
// printFullname.call(name2,"mandya","kerala")

//APPLY
//example-1
// const name={
//   firstname:"naga",
//   lastname:"kumar",
// }
// let printFullname=function(hometown,state){
//   console.log(this.firstname+" "+this.lastname+" from "+hometown+" of state "+state)
// }
// const name2={
//   firstname:"appu",
//   lastname:"kumar"
// }
// //function barrowing
// printFullname.apply(name,["mysore","karnataka"])
// printFullname.apply(name2,["munnar","kerala"])

//BIND

//example-1
// const name={
//   firstname:"naga",
//   lastname:"kumar",
// }
// let printFullname=function(hometown,state){
//   console.log(this.firstname+" "+this.lastname+" from "+hometown+" of state "+state)
// }
// const name2={
//   firstname:"appu",
//   lastname:"kumar"
// }
// //function barrowing
// let printMyName=printFullname.bind(name,"mysore","karnataka")
// let printMyName2=printFullname.bind(name2,"munnar","kerala")
// console.log(printMyName)
// printMyName();
// printMyName2();

//-----------------------------------------------------------------------------------

//POLYFILL FOR BIND METHOD
//example-1
// const name={
//   firstname:"naga",
//   lastname:"kumar"
// }
// let printFullName=function(){
//   console.log(this.firstname+" "+this.lastname);
// }

// const printMyName=printFullName.bind(name)
// printMyName();

//example-2
// const name={
//   firstname:"naga",
//   lastname:"kumar"
// }
// let printFullName=function(){
//   console.log(this.firstname+" "+this.lastname);
// }

// const printMyName=printFullName.bind(name)
// printMyName();

// Function.prototype.mybind=function(...args){
//   let obj=this;
//   return function(){
//   obj.call(args[0])
//  }
// }
// const printMyName2=printFullName.mybind(name)
// printMyName2();

//example-3
// const name={
//   firstname:"naga",
//   lastname:"kumar"
// }
// let printFullName=function(hometown){
//   console.log(this.firstname+" "+this.lastname+" from "+hometown);
// }

// const printMyName=printFullName.bind(name,"mandya")
// printMyName();

// Function.prototype.mybind=function(...args){
//   let obj=this;
//   params=args.slice(1)
//   return function(){
//   obj.apply(args[0],params)
//  }
// }
// const printMyName2=printFullName.mybind(name,"munnar")
// printMyName2();

//example-4
// const name = {
//   firstname: "naga",
//   lastname: "kumar",
// };
// let printFullName = function (hometown, state, country) {
//   console.log(
//     this.firstname + " " + this.lastname + " from " + hometown + "," + state,
//     "," + country
//   );
// };

// const printMyName = printFullName.bind(name, "mandya");
// printMyName("karnataka", "india");

// Function.prototype.mybind = function (...args) {
//   let obj = this;
//   params = args.slice(1);
//   return function (...args2) {
//     obj.apply(args[0], [...params, ...args2]);
//   };
// };
// const printMyName2 = printFullName.mybind(name, "munnar");
// printMyName2("kerala", "india");

//---------------------------------------------------------------------------------------------

//FUNCTION CURRYING using bind() and closure

//example-1(FUNCTION CURRYING using bind())

// let multiply=function(x,y){
//   console.log(x*y)
// }
// //below is same as line 835
// // let multiplyByTwo=function(y){
// //   let x=2;
// //   console.log(x*y)
// // }
// //2 is x and 5 is y
// let multiplyByTwo=multiply.bind(this,2)
// multiplyByTwo(5);
// let multiplyByThree=multiply.bind(this,3)
// multiplyByThree(5)

//example-2(FUNCTION CURRYING using bind())
// let multiply=function(x,y){
//   console.log(x*y)
// }
// let multiplyByTwo=multiply.bind(this)
// multiplyByTwo(2,5);
// let multiplyByThree=multiply.bind(this,3)
// multiplyByThree(5)

//example-3(FUNCTION CURRYING using function closure)
// let multiply=function(x){
//  return function(y){
//   console.log(x*y)
//  }
// }
// let multiplyByTwo=multiply(2)
// multiplyByTwo(3)

//---------------------------------------------------------------------------------------

//ASYNC AND DEFER ATTRIBUTES IN JAVASCRIPT-> both of them are used in script tag like below

{
  /* <script src=""></script>(normal script)
<script async src=""></script>
<script defer src=""></script> */
}

//--------------------------------------------------------------------------------------

//PROTOTYPE AND PROTOTYPAL INHERITANCE

// //example-1
// //arr.__proto__(Array.prototype)
// //arr.__proto__.__proto__(Object.prototype)
// let arr=['naga','kumar']

// let obj={
//   name:"naga",
//   age:20,
//   city:"mysore",
//   printDetails:function(){
//     console.log(this.name+","+this.age+","+this.city)
//   }
// }

// let fun=function(){
// //something else
// }

// //example-2
// //obj2 access or inherites the properties and methods of obj1
// let obj1={
//   name:"naga",
//   age:20,
//   city:"mysore",
//   printDetails:function(){
//     console.log(this.name+","+this.age+","+this.city)
//   }
// }
// let obj2={
//   name:"appu",
// }
// obj2.__proto__=obj1

// //example-3
// Function.prototype.mybind=function(){
//   console.log("hi all")
// }
// function fun(){
//   //something
// }
// //fun.mybind() => hi all
// //fun.__proto__.mybind() => hi all

//------------------------------------------------------------------------------------------

// //DEBOUNCING
//--used for limiting the rate of execution of function call(improve or optimize the performance of web app)

// //example-1
// let counter = 0;
// const getData = () => {
//   //calls the API and fetch the data
//   console.log("fetching...", ++counter);
// };

// const debounce = (fn, delay) => {
//   let timer;
//   return function () {
//     let context = this,
//       args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(context, args);
//     }, delay);
//   };
// };

// const betterFunction = debounce(getData, 300);

//------------------------------------------------------------------------------------------

// //THROTTLING
//--used for limiting the rate of execution of function call(improve or optimize the performance of web app)

// const expensive = () => {
//   console.log("Expensive...");
// };

// const throttle = (func, limit) => {
//   let flag = true;
//   return function (msg) {
//     let context=this,
//     args=arguments
//     if (flag == true) {
//       func.apply(context,args);
//       flag = false;
//       setTimeout(() => {
//         flag = true;
//       }, limit);
//     }
//   };
// };

// const betterFunction = throttle(expensive, 1000);

// window.addEventListener("resize", betterFunction);


//------------------------------------------------------------------------------------------

//LOCAL STORAGE V/S SESSION STORAGE

//--session storage(stores minimum 5mb of data) and cookies(store 4000 bytes of data)

// user={name:"naga"}

// localStorage.setItem("user",user)
// undefined

// localStorage.getItem("user")
// '[object Object]'

// localStorage.setItem("user-copy",JSON.stringify(user))
// undefined

// localStorage.getItem("user-copy")
// '{"name":"naga"}'

// JSON.parse(localStorage.getItem("user-copy"))
// {name: 'naga'}
