/*
 Array Methods
-----------------


-------------------------------------------------


/*

Map 

Creates a new array with the results of some operation.
The value its callback returns are used to from new array


arr.map(callbackFnx(value, index, array))

let newArr = arr.map((val)=>{

    return val*2;
    
})

*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

nums.map((val) => {
    console.log(val);
})


// create a new array from a array using by map function 

let newArray = nums.map((val) => {
    return val * 2;
})

console.log(newArray);


//--------------------------------------------------------------

/*
    Array Filter Method 

    Creates a new array to elements that give true 
    for a condition / filter 

    Eg: all even elements


    ** Syntex
    let newArr = arr.filter((val)=>{
        return val % 2 =0;
        })
*/