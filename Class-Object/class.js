// class ClassName {
//     constructor() { ... }
//   }

class Animal {
    constructor(name, id, price) {
        this.name = name;
        this.id = id;
        this.price = price;
        console.log("Hello Class in JS");
    }
    eats() {
        console.log("Hello Eats");
    }
    jumps() {
        console.log("Hello jumps");
    }
}

// inheritance through Extends keywords.
class Lion extends Animal {
    constructor(name){
        super(name)
        console.log("object is created and he is a lion...");
    }
}
let l = new Animal("Shera");
console.log(l);


// console.log(new Animal);
let a = new Animal("JavaScript", "22665035", "499");

console.log(a.eats);
console.log(a.jumps);

console.log(a.name);
console.log(a.id);
console.log(a.price);

