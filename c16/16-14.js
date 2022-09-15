function deepFreeze(target) {
    if(!(typeof target === 'object')) {
        console.log('객체가 아닙니다.')
        return target;
    }
    Object.freeze(target);
    Object.keys(target).forEach( key => {
        // console.log('key : '+key+' typeof = '+typeof key);
        if(typeof target[key] === 'object') {
            deepFreeze(target[key]);
        }
    })
}

const person = {
    name: 'Lee',
    age: 28,
    friend: {
        name: 'Kim',
        age: 26,
    }
}

person.address = 'korea';

Object.freeze(person);
person.ignore = 'ignore By freeze'; // 무시
person.friend['add'] = 'add Property'; // add property
console.log(person);

deepFreeze(person);
person.friend.ignore = 'ignore By DeepFreeze'; // add property
console.log(person);
