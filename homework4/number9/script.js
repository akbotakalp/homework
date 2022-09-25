let s = +prompt()

function time (s) {
    h = Math.floor(s / 3600) % 24
    m = Math.floor(s / 60) % 60
    s = s % 60
    if (h < 10) {
        h = '0' + h
    }
    if (m < 10) {
        m = '0' + m
    }
    if (s < 10) {
        s = '0' + s
    }
    return h + ':' + m + ':' + s
}

console.log(time(s));