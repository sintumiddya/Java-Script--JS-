//object 1
const employee = {
    calTax() {
        console.log("Tax rate is 10%");
    },
}


//ojbect 2 
const karanArjun = {
    salary: 100000,

}

// karanArjun object is inheriting employee object
karanArjun.__proto__ = employee;
karanArjun.calTax(); // Tax rate is 10%