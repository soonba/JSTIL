// 리터럴로 생성한 것은 ?
const obj = {};
const add = function (a) { return a + 1;}
const arr = [1];
const regexp = /is/ig;

console.log(obj.constructor === Object);
console.log(add.constructor === Function);
console.log(arr.constructor === Array);
console.log(regexp.constructor === RegExp);