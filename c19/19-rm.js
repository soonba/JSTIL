// function Circle(rad) {
//     this.rad = rad;
// }
// Circle.prototype.getArea = function () {
//     return this.rad *2;
// }
//
// const c1 = new Circle(5);
//
// console.log(Object.getOwnPropertyDescriptors(c1)); // 얜 그냥 프로퍼티.키로 이루어진 일반적인 객체(인스턴스)
// console.log(c1.__proto__); // getArea [Function (anonymous)]
// console.log(Object.getOwnPropertyDescriptors(Circle)); // prototype 프로퍼티 존재. getArea
// console.log(Circle.__proto__); // {} ...?
// console.log(Circle.constructor); // Function : function


//2. Object 생성자함수, 객체 리터럴 초기화 차이
Object.prototype.y = 1;
const o1 = new Object();
console.log(o1.__proto__);
o1.__proto__ = { x : 1 };
console.log(o1.__proto__);

const o2 = new Object();
console.log(o2.__proto__);
//==============================================
function Foo () {}
Foo.prototype.y = 1;

const foo1 = new Foo();
console.log(foo1.__proto__); // y : 1
foo1.__proto__ = { x : 1 };  // foo1.prototype 재정의
console.log(foo1.__proto__); // x : 1

const foo2 = new Foo();
console.log(foo2.__proto__); // y : 1
