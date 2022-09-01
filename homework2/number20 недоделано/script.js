let sec = +prompt('seconds')

let h = sec / 3600
let min = (sec - h * 3600) / 60
sec = sec - h * 3600 - min * 60

if (sec === h, min) {
    answer = (h < 10 ? "0" + h : h) + ":" + (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec)
    alert(answer)
}