/*
For a given array of numbers, print the squer of each value 
using the forEach loop.
*/

let num = [2,,3,4,5,6,7,8,9];

// num.forEach(function printVal(val){
//     let squreNum = val*val;
//     console.log(val, squreNum);
// })

// collback function
// num.forEach((num)=>{
//     console.log(num*num);
// })




// pass a function
let calSqure = (num)=>{
    console.log(num*num);
}

num.forEach(calSqure);