function factorial(n) {
    result = n
    for (let i = n - 1; i > 1; --i) {
        result *= i;
    }
    return result;
}
let n = +prompt()
console.log(factorial(n));
