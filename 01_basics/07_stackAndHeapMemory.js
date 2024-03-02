
// stack -> primitive data type -> call by Value
// heap -> non-primitive (reference) data type -> call by Reference

//////////////////

//primitive - stack
let myYoutubeName = "tonystak@jarvis.com"
let anotherName = myYoutubeName
anotherName = "chai aur code"
console.log(myYoutubeName)      //tonystak@jarvis.com
console.log(anotherName)        //chai aur code

// This is because anotherName is pointing to COPY of myYoutubeName
// Hence, NO changes in original value

//////////////////////////////////////////////////

//non-primitive (reference) -> heap

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user@tesla.com"

console.log(userOne.email)      //user@tesla.com
console.log(userTwo.email)      //user@tesla.com

// This is because userOne and userTwo, both are pointing (referring) directly at the value 
// Hence, there are changes in original value

/////////////////////////

//summary

/*
Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

Primitive Types:
1. Stored in stack.
2. Passed or assigned by value (call by value).
3. Changes to copies don't affect the original.

Reference Types:
1. Stored in heap; accessed via references (stored in stack).
2. Changing the value through another reference affects the original.
*/