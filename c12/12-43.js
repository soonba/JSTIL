function countDown(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
}

countDown(10);

function countDownRecursive(n) {
    if ( n < 0 ) return;
    console.log(n);
    countDownRecursive(n-1);
}

countDownRecursive(10);


function factorial(n) {
    if(n <= 1) return 1;
    return n * factorial(n-1);
}


console.log(factorial(6));