let count1 = 0;
let count2 = 0;

function inc(n) {
    return ++n;
}

function inc2() {
    return ++count2;
}

console.log(count2);
inc2();
console.log(count2);