//일반 함수 정의 : 함수 선언문, 함수 표현식
function foo() {}
const bar = function () {};

//프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. 이는 메서드로 인정하지 않는다.
const baz = {
    x: function () {}
}

//일반 함수로 정의된 함수만이 constructor 이다.
const a = new foo();
const b = new bar();
const c = new baz.x();
console.log(a);
console.log(b);
console.log(c);

//화살표함수
const arrow = () => {};
// new arrow(); // arrow is not a constructor

//ES6 메서드축약
const obj = {
    x() {}
};

// new obj.x(); // is not a constructor



