const name = 'Tony'
const repoCount = 50

console.log(name + repoCount + ' Value')    // old style of printing

console.log(`Hello, my name is ${name.toUpperCase()} and my repo count is ${repoCount}`) // new style // interpolation, using backtick

const gameName = new String('Forza-Horizon 5')
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

const newString = gameName.substring(0, 4)
console.log(newString)  //Forz  // The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring