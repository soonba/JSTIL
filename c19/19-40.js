const Person = (function() {
    function Person(name) {
        this.name = name;
    }

    Person.prototype = {
        constructor: Person,
        h() {
            console.log('ddd');
        }
    }
    return Person;
}());

const mei = new Person('Kim');
console.log(mei.constructor);
console.log(mei.__proto__);