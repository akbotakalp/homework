
function number (a, b) {
    if (a < b) {
        return '-1'
    }
    else if (a > b) {
        return '1'
    }
    else if (a === b) {
        return '0'
    }
}

let a = +prompt()
let b = +prompt()
console.log(number(a, b));