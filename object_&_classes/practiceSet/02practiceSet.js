/*
Q.2
    Create a new class called Admin which inherits from User.
    Add a new method calld editData  to Admin that allows it to edit 
    website data.

*/


class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // viewData method
    viewData(name, email) {
        console.log(`Your name is : ${this.name}`);
        console.log(`Your email is : ${this.email}`);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    // edit data method 
    editData() {
        console.log("Admin can edit the data");
    }
}

let studetn1 = new User("sintu", "sintu@gmail.com");
studetn1.viewData();

let admin1 = new Admin("admin", "admin@gmail.com");
admin1.editData();
admin1.viewData();