function rectangle(a, b) {
    if (a * b) {
        return a * b
    }
    else if (b * b) {
        return b * b
    }
    else {
        return a * a
    }
}
let a = +prompt()
let b = +prompt()
console.log(rectangle(a,b));
