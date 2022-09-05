const innerFunc = function () {
    const a = 10;
    return function (x, y) {
        return x + y + a;
    }
}
const add1 = (
    innerFunc()
);

console.log(add1(1,2));