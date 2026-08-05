// let array=[1,2,3,4,5,6]; // array in imutable
// array[0]=7;
// console.log(array);


// print the array items
// print the array item using for loop
let Fruits=["Apple","Banana","Guava","Graps","Orange"];
let len = Fruits.length;
for(let i=0; i<len;i++){
    console.log(Fruits[i]);
}


// print the array item using for of loop

let students = ["Ram","Shyam","Rahul","Kunal"];
for(let student of students){
    console.log(student.toUpperCase());
}