
/* 
JavaScript data types are of 2 types 

Primitive data types
Non-primitive (Reference) data types 

Primitive : 7 types
    Number, BigInt, String, Boolean, Null, Undefined, Symbol

Non-primitive: 3 types
    Array, Object, Function

*/

const score = 100
console.log(typeof score)              //number
const scoreValue = 100.5
console.log(typeof scoreValue)         //number

const isLoggedIn = false
console.log(typeof isLoggedIn)         //boolean

const outsideTemp = null
console.log(typeof outsideTemp)        //object

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof id)                 //symbol
console.log(id == anotherId)            //false, even if same value //why?  // unique 
// console.log('id = ' + id)            //cannot convert symbol value to string
console.log('id = ', id)                //Symbol('123')
console.log('anotherId = ', anotherId)  //Symbol('123')

//In JavaScript, every symbol created by the Symbol() function is guaranteed to be unique

const bigNum = 3456789097654334n
console.log(typeof bigNum)             //bigint

////////////

// Non-primitive (Reference) data types
// Array, Object, Function

const heroes = ['ironman', 'shaktiman', 'captain america', 'captain vyom']
console.log(typeof heroes)             //object

let myObj = {
    name: 'Tony Stark',
    age: 22
}
console.log(typeof myObj)              //object

const myFunction = function() {
    console.log("Hello World")
}
console.log(typeof myFunction)          //function  //fucntion type is actually called object function

//explanation
//https://262.ecma-international.org/5.1/#sec-11.4.3



/*
Primitive DataTypes:


1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3.Boolean: Represents a binary value, either true or false, often used for conditional logic.

4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

6.Symbol (ES6): it is mostly used used to find uniqness.

7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.


Refence (Object Data Types):

1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

*/