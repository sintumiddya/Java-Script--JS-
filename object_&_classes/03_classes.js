/*
Class In Js 
.............

Class is a program - code template for creating objects.
Those objects will have some state (variables) and behavior (functions) inside it.

class MyClass {
    constructor() {...}

    myMethod() {...}

}

let myObject = new MyClass();
*/


class ToyotaCar {
    // constructor 
    constructor(brand){
        console.log("Creatting constructor");
        this.brand = brand;
    }

    startEngine() {
        console.log("Engine Started");
    }

    stopEngine() {
        console.log("Engine Stopped");
    }
}

// creating object of ToyotaCar class
let fortuner = new ToyotaCar("fortuner");

let nexon = new ToyotaCar("nexon");
