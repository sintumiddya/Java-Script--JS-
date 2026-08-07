// Array Method in js

// Push(): add to end in the array
let vegetables = ["Potato", "Onions", "Chili", "Carrots"];
vegetables.push("Ginger");
console.log(vegetables);

// Pop(): delete from end & return
let deletedVegetable = vegetables.pop();
console.log(deletedVegetable);
console.log(vegetables);

// Unshift(): add to start in the array
vegetables.unshift("Tomato");
console.log(vegetables);

// Shift(): delete from start & return
let deletedVegetable2 = vegetables.shift();
console.log(deletedVegetable2);
console.log(vegetables);

//unshift(): add to start in the array
vegetables.unshift("Tomato");
console.log(vegetables);

// toString(): converts array to string 
let vegetableString = vegetables.toString();
console.log(vegetableString);

//concat(): merge two or more arrays
let fruits = ["Apple", "Banana", "Mango"];
let mergedArray = vegetables.concat(fruits);
console.log(mergedArray);

// slice(): returns selected elements in an array as a new array
let slicedArray = mergedArray.slice(1, 4);
console.log(slicedArray);

// splice(): adds / removes elements from an array
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let spliceNum = num.splice(1, 2, 120, 130);

// add 
let addNum = num.splice(2, 0, 111);
console.log(num);

// delete
let delNum = num.splice(3, 1);
console.log(num);

// replace 
let repNum = num.splice(3, 1, 88);
console.log(num);