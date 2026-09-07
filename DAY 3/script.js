//class expression  -> bina class name diye class banai ja sakti hai

//let an2 = new Animal(); -> hoisting is not possible in class expression
let Animal =  class{
    constructor(){
        this.name = "dogo"
        this.breed = "german shepherd"
    }
};
let an1 = new Animal();


//Inheritance -> inheritance ka matlab hai ek class ke andar dusri class ke properties aur methods ko use karna.
class Animal1{
    constructor(){
        this.legs = 2;
        this.hands = 2;
    }
    eat(){}
    breathe(){}
}

class Kekda extends Animal1{  // Kekda class Animal1 class ko inherit kar rahi hai or apne naye features add kar rahi hai jaise susu method, eat and breathe methods ko bhi inherit kar rahi hai.
    constructor(){
        super(); // Call the parent class constructor
        this.legs = 8;
        this.hands = 0;
    }
    susu(){}  
}
let k1 = new Kekda();

//setter and getter -> setter ka use karte hai to set the value of a property and getter ka use karte hai to get the value of a property.
class Person{
    constructor(){
        this._age = 12;
    }

    set age(val){   // yaha hame kuchh bhi age ki jagah kuchh bhi variable name de sakte hai, lekin convention ke hisab se age hi use karte hai.
        if (val < 0){
            console.error("not valid age");
            return; // code ko aage nahi chalne nahi dega
        }
        this._age = val;
        return this._age;
    }
    get age(){
        return this._age;
    }
}
let a1 = new Person();

a1.age = 24; // setter ko call karega nd yaha age use kiya hai kyuki setter me age ka use kiya hai, lekin internally _age property ko set karega.
console.log(a1.age); // automatically getter ko call karega nd yaha age use kiya hai kyuki getter me age ka use kiya hai, lekin internally _age property ko get karega. aur automatically age ki value ko return karega.