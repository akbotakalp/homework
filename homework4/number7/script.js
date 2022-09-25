let h = +prompt()
let m = +prompt()
let s = +prompt()
function time (h, m, s) {
    if (h < 10) {
        h = '0' + h 
    }
    if (m < 10) {
        m = '0' + m 
    }
    if (s < 10) {
        s = '0' + s
    }
    return (h + ':' + m + ':' + s)
}

console.log(time(h, m, s));
