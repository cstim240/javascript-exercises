
const fibonacci = function(num) {
    num = +num; //ensures if input is string, it is turned to an int
    if (isNaN(num) || num < 0) return "OOPS";
    if (num == 0) return 0;

    let prevNum = 0;
    let fib = 1; 

    for (let i = 1; i < num; i++){
        const temp = fib;
        fib = prevNum + fib;
        prevNum = temp;
    }

    return fib;
};

/*
const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    let a = 0;
    let b = 1;
    for (let i = 1; i < num; i++){
        const temp = b;
        b = a + b;
        a = temp;
    }
    return b;
}
*/


// Do not edit below this line
module.exports = fibonacci;
