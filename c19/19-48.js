function Person (name) {
    this.name = name;
}

const me = new Person('kim');

const parent = {};

me.__proto__ = parent
console.log(me instanceof Person);
console.log(me instanceof Object);

Person.prototype = parent;
console.log(me instanceof Person);
console.log(me instanceof Object);
