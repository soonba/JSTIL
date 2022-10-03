Person.prototype.h = function () {
    console.log('parent h, ' + this.name);
}
const me = new Person('Kim');
me.h();
me.h = function () {
    console.log('child h, ' + this.name);
}

function Person(name) {
    this.name = name;
}

me.h();