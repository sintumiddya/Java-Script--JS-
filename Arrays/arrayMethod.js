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

// splice(): adds/removes elements from an array
mergedArray.splice(2, 1, "Strawberry", "Blueberry");
console.log(mergedArray);
