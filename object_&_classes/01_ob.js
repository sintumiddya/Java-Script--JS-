/*
Prototypes in js :
        A javaScript object is and entity having state and behavior 
        (properties and method).

        js objects have a special property called prototype. 

        We can set prototype using__proto__


        *** if object & prototype have same method, object's method woll be used.
*/

// multiple type are exit how to create object in js

const student = {
    fullName: "sintu middya",
    marks: 990.4,
    printMarks: function () {
        console.log("marks = ", this.marks);
    },
};

student.printMarks();



