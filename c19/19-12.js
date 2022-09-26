const Person = name => {
    this.name =name ;
}

console.log(Object.getOwnPropertyDescriptors(Person));
const obj = {
    foo() {},
    boo: function () {
        console.log(dd);
    }
}
console.log(Object.getOwnPropertyDescriptors(obj.foo));
console.log(Object.getOwnPropertyDescriptors(obj.boo));