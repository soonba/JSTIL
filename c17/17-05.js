function foo() {
    console.log(this);
}

//일반 함수로서 호출
// foo(); // global

//메서드로서 호출
// const obj = { foo }; // ES6 프로퍼티 축약 표현
// obj.foo(); // obj

//생성자함수로서 호출
const inst = new foo();
