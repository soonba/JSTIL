function repeat(a, f) {
    for (let i = 0; i < a; i++) {
        f(a);
    }
}

function logAll(a) {
    console.log(a);
}

repeat(5,logAll);
