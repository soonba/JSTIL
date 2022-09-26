function Person (name) {
    this.name = name;
}
Person.prototype.isHuman = true;
const me = new Person('kim');
console.log(me.constructor === Person);
console.log(Person.__proto__);
console.log(Person.prototype.__proto__);
console.log(Object.getPrototypeOf(me));