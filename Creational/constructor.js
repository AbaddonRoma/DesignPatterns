// “A constructor is a special method used to initialize a newly created object once the 
// memory has been allocated for it. In JavaScript, as almost everything is an object, 
// we’re most often interested in object constructors.”

//  a) Traditional "function" based syntax

function Person(name,age) {
    this.name = name;
    this.age = age;
    this.getDetails = function () {
        console.log(`${this.name} is ${this.age} years old!`);

    }
}

//  b) ES6 "class" syntax

class PersonES6 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getDetails = function () {
            console.log(`${this.name} is ${this.age} years old!`);
        };
    }
}

//Creating new instance of Person
const personOne = new Person('John',20);
personOne.getDetails(); // Output - “John is 20years old!”

const personOneES6 = new PersonES6('Patrik ES6', 30);
personOneES6.getDetails(); // Output - “Patrik ES6 is 30years old!”
