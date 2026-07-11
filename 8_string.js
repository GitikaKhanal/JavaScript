const name ="Gitika"
const repoCount = 3
//console.log(name + repoCount + " Value"); // traditional way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// modern way 

const gameName = new String ('riftania')
console.log(gameName[0]);   //output->r
console.log(gameName.__proto__);    //output-> {}
console.log(gameName.length);   //output-> 8
console.log(gameName.toUpperCase());    //output->RIFTANIA
console.log(gameName.charAt(3));    //output->t
console.log(gameName.indexOf('f')); //output->2

const newString = gameName.substring(0 ,3)
console.log(newString); //output->rif

const anotherString = gameName.slice(-7,4)
console.log(anotherString); //output->ift

const newString1 = "    rift    "
console.log(newString1);    //output->    rift    
console.log(newString1.trim()); //output->rift
// console.log(newString1.trimEnd());  //output->rift   
// console.log(newString1.trimStart());    //output->    rift

//trim consists of trimStart, trimEnd 
const url ="https://rift.com/rift%20tide"  
console.log(url.replace('%20','-'));   //output-> https://rift.com/rift-tide
console.log(url.includes('hello')); //output-> false
console.log(url.includes('rift'));  //output-> true



