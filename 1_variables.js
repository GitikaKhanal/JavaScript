const accountId =80001
let accountEmail ="gitikakhanal@gmail,com"
var accountPassword ="4578"
accountCity ="Kathmandu"
let accountState;

//accountId = 2 //not allowed
//overwriden 
accountEmail ="geetikakhanal@gmail,com"
accountPassword ="45785"
accountCity ="lalitpur"
/*
    prefer not to use var 
    because of issue in block scope or fumctional scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword, accountCity, accountState])
