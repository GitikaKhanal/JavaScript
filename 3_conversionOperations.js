//let score =0 // output is 0
//let score = undefined //output is non
let score = "32"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);// converted sreing to number
console.log(valueInNumber);// not a number if ("32abc") else 32

//console.log(score); // 32

//"33" = 33
//"33abc" = NaN(not a number)
//true =1, false=0
let isLoggedIn = "hello"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // output is true if 1 or "hello" , false if zero or ""
// true -> "hello"
//false -> ""
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


