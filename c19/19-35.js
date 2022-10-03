function Foo() {
    this.age = 10;
}

const foo1 = new Foo();
console.log(foo1.hasOwnProperty('age'));

for (let i = 0; i < 2; i++) {
    function Boo() {
        this.age = 20;
    }
    for (let j = 0; j < 2; j++) {
        const boo1 = new Boo();
        console.log(boo1.hasOwnProperty('age'));
    }
}
