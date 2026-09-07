//day 1 --> class in OPPs


//ex1
class BiscuitMaker {    //Class ko tum blueprint / factory ka design samajh sakte ho.Class khud biscuit nahi hai.Class sirf batati hai ki biscuit object kaisa hoga.
    constructor() {
        this.name = "ParleG"; //Yahan this ka matlab hai:Jo object abhi ban raha hai, woh object.
        this.price = 5;
    }

    pack() {
        console.log("biscuit packed");
    }

    unpack() {
        console.log("biscuit unpacked");
    }
}

let biscuit = new BiscuitMaker();
let biscuit1 = new BiscuitMaker();

biscuit.pack();
biscuit1.unpack();



//ex2 
class Kitab {  // Ye basically bol rahi hai:"Jab bhi meri class se koi kitab ka object banega, usme name, price, author, aur color honge."
    constructor(name, price, author, color) {   // ek function jo automatic chalta hai // constructor is like sancha jise class ka naya instance banya jata hai
        this.name = name;
        this.price = price;
        this.author = author;
        this.color = color;
    }
}
let k1 = new Kitab("math", 120, "Ravi", "blue");  // same class but different instance of class
let k2 = new Kitab("science", 150, "Ramesh", "green");  //same class but different instance
let k3 = new Kitab("english", 100, "Suresh", "red"); //same class but different instance

//IN SHORT
//Class = blueprint/sancha, new = us blueprint se naya object banana, constructor = object banate waqt values set karna, this = jis current object ko banaya ja raha hai.