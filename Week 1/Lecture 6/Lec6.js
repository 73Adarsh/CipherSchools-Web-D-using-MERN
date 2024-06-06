    // var x = 15;
    // {
    //     let x = 5;
    //     console.log(x);
    // }
    // console.log(x);

// Normal Function

    // var x = function (x, y){
    //     return x+y;
    // };
    // console.log(x(5, 6));

// Arrow Function

    // const x = (x, y) =>{ // simple arrow function
    //     return x+y;
    // };

    // const y = (x, y) => x-y; //short handsun tag of an arrow function

    // console.log(x(5, 6));

//Spread Operator
    //Example - 1
    // const q1 = ["Jan", "Feb", "Mar"]
    // const q2 = ["Apr", "May", "Jun"]
    // const q3 = ["Jul", "Aug", "Sep"]
    // const q4 = ["Oct", "Nov", "Dec"]

    // const year = [...q1, ...q2, ...q3, ...q4];
    // console.log(year);
    
    //Example - 2
    // const myNumbers = [25, 12, 50, 77, -1];
    // let maxValue = Math.max(...myNumbers);
    // console.log(maxValue);
    
//For of Loop

    // Example - 1
    // const myNumbers = [25, 12, 50, 77, -1];
    // let sum = 0;
    // for(let num of myNumbers){
    //     sum = sum + num;
    // }
    // console.log(sum);
    
    // Example - 2
    // const name = "CipherSchools";
    // let text = "";
    // for(let ch of name){
    //     text += ch + " ";
    // }
    // console.log(text);

// Map Object
    // const fruits = new Map ([
    //     ["apples", 500], 
    //     ["bananas", 300], 
    //     ["Oranges", 200]
    // ]);
    // console.log(fruits);
    // console.log(fruits.get("Oranges"));

// Sets
    // const letters = new Set(); // It does not add the repeated element 
    // letters.add('a');
    // letters.add('b');
    // letters.add('a');
    // console.log(letters);

// Classes
    // class Car{
    //     constructor(name, mfgYear){
    //         this.name = name;
    //         this.mfgYear = mfgYear;
    //     }
    // }
    // const myCar1 = new Car("Mercedes",2022);
    // const myCar2 = new Car("Porsche",2020);
    // console.log(myCar1);
    // console.log(myCar2);

// Promises
    // const myFunction = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             console.log("This is inside promise")
    //             resolve();
    //         }, 2000);
    //     });
    // };

    // myFunction()
    //     .then(() => {
    //         console.log("Resolve")
    //     })
    //     .catch(()=>{
    //         console.error("Rejected");
    //     });


//Symbols Types
    // const person = {
    //     firstName: "John",
    //     lastName: "Doe",
    //     age: 30,
    //     eyeColor: "blue"
    // }
    // let id = Symbol("id");
    // person[id] = 140111;
    // console.log(person);

// Default parameter value to a function
    // const addTwoNumbers = (a, b=10) => a+b;
    // console.log(addTwoNumbers(10));
    // console.log(addTwoNumbers(10, 21));


// Function rest Parameter
    // const addNumbers = (...args) => {
    //     let sum = 0;
    //     for(let arg of args){
    //         sum += arg;
    //     }
    //     return sum;
    // };
    // console.log(addNumbers(10, 14, 16, 22, 1, 45));

