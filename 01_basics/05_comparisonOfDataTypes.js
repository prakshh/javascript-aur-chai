
console.log(2>1)            //true
console.log("2" > 1)        //true
console.log("02" > 1)       //true

console.log(null > 0)       //false
console.log(null == 0)      //false
console.log(null >= 0)      //true //why  //even chatgpt got confused
/*
in JavaScript, comparison operators (>, >=, <, <=) converst null to a number 0
            and equality operator (==) doesn't convert null to 0 
*/

console.log(undefined > 0)       //false
console.log(undefined == 0)      //false
console.log(undefined >= 0)      //false
console.log(undefined < 0)       //false

console.log(2 == 2)
console.log(2 === 2)
console.log("2" === 2)