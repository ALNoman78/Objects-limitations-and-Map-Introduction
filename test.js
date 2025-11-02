//# First way to thinking 

// const obj = {
//     nextLevel : { courseId: "Level - 2"},
//     "Programming Hero" : { courseId : "Level -1"},
//     true : "this boolean key"
// }

// // console.log(obj.nextLevel);
// console.log(obj["Programming Hero"]); // we can access there what ever we want
// console.log(obj["true"]);



//  #second way

// const obj = {}

// obj.nextLevel = { courseId : "Level2"}
// obj[true] = { courseId : "Level1"} // if we declare the value like this we can access with dot notation

// console.log(obj.nextLevel)


// #third way 

// const course1 = {name : "Programming hero"}
// const course2 = {name : "Next Level Development"}

// const obj = {}

// obj[course1] = {courseId : "level1"}
// obj[course2] = { courseId : "Level2"}

// // console.log(obj[course]) // i can access with that also i have another option 
// console.log(obj["[object Object]"]) // here is the another way


// Best practice and the better solution

const course1 = {name : "Programming hero"}
const course2 = {name : "Next Level Development"}

const map = new Map();

map.set(course1 , { courseId: "level1"})
map.set(course2 , { courseId: "level2"})

// map.clear() // it will clear all things what reserve inside the map

// map.size [ how many user or data inside this ] 
// map.delete(course1)
// map.has(course1) 


// console.log(map.has(course1))

map.forEach((value, key) => {
    console.log("key : ", key , "Value : ", value)
    console.log(`key : ${key} and Value : ${value}`)
})