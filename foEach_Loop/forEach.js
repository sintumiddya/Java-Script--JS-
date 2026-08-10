/*
forEach Loop in Arrays
----------------------


    arr.foEacch(callBackFunction)

    CallbackFunction : Here, it is a function to execute for each element in the array

    *A callback is a function passed as an argument to another function.

    Basically foEach loop use in array

*/
// Example 

let arr=[1,2,3,4,5,6];

arr.forEach(function printVal(val,idx,arr){
    console.log(val, idx, arr);
})