function add(x,y) {
    console.log(arguments);
    return x+y;
}
console.log(add(2)); // 2+undefined
console.log(add(2,3,10)); // 2+3, 10 ignore
