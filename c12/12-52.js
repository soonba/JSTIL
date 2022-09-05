function repeat(a, f) {
    for (let i = 0; i < a; i++) {
        let result = f(a);
        console.log("result = " + result);
    }
}

repeat(3, function (a) {
    console.log(a);
    return a+5;
});