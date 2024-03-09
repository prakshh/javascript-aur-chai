const name = 'Tony'
const repoCount = 50

console.log(name + repoCount + ' Value')    // old style of printing

console.log(`Hello, my name is ${name.toUpperCase()} and my repo count is ${repoCount}`) // new style // interpolation, using backtick

const gameName = new String('ThisIsGeeksForGeeks')
console.log(gameName)       // it prints: [String: 'Forza Horizon 5']
console.log(gameName[0])    // it prints: F

console.log(gameName.__proto__) // {}
console.log(gameName.length)    // 15

//console.log(gameName.toUpperCase)     // [Function: toUpperCase]    // function should have ()
console.log(gameName.toUpperCase())     // FORZA HORIZON 5

// console.log(gameName.charAt(z))      // ReferenceError: z is not defined
// console.log(gameName.charAt('z'))    // F
console.log(gameName.charAt(3))         // z     // charAt should have numerical value that refers to index number
console.log(gameName.indexOf('z'))      // 3     // indexOf should have character value that returns its index number



const newString = gameName.substring(5, -4)
console.log(newString)  //Forz  // The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

const anotherGameName = new String('ironman')
const newString2 = anotherGameName.substring(5, -4)
console.log(newString2)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

const anotherString = gameName.slice(0, 4)
console.log(anotherString) 
const anotherString2 = anotherGameName.slice(-8, 4)
console.log(anotherString2) 

// https://www.geeksforgeeks.org/difference-between-string-slice-and-string-substring-in-javascript/
// https://masteringjs.io/tutorials/fundamentals/substring-vs-slice
/*
substring vs slice

slice() works like substring() with a few different behaviors.

Syntax: string.slice(start, stop);
Syntax: string.substring(start, stop);
What they have in common:

If start equals stop: returns an empty string
If stop is omitted: extracts characters to the end of the string
If either argument is greater than the string's length, the string's length will be used instead.
Distinctions of substring():

If start > stop, then substring will swap those 2 arguments.
If either argument is negative or is NaN, it is treated as if it were 0.
Distinctions of slice():

If start > stop, slice() will return the empty string. ("")
If start is negative: sets char from the end of string, exactly like substr().
If stop is negative: sets stop to: string.length – Math.abs(stop) (original value), except bounded at 0 (thus, Math.max(0, string.length + stop))
*/