//1. 객체와 함수의 Property 비교
const foo = {
    age: 1,
    name: 'Kim',
}
console.log(foo);
console.log(Object.getOwnPropertyDescriptors(foo));
console.log("===================================");
const boo = function () {
    console.log('boo!');
}
boo();
console.log(Object.getOwnPropertyDescriptors(boo));

//2. 일반 함수로서의 호출시 global이 this에 바인딩 됨을 보여줌
function too(rad) {
    this.rad = rad;
}
too(5);
console.log(global);


// 3. 일반 함수가 프로퍼티를 갖음
const koo = function (test) {
    this.tt = test;
    console.log('koo !!');
}

koo.prop = 'abcd';

const kooI = new koo('테스트');
console.log('tt ='+ kooI.tt);
console.log(Object.getOwnPropertyDescriptors(koo));
