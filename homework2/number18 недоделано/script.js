let h = +prompt('Введите часы')
let min = +prompt('Введите минуты')
let sec = +prompt('Введите секунды')

if (h < 10) {
    h = '0' + h
}
if (min < 10) {
    min = '0' + min
}
else if (min == undefined) {
    min = ' '
}
if (sec < 10) {
    sec = '0' + sec
}
alert(h + ':' + min + ':' + sec)