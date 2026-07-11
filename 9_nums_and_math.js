const score = 400
console.log(score); //output-> 400

const balance = new Number(100) 
console.log(balance);   //output -> [Number: 100]

console.log(balance.toString().length); //output-> 3
console.log(balance.toFixed(2));    //output-> 100.00, after decimal value

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); //output-> 23.9 , will give the value upto 3 and round off other values

const hundreds = 1000000
console.log(hundreds.toLocaleString());

//++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));  //output-> 4
console.log(Math.round(4.6));   //output-> 5
console.log(Math.ceil(4.3));    //output-> 5
console.log(Math.floor(4.2));    //output-> 4

console.log(Math.random()); //output-> 0.43058714672467735, value will come between 0 and 1
console.log(Math.random()*10+1);  //output-> 4.266092696312201 , zero won't come
console.log(Math.random()*10+1);  //output-> 3.525032606694473 , avoid zero
console.log(Math.floor(Math.random()*10+1)); //output-> 6
const min = 10
const max = 20
 
console.log(Math.floor(Math.random()* (max - min + 1) +min ));  //output->12






