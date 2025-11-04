const numbers = [1, 5, 75, 30, 20, 65, 40, 65, 10];
const fruits = [ "Apple", "Banana", "Orange", "Water Melon", "date", "cherry"]

const sortedNumber = numbers.sort((a,b) => a - b) // it's called in place sorting [ascending order ]

// if we use insted of liner number 4 code then const the main function is const sortedNumber = numbers.sort((a,b) => b- a) // [descending order]

// console.log(numbers)
// console.log(sortedNumber)


// const programmingLanguages = [
//     "JavaScript",    "Python",    "Java",
//     "C",    "C++",    "C#",    "Go",
//     "Rust",    "Ruby",    "Swift",    "Kotlin",
//     "PHP",    "TypeScript",    "Dart",    "Perl"
// ];


const arr = [
    "apple",
    "banana",
    "orange",
    "grape",
    "mango",
    "pineapple",
    "strawberry",
    "watermelon",
    "kiwi",
    "cherry",
    "blueberry",
    "peach",
    "papaya",
    "pear",
    "cumber",
    "guava"
];


const sortString = arr.sort((a,b) => a.localeCompare(b))
// console.log(sortString)


const nestedArr = [1, 3, 5, 6, [12 , 30, 40 , ["Noman", 21 , [11, 22 , 33 , 44, 55, [66, 77, 88, 99, ["testing"]]]]]]

// flat () [it will work for large data and nested array to remove nested array]

const flatArr = nestedArr.flat(Infinity)

console.log(flatArr)