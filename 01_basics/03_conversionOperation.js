let score1 = 33

console.log(typeof score1) //number
console.log(typeof(score1)) //number

// Conversion to Number

let score2 = "33"

console.log(typeof score2) //string
console.log(typeof(score2)) //string

let score2InNumber = Number(score2)

console.log("typeof score2InNumber is: " + typeof score2InNumber) //number
console.log("value of score2InNumber is: " + score2InNumber) //33

let score3 = "33abc"
console.log(typeof score3) //string
let score3InNumber = Number(score3)
console.log("typeof score3InNumber is: " + typeof score3InNumber) //number
console.log("value of score3InNumber is: " + score3InNumber) //NaN

let score4 = null
console.log(typeof score4) //object
let score4InNumber = Number(score4)
console.log("typeof score4InNumber is: " + typeof score4InNumber) //number
console.log("value of score4InNumber is: " + score4InNumber) //0

let score5 = undefined
console.log(typeof score5) //undefined
let score5InNumber = Number(score5)
console.log("typeof score5InNumber is: " + typeof score5InNumber) //number
console.log("value of score5InNumber is: " + score5InNumber) //Nan

let score6 = true
console.log(typeof score6) //boolean
let score6InNumber = Number(score6)
console.log("typeof score6InNumber is: " + typeof score6InNumber) //number
console.log("value of score6InNumber is: " + score6InNumber) //1

let score7 = false
console.log(typeof score7) //boolean
let score7InNumber = Number(score7)
console.log("typeof score7InNumber is: " + typeof score7InNumber) //number
console.log("value of score7InNumber is: " + score7InNumber) //0

let score8 = "Prakshh"
console.log(typeof score8) //string
let score8InNumber = Number(score8)
console.log("typeof score8InNumber is: " + typeof score8InNumber) //number
console.log("value of score8InNumber is: " + score8InNumber) //Nan

// Conversion to Boolean

let isLoggedIn = 0
console.log(typeof isLoggedIn) //number
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log("typeof booleanIsLoggedIn is: " + typeof booleanIsLoggedIn) //boolean
console.log("value of booleanIsLoggedIn is: " + booleanIsLoggedIn) //false

let yesLoggedIn = 1
console.log(typeof yesLoggedIn) //number
let booleanYesLoggedIn = Boolean(yesLoggedIn)
console.log("typeof booleanYesLoggedIn is: " + typeof booleanYesLoggedIn) //boolean
console.log("value of booleanYesLoggedIn is: " + booleanYesLoggedIn) //true

let someName = "Prakshh"
console.log(typeof someName) //string
let booleanSomeName = Boolean(someName)
console.log("typeof booleanSomeName is: " + typeof booleanSomeName) //boolean
console.log("value of booleanSomeName is: " + booleanSomeName) //true

let isBlank = ""
console.log(typeof isBlank) //string
let booleanIsBlank = Boolean(isBlank)
console.log("typeof booleanIsBlank is: " + typeof booleanIsBlank) //boolean
console.log("value of booleanIsBlank is: " + booleanIsBlank) //false

let is2Blanks = ""
console.log(typeof is2Blanks) //string
let booleanIs2Blanks = Boolean(is2Blanks)
console.log("typeof booleanIs2Blanks is: " + typeof booleanIs2Blanks) //boolean
console.log("value of booleanIs2Blanks is: " + booleanIs2Blanks) //true

