h = +prompt('часы');
m = +prompt('минуты');
s = +prompt('секунды');
function seconds (h, m, s) {
return (h * 3600) + (m * 60) + s
}
console.log(seconds(h, m, s));