/*
    Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"

    1)- Remove the first company form the array

    2)- Remove Uber & Ola i its place

    3)- Add Amazon at the end 

*/


let Companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
//delete
Companies.shift();
console.log(Companies);

//Remove Uber & Ola i its place
let repCom = Companies.splice(1,1,"Ola");
console.log(Companies);


//Add Amazon at the end 
Companies.push("Amazon");
console.log(Companies);