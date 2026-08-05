// For given array with marks of students -> [85,97,37,76,60]
// Find the average marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
let len = marks.length;

for (val of marks) {
    // console.log(val);
    sum += val;
}

// average of the total marks 
let avg = sum / len;
console.log(`Average Marks = ${avg}`);