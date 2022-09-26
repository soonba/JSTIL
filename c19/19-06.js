const obj = { y : 3 };
const parent = { x: 4 };


obj.__proto__ = parent;
console.log(obj.x);
console.log(Object.getOwnPropertyDescriptors(obj));
console.log(Object.getPrototypeOf(obj));
const obj2 = {};
console.log(Object.getPrototypeOf(obj2));
console.log(obj2.x);

