const person = {};

Object.defineProperty(person, 'firstName', {
    value: 'Kim',
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(person, 'lastName', {
    value: 'Gil Dong',
});

//undefined
console.log(Object.getOwnPropertyDescriptor(person,'notExistName'));

console.log(Object.getOwnPropertyDescriptor(person,'firstName'));

//...디스크립터 객체의 프로퍼티를 누락시 undefined, false가 기본값이다.
console.log(Object.getOwnPropertyDescriptor(person,'lastName'));

// lastName 은 enumberable 이 false 이므로 열거되지 않음. for ... in 도 마찬가지
console.log(Object.keys(person));

// writable이 false이므로 <에러 없이> 무시된다.
person.lastName = 'Chul soo';
console.log('person.lastName = '+ person.lastName);

// configurable 이 false 이므로 삭제할 수 없다.
delete person.lastName;
console.log('person.lastName = '+ person.lastName);

// configurable 이 false 이므로 재정의 할 수 없다.
// Object.defineProperty(person,'lastName',{
//     value: 'Gil Dong',
//     enumerable: true,
// });

// 접근자 프로퍼티 getter/setter 정의
Object.defineProperty(person,'fullName', {
    get() {
        return `${this.firstName} ${this.lastName}}`;
    },
    set(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
});

//fullName이 추가됨
console.log(Object.keys(person));

console.log(Object.getOwnPropertyDescriptor(person,'fullName'));
