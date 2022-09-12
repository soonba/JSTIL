const person = {
    name: 'Lee',
    age: 28,
}
console.log(Object.getOwnPropertyDescriptor(person,'name'));
console.log(Object.getOwnPropertyDescriptors(person));
