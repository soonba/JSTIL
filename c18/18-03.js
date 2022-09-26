function square(number) {
    console.log(arguments);
    return number * number;
}

const obj = {
    name: 'Kim',
    age: 29
}

console.log(Object.getOwnPropertyDescriptors(square));
console.log(Object.getOwnPropertyDescriptors(obj));

square(5,10);
