const name = 'Tony'
const repoCount = 50

// old style of printing
console.log(name + repoCount + ' Value')    //Tony50 Value

// new style // interpolation, using backtick
console.log(`Hello, my name is ${name.toUpperCase()} and my repo count is ${repoCount}`)   //Hello, my name is TONY and my repo count is 50

const gameName = new String('ThisIsGeeksForGeeks')
console.log(gameName)       // it prints: [String: 'ThisIsGeeksForGeeks']
console.log(gameName[0])    // it prints: T

console.log(gameName.__proto__) // {}
console.log(gameName.length)    // 19

//console.log(gameName.toUpperCase)     // [Function: toUpperCase]    // function should have ()
console.log(gameName.toUpperCase())     // THISISGEEKSFORGEEKS

// console.log(gameName.charAt(z))      // ReferenceError: z is not defined
// console.log(gameName.charAt('z'))    // F
console.log(gameName.charAt(3))         // s      // charAt should have numerical value that refers to index number
console.log(gameName.indexOf('z'))      // -1     // indexOf should have character value that returns its index number



const newString = gameName.substring(5, -4)
console.log(newString)                                  //ThisI  // The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

const anotherGameName = new String('ironman')
const newString2 = anotherGameName.substring(5, -4)
console.log(newString2)                                 //ironm
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

const anotherString = gameName.slice(0, 4)
console.log(anotherString)                              //This
const anotherString2 = anotherGameName.slice(-8, 4)
console.log(anotherGameName)                            //[String: 'ironman']
console.log(anotherString2)                             //iron

// https://www.geeksforgeeks.org/difference-between-string-slice-and-string-substring-in-javascript/
// https://masteringjs.io/tutorials/fundamentals/substring-vs-slice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
//    -- mdn has best explanation

// substring is deprecated. So, always prefer slice
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

// trim - removes whitespace from both ends of this string and returns a new string, without modifying the original string.

const newStringOne = "    Nick Fury   "         
console.log(newStringOne)                       //    Nick Fury
console.log(newStringOne.trim())                //Nick Fury

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

// replace

const url = "https://jarvis.com/tony%20stark"
console.log(url.replace('%20', '-'))    //https://jarvis.com/tony-stark
console.log(url.includes('tony'))       //true
console.log(url.includes('ironman'))    //false

// split
//    - takes a pattern and divides the string into an ordered list of substrings 
//      by searching for the pattern, puts these substrings into an array, and returns the array.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

const str = 'The quick brown fox jumps over the lazy dog.';
const str2 = 'Multiverse-of-Madness'

const words = str.split(' ');
const words2 = str2.split('-');
console.log(words[3]);          //fox
console.log(words2);            //[ 'Multiverse', 'of', 'Madness' ]

const chars = str.split('');
console.log(chars[8]);          //k

const strCopy = str.split();
console.log(strCopy);           //["The quick brown fox jumps over the lazy dog."]
