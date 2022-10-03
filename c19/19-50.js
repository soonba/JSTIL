function Person() {
    this.name = 'Kim';
}

const me = new Person();
console.log(me instanceof Person);

Person.prototype = {
    change: "dd",
}

console.log(me instanceof Person);
const me2 = new Person();
console.log(me2 instanceof Person);

console.log(Object.getOwnPropertyDescriptors(Object.prototype));