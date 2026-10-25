/*
Q.
    You are reationg a website for your college. Create a class
    User with 2 peoperties, name & email It also has a method called 
    viewData() that allows user to view website data.
*/


class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }


    // view data method 
    viewData(name, email) {
        console.log(`your name is :${this.name}`);
        console.log(`Your email id is : ${this.email}`);
    }
}

// create user class object 
let student1 = new User("Sintu", "sintu@gmail.com");
let student2 = new User("Ram", "ram@gmail.com");
student1.viewData();
student2.viewData();

