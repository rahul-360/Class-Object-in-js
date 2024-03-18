// class is templet/blueprint
// khali form class hota hai
// bhara hua form object hota hai


// OBJECT
let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: "Rahul",
    Hello: "world",
    Js: "world",
}

console.log(obj);
// console.log(obj.c);
// console.log(obj.Hello);


let subobj = {
    aa: "html",
    bb: "css",
    cc: "js",
}
subobj.__proto__ = obj;

console.log(subobj.a);
// console.log(subobj.aa);
// console.log(subobj.Hello);