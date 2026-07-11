// //primitive datatype
// 7 types: String, Number,Boolean, null,undefined,Symbol,BigInt
const score =100
const scoreValue =100.5

const isLoggedIn =false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 34556789876n// to use big int , n is kept 

// Reference (Non-Primitive datatype)
// Array , Object, Function
//js is a dynamically typed language
const heros =["shaktiman","naagraj", "doga"]
let myObj ={
    name:   "Rift",
    age :   19,
}
const myFunction = function(){
    console.log("Hello,World!");
}
console.log(typeof bigNumber);// output-> bigint
console.log(typeof myFunction); // its a function object , here output-> function
// non-primitive-> function

// // Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// // Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

