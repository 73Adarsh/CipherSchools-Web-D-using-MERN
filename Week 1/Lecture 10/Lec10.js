// // Objects

// // a. Object Literal 
// let person = {
//     firstName: "Adarsh",
//     lastName: "Pal",

//     getFullName: function(){
//         return `The name of the person is ${person.firstName} ${person.lastName}`
//     },

//     phoneNumber: {
//         mobile: "12345",
//         landline: "6789",
//     },
// };

// console.log(person.getFullName());
// console.log(person.phoneNumber.landline);


// // b. Object Constructor
// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// let person1 = new Person("Adarsh", "Pal");
// let person2 = new Person("Anoop", "Pal");
// console.log(person1.firstName);
// console.log(`${person2.firstName} ${person2.lastName}`);



// // c. Object.create()
// const coder = {
//     isStuding: false,
//     printIntroduction: function() {
//         console.log(`My name is ${this.name}. Am I studying?: ${this.isStuding}`);
//     }
// };

// const me = Object.create(coder);
// me.name = "Adarsh Pal";
// me.isStuding = true;

// me.printIntroduction();



// // Classes

// class Vehicle{
//     constructor(name, maker, engine){
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine;
//     }

//     getDetails(){
//         return `The name of the Vehicle is ${this.name}`;
//     }

// }

// let v1 = new Vehicle("Creata", "Hyundai", "2500cc");
// let v2 = new Vehicle("Q5", "Audi", "3000cc");

// console.log(v1.name);
// console.log(v2.maker);
// console.log(v1.getDetails());



// //Encapsulation
// class Employee{
//     constructor(name, id){
//         this.name = name;
//         this.id = id;
//     }

//     addAddress(address){
//         this.address = address;
//     }

//     getDetails(){
//         console.log(`Name is: ${this.name}, and address is: ${this.address}`);
//     }    
// }

// let emp1 = new Employee("Santanu", 24);
// emp1.addAddress("Kolkata");
// emp1.getDetails();



// // Abstraction

// class newEmp{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;

//         let getDetails_NoAccess = function(){ //it will give error in place of "let " use "this."
//             return `first name is: ${this.firstName} and last name is : ${this.lastName}`;
//         };

//         this.getDetails_Access = function(){
//             return `first name is: ${this.firstName} and last name is : ${this.lastName}`;
//         };
//     }
// }

// let newEmp1 = new newEmp("Shantanu", "Shubham");
// console.log(newEmp1.firstName);
// console.log(newEmp1.getDetails_NoAccess());
// console.log(newEmp1.getDetails_Access());



// Inheritance

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getDetails = function(){
        return `First name is: ${this.firstName} and the Last name is : ${this.lastName}`;
    };
}

class Student extends Person{
    constructor(firstName, lastName, rollNumber){
        super(firstName, lastName);
        this.rollNumber = rollNumber;
    }

    getDetails = function(){
        return `First name is: ${this.firstName} and the Last name is : ${this.lastName} and the roll number is : ${this.rollNumber}`;
    };
}

let person1 = new Person("Shantanu", "Shubham");
console.log(person1.firstName);
console.log(person1.getDetails());

let student1 = new Student("Anoop", "Pal", 20);
console.log(student1.getDetails());

