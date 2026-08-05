// find the key value payer in the object this loop

// create a object
let student = {
    name:"sintu",
    age:20,
    cgpa:7.5,
    isPass:true,
};

// apply the for in loop find the this object key and key's valudes
for(let key in student){
    console.log("key = ",key, "value = ",student[key]);
}