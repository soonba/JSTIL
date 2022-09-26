console.log(Object.getOwnPropertyDescriptors(function () {}));
console.log(Object.getOwnPropertyDescriptors({}));

class foo {

    constructor() {
        this.a = 1;
        this.b = 2;
    }

    a;
    b;

    add(c) {
        return this.a+this.b+c;
    }

}

const fooI = new foo();
/*console.log(Object.getOwnPropertyDescriptors(fooI));
console.log(Object.getOwnPropertyDescriptors(foo));
console.log(fooI.add(10));*/
