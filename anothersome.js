const numbers = [ 2, 4, 5, 6, 7, 8, 2 ]

const someNumbers = numbers.some((number) => number % 2 === 0) // we can find which data we have

// console.log(someNumbers)


const currentRole = [ "guest " , "editor"]
const mainRole = ["admin" , "manager "]

const role = mainRole.some((exceptRole) => currentRole.includes(exceptRole))

console.log(role)