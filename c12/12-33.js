// 매개변수 primitive는 원시 값을 전달받고, 매개변수 obj는 객체를 전달받는다.
function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
}

let primitive = 10;
let obj = {
    name: 'Lee'
}

console.log(primitive);
console.log(obj);

changeVal(primitive,obj);

console.log("after...");
console.log(primitive);
console.log(obj);

