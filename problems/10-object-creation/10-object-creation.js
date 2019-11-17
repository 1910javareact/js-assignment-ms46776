/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//object literal
let personA = {
    name: "Maliha",
    age: 26,
}

//constructor function
function PersonFunction(name, age) {
    this.name = name
    this.age = age
}
let personB = new PersonFunction("Maliha", 26)

//es6 class
class PersonClass{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}
let personC = new PersonClass("Maliha", 26)