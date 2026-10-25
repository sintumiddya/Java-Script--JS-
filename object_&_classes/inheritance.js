/*
INHERITANCE IN JS 
..................

Inheritance is passing down properties  & methods form parent class to chiild class.

Syntax:
........

clss Parent{

}

 class Child extends Parent{

}


*** If Chlid & Parent have same method , child's 
    method will be used. [Method Overriding]
*/


// class Parent{
//     hello(){
//         console.log("Hello from Parent");
//     }
// }

// class Child extends Parent{
    
// }

// let child = new Child();
// child.hello();




// example 2
class Person{
    constructor(){
        this.spicies = "Homo Sapiens";
    }

    eat(){
        console.log("Person can eat");
    }

    sleap(){
        console.log("Person can sleap");
    }

    work(){
        console.log("do nothing ......");
    }
}

class Engineer extends Person{
    work(){
        console.log("Engineer solve the problem");
    }
}


 class Doctor extends Person {
    work(){
        console.log("Treat Present");
    }
 }

let p1 = new Person();
let sintu = new Engineer();
sintu.work();
sintu.eat();

