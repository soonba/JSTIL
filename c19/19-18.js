let obj = new Object(123);
console.log(obj);
obj.a = "dd";
console.log(obj);
console.log(Object.getOwnPropertyDescriptors(obj));
let obj2 = new Number(2);
console.log(obj2);