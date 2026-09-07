// class & objects
class Bottle {
    constructor(){
        this.color ="blue";
        this.price = 100;
        this.material = "plastic";
    }
    fill(){}
    drink(){}
}

let bottle1 = new Bottle();
let bottle2 = new Bottle();

//prototype  -> shared memory which is used by all the objects of that class and used because of memory optimization

class Sketch {
    constructor(){
        this.color = "red";
        this.charachter = "doremon"
    }   
}

Sketch.prototype.speak = function(){}  //shared memory
Sketch.prototype.walk = function(){}  //shared memory

let sketch1 = new Sketch();


//this ki value in different context
//global -> window object
console.log(this);  //window object

// //function -> window object
function abcd() {
    console.log(this);  //window object
}
abcd();

// //es5 function inside object -> object  //ES5 function means the traditional JavaScript function syntax used before ES6 (2015).
let obj1 = {
    name: "Ankit",
    func: function () {  // es5 function
        console.log(this);  //obj
    }
};
obj1.func();

//es6 function inside object -> window object
let obj2 = {
    name: "Ankit",
    func: () => {   // es6 function
        console.log(this);  //window object
    }
};
obj2.func();

//es5 function inside es5 function inside object -> window object
let obj3 = {
    name: "Ankit",
    fnc: function () {
        function abc() {
            console.log(this);  //window object
        }
        abc();
    },
};
obj3.fnc();

//es6 fun inside es5 function inside object -> window object
let obj4 = {
    fnc: function () {        // ES5 function
        let abcde = () => {    // ES6 function
            console.log(this); // obj4
        };
        abcde();
    },
};
obj4.fnc();

//call, apply, bind     
//ek function mein this ki value window object hoti hai, lekin hum us function ko kisi object ke context mein call karna chahte hain, to hum call, apply, bind ka use karte hain.
let obj = {
    name : "Ankit",
    age : 22
}

//call -> it takes arguments one by one
function abcd() {
    console.log(this);
}
abcd.call(obj);  //obj

//apply -> same as call but ham esme array bhi pass kar sakte hain
function abcd2(a, b, c) {
    console.log(this, a , b, c);
}
abcd2.apply(obj, [1, 2, 3]);  //obj

//bind -> ye ek naya function return karta hai jisme this ki value bind ho jati hai
function abcd3(a, b, c) {
    console.log(this, a , b, c);
}
let newfun = abcd3.bind(obj, 1, 2, 3); 

newfun();  //obj