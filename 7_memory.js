//Stack and Heap memory
//stack => Primitive
//heap => Non-Primitive
let myName = "Gitika khanal"
let Rift = myName
Rift = "Riftania"
console.log(Rift);      // output-> Riftania
console.log(myName);    // output-> Gitika Khanal

let user1 = {
    phoneNumber :  "014357",
    email : "user@gmail.com", 
}
let user2 = user1
user2.email = "rift@gmail.com"
console.log(user2);//{ phoneNumber: '014357', email: 'rift@gmail.com' }
console.log(user1);//{ phoneNumber: '014357', email: 'rift@gmail.com' }
// Primitive Types:
// 1. Stored in stack.
// 2. Passed or assigned by value (call by value).
// 3. Changes to copies don't affect the original.

// Reference Types:
// 1. Stored in heap; accessed via references (stored in stack).
// 2. Changing the value through another reference affects the original.