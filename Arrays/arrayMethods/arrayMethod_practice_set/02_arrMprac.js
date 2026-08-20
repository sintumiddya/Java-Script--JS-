/*
    Q.  Take a number n as input from user. Create an array of numbers form 1 
        to n. Use the reduce method to calculate sum of all numbers in 
        the array. Use the reduce method to calcutale product of al numbers in the array.
*/


// create the n numbers of array ...
let n = prompt("Enter the array no  ");

let arr = [];
for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}

console.log(arr);

// calculate the sum 
let sum = arr.reduce((prev, curr) => {
    return prev + curr;
});

console.log(`sum of aryas number : ${sum}`);


// calculate the factorial . 
let product = arr.reduce((prev, curr) => {
    return prev * curr;
})

console.log(`Product of array numbers : ${product} `);