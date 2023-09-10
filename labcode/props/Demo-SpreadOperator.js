
const strArray = ['My', 'name', 'is', 'Jack'];

console.log(strArray);   // ["My", "name", "is", "Jack"]
console.log("Demonstrating the spread operator"); 
console.log(...strArray); // My name is Jack
// Using the spread operator is equivalent to writing
console.log(strArray[0], strArray[1], strArray[2], strArray[3]);

console.log("Extracting specific values from any array using the spread operator"); 
let [firstWord, secondWord, ...otherWords] = strArray;
console.log("firstWord : ",firstWord); // My
console.log("secondWord : ",secondWord); // name
console.log("otherWords : ",otherWords); // [ 'is', 'Jack' ]

console.log("Combining values from multiple arrays into a larger array"); 
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined); // [ 1, 2, 3, 4, 5, 6 ]

let person = {
    name : "Superman",
    age : 30,
    married: false,
    salary : 46.35
}
console.log("Extracting specific values from any object using the spread operator"); 
let {name, ...others} = person;
console.log(name); // Superman
console.log(others); // { age: 30, married: false, salary: 46.35 }

let {salary, ...more} = person;
console.log(salary); // 46.35
console.log(more); // { name: 'Superman', age: 30, married: false }

console.log("Combining properties from multiple objects into a larger object");
let obj1 = { x : 1, y : 2 };
let obj2 = { z : 3 };
let obj3 = {...obj1, ...obj2};
console.log(obj3); // {x: 1, y: 2, z: 3}

console.log("Using the spread operator as a rest parameter");
console.log("Supports the passing of variable number of arguments to a function");
function printNums(...nums) {
    console.log(nums);
}

printNums(3); // [3]
printNums(4, 5, 6); // [4, 5, 6]


