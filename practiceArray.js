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

// data sort ascending order to descending order and descending order to ascending order
const  arrSort = arr.sort((a , b) => a.localeCompare(b))
// console.log(arrSort)



// how to use use nested array from the code

const nestedArr = [1, 3, 5, 6,[] , [12 , 30, 40 , ["Noman", 21 , [11, 22 , 33 , 44, 55, [66, 77, 88, 99, ["testing"]]]]]]

const removeNestedArr = nestedArr.flat(Infinity) // flat is also a function what really remove nested array it really helpful for the big data 

console.log(nestedArr)
console.log(removeNestedArr)


// remove duplicate array for here  the data of Array [ use case like blog website or something like that


const tagFromPost = [
    ["javascript", "react", "css", "html", "frontend"],
    ["node", "express", "api", "backend", "javascript"],
    ["react", "tailwind", "css", "ui", "frontend"],
    ["python", "django", "api", "backend", "server"],
    ["nextjs", "react", "typescript", "frontend", "node"],
    ["figma", "design", "uiux", "frontend", "html"]
];

const dataFilter = [...new Set(tagFromPost.flat(Infinity))]
console.log(dataFilter.length)
// console.log(tagFromPost.flat().length); // here is the main remove duplication data 

