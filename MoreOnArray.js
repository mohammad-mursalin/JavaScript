//array to string 

let myArray = ["a","b","c","d","e"];

let myString = myArray.join();

console.log(myString);

//string to array

myArray = myString.split(",");

console.log(myArray);

//concatination

const array1 = [1,2,3,4];

const array2 = [5,6,7,8];

let newArray = array1.concat(array2);

console.log(newArray);

newArray = [...array1,...array2];

console.log(newArray);

newArray = [array1,array2];   //different from the previous one

console.log(newArray);