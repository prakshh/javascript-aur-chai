const name = 'Tony'
const repoCount = 50

console.log(name + repoCount + ' Value')    // old style of printing

console.log(`Hello, my name is ${name.toUpperCase()} and my repo count is ${repoCount}`) // new style // interpolation, using backtick

const gameName = new String('Forza Horizon 5')
console.log(gameName)       // it prints: [String: 'Forza Horizon 5']
console.log(gameName[0])    // it prints: F