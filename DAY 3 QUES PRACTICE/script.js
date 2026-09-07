//SECTION 1: Objects and OOPS Thinking (Foundation)

//create a user object that stores name nd email and has login method which prints "user logged in" .
let user = {
    name : "Ankit",
    email : "ankit@example.com",
    login: function(){
        console.log("user logged in");
    },
};
user.login();


//Imagine you now have 5 users.
//First, think how you would manage them without using a class.
//Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.
class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }    
    loggedIn(){  //shared memory/prototype(coomon chize shared memory me hogi jaise ki login method)
        console.log("user logged in");
    }
}
let user1 = new User("ant", "ankit@exampe.com");
let user2 = new User("harshit", "ankt@example.com");
let user3 = new User("cnkit", "akit@example.com");
let user4 = new User("aka", "ansddt@example.com");
let user5 = new User("amit", "aaskit@example.com");


//Create a product object that stores name and price and has a method which returns the final price after discount.
let product = {
    name : "laptop",
    price : 100000,
    discountedPrice: function(){
        return this.price - 20000; // function ke andar this ka mtlb usi object ke product ka price hoga
    },
};
console.log(product.discountedPrice());  // return likha hai toh print krna pdega



//SECTION 2: Classes and Objects

//Create a Car class with the following:
//brand
//speed
//a drive method that prints the car brand and speed
class Car {
    constructor(speed, brand){
        this.speed = speed;
        this.brand = brand;
    }
    drive(){
        return this.brand + " - " + this.speed;
    }
}
let car1 = new Car(200, "BMW");



//SECTION 3: Constructor and this keyword

//Create a Student class whose constructor accepts name and roll number.
//Add a method introduce that prints both values.
class Student {
    constructor(name, rollNo){
        this.name = name;
        this.rollNo = rollNo; 
    }
    introduce(){
        return this.name + "-" + this.rollNo
    }
}
let std1 = new Student("abi", 123);



//Inside the constructor, set values using this.
//Create an object with two methods:
//One method using a normal function
//One method using an arrow function
//Inside both, print this and observe the difference.
let obj = {
    sayName: function(){
        console.log(this);
    },
    sayArrowName: () => {
        console.log(this);
    },
};
obj.sayArrowName();  //window
obj.sayName();       //object


//SECTION 4: Constructor Functions and Prototypes
//Create a User constructor function (do not use class syntax).

//bina class ke bhi constructor fun bnata hai
//es6 se pehle class nahi aaya tha toh aise bnata tha constructor fun:
function User2(){
    this.name = "Ankit"
}
let a2 = new User2();


//Add a login method in two ways:
//First, inside the constructor
function User3(){
    this.name = "Ankit";
    this.login = function() {
        console.log ("Logged In")
    }
}

let an1 = new User3();

//Then, move the method to the prototype
function User4(){
    this.name = "Ankit";
}

user4.prototype.loggedin = function() {
    console.log("loggedin");
};

let an2 = new User4();
