
let value = 3
let negValue = -value
console.log(negValue)       //-3

let str1 = 'Hello'
let str2 = ' Tony'
let str3 = str1 + str2 
console.log(str3)           //Hello Tony

console.log("1" + 2)        //12
console.log(1 + "2")        //12
console.log("1" + 2 + 2)    //122
console.log(1 + 2 + "2")    //32

//explanation in depth
//https://tc39.es/
//https://tc39.es/ecma262/multipage/abstract-operations.html

console.log(true)       //true
console.log(+true)      //1
//console.log(true+)    //SyntaxError: Unexpected token ')'
console.log("")         //a blank space
console.log(+"")        //0 -> + converts the empty space to number

let num1, num2, num3
num1 = num2 = num3 = 2 + 2  // another example of bad coding

let gameCounter = 100
console.log(gameCounter++)
console.log(gameCounter)
console.log(++gameCounter)
console.log(gameCounter)

//explanation in depth
//prefix and postfix js mdn
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
