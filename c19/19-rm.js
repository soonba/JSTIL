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
// Object.prototype.y = 1;
// const o1 = new Object();
// console.log(o1.__proto__);
// o1.__proto__ = { x : 1 };
// console.log(o1.__proto__);
//
// const o2 = new Object();
// console.log(o2.__proto__);
// //==============================================
// function Foo () {}
// Foo.prototype.y = 1;
//
// const foo1 = new Foo();
// console.log(foo1.__proto__); // y : 1
// foo1.__proto__ = { x : 1 };  // foo1.prototype 재정의
// console.log(foo1.__proto__); // x : 1
//
// const foo2 = new Foo();
// console.log(foo2.__proto__); // y : 1


// 3. p264.객체 리터럴에 의해 생성된 객체
// Object.prototype.share = "shared value";
//
// const objA = {
//     name: 'Kim',
//     age: 28
// }
//
// console.log(objA);
// console.log(objA.share);
// const objB = {
//     name: 'Lee',
//     age: 30,
// }
// console.log(objA.__proto__);
// objB.share = "바뀜";
// console.log(objB.__proto__);
// console.log("==");
// console.log(objB.share);
// console.log(objA.share);



//4. 생성자 함수 foo() 가 있고 foo는 foo.prototype 으로 자신의 prototype에 접근할 수 있고, foo.prototype은 foo.prototype.constructor 로 foo()에 접근할 수 있다.
// function Foo() {
//     this.a = 10;
// }
// console.log(Foo.prototype.constructor);
//
// console.log(Foo.__proto__);

// 5. Object.prototype의 __proto__
console.log(Object.prototype.__proto__); // null
console.log(String.prototype.__proto__); // Object.prototype
function foo () {
    this.a = 10;
}
console.log(foo.prototype.__proto__); // Object.prototype
console.log(Object.getOwnPropertyDescriptors(Object.prototype));