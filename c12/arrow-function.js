//?...
const person2 = {
    name: 'Nam',
    age : 28,
    sayHi : () => {
        console.log(this.name);
        console.log(this.age);
    }
}

person2.sayHi();

const person3 = {
    name: 'Nam',
    age : 28,
    sayHi : function () {
        console.log(this.name);
        console.log(this.age);
    }
}

person3.sayHi();